import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  /* 1) 함수 분리해서 쓰는 방법 */
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);
  /* 2) 간단하게 쓰는 방법 */
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword가 변화할 때만 useEffect 안의 코드를 실행할 것이다!
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"Continue"}/> */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
