import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
const styleCard = {
  backgroundColor: "rgb(158 158 158 / 32%)",
};
//Chunking
//Code Splitting
//lazy loading
//On demand loading
//dynamic import
const Grocery = lazy(() => import("./components/Grocery")); // ✅ Good: Declare lazy components outside of your components

const AppLayout = () => {
  const [userName, setUsername] = useState();
  useEffect(() => {
    const data = {
      name: "Pooja K",
    };
    setUsername(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root")); //? root element of html
root.render(<RouterProvider router={appRouter} />);
