"use client";
import { signIn } from "next-auth/react";

// eslint-disable-next-line @next/next/no-async-client-component
const Login = () => {
  return <button onClick={() => signIn("github")}>로그인 하기</button>;
};

export default Login;
