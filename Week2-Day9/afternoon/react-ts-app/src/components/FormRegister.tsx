import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Monitor, Eye, EyeOff, AlertCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  receiveEmails: boolean;
  agreeToTerms: boolean;
}

const schema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10,15}$/, "Phone Number must be 10-15 digits only"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(/\d/, "Password must contain at least 1 number")
    .matches(/^\S*$/, "Password cannot contain spaces"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
  receiveEmails: yup.boolean(),
});

const FormRegister: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted successfully:", data);
  };

  const InputError: React.FC<{ error?: string }> = ({ error }) => {
    if (!error) return null;
    return (
      <div className="flex items-center mt-1 text-red-600 text-sm">
        <AlertCircle size={14} className="mr-1" />
        {error}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex m-5">
      {/* Left Panel */}
      <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center p-8 text-white relative overflow-hidden">
        <div className="flex w-full items-center justify-items-start mb-4">
          <Monitor className="w-8 h-8 mr-3" />
          <span className="text-xl font-semibold">Lottery Display</span>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-left text-4xl font-bold leading-tight">
            A few clicks away from creating your Lottery Display
          </h1>
        </div>
        <div className="w-72 h-auto">
          <img
            src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/lottery-display.svg"
            alt="Lottery Display Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:min-w-3xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Register</h2>
          <p className="text-sm text-gray-500 mb-4">
            Let’s get you all set up.
          </p>

          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                {...register("firstName")}
                placeholder="John"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              <InputError error={errors.firstName?.message} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                {...register("lastName")}
                placeholder="Doe"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              <InputError error={errors.lastName?.message} />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                placeholder="0987654321"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              <InputError error={errors.phoneNumber?.message} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                {...register("email")}
                placeholder="john@example.com"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <InputError error={errors.email?.message} />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Secret123"
                  className={`w-full px-3 py-2 border rounded-md pr-10 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <InputError error={errors.password?.message} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder="Secret123"
                  className={`w-full px-3 py-2 border rounded-md pr-10 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <InputError error={errors.confirmPassword?.message} />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register("receiveEmails")}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mt-0.5"
              />
              <label className="ml-2 text-sm text-gray-700">
                Yes, I want to receive Lottery Display emails
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register("agreeToTerms")}
                className={`h-4 w-4 text-blue-600 border-gray-300 rounded mt-0.5 ${
                  errors.agreeToTerms ? "border-red-500" : ""
                }`}
              />
              <label className="ml-2 text-sm text-gray-700">
                I agree to all the{" "}
                <a href="#" className="text-blue-600">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="text-blue-600">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600">
                  Fees
                </a>
              </label>
            </div>
            <InputError error={errors.agreeToTerms?.message} />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 px-4 rounded-md mt-6 transition duration-200 ${
              isValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
