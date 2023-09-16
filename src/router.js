import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { peopleLoader, showLoader } from "./loader"
import { createAction, deleteAction, updateAction } from "./action"
import Update from "./pages/Update"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
<Route path="" element={<Index />} 
loader= {peopleLoader} />
<Route path=":id" element={<Show />} loader={showLoader}/>
<Route path=":id/edit" element={<Update />} loader={showLoader}/>
<Route path="create" action={createAction}/>
<Route path="update/:id" action={updateAction}/>
<Route path="delete/:id" action={deleteAction} />
  </Route>)
)

export default router