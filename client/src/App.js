import logo from './logo.svg';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SinglePost';
import SingleThought from './pages/Sidebar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

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
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="/post"
                  element={<SinglePost />}
                />
                <Route
                  path="*"
                  element={<NoMatch />}
                />
              </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
