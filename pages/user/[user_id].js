import React from "react";
import NavLinks from "@/components/NavLink";

const UserProfilePage = ({ userId, user }) => {
  if (!user || Object.keys(user).length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleClick = () => {};

  return (
    <>
      <div className="title_page profile">
        <h1>{user.name}</h1>
        <div onClick={handleClick} className="center">
          +
        </div>
        <div className="right">
          <div className="img-container">
            <img
              src={user.picture.thumbnail}
              alt="logo"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      <div className="content_wrapper profile">
        <div className="container">
          <nav>
            <ul>
              <NavLinks />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params: { user_id } }) {
  const res = await fetch(`http://localhost:3004/users/${user_id}`, {
    method: "GET",
    "Content-type": "application/json",
  });

  const resData = await res.json();

  return {
    props: {
      userId: user_id,
      user: resData,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3004/users", {
    method: "GET",
    "Content-type": "application/json",
  });

  const resData = await res.json();

  const paths = resData.map((user) => ({
    params: { user_id: String(user.id) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default UserProfilePage;
