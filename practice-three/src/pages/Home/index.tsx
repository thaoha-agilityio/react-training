// Components
import Header from "../../components/Header";
import SubHeader from "./components/SubHeader";

// Themes
import { Container } from "../../styled-common";

import { MainContentStyled } from "./index.styled";

import Books from "./components/Books";

const Home = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <SubHeader />
      <MainContentStyled>
        <Books />
      </MainContentStyled>
    </Container>
  );
};

export default Home;
