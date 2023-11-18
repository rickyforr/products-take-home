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

  const uiText = {
    noProductsMessage: "No products found",
    quantityPrefix: "Qty - ",
    productsErrorMessage: "Error loading products",
    loadingMessage: "Loading...",
    searchInputPlaceholder: "Search",
    searchButtonText: "Search",
  }
  
  export { TABLE_COLUMN_TITLES, RESPONSIVE_PRODUCT_CELL, uiText };