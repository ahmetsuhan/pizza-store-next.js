export const addItemToBasket = (item, basket) => {
  const existingBasketItem = basket.find((bItem) => bItem.id === item.id);

  if (existingBasketItem) {
    return basket.map((bItem) => {
      return bItem.id === item.id
        ? { ...bItem, quantity: bItem.quantity + 1 }
        : bItem;
    });
  }

  return [...basket, { ...item, quantity: 1 }];
};

export const removeItemToBasket = (item, basket) => {
  if (item.quantity === 1) {
    return basket.filter((bItem) => bItem.id !== item.id);
  }

  return basket.map((bItem) => {
    return bItem.id === item.id
      ? { ...bItem, quantity: bItem.quantity - 1 }
      : bItem;
  });
};

export const calculatebasketTotal = (basket) => {
  let total = 0;
  if (basket.length === 0) {
    return total;
  }

  basket.forEach((bItem) => {
    if (bItem.quantity !== 1) {
      total = total + bItem.quantity * bItem.price;
    } else {
      total += bItem.price;
    }
  });

  return total.toFixed(2);
};
