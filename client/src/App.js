import React from "react";
//import logo from "./logo.svg";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MIDDLEWARE TO RETRIEVE TOKEN
import { setContext } from '@apollo/client/link/context';
import Login from './pages/Login';
import Home from "./pages/Home";
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
// Header and Footer need to be rendered through a diff component
import Footer from "./components/Footer";
import Header from "./components/Header";
import './index.css';
import Category from "./components/Category";

// ESTABLISH CONNECTION WITH BACK END SERVER GRAPHQL ENDPOINT
const httpLink = createHttpLink({
  uri: "/graphql",
});

//RETRIEVE FROM LOCALSTORAGE & SET HEADERS TO INCLUDE TOKEN
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : " ",
    },
  };
});

const client = new ApolloClient({
  // CONNECT OBJECTS TO RETRIEVE REQUESTS WITH TOKEN AND SET HEADERS BEFORE API REQUEST
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



// REMINDER THAT WE ARE PASSING CLIENT VARIABLE IN AS THE VALUE OF THE CLIENT PROP
function App() {
  return (
  <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
        
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="*" element={<NoMatch />} />
              <Route path="/category/:category" />
            </Routes>
          </div>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
