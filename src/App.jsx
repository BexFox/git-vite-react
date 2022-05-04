import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Choose the Tech Framework</h1>
        <nav>
          <ul className='btn-group'>
            <li className='item'>
              <a>React</a>
            </li>
            <li className='item'>Vue</li>
            <li className='item'>Svelte</li>
          </ul>
        </nav>
      </header>
      <section className='contents'>
        <h2>contents</h2>
      </section>
    </div>
  );
}

export default App;
