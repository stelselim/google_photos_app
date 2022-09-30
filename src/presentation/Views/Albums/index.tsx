import {useNavigation} from '@react-navigation/native';
import {View} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {IAlbum} from '../../../@types/albums.types';
import {TAlbumsStackAlbumsProps} from '../../../@types/navigation.types';
import {getAlbums} from '../../../client/photos';
import {useAppDispatch, useAppSelector} from '../../../hooks/useAppSelector';
import {addAlbums} from '../../../store/albumsReducers';
import {onPinchHandlerStateChange} from '../../../utils/onPichHandleState';
import {GridViewFlatList} from '../../components/GridviewFlatList';
import {primaryBackgroundColor} from '../../styles/colors';

const Albums = () => {
  let nextPageToken: string | undefined;
  const [numColumns, setColumns] = useState(2);

  const albums = useAppSelector(state => state.albums.albums);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<TAlbumsStackAlbumsProps>();

  const fetchAlbums = useCallback(async () => {
    const res = await getAlbums();
    if (res.albums.length > 0) {
      nextPageToken = res.nextPageToken;
      dispatch(addAlbums(res.albums));
    }
  }, []);

  const fetchMore = useCallback(async () => {
    if (nextPageToken) {
      const res = await getAlbums({
        pageToken: nextPageToken,
      });
      if (res.albums.length > 0) {
        nextPageToken = res.nextPageToken;
        dispatch(addAlbums(res.albums));
      }
    }
  }, []);

  useEffect(() => {
    fetchAlbums();
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

export {Albums};
