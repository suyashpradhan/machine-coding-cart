export const sortData = (state, data) => {
  if (state.filters.priceSort === "high_to_low") {
    return [...data].sort((a, b) => b.price - a.price);
  }
  if (state.filters.priceSort === "low_to_high") {
    return [...data].sort((a, b) => a.price - b.price);
  }

  return data;
};
