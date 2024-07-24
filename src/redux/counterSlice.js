import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchdata = createAsyncThunk("datafirebase/fetchData", async () => {
  const docRef = doc(db, "aryan-portfolio", "mydata");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No such document found!");
  }
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Assign the array directly to state.items
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
