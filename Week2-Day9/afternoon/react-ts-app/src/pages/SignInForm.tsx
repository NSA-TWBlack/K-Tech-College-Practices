import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface IFormInput {
  email: string;
  name: string;
  password: string;
}

const SignInForm = () => {
  const location = useLocation();
  const email = location.state?.email ?? "";
  const name = location.state?.name ?? "";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-lvw h-lvh bg-amber-100">
      <div className="lg:w-1/4 sm:w-1/3 h-9/12 relative">
        <img
          src="images/background.jpg"
          className="rounded-xl w-full h-full"
          alt=""
        />
        <div className="absolute z-10 top-0 left-0 p-3 w-full h-full flex-col">
          <ChevronLeft className=" text-white mb-20" />
          <span className="text-white font-bold text-xl px-2">Log in</span>
          <div className="flex flex-col justify-center items-center gap-3 w-full h-auto p-4 bg-white/30 mt-3 backdrop-sepia-50 rounded-xl">
            <div className="flex flex-row gap-3 items-center justify-items-start w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-10 rounded-[50%]"
                alt=""
              />
              <div className="flex gap-0 flex-col text-white">
                <span className="font-bold text-sm">{name}</span>
                <span className="text-xs">{email}</span>
              </div>
            </div>
            <form
              className="flex gap-3 flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <input
                type="submit"
                value="Continues"
                className="text-white py-1 px-3 w-full bg-amber-500 rounded-sm"
              />
              <p className="text-xs">
                <a className="text-amber-500">Forgot your password</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
