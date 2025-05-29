import RepositoryItem from "./RepositoryItem";
import ReviewList from "./ReviewList";
import Text from "./Text";
import { View, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gitHubLink: {
        backgroundColor: '#0366d6',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 5
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
                <ReviewList reviews={repository.reviews.edges.map(edge => edge.node)} />
            </View>
        </>   
    );
};

export default RepositoryInfo;