import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyPokemon from './pages/MyPokemon';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.org/graphql/v1beta',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <TopNavbar />
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/my-pokemon" element={<MyPokemon />} />
          </Routes>
        </div>
        <Navbar />
      </Router>
    </ApolloProvider>
  );
}

export default App;
