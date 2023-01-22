import axios from "axios";
import { getSession } from "next-auth/react";
import React from "react";
const Index = (props) => {

  /* */
  return (
    <div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const j = [{
    name: "BHIM"
  }]
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  /* if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  else {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  } */
  return {
    props: {
      p: "A",
      j,
      result: result.data
    }
  }
}
export default Index;
