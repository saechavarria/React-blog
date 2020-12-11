import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

function Post() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const getPost = (id) => {
    return new Promise(async (resolved, reject) => {
      try {
        const doc = await db.collection("Posts").doc(id).get();
        const docData = doc.data();
        resolved(docData);
      } catch (error) {
        reject(new Error(error));
      }
    });
  };

  useEffect(() => {
    const getResponse = async () => {
      const response = await getPost(id);
      setData(response);
      setLoading(false);
    };
    getResponse()
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
    <div className="container">
      <div className="col-12 justify-content-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>
              <strong>{data.title}</strong>
            </h1>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              src={data.img}
              className="img-fluid"
              alt="Responsive in detail"
            />
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-12">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <button className="btn btn-outline-info">
                Back to the posts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
