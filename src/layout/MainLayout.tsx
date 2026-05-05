import { Outlet } from "react-router-dom";
import Header from "../component/Header";


export default function MainLayout() {
    return (
        <div className="min-h-screen flex justify-between flex-col">
            <Header />

            <main className="max-w-7xl mx-auto py-6">
                <Outlet />
            </main>

            <footer>
                <p className="text-center text-grey-500 text-sm mt-4">
                    &copy; 2026 Invofest. All rights reserved.
                </p>
            </footer>
        </div>
    )
}      