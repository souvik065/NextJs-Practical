"use client";
import { CrewSelect } from "@/components/atoms/crew-select/CrewSelect";
import { SearchBox } from "@/components/molecules";
import { useState } from "react";
import { Stack, Box } from "@mui/material";

export const CrewOrganism = () => {
  const [option, setOption] = useState<string>("");
  const [newOptions, setNewOptions] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOption = event.target.value;
    setOption(newOption);
  };

  const handleSearchButtonClick = () => {
    if (newOptions.length > 4) {
      setIsDisabled(true);
    } else {
      const newOption = [...newOptions];
      newOption[0] = option;
      setNewOptions([...newOptions, option]);
      console.log("newOptions : ", newOptions);
    }
  };

  const SearchBoxhandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    //setOption(typeof value === "string" ? value.split(", ") : value);
  };

  return (
    <Box>
      <Stack spacing={2} direction="row">
        <SearchBox
          onSearchButtonClick={handleSearchButtonClick}
          onSearchTextChange={handleTextField}
          disabled={isDisabled}
        />
        <CrewSelect options={newOptions} />
      </Stack>
    </Box>
  );
};
