//This is used to hold functions that return the deeply nested states
//rather than have everything having . . . and all that accsssing.
//its just for cleaner code.
export const selectCurrentUser = (state)=>state.user.currentUser