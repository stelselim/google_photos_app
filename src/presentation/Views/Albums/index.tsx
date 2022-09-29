import { Box, View, VStack } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { IAlbum } from '../../../@types/albums.types';
import { getAlbums } from '../../../client/photos';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { addAlbums } from '../../../store/albumsReducers';
import { onPinchHandlerStateChange } from '../../../utils/onPichHandleState';
import { GridViewFlatList } from '../../components/GridviewFlatList';

const Albums = () => {
  let nextPageToken: string | undefined;
  const [numColumns, setColumns] = useState(3);

  const albums = useAppSelector((state) => state.albums.albums);
  const dispatch = useAppDispatch();

  const fetchAlbums = useCallback(async () => {
    const res = await getAlbums();
    console.log(res.albums.length);
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

  //TODO: Create Album view screen
  const albumsItemOnPressed = (item: IAlbum) => {
    console.log(item.id);
  }

  return (
    <View flex={1} alignItems="center" backgroundColor={"lightBlue.50"} >
      <PinchGestureHandler
        onHandlerStateChange={(event) => onPinchHandlerStateChange(numColumns, event, setColumns)}>
        <View flex={1}>
          {
            numColumns === 3 ?
              <GridViewFlatList
                numColumns={numColumns}
                data={albums}
                fetchMore={fetchMore}
                itemOnPressed={(item) => albumsItemOnPressed(item as IAlbum)}
              /> : <View />
          }
          {
            numColumns === 5 ?
              <GridViewFlatList
                numColumns={numColumns}
                data={albums}
                fetchMore={fetchMore}
                itemOnPressed={(item) => albumsItemOnPressed(item as IAlbum)}
              /> : <View />
          }
        </View>
      </PinchGestureHandler>
    </View>
  );
};


export { Albums };

