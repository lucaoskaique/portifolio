import {
  Container,
  TopLeft,
  BottomLeft,
  BottomRight,
  Hamburger,
} from "./styles";
// import { VelvetBanana } from "./VelvetBanana";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>COICE —</h1>
        <p>Exploring percussive sounds —</p>
      </TopLeft>
      <BottomLeft>
        COICE surge em 2020 como um podcast voltado para música eletrônica.
        <br />
        Focada em sons percussivos, valorizando a sonoridade da América Latina e
        brasileira.
        <br />
        Enfatizando a importância do protagonismo local na cena da música
        eletrônica.
        <br />
        A festa se propõe como uma interseção entre música, programação e artes
        visuais/performance.
        <br />
      </BottomLeft>
      <BottomRight>
        <span>
          Instagram <a href="https://www.instagram.com/coic_e/">@coic_e</a>
        </span>
        <span>
          Soundcloud <a href="https://soundcloud.com/coic_e">Soundcloud</a>
        </span>
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      {/* <VelvetBanana /> */}
    </Container>
  );
}
