const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    responses: Survey!
  }

  type Survey {
    _id: ID
    firstName: String
    lastName: String
    course: String
    rating:Number
    favoritePart:String
    leastFavorite: String
    takeaway: String
    rateTeacher: Number
    applicable: Number
    createdAt: String
   
  }

  input Surveyinput {

    firstName: String
    lastName: String
    course: String
    rating:Number
    favoritePart:String
    leastFavorite: String
    takeaway: String
    rateTeacher: Number
    applicable: Number
  
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    submitSurvey(Survey:Surveyinput) : Survey 
  }
`;

module.exports = typeDefs;
