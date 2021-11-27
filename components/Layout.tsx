import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import itmoLogo from "../public/itmo_logo.svg";
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
        <div className={"cursor-pointer"} onClick={() => router.push("/")}>
          <Image src={itmoLogo} alt="" />
        </div>
        <select
          defaultValue={lang}
          onChange={handleChangeLang}
          style={{ backgroundColor: "inherit", color: "white" }}
        >
          <option disabled={lang === '/ru'} className={"text-black"} value="/ru">
            Русский
          </option>
          <option disabled={lang === '/en'} className={"text-black"} value="/en">
            Английский
          </option>
        </select>
      </div>
      {children}
    </>
  );
};

export default Layout;
