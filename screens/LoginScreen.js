import { StyleSheet } from 'react-native';
import { ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../images/photo-bg.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Адреса електронної пошти"
              autoCompleteType="email"
              autoCapitalize="none"
              selectionColor={'#FF6C00'}
              style={styles.input}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Пароль"
                autoCompleteType="password"
                autoCapitalize="none"
                selectionColor={'#FF6C00'}
                style={styles.input}
              />
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.BtnLogIn}>Увійти</Text>
            </TouchableOpacity>
            <View style={styles.wrapper}>
              <Text style={styles.loginText}>Немає акаунту?</Text>
              <TouchableOpacity style={styles.loginText}>
                <Text style={styles.loginLink}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',

    width: '100%',
  },

  container: {
    height: '61%',
    width: '100%',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  title: {
    marginTop: 32,
    marginBottom: 33,

    fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },

  input: {
    marginHorizontal: 'auto',
    padding: 16,
    paddingBottom: 15,

    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 16,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    width: '100%',
  },

  passwordContainer: {
    position: 'relative',
    marginTop: 16,
    marginBottom: 43,
  },

  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 'auto',
    padding: 16,

    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  BtnLogIn: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#fff',
  },

  loginText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },

  loginLink: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#1B4371',
  },
});
