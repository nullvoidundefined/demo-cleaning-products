import e from "cors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { HomePage } from "../page";
import { setUser, userSelector } from "../service/state/local/slice/user/user";
import { getUserById } from "../service/state/remote/getUserById";

const HomePageMediator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToItemListPage = async (userId:string) => {
    const user = await getUserById(Number(userId));
    if (user) {
      dispatch(setUser(user));
      navigate(`/item-list/${userId}`);
    } else {
      alert("User not found");
    }
  };

  return <HomePage onLogInButtonClick={navigateToItemListPage} />;
};

export { HomePageMediator };
