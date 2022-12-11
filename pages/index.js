import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoginComponent from "./../component/login";

const Login = (props) => {
  
  console.log(props);
  return (
    <div>
      <LoginComponent></LoginComponent>
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: {
      product: [{ id: 1, title: "Product 1" }]
    }
  }
}
export default Login;
