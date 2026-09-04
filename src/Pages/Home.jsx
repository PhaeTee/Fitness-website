import Navbar from "../components/Shared/Navbar";
import heroImage from "../assets/heroImage.jpg";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <header className="bg-background">
          <div className="grid min-h-[600px] md:grid-cols-2">

            <div className="flex items-center">
              <div className="max-w-xl px-6 py-20 md:pl-12 lg:pl-20">
                <h1 className="text-primary font-bold text-5xl mb-4">
                  Your fitness journey starts here
                </h1>
                <p>
                  Choose a membership plan that fits your goal, join online in
                  minutes and manage your fitness journey digitally.
                </p>

                <div className="mt-8 flex gap-4">
                  <button className="text-primary font-medium hover:text-accent transition">
                    Login
                  </button>
                  <button className="bg-accent text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[500px] md:min-h-full">
              <img
                src={heroImage}
                alt="Person working out"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
