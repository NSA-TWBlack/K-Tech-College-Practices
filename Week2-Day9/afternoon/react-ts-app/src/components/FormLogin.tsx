import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Interface cho form
interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

// Yup schema
const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .test("is-valid", "Must be a valid email or phone number", (value) => {
      if (!value) return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      return (
        emailRegex.test(value) || phoneRegex.test(value.replace(/\s/g, ""))
      );
    }),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .test(
      "no-space",
      "Password cannot contain spaces",
      (val) => !/\s/.test(val)
    ),
  rememberMe: yup.boolean(),
});

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    if (data.rememberMe) {
      console.log("Remember me is checked - would save user session");
    }
    alert("Login successful! Check console for details.");
    setIsSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPassword = () => {
    alert("Reset password functionality would be implemented here");
  };

  const handleJoinNow = () => {
    alert("Registration page would open here");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Hero Section */}
          <div className="lg:w-7/12 bg-no-repeat bg-cover bg-center bg-[url('https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/grovia.png')] py-10 lg:p-10 text-red-600 font-medium relative overflow-hidden min-h-[400px]">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Set Your Partner
                <br />
                Recruitment on Auto-Pilot
              </h1>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Login</h2>
                <p className="text-gray-600">
                  Thank you for get back to Grovia, let's access our the best
                  recommendation contact for you.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register("username")}
                      type="text"
                      placeholder="Email or Phone Number"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.username ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Reset Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      {...register("rememberMe")}
                      type="checkbox"
                      id="rememberMe"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Reset Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
                </button>

                {/* Join Now Link */}
                <div className="text-center">
                  <span className="text-gray-600">
                    Don't have an account yet?{" "}
                  </span>
                  <button
                    type="button"
                    onClick={handleJoinNow}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Join Grovia Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
