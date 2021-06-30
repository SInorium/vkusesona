import React from "react";
import Image from "next/image";
import bannerImg from "@/images/banner.png";
import banner from "./banner.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={banner.wrapper}>
      <div className={banner.wrapper__description}>
        <h1 className={banner.title}>Бонусная программа</h1>
        <p className={banner.description}>
          Регистрируйтесь и оплачивайте бонусами покупки{" "}
        </p>
        <button type={"button"} className={banner.button_link}>
          <Link
            prefetch={false}
            href={"https://nextjs.org/docs/api-reference/next/link"}
          >
            Подробнее
          </Link>
        </button>
      </div>
      <div className={"next-image__wrapper"}>
        <Image
          className={banner.image}
          src={bannerImg}
          layout={"fill"}
          objectFit={"cover"}
        />
      </div>
    </div>
  );
};

export default Banner;
