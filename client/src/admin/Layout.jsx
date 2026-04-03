import toast from "react-hot-toast";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

      const navigate = useNavigate();

    const dashboardicon = (
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
        </svg>
    );

    const addicon = (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    );

    const sidebarLinks = [
        { name: "Dashboard", path: "dashboard", icon: dashboardicon },
        { name: "Add Project", path: "add-project", icon: addicon },
    ];


    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("adminToken");
        toast.success("Logged Out!");
        navigate("/login")
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-16 flex flex-col transition-all duration-300 bg-white">
                {sidebarLinks.map((item, index) => (
                    <Link to={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        {item.icon}
                        <p className="md:block hidden text-center">{item.name}</p>
                    </Link>
                ))}
            </div>

            {/* Right side */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                    <Link
                        to="/admin"
                        className="text-xl font-semibold tracking-tight text-gray-900 logo"
                    >
                        Duo Stack
                    </Link>
                    <div className="flex items-center gap-5 text-gray-500">
                        <p>Hi! Admin</p>
                        <button className='border rounded-full text-sm px-4 py-1' onClick={(e) => handleLogout(e)}>Logout</button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-auto flex-1 bg-gray-50">
                    <Outlet /> {/* <- this renders Dashboard/AddProject dynamically */}
                </div>
            </div>
        </div>
    );
};

export default Layout;