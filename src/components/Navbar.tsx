import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-600">SK-İlkökul2-Math</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Ana Sayfa</Link>
            <Link to="/game" className="text-gray-700 hover:text-blue-600">Oyun</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;