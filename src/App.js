// 1 - importe o useDispatch
import { useDispatch, useSelector } from "react-redux";

// 3 - importe o seu thunk
import { addCommentThunk } from "./store/modules/user/thunks";

import "./App.css";
import { useState } from "react";

function App() {
  // 2 - atribuindo a variável
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  const handleClick = () => {
    if (!!comment) {
      dispatch(addCommentThunk(comment));
      setComment("");
    }
  };
  return (
    <div className="App">
      <input
        placeholder="Digite um comentário"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {/* 4 - dentro do seu componente faça o dispatch do thunk, passando o comentário */}
      <button onClick={handleClick}>new comment</button>
      <div>
        <h3>{user.name}</h3>
        {user.comments.map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
