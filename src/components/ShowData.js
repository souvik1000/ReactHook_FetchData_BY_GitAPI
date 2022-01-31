import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles.css";

function UserDetails(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/" + props.username)
      .then((response) => response.json())
      .then((jsonRes) => setUserData(jsonRes));

    // console.log(userData);
  }, [props.username]);

  return (
    <div>
      <p> UserId: {userData.id}</p>
      <p> UserName: {userData.login}</p>
      <img
        src={userData.avatar_url}
        alt="ProfilePic"
        width="200px"
        height="200px"
      />
      <p>Html_URL: {userData.html_url}</p>
      <p>Follower: {userData.followers_url}</p>
      <p>Repository_URL: {userData.repos_url}</p>
      <p>Site_Admin: {userData.site_admin}</p>
    </div>
  );
}

export default function ShowData(props) {
  const urlLocation = useParams();
  console.log(urlLocation);
  return (
    <>
      <UserDetails username={urlLocation.username} />
      <Link
        className="d-flex justify-content-center btn btn-info w-75 m-auto"
        to="/"
      >
        Back to Home
      </Link>
    </>
  );
}
