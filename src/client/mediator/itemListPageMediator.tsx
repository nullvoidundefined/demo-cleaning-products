import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { LoadingCard, MessageCard } from "../component";
import { ItemListPage } from "../page";
import { addItemToBundle, getItemList, removeItemFromBundle } from "../service";
import { Item } from "../../type";
import { useSelector } from "react-redux";
import { userSelector } from "../service/state/local/slice/user/user";

type ItemLists = {
  bundle: Item[];
  recommended: Item[];
};

const ItemListPageMediator = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const params = useParams();

  const [itemLists, setItemLists] = useState<ItemLists | undefined>();

  const addItem = (itemId: string) => {
    addItemToBundle(itemId, user.id)
      .then(() => {
        console.log("Successfully added Item");
        fetchData();
      })
      .catch(() => {});
  };

  const fetchData = async () => {
    const newItemList = await getItemList(user.id);
    updateItemList(newItemList);
  };

  const handleGetItemListError = (error: string) => {
    console.log("Loading Error", error);
  };

  const navigateToItemDetailPage = (itemId: string) => {
    alert(
      "Wanted to build an item detail page as well, but ran out of time. :)"
    );
  };

  const removeItem = (itemId: string) => {
    removeItemFromBundle(itemId, user.id)
      .then(() => {
        fetchData();
      })
      .catch(() => {});
  };

  const updateItemList = (newItemLists: ItemLists) => {
    setItemLists(newItemLists);
  };

  useEffect(() => {
    if (user) {
      fetchData().catch(handleGetItemListError);
    }
  }, [user]);

  if (!user) {
    return <Navigate to={"/home"} />;
  } else if (!itemLists) {
    return <LoadingCard />;
  } else if (String(user.id) !== params.userId) {
    return (
      <MessageCard
        icon="error"
        title="Forbidden"
        text="You don;t have access to this user's data"
      />
    );
  } else {
    const { bundle, recommended } = itemLists;
    return (
      <ItemListPage
        bundleItemList={bundle}
        recommendedItemList={recommended}
        onAddItemButtonClick={addItem}
        onRemoveItemButtonClick={removeItem}
        onViewItemClick={navigateToItemDetailPage}
        user={user}
      />
    );
  }
};

export { ItemListPageMediator };
