import Image from "next/image";
import React from "react";

interface props {
  post: any;
}
const AddcommentPost = ({ post }: props) => {
  return (
    <div className="flex items-center mt-20 flex-row-reverse gap-3 ">
      <div>
        <Image
          src={post.profile}
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
