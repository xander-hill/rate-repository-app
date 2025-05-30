import Text from './Text';
import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
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
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repo owner name is required'),
    repositoryName: yup
        .string()
        .required('Repo name is required'),
    rating: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .required('Rating is required')
        .min(0, 'Rating must be at least 0')
        .max(100, 'Rating must be at most 100'),
    text: yup
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
                value={formik.values.ownerName}
                onChangeText={formik.handleChange('ownerName')}
                style={[
                    styles.textInput,
                    formik.touched.ownerName && formik.errors.ownerName && styles.inputError,
                ]}
            />
            {formik.touched.ownerName && formik.errors.ownerName && (
                <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
            )}
            <TextInput
                placeholder='Repository Name'
                value={formik.values.repositoryName}
                onChangeText={formik.handleChange('repositoryName')}
                style={[
                    styles.textInput,
                    formik.touched.repositoryName && formik.errors.repositoryName && styles.inputError,
                ]}
            />
            {formik.touched.repositoryName && formik.errors.repositoryName && (
                <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>
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
                value={formik.values.text}
                onChangeText={formik.handleChange('text')}
                style={[
                    styles.textInput,
                    formik.touched.text && formik.errors.text && styles.inputError,
                ]}
            />
            {formik.touched.text && formik.errors.text && (
                <Text style={{ color: 'red' }}>{formik.errors.text}</Text>
            )}
            <Pressable onPress={formik.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create a review</Text>
            </Pressable>
        </View>
    );
};

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;

        try {
            const review = await createReview({ ownerName, repositoryName, rating, text });
            console.log('Created review:', review);

            const repoId = review?.repository?.id;

            console.log(repoId);
            navigate(`/${repoId}`);
        } catch (e) {
            console.log(e);
        }
    };
    
    return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;