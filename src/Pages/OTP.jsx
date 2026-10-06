import { useState } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation()

  const email = location.state?.email
  if (!email) {
  return <Navigate to="/register" replace />;
}

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    // Move to the next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }

    console.log("OTP entered:", enteredOtp);

    // Temporary navigation
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold">
            <span className="text-primary">get</span>
            <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
              Fit
            </span>
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-sm rounded-2xl p-8">
          <div className="text-center">
            <h1 className="text-primary font-bold text-2xl mb-2">
              Verify your email
            </h1>

            <p className="text-secondary text-sm">
              We've sent a 6-digit verification code to {" "}
              <span className="font-medium text-primary">{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            {/* OTP boxes */}
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="w-12 h-12 text-center text-lg font-semibold border border-border rounded-xl outline-none focus:border-accent"
                />
              ))}
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center mt-4">{error}</p>
            )}

            {/* Verify button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent rounded-xl text-white text-sm mt-6 h-12 font-semibold"
            >
              Verify Email
            </button>

            {/* Resend */}
            <p className="text-sm text-secondary text-center mt-5">
              Didn't receive the code?{" "}
              <button
                type="button"
                className="text-accent font-medium hover:underline"
              >
                Resend Code
              </button>
            </p>

            {/* Back to signup */}
            <p className="text-sm text-secondary text-center mt-4">
              Wrong email?{" "}
              <Link
                to="/register"
                className="text-accent font-medium hover:underline"
              >
                Go back
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
