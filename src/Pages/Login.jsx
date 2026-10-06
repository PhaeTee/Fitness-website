import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import SignupImage from "../assets/SignupImage.jpg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
  const rememberedEmail = localStorage.getItem("rememberedEmail");

  if (rememberedEmail) {
    setFormData((prev) => ({
      ...prev,
      email: rememberedEmail,
      rememberMe: true,
    }));
  }
}, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

   setError("");
  

     if (formData.rememberMe) {
    localStorage.setItem("rememberedEmail", formData.email);
  } else {
    localStorage.removeItem("rememberedEmail");
  }
  };

  
  return (
    <>
      <section className="mx-auto bg-background">
        <div className="grid md:grid-cols-5 min-h-screen">
          <div className="hidden md:flex relative overflow-hidden flex-col col-span-2 bg-primary p-16">
            <div className="absolute w-70 h-70 -top-20 -right-20 rounded-full  bg-accent/10 shadow-lg"></div>
            <div className="absolute w-90 h-90 bg-accent/10 -bottom-24 -left-24 rounded-full shadow-lg"></div>
            <p className="text-xl font-semibold">
              <span className="text-white">get</span>
              <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
                Fit
              </span>
            </p>

            <div className="mt-16">
              <h2 className="text-white font-semibold text-3xl leading-tight">
                Welcome back to your <br />
                <span className="text-accent "> fitness journey.</span>
              </h2>
            </div>

            <div className="relative overflow-hidden mt-12">
              <img
                src={SignupImage}
                alt="Person working out"
                className="w-95 h-100  object-cover rounded-2xl shadow-lg"
              />

              <div className="absolute inset-0 bg-primary/30"></div>
            </div>

            <p className="text-secondary mt-12 text-sm">
              Subscribe to membership plans. Get gym Access card. Stay fit.
            </p>
          </div>

          <div className="p-6 md:p-20 md:col-span-3 flex items-center justify-center  ">
            <div className="w-full max-w-lg">
              <div className="text-center">
                <h1 className="text-primary font-bold text-3xl mb-2">
                  Welcome Back
                </h1>
                <p className="text-secondary text-sm">
                  Log in to manage your getFit membership
                </p>
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-6 mt-14">
                <form onSubmit={handleSubmit} className="space-y-1">
                  <div className="mb-6 mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-border rounded-xl px-3 py-3 text-xs outline-none focus:border-accent"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor="password"
                        className="font-semibold text-sm text-text"
                      >
                        Password
                      </label>
                      <Link
                        to="/forgot-password"
                        className="font-semibold text-sm text-accent hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full border border-border rounded-xl px-3 py-3 pr-10 text-xs outline-none focus:border-accent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            rememberMe: e.target.checked,
                          }))
                        }
                        className="accent-accent"
                      />

                      <label
                        htmlFor="rememberMe"
                        className="text-secondary text-xs"
                      >
                        Remember me
                      </label>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center mt-4">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-accent rounded-xl text-white text-sm mt-8 h-12 font-semibold transition"
                    >
                      Log In
                    </button>

                    <div className="flex items-center gap-3 mt-6">
                      <hr className="flex-1 border-border" />
                      <p className="text-secondary text-sm">or</p>
                      <hr className="flex-1 border-border" />
                    </div>

                    <div className="text-center mt-6">
                      <p className="text-secondary text-sm">New to getFit?</p>
                      <Link
                        to="/register"
                        className="font-semibold text-sm text-accent hover:underline"
                      >
                        Create your account
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-xs text-secondary text-center mt-8 leading-relaxed">
                By continuing, you agree to getFit Terms of Service and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
