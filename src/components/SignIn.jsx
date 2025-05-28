import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  page: {
    flexDirection: 'column',
    padding: 15,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#0366d6',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 700,
    padding: 10,
    alignSelf: 'center',
  }
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.page} >
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.textInput,
          formik.touched.username && formik.errors.username && styles.inputError,
        ]}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={[
          styles.textInput,
          formik.touched.password && formik.errors.password && styles.inputError,
        ]}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const auth = await signIn({ username, password });
      console.log(auth);
      console.log(auth.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;