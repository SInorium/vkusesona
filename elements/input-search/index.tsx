import React from "react";
// import Image from "next/image";
// import search from "@/images/icons/search.svg";

export interface InputSearchProps {
  value?: string;
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { value, placeholder } = props;

  return (
    <label className="input-search__label">
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        className="input-search"
      />
      {/* <Image src={search} /> */}
    </label>
  );
};

export default InputSearch;
