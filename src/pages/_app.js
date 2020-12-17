/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Component {...pageProps}>
          <Head>
            <title>DEV Reminder</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              type="text/css"
              href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"
            />
          </Head>
        </Component>
      </>
    );
  }
}

export default MyApp;
