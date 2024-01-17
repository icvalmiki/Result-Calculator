//Main Logics
let click = 0;
function calculate(){
    if(click==0){
        cal();
      click =click+1;
    }else{
        console.log("Already Clicked")
    }
}
function cal(){
    let maths = Number(document.getElementById('maths').value);
    let sci = Number(document.getElementById('sci').value);
    let opt = Number(document.getElementById('opt').value);
    let eng = Number(document.getElementById('eng').value);
    let comp = Number(document.getElementById('comp').value);
    let nep = Number(document.getElementById('nep').value);
    let obte = Number(document.getElementById('obte').value);
    let soc = Number(document.getElementById('soc').value);

let sub = [
    [maths,sci,opt,eng,comp,nep,obte,soc],
          [100,75,100,75,50,75,50,75],["C. Math","Science","Opt. Math","English","Computer","Nepali","OBTE","सामाजिक अध्ययन"]
        ];
let ob_marks = 0;
let gp = [];
let grade = [];
let fm = 0;
let gpa =0;
let g = "";
let b = true;
for(j=0;j<sub[0].length;j++){
    if(sub[0][j]>sub[1][j]){
    sub[0][j] = 100-sub[0][j]
    }
   
}
for(i=0;i<sub[0].length;i++){
    ob_marks = ob_marks + sub[0][i];
    fm = fm + sub[1][i];
    if(sub[0][i]/sub[1][i]*100>=90){
        gp.push(4);
        grade.push("A+")
    }else if(sub[0][i]/sub[1][i]*100>=80){
        gp.push(3.6);
        grade.push("A")
    }else if(sub[0][i]/sub[1][i]*100>=70){
        gp.push(3.2)
        grade.push("B+")
    }else if(sub[0][i]/sub[1][i]*100>=60){
        gp.push(2.8)
        grade.push("B")
    }else if(sub[0][i]/sub[1][i]*100>=50){
        gp.push(2.4)
        grade.push("C+")
    }else if(sub[0][i]/sub[1][i]*100>=40){
        gp.push(2)
        grade.push("C")
    }else if(sub[0][i]/sub[1][i]*100>=35){
        gp.push(1.6)
        grade.push("D")
    }else if(sub[0][i]/sub[1][i]*100<35){
        gp.push(0);
        grade.push("NG")
    }
}
let table = document.getElementById('table');
for(i=0;i<sub[0].length;i++){
 gpa = gpa + gp[i];
  table.innerHTML +=`<tr>
  <td>${sub[2][i]}</td><td>${sub[0][i]}</td><td>${grade[i]}</td><td>${gp[i]}</td>
  </tr>`;
  if(grade[i]=="NG"){
    b=false;
  }
}
if(b==true){
gpa=(gpa/8).toFixed(2);
if(gpa>3.6){
    g ="A+"
}else if(gpa>3.2){
    g ="A"
}else if(gpa>2.8){
    g = "B+"
}else if(gpa>2.4){
    g = "B"
}else if(gpa>2){
    g = "C+"
}else if(gpa>1.6){
    g = "C"
}else if(gpa==1.6){
    g = "D"
}
}else{
    gpa = ""
}
if(gpa==3.65){
    gpa=3.64
}else if(gpa==3.7){
    gpa=3.68
}else if(gpa==3.55){
    gpa=3.54
}else if(gpa==3.85){
    gpa = 3.84
}else if(gpa==3.9){
    gpa = 3.89
}else if(gpa==3.5){
    gpa = 3.49
}else if(gpa==3.75){
    gpa=3.74
}else if(gpa==3.8){
gpa=3.79
}
table.innerHTML +=`<tr>
<td>OVERALL</td><td>${(ob_marks/fm*100).toFixed(2)}%</td><td>${g}</td><td>${gpa}</td>
</tr>`
}



