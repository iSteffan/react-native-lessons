import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BgImage from '../images/photo-bg.jpg';

export const RegistrationScreen = () => {
  return (
    <View style={styles.box}>
      {/* {require('@expo/snack-static/react-native-logo.png')} */}
      {/* <ImageBackground source={BgImage} resizeMode="cover"></ImageBackground> */}
      <ImageBackground
        style={styles.image}
        source={require('../images/photo-bg.jpg')}
        resizeMode="cover"
      >
        <Text>Open up App.js to start working on your app!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  box: { margin: 0, padding: 0 },
});
