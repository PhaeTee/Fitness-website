import { Check } from "lucide-react";

export default function PlanCard({ plans }) {
  return (
    <>
      <div className="bg-white rounded-2xl border border-border p-8 ">
        <h2 className="font-bold text-xl">{plans.name}</h2>
        <p className="font-semibold text-3xl text-primary mt-3">
          {plans.price} <sub className="text-secondary text-sm ">/month</sub>
        </p>
        <hr className="mt-6 border-secondary"/>
        <ul className="mt-6 space-y-3 text-secondary">
          {plans.benefits.map((benefits) => (
            <li key={benefits} className="flex items-center gap-2">
              <Check size={18} className="text-accent" />
              <span>{benefits}</span>
            </li>
          ))}
        </ul>

        <button className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition ">
          Subscribe
        </button>
      </div>
    </>
  );
}
