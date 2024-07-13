
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {add , sub} from './actions/Index'
function App() {
  const myValue = useSelector((state)=>state.add_sub)
  const dispatch = useDispatch()

  return (

    
    <>
      <h1>hello </h1>
      <input type="text" value={myValue} /><br /><br />
      <button onClick={()=>dispatch(add())}>ADD</button> &nbsp; &nbsp;
      <button onClick={()=>dispatch(sub())}>SUB</button> &nbsp; &nbsp;
    </>
  )
}

export default App
