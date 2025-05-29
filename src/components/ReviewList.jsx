import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import Text from "./Text";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#e1e4e8'
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ reviews }) => {
    return (
        <FlatList
            style={styles.list}
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
        />
    );
};

export default ReviewList;