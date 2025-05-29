import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
      backgroundColor: '#e1e4e8',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            style={styles.list}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <RepositoryItem
                    key={item.id}
                    fullName={item.fullName}
                    description={item.description}
                    language={item.language}
                    forksCount={item.forksCount}
                    stargazersCount={item.stargazersCount}
                    ratingAverage={item.ratingAverage}
                    reviewCount={item.reviewCount}
                    ownerAvatarUrl={item.ownerAvatarUrl}
                />
            )}
        />
    );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;