/**
 * Created by minexiong on 16/3/22.
 */

var a = new Array();

function insertLeft(){
    check();
    var temp = document.getElementById('inputNum').value;
    a.unshift(temp);
    print();
}
function insertRight(){
    check();
    var temp = document.getElementById('inputNum').value;
    a.push(temp);
    print();
}
function delLeft(){
    var temp = a.shift();
    alert('��Ҫɾ����ֵΪ' + temp);
    print();
}
function delRight(){
    var temp = a.pop();
    alert('��Ҫɾ����ֵΪ'+ temp);
    print();
}
function check() {
    var i = document.getElementById('inputNum').value;
    if (isNaN(i) || i == ''){
        alert('����������');
        return false;
    }
}
function print(){
    var insertEle = document.getElementById('text');
    document.getElementById('text').innerHTML = '';
    for(var i in a)
        insertEle.innerHTML += '<span class="queue" >' + a[i] + '</span>';
}
function delEle(event){
    var eleTar=event.target;
    var eleValue = eleTar.innerHTML;
    a.splice(a.indexOf(eleValue),1);
    eleTar.parentNode.removeChild(eleTar);
}

