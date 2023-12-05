"use client";
import { CrewSelect } from "@/components/atoms";
import { SearchBox } from "@/components/molecules";
import { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";

const CrewOrganism = () => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [newOptions, setNewOptions] = useState<string[]>([]);
  const [isDisabledTextBox, setIsDisabledTextBox] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const textValue = event.target.value;
    if(textValue !=="") {
      setTextFieldValue(textValue);
      setIsDisabledButton(false);
    }
  };

  const handleSearchButtonClick = () => {
    if (newOptions.length > 4) {
      setIsDisabledTextBox(true);
      setIsDisabledButton(true);
    } else {
      const newOption = [...newOptions];
      if(textFieldValue !== "") {
        newOption[0] = textFieldValue;
        setNewOptions([...newOptions, textFieldValue]);
      }
      
      setTextFieldValue("");
    }
  };

  return (
    <Box>
      <Stack spacing={2} direction="row">
        <SearchBox
          onSearchButtonClick={handleSearchButtonClick}
          onSearchTextChange={handleTextField}
          disabledText={isDisabledTextBox}
          disabledButton={isDisabledButton}
          buttonDisplayName="Add to List"
          textFieldPlaceholder="Enter Text"
        />
        <CrewSelect options={newOptions} label="Select"  />
      </Stack>
    </Box>
  );
};

export default CrewOrganism;