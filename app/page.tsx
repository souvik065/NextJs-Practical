"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Home: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");

  const handleButtonClick = () => {
    console.log("Text entered:", textValue);
  };

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const clearText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-r-emerald-600">
      <div className="border p-16">
        <div className="pb-5">
          <TextField
            id="standard-basic"
            label="Enter any text"
            variant="standard"
            value={textValue}
            onChange={handleTextFieldChange}
          />
        </div>
        <div className=" w-full">
          <Button
            color="success"
            variant="contained"
            className="bg-blue-600"
            onClick={handleButtonClick}
          >
            Contained
          </Button>
          <Button
            color="success"
            variant="contained"
            className="bg-slate-600"
            onClick={clearText}
          >
            Clear
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
