import React from "react";
import { datas } from "../data";

export default function PostDetail({ dat }) {
  return (
    <div>
      <h1>
        {dat.id} {dat.title}
      </h1>
      <p>{dat.body}</p>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = datas.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      dat: data[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = datas.map((dat) => ({
    params: { id: dat.id.toString() },
  }));
  return { paths, fallback: false };
};

// export async function getStaticPaths() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const posts = await res.json();
//   const paths = posts.map((post) => {
//     return { params: { id: post.id.toString() } };
//   });

//   return {
//     paths,
//     fallback: false, // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   return {
//     props: { post },
//   };
// }
