function add_in_db(inputs) {
    /*let add_btn = document.getElementsByClass("add_input");
    add_btn.disabled = true;
    const cust_name = inputs[0].value;
    const cust_no = inputs[1].value;
    const invoice_no = inputs[2].value;
    const total_open_amt = inputs[3].value;
    const due_date = inputs[4].value;*/
    name_customer = document.getElementById("add_cust_name").value;
    cust_number = document.getElementById("add_cust_no").value;
    invoice_id = document.getElementById("add_invoice_no").value;
    invoice_amount = document.getElementById("add_invoice_amt").value;
    due_in_date = document.getElementById("halwa").value;
    //console.log(name_customer, cust_number);
    fetch(`http://localhost:8080/H2HBABBA2903/add.do?name_customer=${name_customer}&cust_number=${cust_number}&invoice_id=${invoice_id}&total_open_amount=${invoice_amount}&due_in_date=${due_in_date}`, {
            method: 'POST'
        }).then(resposne => resposne.json())
        .then(data => {
            console.log(data.message);
            fetchRecords();

        })
        .then(() => {

            add_btn.disabled = false;
            //showSnackbar("Successfully Added ", "add-modal-snack-bar", "add-snack-message");

        })
        .catch((error) => {
            add_btn.disabled = false;
            console.error('Error:', error);
            //showSnackbar("Error occured", "add-modal-snack-bar", "add-snack-message");
        })
}