import React, { useState, useEffect } from "react";
import "./App.css";
import { AdviceCard, Button } from "./components";
import { getAdvice } from "./services/adviceService";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const advice = await getAdvice();
      setAdvice(advice);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <AdviceCard advice={advice} loading={loading} />
      <Button onClick={getData} />
    </div>
  );
};

export default App;
