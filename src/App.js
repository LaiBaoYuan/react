import Footer from "./components/footer";
import Main from "./components/main";
import Header from "./components/header";
import Sider from "./components/sider";

function App() {
  return (
    <div id="app" className="df aic">
      <Sider />
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
