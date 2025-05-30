import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
      backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewsContainer = ({ reviews }) => {

    return (
        <Text>My Reviews</Text>
    );
};

const MyReviews = () => {

    return (
        <MyReviewsContainer reviews={[]} />
    );
};

export default MyReviews;