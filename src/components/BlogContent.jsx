import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../firebase";

function BlogContent() {
  const [data, setdata] = useState([]);

  const getPosts = async () => {
    db.collection("Posts").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setdata(docs);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((post) => (
          <div className="col-lg-6 col-sm-12 post-div" key={post.id}>
            <img src={post.img} className="img-fluid" alt="Post" />

            <div className="container hovered-img">
              <div className="row justify-content-md-center">
                <h4>
                  <strong>{post.title}</strong>
                </h4>
              </div>
              <div className="row">

                <Link to={`/post/${post.id}`}>
                  <button className="btn btn-outline-info">
                    Read more
                  </button>
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
