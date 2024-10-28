import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages";
import SignUp from "./pages/auth/sign-up";

export const homePagePath = '/';
export const signUpPath = '/auth/sign-up';


const App = () => {
  const router = createBrowserRouter([
    {
      path: homePagePath,
      element: <HomePage />,
    },
    {
      path: signUpPath,
      element: <SignUp />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;
