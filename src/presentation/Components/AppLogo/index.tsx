import React from 'react';
import {
    View,
    Image,
} from 'native-base';

interface IAppLogoProps {
    size?: "16" | "32" | "48" | "xl" | "2xl";
}

const AppLogo = ({ size }: IAppLogoProps) => {
    const appIconPath = '../../../../assets/images/icon.png';

    return <Image
        alt="App Icon"
        rounded={"full"}
        size={size}
        source={require(appIconPath)}
    />

}

export { AppLogo }