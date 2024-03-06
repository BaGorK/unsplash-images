import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url =
  'https://api.unsplash.com/photos/?client_id=FOqwuN2_SzmtLji7mlVPyAmXODkYIBseHkV6ahhuGIc&query=cfa;jfsd;aat';

function Gallery() {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (response.data.length < 1) {
    return (
      <section className='image-container'>
        <h4>No result found...</h4>
      </section>
    );
  }

  console.log(response.data);

  return <h2>gallery</h2>;
}

export default Gallery;
