import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRecipe extends Document {
  title: string;
  type: number;
  description: string;
  ingredients: string[];
  steps: string[];
  createdAt: Date;
  updatedAt: Date;
}

const RecipeSchema: Schema<IRecipe> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    steps: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Recipe: Model<IRecipe> =
  mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;
