import { gql } from "@apollo/client";

export const countryQuery = gql`
  query getCountryDetails($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      currency
      languages {
        code
        name
      }
    }
  }
`;
