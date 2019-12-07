import React from 'react';
import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {updateUser} from "./redux/actions";

function App() {
  //왼 props, 오른쪽 state
  const products = useSelector(state=> state.products);
  const user = useSelector (state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <p>
          {user}
        </p>
      <button onClick ={()=>dispatch(updateUser("LCY"))}>액션 디스패치 테스트</button>
    </div>
  );
}

export default App;