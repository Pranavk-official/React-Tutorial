# React-Tutorial

## What is React?

- Front-End Javascript Library
- Build reusable UI Components
- Focuses on the View
  - i.e, What user sees
- Unopinionated
- Built any type of web application
  - Mobile, Web, Desktop, etc


## Prerequisites

1. HTML
2. CSS
3. Client Side Javascript

## How to Install

```bash

npm i react

```

or create a vite project using the following command

```bash

npm create vite@latest

```

## How to Run

```bash

npm install

npm run dev

```

## Important Notes

- `src/main.jsx` is the entry point of the application
- `react-dom` is used to render the application
- `<script type="module" src="/src/main.jsx"></script>` is used to render the application in client side


## ReactDOM 

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
```

- `ReactDOM` is used to render the application
- Works using Virtual DOM