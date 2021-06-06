import React from "react";
import Link from "next/link";
import { navLinks } from "@utils/constants.js";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "@store/user/userAction";
import { clearBasket } from "@store/basket/basketAction";

import { applicationHelper } from "@utils/applicationHelper.js";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    dispatch(setCurrentUser({}));
    dispatch(clearBasket());
    router.push("/");
  };

  const handleClick = (e) => {
    const target = e.target;
    const ul = applicationHelper.findParentNodeByClassName(target, "nav_ul");
    Array.from(ul.children).forEach((element, index) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    const li = applicationHelper.findParentNodeByClassName(target, "nav_li");
    li.classList.add("active");
  };

  return (
    <header>
      <div className="wrapper">
        <div className="top_nav">
          <Link href="/">
            <a className="logo">
              <img src="/images/pizzaria_logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <div className="nav_section">
          <nav>
            <ul className="nav_ul" onClick={(e) => handleClick(e)}>
              {navLinks.map((link, index) => {
                return (
                  <li className="nav_li" key={index}>
                    <Link href={link.url}>
                      <a>
                        <i className={link.icon}></i>
                        <span>{link.text}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}

              {Object.keys(currentUser).length > 0 && (
                <li className="nav_li">
                  <Link href={`/user/${currentUser.id}`}>
                    <a>
                      <i className="fas fa-user"></i>
                      <span>{"Profile"}</span>
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {Object.keys(currentUser).length === 0 ? (
          <div className="login_btn" onClick={handleLoginClick}>
            Login
          </div>
        ) : (
          <div className="login_btn" onClick={handleLogoutClick}>
            Logout
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
