let reset = document.querySelector('.button-5')

export const resetButton = (result) =>{
    reset.addEventListener('click', () =>{
        result.value = '';
    })
}