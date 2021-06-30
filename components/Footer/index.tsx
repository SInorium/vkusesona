import React, { FC } from "react";
import { InputSearch } from "@/elements";
import { Container } from "@/components";
import footer from "./footer.module.scss";

interface FooterProps {
  footerMock?: {
    title: string;
    items: string[];
  }[];
}
const Footer: FC<FooterProps> = (props) => {
  // const { footerMock } = props;
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
      items: [
        "мясо",
        "птица",
        "овощи, фрукты",
        "сыры",
        "рыба, морепродукты, икра",
        "специи и соусы",
        "выпечка",
        "орехи и сухофрукты",
      ],
    },
  ];
  return (
    <footer className={footer.wrapper}>
      <header className={footer.header}>
        <h3 className={footer.title}>Лучшие предложения у вас на почте</h3>
        <div className={footer.input_wrapper}>
          <InputSearch iconType={"submit"} placeholder={"E-mail"} />
        </div>
      </header>
      <Container className={footer.wrapper_container}>
        <div className={"d-flex"}>
          {footerMock.map((list) => {
            return (
              <ul>
                <li>
                  <h4 className={"green"}>{list.title}</h4>
                </li>
                {list.items.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
