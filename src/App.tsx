import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeAdmin from "./pages/homeAdmin";
import Home from "./pages/home";
import AdminLayout from "./components/layout-siderbar";

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
      </Routes>
    </div>
  );
}

export default App;
