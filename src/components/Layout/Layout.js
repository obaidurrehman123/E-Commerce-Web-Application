import React from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>
        <title>{title}</title>
      </Helmet>

      <Headers></Headers>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer></Footer>
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce Online Store",
  description: "Mern Stack Application",
  keywords: "mern , react , mongodb",
  author: "Obaid Ur Rehman",
};
export default Layout;
