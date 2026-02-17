import { fetchAllPost, findPostById } from "../models/UserPosts.model.js";
import { errorResponse, successResponse } from "../utils/response.js"


export const getAllposts = async (req, res) => {
    try {
        const { user_id } = req.query;
        const allPosts = await fetchAllPost(user_id);
        successResponse(res, allPosts);
    } catch (error) {
        errorResponse(res, error.message);
    }
}

export const sharePost = async (req, res) => {
    try {
        const postId = req.param.postId
        const queryResult = findPostById(postId);
        if(!queryResult){ 
         errorResponse(res,'Post not fount',404)
        }
        successResponse(res,queryResult);
           
    } catch (error) {
        errorResponse(res, error.message);
    }
}