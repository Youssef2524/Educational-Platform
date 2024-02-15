import {createSlice} from '@reduxjs/toolkit'
const initialState={
  courseData:[]
};
export const educatSlice= createSlice({
  name:"educat",
  initialState,
  reducers:{
    addToFavorite: (state, action) => {
      const itemIndex = state.courseData.findIndex((item) => item.id === action.payload.id);
      const item = state.courseData[itemIndex];
    
      if (itemIndex !== -1) {
        // If the item already exists, do not allow adding the same course again
        return;
      }
    
      // Set the quantity to 1 for the selected course
      const newItem = {
        ...action.payload,
        quantity: 1,
      };
    
      // Add the new course to the courseData array
      state.courseData.push(newItem);
    },
    removeCourse:(state,action)=>{
      state.courseData=state.courseData.filter((item)=>item.id != action.payload);
    },
    resertFavourite:(state)=>{
      state.courseData=[]
    }
  },
  

})
export const {addToFavorite, removeCourse,resertFavourite}=educatSlice.actions;
export default educatSlice.reducer;