import {useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {IMediaItemTypes} from '../../../@types/mediaItem.types';
import {TPhotoStackPhotosProps} from '../../../@types/navigation.types';
import {getLibraryContents} from '../../../client/photos';
import {useAppDispatch, useAppSelector} from '../../../hooks/useAppSelector';
import {addContents} from '../../../store/libraryContentReducers';
import {onPinchHandlerStateChange} from '../../../utils/onPichHandleState';
import {MediaItem} from '../../components/MediaItem';
import {primaryBackgroundColor} from '../../styles/colors';

const Photos = () => {
  let nextPageToken: string | undefined;

  const width = Dimensions.get('screen').width;
  const [numColumns, setColumns] = useState(3);
  const size = (width * 0.92) / numColumns;

  const contents = useAppSelector(state => state.libraryContents.contents);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<TPhotoStackPhotosProps>();

  const getImages = useCallback(async () => {
    const res = await getLibraryContents();
    if (res.contents.length > 0) {
      nextPageToken = res.nextPageToken;
      dispatch(addContents(res.contents));
    }
  }, []);

  const fetchMore = useCallback(async () => {
    if (nextPageToken) {
      const res = await getLibraryContents({
        pageToken: nextPageToken,
      });
      if (res.contents.length > 0) {
        nextPageToken = res.nextPageToken;
        dispatch(addContents(res.contents));
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
      <FlatList<IMediaItemTypes>
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

export {Photos};
