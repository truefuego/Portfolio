"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 2 ? 'text-purple-400' : ' text-white'} opacity-0`}
              transition={{delay: idx===0 ? 0.8 : 0.2}}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}{idx == 1 && (<br />)}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("w-full font-semibold text-right", className)}>
        <div className="leading-snug tracking-wide cursor-default">
          {renderWords()}
        </div>
    </div>
  );
};
