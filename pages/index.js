import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Dashboard from "./dashboard";
import reducer from "./Reducer/index";
import { composeWithDevTools } from 'redux-devtools-extension';

export default function Home() {

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
