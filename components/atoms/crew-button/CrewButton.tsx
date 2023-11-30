import React, { useState } from 'react';
import "./CrewButton.scss";

interface CrewButtonProps {
  displayName?: string;
  onButtonClick?: () => void;
  className?: string;
}

const CrewButton = ({ displayName, onButtonClick, className }: CrewButtonProps) => {
  return (
    <button className={className} onClick={onButtonClick}>
      {displayName}
    </button>
  );
};

export default CrewButton;