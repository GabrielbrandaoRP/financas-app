import { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'
const AuthContext = createContext({});

const navigation = useNavigation();

function AuthProvider({children}) {
  const [user, setUser] = useState({
    nome: "Gabriel",

  });
  const navigation = useNavigation();
  async function SignUp(email,password, nome) {
    try {
        const response = await api.post('/users', {
            name: name,
            email: email,
            password: password
        });
      navigation.goBack()
    } catch (err) {
        console.log("Erro ao cadastrar: ", err);
    }
    return (
      <AuthContext.Provider value = {{user, SignUp}}>
          {children}
      </AuthContext.Provider>
    )
  }
}


export default AuthProvider;
