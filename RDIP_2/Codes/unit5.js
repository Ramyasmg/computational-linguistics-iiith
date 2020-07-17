
var s1=['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots.'];

var s2=['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];
var d1,d2;

function getlanguage(v)
{
    if(v === "null")
    {
        alert("Select Language");
    }


    else if(v == "eng")
    {     d1='<center><select name="sentences" id="sel2"  onchange="getSentences(this.value)"><option value="null">---Select Sentences---</option><option value="E1">The child liked the chocolate.</option><option value="E2">She was stopped by the bravest knight.</option><option value="E3">Mary baked a cake for his birthday</option><option value="E4">She decorated the cake carefully</option><option value="E5">Mary wore a dress with polka dots.</option></center>'
         document.getElementById("sel2disp").innerHTML=d1;
    }
     else if(v == "hin")
     {
      d2='<center><select name="sentences" id="sel3"  onchange="getSentences(this.value)"><option value="null">---Select Sentences---</option><option value="H1">राम ने सीता के लिए फल तोड़ा।</option><option value="H2">छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="H3">मेहनत का फल मीठा होता है।</option><option value="H4">वाह! वह खूबसूरत है।</option><option value="H5">पेड़ से पत्ते गिर गए।</option></center>'
      document.getElementById("sel2disp").innerHTML=d2;  
    }

}