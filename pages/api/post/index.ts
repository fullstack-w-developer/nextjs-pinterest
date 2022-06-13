import { NextApiRequest, NextApiResponse } from "next";
import connnectDB from "../../../utils/connectDB";
import Post from "../../../models/postModel";

connnectDB();
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      await getAllPost(req, res);
      break;
    case "POST":
      await postData(req, res);
      break;
  }
};

const getAllPost = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const page: any = req.query.page;
    const limit: any = req.query.limit;

    const posts = await Post.aggregate([
      {
        $facet: {
          metadata: [
            {
              $count: "Total",
            },
          ],
          data: [
            {
              $skip: (page - 1) * limit,
            },
            {
              $limit: limit * 1,
            },
          ],
        },
      },
    ]);

    const newData: any = [];
    const classCard = [
      "small",
      "medium",
      "x-small",
      "x-large",
    ];
    posts[0].data.forEach((post: any) => {
      newData.push({ ...post, size: classCard[Math.floor(Math.random() * classCard.length)]});
 
    });
    res.json({
      msg: "success",
      posts: {
        Total: posts[0].metadata[0].Total,
        data: newData,
      },
    });
  } catch (error: any) {
    res.status(500).json({ err: error.message });
  }
};

const postData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { username, profile, post, followers, comments } =
      req.body;

    const newpost = new Post({
      username,
      profile,
      post,
      followers,
      comments,
    });
    await newpost.save();
    res.json({
      msg: "success",
    });
  } catch (error: any) {
    res.status(500).json({ err: error.message });
  }
};
