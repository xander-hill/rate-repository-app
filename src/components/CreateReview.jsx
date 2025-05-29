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

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Repo owner name is required'),
    repoName: yup
        .string()
        .required('Repo name is required'),
    rating: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .required('Rating is required')
        .min(0, 'Rating must be at least 0')
        .max(100, 'Rating must be at most 100'),
    review: yup
        .string()
});

export const ReviewForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.page}>
            <TextInput
                placeholder='Repository Owner Username'
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
                placeholder='Repository Name'
                value={formik.values.repoName}
                onChangeText={formik.handleChange('repoName')}
                style={[
                    styles.textInput,
                    formik.touched.repoName && formik.errors.repoName && styles.inputError,
                ]}
            />
            {formik.touched.repoName && formik.errors.repoName && (
                <Text style={{ color: 'red' }}>{formik.errors.repoName}</Text>
            )}
            <TextInput
                placeholder='Rating between 0 and 100'
                value={formik.values.rating}
                onChangeText={formik.handleChange('rating')}
                style={[
                    styles.textInput,
                    formik.touched.rating && formik.errors.rating && styles.inputError,
                ]}
            />
            {formik.touched.rating && formik.errors.rating && (
                <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
            )}
            <TextInput
                placeholder='Review (optional)'
                value={formik.values.review}
                onChangeText={formik.handleChange('review')}
                style={[
                    styles.textInput,
                    formik.touched.review && formik.errors.review && styles.inputError,
                ]}
            />
            {formik.touched.review && formik.errors.review && (
                <Text style={{ color: 'red' }}>{formik.errors.review}</Text>
            )}
            <Pressable onPress={formik.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create a review</Text>
            </Pressable>
        </View>
    );
};

const CreateReview = () => {
    
    return <ReviewForm onSubmit={() => console.log(hi)} />;
};

export default CreateReview;