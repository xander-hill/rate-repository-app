import { View, StyleSheet, Pressable } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

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
        { label: 'Repositories', link: "/" },
        { label: 'Sign in', link: "/signin" },
    ];

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                {tabs.map((tab, index) => (
                <AppBarTab key={index} label={tab.label} link={tab.link}/>
            ))}
            </ScrollView>
        </View>
    );
};

export default AppBar;