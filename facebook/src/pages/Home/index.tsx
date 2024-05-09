import { useGetPostsByAuthor } from '@/hooks';

const Home = () => {
  const { data } = useGetPostsByAuthor();

  console.log('data', data);

  return <h2>Home page</h2>;
};

export default Home;
