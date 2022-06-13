import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { generateTokenApi } from '../utils/API';
import {addUserInfo} from "./../redux/User"
import Cookies from "js-cookie";

interface props {
    children:React.ReactNode
}
const Auth = ({children}:props) => {
  const dispatch = useDispatch()


  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if(!firstLogin)  return Cookies.remove("refreshtoken")

    if (firstLogin) {
      generateTokenApi()
        .then((res: any) => {
            dispatch(addUserInfo(res.data.user));
        })
        .catch((err: any) => {console.log(err)});
    }
  }, []);
 
  return (
    <>
    {children}
    </>
  )
}

export default Auth