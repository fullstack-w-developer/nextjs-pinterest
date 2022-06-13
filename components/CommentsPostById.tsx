import Image from "next/image";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
const CommentsPostById = ({ post }: { post: any }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <div className="flex justify-end mt-10">
        <div className=" text-gray-800 flex gap-1 items-center">
          <div className="font-thin text-xl flex gap-1 items-center">
            <div className="hover:bg-gray-200 w-9 h-9 rounded-full cursor-pointer flex justify-center items-center">
              <MdArrowForwardIos
                onClick={() =>
                  setShowComments(!showComments)
                }
                className={`${
                  showComments
                    ? "rotate-90 transition-all"
                    : "rotate-0"
                }`}
              />
            </div>
            <span>Comments</span>
          </div>
          <span className="text-2xl font-bold">
            {post.comments.length}
          </span>
        </div>
      </div>
      {showComments && (
        <div className="mt-3">
          <div className="flex gap-2 items-center flex-row-reverse">
            <div>
              <Image
                src={post.profile}
                width={30}
                height={30}
                className="rounded-full "
                objectFit="cover"
              />
            </div>
            <p className="font-bold text-md ">
              {post.username}
            </p>
            <p className="text-sm text-gray-400">
              {post.comments[0]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsPostById;
