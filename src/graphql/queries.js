import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
            id,
            fullName,
            description,
            language,
            forksCount,
            ownerAvatarUrl,
            ratingAverage,
            reviewCount,
            stargazersCount
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      description
      language
      forksCount
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
    }
  }
`;