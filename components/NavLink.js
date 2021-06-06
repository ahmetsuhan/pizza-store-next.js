import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const links = [
    { name: "Siparişlerim", url: "/user/:id/siparislerim" },
    { name: "Siparişlerim", url: "/user/:id/siparislerim" },
  ];
  return (
    <>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link href="/user/id/siparislerim">
              <a>{link.name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default React.memo(NavLinks);
