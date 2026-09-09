export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 10000,
    benefits: [
      "Gym access",
      "Access to standard gym equipment",
      "Digital membership card",
      "Basic locker and changing facilities",
      "Access during standard gym hours",
    ],
  },

  {
    id: 2,
    name: "Standard",
    price: 20000, 
    benefits: [
        "Everything in Basic",
      "Group fitness classes",
      "Trainer guidance",
      "Fitness assessment",
      "Extended access hours",
    ],
    popular: true,

  },

  {
    id: 3,
    name: "Premium",
    price: 30000,
    benefits: [
         "Everything in Standard",
      "Personal training sessions",
      "Priority class booking",
      "Personalized workout plan",
      "Premium member support",
    ]
  }
];
