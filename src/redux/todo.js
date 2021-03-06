import * as ActionTypes from "./ActionTypes";

const initialState = {
  todo: [
    { activity: "First ToDo", complete: false },
    { activity: "Second ToDo", complete: true },
  ],
};

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload;
      todo.id = state.todo.length;
      return { ...state, todo: state.todo.concat(todo) };
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo];
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete;
      return { ...state, todo: updatedTodo };
    case ActionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) };
    case ActionTypes.DELETE_TASKS:
      // TASK implement the final action type
      //let deletedTodo = [...state.todo];
      let deletedTodo = [];
      return { ...state, todo: deletedTodo };
    case ActionTypes.DELETE_SINGLE_TASK:
      let taskToRemove = state.todo[action.payload];
      //console.log(newList[action.payload]);
      console.log(taskToRemove);
      //console.log(action.payload);
      const newList = state.todo.filter((todo) => todo !== taskToRemove);

      //using slice
      // let start = state.todo.slice(0, action.payload);
      // let end = state.todo.slice(action.payload + 1, state.todo.length);
      // let combined = start.concat(end);

      return { ...state, todo: newList };
    default:
      return state;
  }
};
