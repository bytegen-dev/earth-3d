import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { FaGlobe, FaTree } from "react-icons/fa"
import "./index.scss"

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const user = {
  name: "Isaac Adebayo",
  url: "https://tertiux-linktree.netlify.app",
  title: "my Link Tree"
}

function App() {
  return (
    <>
      <CanvasContainer>
        <TopSection />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <div className="backdrop"></div>
      <div className="menu">
        <h3>
          <FaGlobe /> Earth 3d
        </h3>
        <small>by {user.name}</small>
        <a href={user.url}>
          Visit {user.title} <FaTree />
        </a>
      </div>
    </>
  );
}

export default App;
