import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Homem from "./../../assets/homem.svg";
import Pessoas from "./../../assets/pessoas.svg";
import Mulher from "./../../assets/mulher.svg";
const OnboardingTelas = () => (
  <Onboarding
    titleStyles={{ fontWeight: "bold" }}
    pages={[
      {
        backgroundColor: "rgba(113,45,224,0.779171043417367)",
        image: <Homem />,
        title: "Tudo em um só lugar",
        subtitle:
          "Os melhores games, lançamentos, novidades e tudo o que você precisa você vai ver aqui.",
      },
      {
        backgroundColor: "rgba(235,47,147,0.8043811274509804)",
        image: <Pessoas />,
        title: "Somos uma comunidade",
        subtitle:"Encontre outros jogadores com os mesmos interesses que você em uma comunidade ativa.",
      },
      {
        backgroundColor: "#101114",
        image: <Mulher />,
        title: "Divirta-se",
        subtitle: "Entre para a maior comunidade de games do mundo.",
      },
    ]}
  />
);

export default class App extends React.Component {
  render() {
    return <OnboardingTelas />;
  }
}
