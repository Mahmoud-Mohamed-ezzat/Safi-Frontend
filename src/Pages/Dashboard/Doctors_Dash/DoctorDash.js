import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DoctorDash() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
    );
}
