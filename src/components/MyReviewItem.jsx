import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    review: {
        backgroundColor: 'white'
    },
    reviewTop: {
        flexDirection: 'row',
        marginTop: 5
    },
    reviewLeft: {
        flexDirection: 'column',  
    },
    reviewRight: {
        flexDirection: 'column',
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
        flexShrink: 1,
    },
    viewRepoLink: {
        backgroundColor: '#0366d6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5, 
    },
    deleteReviewLink: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 5, 
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 5,
        paddingBottom: 5
    }
});

const MyReviewItem = ({ review }) => {
    const navigate = useNavigate();

    const confirmDelete = () => {
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: () => console.log('Delete Pressed')
            }
        ]);
    }

    return (
        <View style={styles.review}>
            <View style={styles.reviewTop}>
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
            <View style={styles.bottomRow}>
                <Pressable style={styles.viewRepoLink} onPress={()=> navigate(`/${review.repository.id}`)}>
                    <Text color='appBar' fontWeight='bold'>View repository</Text>
                </Pressable>
                <Pressable style={styles.deleteReviewLink} onPress={confirmDelete}>
                    <Text color='appBar' fontWeight='bold'>Delete Review</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default MyReviewItem;