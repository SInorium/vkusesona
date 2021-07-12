import React, { FC } from "react";
import Image from "next/image";
import advantage from "./advantage.module.scss";

interface AdvantageItemProps {
  data: {
    icon: string;
    title: string;
    description: string;
  }[];
}
const AdvantageData = [
  {
    icon: "/images/icons/advantage_during.svg",
    title: "Удобно и вовремя",
    description:
      "Оформляйте и получайте заказы как вам удобно. Выполним заказ вовремя.",
  },
  {
    icon: "/images/icons/advantage_care.svg",
    title: "Забота",
    description:
      "Никакой ходьбы с пакетами. Доставим тяжёлые сумки прямо до вашей двери",
  },
  {
    icon: "/images/icons/advantage_quality.svg",
    title: "Свежесть и качество",
    description:
      "Следим за свежестью и качеством. Выбираем для вас, как для себя.",
  },
];

const AdvantageItem: FC<AdvantageItemProps> = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <article className={advantage.item_wrapper} key={item.title}>
            <Image
              className={advantage.image}
              src={item.icon}
              height={40}
              width={38}
            />
            <div className={advantage.description}>
              <h4 className={advantage.description_title}>{item.title}</h4>
              <p className={advantage.description_text + " text-sm"}>
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

const Advantage = () => {
  return (
    <section className={advantage.section}>
      <AdvantageItem data={AdvantageData} />
    </section>
  );
};

export default Advantage;
