import React from "react";
import Card from "../components/UI/Card";
import CalculatorForm from "../components/CalculatorForm";
import ResultCard from "../components/ResultCard";

const Home = () => {
  return (
    <div className="m-auto p-6 flex flex-col md:rounded-2xl min-[375px]:flex-row border-2 border-slate-900">
      <Card className="w-[31.5rem]">
        <CalculatorForm />
      </Card>

      <Card className="w-[31.5rem]  bg-slate-900 p-[2.5rem] pb-[7.18rem]">
        <ResultCard />
      </Card>
    </div>
  );
};

export default Home;
