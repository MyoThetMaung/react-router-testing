import React,{Suspense} from 'react'
import Posts from '../components/Posts'
import {getSlowPosts} from '../util/api.js'
import { defer, useLoaderData, Await } from 'react-router-dom'

export default function DefferedBlogPosts(){
    const loaderData = useLoaderData()
    return (
        <>
            <h1>Our Blog Posts</h1>
            <Suspense fallback={<p>Loading ...</p>}>
                <Await resolve={loaderData.posts} errorElement={<p>Error loadig ...</p>}>
                    { (loadedPosts)=> <Posts blogPosts={loadedPosts}/> }
                </Await>
            </Suspense>
        </>
    )
}


export async function loader(){
    return defer({posts : getSlowPosts()})
}

