
function run()
{
    const str=document.getElementById('textarea').value;
    const textToBinary = (str = '') => {
    let res = '';
    res = str.split('').map(char => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    return res;
};
var final=(textToBinary(str));

document.getElementById('result').innerHTML=`${final}`;
    
}