"use client";
import { motion } from "framer-motion";
import AnimatedText from "./animation-heading";

interface TProps {
  title: string;
  chip: string;
  description: string;
}

const Hero = ({ description, title, chip }: TProps) => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col space-y-5 justify-center items-center h-full text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">
          {chip ?? "N/A"}
        </motion.span>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          <AnimatedText text={title ?? "N/A"} />
        </h1>
        <p className="text-lg text-gray-300 mb-8">{description ?? "N/A"}</p>
      </div>
    </div>
  );
};

export default Hero;
