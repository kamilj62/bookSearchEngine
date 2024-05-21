const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // Resolver for the 'me' query, which returns the logged-in user's details
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError(
        "You must be logged in to view this information."
      );
    },
  },

  Mutation: {
    // Resolver for the 'addUser' mutation, which creates a new user and returns a token
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Resolver for the 'loginUser' mutation, which logs in a user and returns a token
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid email or password.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid email or password.");
      }

      const token = signToken(user);

      return { token, user };
    },
    // Resolver for the 'saveBook' mutation, which saves a book to the user's savedBooks array
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in to save a book.");
    },
    // Resolver for the 'deleteBook' mutation, which removes a book from the user's savedBooks array
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError(
        "You need to be logged in to delete a book."
      );
    },
  },
};

module.exports = resolvers;
