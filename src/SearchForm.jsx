import { useGlobalContext } from './context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = e.target.elements.search.value;
    if (!searchVal) return;

    setSearchTerm(searchVal);
  };

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
