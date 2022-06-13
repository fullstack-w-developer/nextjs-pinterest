import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardPintreset from "../components/CardPintreset";
import InfiniteScroll from "react-infinite-scroll-component";

import { getAllPostApi } from "../utils/API";

interface typePost {
  _id: string;
  username: string;
  profile: string;
  post: string;
  size:string
}

const Home: NextPage = ({ posts }: any) => {
  const [newData, setNewData] = useState(posts.data);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [selected, setSelected] = useState(null);


  const getMorePost = async () => {
    setPage((prev: any) => prev + 1);
    const res = await getAllPostApi({ page });
    setNewData((posts: any) => [
      ...posts,
      ...res.data.posts.data,
    ]);
  };

  useEffect(() => {
    if (
      parseInt(posts.Total) === parseInt(newData.length)
    ) {
      return setHasMore(false);
    }
    setHasMore(true);
  }, [page]);

  const toggleShowMore = (i:any)=>{
    if (selected === i) {
      // @ts-ignore
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div>
      <Head>
        <title>Home | Shariflo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfiniteScroll
        next={getMorePost}
        hasMore={hasMore}
        loader={<p>yddyyddy</p>}
        dataLength={newData.length}
      >
        <div className="container__home">
          {newData.map((post: typePost, index: number) => {
         
            return (
              <CardPintreset
                key={index}
                post={post}
                selected={selected === index}
                handleShowMore={()=> toggleShowMore(index)}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export async function getServerSideProps() {
  const page = 1;
  const res = await getAllPostApi({ page });
  return {
    props: {
      posts: res.data.posts,
    },
  };
}
export default Home;
