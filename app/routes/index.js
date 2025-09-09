import { View } from "react-native";
import AuthRoutes from "./auth.routes";

function Rotas() {
  const loading = false;
  const signed = false;

  return (
    signed ? <View></View> : <AuthRoutes/>
  )
}

export default Rotas