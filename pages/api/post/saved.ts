import { NextApiRequest, NextApiResponse } from "next";
import connnectDB from "../../../utils/connectDB";
import Post from "../../../models/postModel";
import jwt from "jsonwebtoken";
import User from "../../../models/userModel";
import Cookies from "js-cookie";

connnectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      await getSavedPost(req, res);
      break;
  }
};

const getSavedPost = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token)
      return res
        .status(400)
        .json({ err: "Please login now!" });

    const result: any = jwt.verify(
      rf_token,
      // @ts-ignore
      "IGUYBUCAPUEF78REUICBJHUIYCFG6R7FFSHJADGYCSGEYGD347TFGBXHSSSCSFGOIUWH48GHBG4G37RU"
    );

    if (!result)
      return res.status(400).json({
        err: "Your token is incorrect or has expired.",
      });

    const saved = await User.findById(result.id).select(
      "saved"
    );

    const newData: any = [];
    const classCard = [
      "small",
      "medium",
      "x-small",
      "x-large",
    ];
    saved.saved.forEach((post: any) => {
      newData.push({
        ...post,
        size: classCard[
          Math.floor(Math.random() * classCard.length)
        ],
      });
    });

    res.json({ msg: "success", saved: newData });
  } catch (error: any) {
    res.status(500).json({ err: error.message });
  }
};
