import React from "react";
import productNavigationStyle from "./product-navigation.module.scss";

interface ProductNavigationProps {
  category: string[];
}

const ProductNavigation: React.FC<ProductNavigationProps> = (props) => {
  const { category } = props;
  return (
    <ul className={productNavigationStyle.list + " d-flex text-xs"}>
      {category.map((categoryName, id) => (
        <li className={productNavigationStyle.list_item} key={id}>
          {categoryName}
        </li>
      ))}
    </ul>
  );
};

export default ProductNavigation;
