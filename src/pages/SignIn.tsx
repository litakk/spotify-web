import { Link } from "react-router-dom";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <Link
        to="/me"
        className="px-6 py-3 text-white bg-gray-600 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:bg-blue-700 active:scale-95"
      >
        Войти
      </Link>
    </div>
  );
};

export default SignIn;
