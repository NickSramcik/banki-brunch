import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"

export interface User {
  username?: string
  email: string
  password?: string
  state: "idle" | "error" | "loading"
}

export interface InitialState {
  user: User | null
  isAuthenticated: boolean
}
const initialState: InitialState = {
  user: null,
  isAuthenticated: false
}

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    signup: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    signout: (state) => {
      state.isAuthenticated = false
      state.user = null
    }
  }
})

export const getSignedInUser = (state: RootState) => state.auth.user
export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated
export const { signin, signup, signout } = authSlice.actions

export default authSlice
