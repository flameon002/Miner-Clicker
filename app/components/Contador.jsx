import React from "react";
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(10000);
  const [clickForce, setClickForce] = useState(1);
  const [costBuyClickForce, setCostBuyClickForce] = useState(100);
  const [costAutoClick, setCostAutoClick] = useState(50);
  const [cps, setCps] = useState(0);

  function incrementContador() {
    setContador(contador + clickForce);
  }

  const handleClick = () => {
    incrementContador();
  };

  const buyClickForce = () => {
    if (contador >= costBuyClickForce) {
      setContador(contador - costBuyClickForce);
      setCostBuyClickForce(costBuyClickForce * 1.2);
      setClickForce(clickForce + 1);
    }
  };

  const buyAutoClick = () => {
    if (contador >= costAutoClick) {
      setContador(contador - costAutoClick);
      setCostAutoClick(costAutoClick * 1.2);
      // setClickForce(clickForce + 1);
    }
  };

  function clickPerSeconds() {

    setInterval(1000, cps)


  }


  const contadorRound = Math.round(contador);
  const roundCostBuyClickForce = Math.round(costBuyClickForce);
  const autoClickRound = Math.round(costAutoClick);

  return (
    <>
      <h1 className="text-5xl">{contadorRound}</h1>
      <div className="flex justify-center items-center ">
        <button
          className="bg-cyan-800 p-4 rounded-xl text-gray-100"
          onClick={() => handleClick()}
        >
          Click me
        </button>

        <h3 className="text-3xl">{clickForce}</h3>
      </div>

      <div>
        <h2>Click Force</h2>
        <h2>
          <strong>cost : {roundCostBuyClickForce}</strong>
        </h2>
        <button
          className="bg-cyan-800 p-4 rounded-xl text-gray-100"
          onClick={() => buyClickForce()}
        >
          Buy
        </button>
      </div>

      <div>
        <h2>Auto Click</h2>
        <h2>
          <strong>cost : {autoClickRound}</strong>
        </h2>
        <button
          className="bg-cyan-800 p-4 rounded-xl text-gray-100"
          onClick={() => buyAutoClick()}
        >
          Buy
        </button>
      </div>
    </>
  );
};

export default Contador;
