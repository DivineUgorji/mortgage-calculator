import React from "react";
import Card from "../components/UI/Card";
import CalculatorForm from "../components/CalculatorForm";
import ResultCard from "../components/ResultCard";

const Home = () => {
  return (
    <div
      className="flex mx-auto p-6
      justify-center font-jakarta"
    >
      <div
        className="flex flex-col bg-neutral-white
      min-[688px]:flex-row sm:rounded-3xl shadow-2xl overflow-hidden"
      >
        <Card
          className="bg-neutral-white w-full px-6 py-8 
          lg:p-[2.5rem] min-[688px]:rounded-t-2xl min-[688px]:rounded-b-2xl 
          max-[768px]:rounded-t-2xl lg:max-w-[31.5rem] overflow-hidden"
        >
          <CalculatorForm />
        </Card>

        <Card
          className="bg-slate-900 w-full lg:max-w-[31.5rem]
    sm:rounded-b-xs lg:rounded-r-xs 
    lg:rounded-bl-[5.1rem] px-6 py-6 md:p-[2.5rem]"
        >
          <ResultCard />
        </Card>
      </div>
    </div>
  );
};

export default Home;
