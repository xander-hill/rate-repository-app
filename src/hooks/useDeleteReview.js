import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({ id }) => {
    try {
      const { data } = await mutate({
        variables: {
          id: id, // or just: id
        },
      });

      if (data?.deleteReview) {
        console.log('Review deleted');
        return true;
      }

      return false;
    } catch (error) {
      console.error('Review deletion error:', error);
      return false;
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;
