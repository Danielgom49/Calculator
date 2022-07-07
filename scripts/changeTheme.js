let body = document.getElementById('body');
let form = document.querySelector('form')

export const changeTheme = () => {
    form.addEventListener('click', (e) => {
        const btnTheme = e.target.classList.contains('btnTheme')
        if (btnTheme) {
            const id = e.target.id
            if (id==='1') {
                body.classList.add('theme1')
                body.classList.remove('theme2')
                body.classList.remove('theme3')
            }   
            else if (id==='2') {
                body.classList.add('theme2')
                body.classList.remove('theme1')
                body.classList.remove('theme3')
            }
            else if (id==='3') {
                body.classList.add('theme3') 
                body.classList.remove('theme1') 
                body.classList.remove('theme2') 
            }     
        }
    })
}