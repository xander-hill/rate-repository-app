import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

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
    }
});

const RepositoryItem = ({fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl}) => {
    return (
        <View testID="repositoryItem" style={styles.item}>
            <View style={styles.top}>
                <Image 
                    style={styles.tinyLogo}
                    source={{uri: ownerAvatarUrl}}
                />
                <View style={styles.headers}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{fullName} </Text>
                    <Text>{description} </Text>
                    <View style={styles.language}>
                        <Text color='appBar'>{language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{stargazersCount}</Text>
                    <Text color='textSecondary'>Stars</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{forksCount}</Text>
                    <Text color='textSecondary'>Forks</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{reviewCount}</Text>
                    <Text color='textSecondary'>Reviews</Text>
                </View>
                <View style={styles.bottomTab}>
                    <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{ratingAverage}</Text>
                    <Text color='textSecondary'>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;