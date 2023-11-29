"use client";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

interface CrewSelectProps {
  options?: string[];
  onButtonClick?: () => void;
  className?: string;
}

export const CrewSelect = ({ options }: CrewSelectProps) => {
  const [item, setItem] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value as string);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Option"
        select
        value={item}
        onChange={handleChange}
        fullWidth
      >
        {options?.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
