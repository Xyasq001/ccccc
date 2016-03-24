/**
 * Created by minexiong on 16/3/22.
 */

var a = new Array();

function insertLeft(){
    var result = check();
    if (result) {
        var temp = document.getElementById('inputNum').value;
        temp = parseInt(temp);
        a.unshift(temp);
        print();
    };
}
function insertRight(){
    var result = check();
    if (result) {
        var temp = document.getElementById('inputNum').value;
        temp = parseInt(temp);
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
    }else if(i < 10 || i >100){
        alert("请输入10-100以内的数字");
        return false;
    }else if (a.length >=60) {
        alert('队列个数已达上限60');
        return false;
    };
    return true;
}
function print(){
    var insertEle = document.getElementById('text');
    document.getElementById('text').innerHTML = '';
    for(var i in a){
        var height = a[i] + '%';
        insertEle.innerHTML += '<div class="queue" name="queue"'+'style="height:' + height + '"'+ '>' + 
                                '<span>'+a[i]+ '</span>'+'</div>';
    }
}
function delEle(event){
    var eleTar=event.target;
    var eleValue = eleTar.innerHTML;
    if(eleTar.tagName == 'SPAN'){
        a.splice(a.indexOf(eleValue),1);
        print();
    }
}
function sortPrint(){
    var insertEle = document.getElementById('show');
    document.getElementById('show').innerHTML = '';
    for(var i in a){
        var height = a[i] + '%';
        insertEle.innerHTML += '<div class="queue" name="queue"'+'style="height:' + height + '"'+ '>' + 
                                '<span>'+a[i]+ '</span>'+'</div>';
    }
}
function bubbleSort(array){
    var len = array.length;
    for(var i = 0 ; i < len ; i++){
        for(var j = 0; j < len - i;j++){
            if(a[j] > a[j+1]){
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }

        }
    }
};
function Sort(){
    bubbleSort(a);
    console.log(a);
    sortPrint();
}

