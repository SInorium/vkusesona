import React from "react";
import Link from "next/link";
import productNavigationStyle from "./product-navigation.module.scss";
import { ProductNavigationProps } from "@/types";

const ProductNavigation: React.FC<ProductNavigationProps> = (props) => {
  const { category } = props;
  return (
    <ul className={productNavigationStyle.list + " d-flex text-xs"}>
      {category.map((item) => (
        <li className={productNavigationStyle.list_item} key={item.path}>
          <Link href={`/catalogue/${item.path}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductNavigation;
