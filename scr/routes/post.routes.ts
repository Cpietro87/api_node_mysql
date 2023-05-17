import { Router } from "express";
import { getPosts, createPost } from "../controllers/post.controller";

const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost)

export default router;