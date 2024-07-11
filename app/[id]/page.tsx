import { RecipeDetails } from '@/components/RecipeDetails/RecipeDetails';
import axios from 'axios';

const RecipeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/fake/${params.id}`);
  const { data: recipe, success } = res.data;

  if (!success) {
    // return not found
  }

  return (
    <>
      <RecipeDetails element={recipe} />
    </>
  );
};

export default RecipeDetailsPage;
