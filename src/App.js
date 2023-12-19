import './App.css';
import {Home} from "./greet/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Greet} from "./greet/Greet";
import {AddName} from "./greet/AddName";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/greet',
            element: <Greet/>,
        },
        {
            path: '/add-name',
            element: <AddName/>
        }
    ]
);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
