import React from "react";
import Image from "next/image";
import bannerImg from "@/images/banner.png";
import bannerImgMin from "@/images/banner_min.png";
import banner from "./banner.module.scss";
import Link from "next/link";
import NavigationItem from "elements/navigationItem";

const Banner = () => {
  return (
    <div className={banner.wrapper}>
      <div className={banner.wrapper__description}>
        <h1 className={banner.title}>Бонусная программа</h1>
        <p className={banner.description}>
          Регистрируйтесь и оплачивайте бонусами покупки{" "}
        </p>
        <button type={"button"} className={banner.button_link}>
          <Link prefetch={false} href={"/"}>
            <a href="">Подробнее</a>
          </Link>
        </button>
        <NavigationItem
          color={"white"}
          text={"Подробнее"}
          className={banner.link}
        />
      </div>
      <div className={"next-image__wrapper"}>
        <Image
          className={banner.image + " " + banner.image__desktop}
          src={bannerImg}
          layout={"fill"}
          objectFit={"cover"}
        />
        <Image
          className={banner.image + " " + banner.image__mobile}
          src={bannerImgMin}
          layout={"fill"}
          objectFit={"cover"}
        />
      </div>
    </div>
  );
};

export default Banner;
