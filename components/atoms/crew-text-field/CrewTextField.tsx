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
}
const CrewTextField = ({
  value,
  placeholder,
  onChange,
  className,
  disabled,
}: CrewTextFieldProps) => {
  return (
    <>
      <TextField
        label={placeholder}
        variant="outlined"
        className={className}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      <div></div>
    </>
  );
};
export default CrewTextField;
