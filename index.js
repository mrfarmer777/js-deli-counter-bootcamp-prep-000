var katzDeliLine=[];

var takeANumber =function(katzDeliLine,newName){
  katzDeliLine.push(newName);
  var greeting = "Welcome, " + newName+". You are number "+ katzDeliLine.length+" in line."
  return greeting;
};

var nowServing=function(katzDeliLine){
  if(katzDeliLine.length>0){
    return katzDeliLine.unshift();
  } else {
    return 'There is nobody waiting to be served!';
  }
};

var currentLine=function(katzDeliLine){
  if(katzDeliLine.length>0){
    var outString = "The line is currently";
    for(let i=0;i<katzDeliLine.length;i++){
      if(i===1){
        outString=outString+": "+i+". "+katzDeliLine[i];
      } else {
        outString=outString+", "+i+". "+katzDeliLine[i];
      }
    }
  } else {
    outstring+=" empty.";
  }
  
 return outString; 
}