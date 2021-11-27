import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import itmoLogo from "../public/itmo_logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

interface HProps {
  children: any;
}

const Layout: NextPage<HProps> = ({ children }) => {
  const [lang, setlang] = useState("");
  const router = useRouter();

  const handleChangeLang = (e: { target: { value: string } }) => {
    setlang(e.target.value);
    router.push(e.target.value);
  };

  return (
    <>
      <div
        className={"h-10 flex flex-wrap items-center justify-around"}
        style={{ background: "linear-gradient(90deg, #3951e7, #832ab9)" }}
      >
        <div className={"cursor-pointer"}>
          <Link href="/">
            <Image src={itmoLogo} alt="" />
          </Link>
        </div>
        <select
          value={lang}
          onChange={handleChangeLang}
          style={{ backgroundColor: "inherit", color: "white" }}
        >
          <option className={"text-black"} value="/ru">
            Русский
          </option>
          <option className={"text-black"} value="/en">
            Английский
          </option>
        </select>
      </div>
      {children}
    </>
  );
};

export default Layout;
