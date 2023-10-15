import React, { useState } from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd1b;
  ${'' /* background-color: #fff; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* padding-top: 13%; */}
  z-index: 99;
  ${'' /* pointer-events: none; */}
`;


const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: transparent;
    background-color: #27b92788;
    ${'' /* border: 2px solid #27b927; */}
  }
`;

const RedButton = styled.button`
  outline: none;
  border: none;
  background-color: #cc0000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  pointer-events: all;
  position: fixed;
  bottom: 20px;
  z-index: 1000;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: #cc000099;
    border: 2px solid #cc000000;
  }
`;

const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection() {
  const [hide, setHide] = useState(false)

  return (
    <TopSectionContainer style={hide ? {
      pointerEvents:"none"
    }:{
      pointerEvents: "all"
    }}>
      {hide ? <></> : <>
        <Logo>Earth 3d</Logo>
        <Slogan>Made with THREE.js</Slogan>
        {hide === "axaxkaxjaxaxn" && <Paragraph>
          You can help us cool off our world and have it go back to it's best
          state ever by donating to help fix our only world and our beloved EARTH!
          Be cool and let the earth be cool. Let the ice burgs to live. Globe is
          warming and will set to fire. Stop polluting, it will cost extra.
        </Paragraph>}
      </>}
      {hide ? <RedButton onClick={()=>{
        setHide((prev)=>{
          return (false)
        })
      }}>{hide ? "Exit Interaction" : "Interact 3d"}</RedButton> : <DonateButton onClick={()=>{
        setHide(true)
      }}>{hide ? "Exit Interaction" : "Interact 3d"}</DonateButton>}
      {/* <MadeBy>
        <u>Made By:</u> Isaac Adebayo using THREE.js
      </MadeBy> */}
    </TopSectionContainer>
  );
}
