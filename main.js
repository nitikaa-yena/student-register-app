studentarray=[];
function submit(){
    var name1=document.getElementById("name_of_student_1").value;
    var name2=document.getElementById("name_of_student_2").value;
    var name3=document.getElementById("name_of_student_3").value;
    var name4=document.getElementById("name_of_student_4").value;
    var name5=document.getElementById("name_of_student_5").value;
    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    studentarray.push(name5);
    console.log(studentarray);
    document.getElementById("name_display").innerHTML=studentarray;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}
function sorting(){
    studentarray.sort();
    console.log(studentarray);
    document.getElementById("name_display").innerHTML=studentarray;
}