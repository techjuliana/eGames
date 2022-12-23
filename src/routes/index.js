import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingTelas from "../telas/onboardingTelas";
import Cadastro from "../telas/cadastro";
import CadastroFinal from "../telas/cadastroFinal";
import EmBreve from "../telas/emBreve";
import Login from "../telas/login";
import Home from "../telas/home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnboardingTelas}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="cadastroFinalizacao"
        component={CadastroFinal}
        options={{
          title: "Voltar cadastro inicial",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="breve"
        component={EmBreve}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
