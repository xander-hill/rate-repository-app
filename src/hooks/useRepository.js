import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ repositoryId }) => {
    const { data, loading, refetch, fetchMore } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId },
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    const repository = data?.repository;

    return { repository, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepository;