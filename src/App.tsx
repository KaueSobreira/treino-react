import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeAdmin from "./pages/homeAdmin";
import Home from "./pages/home";
import AdminLayout from "./components/layout-siderbar";
import Barbeiros from "./pages/barbeiros";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/homeAdmin"
          element={
            <AdminLayout>
              <HomeAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/barbeiros"
          element={
            <AdminLayout>
              <Barbeiros />
            </AdminLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
