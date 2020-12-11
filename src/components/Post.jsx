import { Link, useParams } from "react-router-dom";

import g2rekkles from "../img/g2rekkles.jpg";

function Post() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <div className="col-12 justify-content-center">
        <div className="row justify-content-center">
          <h1>
            <strong>G2 Rekkles Confirmed</strong>
          </h1>
        </div>
        <br />
        <div className="row justify-content-center">
          <img
            src={g2rekkles}
            className="img-fluid"
            alt="Responsive in detail"
          />
        </div>
        <br />
        <div className="row justify-content-center">
          <p>
            Fnatic has lost their long-time AD Carry, Martin “Rekkles” Larsson.
            According to Esportsmaníacos journalist Pablo “BloopGG” Suarez,
            Rekkles is reportedly heading to G2 Esports for the 2021 season,
            replacing Luka “Perkz” Perković. The veteran bot laner has spent the
            eight years with Fnatic, achieving incredible results in the LEC and
            at Worlds. While some may see this as a huge loss for Fnatic, it’s
            only the beginning of some long overdue changes.
          </p>
        </div>
        <div className="row">
          <Link to="/">
            <button className="btn btn-outline-info">Back to the posts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
