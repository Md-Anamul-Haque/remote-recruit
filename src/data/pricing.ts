export const pricingPlans = [
  {
    id: "free",
    price: "Free",
    period: "Basic",
    highlighted: false,
    ctaLabel: "Get Started",
    features: [
      { label: "1 Active Job", included: true },
      { label: "Basic List Placement", included: true },
      { label: "Unlimited Job Applicants", included: false },
      { label: "Invite Anyone to Apply to Your Jobs", included: false },
    ],
  },
  {
    id: "premium",
    price: "$79.99",
    period: "Per Month",
    highlighted: true,
    badge: "Premium",
    ctaLabel: "Get Started",
    features: [
      { label: "Unlimited Job Posts", included: true },
      { label: "Instant Job Post Approval", included: true },
      { label: "Premium List Placement", included: true },
      { label: "Unlimited Job Applicants", included: true },
    ],
  }
];