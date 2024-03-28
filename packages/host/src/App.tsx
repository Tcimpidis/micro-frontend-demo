
import React, { Suspense } from "react";
import FakeUserProvider from "./FakeUserProvider";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Host } from "./components/Host";
import { HelloWorld } from "app1/helloworld";
import { User } from "app1/updateUser";
import { FetchedFromRemote } from "./components/Fetching";

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children:[
      {
        path:"",
        element: <Host />,
      },
      {
        path: "hello",
        element: <HelloWorld />,
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "fetch",
        element: <FetchedFromRemote />
      }

    ]
  }
])
export default function App() {
  return (
    <main>
      <FakeUserProvider>
        <RouterProvider router={router} />
      </FakeUserProvider>
    </main>
  );
}