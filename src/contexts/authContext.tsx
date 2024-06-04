import { PropsWithChildren, createContext, useState } from "react";
import { API } from "../configs/api";

type SignInTypes = {
  password: string;
  email: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
  isLoading: boolean;
  userAuth: { id?: string };
};

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const [userAuth, setUserAuth] = useState({});

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    setIsLoading(true);

    return API.post("/login", {
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        
        setUserAuth({ id: res.data.id });

        localStorage.setItem("@task_manager:user", JSON.stringify({ id: res.data.id }));

        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao fazer login!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, isLoading, userAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
