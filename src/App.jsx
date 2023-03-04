import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios
      .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/lucas-pessoals")
      .then((response) => {
        const { data } = response.data;
        setPosts(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/upload/files")
      .then((response) => {
        const { data } = response;
        const urls = data.map(file => 'https://hammerhead-app-5cwy4.ondigitalocean.app' + file.url);
        setImageUrls(urls);
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h1>{post?.attributes?.tittle}</h1>
          <p>{post?.attributes?.textpub}</p>
          <img src={imageUrls[index]} alt="" />
        </div>
      ))}
    </div>
  );
}
