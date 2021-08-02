import './App.scss';
import Header from './components/header';
import HeadLine from './components/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <HeadLine header='App Header' desc='App description' />
      </section>
    </div>
  );
}

export default App;
