import toast from "react-hot-toast";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

  const navigate = useNavigate();

  const dashboardicon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" strokeWidth="2"
        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5Zm16 14a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v2ZM4 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6Zm16-2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1h4a1 1 0 011 1v6Z"
      />
    </svg>
  );

  const addicon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  const sidebarLinks = [
    { name: "Dashboard", path: "dashboard", icon: dashboardicon },
    { name: "Add Project", path: "add-project", icon: addicon },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged Out!");
    navigate("/login");
  };

  return (

    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}

      <aside className="w-64 hidden md:flex flex-col border-r bg-white">

        <div className="h-16 flex items-center px-6 font-semibold text-lg border-b">
          Duo Stack
        </div>

        <nav className="flex flex-col mt-4">

          {sidebarLinks.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm transition
                ${isActive
                  ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>

          ))}

        </nav>

      </aside>

      {/* Main area */}

      <div className="flex flex-col flex-1">

        {/* Navbar */}

        <header className="h-16 flex items-center justify-between px-8 bg-white border-b">

          <h1 className="text-lg font-semibold text-gray-900">
            Admin Panel
          </h1>

          <div className="flex items-center gap-6">

            <p className="text-sm text-gray-500">
              Hi, Admin
            </p>

            <button
              onClick={handleLogout}
              className="text-sm border px-4 py-1 rounded-full hover:bg-gray-100"
            >
              Logout
            </button>

          </div>

        </header>

        {/* Content */}

        <main className="flex-1 overflow-auto p-8">

          <div className="max-w-5xl mx-auto">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
};

export default Layout;