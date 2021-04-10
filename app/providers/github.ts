import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Config from 'react-native-config';

export const github = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `bearer ${Config.GITHUB_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
