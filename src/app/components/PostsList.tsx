'use client'
import { useEffect, useState } from "react"
import { apis } from "../utils/api"
import Card from "./Card";

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
           const data =  await fetch(apis.fetchPosts);
           const response = await data.json();
           console.log(response,'response');
           setPosts(response)

        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    useEffect(() => {
        console.log(posts, 'posts');
    }, [posts])

    return (
        <div className="flex flex-wrap">
            {posts.map((post:Post)=>(
                <Card key={post.id} userId={post.userId} description={post.body} title={post.title}></Card>
            ))}
        </div>
    )
}
