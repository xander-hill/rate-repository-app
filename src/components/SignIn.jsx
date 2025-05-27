import Text from './Text';
import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        placeholder='username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        placeholder='password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;