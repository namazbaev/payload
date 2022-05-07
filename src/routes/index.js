import { routes } from "./routeComponent"
import { Routes, Route } from "react-router-dom"
export default () => (
    <Routes>
        {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
    </Routes>
)