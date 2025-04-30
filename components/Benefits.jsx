import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdCheck,
  MdCreditCard,
  MdLock,
  MdPhonelinkSetup,
  MdSmartScreen,
} from "react-icons/md";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Benefits = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <motion.h1
          className="font-bold text-3xl lg:text-6xl/[5rem] xl:max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          Discover the Benefits in your Financial Control
        </motion.h1>

        <motion.p
          className="py-6 text-[#a0cdcd]"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          Explore the advantages that SwizzFunds has to offer in the world of
          personal finance
        </motion.p>
      </div>

      <div className="relative">
        <motion.section
          className="flex flex-col lg:flex-row gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <MdLock className="text-4xl" />,
              title: "Security is our top priority",
              description:
                "We use state of the art security measures when handlinh your account details and personal funds. Your information is SSL encrypted and safely stored",
              link: "/",
            },
            {
              icon: <MdCreditCard className="text-4xl" />,
              title: "Next Generation platform",
              description:
                "Our ground breaking platform can be easly customized to fit your precise level of expertise and trading needs",
              link: "/",
            },
            {
              icon: <MdPhonelinkSetup className="text-4xl" />,
              title: "24/7 Support",
              description:
                "Our dedicated team of customer support experts are always available to assist you with every need or request, anywhere you are in your native language.",
              link: "/",
            },
            {
              icon: <MdSmartScreen className="text-4xl" />,
              title: "Firm Regulation",
              description:
                "SwizzFunds complies with the strictest regulation guigelines, under IFSC (International Financial Services Commission), to ensure the safest trading conditions.",
              link: "/",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`${
                index === 1
                  ? "bg-[#1D615F]"
                  : index === 3
                  ? "bg-[#1D615F]"
                  : "bg-[#222E2E] md:bg-transparent"
              } flex-1 min-w-0 py-14 px-6  text-center flex flex-col items-center gap-8 rounded-[2.5rem]`}
              variants={cardVariants}
            >
              {card.icon}
              <h2 className="font-bold text-xl">{card.title}</h2>
              <p className="text-[#a0cdcd] text-md md:text-lg">
                {card.description}
              </p>
              {/* <Link href={card.link} className="text-redColor font-semibold">
                View More
              </Link> */}
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
            <div className="grid gap-4 w-full">
              <h2 className="font-bold text-3xl py-6 lg:text-5xl/[4rem]">
                Trade globally, control locally.
              </h2>
              <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                With SwizzFunds, you can access global markets from anywhere
                using your desktop or mobile device — all while managing your
                personal portfolio on a single, intuitive dashboard.
              </p>
              <div className="mt-16">
                <Link
                  href="/"
                  className="bg-redColor rounded-xl py-4 px-8 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <motion.div className="mt-10 w-full" variants={cardVariants}>
              <Image
                width={500}
                height={500}
                src="/woman.png"
                alt="Global trading access"
                className="lg:w-[450px]"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mt-20 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:justify-start gap-8 w-full items-center">
            <div className="grid gap-6 w-full">
              <h2 className="font-bold text-3xl py-6 lg:text-5xl/[4rem]">
                Secure, smart, and built for you.
              </h2>
              <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                We combine professional expertise with cutting-edge technology
                to give you a secure and innovative trading experience backed by
                integrity and constant growth.
              </p>
              <div className="grid gap-6">
                <p className="flex items-center gap-4 font-bold text-lg">
                  <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </span>
                  Regulated by global authorities
                </p>
                <p className="flex items-center gap-4 font-bold text-lg">
                  <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </span>
                  Constant innovation in financial tech
                </p>
              </div>
              <div className="mt-16">
                <Link
                  href="/"
                  className="bg-redColor rounded-xl py-4 px-8 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <motion.div
              className="mt-10 w-full flex lg:justify-end"
              variants={cardVariants}
            >
              <Image
                width={500}
                height={500}
                src="/phone.png"
                alt="Secure tech"
                className="lg:w-[450px]"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Benefits;
