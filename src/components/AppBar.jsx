import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
  },
  signOutTab: {
  },
  signOutText: {
    color: 'white',
  },
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = await authStorage.getAccessToken();
      setAccessToken(token);
    };

    loadToken();
  }, [authStorage]);

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    setAccessToken(null);
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" link="/" />
        <AppBarTab label="Create Review" link="/createreview" />
        {accessToken ? (
          <Pressable style={styles.signOutTab} onPress={handleSignOut}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        ) : (
          <AppBarTab label="Sign In" link="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
