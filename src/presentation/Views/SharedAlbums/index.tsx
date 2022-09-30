import {useNavigation} from '@react-navigation/native';
import {View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {IAlbum} from '../../../@types/albums.types';
import {TSharedAlbumsStackSharedAlbumsProps} from '../../../@types/navigation.types';
import {getSharedAlbums} from '../../../client/photos';
import {useAppDispatch, useAppSelector} from '../../../hooks/useAppSelector';
import {addSharedAlbums} from '../../../store/sharedAlbumsReducers';
import {onPinchHandlerStateChange} from '../../../utils/onPichHandleState';
import {GridViewFlatList} from '../../components/GridviewFlatList';
import {primaryBackgroundColor} from '../../styles/colors';

const SharedAlbums = () => {
  let nextPageToken: string | undefined;
  const [numColumns, setColumns] = useState(2);

  const albums = useAppSelector(state => state.sharedAlbums.albums);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<TSharedAlbumsStackSharedAlbumsProps>();

  const fetchSharedAlbums = useCallback(async () => {
    const res = await getSharedAlbums();
    if (res.albums.length > 0) {
      nextPageToken = res.nextPageToken;
      dispatch(addSharedAlbums(res.albums));
    }
  }, []);

  const fetchMore = useCallback(async () => {
    if (nextPageToken) {
      const res = await getSharedAlbums({
        pageToken: nextPageToken,
      });
      if (res.albums.length > 0) {
        nextPageToken = res.nextPageToken;
        dispatch(addSharedAlbums(res.albums));
      }
    }
  }, []);

  useEffect(() => {
    fetchSharedAlbums();
  }, []);

  const albumsItemOnPressed = (item: IAlbum) => {
    navigation.navigate('AlbumsContent', {album: item});
  };

  return (
    <View flex={1} alignItems="center" backgroundColor={primaryBackgroundColor}>
      <PinchGestureHandler
        onHandlerStateChange={event =>
          onPinchHandlerStateChange(numColumns, event, setColumns)
        }>
        <View size={'full'}>
          {numColumns === 2 ? (
            <GridViewFlatList
              numColumns={numColumns}
              data={albums}
              fetchMore={fetchMore}
              itemOnPressed={item => albumsItemOnPressed(item as IAlbum)}
            />
          ) : (
            <View />
          )}
          {numColumns === 3 ? (
            <GridViewFlatList
              numColumns={numColumns}
              data={albums}
              fetchMore={fetchMore}
              itemOnPressed={item => albumsItemOnPressed(item as IAlbum)}
            />
          ) : (
            <View />
          )}
        </View>
      </PinchGestureHandler>
    </View>
  );
};

export {SharedAlbums};
