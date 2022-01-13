import Post from "../../../models/Post";

export default {
    Query: {
        posts: async () => await Post.find().populate('author'),
        post: async (_,{id}) => await Post.findById(id).populate('author')
    },
    Mutation: {
        createPost: async (_,{ data }) => await Post.create(data).populate('author'),
        updatePost: async (_,{ id, data }) => await Post.findOneAndUpdate({_id: id}, data, { new: true }).populate('author'),
        deletePost: async (_,{ id }) => {
            const deleted = await Post.findByIdAndDelete(id);
            return !!deleted
        }
    }
}