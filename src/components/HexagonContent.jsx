"use client";
import React from "react";
import styled from "styled-components";

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

const HexagonContent = ({ title, description }) => (
  <Hexagon>
    <h3>{title}</h3>
    <p>{description}</p>
  </Hexagon>
);

export default HexagonContent;
