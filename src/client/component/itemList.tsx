import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { Item } from "../../type";
import { COLOR } from "../constant";
import { Icon } from "./icon";

type ItemListProps = {
  buttonType: "add" | "remove";
  itemList: Item[];
  onAddRemoveButtonClick: (itemId: string) => void;
  onViewItemClick: (itemId: string) => void;

  headerText?: string;
};

const ItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const IconButton = styled(Button)`
  width: 50px;
`;

const ItemList = ({
  buttonType,
  headerText,
  itemList,
  onViewItemClick,
  onAddRemoveButtonClick,
}: ItemListProps) => {
  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-100">
      {headerText ? <h4>{headerText}</h4> : null}
      {itemList.map((item: Item, index: number) => {
        const { id, name, price, description, img_link: imageLink } = item;
        const formattedPrice = currencyFormatter.format(price);
        const descriptionLines = description.split("\\n");
        const key = `item-list--item--${index}`;
        console.log("descriptionLines:", descriptionLines);
        return (
          <ItemContainer key={key}>
            <div>
              <img className="mb-2" height="60" width="110" src={imageLink} />
              <ButtonContainer>
                <IconButton
                  size="sm"
                  onClick={() => onAddRemoveButtonClick(id)}
                  variant={buttonType === "add" ? "success" : "danger"}
                >
                  {buttonType === "add" ? (
                    <Icon color={COLOR.WHITE} type="add" />
                  ) : (
                    <Icon color={COLOR.WHITE} type="cancel" />
                  )}
                </IconButton>
                <IconButton onClick={() => onViewItemClick(id)}>
                  <Icon color={COLOR.WHITE} type="view" />
                </IconButton>
              </ButtonContainer>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-between">
                <div>
                  <b>{name}</b>
                </div>
                <div>{formattedPrice}</div>
              </div>
              <ul>
                {descriptionLines.map((line: string, index: number) => {
                  return <li key={`item-list--item--${index}`}>{line}</li>;
                })}
              </ul>
            </div>
          </ItemContainer>
        );
      })}
    </div>
  );
};

export { ItemList };
