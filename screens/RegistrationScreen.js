import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import Icon from '@expo/vector-icons/Feather';

export const RegistrationScreen = () => {
  const [focused, setFocused] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

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
              <View style={styles.box}>
                <View style={styles.btnAdd}>
                  <Icon name="plus" size={20} color="#FF6C00" />
                </View>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <TextInput
                  id="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Логін"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  selectionColor={'#FF6C00'}
                  onFocus={() => {
                    setFocused('name');
                  }}
                  onBlur={() => {
                    setFocused('');
                  }}
                  style={{
                    ...styles.input,
                    borderColor: focused === 'name' ? '#FF6C00' : '#E8E8E8',
                  }}
                />
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
                  <Text style={styles.BtnText}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.wrapper}>
                  <Text style={styles.loginText}>Вже є акаунт?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={styles.loginText}
                  >
                    <Text style={styles.loginLink}>Увійти</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-end',

    width: '100%',
    height: '100%',
  },

  container: {
    width: '100%',
    height: '68%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },

  box: {
    position: 'relative',
    top: -60,
    alignSelf: 'center',

    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  btnAdd: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 12,
    right: -12.5,

    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderStyle: 'solid',
  },

  title: {
    marginTop: -32,
    marginBottom: 33,

    fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 16,

    width: '100%',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
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

  BtnText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#fff',
  },

  loginBtn: {
    marginLeft: 'auto',
    marginRight: 'auto',

    width: 188,
    height: 19,
  },

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
