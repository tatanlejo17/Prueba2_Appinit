import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../context/useAuthStore';
import logo from '../assets/pokeball.png';

export default function Layout() {

    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-violet-700 text-white shadow-md sticky top-0 z-50">
                <div className="max-w-5xl mx-auto py-1">
                    <div className="flex items-center justify-between w-full h-16">
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-10 h-10 mr-3" />
                            <Link to="/dashboard" className="text-2xl font-bold text-shadow-md hover:text-lime-400 transition-colors">
                                POKEMÓN API
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-shadow-xs hidden md:block">
                                Bienvenido, <span className="text-lime-400 font-bold">{user?.name}</span>
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-violet-600 hover:bg-violet-500 ml-3 px-4 py-2 rounded-lg text-sm transition-colors border border-violet-400"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto py-6 px-4">
                <Outlet />
            </main>
        </div>
    );
}