import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

const category: Category = {
  id: "1",
  name: "Guilherme",
  description: "Blaublaublau",
  is_active: true,
  deleted_at: null,
  created_at: "2024-11-26T15:20:01+0000",
  updated_at: "2024-11-26T15:20:01+0000",
};

const categories = [
  category,
  { ...category, id: "1", name: "Peach" },
  { ...category, id: "1", name: "Mario" },
  { ...category, id: "1", name: "Yoshi" },
];

export const initialState = {
  categories: [categories],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

export default categoriesSlice.reducer;
