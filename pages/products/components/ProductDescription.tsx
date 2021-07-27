import React from "react";
import { energyValues } from "utils/mock";
import { AboutWrapper, EnergyValueItem } from "@/elements";
import Document from "@/images/icons/document.svg";

import styles from "../styles.module.scss";

const ProductDescription = () => {
  return (
    <>
      <AboutWrapper about_title={"Описание"}>
        <p>
          Продукт крупнокусковой относится к категории Б, не содержит в составе
          кости и какие-либо примеси. Из говяжьей шеи <br />
          получаются очень наваристые и вкусные бульоны.
        </p>
        <br />
        <p>
          При длительной термической обработке получается нежной, мягкой с
          бархатистой текстурой. Также шею можно запекать, <br /> тушить и
          получать из нее великолепный фарш.
        </p>
      </AboutWrapper>
      <AboutWrapper about_title={"Энергетическая ценность на 100 г продукта"}>
        <div className="d-flex" style={{ gap: "0.75rem" }}>
          {energyValues.map((energyItem, id) => {
            return (
              <EnergyValueItem
                title={energyItem.title}
                value={energyItem.value}
                key={id}
              />
            );
          })}
        </div>
      </AboutWrapper>
      <AboutWrapper about_title={"Условия хранения"}>
        <p>
          При температуре от -2 до +4 °С. После вскрытия хранится 24 часа при
          температуре от +2 до +5 °С. <br /> В замороженном виде 6 месяцев.
        </p>
      </AboutWrapper>
      <AboutWrapper about_title={"Срок годности"}>
        <p>
          При температуре от -2 до +4 °С. После вскрытия хранится 24 часа при
          температуре от +2 до +5 °С. <br /> В замороженном виде 6 месяцев.
        </p>
      </AboutWrapper>
      <AboutWrapper about_title={"Вес / объем"}>
        <p>1 530 г</p>
      </AboutWrapper>
      <AboutWrapper about_title={"Сертифкаты и лицензии"}>
        <div className={styles.product_document__wrapper}>
          <div className={styles.product_document + " text-sm"}>
            <Document />
            <a href="#" target={"_self"}>
              Ветеринарское свидетельство
            </a>
          </div>
          <div className={styles.product_document + " text-sm"}>
            <Document />
            <a href="#" target={"_self"}>
              Ветеринарское свидетельство
            </a>
          </div>
        </div>
      </AboutWrapper>
    </>
  );
};

export default ProductDescription;
