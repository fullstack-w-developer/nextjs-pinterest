import jwt from "jsonwebtoken";

export const createAccessToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    // @ts-ignore
    process.env.Access_token,
    { expiresIn: "15m" }
  );
};

export const createRefreshToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    // @ts-ignore
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};
