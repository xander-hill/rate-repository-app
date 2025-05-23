import { View, StyleSheet, Pressable } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground,
        paddingBottom: 10,
    },
});

const AppBar = () => {
    const tabs = [
        { label: 'Repositories' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <AppBarTab key={index} label={tab.label} />
            ))}
        </View>
    );
};

export default AppBar;