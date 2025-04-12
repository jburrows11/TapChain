import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">TapChain Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-2 rounded bg-gray-700 text-white" />
        <button className="w-full bg-blue-600 p-2 rounded hover:bg-blue-700 transition">Login</button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <Link to="/signup" className="text-blue-400">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
