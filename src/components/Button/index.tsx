import { ButtonStyle, Container } from "./styles";
import loadingImg from "../../assets/loading.gif";

type ButtonTypes = {
  title: string;
  loading?: boolean;
  variant?: ButtonStyle;
};

export function Button({ title, loading = false, variant = "primary" }: ButtonTypes) {
  return (
    <Container variant={variant} disabled={loading}>
      {loading ? <img src={loadingImg} width={14} /> : title}
    </Container>
  );
}
