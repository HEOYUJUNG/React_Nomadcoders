import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      // 비어있으면 입력 받지 않음
      return;
    }
    // state는 직접적으로 수정하지 않음!! => toDos에 바로 push하는 형태 X
    setToDos((currentArray) => [toDo, ...currentArray]); // 첫번째 argument : 현재 값
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        {/* form이 submit이라는 이벤트를 가지고 있음! => 버튼 누르면 새로고침 되어버림.. 이걸 막아보자!!*/}
      </form>
      <hr />
      {/* map은 배열 안에 있는 모든 element들에 대해 실행됨 & return 결과가 배열에 다시 저장된다. */}
      {/* map은 함수의 첫 번째 argument로 기존의 값을 가져올 수 있다! */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
