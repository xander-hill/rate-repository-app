import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy = "CREATED_AT", orderDirection = "DESC", searchKeyword = "", first) => {
    const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection, searchKeyword, first },
        fetchPolicy: "cache-and-network"
    });

    const handleFetchMore = () => {
        const pageInfo = data?.repositories?.pageInfo;
        console.log("onEndReach triggered. pageInfo:", pageInfo);
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        console.log('onEndReach triggered. Can fetch more?', canFetchMore);

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
            orderBy,
            orderDirection,
            searchKeyword,
            first,
            after: data.repositories.pageInfo.endCursor,
            },
        });
    };

    const repositories = data?.repositories;

    return { repositories, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepositories;