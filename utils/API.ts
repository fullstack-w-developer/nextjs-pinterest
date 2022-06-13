import axios from "axios";

const baseUrl = process.env.BASE_Url;

export const getAllPostApi = ({ page = 1 }) =>
  axios.get(`${baseUrl}/api/post?page=${page}&limit=10`);

export const getPostByIdApi = ({ id }: { id: string }) =>
  axios.get(`${baseUrl}/api/post/query?id=${id}`);

export const uppdateUserInfoApi = (id: any) =>
  axios.patch(`${baseUrl}/api/post/query?id=${id}`);

export const getPostSavedApi = (req: any) =>
  axios.get(`${baseUrl}/api/post/saved`, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });

export const signupApi = (data: any) =>
  axios.post(`${baseUrl}/api/auth/signup`, data);
export const loginApi = (data: any) =>
  axios.post(`${baseUrl}/api/auth/login`, data);

export const generateTokenApi = () =>
  axios.get(`${baseUrl}/api/auth/accessToken`);
