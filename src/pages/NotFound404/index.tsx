import './styles.css'

export function NotFound() {
  const fnVoltarInicio = () => window.location.assign('/')
  return (
    <div className="page">
      <div className="container">
        <h1 className="titulo">404</h1>
        <h2 className="subtitulo">
          A página que você está procurando não existe.
        </h2>

        <p>
          Você pode ter digitado incorretamente o endereço ou a página pode ter
          sido movida.
        </p>

        <button className="btn-voltar" onClick={fnVoltarInicio}>
          Voltar para a página inicial
        </button>
      </div>
    </div>
  )
}
