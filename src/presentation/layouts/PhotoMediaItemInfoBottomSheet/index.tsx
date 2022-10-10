import BottomSheet from '@gorhom/bottom-sheet';
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import {Heading, HStack, Image, Spacer, Text, View, VStack} from 'native-base';
import React, {useMemo, useRef} from 'react';
import {IPhotoMediaItemTypes} from '../../../@types/photoMediaItem.types';

interface IPhotoMediaItemInfoBottomSheetProps {
  onClose: () => void;
  mediaItem: IPhotoMediaItemTypes;
  size: '40%' | '25%';
}

const PhotoMediaItemInfoBottomSheet = ({
  onClose,
  mediaItem,
  size,
}: IPhotoMediaItemInfoBottomSheetProps) => {
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
    if (mediaItem.mediaMetadata.photo) {
      return (
        <VStack alignSelf="stretch" flex={1}>
          {mediaItem.mediaMetadata.photo.cameraModel && (
            <Heading size={'xs'}>
              {mediaItem.mediaMetadata.photo.cameraModel}
            </Heading>
          )}

          <HStack flex={1}>
            <Text fontSize={'sm'} marginRight={4}>
              {mediaItem.mediaMetadata.width +
                'x' +
                mediaItem.mediaMetadata.height}
            </Text>
            {mediaItem.mediaMetadata.photo.apertureFNumber && (
              <Text fontSize={'sm'} marginRight={4}>
                {'ƒ/' + mediaItem.mediaMetadata.photo.apertureFNumber}
              </Text>
            )}
            {mediaItem.mediaMetadata.photo.exposureTime && (
              <Text fontSize={'sm'}>
                {'ISO' + mediaItem.mediaMetadata.photo.isoEquivalent}
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
      <Text fontSize={'sm'} alignSelf={'flex-end'} fontWeight={'normal'}>
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
          <Heading size="sm">{mediaItem.filename} </Heading>
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

export {PhotoMediaItemInfoBottomSheet};
