import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export const RegistrationScreen = () => {
  return (
    <View style={styles.box}>
      <ImageBackground
        style={styles.image}
        source={require('../images/photo-bg.jpg')}
        resizeMode="cover"
      >
        <RegisterForm />
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
  // register: { marginTop: '20px' },
});
