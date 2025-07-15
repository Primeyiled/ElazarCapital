import {
  IconArrowLeft,
  IconBrandTabler,
  IconCreditCardPay,
  IconCreditCardRefund,
  IconHistory,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";

// export const Dailyplans = [
//   {
//     title: "ElazarCapital Consumer",
//     description: "Sending and receiving money in up to 5 countries",
//     price: "$0.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
//   {
//     title: "ElazarCapital Business",
//     description: "Access to multi-currency accounts and local payments",
//     price: "$14.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#1D615F",
//   },
//   {
//     title: "ElazarCapital Enterprise",
//     description: "Secure and reliable transactions at the enterprise level",
//     price: "$34.99",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
// ];

// export const Monthlyplans = [
//   {
//     title: "ElazarCapital Consumer",
//     description: "Sending and receiving money in up to 5 countries",
//     price: "$10.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
//   {
//     title: "ElazarCapital Business",
//     description: "Access to multi-currency accounts and local payments",
//     price: "$40.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#1D615F",
//   },
//   {
//     title: "ElazarCapital Enterprise",
//     description: "Secure and reliable transactions at the enterprise level",
//     price: "$54.99",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
// ];

// export const Yearlyplans = [
//   {
//     title: "ElazarCapital Consumer",
//     description: "Sending and receiving money in up to 5 countries",
//     price: "$30.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
//   {
//     title: "ElazarCapital Business",
//     description: "Access to multi-currency accounts and local payments",
//     price: "$60.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#1D615F",
//   },
//   {
//     title: "ElazarCapital Enterprise",
//     description: "Secure and reliable transactions at the enterprise level",
//     price: "$80.99",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
// ];

// export const TwoYearsplans = [
//   {
//     title: "ElazarCapital Consumer",
//     description: "Sending and receiving money in up to 5 countries",
//     price: "$50.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
//   {
//     title: "ElazarCapital Business",
//     description: "Access to multi-currency accounts and local payments",
//     price: "$90.00",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#1D615F",
//   },
//   {
//     title: "ElazarCapital Enterprise",
//     description: "Secure and reliable transactions at the enterprise level",
//     price: "$100.99",
//     features: [
//       "Unlimited transactions",
//       "Basic Technical Support (Email)",
//       "Instructional advisor",
//     ],
//     backgroundColor: "#222E2E",
//   },
// ];

export const FeedBacks = [
  {
    category: "Rüdiger Karlsen",
    title:
      "Explore more Managing savings has never been so easy. ElazarCapital has helped me achieve my financial goals faster than I imagined.",
  },

  {
    category: "Branka Berg",
    title:
      "ElazarCapital's security is unparalleled. I feel comfortable knowing that my data is protected while I control my finances.",
  },

  {
    category: "Karl Andreassen",
    title:
      "ElazarCapital adapts to my needs. I can customize my plan and I really feel like I am in control who formed us in his own image.",
  },
  {
    category: "Karl Andreassen",
    title:
      "ElazarCapital adapts to my needs. I can customize my plan and I really feel like I am in control who formed us in his own image.",
  },
];

export const FrequentlyAskedQ = [
  {
    title: "How do I create my account?",
    desc: (
      <>
        Creating an account is quick and easy. Simply click the{" "}
        <Link
          href="/register"
          className="font-semibold text-redColor capitalize"
        >
          create account
        </Link>{" "}
        button and fill in the required details to get started.
      </>
    ),
  },
  {
    title: "How do I make a deposit?",
    desc: `Depositing funds into your trading account is fast and straightforward. 
Login to your dashboard, click the "Deposits" button, choose your preferred deposit method, and follow the instructions to complete your transaction.`,
  },
  {
    title: "How long does it take for my deposit to reflect?",
    desc: "Your deposit will appear on your dashboard as soon as it's confirmed on the blockchain network.",
  },
  {
    title: "How do I make a withdrawal?",
    desc: `To withdraw funds, click the "Withdraw" button at the top of your account dashboard, then provide the required details to complete your request.`,
  },
  {
    title: "Can I have more than one account?",
    desc: "No. Users are limited to one account. Only investors on our VIP plan are permitted to operate multiple accounts.",
  },
  {
    title: "Can I have more than two accounts?",
    desc: "Multiple accounts are only allowed for investors enrolled in the VIP plan. Standard users are limited to a single account.",
  },
  {
    title: "How many times can I make a deposit?",
    desc: "You can make as many deposits as you like on any of our investment plans, except the Starter Plan — which allows up to 3 deposits. After that, you can choose whether to upgrade or continue investing with us.",
  },
];

export const Dashinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Deposit",
    href: "/dashboard/deposit",
    icon: (
      <IconCreditCardPay className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Withdrawal",
    href: "/dashboard/withdrawal",
    icon: (
      <IconCreditCardRefund className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "History",
    href: "/dashboard/history",
    icon: (
      <IconHistory className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },

  // {
  //   label: "Logout",
  //   href: "#",
  //   icon: (
  //     <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //   ),
  // },
];

export const AdminDashinks = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Deposits",
    href: "/admin/deposits",
    icon: (
      <IconCreditCardPay className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Withdrawals",
    href: "/admin/withdrawals",
    icon: (
      <IconCreditCardRefund className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  // {
  //   label: "History",
  //   href: "/dashboard/history",
  //   icon: (
  //     <IconHistory className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //   ),
  // },
  // {
  //   label: "Profile",
  //   href: "/dashboard/profile",
  //   icon: (
  //     <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //   ),
  // },

  // {
  //   label: "Logout",
  //   href: "#",
  //   icon: (
  //     <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //   ),
  // },
];

export const DepositData = [
  {
    name: "USDT",
    img: "/usdt.jpg",
  },
  {
    name: "Bitcoin",
    img: "/btc.jpg",
  },
  {
    name: "Ethereum",
    img: "/eth.jpg",
  },
];

export const EstatePlans = [
  {
    id: "e1",
    Minimum: "$10,000.00",
    Maximum: "$30,000.00",
    title: "Bronze Package",
    features: {
      DailyProfit: "5%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "10%",

    },
    backgroundColor: "#222E2E",
  },
  {
    id: "e2",
    Minimum: "$30,000.00",
    Maximum: "$100,000.00",
    title: "Silver Package",
    features: {
      DailyProfit: "6.5%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "10%",
    },
    backgroundColor: "#1D615F",
  },
  {
    id: "e3",
    Minimum: "$100,000.00",
    Maximum: "$500,000.00",
    title: "Platinum Package",
    features: {
      DailyProfit: "7%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "10%",
    },
    backgroundColor: "#222E2E",
  },
  {
    id: "e4",
    Minimum: "$ $1,000,000.00",
    Maximum: "$1,500,000.00",
    title: "Gold Package",
    features: {
      DailyProfit: "7.5%",
      WeeklyProfit: "42%",
      MonthlyProfit: "180%",
      ReferralBonus: "10%",
    },
    backgroundColor: "#1D615F",
  },
];
export const CryptoPlans = [
  {
    id: "c1",
    title: "Starter Plan",
    Minimum: "$300",
    Maximum: "Unlimited",
    backgroundColor: "#222E2E",
    features: {
      DailyProfit: "2.3%",
      WeeklyProfit: "6%",
      MonthlyProfit: "24%",
      Withdrawal: "Weekly",
      ReferralBonus: "5%",
    },
  },
  {
    id: "c2",
    title: "Basic Plan",
    Minimum: "$1,000",
    Maximum: "Unlimited",
    backgroundColor: "#1D615F", // Green shade
    features: {
      DailyProfit: "2.9%",
      WeeklyProfit: "9%",
      MonthlyProfit: "36%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
    },
  },
  {
    id: "c3",
    title: "Couple Plan",
    Minimum: "$50,000",
    Maximum: "Unlimited",
    backgroundColor: "#222E2E", // Purple shade
    features: {
      DailyProfit: "4.4%",
      WeeklyProfit: "7.2%",
      MonthlyProfit: "28.2%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
    },
  },
  {
    id: "c4",
    title: "Investor Plan",
    Minimum: "$100,000",
    Maximum: "Unlimited",
    backgroundColor: "#1D615F", // Red shade
    features: {
      DailyProfit: "5.3%",
      WeeklyProfit: "12%",
      MonthlyProfit: "48%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
    },
  },
  {
    id: "c5",
    title: "Business Plan",
    Minimum: "$500,000",
    Maximum: "Unlimited",
    backgroundColor: "#222E2E", // Amber shade
    features: {
      DailyProfit: "6%",
      WeeklyProfit: "18%",
      MonthlyProfit: "72%",
      Withdrawal: "Weekly",
      ReferralBonus: "15%",
    },
  },
  {
    id: "c6",
    title: "Corporate Account",
    Minimum: "$1,000,000.00",
    Maximum: "Unlimited",
    backgroundColor: "#1D615F", // Dark gray
    features: {
      DailyProfit: "8%",
      WeeklyProfit: "15%",
      MonthlyProfit: "60%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
    },
  },
];

export const ForexPlans = [
  {
    id: "f1",
    title: "Euro",
    Minimum: "$1,000.00",
    Maximum: "$20,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "2.9%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "5%",
      Duration: "7 Day(s)",
    },
  },
  {
    id: "f2",
    title: "Dollar",
    Minimum: "$20,000.00",
    Maximum: "$50,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "4.8%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)",
    },
  },
  {
    id: "f3",
    title: "Yen",
    Minimum: "$50,000.00",
    Maximum: "$100,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "5.3%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "31 Day(s)",
    },
  },
  {
    id: "f4",
    title: "Pounds",
    Minimum: "$100,000.00",
    Maximum: "$250,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "7%",
      WeeklyProfit: "49%",
      MonthlyProfit: "210%",
      ReferralBonus: "10%",
      Duration: "61 Day(s)",
    },
  },
];

