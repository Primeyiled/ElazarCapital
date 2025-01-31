import {
  IconArrowLeft,
  IconBrandTabler,
  IconCreditCardPay,
  IconCreditCardRefund,
  IconHistory,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

export const Dailyplans = [
  {
    title: "Plax Consumer",
    description: "Sending and receiving money in up to 5 countries",
    price: "$0.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
  {
    title: "Plax Business",
    description: "Access to multi-currency accounts and local payments",
    price: "$14.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#1D615F",
  },
  {
    title: "Plax Enterprise",
    description: "Secure and reliable transactions at the enterprise level",
    price: "$34.99",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
];

export const Monthlyplans = [
  {
    title: "Plax Consumer",
    description: "Sending and receiving money in up to 5 countries",
    price: "$10.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
  {
    title: "Plax Business",
    description: "Access to multi-currency accounts and local payments",
    price: "$40.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#1D615F",
  },
  {
    title: "Plax Enterprise",
    description: "Secure and reliable transactions at the enterprise level",
    price: "$54.99",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
];

export const Yearlyplans = [
  {
    title: "Plax Consumer",
    description: "Sending and receiving money in up to 5 countries",
    price: "$30.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
  {
    title: "Plax Business",
    description: "Access to multi-currency accounts and local payments",
    price: "$60.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#1D615F",
  },
  {
    title: "Plax Enterprise",
    description: "Secure and reliable transactions at the enterprise level",
    price: "$80.99",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
];

export const TwoYearsplans = [
  {
    title: "Plax Consumer",
    description: "Sending and receiving money in up to 5 countries",
    price: "$50.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
  {
    title: "Plax Business",
    description: "Access to multi-currency accounts and local payments",
    price: "$90.00",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#1D615F",
  },
  {
    title: "Plax Enterprise",
    description: "Secure and reliable transactions at the enterprise level",
    price: "$100.99",
    features: [
      "Unlimited transactions",
      "Basic Technical Support (Email)",
      "Instructional advisor",
    ],
    backgroundColor: "#222E2E",
  },
];

export const FeedBacks = [
  {
    category: "Rüdiger Karlsen",
    title:
      "Explore more Managing savings has never been so easy. Plax has helped me achieve my financial goals faster than I imagined.",
  },

  {
    category: "Branka Berg",
    title:
      "Plax's security is unparalleled. I feel comfortable knowing that my data is protected while I control my finances.",
  },

  {
    category: "Karl Andreassen",
    title:
      "Plax adapts to my needs. I can customize my plan and I really feel like I am in control who formed us in his own image.",
  },
  {
    category: "Karl Andreassen",
    title:
      "Plax adapts to my needs. I can customize my plan and I really feel like I am in control who formed us in his own image.",
  },
];

export const FrequentlyAskedQ = [
  {
    title: "How can i send mony with Plax",
    desc: "Discover the step-by-step process to make money transfers easily and securely with Plax. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
  },
  {
    title: "What is the coverage of the Plax network?",
    desc: "Discover the step-by-step process to make money transfers easily and securely with Plax. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
  },
  {
    title: "How can I contact Plax customer service?",
    desc: "Discover the step-by-step process to make money transfers easily and securely with Plax. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
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
      name: "Bronze Package",
      Minimum: "$10,000.00" ,
      Maximum: "$30,000.00",
      DailyProfit: "5%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "10%",
      Duration: "15 Day(s)",
  },
  {
      id: "e2",
      name: "Silver Package",
      Minimum: "$30,000.00",
      Maximum: "$100,000.00",
      DailyProfit: "6.5%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "10%",
      Duration: "20 Day(s)"  
  },
  {
      id: "e3",
      name: "Platinum Package",
      Minimum: "$100,000.00",
      Maximum: "$500,000.00",
      DailyProfit: "7%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "10%",
      Duration: "31 Day(s)"  
  },
  {
      id: "e4",
      name: "Gold Package",
      Minimum: "$ $1,000,000.00",
      Maximum: "$1,500,000.00",
      DailyProfit: "7.5%",
      WeeklyProfit: "42%",
      MonthlyProfit: "180%",
      ReferralBonus: "10%",
      Duration: "50 Day(s)" 
  },
]
export const CryptoPlans = [
  {
      id: "c1",
      name: "Starter Plan",
      Minimum: "$300",
      Maximum: "Unlimited",
      DailyProfit: "2.3%",
      WeeklyProfit: "6%",
      MonthlyProfit: "24%",
      Withdrawal: "Weekly",
      ReferralBonus: "5%",
      Duration: "7 Day(s)"  
  },
  {
      id: "c2",
      name: "Basic Plan",
      Minimum: "$1,000",
      Maximum: "Unlimited",
      DailyProfit: "2.9%",
      WeeklyProfit: "9%",
      MonthlyProfit: "36%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: "7 Day(s)"   
  },
  {
      id: "c2",
      name: "Couple Plan",
      Minimum: "$50,000",
      Maximum: "Unlimited",
      DailyProfit: "4.4%",
      WeeklyProfit: "7.2%",
      MonthlyProfit: "28.2%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: "30 Day(s)"   
  },
  {
      id: "c3",
      name: "Investor Plan",
      Minimum: "$100,000",
      Maximum: "Unlimited",
      DailyProfit: "5.3%",
      WeeklyProfit: "12%",
      MonthlyProfit: "48%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: "30 Day(s)"   
  },
  {
      id: "c4",
      name: "Business Plan",
      Minimum: "$500,000",
      Maximum: "Unlimited",
      DailyProfit: "6%",
      WeeklyProfit: "18%",
      MonthlyProfit: "72%",
      Withdrawal: "Weekly",
      ReferralBonus: "15%",
      Duration: "50 Day(s)"   
  },
  {
      id: "c6",
      name: "Coperate Account",
      Minimum: "$1,000,000.00",
      Maximum: "Unlimited",
      DailyProfit: "8%",
      WeeklyProfit: "15%",
      MonthlyProfit: "60%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: " 60 Day(s)"   
  },
  

]
export const ForexPlans = [
  {
      id: "f1",
      name: "Euro",
      Minimum: "$1,000.00",
      Maximum: "$20,000.00",
      DailyProfit: "2.9%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "5%",
      Duration: "7 Day(s)"

  },
  {
      id: "f2",
      name: "Dollar",
      Minimum: "$20,000.00",
      Maximum: "$50,000.00",
      DailyProfit: "4.8%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)"  
  },
  {
      id: "f3",
      name: "Yen", 
      Minimum: "$50,000.00",
      Maximum: "$100,000.00",
      DailyProfit: "5.3%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "31 Day(s)"  
  },
  {
      id: "f4",
      name: "Pounds",  
      Minimum: " $100,000.00",
      Maximum: "$250,000.00",
      DailyProfit: "7%",
      WeeklyProfit: "49%",
      MonthlyProfit: "210%",
      ReferralBonus: "10%",
      Duration: "61 Day(s)"
  },
]
export const StockPlans = [
  {
      id: "s1",
      name: "Apple Stock",  
      Minimum: "$5,000.00",
      Maximum: "$50,000.00",
      DailyProfit: "4%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "3%",
      Duration: "20 Day(s)"
  },
  {
      id: "s2",
      name: "Google Stock",  
      Minimum: "$50,000.00",
      Maximum: "$100,000.00",
      DailyProfit: "5%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)"
  },
  {
      id: "s3",
      name: "Tesla", 
      Minimum: "$150,000.00",
      Maximum: "$3,000,000.00",
      DailyProfit: "6%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "30 Day(s)" 
  },
  {
      id: "s4",
      name: "Amazon Stock",  
      Minimum: "$300,000.00",
      Maximum: "$1,000,000.00",
      DailyProfit: "7.6%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "10%",
      Duration: "40 Day(s)"
  },
  {
      id: "s5",
      name: "Amature",  
      Minimum: " $50,000.00",
      Maximum: "$100,000.00",
      DailyProfit: "5%",
      WeeklyProfit: "35%",
      MonthlyProfit: "150%",
      ReferralBonus: "6%",
      Duration: "20 Day(s)"
  },
  
]
export const GoldPlans = [
  {
      id: "c1",
      name: "Starter Plan",
      Minimum: "$5,000",
      Maximum: "Unlimited",
      DailyProfit: "2.3%",
      WeeklyProfit: "6%",
      MonthlyProfit: "24%",
      Withdrawal: "Weekly",
      ReferralBonus: "5%",
      Duration: "7 Day(s)"  
  },
  {
      id: "c2",
      name: "Basic Plan",
      Minimum: "$35,000",
      Maximum: "Unlimited",
      DailyProfit: "2.9%",
      WeeklyProfit: "9%",
      MonthlyProfit: "36%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: "20 Day(s)"   
  },
  {
      id: "c3",
      name: "Advanced Plan",
      Minimum: "$100,000",
      Maximum: "Unlimited",
      DailyProfit: "5.3%",
      WeeklyProfit: "12%",
      MonthlyProfit: "48%",
      Withdrawal: "Weekly",
      ReferralBonus: "10%",
      Duration: "30 Day(s)"  
  },
  {
      id: "c4",
      name: "Premium Plan",
      Minimum: "$500,000",
      Maximum: "Unlimited",
      DailyProfit: "6%",
      WeeklyProfit: "18%",
      MonthlyProfit: "72%",
      Withdrawal: "Weekly",
      ReferralBonus: "15%",
      Duration: "50 Day(s)"     
  },
 
  

]
export const SilverPlans = [
  {
      id: "c1",
      name: "Starter Plan",
      Minimum: "$1,000.00",
      Maximum: "$20,000.00",
      DailyProfit: "2.9%",
      WeeklyProfit: "7%",
      MonthlyProfit: "30%",
      ReferralBonus: "5%",
      Duration: "7 Day(s)" 
  },
  {
      id: "c2",
      name: "Basic Plan",
      Minimum: "$20,000.00",
      Maximum: "$50,000.00",
      DailyProfit: "4.8%",
      WeeklyProfit: "14%",
      MonthlyProfit: "60%",
      ReferralBonus: "5%",
      Duration: "21 Day(s)"  
  },
  {
      id: "c3",
      name: "Advanced Plan",
      Minimum: "$50,000.00",
      Maximum: "$100,000.00",
      DailyProfit: "5.3%",
      WeeklyProfit: "21%",
      MonthlyProfit: "90%",
      ReferralBonus: "7%",
      Duration: "31 Day(s)"    
  },
  {
      id: "c4",
      name: "Premium Plan",
      Minimum: " $100,000.00",
      Maximum: "$250,000.00",
      DailyProfit: "7%",
      WeeklyProfit: "49%",
      MonthlyProfit: "210%",
      ReferralBonus: "10%",
      Duration: "61 Day(s)"  
  },
 
  

]