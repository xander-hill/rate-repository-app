import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must not be more than 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(30, 'Password must not be more than 30 characters'),
  confirmPassword: yup
    .string()
    .required()
    .min(5, 'Password must be at least 5 characters')
    .max(30, 'Password must not be more than 30 characters')
    .oneOf([yup.ref('password')], 'Password does not match')
});

export const SignUpForm = ({ onSubmit }) => {
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
      <TextInput
        placeholder='Confrim Password'
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        style={[
          styles.textInput,
          formik.touched.confirmPassword && formik.errors.confirmPassword && styles.inputError,
        ]}
        secureTextEntry
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={{ color: 'red' }}>{formik.errors.confirmPassword}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const createdUser = await signUp({ username, password });
      console.log("CreatedUser: ", createdUser);
      const auth = await signIn({ username, password });
      console.log(auth.accessToken);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;