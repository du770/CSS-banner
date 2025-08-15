import "./App.css";

export default function App() {
  return (
    <div className="tabela-precos">
      <div className="plano">
        <h2>Básico</h2>
        <p>R$ 29/mês</p>
        <ul>
          <li>1 usuário</li>
          <li>Suporte básico</li>
        </ul>
        <button className="btn-assinar">Assinar</button>
      </div>
      <div className="plano">
        <h2>Pro</h2>
        <p>R$ 59/mês</p>
        <ul>
          <li>5 usuários</li>
          <li>Suporte premium</li>
        </ul>
        <button className="btn-assinar">Assinar</button>
      </div>
    </div>
  );
}