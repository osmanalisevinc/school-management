"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Mamamia</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}  className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button 
         className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
