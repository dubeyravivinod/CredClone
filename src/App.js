import './App.css';
import Header from './Components/Header';
import ExploreRewards from './Components/ExploreRewards';
import Brands from './Components/Brands';
import Experiences from './Components/Experience';
import Options1 from './Components/Options';
import Options2 from './Components/Options2';
import Options3 from './Components/Options3';
import Options4 from './Components/Options4';
import Security from './Components/Security';
import Story from './Components/Story';
import AppStore from './Components/AppStore';

function App() {
  return (
    <div className="App">
      <Header />
      <ExploreRewards />
      <Brands />
      <Experiences />
      <Options1 />
      <Options2 />
      <Options3 />
      <Options4 />
      <Security />
      <Story />
      <AppStore />
    </div>
  );
}

export default App;
