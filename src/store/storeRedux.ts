import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "" },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { setName } = userSlice.actions;
