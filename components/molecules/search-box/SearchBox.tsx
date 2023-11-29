"use client";
import React from "react";
import { CrewButton, CrewTextField } from "../../atoms";
import { useState } from "react";
import { ClassNames } from "@emotion/react";
import { Stack } from "@mui/material";

interface CrewSearchBoxProps {
  className?: string;
  disabled?: boolean;
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonClick: () => void;
}

const SearchBox = ({
  className,
  onSearchTextChange,
  onSearchButtonClick,
  disabled,
}: CrewSearchBoxProps) => {
  const [textValue, setTextValue] = useState("");

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTextValue(event.target.value);
  };

  const handleButton = () => {
    console.log("Text Value : " + textValue);
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <CrewTextField
          onChange={onSearchTextChange}
          className="crew-textfield bg-change"
          placeholder="Search"
          disabled={disabled}
          //InputProps={{ style: { color: "black" } }}
        />
        <CrewButton
          onButtonClick={onSearchButtonClick}
          className="crew-button"
          displayName="Search"
        />
      </Stack>
    </>
  );
};
export default SearchBox;
