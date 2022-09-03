import { FlatList, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { IMediaItemTypes } from '../../../@types/mediaItem.types';
import { getLibraryContents } from '../../../client/photos';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { addContents } from '../../../store/libraryContentReducers';
import { onPinchHandlerStateChange } from '../../../utils/onPichHandleState';
import { MediaItem } from '../../components/MediaItem';


const Photos = () => {
  let nextPageToken: string | undefined;

  const width = Dimensions.get("screen").width;
  const [numColumns, setColumns] = useState(3);
  const size = (width * 0.92) / numColumns;

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


  const renderFlatListByNumColumns = (columns: 3 | 5) => {
    return <FlatList
      flex={1}
      data={contents}
      paddingTop="3"
      paddingBottom="4"
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
      numColumns={columns}
      renderItem={({ item }) => {
        return <MediaItem onPressed={() => mediaItemOnPressed(item)} item={item} size={size} />
      }} />
  }

  return (
    <View flex={1} alignItems="center" backgroundColor={"lightBlue.50"} >
      <PinchGestureHandler
        onHandlerStateChange={(event) => onPinchHandlerStateChange(numColumns, event, setColumns)}>
        <View>
          {
            numColumns === 3 ?
              renderFlatListByNumColumns(3) : <></>
          }
          {
            numColumns === 5 ?
              renderFlatListByNumColumns(5) : <></>
          }
        </View>
      </PinchGestureHandler>
    </View>
  );
};

export { Photos };
