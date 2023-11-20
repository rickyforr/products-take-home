const TABLE_COLUMN_TITLES = [
  "ID",
  "Status",
  "Quantity",
  "Product name",
  "Prices",
];

const RESPONSIVE_PRODUCT_CELL = {
  base: "none",
  md: "table-cell",
};

/**
 * This object contains all the images used in the app rather than having it hardcoded.
 */
const appImages = {
  logo: {
    imageUrl: "/storm_logo_icon.svg",
    altText: "Storm Logo",
  },
  logoText: {
    imageUrl: "/storm_logo_text.svg",
    altText: "Storm Logo Text",
  },
};

/**
 * This object contains all the text used in the app rather than having it hardcoded.
 */
const uiText = {
  noProductsMessage: "No products found",
  quantityPrefix: "Qty - ",
  productsErrorMessage: "Error loading products",
  loadingMessage: "Loading...",
  searchInputPlaceholder: "Search",
  searchButtonText: "Search",
  closeButtonText: "Close",
  productsTableTitle: "Products",
  userNameMock: "John Doe",
  searchInputErrorMessage: "Invalid search.",
  resultsAmountText: (results: number, totalItems: number) =>
    `${results} of ${totalItems} results`,
};

export { TABLE_COLUMN_TITLES, RESPONSIVE_PRODUCT_CELL, uiText, appImages };
