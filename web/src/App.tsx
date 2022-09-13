interface ButtonProps {
  title: string
}

function Button(props: ButtonProps){
return <button> {props.title} </button>
}

function App() {
  return (
    <div className="App">
     <h1>Hello NLW 9 - Find Your Duo</h1>
      <span>Learn Components, Props and Interface</span>
    <div>
      <Button title="Enviar"/>
      <Button title="Salvar"/>
      <Button title="Apagar"/>
      <Button title="Hello World"/>
      </div>
    </div>
  )
}

export default App
