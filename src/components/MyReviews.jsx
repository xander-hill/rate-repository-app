import { StyleSheet, View, FlatList } from "react-native";
import Text from "./Text";
import useCurrentUser from "../hooks/useCurrentUser";
import MyReviewItem from "./MyReviewItem";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
      backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewsContainer = ({ reviews, refetch }) => {

    return (
        <FlatList
            style={styles.list}
            data={reviews.edges.map(edge => edge.node)}
            renderItem={({ item }) => <MyReviewItem review={item} refetch={refetch}/>}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
        />
    );
};

const MyReviews = () => {
    const { user, loading, error, refetch } = useCurrentUser();

    if (loading) {
        return <Text>Loading...</Text>;
    }

    // Defensive check: make sure user and user.reviews exist
    if (!user || !user.reviews) {
        return <Text>No reviews found.</Text>;
    }


    return (
        <MyReviewsContainer reviews={user.reviews} refetch={refetch}/>
    );
};

export default MyReviews;