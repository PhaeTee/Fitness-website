import { UserRound, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <section className="mx-auto bg-background">
        <div className="grid md:grid-cols-5 ">
          <div className="hidden md:flex md:col-span-2 relative overflow-hidden bg-primary flex-col p-20 ">
            <div className="absolute -top-20 -right-20 w-70 h-70 rounded-full  bg-accent/10"></div>
            <div className="absolute -bottom-24 -left-24 w-90 h-90 rounded-full border-2 border-accent/20"></div>
            <p className="text-white font-semibold text-xl">getFit</p>

            <div className="mt-26">
              <p className="text-white font-semibold text-4xl">Your fitness.</p>
              <p className="text-white font-semibold text-4xl">
                Your membership.
              </p>
              <p className="text-accent font-semibold text-4xl">
                Your journey.
              </p>

              <div className="mt-20 w-55 h-55 shadow-lg rounded-2xl bg-mint/5 flex items-center justify-center ">
                <UserRound
                  size={120}
                  strokeWidth={0.8}
                  className="text-accent"
                />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-20 md:col-span-3 flex items-center justify-center ">
            <div className="w-full max-w-lg">
              <div className="text-center">
                <h1 className="text-primary font-bold text-3xl mb-2">
                  Create your account
                </h1>
                <p className="text-secondary text-sm ">
                  Join getFit in few simple steps.
                </p>
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-6 mt-10">
                <form action="" className="space-y-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
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
                        className="w-full border border-border rounded-xl px-3 py-3 text-sm outline-none focus:border-accent"
                      />
                    </div>

                    <div>
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
                        className="w-full border border-border rounded-xl px-3 py-3 text-sm outline-none focus:border-accent"
                      />
                    </div>
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
                      className="w-full border border-border rounded-xl px-3 py-3 text-sm outline-none focus:border-accent"
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
                        type="password"
                        placeholder="Create a password"
                        className="w-full border border-border rounded-xl px-3 py-3 pr-10 text-sm outline-none focus:border-accent"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                      >
                        <Eye size={18} />
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
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full border border-border rounded-xl px-3 py-3 pr-10 text-sm outline-none focus:border-accent"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="accent-accent"
                    />

                    <label htmlFor="terms" className="text-sm text-secondary">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  <button className="w-full bg-primary hover:bg-accent rounded-xl text-white text-sm mt-4 h-12 font-semibold">
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
