"use client";
import React from "react";
import { CrewButton, CrewTextField } from "../../atoms";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

interface CrewSearchBoxProps {
  className?: string;
}

const SearchBox = ({ className }: CrewSearchBoxProps) => {
  const [textValue, setTextValue] = useState("");

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTextValue(event.target.value);
  };

  const handleButton = () => {
    console.log("Text Value : " + textValue);
  };

  return (
    <div className={`align-content: center ${className}`}>
      <div className="search-box">
        <CrewTextField
          value={textValue}
          onChange={handleTextField}
          className="crew-textfield bg-change"
          placeholder="Search"
        />
        <CrewButton
          onButtonClick={handleButton}
          className="crew-button"
          displayName="Search"
        />
      </div>
    </div>
  );
};
export default SearchBox;
