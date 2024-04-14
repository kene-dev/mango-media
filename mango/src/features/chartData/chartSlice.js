import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  camFeed: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getChartData = createAsyncThunk(
  "chart/getData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://smqw7iy6x3szv6xtizgdnmen5y0jxuab.lambda-url.eu-west-1.on.aws/"
      );
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.log(error.message);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    resetChart: (state) => {
      state.camFeed = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.camFeed = action.payload;
      })
      .addCase(getChartData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetChart } = chartSlice.actions;
export default chartSlice.reducer;
