import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import Header from "../components/Header";
import AboutImg from "../assets/about-img.svg";

function About() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Frontend Developer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row pt-4 pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl tracking-tighter font-semibold">
            {`Hi! I'm Emrecan`}{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "Frontend Developer", "Backend Developer" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <p className="pt-4 text-xl font-normal">
            I have just graduated with a degree in Computer Science at Dokuz
            Eylul University. I am interested in web development. I'm trying to
            improve myself every day at frontend and backend. I really enjoy
            learning new technologies and doing this job. Every day I am getting
            one step closer to my dream of being a full stack developer.
          </p>
          <h2 className="text-2xl mt-4 mb-2 font-medium">Tech stack:</h2>
          <div className="flex flex-row gap-4 md:gap-10 flex-wrap">
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>HTML</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>CSS</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>React</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>Redux</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>Node.js</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <AiFillCheckCircle size={18} />
              <span>Express.js</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={AboutImg} alt="about_img" />
        </div>
      </div>
    </div>
  );
}

export default About;
