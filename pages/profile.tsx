import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostSavedApi } from "../utils/API";
import CardProfile from "../components/CardProfile";
import Head from "next/head";
import { useRouter } from "next/router";
const profile = ({ saved }: { saved: any }) => {
  const user = useSelector((state: any) => state.user);
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  const toggleShowMore = (i: any) => {
    if (selected === i) {
      // @ts-ignore
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    const first_login = localStorage.getItem("firstLogin");
    if (!first_login || Object.keys(user).length === 0) {
      router.push("/");
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex flex-col  justify-center items-center mt-10">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border flex justify-center items-center">
          {user.user.image && (
            <Image src={user.user.image} layout="fill" />
          )}
        </div>
        <p className="mt-3 font-medium text-lg">
          {user.user.name}
        </p>
      </div>
      <div className="border-b pb-2 w-[70%] mx-auto mt-7">
        <p className="font-bold text-xl text-[#1e272e]">
          saved
        </p>
      </div>
      <div className="container__home pb-20">
        {saved.map((post: any, index: number) => {
          return (
            <CardProfile
              key={index}
              post={post}
              selected={selected === index}
              handleShowMore={() => toggleShowMore(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps({
  req,
}: {
  req: any;
}) {
  let saved = [];
  if (req.headers.cookie) {
    const res = await getPostSavedApi(req);
    saved = await res.data.saved;
  }
  return {

    props: {
      saved,
    },
  };
}

export default profile;
