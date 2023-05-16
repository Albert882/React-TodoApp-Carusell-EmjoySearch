import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todoItems: [{
    text: "Redux",
    isCompleated: false,
    id: uuid()
  }],
  compleatedCount: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToTodo: (state, { payload }) => {
      state.todoItems.push({
        text: payload,
        isCompleated: false,
        id: uuid(),
      });
    },
    removeToTodo: (state, { payload }) => {
      state.todoItems = state.todoItems.filter((item) => item.id !== payload);
    },
    todoChecked: (state, { payload }) => {
      const checkedValue = state.todoItems.findIndex(item => item?.id === payload[0]);
      if (checkedValue >= 0) {
        state.todoItems[checkedValue].isCompleated = payload[1]
      }
    },
    clearTodos: (state) => {
      state.todoItems = [];
    },
    compleatedItems: (state) => {
      state.compleatedCount = state.todoItems.filter(
        (item) => item?.isCompleated
      ).length;
    },
    clearCompleteds: (state) => {
      state.todoItems = state.todoItems.filter((item) => !item.isCompleated);
    },
  },
});

export const {
  addToTodo,
  removeToTodo,
  todoChecked,
  clearTodos,
  compleatedItems,
  clearCompleteds,
} = todoSlice.actions;
export default todoSlice.reducer;
