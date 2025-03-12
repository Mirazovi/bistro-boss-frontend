import React from 'react';

interface PropTypes {
  heading: string;
  subHeading: string;
  coverImg: string;
}

const Cover = ({ heading, subHeading, coverImg }: PropTypes) => {

  return (
    <div className="w-[90%] mx-auto mt-10">
      <div
        className="hero h-[500px] bg-cover bg-center relative rounded-2xl"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center relative z-9 ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">{subHeading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
