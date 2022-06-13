import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/postModel";
import connnectDB from "../../../utils/connectDB";
import jwt from "jsonwebtoken";
import User from "../../../models/userModel";

connnectDB();
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      await getPostById(req, res);
      break;
    case "PATCH":
      await update(req, res);
      break;
  }
};

const getPostById = async (
  req: any,
  res: NextApiResponse
) => {
  try {
    const id = req.query.id;
    const post = await Post.findById(id);
    res.status(200).json({ post });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

const update = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    const id = req.query.id;

    const post = await Post.findById(id);

    const result: any = jwt.verify(
      rf_token,
      // @ts-ignore
      "IGUYBUCAPUEF78REUICBJHUIYCFG6R7FFSHJADGYCSGEYGD347TFGBXHSSSCSFGOIUWH48GHBG4G37RU"
    );

    if (!result)
      return res.status(400).json({
        err: "Your token is incorrect or has expired.",
      });

    const user = await User.findByIdAndUpdate(result.id, {
      $addToSet: { saved: post },
      
    });

    if (!user)
      return res
        .status(400)
        .json({ err: "User does not exist." });

    res.json({ msg: "success" });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
