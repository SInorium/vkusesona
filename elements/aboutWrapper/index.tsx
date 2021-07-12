import React from "react";
import about_wrapper from "./about_wrapper.module.scss";

interface AboutWrapperProps {
  about_title: string;
  font_size?: number;
}

const AboutWrapper: React.FC<AboutWrapperProps> = (props) => {
  const { about_title, children, font_size } = props;
  return (
    <section className={about_wrapper.section}>
      <h4 style={{ fontSize: font_size }} className={about_wrapper.title}>
        {about_title}
      </h4>
      {children}
    </section>
  );
};

export default AboutWrapper;
