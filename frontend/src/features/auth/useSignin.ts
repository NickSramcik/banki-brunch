import { useMutation } from "@tanstack/react-query"
import { signin as signinReducer, User } from "./authSlice"
import toast from "react-hot-toast"
import { signin as signinApi } from "./../../services/authApi"
import { useAppDispatch } from "../../redux/hooks"

function useSignin() {
  const dispatch = useAppDispatch()
  const {
    mutate: signin,
    isPending,
    isError,
    error
  } = useMutation({
    mutationFn: signinApi,
    onSuccess: (data: User) => {
      toast.success(`${data?.username || ""} welcome`)
      dispatch(signinReducer(data))
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
  return { signin, isPending, isError, error }
}

export default useSignin
