// Student Grade Calculator 

function mark(mark){
    if(marks>90){
        console.log("Grade A")
    };
    else(marks>75){
        console.log("Grade B")
    };
    else(marks>60){
        console.log("Grade C")
    };
    else(marks>40){
        console.log("Grade D")
    };
    else(marks<40){
        console.log("Fail")
    }
}
let marks = 91
mark()
