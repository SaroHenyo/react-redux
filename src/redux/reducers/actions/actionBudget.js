const depositMoney = () => {
        return(dispatch) => {
                dispatch({
                        type: 'DEPOSIT_MONEY';
                        payload: amount
                })
        }
        
}