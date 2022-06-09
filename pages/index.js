import React from "react";
import Link from "next/link";
import { datas } from "../data";

export default function index({ posts }) {
  return (
    <div>
      <h1>List of posts</h1>
      <div>
        {posts.map((post, index) => {
          return (
            <Link href={`/${post.id}`} key={index} passHref>
              <h2>
                {post.id}.{post.title}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}



export const getStaticProps = async () => {
  return {
    props: {
      posts: datas,
    },
  };
};

// export async function getStaticProps(context) {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const posts = await res.json();

//   return {
//     props: { posts },
//   };
// }
