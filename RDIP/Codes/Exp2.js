


var text1=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];



var text2=[
["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

var navButtons = document.getElementById("nav-buttons");
sentences='';
var f;
var totalb,i;
var count=0;
var x,y,v1;
var getcrct;
var possibleanswers='';

function getChoice(v)
{
    document.getElementById("disp1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
    document.getElementById("disp2").innerHTML="(Select the buttons in proper order)";
    if(v === "null")
    {
        alert("Select laguage");
    }
     else if(v === "eng")
    {    v1=v;
        randomsentenceEng(text1);

    }
    else if(v=== "hin")
    {   v1=v;
        randomsentenceHin();
       
    }

}

function  randomsentenceEng(text1)
 {       
     /* To hide all previously selected elements if language is changed */
     totalb=0;
     count=0;
    f="";
    document.getElementById("disp3").innerHTML=f;
    sentences="";
    document.getElementById("disp4").innerHTML=sentences;
    r="";
    document.getElementById("refbtn").innerHTML=r;
    chk="";
    document.getElementById("chkcrctness").innerHTML=chk;
    document.getElementById("result").innerHTML="";
    getcrct=""
    document.getElementById("get").innerHTML=getcrct;
    possibleanswers='';
    document.getElementById("dispcrct").innerHTML=possibleanswers;

    /* to get random sentence and to display the words in it randomly in form of buttons*/ 
    x=Math.floor(Math.random() * 10);
    
    str1=text1[x][0]
    str3=randomwords(str1);
    var c='';
    var t='';
    navButtons.innerHTML='';      
     totalb=str3.length;
    for (i=0; i<totalb;i++)
    {
        c="<button id='btnid"+i+"' value='"+str3[i]+"' onclick='dispwords(this.value,this.id)'  >"+str3[i]+" </button>  ";
        t=t+c;
       
    }
    navButtons.innerHTML=t.trim();

}


function randomwords(st1)
{     
    var str2=st1.split(' ').sort(() => Math.floor(Math.random() * Math.floor(3)) - 1).join(' ')
    return str2.split(" ");
}

function  randomsentenceHin()
{     
    /* To hide all previously selected elements if language is changed */
    totalb=0;
    count=0;
    navButtons.innerHTML='';
    f="";
    document.getElementById("disp3").innerHTML=f;
    sentences="";
    document.getElementById("disp4").innerHTML=sentences;
    r="";
    document.getElementById("refbtn").innerHTML=r;
    chk="";
    document.getElementById("chkcrctness").innerHTML=chk;
    document.getElementById("result").innerHTML="";
    getcrct=""
    document.getElementById("get").innerHTML=getcrct;
    possibleanswers='';
    document.getElementById("dispcrct").innerHTML=possibleanswers;
   
    
  /* to get random sentence and to display the words in it randomly in form of buttons*/

     y=Math.floor(Math.random() * 7);
    chr1=text2[y][0];
   // console.log(chr1)
    chr3= randomwords(chr1);
    var c='';
    var t='';   
    //console.log(chr3)   
     totalb=chr3.length;
    for ( i=0; i<totalb;i++)
   {
       c="<button id='btnid"+i+"' value='"+chr3[i]+"' onclick='dispwords(this.value,this.id)'>"+chr3[i]+" </button>  ";
       t=t+c;
}
   navButtons.innerHTML=t.trim();
    
      
}
 

/* function to display the words(buttons) selected by user*/
function dispwords(val,id)
{    
    f= "<center><font color='Darkblue'>Formed Sentence</font><font color='blue'> <i>(after selecting words):</i></font><br></center>"
    document.getElementById("disp3").innerHTML=f;
    sentences=sentences+val+" ";
    document.getElementById(id).style.display = "none";
   document.getElementById("disp4").innerHTML=sentences;
   count=count+1;
    if(count===totalb)
    {
        chk="<button id='chkcrct' onclick='CheckSentence()'>Check the correctness of this sentence</button>"
        document.getElementById("chkcrctness").innerHTML=chk;
    
    }


  r="<button id='reform' onclick='reformSentence()'>Re-form the sentence</button>"
  document.getElementById("refbtn").innerHTML=r;
  
   
  
}  


function CheckSentence()
{   
    if(v1 === 'eng')
    {
       
        if(text1[x].includes(sentences.trim()))
        {
           document.getElementById("result").innerHTML="Right answer!!!" 
        }
        else
        {
            document.getElementById("result").innerHTML="<font color='Red'>Wrong answer!!!</font>"
            getcrct="<button id='getcrct'onclick='displayCorrectAns()'>Get Correct sentence</button>"
            document.getElementById("get").innerHTML=getcrct;

        }
        
    }
    else if(v1 === 'hin')
    {
       
        if(text2[y].includes(sentences.trim()))
        {
           document.getElementById("result").innerHTML="Right answer!!!" 
        }
        else
        {
            document.getElementById("result").innerHTML="<font color='Red'>Wrong answer!!!</font>"
            getcrct="<button id='getcrct' onclick='displayCorrectAns()'>Get Correct Sentence</button>"
            document.getElementById("get").innerHTML=getcrct;
        }
        
        
    }
}
 //Function to display Correct answers
function displayCorrectAns()
{      
    getcrct="<button id='getcrct' onclick='hidesen()'>Hide the Correct Sentence</button>"
    document.getElementById("get").innerHTML=getcrct;
   
    
    if(v1==='eng')
       {
        switch (x) {
        case 0:
          w="3"
          break;

        case 1:
          w = "2";
          break;
          
        case 2:
          w = "2";
          break;

        case 3:
          w = "3";
          break;

        case 4:
          w = "2";
          break;

        case 5:
          w= "4";
          break;

        case  6:
          w = "2";
          break;

        case  7:
        w = "2";
       break;

        case  8:
        w = "8";
        break;

        case  9:
        w = "6";
        break;
      }

   
   for(k=0;k<=w-1;k++)
   {  
    possibleanswers="<center>"+possibleanswers+text1[x][k]+"<br></center>"
  
   }
    document.getElementById("dispcrct").innerHTML=possibleanswers;
    }

else if(v1 ==="hin")
{    possibleanswers='';
    switch (y) {
    case 0:
      w="4"
      break;

    case 1:
      w = "4";
      break;
      
    case 2:
      w = "12";
      break;

    case 3:
      w = "6";
      break;

    case 4:
      w = "8";
      break;

    case 5:
      w= "4";
      break;

    case  6:
      w = "8";
      break;

  
  }


for(k=0;k<=w-1;k++)
{  
possibleanswers="<center>"+possibleanswers+text2[y][k]+"<br></center>"

}
document.getElementById("dispcrct").innerHTML=possibleanswers;
}
}

//Function to hide sentences
function hidesen()
{   
    possibleanswers='';
    document.getElementById("dispcrct").innerHTML=possibleanswers;
    getcrct="<button id='getcrct' onclick='displayCorrectAns()'>Get Answers</button>"
    document.getElementById("get").innerHTML=getcrct;
    possibleanswers='';
}



//function to reform the sentence
function reformSentence()
{   
    count=0;
    f="";
    document.getElementById("disp3").innerHTML=f;
    sentences="";
    document.getElementById("disp4").innerHTML=sentences;
    r="";
    document.getElementById("refbtn").innerHTML=r;
    chk="";
    document.getElementById("chkcrctness").innerHTML=chk;
    document.getElementById("result").innerHTML="";
    getcrct=""
    document.getElementById("get").innerHTML=getcrct;
    possibleanswers='';
    document.getElementById("dispcrct").innerHTML=possibleanswers;
    for(j=0;j<totalb;j++)
    {
        document.getElementById('btnid'+j).style.display = "";
    }


}




