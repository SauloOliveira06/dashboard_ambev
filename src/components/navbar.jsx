import { logout } from "../utils/auth";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex justify-between overflow-hidden h-16 bg-gray-800 pr-6">
        <div className="flex justify-center w-20 bg-gray-700">
          <img className="w-16" src="/logo-ambev.svg" alt="Logo Ambev" />
        </div>
        <div className="flex  items-center">
          <p className="text-white">Administrador</p>
          <button
            class="material-icons bg-transparent text-white ounded-full h-10 w-10"
            onClick={logout}
          >
            settings
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
