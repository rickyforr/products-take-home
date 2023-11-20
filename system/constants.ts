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
  searchInputErrorMessage: "Remove invalid characters.",
  notificationMenuItemText: "Notifications",
  settingsMenuItemText: "Settings",
  keyFeaturesTitle: "Key Features",
  resultsAmountText: (results: number, totalItems: number) =>
    `${results} of ${totalItems} results`,
};

const mockKeyFeatures = [
  "2.6 GHz Intel Core i7 6-Core (9th Gen)",
  "16GB of 2666 MHz DDR4 RAM | 8TB SSD",
  '16" 3072 x 1920 Retina Display',
  "AMD Radeon Pro 5600M GPU (8GB HBM2)",
];

const mockProductDetails =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam aliquam, nisl nisi aliquam nunc, vitae aliquam nisl nisl nec nisl.";

export { TABLE_COLUMN_TITLES, RESPONSIVE_PRODUCT_CELL, uiText, appImages, mockKeyFeatures, mockProductDetails };
