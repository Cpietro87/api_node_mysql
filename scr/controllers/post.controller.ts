import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/Post";

export async function getPosts(req: Request, res: Response): Promise<Response>{

   const conn =  await connect();
   const [rows] = await conn.query('SELECT * FROM posts');
   return res.json(rows);

}

// devuelve un json como respuesta  
export async function createPost(req: Request, res: Response){
    const newPost: Post = req.body;
    console.log(newPost);
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    })
}
