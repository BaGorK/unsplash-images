import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url =
  'https://api.unsplash.com/photos/?client_id=FOqwuN2_SzmtLji7mlVPyAmXODkYIBseHkV6ahhuGIc&query=cat';

function Gallery() {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  console.log(response);

  return <h2>gallery</h2>;
}

export default Gallery;
