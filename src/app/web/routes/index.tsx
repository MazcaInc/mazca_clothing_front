import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@components/Generic/Navbar.tsx";
import { lazy, Suspense } from "react";
import { LoadSpinner } from "@components/Generic/LoadSpinner.tsx";
const Home = lazy(() => import("@screens/Home.tsx"));

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense
                fallback={
                    <div
                        className={
                            "fixed flex-col inset-0 flex items-center justify-center"
                        }
                    >
                        <LoadSpinner />
                    </div>
                }
            >
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
