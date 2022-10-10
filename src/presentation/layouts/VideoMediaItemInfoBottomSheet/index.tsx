import BottomSheet from '@gorhom/bottom-sheet';
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import {Heading, HStack, Image, Spacer, Text, View, VStack} from 'native-base';
import React, {useMemo, useRef} from 'react';
import {Dimensions} from 'react-native';
import {IVideoMediaItemTypes} from '../../../@types/videoMediaItem.types';

interface IVideoMediaItemInfoBottomSheetProps {
  onClose: () => void;
  mediaItem: IVideoMediaItemTypes;
  size: '40%' | '25%';
}

const VideoMediaItemInfoBottomSheet = ({
  onClose,
  mediaItem,
  size,
}: IVideoMediaItemInfoBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [size], []);

  const renderDescription = () => {
    if (mediaItem.description !== '') {
      return (
        <Text marginTop={1} marginBottom={3} fontSize={'sm'}>
          {mediaItem.description}
        </Text>
      );
    }
    return <View />;
  };

  const renderContributerInfo = () => {
    if (
      mediaItem.contributorInfo?.displayName &&
      mediaItem.contributorInfo?.profilePictureBaseUrl
    ) {
      return (
        <HStack justifyContent={'flex-start'}>
          <Image
            alt="profile_picture"
            rounded={'full'}
            marginRight="2"
            width={'32'}
            source={{uri: mediaItem.contributorInfo?.profilePictureBaseUrl}}
          />
          <Text fontSize={'sm'}>{mediaItem.contributorInfo?.displayName}</Text>
        </HStack>
      );
    }
    return <View />;
  };

  const renderPhotoMetadata = () => {
    if (mediaItem.mediaMetadata.video) {
      return (
        <VStack alignSelf="stretch" flex={1}>
          {mediaItem.mediaMetadata.video.cameraModel && (
            <Heading size={'xs'}>
              {mediaItem.mediaMetadata.video.cameraModel}
            </Heading>
          )}

          <HStack flex={1}>
            <Text fontSize={'sm'} marginRight={4}>
              {mediaItem.mediaMetadata.width +
                'x' +
                mediaItem.mediaMetadata.height}
            </Text>
            {mediaItem.mediaMetadata.video.fps && (
              <Text fontSize={'sm'} marginRight={4}>
                {mediaItem.mediaMetadata.video.fps + ' fps'}
              </Text>
            )}
          </HStack>
        </VStack>
      );
    }
  };

  const renderTime = () => {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      minute: '2-digit',
      hour: '2-digit',
      day: '2-digit',
      year: 'numeric',
      month: 'short',
    }).format(new Date(mediaItem.mediaMetadata.creationTime));

    return (
      <Text
        adjustsFontSizeToFit={true}
        fontSize={'sm'}
        alignSelf={'flex-end'}
        fontWeight={'normal'}>
        {formattedDate}
      </Text>
    );
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      onClose={onClose}>
      <View flex={1} alignItems="flex-start" margin={2} marginLeft={4}>
        <HStack alignItems={'center'}>
          <Heading adjustsFontSizeToFit={true} size="sm">
            {mediaItem.filename}
          </Heading>
          <Spacer />
          {renderTime()}
        </HStack>

        {renderDescription()}
        {renderContributerInfo()}
        {renderPhotoMetadata()}
      </View>
    </BottomSheet>
  );
};

export {VideoMediaItemInfoBottomSheet};
