import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

interface props {
  post: any;
}
const AddcommentPost = ({ post }: props) => {
  const user = useSelector((state: any)=> state.user.user)
  return (
    <div className="flex items-center mt-20 flex-row-reverse gap-3 ">
      <div>
        <Image
          src={user.image}
          width={30}
          height={30}
          className="rounded-full border"
        />
      </div>
      <input
        placeholder="Add comment"
        className="flex-1 border border-gray-300 text-left px-3 placeholder:text-gray-300 py-2 rounded-xl"
      />
     
    </div>
  );
};

export default AddcommentPost;
