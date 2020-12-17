import React from "react";
import { toast } from "react-toastify";
import { Container } from "./styles";

export default function Header() {
  const notify = () =>
    toast.info("🥇 Ta dando certo!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <Container>
      <div>
        <h1>Hello World</h1>
        <button onClick={() => notify()}>teste</button>
      </div>
    </Container>
  );
}
