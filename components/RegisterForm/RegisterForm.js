import * as Yup from 'yup';

import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  phone: Yup.number().positive('Must be > 0!').required('Required field!'),
});

export const RegisterForm = () => {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button
            // width={'100px'}
            style={styles.button}
            onPress={handleSubmit}
            title="Зареєструватися"
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  //   register: { marginTop: '20px' },
  box: { marginTop: 70, padding: 0, backgroundColor: 'white', height: 100 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: { width: 100, borderRadius: 100, display: 'block' },
});

// console.log(TextInput);
