

export const joinValidation = (value) => {
    let error = {}
    if(!value.username){
        error.username = 'Username is required.'
    } 
    else if(value.username.length < 5) {
        error.username = 'Username must be 5 characters or more.'
    }
    return error
}