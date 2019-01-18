export const selectedResourceReducer = (res = 0, action) => {
    // console.log(action);
    
    if (action.type === 'select_resource') {
        return action.payload;
    }

    return res;
};
