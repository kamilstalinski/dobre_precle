"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    setHasConsent(hasCookie("localConsent"));
  }, []);

  const acceptConsent = () => {
    setHasConsent(true);
    setCookie("localConsent", true, {});
  };

  if (hasConsent) return null;

  return (
    <div className='fixed inset-0 bg-slate-400 bg-opacity-80 z-[5000]'>
      <div className='fixed top-0 left-0 gap-8 flex md:flex-col items-center justify-between px-6 py-12 bg-text-color text-black w-full min-h-1/5'>
        <div>
          <h1 className='text-white text-[30px] mb-8 font-bold flex items-center md:justify-center'>
            <FontAwesomeIcon
              icon={faCookie}
              className='mr-2 text-[#ED8F28] text-[50px]'
            />
            Korzystamy z ciasteczek
          </h1>
          <p className='text-white'>
            Nasza strona używa plików cookies w celu umożliwienia poprawnego
            korzystania z serwisu. Jeśli nie blokujesz tych plików, zgadzasz się
            na ich użycie oraz zapisanie w pamięci urządzenia. Pamiętaj, że
            możesz samodzielnie zarządzać plikami cookies, zmieniając ustawienia
            przeglądarki. Brak zmiany ustawień przeglądarki oraz kliknięcie
            „Akceptuję” oznacza wyrażenie zgody na ich używanie.
            <br />
            <br />
            Dowiedz się więcej o tym jak używamy ciasteczek w{" "}
            <Link href='/polityka-prywatnosci' className='text-blue-400'>
              Polityce Prywatności
            </Link>
          </p>
        </div>
        <button
          className='px-4 py-2 bg-[#ED8F28] text-white font-bold rounded-lg md:w-full'
          onClick={acceptConsent}
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
