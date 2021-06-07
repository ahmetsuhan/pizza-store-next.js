import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "@store/basket/basketAction";
import { setCurrentUser } from "@store/user/userAction";

const UserProfileMenu = ({ show, user }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setCurrentUser({}));
    dispatch(clearBasket());
    router.push("/");
  };

  return (
    <ul className={`userProfileMenu  ${show ? "open" : "close"}`}>
      <li>
        <Link href={`/user/edit/${user.id}`}>
          <a>Edit Profile</a>
        </Link>
      </li>

      <li onClick={handleLogout}>Logout</li>
    </ul>
  );
};

export default React.memo(UserProfileMenu);
