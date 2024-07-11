import { RecipeTable } from '@/components/RecipeTable/RecipeTable';
import axios from 'axios';

const HomePage = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/fake`);
  const { data: recipes, success } = res.data;

  return (
    <>
      <RecipeTable elements={recipes} />
    </>
  );
};

export default HomePage;
