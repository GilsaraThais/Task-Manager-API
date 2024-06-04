import { Container } from "./styles";
import logoReprograma from "../../assets/logo-rj.png";
import { Link } from "react-router-dom";
import { FormSignUp } from "../../components/FormSignUp";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <Link to={"https://emanuelquitino.github.io/Page-WDC"} target="_blank">
            <img src={logoReprograma} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
