import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Kirish</h1>
      <form className="w-full max-w-xs bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Telefon yoki Email</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Telefon yoki email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Parol</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Parol"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
