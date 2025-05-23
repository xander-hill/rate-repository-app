import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text color='appBar'>Repositories</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;