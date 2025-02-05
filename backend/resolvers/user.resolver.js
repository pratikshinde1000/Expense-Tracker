import { users } from "../dummyData/data.js";
const userResolver = {
    Query: {
        users: () => users,
        user: (_parent, {userId}) => users.find(user => user._id === userId)
    },
    Mutation: {

    }
}

export default userResolver;