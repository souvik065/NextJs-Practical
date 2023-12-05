"use client";
import React from "react";
import { CrewButton, CrewTextField } from "../../atoms";
import { useState } from "react";
import { ClassNames } from "@emotion/react";
import { Stack } from "@mui/material";

interface CrewSearchBoxProps {
  className?: string;
  disabledText?: boolean;
  disabledButton?: boolean;
  textFieldPlaceholder?: string;
  buttonDisplayName?: string;
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonClick: () => void;
}

const SearchBox = ({
  className,
  onSearchTextChange,
  onSearchButtonClick,
  textFieldPlaceholder="Search",
  buttonDisplayName="Search",
  disabledText=false,
  disabledButton=true,
}: CrewSearchBoxProps) => {
  const [textValue, setTextValue] = useState("");

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    onSearchTextChange(event);
  };

  const handleButtonClick = () => {
    onSearchButtonClick();
    setTextValue("");
  };

  return (
    <Stack spacing={2} direction="row" className={className}>
        <CrewTextField
          onChange={handleTextFieldChange}
          className="crew-textfield bg-change"
          placeholder={textFieldPlaceholder}
          disabled={disabledText}
          value={textValue}
          variant="outlined"
        />
        <CrewButton
          onButtonClick={handleButtonClick}
          className="crew-button"
          displayName={buttonDisplayName}
          disabled={disabledButton}
          variant="contained"
        />
      </Stack>
  );
};

export default SearchBox;
