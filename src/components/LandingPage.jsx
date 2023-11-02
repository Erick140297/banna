import styled from "styled-components";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const LandingPage = () => {

  const sinPrecios = "http://localhost:5173/menu1.pdf";
  const general = "http://localhost:5173/menu2.pdf";

  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <Container>
      <SubContainer>
        <Text>
          <i>Medicina ancestral,</i> enfocada en mejorar tu salud y bienestar.
          Microdosis de extractos naturales como plantas, raíces y hongos que te
          ayudarán a equilibrar tu cuerpo y mente, ayudándote a conciliar mejor
          el sueño, descansando de una mejor forma y potenciando tu creatividad.
        </Text>
        <br />
        <Text>
          Creemos en el poder de la naturaleza como saneamiento del ser, todos
          nuestros productos son de la más alta calidad e importados y cuidados
          desde su origen.
        </Text>
        <br />
        <Text>Descarga el menu de tu elección:</Text>
        <Buttons>
          <Button onClick={() => handleDownload(sinPrecios)}>
            Sin precios
          </Button>
          <Button onClick={() => handleDownload(general)}>General</Button>
        </Buttons>
        <SocialNetworks>
          <Text>Encuentranos en:</Text>
          <Icons>
            <FaceBookIcon />
            <InstagramIcon />
            <WhatSappIcon />
          </Icons>
        </SocialNetworks>
      </SubContainer>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  background: #f3a98c;
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 82px);
`;

const SubContainer = styled.div`
  background: #ec8961;
  width: 80%;
  border-left: 2px solid white;
  border-right: 2px solid white;
  padding: 25px;
`;

const Text = styled.h2`
  color: #401c0e;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: #5a2c1b;
  color: white;
  padding: 20px;
  font-size: 20px;
  border-radius: 15px;
  border: 2px solid white;
  &:hover {
    background: #401c0e;
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const FaceBookIcon = styled(BsFacebook)`
  color: #401c0e;
  font-size: 30px;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const InstagramIcon = styled(BsInstagram)`
  color: #401c0e;
  font-size: 30px;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const WhatSappIcon = styled(BsWhatsapp)`
  color: #401c0e;
  font-size: 30px;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
