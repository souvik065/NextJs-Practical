import React from "react";
import { useState } from "react";
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import "./CrewTextField.scss";

interface CrewTextFieldProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant: "outlined" | "filled" | "standard" | undefined;
}
const CrewTextField = ({
  value,
  placeholder,
  onChange,
  className,
  disabled,
  variant="outlined",
}: CrewTextFieldProps) => {
  return (
    <TextField
        label={placeholder}
        variant={variant}
        className={className}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
  );
};
export default CrewTextField;
