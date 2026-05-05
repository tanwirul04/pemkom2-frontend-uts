import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="flex min-h-screen w-full">
            {/* kiri */}
            <div className="w-64 bg-red-900 h-screen p-4 flex flex-col justify-between">
                {/* nama aplikasi */}
                <div  className="border-b border-gray-100 text-center p-2">
                    <h2 className="text-white text-2xl">Invofest Dashboard</h2>
                </div>

                {/* menu */}
                <div className="flex flex-col gap-2">
                    
                    <Link to="/dashboard" className="text-white p-4 hover:bg-red-600 rounded-sm">
                        Dashboard
                    </Link>
                    <Link to="/dashboard/category" className="text-white p-4 hover:bg-red-600 rounded-sm">
                        Category
                    </Link>
                    <Link to="/dashboard/event" className="text-white p-4 hover:bg-red-600 rounded-sm">
                        Event
                    </Link>
                    <Link to="/dashboard/speaker" className="text-white p-4 hover:bg-red-600 rounded-sm">
                        Pembicara
                    </Link>
                </div>

                {/* untuk button logout nanti taruh disini */}
                <div>
                    <button 
                        onClick={handleLogout}
                        className="bg-red-200 p-2 text-red-600 w-full hover:bg-gray-100 hover:text-black rounded-s" type="button">
                        Logout
                    </button>
                </div>
            </div>

            {/* kanan */}
            <div className="w-full p-4">
                <Outlet />
            </div>
        </div>
    );
}