import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../assets/SignupImage.jpg";

import { UserRound, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.terms
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password.length < 5) {
      setError("Password must be at least 5 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Signup data:", formData);
    

    navigate("/otp",{
      state:{
        email: formData.email
      }
    });
  };

  return (
    <>
      <section className="mx-auto bg-background">
        <div className="grid md:grid-cols-5 ">
          <div className="hidden md:flex md:col-span-2 relative overflow-hidden bg-primary flex-col p-20 ">
            <div className="absolute -top-20 -right-20 w-70 h-70 rounded-full  bg-accent/10"></div>
            <div className="absolute -bottom-24 -left-24 w-90 h-90 rounded-full border-2 border-accent/20"></div>
            <p className="text-xl font-semibold">
              <span className="text-white">get</span>
              <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
                Fit
              </span>
            </p>

            <div className="mt-20">
              <p className="text-white font-semibold text-3xl">Your fitness.</p>
              <p className="text-white font-semibold text-3xl">
                Your membership.
              </p>
              <p className="text-accent font-semibold text-3xl">
                Your journey.
              </p>

              <div className="relative overflow-hidden mt-12">
                <img
                  src={SignupImage}
                  alt="Person working out"
                  className="w-95 h-100  object-cover rounded-2xl shadow-lg"
                />

                <div className="absolute inset-0 bg-primary/30"></div>
              </div>

              {/* <div className="mt-20 w-55 h-55 shadow-lg rounded-2xl bg-mint/5 flex items-center justify-center ">
                <UserRound
                  size={120}
                  strokeWidth={0.8}
                  className="text-accent"
                />
              </div> */}
            </div>
          </div>

          <div className="p-6 md:p-20 md:col-span-3 flex items-center justify-center ">
            <div className="w-full max-w-lg">
              <div className="text-center">
                <h1 className="text-primary font-bold text-3xl mb-2">
                  Create your account
                </h1>
                <p className="text-secondary text-sm">
                  Join getFit in few simple steps.
                </p>
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-6 mt-10">
                <form onSubmit={handleSubmit} className="space-y-1">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-border rounded-xl px-3 py-3 text-xs outline-none focus:border-accent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-border rounded-xl px-3 py-3 text-xs outline-none focus:border-accent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-border rounded-xl px-3 py-3 text-xs outline-none focus:border-accent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
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
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border border-border rounded-xl px-3 py-3 pr-10 text-xs outline-none focus:border-accent"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.terms}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          terms: e.target.checked,
                        }))
                      }
                      className="accent-accent"
                    />

                    <label htmlFor="terms" className="text-xs text-secondary">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent rounded-xl text-white text-sm mt-4 h-12 font-semibold"
                  >
                    Create Account
                  </button>

                  <p className="text-sm text-secondary text-center mt-5">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-accent font-medium hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
