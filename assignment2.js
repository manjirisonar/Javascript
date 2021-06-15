var value1 =document.getElementById("number12").value;
console.log("value1-"+value1);

const operatnGetSet = {

    val: this.value1,//document.getElementById("number1").value,
    get incr() {
        console.log(this.val);
        return this.val;//this.val;
    },
    set increm(inc) {
       // document.getElementById("number12").value=inc;
       this.val=inc;
    },
    get decr() {
        console.log(this.val);
        return this.val;
    },
    set decrem(dec) {
       // document.getElementById("number12").value=dec;
       this.val=dec;
    },
    get add() {
        console.log(this.val);
        return this.val;
    },
    set addtn(add) {
        //document.getElementById("number12").value=add;
        this.val=add;
    },
    get mult() {
        return this.val;
    },
    set multip(mult) {
       // document.getElementById("number12").value=mult;
       this.val=mult;
    }
   
};

 
function increment(){
    
    var incr = operatnGetSet.incr;
    operatnGetSet.increm= ++incr;
}

function decrement(){
    var decr = operatnGetSet.decr;
    operatnGetSet.decrem= --decr;
}

function addition(){
    var add = operatnGetSet.add;
    operatnGetSet.addtn= 2*add;
}
function multiplication(){
    var mult = operatnGetSet.mult;
    operatnGetSet.multip= mult * mult;
}
