import React from 'react';
import Header from './components/Header'
import List from './components/List'
import Counter from './components/Counter'
import Planets from './components/Planets'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header title={"Opakovani"} description={"Huraaa, tady je description"} showDescription={true}/>
      <nav style={{textAlign: 'center'}}>
        <NavLink to="/">Seznam dni</NavLink>
        <span>|</span>
        <NavLink to="/pocitadlo">Pocitadlo</NavLink>
        <span>|</span>
        <NavLink to="/planety">Planety</NavLink>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>Tady je error, halooo</h3>,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/pocitadlo",
        element: <Counter />,
      },
      {
        path: "/planety",
        element: <Planets />,
      } 
    ]
  }
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);

