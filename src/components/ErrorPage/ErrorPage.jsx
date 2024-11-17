// src/components/ErrorPage.jsx
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="mt-2 text-gray-600">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
