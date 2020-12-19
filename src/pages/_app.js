import React from 'react';
import App from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
