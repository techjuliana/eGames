import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Informativo1 from "./src/components/informativo1";
import Informativo2 from "./src/components/informativo2";
import Informativo3 from "./src/components/informativo3";
import Cadastro from "./src/telas/cadastro";
import CadastroFinal from "./src/telas/cadastroFinal";
import EmBreve from "./src/telas/emBreve";
import Login from "./src/telas/login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="primeiro"
          component={Informativo1}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="segundo"
          component={Informativo2}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="terceiro"
          component={Informativo3}
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
    </NavigationContainer>
  );
}
