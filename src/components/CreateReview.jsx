import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
    repoName: '',
    rating: '',
    review: ''
};

export const ReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <Text>Review Form</Text>
        </View>
    );
};

const CreateReview = () => {
    
    return <ReviewForm onSubmit={() => console.log(hi)} />;
};

export default CreateReview;