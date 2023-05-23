import { Fragment } from "react";
import { GlobaStyles } from "./GlobalStyles.styled";
import { Chat } from "./pages/Chat";
function App() {
  return (
    <Fragment>
      <GlobaStyles />
      <Chat />
    </Fragment>
  );
}

export default App;
