import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function FetchingData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((jsonRes) => setData(jsonRes));
  }, []);

  if (data) {
    return (
      <ul className="list-unstyled">
        {data.map((user) => (
          <li
            className="d-flex justify-content-around border border-dark border-1 p-2 m-2"
            key={user.id}
          >
            <p className="m-auto">{user.login}</p>
            <p className="m-auto">
              <Link className="btn btn-primary" to={"/" + user.login}>
                View Details
              </Link>
            </p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p> Page is loading. Please wait...</p>;
  }
}

export default function App() {
  return (
    <div>
      <FetchingData />
    </div>
  );
}
