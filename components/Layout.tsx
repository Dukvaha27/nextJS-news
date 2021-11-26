import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import logo from "../public/favicon.ico";

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
          <span className={"mx-2"}>
            <Link href="/lang">
              <a>eng</a>
            </Link>
          </span>
          <span className={"mx-2"}>ru</span>
        </div>
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
          background-image: url(${logo});
          color: black;
        }
      `}</style>
    </>
  );
};

export default Layout;
