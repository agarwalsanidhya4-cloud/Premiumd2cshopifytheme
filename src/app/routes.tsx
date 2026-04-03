import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";
import { HowItWorks } from "./pages/HowItWorks";
import { About } from "./pages/About";
import { FAQ } from "./pages/FAQ";
import { Cart } from "./pages/Cart";
import { Account } from "./pages/Account";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "archive", element: <Archive /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "about", element: <About /> },
      { path: "faq", element: <FAQ /> },
      { path: "cart", element: <Cart /> },
      { path: "account", element: <Account /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
