import SarchFild from "../SarchFild/SarchFild";
import WeatherFild from "../WeatherFild/WeatherFild";
import RechartsChart from "../RechartsChart/RechartsChart";

const HeaderMain = ({ criptoData, setCity }) => {
  return (
    <div className="p-4">
      <SarchFild setCity={setCity}></SarchFild>
      <WeatherFild criptoData={criptoData}></WeatherFild>
      <RechartsChart></RechartsChart>
    </div>
  );
};

export default HeaderMain;
