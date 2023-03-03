import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/lucas-pessoals/1")
      .then((response) => {
        const { data } = response.data;
        setPost(data);
      });
  }, []);

  return (
    <div>
      <h1>{post?.attributes?.tittle}</h1>
      <p>{post?.attributes?.textpub}</p>
       <img src="https://hammerhead-app-5cwy4.ondigitalocean.app/uploads/31747820_2273470502895975_7966063349278441472_n_4d96fb1beb.jpg" alt=""></img>
    </div>
  );
}