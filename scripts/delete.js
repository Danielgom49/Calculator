let borrar = document.querySelector('.button-1-2')

export const deleteButton = (result) => {
    borrar.addEventListener('click', () => {
        if (result.value != '') {
            result.value = result.value.slice(0, -1)
        }
    })
}