import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: { username, password },
        },
      });

      console.log('Access token:', data.authenticate.accessToken);
      return data.authenticate;
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return [signIn, result];
};

export default useSignIn;