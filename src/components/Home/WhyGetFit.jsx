import {
  Dumbbell,
  UserRound,
  Heart,
  BadgeCheck,
  Users,
  Smartphone,
} from "lucide-react";

export default function WhyGetFit() {
  return (
    <>
      <section className="bg-mint py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              Why getFit?
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
              More than a place to workout.
            </h3>

            <p className="text-base text-secondary leading-relaxed max-w-2xl">
              We're here to help you build strength, confidence and healthy
              habits with a community that motivates you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-14 mt-20">
            <div className="group flex flex-col gap-3">
              <Dumbbell
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold">Modern Equipment</h3>
              <p className="text-base text-secondary leading-relaxed">
                Train with quality equipment built for every goal
              </p>
            </div>

            <div className="group flex flex-col gap-3">
              <UserRound
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold">Expert Trainers</h3>
              <p className="text-base text-secondary leading-relaxed">
                Get audience from experienced coaches.
              </p>
            </div>

            <div className=" group flex flex-col gap-3">
              <BadgeCheck
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold">Flexible Plans</h3>
              <p className="text-base text-secondary leading-relaxed">
                Membership options for your needs
              </p>
            </div>

            <div className=" group flex flex-col gap-3">
              <Smartphone
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold">Digital Experience</h3>
              <p className="text-base text-secondary leading-relaxed">
                Register online and access your digital membership card from
                your account.
              </p>
            </div>

            <div className=" group flex flex-col gap-3">
              <Heart
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-base text-secondary leading-relaxed">
                Connect and build with like-minded people
              </p>
            </div>

            <div className=" group flex flex-col gap-3">
              <Users
                size={28}
                strokeWidth={1.8}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold ">Group Fitness</h3>
              <p className="text-base text-secondary leading-relaxed">
                Stay motivated with engaging sessions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
