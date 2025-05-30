import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
      backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositorySorter = ({ selectedSort, setSelectedSort }) => {

    return (
        <Picker
            selectedValue={selectedSort}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedSort(itemValue)
            }>
            <Picker.Item label="Latest Repositories" value="default" />
            <Picker.Item label="Highest rated repositories" value="high" />
            <Picker.Item label="Lowest rated repositories" value="low" />
        </Picker>
    );
}

export const RepositoryListContainer = ({ repositories, selectedSort, setSelectedSort }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            style={styles.list}
            data={repositoryNodes}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable onPress={() => navigate(`/${item.id}`)}>
                    <RepositoryItem repository={item}/>
                </Pressable>
            )}
            ListHeaderComponent={() => (
                <RepositorySorter
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                />
            )}
        />
    );
};

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("default");

  const getSortParams = () => {
    switch (selectedSort) {
        case "high":
            return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
        case "low":
            return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
        default:
            return { orderBy: "CREATED_AT", orderDirection: "DESC" };
    }
  };

  const { orderBy, orderDirection } = getSortParams();
  const { repositories } = useRepositories(orderBy, orderDirection);

  return <RepositoryListContainer repositories={repositories} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />;
};

export default RepositoryList;