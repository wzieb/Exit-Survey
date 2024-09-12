const { User, Survey } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('Survey');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('surveys'); //collection name, orignally 'thoughts' 
    },
    surveys: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Survey.find(params).sort({ createdAt: -1 });
    },
    survey: async (parent, { surveyID }) => {
      return Survey.findOne({ _id: surveyID });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('surveys');//collection name, orignally 'thoughts' 
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    submitSurvey: async (parent, {survey}) => {
      const surveyResponse = await Survey.create({...survey})
      return surveyResponse
    },


    // addThought: async (parent, { thoughtText }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.create({
    //       thoughtText,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw AuthenticationError;
    // },
    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;
