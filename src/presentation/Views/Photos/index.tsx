import React, {useState} from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import {Album} from '../../../@types/albums.types';
import {listAlbums} from '../../../client/photos';

const Photos = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  const getPhotos = async () => {
    const data = await listAlbums();
    if (data) {
      setAlbums(data);
    }
  };
  return (
    <View>
      <Button title="Get Images" onPress={getPhotos} />
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
              </View>
              <Image
                style={{width: 125, height: 125}}
                source={{
                  uri: element.item.coverPhotoBaseUrl,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export {Photos};
