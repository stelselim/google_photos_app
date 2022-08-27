import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {IAlbum} from '../../../@types/albums.types';
import {IMediaItemTypes} from '../../../@types/mediaItem.types';
import {IPhotoMediaItemTypes} from '../../../@types/photoMediaItem.types';
import {IVideoMediaItemTypes} from '../../../@types/videoMediaItem.types';
import {
  getAlbums,
  getAlbumsContent,
  getLibraryContents,
  getPhotoMediaItem,
  getSharedAlbums,
  getVideoMediaItem,
  searchMediaItems,
} from '../../../client/photos';

const Photos = () => {
  const [albums, setAlbums] = useState<Array<IAlbum>>([]);
  const [contents, setContents] = useState<Array<IMediaItemTypes>>([]);
  const [photoMediaItem, setPhotoMediaItem] = useState<IPhotoMediaItemTypes>();
  const [videoMediaItem, setVideoMediaItem] = useState<IVideoMediaItemTypes>();

  const imageRequest = async () => {
    const data = await getLibraryContents();

    console.log(data.contents[0]);
    if (data) {
      setContents(data.contents);
    }
  };
  const searchRequest = async () => {
    const data = await searchMediaItems({
      filters: {
        contentFilter: {
          includedContentCategories: ['GARDENS'],
        },
        dateFilter: {
          dates: [
            {
              year: 2020,
            },
          ],
        },
      },
    });

    console.log(data);
    if (data) {
      setContents(data.contents);
    }
  };
  const albumRequest = async () => {
    const data = await getAlbums();
    if (data) {
      setAlbums(data.albums);
    }
  };
  const sharedAlbumRequest = async () => {
    const data = await getSharedAlbums();
    if (data) {
      setAlbums(data.albums);
    }
  };

  const albumsContentRequest = async (albumId: string) => {
    const data = await getAlbumsContent({
      albumId,
    });
    setContents(data.contents);
  };

  const photoMediaItemRequest = async (mediaId: string) => {
    const data = await getPhotoMediaItem({
      mediaId,
    });
    if (data) {
      console.log(data);
      setPhotoMediaItem(data);
    }
  };

  const videoMediaItemRequest = async (mediaId: string) => {
    const data = await getVideoMediaItem({
      mediaId,
    });
    if (data) {
      console.log(data);
      setVideoMediaItem(data);
    }
  };

  const mediaItemRequest = (item: IMediaItemTypes) => {
    if (item.mimeType.includes('video')) {
      videoMediaItemRequest(item.id);
    } else {
      photoMediaItemRequest(item.id);
    }
  };

  return (
    <View>
      <Text>
        {'id: ' + videoMediaItem?.id} {'\n'}
        {'filename: ' + videoMediaItem?.filename} {'\n'}
        {'displayName: ' + videoMediaItem?.contributorInfo?.displayName} {'\n'}
        {'mimeType: ' + videoMediaItem?.mimeType} {'\n'}
        {'fps: ' + videoMediaItem?.mediaMetadata.video.fps} {'\n'}
        {'status: ' + videoMediaItem?.mediaMetadata.video.status} {'\n'}
        {'camera make: ' + videoMediaItem?.mediaMetadata.video.cameraMake}
        {'\n'}
      </Text>

      <Text>
        {'id: ' + photoMediaItem?.id} {'\n'}
        {'filename: ' + photoMediaItem?.filename} {'\n'}
        {'displayName: ' + photoMediaItem?.contributorInfo?.displayName} {'\n'}
        {'mimeType: ' + photoMediaItem?.mimeType} {'\n'}
        {'cameraModel: ' + photoMediaItem?.mediaMetadata.photo.cameraModel}
        {'\n'}
        {'exposureTime: ' + photoMediaItem?.mediaMetadata.photo.exposureTime}
        {'\n'}
      </Text>

      <Button title="Get Shared Albums" onPress={sharedAlbumRequest} />
      <Button title="Get Albums" onPress={albumRequest} />
      <Button title="Get Library Contents Images" onPress={imageRequest} />
      <Button title="Search Images" onPress={searchRequest} />
      <View style={{height: 150, backgroundColor: 'aqua'}}>
        <Text> Albums</Text>
        <FlatList
          style={{marginTop: 25}}
          data={albums}
          renderItem={element => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  margin: 25,
                  display: 'flex',
                  flexDirection: 'row',
                }}
                key={element.item.id}>
                <View style={{marginRight: 25, justifyContent: 'center'}}>
                  <Text>Name: {element.item.title}</Text>
                  <Text>Media Count: {element.item.mediaItemsCount}</Text>
                  <Button
                    title="get Photos"
                    onPress={() => albumsContentRequest(element.item.id)}
                  />
                </View>
                <Image
                  style={{width: 160, height: 160}}
                  source={{
                    cache: 'force-cache',
                    uri: element.item.coverPhotoBaseUrl,
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      <View style={{height: 150, marginTop: 15, backgroundColor: 'aqua'}}>
        <Text> Images</Text>

        <FlatList
          style={{marginTop: 25}}
          data={contents}
          renderItem={element => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  margin: 25,
                  display: 'flex',
                  flexDirection: 'row',
                }}
                key={element.item.id}>
                <View style={{marginRight: 25, justifyContent: 'center'}}>
                  <Text>Name: {element.item.filename}</Text>
                  <Text>
                    Size: {element.item.mediaMetadata.height}x
                    {element.item.mediaMetadata.width}
                  </Text>
                  <Button
                    title="get data"
                    onPress={() => mediaItemRequest(element.item)}
                  />
                </View>
                <Image
                  style={{width: 160, height: 160}}
                  source={{
                    cache: 'force-cache',
                    uri: element.item.baseUrl,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export {Photos};
