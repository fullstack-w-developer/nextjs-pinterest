import app from "./axios";

export const getAllPostApi = ({ page = 1 }) =>
  app.get(`api/post?page=${page}&limit=10`);

export const getPostByIdApi = ({ id }: { id: string }) =>
  app.get(`api/post/query?id=${id}`);

export const uppdateUserInfoApi = (id: any) =>
  app.patch(`api/post/query?id=${id}`);

export const getPostSavedApi = (req: any) =>
  app.get(`api/post/saved`, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });

export const signupApi = (data: any) =>
  app.post(`api/auth/signup`, data);
export const loginApi = (data: any) =>
  app.post(`api/auth/login`, data);

export const generateTokenApi = () =>
  app.get(`api/auth/accessToken`);
