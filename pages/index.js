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
      {/*  <Link replace href="/forgotPassword">
        Forgot Password
      </Link>
      <Link href="/account">Account</Link>
      <Link href="/user/test2222">Account By ID</Link>
      <Link
        href={{
          pathname: "/user/[userid]",
          query: {
            userid: "test2222dsdds",
          },
        }}
      >
        Account By ID HREF ALTER
      </Link>
      <button onClick={handleClick}>Button Click</button> */}
    </div>
  );
};

export default Login;
