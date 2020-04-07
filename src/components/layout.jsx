import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Sidenav from "./sidenav";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Dashboard Ambev</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
      <script type="text/javascript" src="jscript/graph.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>

      <script src="https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js"></script>
    </Head>
    <main className="flex flex-col bg-gray-200 h-screen">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidenav />
        {children}
      </div>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
