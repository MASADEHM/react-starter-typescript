import { Outlet } from 'react-router-dom';
import Menu from './shared/menu';
import { Container } from 'react-bootstrap'

const App = () => {
  return (<>
    <Container>
      <Menu />
      <main>
        <Outlet />
      </main>
    </Container>
  </>
  );
}

export default App;
