import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react"
import LoginLeftSide from "../components/LoginLeftSide"
import { Link } from "react-router-dom"
const LoginLanding = () => {
     const portalOptions = [
        {
            to: "/login/admin",
            title: "Admin Login",
            description: "manage employees, attendance, and payroll",
            icon:ShieldIcon
        },
         {
            to: "/login/employee",
            title: "Employee Login",
            description: "view attendance and payroll information",
            icon:UserIcon
        }
    ]
  return (
   
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen ">
          
        
        <div className="w-full max-w-md animate-fade-in relative z-10">
            {/* HEADER */}
            <div className="mb-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">Welcome Back!</h2>
                <p className="text-slate-500">Please select your login portal</p>
            </div>
            {/* PORTAL LIST */}
            <div className="space-y-4">
                {portalOptions.map((portal) =>(
                    <Link key={portal.to} to={portal.to} className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-blue-500 hover:bg-indigo-50">
                    <div>
                        <h3 className="text-lg text-gray-800 group-hover:text-blue-600 mb-1 transition-colors ">{portal.title}</h3>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    </Link>
                 ) )} 
                 </div>
            {/* FOOTER */}
            <div className="mt-8 text-center text-sm text-slate-500"> {new Date().getFullYear()} © Your Company. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default LoginLanding
