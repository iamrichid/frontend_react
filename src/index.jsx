import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from "./error-page";
import Book, {loader as contactLoader } from "./routes/book";
import EditBook ,{ action as editAction } from "./routes/edit";
import NewBook, {action as newAction} from "./routes/new";
import { action as destroyAction } from "./routes/destroy";
import HomePage from "./routes/homepage"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Register,  { action as regAction } from './routes/register';
import Login ,{ action as loginAction }from './routes/login';
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "books/:bookId",
        element: <Book />,
        errorElement: <ErrorPage />,
        loader: contactLoader,
      },
      {
        path: "books/:bookId/edit",
        element: <EditBook />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "books/new",
        element: <NewBook />,
      },
      {
        path: "books/:bookId/destroy",
        action: destroyAction,
      },
    ],
  },

  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: regAction,
    
  },

  {
    path: "login",
    element: <Login />,
    action: loginAction,
  },

  {
    path: "/",
    element: <HomePage/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <RouterProvider router={router}/>
 
  </React.StrictMode>
);

