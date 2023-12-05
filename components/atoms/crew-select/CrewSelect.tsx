"use client";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

interface CrewSelectProps {
  options?: string[];
  className?: string;
  label?: string;
}

const CrewSelect = ({ options=[], label="Select Option" }: CrewSelectProps) => {
  const [item, setItem] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value as string);
  };

  return (
    <Box width="250px">
      <TextField
        label={label}
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


export default CrewSelect;
