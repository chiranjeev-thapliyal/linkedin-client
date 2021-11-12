import './App.css'
import Route from "./components/Route";

import SignupLogo from "./components/assets/svg/SignupLogo";
import { NetworksPage } from "./components/views/Network/NetworksPage";
import { JoinNowPage } from "./components/views/Signup/JoinNowPage";
import { Signup } from "./components/views/Signup/Signup";

function App() {
  return (
    <div className='App'>
      {/* <Route /> */}
      <NetworksPage />
      {/* <Signup /> */}
      {/* <JoinNowPage /> */}
    </div>
  );
}

export default App;
