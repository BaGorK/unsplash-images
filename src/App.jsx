import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';
import { useGlobalContext } from './context';

const App = () => {
  const { testProvider } = useGlobalContext();
  console.log(testProvider);
  return (
    <main>
      <Gallery />
      <SearchForm />
      <ThemeToggle />
    </main>
  );
};
export default App;
