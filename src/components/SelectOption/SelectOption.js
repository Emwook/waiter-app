const selectOption = (props) => {
    const status = props.status;
    const selectedStatus = props.selectedStatus;
    let isSelected = false;
    if(status === selectedStatus){
        isSelected = true;
    }
    switch (isSelected) {
        case true:
            return (<option id={status} selected>{status}</option>)
        default:
            return (<option id={status}>{status}</option>)
    }    
}

export default selectOption;