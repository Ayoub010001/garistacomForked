import React, { useState } from "react";
import SpinnerIcon from "@/components/icons";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin, className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function Handle navigation
  const handleNavigation = () => {
    navigate("/Dashboard");
  };
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les identifiants
    if (email === "admin@gmail.com" && password === "123456") {
      // Authentification réussie, appeler la fonction onLogin fournie par le parent
      onLogin();
      console.log(tru);
    } else {
      setError("Email or password is incorrect");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleNavigation();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div> */}
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <div>
              {" "}
              <h1 className="text-4xl font-bold ">
                gar<span className="text-blue-700">i</span>sta
              </h1>
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8 pt-44">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email & password
              </p>
            </div>
            <div className={cn("grid gap-6", className)}>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-4 relative">
                    <Input
                      id="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          {/* SVG pour afficher le mot de passe */}
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-eye-slash "
                          viewBox="0 0 16 16"
                        >
                          {/* SVG pour masquer le mot de passe */}
                        </svg>
                      )}
                    </button>
                  </div>

                  <Button disabled={isLoading}>
                    {isLoading ? (
                      <SpinnerIcon
                        size={32}
                        color="white"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
              </div>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
