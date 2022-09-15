import { Image, Pressable, View } from "native-base"
import React from "react"
import { IAlbum } from "../../../@types/albums.types"

interface IAlbumProps {
    item: IAlbum,
    size: number,
    onPressed: () => void
}
const AlbumItem = ({ item, size, onPressed }: IAlbumProps) => {
    return <View
        key={item.id}
        alignItems="center"
        justifyContent="center"
        style={{ margin: 4 }}
    >
        <Pressable onPress={onPressed}>
            <Image
                alt="album cover"
                width={size}
                height={size}
                source={{
                    uri: item.coverPhotoBaseUrl,
                    cache: 'force-cache',
                }}
            />
        </Pressable>
    </View>
}
export { AlbumItem }