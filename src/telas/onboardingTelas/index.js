import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Mulher from "./../../assets/mulher.svg";
import Homem from "./../../assets/mulher.svg";
import Pessoas from "./../../assets/mulher.svg";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#09DA73" : "#0F732B";
  return (
    <View
      style={{
        width: 9,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
      Pular
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
      Próximo
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
      Finalizado
    </Text>
  </TouchableOpacity>
);

const OnboardingTelas = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("home")}
      onDone={() => navigation.navigate("home")}
      pages={[
        {
          backgroundColor: "#7029DF",
          image: <Homem />,
          title: "Tudo em um só lugar",
          subtitle:
            "Os melhores games, lançamentos, novidades e tudo o que você precisa você vai ver aqui.",
        },
        {
          backgroundColor: "#8B2AAD",
          image: <Pessoas />,
          title: "Somos uma comunidade",
          subtitle:
            "Encontre outros jogadores com os mesmos interesses que você em uma comunidade ativa.",
        },
        {
          backgroundColor: "#C42DAB",
          image: <Mulher />,
          title: "Divirta-se",
          subtitle: "Entre para a maior comunidade de games do mundo.",
        },
      ]}
    />
  );
};

export default OnboardingTelas;
