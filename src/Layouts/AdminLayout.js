import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../Dashboard/components/NavbarAdmin";

export default function AdminLayout() {
  return (
    <div>
      {/* Navbar del Dashboard */}
      <NavbarAdmin />

      {/* Contenido dinámico de /dashboard */}
      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}
