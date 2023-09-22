/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../index.css';

function LoginBtn({ children, to, onClick }) {
  return (
    <Link
      className="flex h-8 w-24 items-center justify-center rounded-full border-2 pink bg-white p-1 text-xl text-gray-700 lg:h-12 lg:w-32"
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LoginBtn;
