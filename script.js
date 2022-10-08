$(document).ready(function(){
let allowance = 0
    $('#choreCheckList :checkbox').change(function() {
        // this will contain a reference to the checkbox   
        if (this.checked) {
            allowance += .5;
            console.log(`Mal's allowance is \$${allowance}`);
            // the checkbox is now checked 
        } else {
            allowance -= .5;
            console.log(`Mal's allowance is \$${allowance}`);

            // the checkbox is now no longer checked
        }
    });
});
    
    
