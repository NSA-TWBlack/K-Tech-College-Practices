import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  name: string;
  password: string;
}

const SignUpForm = () => {
  const location = useLocation();
  const email = location.state?.email ?? "";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("/signin", { state: { email: email, name: data.name } });
  };

  return (
    <div className="flex items-center justify-center w-lvw h-lvh bg-amber-100">
      <div className="lg:w-1/4 sm:w-1/3 h-full relative">
        <img
          src="images/background.jpg"
          className="rounded-xl w-full h-full"
          alt=""
        />
        <div className="absolute z-10 top-0 left-0 p-3 w-full h-full flex-col">
          <ChevronLeft className=" text-white mb-20" />
          <span className="text-white font-bold text-xl px-2">Sign up</span>
          <div className="flex flex-col justify-center items-center gap-3 w-full h-auto p-4 bg-white/30 mt-3 backdrop-sepia-50 rounded-xl">
            <form
              className="flex gap-3 flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-white">
                <p className="text-xs">Looks like you don't have an account.</p>
                <p className="text-xs">
                  Let's create a new account for {email}.
                </p>
              </div>
              <input
                {...register("name", {
                  required: "Ten là bắt buộc",
                })}
                type="text"
                placeholder="Name"
                className="border rounded-sm text-black bg-white py-1 px-3"
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}

              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password là bắt buộc",
                    minLength: {
                      value: 8,
                      message: "Password phải từ 8 kí tự trở lên",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border rounded-sm text-black bg-white py-1 px-3 w-full pr-16"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "View"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              <div className="text-white">
                <p className="text-xs">
                  By selecting Agree and continues below
                </p>
                <p className="text-xs">
                  I agree to{" "}
                  <a className="text-amber-500">
                    Term of Service and Privacy Policy
                  </a>
                </p>
              </div>

              <input
                type="submit"
                value="Continues"
                className="text-white py-1 px-3 w-full bg-amber-500 rounded-sm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
