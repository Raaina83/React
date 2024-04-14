import React, {useState, useEffect} from "react";
import appwriteService from '../Appwrite/config'
import { Container, PostCard } from "../Components";

export default function AllPosts(){
    const [posts, setPosts] = useState([])
    useEffect(() => {

    }, [])

    appwriteService.getActivePosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                    <PostCard post={post}></PostCard>
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}

