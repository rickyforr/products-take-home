This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/products](http://localhost:3000/api/products).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storm Products App

### Chakra UI
I used Chakra UI to create the UI components. Chakra UI is a component library that provides a set of accessible, reusable, and composable React components that make it super easy to create websites and apps. 

Responsiveness was achieved using object syntax for the breakpoints. This allows the components to be responsive without the need to use media queries.

`e.g.`
```
<Box
  bg={{ base: "red.200", md: "tomato" }}
  height={{ base: "100px", md: "200px" }}
  width={{ base: "100px", md: "200px" }}
  ```
[Chakra UI](https://chakra-ui.com/)

### React Icons
I used React Icons to add icons to the app. React Icons is a set of open source icons that can be used in react apps.
[React Icons](https://react-icons.github.io/react-icons/)

### Folder Structure
```
├── components         #All UI components are located in this folder<br>
│   ├── Header
│   │   ├── Header.tsx
│   │   └── Search
│   │       └── Search.tsx
│   ├── ProductModal
│   │   └── ProductModal.tsx
│   └── ProductsTable
│       ├── ProductsTable.tsx
│       └── ProductsTableRow.tsx
├── pages              #Next js folder used to create pages and api routes
│   ├── _app.tsx       #This file is used to wrap the app with context providers
│   ├── _document.tsx  #This file is used to add custom html tags
│   ├── api            
│   │   └── products.ts #This file contains the api to return products
│   └── index.tsx       #This is the main page. Uses UI elements from components folder
├── public              #This folder contains static files used in the app
│   ├── favicon.ico
│   ├── next.svg
│   ├── storm_logo_icon.svg
│   ├── storm_logo_text.svg
│   └── vercel.svg
├── styles             #This folder contains all the css files used in the app
│   ├── Header.module.css
│   ├── ProductModal.module.css
│   ├── ProductsTable.module.css
│   ├── Search.module.css
│   └── globals.css
├── system          #This folder contains types, data and logic that can be used across the app
│   ├── constants.ts
│   ├── types.ts
│   └── useProducts.ts
├── tsconfig.json
└── yarn.lock
```

### UI Components
The UI components are located in the components folder. The components are broken down into smaller components to make them reusable. The components are also responsive.

### System
#### useProducts
This hook is used to fetch the products from the api. It returns the products and a function to fetch the products.

#### types
This file contains all the types used in the app. If the product data model changes, this file will need to be updated.

#### constants
This file contains all the constants used in the app.

### Pages
If additional pages are added to the app, they should be added to the pages folder. The pages folder is used by next js to create the routes of the app.

#### index
This page is the main page of the app. It contains the header, search bar and products table. It also contains the logic to fetch the products and display the product modal.

### API
#### products
This api is used to fetch the products from the api. It returns the products in json format.

