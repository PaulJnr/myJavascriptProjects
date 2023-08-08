const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        console.log(e.currentTarget);

        //check what btn is clicked and apply the correct behavior
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        // Changing the color properties for different btn selections
        if(count < 0){
            value.style.color = 'red';
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count == 0){
            value.style.color = '#222';
        }
        value.textContent =  count;
    });
});