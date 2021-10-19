import React from "react";
import NavLinks from "@/components/NavLink";
import UserProfileMenu from "@/components/UserProfileMenu";
import { useToggle } from "@hooks/useToggle";

const UserProfilePage = ({ userId, user }) => {
  const [showMenu, setShowMenu] = useToggle(false);

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
          {showMenu ? (
            <i
              onClick={() => setShowMenu(false)}
              className="fas fa-chevron-right "
            ></i>
          ) : (
            <i
              onClick={() => setShowMenu(true)}
              className="fas fa-chevron-left "
            ></i>
          )}
          <div className="img-container">
            <img
              src={user.picture.thumbnail}
              alt="logo"
              width={32}
              height={32}
            />
          </div>

          <div className="drop-down-area">
            <UserProfileMenu user={user} show={showMenu} />
          </div>
        </div>
      </div>

      <div className="content_wrapper profile">
        <div className="container">
          <div className="container-top">
            <figure>
              <img
                width="100px"
                height="100px"
                src={user.picture.large}
                alt=""
              />
            </figure>
            <h2 className="username">{user.name}</h2>
            <span>{user.email}</span>
          </div>
          <div className="container-content">
            <div className="order-containers">
              <div className="order-box">
                <div className="order-box-container">
                  <div className="boxtop">
                    <h2>Last Order</h2>
                  </div>
                  <div className="boxcenter">center</div>
                  <div className="boxbottom">bottom </div>
                </div>
              </div>
              <div className="order-box">
                <div className="order-box-container">asd</div>
              </div>
              <div className="order-box">
                <div className="order-box-container">asd</div>
              </div>
            </div>
          </div>
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

export default React.memo(UserProfilePage);
