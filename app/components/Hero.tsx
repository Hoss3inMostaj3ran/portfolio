"use client";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div>
      <h1 className="text-white font-light text-2xl">
        Hello I am{" "}
        <span className="text-green-500 font-normal ">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Hossein Mostajeran",
              "a Full Stack Developer",
              "a Software Enginear",
              "a Hot Coffee Lover!",
            ]}
            loop={true}
            cursor
            cursorColor="#f7ab0a"
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
};

export default Hero;
