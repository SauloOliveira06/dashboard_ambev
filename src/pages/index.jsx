import Head from "next/head";

import React from "react";
import { Router } from "next/router";
import nextCookie from "next-cookies";
import { withAuthSync } from "../utils/auth";
import getHost from "../utils/get-host";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="grid justify-center content-center text-center">
          <p className="text-5xl font-bold ">
            Bem vindo ao{" "}
            <a className="text-blue-600" href="https://www.ambev.com.br/">
              Dashboard Ambev!
            </a>
          </p>
        </div>
      </Layout>
    );
  }
}

Index.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);
  const apiUrl = getHost(ctx.req) + "api/profile";
  const redirectError = () =>
    typeof window !== "undefined"
      ? Router.push("/login")
      : ctx.res.writeHead(302, { Location: "/login" }).end();

  try {
    const response = await fetch(apiUrl, {
      credentials: "include",
      headers: {
        Authorization: JSON.stringify({ token }),
      },
    });

    if (response.ok) {
      const js = await response.json();
      console.log("[Leprs] -- js: ", js);
      return js;
    } else {
      return await redirectError();
    }
  } catch (error) {
    return redirectError();
  }
};
export default withAuthSync(Index);
