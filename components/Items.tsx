import React from "react";
import { motion } from "framer-motion";
import { items } from "../data/data";
import Link from "next/link";
import Image from "next/image";
import Label from "./Label";
import { IoIosLaptop } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";

export function Item({ id }) {
  const { description, title, technology, excerpt, live } = items.find(
    (item) => item.id === id
  );

  return (
    <>
      <Link href="/" scroll={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        ></motion.div>
      </Link>
      <div className="card-content-container open">
        <motion.div
          className={`card-content bg-black`}
          layoutId={`card-container-${id}`}
        >
          <Link href="/" scroll={false}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <Image
                className="card-image"
                layout="fill"
                objectFit="contain"
                src={`/images/${id}.webp`}
                alt=""
              />
            </motion.div>
          </Link>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{title}</span>
            <h2>{description}</h2>
          </motion.div>
          <motion.div className="content-container md:mx-4" animate>
            <div className="w-auto lg:w-min mb-4 flex flex-wrap lg:flex-nowrap items-center gap-y-2 justify-center cursor-pointer">
              {technology?.split(",").map((tag, index) => (
                <Label key={index}>{tag}</Label>
              ))}
            </div>
            <p className="mt-2 relative text-gray-200 font-lora font-medium text-lg leading-6">
              {excerpt}
            </p>
            <Link href={live} passHref>
              <a target="_blank">
                <div className="relative group mt-10 inline-flex">
                  <div className="absolute -inset-0.5 blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center space-x-5">
                      <IoIosLaptop className="w-6 h-6 text-pink-600" />
                      <span className="pr-6 text-gray-100">{title}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-100">
                        View Live
                      </span>
                      <BiRightArrowAlt className="w-6 h-6 text-indigo-400" />
                    </span>
                  </button>
                </div>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
