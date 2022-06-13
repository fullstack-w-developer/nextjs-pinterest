import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineCopy } from "react-icons/ai";
interface props {
  ShowMoreInfo: boolean;
  url: string;
  id: string;
  className: string;
}
const ShowMoreInfo = ({
  ShowMoreInfo,
  url,
  id,
  className,
}: props) => {
  return (
    <div
      className={`bg-white h-fit absolute z-50 rounded-lg  border border-[#eee]  !w-64 overflow-hidden ${className} ${
        ShowMoreInfo ? "block" : "hidden"
      }`}
    >
      <ul className="ltr pt-3">
        <li>
          <a
            href={url}
            className="w-full"
            download={url}
            title="Download Image"
          >
            <span className="font-medium w-full block hover:bg-gray-100 text-gray-800 py-2 cursor-pointer px-3 transition-all">
              Download Image
            </span>
          </a>
        </li>
        <li>
          <a
            href={`https://web.whatsapp.com/send?text=https://nextjs-pinterest.vercel.app/post/${url}`}
            data-action="share/whatsapp/share"
            className="font-medium w-full  hover:bg-gray-100 text-gray-800 py-2 cursor-pointer px-3 transition-all flex justify-end"
            title="shere post link"
          >
            <IoLogoWhatsapp
              size={24}
              className="text-green-400"
            />
          </a>
        </li>
        <li
          onClick={() => {
            navigator.clipboard.writeText(
              `https://nextjs-pinterest.vercel.app/posts/${id}`
            );
          }}
        >
          <a
            className="font-medium w-full  hover:bg-gray-100 text-gray-800 py-2 cursor-pointer px-3 transition-all flex justify-end"
            title="copy link"
          >
            <AiOutlineCopy
              size={24}
              className="text-gray-400"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShowMoreInfo;
