import {useNavigation} from '@react-navigation/native';
import {Center, Image, View, ZStack} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import RNFS from 'react-native-fs';
import Video from 'react-native-video';
import {TPhotoStackMediaViewProps} from '../../../../@types/navigation.types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IVideoMediaItemTypes} from '../../../../@types/videoMediaItem.types';
import {saveVideo, saveVideoLocally} from '../../../../services/videoSave';
import {getAspectRatio} from '../../../../utils/getAspectRatio';
import {getVideoFileName} from '../../../../utils/getVideoFileName';
import {CircularLoader} from '../../../components/CircularLoader';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {VideoMediaItemInfoBottomSheet} from '../../../layouts/VideoMediaItemInfoBottomSheet';

const VideoMediaItem = ({mediaItem}: {mediaItem: IVideoMediaItemTypes}) => {
  const {width} = Dimensions.get('window');
  const videoFileName = getVideoFileName(mediaItem);
  const navigation = useNavigation<TPhotoStackMediaViewProps>();

  const player = useRef<Video | null>();

  const aspectRatio = getAspectRatio(
    Number.parseFloat(mediaItem.mediaMetadata.height),
    Number.parseFloat(mediaItem.mediaMetadata.width),
  );

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [infoSheet, setInfoSheet] = useState(false);

  const showInfo = () => {
    setInfoSheet(true);
  };

  const saveVideoToGallery = async () => {
    const res = await saveVideo(mediaItem);
    if (res) {
      Toast.show({
        text1: 'Video saved!',
        position: 'bottom',
      });
    }
  };

  const downloadVideo = async () => {
    await saveVideoLocally({
      mediaItem: mediaItem,
      onComplete: () => {
        setVideoLoaded(true);
      },
      onFail: () => {
        setVideoLoaded(false);
      },
    });
  };

  const renderHeaderRightButtons = () => {
    return (
      <View flexDirection="row" justifyContent={'flex-end'}>
        <TouchableOpacity
          onPress={() => {
            saveVideoToGallery();
          }}>
          <Icon name="cloud-download" style={styles.backIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 25}}
          onPress={() => {
            showInfo();
          }}>
          <Icon name="info-outline" style={styles.backIconStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    downloadVideo();
    navigation.setOptions({
      headerRight: renderHeaderRightButtons,
    });
  }, []);

  if (videoLoaded) {
    return (
      <View flex={1} justifyContent={'center'} backgroundColor={'black'}>
        <Video
          source={{
            uri: `file://${RNFS.DocumentDirectoryPath}/${videoFileName}`,
          }}
          fullscreenAutorotate={true}
          paused={false}
          controls={true}
          pictureInPicture={true}
          ref={ref => {
            player.current = ref;
          }}
          onError={err => {
            console.log(err);
          }}
          style={
            aspectRatio < 1
              ? {
                  width: width,
                  height: width * aspectRatio,
                }
              : {
                  width: width,
                  height: width * 0.75 * aspectRatio,
                }
          }
        />
        <Toast />

        {infoSheet && (
          <VideoMediaItemInfoBottomSheet
            mediaItem={mediaItem}
            onClose={() => {
              setInfoSheet(false);
            }}
            size={'25%'}
          />
        )}
      </View>
    );
  }

  return (
    <ZStack alignItems="center" justifyContent="center">
      <Image
        source={{uri: mediaItem.baseUrl, cache: 'force-cache'}}
        alt="media"
        width={width}
        height={width * aspectRatio}
      />
      <Center zIndex={3}>
        <CircularLoader color="black" size="lg" />
      </Center>
    </ZStack>
  );
};

const styles = StyleSheet.create({
  backIconStyle: {
    color: 'black',
    elevation: 5,
    fontSize: 26,
  },
});

export {VideoMediaItem};
