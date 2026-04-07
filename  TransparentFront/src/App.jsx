import {AppProvider} from "./core/context.jsx";
import {RouterProvider} from "react-router-dom";
import roting from "./core/router.jsx";

const App = () => {
  return (
      <AppProvider>
        <RouterProvider router={roting}/>
      </AppProvider>
  )
}
export default App;