import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <main className="container px-5 mx-auto lg:px-0 md:w-full flex flex-col py-8 items-center justify-center min-h-screen w-full">
        <section className="max-w-md w-full rounded-2xl md:py-6 md:px-5 lg:py-12 lg:px-10 md:border">
          <header className="text-gray-6 dark:text-gray-1">
            <h3 className="text-lg font-semibold leading-tight mt-4 md:mt-8">
              Login
            </h3>
          </header>
          <div className="my-8">
            {/* {error && (
              <div className="mb-4 text-sm font-normal text-red-400">
                <p>{error}</p>
              </div>
            )} */}
            <LoginForm />
          </div>

          <footer className="flex flex-col items-center justify-center">
            <span className="text-sm text-gray-3">
              or continue with these social profile
            </span>

            <span className="text-sm text-gray-3">
              Don't have an account yet ?<Link to="/sign-up">Register</Link>
            </span>
          </footer>
        </section>
        <div className="max-w-md w-full">{/* <AppFooter /> */}</div>
      </main>
    </div>
  );
};

export default Login;
