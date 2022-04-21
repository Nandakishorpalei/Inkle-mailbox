import "./App.css";
import MailBox from "./components/MailBox";
import { ErrorBoundary } from "react-error-boundary";
import FallBackUI from "./components/FallbackUI/FallBackUI";

function App() {
  function errorHandler(error, errorInfo) {
    console.log("logging", error, errorInfo);
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBackUI} onError={errorHandler}>
        <MailBox />
      </ErrorBoundary>
    </div>
  );
}

export default App;
