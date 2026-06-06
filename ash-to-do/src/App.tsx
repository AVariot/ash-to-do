import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import TodoMain from "./pages/TodoMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <TodoMain /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
