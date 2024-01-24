import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <main className='main-content'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
