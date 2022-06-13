import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getPostByIdApi } from "../../utils/API";
import PostInfoById from "../../components/PostInfoById";
import CommentsPostById from "../../components/CommentsPostById";
import AddcommentPost from "../../components/AddcommentPost";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const PostId = ({ post }: any) => {

  return (
    <div className="mt-20 p-4 flex flex-col lg:flex-row  gap-4 justify-between w-[100%] md:w-[80%] lg:w-[70%] border rounded-md  h-full mx-auto shadow-sm">
      <Head>
        <title>postId | Shariflo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative  h-[30rem] w-full lg:flex-1 rounded-md overflow-hidden">
        <Image
          src={post.post}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 ltr">
        <PostInfoById post={post} />
        <CommentsPostById post={post} />
        <AddcommentPost post={post} />
      </div>

      <Link href="/" passHref>
        <div className="absolute lg:fixed rtl left-3 lg:left-8  lg:z-50 top-24 lg:top-36 cursor-pointer ">
          <HiOutlineArrowSmLeft size={30} />
        </div>
      </Link>
    </div>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: any;
}) {
  const { id } = params;
  const res = await getPostByIdApi({id})
  return {
    props: {
      post: res.data.post,
    },
  };
}

export default PostId;
