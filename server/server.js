const path = require('path');
const express = require('express');
// import ApolloSever
const { ApolloServer } = require('apollo-server-express');
// middle ware authenication 
const { authMiddleware } = require('./utils/auth');

// imprt our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');




const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// temporary comment out to test apollo server

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


//  Create a new instance of an Apollo server with GraphQL schema
const startApolloSever = async ( typeDefs, resolvers) =>{
  await server.start()
  // integrate out Appolo Server with the Express application as middleware
  server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      //  log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};


// Call the async function to start the server

startApolloSever(typeDefs, resolvers);

