import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://example-vmall-front.yereone.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "account-id": "6027acbe5fc2b4627256d612",
      "locale": "en_US"
    }
  })



