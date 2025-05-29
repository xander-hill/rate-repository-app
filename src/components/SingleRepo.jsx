import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import { Text } from "react-native";

const SingleRepo = () => {
    const { repositoryId } = useParams();
    const { repository, loading, error } = useRepository({ repositoryId });

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
        <RepositoryItem repository={repository} single={true} />
    );
};

export default SingleRepo;