// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import TopImage from "./components/TopImage";

//*----------------------------------------------------
function App() {
  return (
    <div className="app-wrapper grid">
       <Header />
       <NavBar />  
       <TopImage />
       <Profile />
       <Posts />
       <Footer />
    </div>
  );
}
//*--------------------------------------------------
export default App;
