import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/userModel";
import connnectDB from "../../utils/connectDB";
import Post from "./../../models/../models/postModel";

connnectDB();
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      await getInfoUser(req, res);
      break;
    case "POST":
      await signInUser(req, res);
      break;
  }
};

const getInfoUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
 try {
   
  
  } catch (error: any) {
    res.status(500).json({ err: error.message });
  }
};

const signInUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
 try {
   const {email, image, name} = req.body
   const user = await User.find({email})

   if(user) return res.status(400).json({err:"this email already exists"})

   const newUser = new User({email, image, name})
  await  newUser.save()

  res.status(200).json({msg:"success"})
  
  } catch (error: any) {
    res.status(500).json({ err: error.message });
  }
};
