// 1 - importe o useDispatch
import { useDispatch } from "react-redux";

// 3 - importe o seu thunk
import { addCommentThunk } from "./store/modules/user/thunks";

import "./App.css";

function App() {
  // 2 - atribuindo a variável
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* 4 - dentro do seu componente faça o dispatch do thunk, passando o comentário */}
      <button onClick={() => dispatch(addCommentThunk("Primeiro comentário!"))}>
        new comment
      </button>
    </div>
  );
}

export default App;
