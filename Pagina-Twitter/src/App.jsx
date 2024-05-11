import { useState } from 'react';
import './App.css';
import { TwFollowCard } from './components/TwFollowCard';

// class -> es una palabra reservada de JS

// Distinción entre componente y elemento
// --------------------------------------
// Un componente es una factoria de elementos. Es una función que al rejecutarla, devuelve un elemento.
// Un elemento es lo que renderiza React.

const users = [
  {
    id: 1,
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    id: 2,
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false,
  },
  {
    id: 3,
    userName: 'PacoHdez',
    name: 'Paco Hdez',
    isFollowing: true,
  },
  {
    id: 4,
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  },
];

export function App() {
  // const [index, setIndex] = useState(0);
  // const names = ['midudev', 'pedromichel'];
  // const users = ['Miguel Ángel Durán', 'Pedro Michel'];

  // const handleClick = () => {
  //   setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  // };

  return (
    <section className="App">
      {users.map((user) => {
        const { id, userName, name, isFollowing } = user;
        return (
          <TwFollowCard
            key={id}
            userName={userName}
            initialIsFollowing={isFollowing}>
            {name}
          </TwFollowCard>
        );
      })}
      {/* <button onClick={handleClick}>Cambiar nombre y usuario</button> */}
    </section>
  );
}
