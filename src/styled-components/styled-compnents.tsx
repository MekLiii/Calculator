import styled from "styled-components";
interface CalculatorClickButton {
  isNumber: number;
}

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;
const CalculatorBody = styled.div`
  width: 400px;
  height: 75vh;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 14px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 14px -6px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 14px -6px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CalculatorBodyTop = styled.div`
  height: 7.8vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 25px;
  padding-right: 10px;
`;
const CalculatorBodyMid = styled.div`
  height: 19.5vh;
  width: 100%;
  color: white;
  font-size: 50px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;
const CalculatorBodyBottom = styled.div`
  height: 55vh;
  width: 98%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  margin-bottom: 3px;
`;
export {
  Body,
  CalculatorBody,
  CalculatorBodyTop,
  CalculatorBodyMid,
  CalculatorBodyBottom,
};
