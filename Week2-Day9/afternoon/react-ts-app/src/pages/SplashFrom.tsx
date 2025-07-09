import { ChevronLeft } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";

interface IFormInput {
  email: string;
}

const SplashFrom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("/signup", { state: { email: data.email } });
  };

  return (
    <div className="flex items-center justify-center w-lvw h-lvh bg-amber-100">
      <div className="lg:w-1/4 sm:w-1/3 h-11/12 relative">
        <img
          src="images/background.jpg"
          className="rounded-xl w-full h-full"
          alt=""
        />
        <div className="absolute z-10 top-0 left-0 p-3 w-full h-full flex-col">
          <ChevronLeft className=" text-white mb-20" />
          <span className="text-white font-bold text-xl px-2">Hi!</span>
          <div className="flex flex-col justify-center items-center gap-3 w-full h-auto p-4 bg-white/30 mt-3 backdrop-sepia-0 rounded-xl">
            <form
              className="flex gap-2 flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("email", {
                  required: "Email là bắt buộc",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
                type="text"
                className="border rounded-sm text-black bg-white py-1 px-3"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

              <input
                type="submit"
                value="Continues"
                className="text-white py-1 px-3 w-full bg-amber-500 rounded-sm"
              />
            </form>
            <span className="text-white">or</span>
            <button className="flex flex-row items-center justify-start gap-3 py-2 px-4 rounded-sm bg-blue-100 w-full">
              <img src="images/facebook.jpg" className="w-6" alt="" />
              <span className="text-black text-sm font-bold">
                Continues with Facebook
              </span>
            </button>
            <button className="flex flex-row items-center justify-start gap-3 py-2 px-4 rounded-sm bg-blue-100 w-full">
              <img src="images/google.jpg" className="w-6" alt="" />
              <span className="text-black text-sm font-bold">
                Continues with Facebook
              </span>
            </button>
            <button className="flex flex-row items-center justify-start gap-3 py-2 px-4 rounded-sm bg-blue-100 w-full">
              <FaApple width={24} />
              <span className="text-black text-sm font-bold">
                Continues with Facebook
              </span>
            </button>

            <div className="text-white flex flex-col justify-items-start w-full gap-3">
              <p className="text-xs">
                Don't have an account?{" "}
                <a className="text-amber-400 font-medium">Sign up</a>
              </p>
              <p className="text-xs">
                <a className="text-amber-400 font-medium">
                  Forgot your password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashFrom;
