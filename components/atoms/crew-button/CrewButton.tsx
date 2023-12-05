import React, { useState } from "react";
import { Button } from "@mui/material";
import "./CrewButton.scss";

interface CrewButtonProps {
  displayName?: string;
  onButtonClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant: "text" | "outlined" | "contained" | undefined;
}

const CrewButton = ({
  displayName,
  onButtonClick,
  className,
  disabled,
  variant="contained",
}: CrewButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      variant={variant}
      onClick={onButtonClick}
    >
      {displayName}
    </Button>
  );
};

export default CrewButton;
