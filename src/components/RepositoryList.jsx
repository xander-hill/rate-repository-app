import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
      backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, selectedSort, setSelectedSort, searchQuery, setSearchQuery, onEndReach }) => {
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
                <>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                    <Picker
                        selectedValue={selectedSort}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSort(itemValue)
                        }>
                        <Picker.Item label="Latest Repositories" value="default" />
                        <Picker.Item label="Highest rated repositories" value="high" />
                        <Picker.Item label="Lowest rated repositories" value="low" />
                    </Picker>
                </>
            )}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
};

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("default");
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch] = useDebounce(searchQuery, 500);

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
  const { repositories, fetchMore } = useRepositories(orderBy, orderDirection, debouncedSearch, 3);

  const onEndReach = () => {
    console.log("onEndReach triggered");
    fetchMore();
  }

  return <RepositoryListContainer repositories={repositories} selectedSort={selectedSort} setSelectedSort={setSelectedSort} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onEndReach={onEndReach} />;
};

export default RepositoryList;