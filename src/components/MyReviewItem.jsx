import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    review: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    reviewLeft: {
        flexDirection: 'column',  
    },
    reviewRight: {
        flexDirection: 'column',
        flex: 1
    },
    ratingCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#0366d6",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    ratingText: {
        fontWeight: "bold",
        color: "#0366d6",
    },
    headers: {
        flexDirection: 'column',
        flex: 1,
    },
    reviewBody: {
        marginTop: 5,
        marginBottom: 5,
        flexShrink: 1,
    }
});

const MyReviewItem = ({ review }) => {
    return (
        <View>
            <View style={styles.review}>
                <View style={styles.reviewLeft}>
                    <View style={styles.ratingCircle}>
                        <Text color="primary" fontWeight="bold">{review.rating}</Text>
                    </View>
                </View>
                <View style={styles.reviewRight}>
                    <View style={styles.headers}>
                        <Text color='textPrimary' fontWeight='bold' fontSize='subheading' >{review.repository.name}/{review.repository.ownerName} </Text>
                        <Text>{review.createdAt} </Text>
                    </View>
                    <View style={styles.reviewBody}>
                        <Text color='textPrimary'>{review.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MyReviewItem;