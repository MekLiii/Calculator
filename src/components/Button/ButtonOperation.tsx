import React from "react";
import styled from "styled-components";
import { ArrowBackOutline } from "react-ionicons";

type Props = {
  label: string;
  styles?: {};
  onClick: () => void;
};

const ButtonOperation: React.FC<Props> = ({ label, onClick }) => {
  const styles: React.CSSProperties = {};
  if (label === "+" || label === "enter") {
    styles.gridRow = "span 2";
  }

  if (label === "disc") {
    return (
      <Button style={styles} onClick={onClick}>
        <ArrowBackOutline color={"white"} height="25px" width="25px" />
      </Button>
    );
  }

  return (
    <Button style={styles} onClick={onClick}>
      {label != "disc" && label}
    </Button>
  );
};

const Button = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: #f7ce68;
    color: black;
  }
`;
export default ButtonOperation;
