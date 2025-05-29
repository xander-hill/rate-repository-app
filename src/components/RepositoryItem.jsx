import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from "./Text";
import * as Linking from 'expo-linking';


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
    },
    top: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    headers: {
        flexDirection: 'column',
        flex: 1,
    },
    language: {
        backgroundColor: '#0366d6',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginTop: 4,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    bottomTab: {
        flexDirection: 'column',
    },
    gitHubLink: {
        backgroundColor: '#0366d6',
        borderRadius: 10,
        paddingVertical: 4,
    },
});

const RepositoryItem = ({repository, single}) => {
    return (
        <View testID="repositoryItem" style={styles.item}>
            <View style={styles.top}>
                <Image 
                    style={styles.tinyLogo}
                    source={{uri: repository.ownerAvatarUrl}}
                />
                <View style={styles.headers}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{repository.fullName} </Text>
                    <Text>{repository.description} </Text>
                    <View style={styles.language}>
                        <Text color='appBar'>{repository.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{repository.stargazersCount}</Text>
                    <Text color='textSecondary'>Stars</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{repository.forksCount}</Text>
                    <Text color='textSecondary'>Forks</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{repository.reviewCount}</Text>
                    <Text color='textSecondary'>Reviews</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{repository.ratingAverage}</Text>
                    <Text color='textSecondary'>Rating</Text>
                </View>
            </View>
            {single && (
                <Pressable style={styles.gitHubLink} onPress={() => Linking.openURL(repository.url)}>
                    <Text color='appBar' fontWeight='bold' fontSize='subheading'>Open in GitHub</Text>
                </Pressable>
            )}
        </View>
    );
};

export default RepositoryItem;