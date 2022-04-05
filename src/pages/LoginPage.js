import React from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <Logo sx={{ width: 200, height: 200 }} />
    </div>
  );
}

export default LoginPage;
