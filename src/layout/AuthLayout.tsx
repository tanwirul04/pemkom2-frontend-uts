import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen items-center">
      {/* Kiri */}
      <div className="bg-gray-50 h-screen flex items-center justify-center">
        <img 
           src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
           alt="" 
           className="w-96" 
         /> 
      </div>

      {/* kanan */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}