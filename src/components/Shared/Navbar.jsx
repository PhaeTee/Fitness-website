import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-border">
      <div className="max-w-7l mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <p>getFit</p>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-text hover:text-accent transition">
            Home
          </Link>
          <Link to="/about" className="text-text hover:text-accent transition">
            About
          </Link>
          <Link to="/plans" className="text-text hover:text-accent transition">
            Membership Plans
          </Link>
          <Link
            to="/contact"
            className="text-text hover:text-accent transition"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-primary font-medium hover:text-accent transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary text-white px-5 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
