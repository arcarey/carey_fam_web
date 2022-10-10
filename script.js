$(document).ready(function(){

    // This block adds up an allowance for each chore on the list and logs the total to the console
let allowance = 0
    $('#choreCheckList :checkbox').change(function() {
        if (this.checked) {
            allowance += .5;
            console.log(`Mal's allowance is \$${parseFloat(allowance).toFixed(2)}`); //this parseFloat stuff is to display the allowance value in a money format
            $('#totalAllowance').text(`Mal's allowance is \$${parseFloat(allowance).toFixed(2)}`)

            // the checkbox is now checked 
        } else {
            allowance -= .5;
            console.log(`Mal's allowance is \$${parseFloat(allowance).toFixed(2)}`);
            $('#totalAllowance').text(`Mal's allowance is \$${parseFloat(allowance).toFixed(2)}`)

            // the checkbox is now no longer checked and the allowance is removed
        }
    });
    $('#totalAllowance').text(`Mal's allowance is \$${parseFloat(allowance).toFixed(2)}`)
});
    
    
