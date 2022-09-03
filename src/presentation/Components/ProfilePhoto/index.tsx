import { User } from "@react-native-google-signin/google-signin"
import { Center, Heading, Image, View } from "native-base"
import React from "react"

interface IProfilePhoto {
    user: User
}

const ProfilePhoto = ({ user }: IProfilePhoto) => {
    const userName: string = user.user.name ?? user.user.email;

    if (user.user.photo) {
        return <Image margin={6} rounded={"full"} alt="Profile" size="180" source={{ uri: user.user.photo }} />
    }
    return <Center margin={6} size="180" rounded={"full"} backgroundColor={"blue.400"}>
        <Heading fontSize="4xl">
            {userName[0] + userName[1]}
        </Heading>
    </Center>

}

export { ProfilePhoto }