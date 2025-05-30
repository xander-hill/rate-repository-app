import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SingleRepo from './SingleRepo';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/createreview" element={<CreateReview />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/:repositoryId" element={<SingleRepo />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;