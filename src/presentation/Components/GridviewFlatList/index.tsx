import { FlatList, Slide, View } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { IAlbum } from "../../../@types/albums.types"
import { IMediaItemTypes } from "../../../@types/mediaItem.types"
import { AlbumItem } from "../AlbumItem";
import { MediaItem } from "../MediaItem";

interface IGridViewFlatListProps {
    data: Array<IMediaItemTypes | IAlbum>;
    fetchMore: () => void;
    numColumns: number;
    itemOnPressed: (item: IMediaItemTypes | IAlbum) => void
}

const GridViewFlatList = ({ data, fetchMore, numColumns, itemOnPressed }: IGridViewFlatListProps) => {
    const { width } = Dimensions.get("screen");
    const itemSize = (width * 0.92) / numColumns;

    const renderMediaItem = (item: IMediaItemTypes) => {
        return <MediaItem
            onPressed={() => itemOnPressed(item)}
            item={item}
            size={itemSize}
        />
    }
    const renderAlbumItem = (item: IAlbum) => {
        return <AlbumItem
            onPressed={() => itemOnPressed(item)}
            item={item}
            size={itemSize}
        />
    }

    const isAlbum = (item: any): item is IAlbum => {
        return item.mediaItemsCount !== undefined || item.coverPhotoBaseUrl !== undefined;
    }


    return <FlatList
        flex={1}
        data={data}
        paddingTop="3"
        paddingBottom="4"
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        numColumns={numColumns}
        renderItem={({ item }) => {
            if (isAlbum(item)) {
                return renderAlbumItem(item as IAlbum);
            }
            return renderMediaItem(item as IMediaItemTypes);
        }} />
}

export { GridViewFlatList };