import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import { Item, User } from "../../type";
import { ItemList } from "../component";

type ItemListPageProps = {
  bundleItemList: Item[];
  recommendedItemList: Item[];
  onAddItemButtonClick: (itemId: string) => void;
  onRemoveItemButtonClick: (itemId: string) => void;
  onViewItemClick: (itemId: string) => void;
  user: User;
};

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const ItemListPage = ({
  bundleItemList,
  recommendedItemList,
  onAddItemButtonClick,
  onRemoveItemButtonClick,
  onViewItemClick,
  user,
}: ItemListPageProps) => {
  const { name } = user;

  const headerText = `Welcome back, ${name}!`;
  const bundleHeaderText = `Your bundle`;
  const recommendationsHeaderText = `Our favorites`;

  const ItemListsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
  `;

  return (
    <>
      <h3>{headerText}</h3>
      <Desktop>
        <ItemListsContainer>
          <ItemList
            buttonType="remove"
            headerText={bundleHeaderText}
            itemList={bundleItemList}
            onAddRemoveButtonClick={onRemoveItemButtonClick}
            onViewItemClick={onViewItemClick}
          />
          <ItemList
            buttonType="add"
            headerText={recommendationsHeaderText}
            itemList={recommendedItemList}
            onAddRemoveButtonClick={onAddItemButtonClick}
            onViewItemClick={onViewItemClick}
          />
        </ItemListsContainer>
      </Desktop>
      <Mobile>
        <Tabs
          defaultActiveKey="bundle"
          id="bundle-and-rec ommendations-tabs"
          className="mb-3"
        >
          <Tab eventKey="bundle" title={bundleHeaderText}>
            <ItemList
              buttonType="remove"
              itemList={bundleItemList}
              onAddRemoveButtonClick={onRemoveItemButtonClick}
              onViewItemClick={onViewItemClick}
            />
          </Tab>
          <Tab eventKey="recommendations" title={recommendationsHeaderText}>
            <ItemList
              buttonType="add"
              itemList={recommendedItemList}
              onAddRemoveButtonClick={onAddItemButtonClick}
              onViewItemClick={onViewItemClick}
            />
          </Tab>
        </Tabs>
      </Mobile>
    </>
  );
};

export { ItemListPage };
