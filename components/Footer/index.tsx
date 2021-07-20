import React, { FC } from "react";
import { InputSearch } from "@/elements";
import { Container } from "@/components";
import footer from "./footer.module.scss";
import Instagram from "@/images/icons/instagram.svg";
import Facebook from "@/images/icons/facebook.svg";
import Youtube from "@/images/icons/youtube.svg";

import Mir from "@/images/icons/mir.svg";
import ApplePay from "@/images/icons/applePay.svg";
import Visa from "@/images/icons/visa.svg";
import MasterCard from "@/images/icons/masterCard.svg";
interface FooterProps {
  footerMock?: {
    title: string;
    items: string[];
  }[];
}
const footerMock = [
  {
    title: "покупателям",
    items: [
      "бонусная программа",
      "возврат товара",
      "поставка и оплата",
      "рецепты",
    ],
  },
  {
    title: "компания",
    items: ["о нас", "вакансии", "контакты"],
  },
  {
    title: "категории",
    items: ["мясо", "птица", "овощи, фрукты", "сыры"],
  },
  {
    title: " ",
    items: [
      "рыба, морепродукты, икра",
      "специи и соусы",
      "выпечка",
      "орехи и сухофрукты",
    ],
  },
];

const Footer: FC<FooterProps> = (props) => {
  // const { footerMock } = props;
  return (
    <footer className={footer.wrapper}>
      <div className={footer.heading}>
        <h3 className={footer.title}>Лучшие предложения у вас на почте</h3>
        <div className={footer.input_wrapper}>
          <InputSearch iconType={"submit"} placeholder={"E-mail"} />
        </div>
      </div>
      <Container className={footer.container}>
        <div className={footer.content}>
          {footerMock.map((list) => {
            return (
              <ul className={footer.list + " text-sm"} key={list.title}>
                <h4 className={footer.item_title + " green"}>{list.title}</h4>
                {list.items.map((item) => {
                  return (
                    <li className={footer.list__item} key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            );
          })}
          <div className={footer.contact}>
            <div className={footer.contact_tel}>
              <a className={footer.tel} href="tel:+7-800-298-8080">
                <h4 className={footer.item_title + " green"}>8-800-298-8080</h4>
              </a>{" "}
              <span>|</span>
              <a className={footer.tel} href="tel:+7-495-495-9595">
                <h4 className={footer.item_title + " green"}>8-495-495-9595</h4>
              </a>
            </div>
            <div className={footer.tel_desc + " text-sm gray"}>
              Принимаем звонки ежедневно с 09.00 до 22.00
            </div>
            <div className={footer.social}>
              <Instagram className={footer.social__icon} />
              <Facebook className={footer.social__icon} />
              <Youtube className={footer.social__icon} />
            </div>
          </div>
        </div>
        <div className={footer.policy + " text-sm gray"}>
          <p>© 2021 Вкусезона</p>
          <div className={footer.policy__wrapper_link}>
            <a className={footer.policy__link} href="">
              Политика конфиденциальности
            </a>
            <a className={footer.policy__link} href="">
              Положение о персональных данных
            </a>
            <a className={footer.policy__link} href="">
              Жалоба директору
            </a>
          </div>
          <p>Разработано в Fishlab</p>
        </div>
        <div className={footer.payment_method}>
          <Mir className={footer.payment_method__icon} />
          <ApplePay className={footer.payment_method__icon} />
          <Visa className={footer.payment_method__icon} />
          <MasterCard className={footer.payment_method__icon} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
