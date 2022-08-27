import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

const Splash = () => {
  const {height} = useWindowDimensions();
  const topSpace = height * 0.25;
  const appIconPath = '../../../../assets/images/icon.png';

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={{...styles.image, top: topSpace}}
          source={require(appIconPath)}
        />
      </SafeAreaView>
    </View>
  );
};

export {Splash};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    borderRadius: 25,
    borderWidth: 0.5,
    top: 25,
    borderColor: 'grey',
    width: 250,
    height: 250,
  },
});
