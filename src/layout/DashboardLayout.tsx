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
        <div className="flex h-screen w-full overflow-hidden bg-gray-50">
            {/* kiri */}
            <div className="w-64 bg-slate-800 h-screen p-4 flex flex-col justify-between shrink-0">
                {/* nama aplikasi */}
                <div  className="border-b-4 border-gray-100 text-center p-2">
                    <h2 className="text-white text-2xl font-bold">Invofest Dashboard</h2>
                </div>

                {/* menu */}
                <div className="flex flex-col gap-2">
                    
                    <Link to="/dashboard" className="text-white p-4 font-bold hover:bg-blue-900 rounded-sm">
                        Dashboard
                    </Link>
                    <Link to="/dashboard/category" className="text-white p-4 font-bold hover:bg-blue-900 rounded-sm">
                        Category
                    </Link>
                    <Link to="/dashboard/event" className="text-white p-4 font-bold hover:bg-blue-900 rounded-sm">
                        Event
                    </Link>
                    <Link to="/dashboard/speaker" className="text-white p-4 font-bold hover:bg-blue-900 rounded-sm">
                        Speaker
                    </Link>
                    <Link to="/dashboard/biodata" className="text-white p-4 font-bold hover:bg-blue-900 rounded-sm">
                        Biodata
                    </Link>
                </div>

                {/* untuk button logout nanti taruh disini */}
                <div>
                    <button 
                        onClick={handleLogout}
                        className="bg-gray-200 p-2 text-gray-700 font-bold w-full hover:bg-blue-900 hover:text-white rounded-sm" type="button">
                        Logout
                    </button>
                </div>
            </div>

            {/* kanan */}
            <div className="flex-1 h-full overflow-y-auto p-6">
                <Outlet />
            </div>
        </div>
    );
}