var questions=[
    {
        id:0,
        title:"A complete graph can have",
        options:["nn -2 spanning trees","nn -3 spanning trees","n -4 spanning trees","nn -5 spanning trees"],
        ans:"nn -2 spanning trees",
        score:1
    },
    {
        id:1,
        title:"What is full form of CSS",
        options:["campa suri style","cascading style style","cascading symmetry","None of these"],
        ans:"None of these",
        score:1
    },
        {
        id:1,
        title:"How to include JavaScript in HTML document",
        options:["style","script","link","href"],
        ans:"script",
        score:1
    },
        {
        id:1,
        title:"Whic of these is not javascript framework",
        options:["Django","bootstrap","angular","Spring"],
        ans:"Django",
        score:1
    },
        {
        id:1,
        title:"What => means in Javascript",
        options:["fat function","Arrow function","annonymous","none of these"],
        ans:"Arrow function",
        score:1
    },
        {
        id:1,
        title:"How to declare varible in Javascript",
        options:["var","int","float","double"],
        ans:"var",
        score:1
    },
        {
        id:1,
        title:"How to define object in js",
        options:["[]","{}","()","none of these"],
        ans:"{}",
        score:1
    },
        {
        id:1,
        title:"Which of these is not a valid JS function",
        options:["ES5","ES6","EX5","none of these"],
        ans:"EX5",
        score:1
    },
        {
        id:1,
        title:"What is the output if '2' + 2",
        options:["2Two","4","Two2","22"],
        ans:"22",
        score:1
    },
    {
        id:1,
        title:"What is the output if '2' - 1",
        options:["3","1","2","4"],
        ans:"3",
        score:1
    },
    {
        id:1,
        title:"How to check if value is Nan in JavaScript",
        options:["isNan(val)","typeOf(val)","both of above option","None of these"],
        ans:"isNan(val)",
        score:1
    }
    
]

var questions_No=0;
var score=0;
function show_question()
{
    if(questions_No==10)
    {
        var answerKey="";
         document.getElementById("cardbodyId").innerHTML="";
      for(var a=0;a<10;a++)
      {
          answerKey=answerKey+`<li>${questions[a].title} - <span class='badge badge-success'>
${questions[a].ans}</span></li> <br>`;
      }
     // console.log(answerKey);
      document.getElementById("cardbodyId").innerHTML=answerKey;
      document.getElementById("footer").classList.remove("invisible");
            document.getElementById("footer").classList.add("visible");
        //    document.getElementById("")
    }
     if(questions_No<10)
     {
document.getElementById("title").innerHTML=questions[questions_No].title+"?";
var alreadyChecked=document.getElementsByName("option");
for(var a =0;a<4;a++)
{
    if(alreadyChecked[a].checked)
    alreadyChecked[a].checked=false;
document.getElementById(`${a}`).innerHTML=questions[questions_No].options[a];
}
     }
}

function disabled()
{
    for(var a=0;a<4;a++)
    {
   document.getElementById("option"+a).disabled=true;
    }
}
function nextQuestion()
{
    
    questions_No=questions_No+1;
    show_question();
    document.getElementById("b1").classList.remove("btn-success");
    document.getElementById("b1").classList.add("btn-warning");
     document.getElementById("b1").innerHTML="Submit";
     document.getElementById("b1").removeEventListener("click",nextQuestion);
    document.getElementById("b1").addEventListener("click",checkAns);
                   document.getElementById("response").innerHTML="";
                   for(var a=0;a<4;a++)
    {
   document.getElementById("option"+a).disabled=false;
    }
    
}
function checkAns(form)
{
   // console.log("hello");
   //alert("hello");
   var result=document.getElementsByName("option");
   var count=0;
   for(var a=0;a<4;a++)
   {
       if(result[a].checked)
       {

       }
       else
       count++;
   }
   if(count==4)
   prompt("Please select an option");

   for(var a=0;a<4;a++)
   {
       if(result[a].checked)
       {
           var ans=result[a].value;
           var ansStr=ans.toString();
           var valueFromPage=document.getElementById(ansStr).innerHTML;
           if(valueFromPage===questions[questions_No].ans)
           {
               score++;
               document.getElementById("headerId").innerHTML="Score: "+score;
               document.getElementById("b1").classList.remove("btn-warning");
               document.getElementById("b1").classList.add("btn-success");
               document.getElementById("b1").innerHTML="Next";
               document.getElementById("b1").removeEventListener("click",checkAns);
               document.getElementById("b1").addEventListener("click",nextQuestion);
               document.getElementById("response").innerHTML="<button type='button' class='btn btn-lg btn-success' disabled>Correct</button>";
               disabled();
           }
           else
           {
                    document.getElementById("headerId").innerHTML="Score: "+score;
               document.getElementById("b1").classList.remove("btn-warning");
               document.getElementById("b1").classList.add("btn-success");
               document.getElementById("b1").innerHTML="Next";
               document.getElementById("b1").removeEventListener("click",checkAns);
               document.getElementById("b1").addEventListener("click",nextQuestion);
            document.getElementById("response").innerHTML="<button type='button' class='btn btn-lg btn-danger' disabled>Incorrect</button>";
            disabled();

           }
           
         
       }
   }
   
}
document.getElementById("b1").addEventListener("click",checkAns);
show_question();