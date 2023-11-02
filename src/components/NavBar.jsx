// import { useEffect, useRef } from "react";
import styled from "styled-components";

const NavBar = () => {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const containerHeight = containerRef.current.clientHeight;
  //     console.log("Altura del Container:", containerHeight, "px");
  //   }
  // }, []);

  // return (
  //   <Container ref={containerRef}>
  //     <Logo>Banna</Logo>
  //   </Container>
  // );

  return (
    <Container>
      <Logo
        src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1698900542/Projects/Banna/banna_oee9re.png"
        alt="logo"
      />
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  background: #e54304;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px solid white;
`;
const Logo = styled.img`
  height: 60px;
`;
