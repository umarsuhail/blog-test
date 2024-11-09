'use client'
import { useEffect, useState } from "react"
import { apis } from "../utils/api"
import Card from "./Card";
import { Post } from "../utils/types";

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    async function fetchPosts() {
        try {
            const data = await fetch(apis.fetchPosts);
            const response = await data.json();
            setPosts(response)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts()
    }, []);
  
    return (
        <div className="flex flex-wrap">
            {posts.map((post: Post) => (
                <Card postId={post.id} key={post.id} userId={post.userId} description={post.body} title={post.title}></Card>
            ))}
        </div>
    )
}
