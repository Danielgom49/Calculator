import {resetButton} from './reset.js';
import {calculateButton} from './calculate.js';
import {deleteButton} from './delete.js';
import {changeTheme} from './changeTheme.js';

let key = document.querySelector('.keys');
let result = document.getElementById('number-result');

key.addEventListener('click', (e)=>{
    const btn = e.target.classList.contains('btn')
    if (btn) {
        let value = e.target.value;
        result.value += value
    }

})
resetButton(result);
calculateButton(result);
deleteButton(result);
changeTheme();
