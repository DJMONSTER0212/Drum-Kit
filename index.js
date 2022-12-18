function handleClick(){
    alert('I got clicked!')
}
for(let i =0;i<7;i++){
    document.querySelectorAll('button')[i].addEventListener('click',handleClick) //we don't use parenthesis in function call bcz if we used it then the function will be directly called  || paranthesis used to directly call the function   
}
