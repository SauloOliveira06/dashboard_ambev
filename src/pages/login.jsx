import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import { login } from "../utils/auth";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", error: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserData(Object.assign({}, userData, { error: "" }));

    const username = userData.username;
    const url = "api/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      if (response.status === 200) {
        const { token } = await response.json();
        await login({ token });
      } else {
        console.log("[Leprs]  -- login failed");
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error("[Leprs] -- Error :( --> ", error);

      const { response } = error;
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-1 flex relative h-screen bg-gray-800">
      <div className="grid justify-center content-center">
        <form className="rounded overflow-hidden" onSubmit={handleSubmit}>
          <img
            className="fill-current text-teal-500 w-full mb-10"
            src="/cervejaria-ambev.svg"
            alt="Logo Ambev"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-2">Faça seu Login</div>
            <input
              className="rounded inline-block bg-white px-2 py-2 placeholder-gray-800"
              placeholder="Seu Usuário"
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={(event) =>
                setUserData(
                  Object.assign({}, userData, { username: event.target.value })
                )
              }
            />
          </div>
          <div class="grid px-6 py-4">
            <button
              class="shadow-lg bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Conectar
            </button>
            <a
              href="#"
              className="text-white hover:text-yellow-500 font-bold my-2"
            >
              Não tenho Cadastro
            </a>
            {userData.error && (
              <p className="text-red-700 self-center my-2">
                Error: {userData.error}{" "}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* <div className="grid justify-center content-center text-center">
        <p className="text-5xl font-bold text-white">Bem vindo ao <br/> Dashboard Ambev!</p>
      </div> */}
    </div>
  );
};

export default Login;
