import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Review = ({ reviews }) => {
  const [cardState, setCardState] = useState(0);

  const prevCard = () => {
    const isFirstCard = cardState === 0;
    const newIndex = isFirstCard ? reviews.length - 1 : cardState - 1;
    setCardState(newIndex);
  };

  const nextCard = () => {
    const isLastCard = cardState === reviews.length - 1;
    const newIndex = isLastCard ? 0 : cardState + 1;
    setCardState(newIndex);
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCardState(randomIndex);
  };

  return (
    <article className="bg-white px-10 my-10 w-3/4">
      <div className="flex flex-col justify-center items-center my-12">
        <div
          style={{
            backgroundImage: `url("${reviews[cardState].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-36 h-36 rounded-full relative mb-6"
        >
          <div className="rounded-full w-10 h-10 bg-blue-400 absolute">
            <FaQuoteRight className="absolute left-3 top-3 text-white" />
          </div>
          <div className="rounded-full w-36 h-36 bg-blue-400 relative bottom-1 left-1 -z-10"></div>
        </div>
        <h4 className="font-bold capitalize tracking-widest text-lg">
          {reviews[cardState].name}
        </h4>
        <h3 className="font-normal uppercase text-sm mb-3 text-blue-400">
          {reviews[cardState].job}
        </h3>
        <p className="leading-6 text-slate-500 text-center">
          {reviews[cardState].text}
        </p>
        <div className="flex items-center text-xl text-blue-300 m-5 justify-between w-12">
          <FaChevronLeft className="cursor-pointer" onClick={prevCard} />
          <FaChevronRight className="cursor-pointer" onClick={nextCard} />
        </div>
        <button
          className="bg-blue-50 rounded-sm py-1 px-2 text-sm text-blue-400 cursor-pointer mt-2"
          onClick={surpriseMe}
        >
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
