import { StyleSheet } from 'react-native';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useState } from 'react';

export const LoginScreen = ({ navigation }) => {
  const [focused, setFocused] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function togglePassword() {
    setShowPassword(prevState => !prevState);
  }
  return (
    <TouchableWithoutFeedback>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../images/photo-bg.jpg')}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.container}>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <TextInput
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Адреса електронної пошти"
                  autoCompleteType="email"
                  autoCapitalize="none"
                  selectionColor={'#FF6C00'}
                  onFocus={() => {
                    setFocused('email');
                  }}
                  onBlur={() => {
                    setFocused('');
                  }}
                  style={{
                    ...styles.input,
                    borderColor: focused === 'email' ? '#FF6C00' : '#E8E8E8',
                  }}
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Пароль"
                    secureTextEntry={showPassword}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    selectionColor={'#FF6C00'}
                    onFocus={() => {
                      setFocused('password');
                    }}
                    onBlur={() => {
                      setFocused('');
                    }}
                    style={{
                      ...styles.input,
                      borderColor: focused === 'password' ? '#FF6C00' : '#E8E8E8',
                    }}
                  />
                  <TouchableOpacity onPress={togglePassword} style={styles.passwordIndicator}>
                    <Text style={styles.showText}>{showPassword ? 'Показати' : 'Сховати'}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.BtnLogIn}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.wrapper}>
                  <Text style={styles.loginText}>Немає акаунту?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RegistrationScreen')}
                    style={styles.loginText}
                  >
                    <Text style={styles.loginLink}>Зареєструватися</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',

    width: '100%',
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    height: '100%',
    width: '100%',
  },

  container: {
    height: '61%',
    width: '100%',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
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

  form: {
    justifyContent: 'flex-start',

    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    width: '100%',
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

  passwordContainer: {
    position: 'relative',
    marginTop: 16,
    marginBottom: 43,
  },

  passwordIndicator: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: [{ translateY: -6 }],
  },

  showText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
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

  //   loginBtn: {
  //     marginLeft: 'auto',
  //     marginRight: 'auto',

  //     width: 188,
  //     height: 19,
  //   },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
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
