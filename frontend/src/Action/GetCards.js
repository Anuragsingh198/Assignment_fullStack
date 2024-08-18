
export const GetCards = async (dispatch) => {
    try {
        dispatch({ type: "LOADING_START" });
        const response = await fetch('http://localhost:5000/api/Get/Cards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.success) {
            dispatch({ type: 'GET_CARDS', payload: data.data });
        }
    } catch (error) {
        console.error('Error fetching cards:', error);
        dispatch({ type: 'LOADING_ERROR', error: error.message });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

export const GetCardByBranchName = async (dispatch, branchName) => {
    try {
        dispatch({ type: "LOADING_START" });
        const response = await fetch(`http://localhost:5000/api/Get/Cards/${branchName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.success) {
            dispatch({ type: 'GET_ONE_CARD', payload: data.result });
            console.log("card from  acion side is :" ,data.result )
        }
    } catch (error) {
        console.error('Error fetching card by branch name:', error);
        dispatch({ type: 'LOADING_ERROR', error: error.message });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};
