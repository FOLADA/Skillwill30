import { fetchUser } from "./store/actions"


function App() {
  return (
    <div>
      <button onClick={fetchUser()}>CLICK</button>
    </div>
  )
}

export default App
