import logo from './logo.svg';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// ESTABLISH CONNECTION WITH BACK END SERVER GRAPHQL ENDPOINT
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// REMINDER THAT WE ARE PASSING CLIENT VARIABLE IN AS THE VALUE OF THE CLIENT PROP 
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
