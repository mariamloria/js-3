// document.getElementById("box").style.height = "400px";

// methods = functions

// void and type2= dasabrunebeli mnishvnelobiT
function shekreba(){
    console.log(2+3);
}
shekreba();
// void
function shekreba2(){
    return 2+3;
}
let a = shekreba2();
console.log(a);

// გვერდის გაკეთება

// მარჯვენა გვერდი
function gamochena2(){
    document.getElementById("all").style.display = "block";
}

function chakecva(){
    document.getElementById("all").style.display = "none";
}

// მარცხენა ბათონი
function gamochena(){
    // document.getElementById("box").style.display = "block";
    document.getElementById("box").style.backgroundColor = "yellow";
    document.getElementById("box").style.height = "400px";

    
}
function archevafrance(){
    document.getElementById("italyinfo").style.display = "none";
    document.getElementById("swidzerlandinfo").style.display = "none";
    document.getElementById("spaininfo").style.display = "none";

    document.getElementById("franceinfo").style.display = "block";
}
function archevaitaly(){
    
    document.getElementById("italyinfo").style.display = "block";
    document.getElementById("swidzerlandinfo").style.display = "none";
    document.getElementById("spaininfo").style.display = "none";

    document.getElementById("franceinfo").style.display = "none";
}
function archevaswidzerland(){
    
    document.getElementById("swidzerlandinfo").style.display = "block";
    document.getElementById("spaininfo").style.display = "none";

    document.getElementById("franceinfo").style.display = "none";
    document.getElementById("italyinfo").style.display = "none";
}
function archevaspain(){
    
    document.getElementById("spaininfo").style.display = "block";
    document.getElementById("franceinfo").style.display = "none";
    document.getElementById("italyinfo").style.display = "none";
    document.getElementById("swidzerlandinfo").style.display = "none";
}

