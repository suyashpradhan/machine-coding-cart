export const filterData = (state, data) => {
  let filteredData = [...data];

  if (state.filters.sortByBrand.length !== 0) {
    filteredData = filteredData.filter((data) =>
      state.filters.sortByBrand.includes(data.brand)
    );
  }
  if (state.filters.sortBySize.length !== 0) {
    filteredData = filteredData.filter((data) =>
      state.filters.sortBySize.includes(data.size)
    );
  }
  if (state.filters.sortByIdealFor.length !== 0) {
    filteredData = filteredData.filter((data) =>
      state.filters.sortByIdealFor.includes(data.ideal)
    );
  }

  return filteredData;
};
