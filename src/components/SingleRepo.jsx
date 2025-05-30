import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { StyleSheet, FlatList, View } from "react-native";
import Text from "./Text";
import ReviewItem from "./ReviewItem";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#e1e4e8'
    },
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepo = () => {
    const { repositoryId } = useParams();
    const { repository, loading, error } = useRepository({ repositoryId });

    const onEndReach = () => {
      console.log("You have reached the last review");
    }

    if (loading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text>Error loading repository</Text>;
    }

    if (!repository) {
      return <Text>No repository found</Text>;
    }

    return (
        <FlatList
            style={styles.list}
            data={repository.reviews.edges.map(edge => edge.node)}
            renderItem={({ item }) => <ReviewItem review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={<RepositoryInfo repository={repository} />}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepo;