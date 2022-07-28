import {useRef} from 'react'

const App = () => {

  const name = useRef()
  const age = useRef()

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name.current.value)
    console.log(age.current.value)
  }

  return <div>
    <h1>Working with Form!!</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" ref={name} />
      <input type="text" ref={age} />
      <button>Send</button>
    </form>
  </div>
}

export default App
