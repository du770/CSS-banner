import "./App.css";

export default function App() {
  return (
    <div className="artigos">
      <article className="article">
        <h2>Como aprender CSS rápido</h2>
        <p>Dicas práticas para melhorar suas habilidades.</p>
        <button className="ler-mais">Ler mais</button>
      </article>
      <article className="article">
        <h2>Flexbox vs Grid</h2>
        <p>Quando usar cada um para criar layouts.</p>
        <button className="ler-mais">Ler mais</button>
      </article>
      <article className="article">
        <h2>Animações em CSS</h2>
        <p>Como deixar seu site mais interativo.</p>
        <button className="ler-mais">Ler mais</button>
      </article>
    </div>
  );
}