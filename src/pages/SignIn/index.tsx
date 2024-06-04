import { Container } from "./styles";
import logoReprograma from "../../assets/logo-reprograma-jucas.png";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

export function SignIn() {
  return (
    <Container>
      <div className="signInPart1">
        <div>
          <h1>Task Manager</h1>
          <Link to={"https://emanuelquitino.github.io/Page-WDC"} target="_blank">
            <img src={logoReprograma} alt="" />
          </Link>
        </div>
      </div>
      <div className="signInPart2">
        <FormLogin />
      </div>
    </Container>
  );
}
