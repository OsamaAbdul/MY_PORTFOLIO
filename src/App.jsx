import './App.css';
import Header from './components/Header'
import Contents from './components/MainContent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Contents />
    </>

  );
}

export default App;
