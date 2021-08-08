import { ACTIONS } from "./stateReducer.actions";

export const initialState = {
  products: [],
  bag: [],
  wishlist: [],
  filters: {
    priceSort: "",
    sortByBrand: [],
    sortByIdealFor: [],
    sortBySize: [],
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTIONS.SORT_BY_HIGH_TO_LOW:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceSort: action.payload,
        },
      };

    case ACTIONS.SORT_BY_LOW_TO_HIGH:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceSort: action.payload,
        },
      };

    case ACTIONS.SORT_BY_BRAND:
      return state.filters.sortByBrand.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.filter(
                (brand) => brand !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.concat(action.payload),
            },
          };

    case ACTIONS.SORT_BY_SIZES:
      return state.filters.sortBySize.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.filter(
                (brand) => brand !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.concat(action.payload),
            },
          };

    case ACTIONS.SORT_BY_IDEAL_FOR:
      return state.filters.sortByIdealFor.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.filter(
                (brand) => brand !== action.payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.concat(
                action.payload
              ),
            },
          };

    case ACTIONS.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.concat(action.payload),
      };

    case ACTIONS.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case ACTIONS.ADD_TO_BAG:
      return {
        ...state,
        bag: state.bag.concat(action.payload),
      };

    case ACTIONS.REMOVE_FROM_BAG:
      return {
        ...state,
        bag: state.bag.filter((product) => product.id !== action.payload.id),
      };

    case ACTIONS.INCREMENT_QUANTITY:
      return {
        ...state,
        bag: state.bag.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case ACTIONS.DECREMENT_QUANTITY:
      let bagItem = state.bag.find((item) => item.id === action.payload.id);
      return bagItem.quantity > 1
        ? {
            ...state,
            bag: state.bag.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            bag: state.bag.filter((item) => item.id !== action.payload.id),
          };

    case ACTIONS.MOVE_TO_WISHLIST:
      let product = state.bag.find((item) => item.id === action.payload.id);
      return {
        ...state,
        bag: state.bag.filter((item) => item.id !== action.payload.id),
        wishlist: state.wishlist.concat(product),
      };

    case ACTIONS.CLEAR_FILTER:
      return {
        ...state,
        filters: {
          priceSort: "",
          sortByBrand: [],
          sortByIdealFor: [],
          sortBySize: [],
        },
      };

    default:
      return { state };
  }
};
