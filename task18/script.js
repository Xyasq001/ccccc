/**
 * Created by minexiong on 16/3/22.
 */

var a = new Array();

function insertLeft(){
    var result = check();
    if (result) {
        var temp = document.getElementById('inputNum').value;
        a.unshift(temp);
        print();
    };
}
function insertRight(){
    var result = check();
    if (result) {
        var temp = document.getElementById('inputNum').value;
        a.push(temp);
        print();
    };
}
function delLeft(){
    var temp = a.shift();
    if (temp == undefined) {
        alert('没有可删除的值')
    }else{
        alert('将要删除的值为' + temp);
        print();
    }
}
function delRight(){
    var temp = a.pop();
    if (temp == undefined) {
        alert('没有可删除的值')
    }else{
        alert('将要删除的值为' + temp);
        print();
    }
}
function check() {
    var i = document.getElementById('inputNum').value;
    if (isNaN(i) || i == ''){
        alert('请输入数字');
        return false;
    }
    return true;
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
    if(eleTar.tagName == 'SPAN'){
        a.splice(a.indexOf(eleValue),1);
        print();
    }
}

