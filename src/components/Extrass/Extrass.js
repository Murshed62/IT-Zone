const value = document.getElementById('text').value
  //  const names = [];
  //  names.push(value)
  //  localStorage.setItem("namesArray", JSON.stringify(names))
  const valueAseKina = localStorage.getItem("namesObject")
  if(valueAseKina){
    const lsValue = JSON.parse(valueAseKina);
  const newObject = {...lsValue}
  if(newObject.hasOwnProperty(value)){
    newObject[value] = newObject[value] + 1;
  } else{
    newObject[value] = 10;
  }
  
  localStorage.setItem("namesObject", JSON.stringify(newObject))
  }else{
    const names = {};
    names[value] = 10
    localStorage.setItem("namesObject", JSON.stringify(names))
  }