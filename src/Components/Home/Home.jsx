import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import HeaderMain from "../Header/HeaderMain";
import OptionalPart from "../OptionalPart/OptionalPart";

const Home = () => {
  const [criptoData, setCriptoData] = useState([]);
  const [city, setCity] = useState("Gazipur");
  useEffect(() => {
    // const city = "London";
    const API_KEY = "ab8cddbf4e17c50e3022e304a60afad9";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab8cddbf4e17c50e3022e304a60afad9`
      )
      .then((res) => setCriptoData(res.data));
  }, [city]);
  // console.log(criptoData);
  return (
    <>
      <NavBar></NavBar>
      <HeaderMain setCity={setCity} criptoData={criptoData}></HeaderMain>
      <OptionalPart></OptionalPart>
    </>
  );
};

export default Home;
