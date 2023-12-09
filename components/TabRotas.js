import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Acesso from './Acesso';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();

export default function TabRotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Acesso"
        component={Acesso}
        options={{ headerShow: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShow: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShow: false }}
      />
    </Stack.Navigator>
  );
}
