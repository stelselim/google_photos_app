import { Center } from "native-base"
import React from "react"
import { CircularLoader } from "../../components/CircularLoader"

export const LoadingScreen = () => {
    return <Center flex={1}>
        <CircularLoader />
    </Center>
}