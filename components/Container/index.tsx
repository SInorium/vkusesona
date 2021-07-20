import React from "react";
import container from "./container.module.scss";
interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string | any;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children, className } = props;
  return <div className={className + " " + container.main}>{children}</div>;
};

export default Container;
