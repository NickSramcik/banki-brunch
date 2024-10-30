import { useMutation } from "@tanstack/react-query"
import { signup as signUpApi } from "../../services/authApi"
import { signup as signupReducer, User } from "./authSlice"
import toast from "react-hot-toast"
import { useAppDispatch } from "../../redux/hooks"

function useSignup() {
  const dispatch = useAppDispatch()
  const {
    mutate: signup,
    isPending,
    isError,
    error
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data: User) => {
      toast.success(`${data.username} welcome`)
      dispatch(signupReducer(data))
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
  return { signup, isPending, isError, error }
}

export default useSignup
