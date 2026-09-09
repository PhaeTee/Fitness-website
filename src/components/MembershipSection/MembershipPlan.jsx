import { plans } from "../../data/plans";
import PlanCard from "../PlanCard";

export default function MembershipPlan() {
  return (
    <>
      <section className="py-20 px-6 bg-background ">
        <div className="max-w-3xl mx-auto text-center ">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mt-3">
          Membership Plans
        </h1>
          <p className="text-secondary leading-relaxed mt-4">
          Choose the plan that works best for your fitness journey.
        </p>
          
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 mx-w-6xl mx-auto ">
          {plans.map((plans) => (
            <PlanCard key={plans.id} plans={plans} />
          ))}
        </div>
      </section>
    </>
  );
}
