// HexagonGridContainer.jsx

import React from "react";
import styled from "styled-components";

const HexagonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Hexagon = styled.div`
  width: 200px;
  height: 115.47px;
  position: relative;
  background-color: #fff;
  margin: 20px;
  border: 1px solid #ccc;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
  }

  &:before {
    bottom: -57.74px;
    border-bottom: 57.74px solid #fff;
  }

  &:after {
    top: -57.74px;
    border-top: 57.74px solid #fff;
  }
`;

const HexagonGridContainer = () => {
  const hexagonsData = [
    { title: "Service 1", description: "Description for Service 1" },
    { title: "Service 2", description: "Description for Service 2" },
    { title: "Service 3", description: "Description for Service 3" },
  ];

  return (
    <HexagonGrid>
      {hexagonsData.map((item, index) => (
        <Hexagon key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Hexagon>
      ))}
    </HexagonGrid>
  );
};

export default HexagonGridContainer;
