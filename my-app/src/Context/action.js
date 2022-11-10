export const loginLoadingAction={
    type:"LOGIN_LOADING"
}
export const loginFailureAction={
    type:"LOGIN_FAILURE"
}
export function loginSuccessAction(token){
    return {
        type:"LOGIN_SUCCESS",
        payload:token
    }
}