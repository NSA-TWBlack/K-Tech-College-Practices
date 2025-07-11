import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../services/service";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../context";

// Strong typed interface for form data
interface IFormInput {
  username: string;
  password: string;
}

// Yup validation schema with strong typing
const validationSchema: yup.ObjectSchema<IFormInput> = yup.object({
  username: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

const Login = () => {
  const { setUser } = useContext(LoginContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      username: "tungnt@softech.vn",
      password: "123456789",
    },
  });

  const onSubmit = async (data: IFormInput): Promise<void> => {
    try {
      const user = await login(data.username, data.password);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/tasks");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-lvw h-lvh bg-amber-100">
      <div className="w-full h-full relative">
        <img src="images/background.jpg" className=" w-full h-full" alt="" />
        <div className="absolute items-center justify-items-center z-10 top-0 left-0 px-3 py-20 w-full h-full flex-col">
          <div className="flex flex-col justify-items-start items-center gap-3 lg:w-1/4 sm:w-1/3 xs:1/2 h-9/12 px-4 py-8 bg-white/30 mt-3 backdrop-sepia-50 rounded-xl">
            <span className="text-white font-bold text-2xl mb-1 px-2">
              Log in
            </span>
            <form
              className="flex gap-3 flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                id="username"
                type="text"
                {...register("username")}
                className={`w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                  errors.username
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : !errors.username && dirtyFields.username
                    ? "border-green-500 focus:border-green-500 focus:ring-green-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="Email"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
              <input
                id="password"
                type="password"
                {...register("password")}
                className={`w-full mt-4 p-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                  errors.password
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : !errors.password && dirtyFields.password
                    ? "border-green-500 focus:border-green-500 focus:ring-green-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500   text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
              <input
                type="submit"
                value="Continues"
                disabled={isSubmitting || !isValid}
                className="text-white mt-10 p-3 w-full bg-amber-500 rounded-sm ${
            isSubmitting || !isValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500  hover:bg-orange-600  text-white'
          }"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
