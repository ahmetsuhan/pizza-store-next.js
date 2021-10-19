import React from "react";
import Image from "next/image";
const UserProfileEditpage = ({ user_id, user }) => {
  console.log(user);
  return (
    <div className="user-edit-profile-page">
      <div className="user-edit-profile-page-container">
        <div className="top">
          <div className="user-img">
            <Image width={50} height={50} />
          </div>
        </div>
        <div className="center">center</div>
        <div className="bottom">bottom</div>
      </div>
    </div>
  );
};

export default UserProfileEditpage;

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
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { user_id } }) {
  console.log(user_id + " static props ");
  const res = await fetch("http://localhost:3004/users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await res.json();
  const user = resData.filter((user) => user.id == user_id);

  return {
    props: {
      user_id,
      user,
    },
  };
}
