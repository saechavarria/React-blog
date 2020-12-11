import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../firebase";

function BlogContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    return new Promise(async (resolved, reject) => {
      try {
        db.collection("Posts").onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          resolved(docs);
        });
      } catch (error) {
        reject(new Error(error));
      }
    });
  };

  useEffect(() => {
    const getResponse = async () => {
      const response = await getPosts();
      setData(response);
      setLoading(false);
    };
    getResponse();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {data.map((post) => (
          <div className="col-lg-3 col-sm-6 post-div" key={post.id}>
            <img src={post.img} className="img-fluid" alt="Post" />

            <div className="container hovered-img">
              <div className="row justify-content-center">
                <h4>
                  <strong>{post.title}</strong>
                </h4>
              </div>
              <div className="row justify-content-center">
                <Link to={`/post/${post.id}`}>
                  <button className="btn btn-outline-info">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogContent;
