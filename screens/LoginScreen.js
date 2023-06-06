import { StyleSheet } from 'react-native';

import { ImageBackground, View, Text } from 'react-native';
import { styles } from '../styles/LoginScreen.styled';

const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../images/photo-bg.jpg')}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
