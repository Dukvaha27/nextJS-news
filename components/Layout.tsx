import React from "react";
import { NextPage } from "next";
import Link from "next/link";

interface HProps {
  children: any;
}

const Layout: NextPage<HProps> = ({ children }) => {
  return (
    <>
      <div className={"head"}>
        <div>
          <Link href="/">
            <a>LOGO Университет ИТМО</a>
          </Link>
        </div>
        <div>
          <span>
            <Link href="/">
              <a>ru</a>
            </Link>
          </span>
          <span>
            <Link href="/Lang">
              <a>eng</a>
            </Link>
          </span>
        </div>
        {/*<select>*/}
        {/*  <option>Русский</option>*/}
        {/*  <option>Английский</option>*/}
        {/*</select>*/}
      </div>
      {children}
      <style jsx>{`
        .head {
          height: 40px;
          background: linear-gradient(90deg, #3951e7, #832ab9);
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
        }
        select {
          background-color: inherit;
        }
        option {
          color: black;
        }
      `}</style>
    </>
  );
};

export default Layout;
