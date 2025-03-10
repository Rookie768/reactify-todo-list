import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these fields in the state
        ignoredPaths: ['auth.user', 'todos.todos'],
        // Ignore these action types
        ignoredActions: ['auth/setUser', 'auth/clearUser', 'todos/setTodos']
      }
    })
});

export default store;
