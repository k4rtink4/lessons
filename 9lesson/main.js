let a = [1, 2, 3, 4, 66, 99, 465, 9, 8, 16, 21, 755];

document.querySelector('.btn1').onclick = () => {
    document.querySelector('.firstExe').innerHTML = a.splice(0,5);
}
newA = []
document.querySelector('.btn2').onclick = () => {
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2 == 0){
            newA.push(a[i]);
        }
    document.querySelector('.secExe').innerHTML = newA;
    }
}
newB = []
document.querySelector('.btn3').onclick = () => {
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2 != 0){
            newB.push(a[i]);
        }
    document.querySelector('.thirdExe').innerHTML = newB;
    }
}

let b = [
    [0,1,2,4],
    ['Gojo','Itadori','Megumi'],
    [789,66]
]

document.querySelector('.btn4').onclick = () => {
    for (let i = 0; i < b.length; i++){
        for (let j = b[i].length -1; j >= 0; j--){
            document.querySelector('.fourExe').innerHTML += b[i][j] += '<br>';
        }
    }
} 