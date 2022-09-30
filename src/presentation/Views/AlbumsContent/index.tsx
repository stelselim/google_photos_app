import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FlatList, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {IMediaItemTypes} from '../../../@types/mediaItem.types';
import {
  IAlbumsStackParamList,
  ISharedAlbumsStackParamList,
  TAlbumsStackAlbumsContentViewProps,
} from '../../../@types/navigation.types';
import {getAlbumsContent} from '../../../client/photos';
import {onPinchHandlerStateChange} from '../../../utils/onPichHandleState';
import {MediaItem} from '../../components/MediaItem';
import {primaryBackgroundColor} from '../../styles/colors';

const AlbumsContent = () => {
  const route =
    useRoute<
      RouteProp<
        IAlbumsStackParamList | ISharedAlbumsStackParamList,
        'AlbumsContent'
      >
    >();
  const album = route.params.album;
  let nextPageToken: string | undefined;

  const width = Dimensions.get('screen').width;
  const [numColumns, setColumns] = useState(3);
  const size = (width * 0.92) / numColumns;

  const [contents, setContents] = useState<IMediaItemTypes[]>([]);

  const navigation = useNavigation<TAlbumsStackAlbumsContentViewProps>();

  const getImages = useCallback(async () => {
    navigation.setOptions({
      title: album.title,
    });
    const res = await getAlbumsContent({
      albumId: album.id,
    });
    if (res.contents.length > 0) {
      nextPageToken = res.nextPageToken;
      setContents([...contents, ...res.contents]);
    }
  }, []);

  const fetchMore = useCallback(async () => {
    if (nextPageToken) {
      const res = await getAlbumsContent({
        albumId: album.id,
        pageToken: nextPageToken,
      });
      if (res.contents.length > 0) {
        nextPageToken = res.nextPageToken;
        for (const val of res.contents) {
          if (!contents.map(e => e.id).includes(val.id)) {
            setContents([...contents, val]);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  const mediaItemOnPressed = (item: IMediaItemTypes) => {
    navigation.navigate('MediaView', {
      mediaItem: item,
    });
  };

  const renderFlatListByNumColumns = (columns: 3 | 5) => {
    return (
      <FlatList
        flex={1}
        data={contents}
        paddingTop="3"
        paddingBottom="4"
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        numColumns={columns}
        renderItem={({item}) => {
          return (
            <MediaItem
              onPressed={() => mediaItemOnPressed(item)}
              item={item}
              size={size}
            />
          );
        }}
      />
    );
  };

  return (
    <View flex={1} alignItems="center" backgroundColor={primaryBackgroundColor}>
      <PinchGestureHandler
        onHandlerStateChange={event =>
          onPinchHandlerStateChange(numColumns, event, setColumns)
        }>
        <View>
          {numColumns === 3 ? renderFlatListByNumColumns(3) : <></>}
          {numColumns === 5 ? renderFlatListByNumColumns(5) : <></>}
        </View>
      </PinchGestureHandler>
    </View>
  );
};

export {AlbumsContent};
