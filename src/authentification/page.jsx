import React, { useState, useEffect } from "react";
import DefaultSpinner from "@/components/DefaultSpinner";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { axiosInstance } from "../../axiosInstance";
import { APIURL } from "../../lib/ApiKey";

const formSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
  email: z.string().email('Invalid email address'),
});

function Login({ onLogin, className, ...props }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem('AUTHENTICATED') && sessionStorage.getItem('isLoggedIn') === 'loggin') {
      navigate("/");
    }
  }, [navigate]);

  const defaultValues = {
    email: 'admin@gmail.com',
    password: 'password',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const { setError, handleSubmit, formState: { isSubmitting } } = form;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const login = async (email, password, navigate) => {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Fetch CSRF token from meta tag
      const response = await axiosInstance.post(`${APIURL}/api/auth/login`, {
        login: email,
        password,
      }, {
        headers: {
          'X-CSRF-TOKEN': csrfToken // Include CSRF token in the request headers
        }
      });

      if (response.status === 200) {
        console.log("The Response => ", response.data.user.id);
        let role = response.data.role;

        if (response.data.user.id) {
          sessionStorage.setItem('dataItem', JSON.stringify(response.data.user.id));
          sessionStorage.setItem('tokenData', JSON.stringify(response.data));
          sessionStorage.setItem('isLoggedIn', "loggin");
          sessionStorage.setItem('dataStaff', JSON.stringify(response.data.user))
          window.localStorage.setItem('AUTHENTICATED', true)
          sessionStorage.setItem('role', JSON.stringify(response.data.role));
          window.localStorage.setItem('dataItem', JSON.stringify(response.data.user.id))
          let Id = role === 'user' ? JSON.stringify(response.data.user.id) : JSON.stringify(response.data.user.user.id)
          const restoResponse = await axiosInstance.get(`/api/getResto/` + Id);
          if (restoResponse.data) {
            console.log("The data => ", restoResponse.data);
            sessionStorage.setItem('RestoInfo', JSON.stringify(restoResponse.data));
            navigate("/");
          }
        }
      } else {
        setIsLoading(false);
      }
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      setError("email", { type: "manual", message: "Email or password are incorrect" });
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    console.log('the data is ', data);
    setIsLoading(true);
    const response = await login(data.email, data.password, navigate);

    if (response) {
      console.log("Login Succeeded", response);
    } else {
      console.log("Incorrect");
    }
  };

  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div>
            <h1 className="text-4xl font-bold">
              gar<span className="text-blue-700">i</span>sta
            </h1>
          </div>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.&rdquo;
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
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              autoCorrect="off"
                              disabled={isLoading}
                              className={"focus-visible:ring-white"}
                              placeholder='name@example.com'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 relative">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              autoCorrect="off"
                              autoCapitalize="none"
                              autoComplete="current-password"
                              disabled={isLoading}
                              className={"focus-visible:ring-white"}
                              placeholder='password'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
                          {/* SVG for showing password */}
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-eye-slash"
                          viewBox="0 0 16 16"
                        >
                          {/* SVG for hiding password */}
                        </svg>
                      )}
                    </button>
                  </div>

                  <Button disabled={isLoading || isSubmitting} type='submit'>
                    {isLoading && (
                      <DefaultSpinner color="white" className="mr-4 h-8 w-6" size={32} />
                    )} {' '}Login
                  </Button>
                </div>
              </form>
            </Form>

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
  );
}

export default Login;
