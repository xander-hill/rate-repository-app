import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          user: { username, password },
        },
      });

      console.log('Created User:', data.createdUser.user);
      return data.createdUser.user;
    } catch (error) {
      console.error('Sign-up error:', error);
    }
  };

  return [createUser, result];
};

export default useCreateUser;