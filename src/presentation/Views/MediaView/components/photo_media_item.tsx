import {useNavigation} from '@react-navigation/native';
import {View} from 'native-base';
import Toast from 'react-native-toast-message';
import React from 'react';
import {Dimensions, Modal, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IPhotoMediaItemTypes} from '../../../../@types/photoMediaItem.types';
import {savePicture} from '../../../../services/photoSave';
import {getAspectRatio} from '../../../../utils/getAspectRatio';

//TODO:
// Photo: Zoom,show details.
const PhotoMediaItem = ({mediaItem}: {mediaItem: IPhotoMediaItemTypes}) => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();

  const aspectRatio = getAspectRatio(
    Number.parseFloat(mediaItem.mediaMetadata.height),
    Number.parseFloat(mediaItem.mediaMetadata.width),
  );

  const saveImageToGallery = async () => {
    await savePicture(mediaItem);
    Toast.show({
      text1: 'Image saved!',
      position: 'bottom',
    });
  };

  //TODO:
  const showInfo = () => {
    console.log('Download');
  };

  const renderFunctionalityButtons = () => {
    return (
      <View style={styles.iconBarStyle} width={width}>
        <TouchableOpacity
          style={styles.iconPressableStyle}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" style={styles.backIconStyle} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.iconPressableStyle}
            onPress={saveImageToGallery}>
            <Icon name="cloud-download" style={styles.backIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconPressableStyle}
            onPress={showInfo}>
            <Icon name="info-outline" style={styles.backIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View width={width} height={width * aspectRatio}>
      <Modal visible={true} transparent={true}>
        <ImageViewer
          renderIndicator={() => <View />}
          maxOverflow={0}
          style={{
            width: width,
            height: width * aspectRatio,
            alignSelf: 'center',
          }}
          imageUrls={[{url: mediaItem.baseUrl}]}
        />
        <Toast />
        {renderFunctionalityButtons()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBarStyle: {
    position: 'absolute',
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  iconPressableStyle: {
    padding: 15,
  },
  backIconStyle: {
    color: 'white',
    elevation: 5,
    fontSize: 26,
  },
});

export {PhotoMediaItem};
