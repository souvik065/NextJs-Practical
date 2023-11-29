import React, { useState } from "react";
import { Button } from "@mui/material";
import "./CrewButton.scss";

interface CrewButtonProps {
  displayName?: string;
  onButtonClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CrewButton = ({
  displayName,
  onButtonClick,
  className,
  disabled,
}: CrewButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      variant="contained"
      onClick={onButtonClick}
    >
      {displayName}
    </Button>
  );
};

export default CrewButton;
