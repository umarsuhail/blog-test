import Comments from '@/app/components/Comments';
import { apis } from '@/app/utils/api';
import { Comment, Post } from '@/app/utils/types';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function PostDetails() {
    const params = useParams();
    const [comments, setComments] = useState<any[]>([]);
    const router = useRouter();

    console.log(params);
    const [post, setPosts] = useState<Post>({
        userId: 0,
        id: 0,
        title: '',
        body: '',
    });

    async function fetchPosts() {
        try {
            const data = await fetch(`${apis.fetchPosts}/${params.id}`);
            const response = await data.json();
            setPosts(response)

        } catch (err) {
            console.log(err);

        }
    }
    async function fetchComments() {
        try {
            const data = await fetch(`${apis.fetchComments}`);
            const response = await data.json();
            setComments(response.filter(((comment: Comment) => {
                return comment.postId === Number(params.id)
            })))

        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        fetchPosts();
        fetchComments();

    }, []);
    useEffect(() => {
        console.log(comments);
    }, [comments]);

    const handleGoBack = () => {
        router.back() 
    }
    return (
        <div>
            <button className="m-3 p-2 flex items-center hover:text-blue-500 hover:border hover:border-blue-500 hover:rounded-md" onClick={handleGoBack}>
                {backIcon} Go Back
            </button>
            <div className='w-full bg-white flex justify-center'>

                <article className=" w-full text-left max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <div className='bg-gray-500 w-full m-3 rounded-md p-3'>
                        <h1 className='text-3xl  font-bold text-slate-100'> {post.title}</h1>
                    </div>
                    <h3 className='text-xl  font-medium text-gray-900 m-3'> {post.body}</h3>
                    <Comments comments={comments} />

                </article>
                <div className='m-3 bg-blue-200 flex'>

                </div>
            </div>
        </div>

    );

}
let backIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 5a1 1 0 1 0-2 0v5.6a3.4 3.4 0 0 1-3.4 3.4H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16H14.6a5.4 5.4 0 0 0 5.4-5.4z" /></svg>
