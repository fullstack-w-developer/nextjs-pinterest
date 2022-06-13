import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "./../redux/User";

const Header = () => {
  const user = useSelector((state: any) => state.user.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const SignOut = async () => {
    localStorage.clear();
    dispatch(addUserInfo({}));
  };
  return (
    <>
      <header className="sticky top-0 left-0 w-full flex-row-reverse bg-white z-50 h-[70px] flex justify-between items-center px-8 shadow-md">
        {/* header right */}

        {user?.image ? (
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <a className="cursor-pointer flex items-center">
                <Image
                  // @ts-ignore
                  src={user.image}
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </a>
            </Link>
            <p className="hidden md:block">{user.email}</p>
            <button
              onClick={() => SignOut()}
              className="text-gray-900 font-medium px-3 py-1 rounded-lg hover:bg-[#0096f5] hover:text-white transition-all "
            >
              SignOut
            </button>
          </div>
        ) : (
          <Link href="/login">
            <a>SignIn</a>
          </Link>
        )}

        {/* @ts-ignore */}

        {/* header left */}
        <div className="flex items-center gap-4">
          <div>
            <Link href="/" passHref>
              <a className=" block relative w-8 h-8 rounded-full">
                <Image
                  src="https://iconarchive.com/download/i80477/uiconstock/socialmedia/Pinterest.ico"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/">
              <a
                className={`  text-sm px-7 py-[7px] rounded-md ${
                  router.asPath === "/"
                    ? "bg-gray-900 text-white"
                    : "border text-gray-900"
                }`}
              >
                Home
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
