import {useNavigation} from '@react-navigation/native';
import {Button, FlatList, View, VStack} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import {
  searchCategoryTypes,
  TCategoryTypes,
} from '../../../@types/filter.types';
import {IMediaItemTypes} from '../../../@types/mediaItem.types';
import {TSearchStackSeachProps} from '../../../@types/navigation.types';
import {searchMediaItems} from '../../../client/photos';
import {useAppDispatch, useAppSelector} from '../../../hooks/useAppSelector';
import {addContents, search} from '../../../store/searchReducers';
import {CircularLoader} from '../../components/CircularLoader';
import {MediaItem} from '../../components/MediaItem';
import {primaryBackgroundColor} from '../../styles/colors';

const Search = () => {
  let nextPageToken: string | undefined;
  const {width, height} = Dimensions.get('screen');
  const size = (width * 0.92) / 3;

  const navigation = useNavigation<TSearchStackSeachProps>();

  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<
    TCategoryTypes[]
  >([]);
  const contents = useAppSelector(state => state.searchContents.contents);
  const dispatch = useAppDispatch();

  const renderItem = (categoryType: TCategoryTypes) => {
    return (
      <View marginRight={8}>
        <Button
          onPress={() => {
            if (selectedCategories.includes(categoryType)) {
              const index = selectedCategories.indexOf(categoryType);
              const newArr = [...selectedCategories];
              newArr.splice(index, 1);
              setSelectedCategories(newArr);
            } else {
              const newArr = [...selectedCategories];
              newArr.push(categoryType);
              if (newArr.length > 9) {
                Toast.show({
                  type: 'error',
                  text1: 'Can not select more than 10 categories',
                  position: 'bottom',
                });
                return;
              }
              setSelectedCategories(newArr);
            }
          }}
          variant={
            selectedCategories.includes(categoryType) ? 'solid' : 'outline'
          }>
          {categoryType[0].toUpperCase() +
            categoryType.substring(1).toLocaleLowerCase('en')}
        </Button>
      </View>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        marginY="2.5"
        paddingX="2.5"
        horizontal={true}
        data={searchCategoryTypes}
        renderItem={({item}) => {
          const categoryType = item as TCategoryTypes;
          return renderItem(categoryType);
        }}
      />
    );
  };

  const searchContent = useCallback(async () => {
    setLoading(true);
    const res = await searchMediaItems({
      filters: {
        contentFilter: {
          includedContentCategories: selectedCategories,
        },
      },
    });
    nextPageToken = res.nextPageToken;
    dispatch(search(res.contents));
    setLoading(false);
  }, [selectedCategories]);

  const fetchMore = useCallback(async () => {
    if (nextPageToken) {
      const res = await searchMediaItems({
        pageToken: nextPageToken,
        filters: {
          contentFilter: {
            includedContentCategories: selectedCategories,
          },
        },
      });
      if (res.contents.length > 0) {
        nextPageToken = res.nextPageToken;
        dispatch(addContents(res.contents));
      }
    }
  }, [nextPageToken, selectedCategories]);

  const mediaItemOnPressed = (item: IMediaItemTypes) => {
    navigation.navigate('MediaView', {
      mediaItem: item,
    });
  };

  useEffect(() => {
    searchContent();
  }, [selectedCategories]);

  return (
    <VStack
      bgColor={primaryBackgroundColor}
      flex={1}
      alignItems="center"
      justifyContent="flex-start">
      <View height={height * 0.08}>{renderList()}</View>
      <View flex={1}>
        {loading ? (
          <View padding={4}>
            <CircularLoader />
          </View>
        ) : (
          <FlatList
            data={contents}
            numColumns={3}
            flex={1}
            paddingBottom="4"
            onEndReachedThreshold={0.5}
            onEndReached={fetchMore}
            renderItem={({item, index}) => {
              return (
                <MediaItem
                  onPressed={() => mediaItemOnPressed(item)}
                  item={item}
                  size={size}
                />
              );
            }}
          />
        )}
      </View>
      <Toast />
    </VStack>
  );
};

export {Search};
