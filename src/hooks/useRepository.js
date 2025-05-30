import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ( repositoryId, first ) => {
  const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId, first },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const pageInfo = data?.repository?.reviews?.pageInfo;
    console.log("page info:", pageInfo);
    const canFetchMore = !loading && pageInfo?.hasNextPage;
    console.log("can fetch more reviews?", canFetchMore)

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        repositoryId,
        first,
        after: pageInfo.endCursor,
      },
    });
  };

  const repository = data?.repository;

  return { repository, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepository;
