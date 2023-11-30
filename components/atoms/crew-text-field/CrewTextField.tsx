import React from 'react';
import {useState} from "react";
import "./CrewTextField.scss";

interface CrewTextFieldProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const CrewTextField = ({value,placeholder, onChange, className}: CrewTextFieldProps) => {

return (
<input type="text" className={className} placeholder={placeholder} onChange={onChange} value={value} />
); 
};
export default CrewTextField;