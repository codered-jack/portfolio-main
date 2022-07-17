import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";
import { InView } from "react-intersection-observer";

function Technology() {
  return (
    <div className="my-20">
      <SectionTitle>technology</SectionTitle>
      <section className="flex flex-col md:flex-row w-[90vw] md:w-[80%] m-auto">
        <InView
          as="div"
          rootMargin="-50% 10% -50%"
          onChange={(inView, entry) =>
            inView
              ? entry.target.classList.remove("opacity-40")
              : entry.target.classList.add("opacity-40")
          }
          className="transition transition-opacity duration-300 ease-out mix-blend-color-dodge md:w-2/4"
        >
          <p className="font-lora font-bold text-3xl md:text-4xl leading-[40px] lg:leading-[60px] tracking-[2px] md:tracking-[4px] text-slate-200 shadow-sky-600 relative">
            Over the last few years I had many opportunity to work in a vast
            spectrum of web and mobile technologies which let me gather a
            significant amount of various experience. Working for different
            teams around the region I met and learnt from amazing and awesome
            people.
          </p>
        </InView>
        <div className="relative flex flex-row md:flex-col mt-10 space-x-2 md:w-2/4">
          <div className="md:absolute left-2 top-0 z-30">
            <Image
              src="/images/deliveroo/home.png"
              height={480}
              width={240}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="md:absolute left-72 -top-36 z-20">
            <Image
              src="/images/deliveroo/order.png"
              height={480}
              width={240}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="md:absolute right-4 top-[520px] z-10">
            <Image
              src="/images/deliveroo/waiting.png"
              height={480}
              width={240}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="md:absolute left-60 top-60 z-10">
            <Image
              src="/images/deliveroo/checkout.png"
              height={480}
              width={240}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="md:absolute left-16 top-[460px] z-10">
            <Image
              src="/images/deliveroo/estimate.png"
              height={480}
              width={240}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="mx-[15vw]">
        <section className="mt-20 leading-tight text-2xl font-bold font-poppins tracking-widest text-slate-200 mix-blend-color-dodge">
          FRONTEND
        </section>
        <div className="tech-container mt-5 flex flex-wrap space-x-5 space-y-5 md:space-y-0">
          {[
            "javascript",
            "css",
            "next",
            "tailwind",
            "redux",
            "framer",
            "typescript",
            "graphql",
          ].map((item) => (
            <div className="flex space-x-5">
              <Image
                src={`/images/tech-icons/${item}.svg`}
                width={40}
                height={40}
                className={`${
                  item === "tailwind" ? "bg-black" : "bg-white"
                } rounded-md`}
                alt={item}
              />
            </div>
          ))}
        </div>

        <section className="mt-20 leading-tight text-2xl font-bold font-poppins tracking-widest text-slate-200 mix-blend-color-dodge">
          BACKEND & DATABASE
        </section>
        <div className="tech-container mt-5 flex space-x-5">
          {["node", "mongodb", "graphql"].map((item) => (
            <div className="flex space-x-5">
              <Image
                src={`/images/tech-icons/${item}.svg`}
                width={40}
                height={40}
                className={`${
                  item === "tailwind" ? "bg-black" : "bg-white"
                } rounded-md`}
                alt={item}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Technology;
