import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoginComponent from "./../component/login";
import path from 'path';
import fs from 'fs/promises';

const Login = (props) => {

  console.log(props);
  return (
    <div>
      <LoginComponent></LoginComponent>
    </div>
  );
};
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log("DATA", data);
  return {
    props: {
      product: data
    }
  }
}
export default Login;
