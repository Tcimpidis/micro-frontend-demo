import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { HelloWorld } from "./components/HelloWorld";
import { User } from "./components/TestUserUpdate";
import FakeUserProvider from "./FakeUserProvider";

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children:[
      {
        path:"",
        element: <HelloWorld />,
      },
      {
        path: "user",
        element: <User />
      },

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