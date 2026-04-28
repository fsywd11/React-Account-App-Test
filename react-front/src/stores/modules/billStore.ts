import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const billSlice = createSlice({
  name: 'bill',
  initialState: {
    billList: [] as any[],
  },
  reducers: {
    setBill: (state, action) => {
      state.billList = action.payload;
    },
    addBill: (state, action) => {
      state.billList.push(action.payload);
    }
  }
});

export const { setBill, addBill } = billSlice.actions;
const getBills = () => async (dispatch: any) => {
  const result = await axios.get('http://localhost:3001/api/bills');
  dispatch(setBill(result.data));
};

const createBill = (data: any) => async (dispatch: any) => {
  // 1. 提交到后端
  await axios.post('http://localhost:3001/api/bills', data);
  // 2. 更新本地 Redux
  dispatch(addBill(data));
}

export { getBills, createBill };
export default billSlice.reducer;