export const StockPlans = [
  {
    id: "s1",
    title: "Apple Stock",
    Minimum: "$5,000.00",
    Maximum: "$50,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "4%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "3%",
      Duration: "20 Day(s)",
    },
  },
  {
    id: "s2",
    title: "Google Stock",
    Minimum: "$50,000.00",
    Maximum: "$100,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "5%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)",
    },
  },
  {
    id: "s3",
    title: "Tesla",
    Minimum: "$150,000.00",
    Maximum: "$3,000,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "6%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "30 Day(s)",
    },
  },
  {
    id: "s4",
    title: "Amazon Stock",
    Minimum: "$300,000.00",
    Maximum: "$1,000,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "7.6%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "10%",
      Duration: "40 Day(s)",
    },
  },
  {
    id: "s5",
    title: "Amature",
    Minimum: "$50,000.00", // Fixed extra space
    Maximum: "$100,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "5%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "6%",
      Duration: "20 Day(s)",
    },
  },
];

export const GoldPlans = [
  {
    id: "g1", // Changed from c1 to g1 for gold-specific IDs
    title: "Starter Plan",
    Minimum: "$5,000",
    Maximum: "Unlimited",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "2.3%",
      WeeklyProfit: "6%",
      MonthlyProfit: "24%",
      Withdrawal: "Weekly",
      ReferralBonus: "5%",
    },
  },
  {
    id: "g2", // Changed from c2 to g2
    title: "Basic Plan",
    Minimum: "$35,000",
    Maximum: "Unlimited",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "2.9%",
      WeeklyProfit: "9%",
      MonthlyProfit: "36%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%", 
    },
  },
  {
    id: "g3", // Changed from c3 to g3
    title: "Advanced Plan",
    Minimum: "$100,000",
    Maximum: "Unlimited",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "5.3%",
      WeeklyProfit: "12%",
      MonthlyProfit: "48%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
    },
  },
  {
    id: "g4", // Changed from c4 to g4
    title: "Premium Plan",
    Minimum: "$500,000",
    Maximum: "Unlimited",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "6%",
      WeeklyProfit: "18%",
      MonthlyProfit: "72%",
      Withdrawal: "Weekly",
      ReferralBonus: "15%",
    },
  },
];

export const SilverPlans = [
  {
    id: "s1", // Changed from c1 to s1 for silver-specific IDs
    title: "Starter Plan",
    Minimum: "$1,000.00",
    Maximum: "$20,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "2.9%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "5%",
      Duration: "7 Day(s)",
    },
  },
  {
    id: "s2", // Changed from c2 to s2
    title: "Basic Plan",
    Minimum: "$20,000.00",
    Maximum: "$50,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "4.8%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)",
    },
  },
  {
    id: "s3", // Changed from c3 to s3
    title: "Advanced Plan",
    Minimum: "$50,000.00",
    Maximum: "$100,000.00",
    backgroundColor: "#222E2E", // Darker teal
    features: {
      DailyProfit: "5.3%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "31 Day(s)",
    },
  },
  {
    id: "s4", // Changed from c4 to s4
    title: "Premium Plan",
    Minimum: "$100,000.00", // Fixed extra space
    Maximum: "$250,000.00",
    backgroundColor: "#1D615F", // Lighter teal
    features: {
      DailyProfit: "7%",
      WeeklyProfit: "49%",
      MonthlyProfit: "210%",
      ReferralBonus: "10%",
      Duration: "61 Day(s)",
    },
  },
];
