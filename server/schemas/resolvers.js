const { User, Post, Category} = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken }= require('../utils/auth')
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('posts')
                .populate('empaths');
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
          },
        // get all posts by username or all posts
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
          },
        //   get single post by id
        post: async (parent, {_id})=>{
            return Post.findOne({_id});
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('empaths')
            .populate('posts');
        },
        category: async () => {
            return Category.find()
            ;
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('empaths')
            .populate('posts');
        },
        
    },
    Mutation: {
        addUser: async(parents,args)=>{
            const user = await User.create(args);
            const token = signToken(user)

            return {token, user};

        },
        login: async (parents,{email, password})=>{
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('Incorrect credentails')
            }

            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentails')
            }


            const token = signToken(user)
            return {token, user};
        },
        addPost: async (parent,args, context)=> {
            if (context.user) {
                const post = await Post.create({...args, username: context.user.username});

                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $push: {posts:post._id} },
<<<<<<< HEAD
                    //{$push: {category:{categoryName}}},
                    //{$push: {posts:post.title}},
=======
                    {$push: {category:{categoryName}}},
                    // {$push: {posts: post.title}},
>>>>>>> 8ad58f2aaa419dd41c47789d69c2eb644c8b63b6
                    {new: true}
                );
                return post;
            }
            throw new AuthenticationError('You need to be logged in')
        },
        // update post mutation
        addReaction: async (parent,{postId, reactionBody}, context)=> {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    {_id: postId},
                    { $push: { reactions: { reactionBody, username:context.user.username } } },
                    {new: true, runValidators: true}
                )
                
                return updatedPost;
            }
            throw new AuthenticationError('You need to be logged in')
        },
        addEmpath: async (parent, { empathId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { empaths: empathId } },
                { new: true }
              ).populate('empaths');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }

    }
  };


module.exports= resolvers