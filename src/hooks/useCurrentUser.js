import { useQuery } from "@apollo/client";

import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = () => {
    const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: 'cache-and-network',
    })

    console.log(data);
    const user = data?.me;

    return { user, loading, refetch };
};

export default useCurrentUser;