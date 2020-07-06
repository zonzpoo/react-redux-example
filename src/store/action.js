export const ADD_ARTICLE = "ADD_ARTICLE";

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article,
    };
};

export const simulateHttpRequest = (article) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addArticle(article));
        }, 3000);
    };
};
