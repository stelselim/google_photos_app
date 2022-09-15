import { FlatList, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { IMediaItemTypes } from '../../../@types/mediaItem.types';
import { getLibraryContents } from '../../../client/photos';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { addContents } from '../../../store/libraryContentReducers';
import { onPinchHandlerStateChange } from '../../../utils/onPichHandleState';
import { GridViewFlatList } from '../../components/GridviewFlatList';
import { MediaItem } from '../../components/MediaItem';


const Photos = () => {
  let nextPageToken: string | undefined;
  const [numColumns, setColumns] = useState(3);

  const contents = useAppSelector((state) => state.libraryContents.contents);
  const dispatch = useAppDispatch();

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

  //TODO: 
  // Navigtate Media View for video or photo.
  // Request media item data as PhotoMediaItem or VideoMediaItem
  // Video: Play,mute, stop... download to gallery.
  // Photo: Zoom, vs. download to gallery.
  const mediaItemOnPressed = (item: IMediaItemTypes) => {
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
                data={contents}
                fetchMore={fetchMore}
                itemOnPressed={(item) => mediaItemOnPressed(item as IMediaItemTypes)}
              /> : <View />
          }
          {
            numColumns === 5 ?
              <GridViewFlatList
                numColumns={numColumns}
                data={contents}
                fetchMore={fetchMore}
                itemOnPressed={(item) => mediaItemOnPressed(item as IMediaItemTypes)}
              /> : <View />
          }
        </View>
      </PinchGestureHandler>
    </View>
  );
};

export { Photos };
