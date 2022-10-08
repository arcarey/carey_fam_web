$(document).ready(function(){

    // This block adds up an allowance for each chore on the list and logs the total to the console
let allowance = 0
    $('#choreCheckList :checkbox').change(function() {
        if (this.checked) {
            allowance += .5;
            console.log(`Mal's allowance is \$${allowance}`);
            // the checkbox is now checked 
        } else {
            allowance -= .5;
            console.log(`Mal's allowance is \$${allowance}`);

            // the checkbox is now no longer checked and the allowance is removed
        }
    });
});
    
    
