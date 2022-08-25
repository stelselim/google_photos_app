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
import {
  getAlbums,
  getAlbumsContent,
  getLibraryContents,
  getSharedAlbums,
} from '../../../client/photos';

const Photos = () => {
  const [albums, setAlbums] = useState<Array<IAlbum>>([]);
  const [contents, setContents] = useState<Array<IMediaItemTypes>>([]);

  const imageRequest = async () => {
    const data = await getLibraryContents();
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

  return (
    <View>
      <Button title="Get Shared Albums" onPress={sharedAlbumRequest} />
      <Button title="Get Albums" onPress={albumRequest} />
      <Button title="Get Images" onPress={imageRequest} />
      <View style={{height: 250, backgroundColor: 'aqua'}}>
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

      <View style={{height: 250, marginTop: 15, backgroundColor: 'aqua'}}>
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
