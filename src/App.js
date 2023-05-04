import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
