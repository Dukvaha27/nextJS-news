import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import itmoLogo from "../public/itmo_logo.svg";
import logo from "../public/favicon.ico";
import Image from "next/image";
import { useRouter } from "next/router";
import { UrlObject } from "url";

interface HProps {
  children: any;
}

const Layout: NextPage<HProps> = ({ children }) => {
  return (
    <>
      <div className={"head"}>
        <div>
          <Link href="/">
            <Image src={itmoLogo} alt="" />
          </Link>
        </div>
        <div>
          <span className="mx-2">
            <Link href="/ru">
              <a>Русский</a>
            </Link>
          </span>
          <span className="mx-2">
            <Link href="/en">
              <a>Английский</a>
            </Link>
          </span>
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
      `}</style>
    </>
  );
};

export default Layout;
