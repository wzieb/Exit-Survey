const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    responses: Survey!
  }

  type Survey {
    _id: ID
    firstName: String
    lastName: String
    course: String
    rating:Float
    favoritePart:String
    leastFavorite: String
    takeaway: String
    rateTeacher: Float
    applicable: Float
    createdAt: String
   
  }

  input Surveyinput {

    firstName: String
    lastName: String
    course: String
    rating:Float
    favoritePart:String
    leastFavorite: String
    takeaway: String
    rateTeacher: Float
    applicable: Float
  
  }
  type Auth {
    token:ID
    user: User
  
  }
  type Query {
    users: [User]
    user(username: String!): User
    surveys(username: String): [Survey]
    survey(surveyId: ID!): Survey
    me: User
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    submitSurvey(survey:Surveyinput) : Survey 
  }
`;

module.exports = typeDefs;
