import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";

type HomePageProps = {
  onLogInButtonClick: (userId: string) => void;
};

const HomePage = ({ onLogInButtonClick }: HomePageProps) => {
  const [userId, setUserId] = useState("");

  const updateUserId = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    setUserId(input.value);
  };

  return (
    <>
      <h3><b>Welcome to your bundle viewer!</b></h3>
      <p>
        We're excited to provide you with recommendations that you can
        easily add or remove from your bundle, allowing you to pick from 120+
        products - from household basics to pantry staples.
      </p>
      <p>Please enter your user id to log into the app and view your bundle!</p>
      <input
        className="form-control mb-3"
        onChange={updateUserId}
        value={userId}
      />
      <Button
        disabled={!userId.length}
        onClick={() => onLogInButtonClick(userId)}
      >
        Log In
      </Button>
    </>
  );
};

export { HomePage };
