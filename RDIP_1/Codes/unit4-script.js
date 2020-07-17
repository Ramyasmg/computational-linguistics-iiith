var c1=['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.']

var c2=['A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'];

var c3=["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]
  

var i2='#new types:<br><input type="text" id="ans3" size="5">';
var sub2='<input type="submit" id="sub2" value="Submit" onclick="Validate2()" ></input>'
var sub;
var v1,q1;

var arr1=['as','not','heard','too','if'];
/*considering rootwords on the basis of the example provided in Theory section 
                                                            a-->at 
                                                            no-->not 
                                                            he-->heard
                                                            to-->too
                                                            having-->have
                                                            eat--eating
                                                            i-->if 
                                                             */
                                                             
                                                             
                                                             
                                                 
var arr2=['at','would','insisted','than','himself','better','heared','he','once'];/* a-->at
                                                                                wolf-->would
                                                                                i-->insisted
                                                                                he-->hear-->heared
                                                                                him-->himself
                                                                                that-->than
                                                                                on-->once
                                                                                better-->began
                                                                                  */

var arr3=['as','its','head','in','is','if','into','they','men','only'];/*
                                                                        a-->as
                                                                        it-->its
                                                                        he-->head
                                                                        i-->in-->is-->if-->into
                                                                        then-->they
                                                                        me-->men
                                                                        on-->only
                                                                        */


                                                                       



var stemmer = new Snowball('English');
/*stemmer.setCurrent('abbrevations');    
stemmer.stem()
console.log(stemmer.stem())
console.log(stemmer.getCurrent());*/




function getCorpus(v)
{
   
    if(v === "null")
    {
        alert("Select Corpus");
    }
    else if(v === "corp1")
    {   
        v1=v;
        document.getElementById("tab").innerHTML="";
        document.getElementById("res1").innerHTML="";
        document.getElementById("con").innerHTML="";
        document.getElementById("disp3").innerHTML="";
        document.getElementById("input2").innerHTML="";
        document.getElementById("submit2").innerHTML="";
        document.getElementById("res2").innerHTML="";

        document.getElementById("dispcorpus").innerHTML=c1;
        document.getElementById("disp2").innerHTML="Enter  the number of tokens and types for the above corpus:" ;
        document.getElementById("tab").innerHTML='<table ><tr><td><font size="4px" font color="darkslategrey">#tokens:</font></td><td><input type="text" id="ans1" size="5"></td></tr><tr><td><font size="4px" font color="darkslategrey">#types:</font></td><td><input type="text" id="ans2" size="5"></td></tr></table>'
        sub='<input type="submit" id="sub" value="Submit" onclick="Validate(c1[0])" ></input>'
        document.getElementById("subdisp").innerHTML=sub;
    }
    else if(v=== "corp2")
    {   
        v1=v;
        document.getElementById("tab").innerHTML="";
        document.getElementById("res1").innerHTML="";
        document.getElementById("con").innerHTML="";
        document.getElementById("disp3").innerHTML="";
        document.getElementById("input2").innerHTML="";
        document.getElementById("submit2").innerHTML="";
        document.getElementById("res2").innerHTML="";


        document.getElementById("dispcorpus").innerHTML=c2;
        document.getElementById("disp2").innerHTML="Enter the number of tokens and types for the above corpus:"
        document.getElementById("tab").innerHTML='<table ><tr><td><font size="4px" font color="darkslategrey">#tokens:</font></td><td><input type="text" id="ans1" size="5"></td></tr><tr><td><font size="4px" font color="darkslategrey">#types:</font></td><td><input type="text" id="ans2" size="5"></td></tr></table>';
        sub='<input type="submit" id="sub" value="Submit" onclick="Validate(c2[0])" ></input>'
        document.getElementById("subdisp").innerHTML=sub;
       

    }
	else if(v=== "corp3")
    {    
        v1=v;
        document.getElementById("tab").innerHTML="";
        document.getElementById("res1").innerHTML="";
        document.getElementById("con").innerHTML="";
        document.getElementById("disp3").innerHTML="";
        document.getElementById("input2").innerHTML="";
        document.getElementById("submit2").innerHTML="";
        document.getElementById("res2").innerHTML="";
 


        document.getElementById("dispcorpus").innerHTML=c3;
        document.getElementById("disp2").innerHTML="Enter the number of tokens and types for the above corpus:"
        document.getElementById("tab").innerHTML='<table ><tr><td><font size="4px" font color="darkslategrey">#tokens:</font></td><td><input type="text" id="ans1" size="5"></td></tr><tr><td><font size="4px" font color="darkslategrey">#types:</font></td><td><input type="text" id="ans2" size="5"></td></tr></table>';
        sub='<input type="submit" id="sub" value="Submit" onclick="Validate(c3[0])" ></input>'
        document.getElementById("subdisp").innerHTML=sub;
        
    }

}

//Function to validate 1st inputs
function Validate(c)
{  cnew1=c;
    g1=tokenCount(c);
    console.log(g1);
    g2=typeCount(c);
    console.log(g2);
    var a1=document.getElementById("ans1").value
    var a2=document.getElementById("ans2").value
    if((g1 == a1) && (g2 == a2))
    {
        document.getElementById("res1").innerHTML="Right Answer";
        document.getElementById("ans1").style.backgroundColor="green";
        document.getElementById("ans2").style.backgroundColor="green";
        conti="<center><button id=continueid onclick='Recalculate(cnew1)'>Continue</button></center>"
        document.getElementById("con").innerHTML=conti;
    }
    
    else{
        document.getElementById("res1").innerHTML="<font color='Red'>Wrong answer</font>";
        if(g1 == a1 )
        {
            document.getElementById("ans1").style.backgroundColor="green"; 
            
        }
        if(g2 == a2)
        {
             
            document.getElementById("ans2").style.backgroundColor="green";
          
        }
     
        if(!(g1 == a1)) 
        {
            document.getElementById("ans1").style.backgroundColor="red";
            document.getElementById("con").innerHTML="";
             
        }
        if(!(g2 == a2)) 
        {
            document.getElementById("ans2").style.backgroundColor="red";
            document.getElementById("con").innerHTML="";
             
        }
    }

}

//function to count tokens
function tokenCount(c)
{
str=c;
str= str.replace(/[^\w\s]|_/g, "")
.replace(/\s+/g, " ");
t2=str.split(" ");
token_count=t2.length;
return token_count
}

//Function to count types(1st)
function typeCount(c) 
{   
    str=c;
    str= str.replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ");
    t2=str.split(" ");
    s=t2.join('|').toLowerCase().split('|');
    s=s.filter( function( item, index, inputArray ) {
            
           return inputArray.indexOf(item) == index;
    });
    console.log("First types   "+s);
    type_count=s.length;

    return type_count;

}

//Function to recalculate types
function Recalculate(c)
{   cnew2=c;
    document.getElementById("subdisp").innerHTML="";
    document.getElementById("res1").innerHTML="";
    document.getElementById("con").innerHTML="";

    document.getElementById("disp3").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
    document.getElementById("input2").innerHTML=i2;
    sub2='<input type="submit" id="sub2" value="Submit" onclick="Validate2(cnew2)" ></input>'
    document.getElementById("submit2").innerHTML=sub2;

}



//function to validate new types
function Validate2(c)
{ 
   cnew3=c;
   cnew3= cnew3.replace(/[^\w\s]|_/g, "")
   .replace(/\s+/g, " ");
   cnew3=cnew3.split(" ");
   var d=[];
   for(i=0;i<cnew3.length;i++)
    {   
        if(v1 == 'corp1')
            q1=arr1;
        else if(v1 == 'corp2')
            q1=arr2;
        else if(v1 == 'corp3')
           q1=arr3;    
   

        if(q1.includes(cnew3[i]))
        {
            continue;
        }

        else
        {	
           stemmer.setCurrent(cnew3[i]);    
           stemmer.stem();
           d.push(stemmer.getCurrent());
        }
    }
    count_root= typeCount2(d);
    // console.log(count_root);
    g3=document.getElementById("ans3").value;
    if(g3 == count_root)
     {
      document.getElementById("res2").innerHTML="Right Answer";
      document.getElementById("ans3").style.backgroundColor="green";
    
    }
    else
    {
    document.getElementById("res2").innerHTML="<font color='Red'>Wrong answer</font>";
    document.getElementById("ans3").style.backgroundColor="Red";
    }
    }
 
//Function to count new types after stemming
function typeCount2(w)
{  
  s=w.join('|').toLowerCase().split('|');
  s =s.filter( function( item, index, inputArray ) {
          return inputArray.indexOf(item) == index;
 });
  console.log(s)
  type_count=s.length;
  return type_count;
}



