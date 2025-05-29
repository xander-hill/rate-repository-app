import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { View, Pressable, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    gitHubLink: {
        backgroundColor: '#0366d6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 20, 
    },
});


const RepositoryInfo = ({ repository }) => {
    return (
        <>
            <RepositoryItem repository={repository}/>
            <View>
                <Pressable style={styles.gitHubLink} onPress={() => Linking.openURL(repository.url)}>
                    <Text color='appBar' fontWeight='bold' fontSize='subheading'>Open in GitHub</Text>
                </Pressable>
            </View>
        </>   
    );
};

export default RepositoryInfo;