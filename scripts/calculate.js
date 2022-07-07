let calculate = document.querySelector('.button-6')

export const calculateButton = (result) => {
    calculate.addEventListener('click', () => {
        try{
            result.value = eval(result.value)
        }
        catch (error){
            result.value ='Error';
        }
    }) 
}