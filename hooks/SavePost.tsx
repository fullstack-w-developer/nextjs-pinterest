import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { uppdateUserInfoApi } from "../utils/API";

export const SavePost = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("save");
  const user = useSelector((state: any) => state.user.user);
  const router = useRouter();

  const handleSavePost = () => {
    if (Object.keys(user).length === 0)
      return router.push("/login");
    setIsLoading(true);
    uppdateUserInfoApi(id)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setResult("Success");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setResult("Not Saved");
      });
  };
  return {
    isLoading,
    result,
    handleSavePost,
  };
};
