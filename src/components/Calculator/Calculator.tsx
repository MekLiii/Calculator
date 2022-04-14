import {
  Body as StyledBody,
  CalculatorBody,
  CalculatorBodyTop,
  CalculatorBodyMid,
  CalculatorBodyBottom,
} from "../../styled-components/styled-compnents";
import { useState } from "react";
import ButtonOperation from "../Button/ButtonOperation";

function App() {
  const [outPut, setOutPut] = useState<string>("0");
  const [smallOutPut, setsmallOutPut] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");

  const addNumberToOutPut = (number: string) => {
    if (outPut.length > 13) return;
    if (outPut === "0") {
      setOutPut(number);
    } else {
      setOutPut(outPut + number);
    }
  };
  const changeOperator = (operator: string) => {
    setOperator(operator);
    setsmallOutPut(outPut);
    setOutPut("0");
  };
  const deleteAll = () => {
    setOutPut("0");
    setsmallOutPut("0");
    setOperator("");
  };
  const removeLastNumber = () => {
    if (outPut.length === 1) {
      setOutPut("0");
    } else {
      setOutPut(outPut.slice(0, -1));
    }
  };
  const calculate = () => {
    if (smallOutPut === "0") return;
    const newOutPut = eval(smallOutPut + operator + outPut);
    setOutPut(String(newOutPut));
    setOperator("");
    setsmallOutPut("0");
  };
  const addKoma = () => {
    if (outPut.includes(".")) return;
    setOutPut(outPut + ".");
  };
  return (
    <StyledBody>
      <CalculatorBody>
        <CalculatorBodyTop>{smallOutPut}</CalculatorBodyTop>
        <CalculatorBodyTop>{operator}</CalculatorBodyTop>
        <CalculatorBodyMid>{outPut}</CalculatorBodyMid>
        <CalculatorBodyBottom>
          <ButtonOperation label={"/"} onClick={() => changeOperator("/")} />
          <ButtonOperation label={"*"} onClick={() => changeOperator("*")} />
          <ButtonOperation label={"-"} onClick={() => changeOperator("-")} />
          <ButtonOperation label={"disc"} onClick={() => removeLastNumber()} />
          <ButtonOperation label={"7"} onClick={() => addNumberToOutPut("7")} />
          <ButtonOperation label={"8"} onClick={() => addNumberToOutPut("8")} />
          <ButtonOperation label={"9"} onClick={() => addNumberToOutPut("9")} />
          <ButtonOperation label={"+"} onClick={() => changeOperator("+")} />
          <ButtonOperation label={"4"} onClick={() => addNumberToOutPut("4")} />
          <ButtonOperation label={"5"} onClick={() => addNumberToOutPut("5")} />
          <ButtonOperation label={"6"} onClick={() => addNumberToOutPut("6")} />
          <ButtonOperation label={"1"} onClick={() => addNumberToOutPut("1")} />
          <ButtonOperation label={"2"} onClick={() => addNumberToOutPut("2")} />
          <ButtonOperation label={"3"} onClick={() => addNumberToOutPut("3")} />
          <ButtonOperation label={"enter"} onClick={() => calculate()} />
          <ButtonOperation label={"0"} onClick={() => addNumberToOutPut("0")} />
          <ButtonOperation label={"."} onClick={() => addKoma()} />
          <ButtonOperation label={"AC"} onClick={() => deleteAll()} />
        </CalculatorBodyBottom>
      </CalculatorBody>
    </StyledBody>
  );
}

export default App;
