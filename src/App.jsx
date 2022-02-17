import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="orange" message="関有美子" />
      <ColorfulMessage color="red" message="大好き" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
