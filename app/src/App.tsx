import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TODOPath } from "./utils/path";
import { LogoComp } from "./components/general/logo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    const renderRoutes = () => {
        return TODOPath.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
        ));
    };

    return (
        <div>
            <div>
                <LogoComp />
            </div>
            <div>
                <Routes>{renderRoutes()}</Routes>
            </div>
        </div>
    );
}

export default App;
