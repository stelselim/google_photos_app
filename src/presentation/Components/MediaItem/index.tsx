import { Image, Pressable, View } from "native-base"
import React from "react"
import { IMediaItemTypes } from "../../../@types/mediaItem.types"

interface IMediaItemProps {
    item: IMediaItemTypes,
    size: number,
    onPressed: () => void
}
const MediaItem = ({ item, size, onPressed }: IMediaItemProps) => {
    return <View
        key={item.id}
        alignItems="center"
        justifyContent="center"
        style={{ margin: 4 }}
    >
        <Pressable onPress={onPressed}>
            <Image
                alt="image"
                width={size}
                height={size}
                source={{
                    uri: item.baseUrl,
                    cache: 'force-cache',
                }}
            />
        </Pressable>
    </View>
}
export { MediaItem }