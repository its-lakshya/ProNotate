import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import NewNote from './components/NewNote';
import {Container} from 'react-bootstrap'

const appLayout = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/new",
    element:<NewNote/>
  },
  {
    path:'/:id',
    children:[
      {
        path:'',
        element:'',
      },
      {
        path:'',
        element:'',
      }
    ]
  }
])

function App() {
  return (
    <Container className='my-4'>
    <RouterProvider router={appLayout} /> 
    </Container>
  );
}

export default App;
