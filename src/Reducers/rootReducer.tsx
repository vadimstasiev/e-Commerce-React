// example
import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'

// Optional: If you use the user profile option
interface Profile {
  name: string
  email: string
}

// If you have a todos collection, you might have this type
interface Todo {
  text: string
  completed: boolean
}

// Optional: You can define the schema of your Firebase Redux store.
// This will give you type-checking for state.firebase.data.todos and state.firebase.ordered.todos
interface Schema {
  todos: Todo
}

// with both reducer types
interface RootState {
  firebase: FirebaseReducer.Reducer<Profile, Schema>
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer
})