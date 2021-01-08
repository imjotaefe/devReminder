import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Home() {
  return (
    <div>
      <Header
        title="DEV Reminder"
        subtitle="Uma solução para o seu esquecimento"
      />
      <div className="d-flex justify-content-center">
        <Card />
      </div>
      <div className="position-relative">
        <Footer />
      </div>
    </div>
  );
}
