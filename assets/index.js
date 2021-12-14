//Container for Every Subjects Total Grade
let SubjectGrade1;
let SubjectGrade2;
let SubjectGrade3;
let SubjectGrade4;
let SubjectGrade5;
let SubjectGrade6;
let SubjectGrade7;
let SubjectGrade8;
let SubjectGrade9;

//Open Modal Functions 
function btn1() {
    document.querySelector('.modal-btn1-container').hidden = false;
}

function btn2() {
    document.querySelector('.modal-btn2-container').hidden = false;
}

function btn3() {
    document.querySelector('.modal-btn3-container').hidden = false;
}

function btn4() {
    document.querySelector('.modal-btn4-container').hidden = false;
}

function btn5() {
    document.querySelector('.modal-btn5-container').hidden = false;
}

function btn6() {
    document.querySelector('.modal-btn6-container').hidden = false;
}

function btn7() {
    document.querySelector('.modal-btn7-container').hidden = false;
}

function btn8() {
    document.querySelector('.modal-btn8-container').hidden = false;
}

function btn9() {
    document.querySelector('.modal-btn9-container').hidden = false;
}
//CLOSE MODAL FUNCTIONS
function closeModal1() {
    document.querySelector('.modal-btn1-container').hidden = true;
}

function closeModal2() {
    document.querySelector('.modal-btn2-container').hidden = true;
}

function closeModal3() {
    document.querySelector('.modal-btn3-container').hidden = true;
}

function closeModal4() {
    document.querySelector('.modal-btn4-container').hidden = true;
}

function closeModal5() {
    document.querySelector('.modal-btn5-container').hidden = true;
}

function closeModal6() {
    document.querySelector('.modal-btn6-container').hidden = true;
}

function closeModal7() {
    document.querySelector('.modal-btn7-container').hidden = true;
}

function closeModal8() {
    document.querySelector('.modal-btn8-container').hidden = true;
}

function closeModal9() {
    document.querySelector('.modal-btn9-container').hidden = true;
}
//GRADE FUNCTIONS "BASIC COMPUTATIONS OF GRADES"
function modal_1_Submit() {
    const Subject = document.getElementById('subject_1').value
    const button1 = document.querySelector('#btn1')
    const Grade1st = parseFloat(document.getElementById('1stGrade_1').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_1').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_1').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_1').value)
    SubjectGrade1 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade1
    document.querySelector('.modal-btn1-container').hidden = true;
}

function modal_2_Submit() {
    const Subject = document.getElementById('subject_2').value
    const button1 = document.querySelector('#btn2')
    const Grade1st = parseFloat(document.getElementById('1stGrade_2').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_2').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_2').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_2').value)
    SubjectGrade2 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade2
    document.querySelector('.modal-btn2-container').hidden = true;
}

function modal_3_Submit() {
    const Subject = document.getElementById('subject_3').value
    const button1 = document.querySelector('#btn3')
    const Grade1st = parseFloat(document.getElementById('1stGrade_3').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_3').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_3').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_3').value)
    SubjectGrade3 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade3
    document.querySelector('.modal-btn3-container').hidden = true;
}

function modal_4_Submit() {
    const Subject = document.getElementById('subject_4').value
    const button1 = document.querySelector('#btn4')
    const Grade1st = parseFloat(document.getElementById('1stGrade_4').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_4').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_4').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_4').value)
    SubjectGrade4 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade4
    document.querySelector('.modal-btn4-container').hidden = true;
}

function modal_5_Submit() {
    const Subject = document.getElementById('subject_5').value
    const button1 = document.querySelector('#btn5')
    const Grade1st = parseFloat(document.getElementById('1stGrade_5').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_5').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_5').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_5').value)
    SubjectGrade5 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade5
    document.querySelector('.modal-btn5-container').hidden = true;
}

function modal_6_Submit() {
    const Subject = document.getElementById('subject_6').value
    const button1 = document.querySelector('#btn6')
    const Grade1st = parseFloat(document.getElementById('1stGrade_6').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_6').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_6').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_6').value)
    SubjectGrade6 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade6
    document.querySelector('.modal-btn6-container').hidden = true;
}

function modal_7_Submit() {
    const Subject = document.getElementById('subject_7').value
    const button1 = document.querySelector('#btn7')
    const Grade1st = parseFloat(document.getElementById('1stGrade_7').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_7').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_7').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_7').value)
    SubjectGrade7 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade7
    document.querySelector('.modal-btn7-container').hidden = true;
}

function modal_8_Submit() {
    const Subject = document.getElementById('subject_8').value
    const button1 = document.querySelector('#btn8')
    const Grade1st = parseFloat(document.getElementById('1stGrade_8').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_8').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_8').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_8').value)
    SubjectGrade8 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade8
    document.querySelector('.modal-btn8-container').hidden = true;
}

function modal_9_Submit() {
    const Subject = document.getElementById('subject_9').value
    const button1 = document.querySelector('#btn9')
    const Grade1st = parseFloat(document.getElementById('1stGrade_9').value)
    const Grade2nd = parseFloat(document.getElementById('2ndGrade_9').value)
    const Grade3rd = parseFloat(document.getElementById('3thGrade_9').value)
    const Grade4th = parseFloat(document.getElementById('4thGrade_9').value)
    SubjectGrade9 = ((Grade1st + Grade2nd + Grade3rd + Grade4th) / 4).toFixed(2);

    button1.innerHTML = Subject + " : " + SubjectGrade9
    document.querySelector('.modal-btn9-container').hidden = true;
}

//TOTAL GRADES
function btntotal() {
    const totalButton = document.querySelector('#total')
    const TotalGrade = parseFloat(SubjectGrade1) + parseFloat(SubjectGrade2) + parseFloat(SubjectGrade3) + parseFloat(SubjectGrade4) + parseFloat(SubjectGrade5) + parseFloat(SubjectGrade6) + parseFloat(SubjectGrade7) + parseFloat(SubjectGrade8) + parseFloat(SubjectGrade9)
    totalButton.innerHTML = "TOTAL GRADE : " + (TotalGrade / 9).toFixed(2);
}
