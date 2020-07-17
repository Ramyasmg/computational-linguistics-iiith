
var s1=['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];

var s2=['राम ने सीता के लिए फल तोड़ा','छोटे बच्चे पाठशाला जल्दी आयेंगे','मेहनत का फल मीठा होता है','वाह वह खूबसूरत है','पेड़ से पत्ते गिर गए'];
var d1,d2,str,v1;
var t="";

function getlanguage(v)
{
    if(v === "null")
    {   
        alert("Select Language");
    }


    else if(v == "eng")
    {    v1=v;
        document.getElementById("disp2").innerHTML="";
        document.getElementById("tab").style.display="";
        document.getElementById("demo").innerHTML="";
       


        d1='<center><select name="sentences" id="sel2"  onchange="getSentences(this.value)"><option value="null">---Select Sentence---</option><option value="E1">The child liked the chocolate.</option><option value="E2">She was stopped by the bravest knight.</option><option value="E3">Mary baked a cake for his birthday</option><option value="E4">She decorated the cake carefully</option><option value="E5">Mary wore a dress with polka dots.</option></center>'
        document.getElementById("sel2disp").innerHTML=d1;
        

    }
     else if(v == "hin")
     {  
          v1=v;
        document.getElementById("disp2").innerHTML="";
        document.getElementById("tab").style.display="";
        document.getElementById("demo").innerHTML="";



        d2='<center><select name="sentences" id="sel3"  onchange="getSentences(this.value)"><option value="null">---Select Sentence---</option><option value="H1">राम ने सीता के लिए फल तोड़ा।</option><option value="H2">छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="H3">मेहनत का फल मीठा होता है।</option><option value="H4">वाह! वह खूबसूरत है।</option><option value="H5">पेड़ से पत्ते गिर गए।</option></center>';
        document.getElementById("sel2disp").innerHTML=d2;
 
    }

}

  




function getSentences(v)
{
    document.getElementById("disp2").innerHTML="Select the POS tag for corresponding words";
      //console.log(v)
        switch (v) 
    {
        case 'E1':
            str=s1[0];
            break;

        case 'E2':
            str=s1[1];
            break;
                
        case 'E3':
            str=s1[2];
            break;
                    
        case 'E4':
            str=s1[3];
            break;
                        
        case 'E5':
            str=s1[4];
            break;

      
        case 'H1':
            str=s2[0];
            break;
    
        case 'H2':
            str=s2[1];
            break;
                    
        case 'H3':
            str=s2[2];
            break;
                        
        case 'H4':
            str=s2[3];
            break;
                            
        case 'H5':
            str=s2[4];
            break;
      
      }
  
      str=str.split(" ");
      console.log(str);
      console.log(str.length);

      n=str.length;
      t="";

      if(v1 == "eng")
      {
      for(i=0;i<n;i++)
      {
        t+='<tr><td>'+str[i]+'</td><td><select  id="opt"><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></td><td id="symbol"></td><td id="actualans"></td></tr></table>';
        document.getElementById("tab").style.display="block";
        document.getElementById("demo").innerHTML=t;
       
      }
    }
    if(v1 == "hin")
    {
    for(i=0;i<n;i++)
    {
      t+='<tr><td>'+str[i]+'</td><td><select  id="opt"><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select></td><td id="symbol"></td><td id="actualans"></td></tr></table>';
      document.getElementById("tab").style.display="block";
      document.getElementById("demo").innerHTML=t;
     
    }
  }
}

      
    