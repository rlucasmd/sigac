import asideImage from "../../assets/images/asideimage.jpg";
import { Button } from "../../components/Button";
import { LoginForm, LoginPageContainer } from "./styles";

function Login() {
  return (
    <LoginPageContainer>
      <main>
        <h1>Login</h1>
        <LoginForm>
          <div>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="text" id="password" />
          </div>
          <div>
            <Button>
              Acessar
            </Button>
          </div>
        </LoginForm>
      </main>
      <aside>
        <img src={asideImage} alt="" />
      </aside>
    </LoginPageContainer>
  );
}

export { Login };
