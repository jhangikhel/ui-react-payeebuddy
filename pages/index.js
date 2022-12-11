import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoginComponent from "./../component/login";

const Login = () => {
  const router = useRouter();
  const handleClick = () => {
    //router.push("/forgotPassword");
    //router.replace("/forgotPassword");
    router.push({
      pathname: "/user/[userid]",
      query: {
        userid: "test2222dsdds",
      },
    });
  };
  return (
    <div>
      <LoginComponent></LoginComponent>
    </div>
  );
};

export default Login;
