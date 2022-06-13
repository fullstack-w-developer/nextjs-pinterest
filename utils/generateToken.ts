import jwt from "jsonwebtoken";

export const createAccessToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    "TGYBUKEJRKSLHCBYTDCEVAUYBIKH7YXFDI7DBYU34I",
    { expiresIn: "15m" }
  );
};

export const createRefreshToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    "IGUYBUCAPUEF78REUICBJHUIYCFG6R7FFSHJADGYCSGEYGD347TFGBXHSSSCSFGOIUWH48GHBG4G37RU",
    { expiresIn: "7d" }
  );
};
