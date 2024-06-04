import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";

export function FormSignUp() {
  const navigate = useNavigate();

  type InputTypes = {
    name: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <h2>Crie sua conta</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Nome:
            <input
              type="text"
              placeholder="digite seu nome"
              {...register("name", {
                required: "campo obrigatório!",
              })}
            />
          </label>
          <span className="inputError">{errors.name?.message}</span>
        </section>

        <section>
          <label>
            Email:
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "campo obrigatório!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "endereço de email inválido!",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input
              type="password"
              placeholder="Minimum 7 characters"
              {...register("password", {
                required: "campo obrigatório!",
                minLength: {
                  value: 7,
                  message: "A senha deve ter no mínimo 7 dígitos",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./\\[\]-]).+$/,
                  message:
                    "A senha deve ter número, letra maiúscula e caractere especial",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.password?.message}</span>
        </section>

        <Button title="Finalizar" loading={false} variant="secondary" />
      </form>

      <span className="messageChangePage">Já tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/")}>
        Login
      </button>
    </Container>
  );
}
