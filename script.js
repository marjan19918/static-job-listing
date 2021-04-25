 let val=[];
 let granfilter;
 let d=[];
let p=[];

function loadfunc(vall) {
  if (vall.length===0) {
    addRow(person);
  }else{
    document.getElementById('content').innerHTML=''
     granfilter=vall.map(h=> person.filter(pers=>pers.languages.includes(h) || pers.level.includes(h)|| pers.role.includes(h) || pers.tools.includes(h) ))
     console.log(granfilter)
    givefilterarr();
    if (p.length !==0) {addRow(p)
    }else{addRow(d)}
  }
};

loadfunc(val)
function addRow(parameter) {
  const divgyt=document.getElementById('content')
    divgyt.className = 'main';
  parameter.map((it)=> {
    
    let personnew=it.new ? '<span class="new">New!</span>' : '';
    let featured=it.featured ? '<span class="feathured">Featured </span>' : '';
     let filters=[(it.role), it.level, ...(it.languages || []), ...(it.tools || [])];
     
    let space=''
    let fliteritem=filters.map(fil=>space +=`<span value=${fil} onclick='getvalue(this)' >${fil}</span>`)
    divgyt.innerHTML += `
  <div class="list">
  <div class="left">
    <div class="img"><img src=${it.logo}></div>
    <div class="info">
      <div class="subinfo name">
        <span>${it.company}</span>

        ${personnew}
        ${featured}

        
      </div>
    <div class="subinfo rple">
      <span>${it.position}</span>
    </div>
    <div class="subinfo time">
      <span>${it.postedAt}</span>
      <span>${it.contract}</span>
      <span>${it.location}</span>
    </div>
  </div>
  </div>
  <div class="right">
    
    
    ${space}
    
  </div>
</div>

  `;}) 
  
    //  document.getElementById('content').appendChild(div);
  }
  const clearval=()=>{
    val=[];
    document.getElementById('content').innerHTML='';
    document.getElementById('items').innerHTML='';
    document.getElementById('search').style.display='none';
    addRow(person);
  }
  
  
  const getvalue=(e)=>{
    showval1=val[val.length-1];console.log(showval1)
     val.push(e.getAttribute('value'));
     val = [...new Set(val)];
  document.getElementById('search').style.display='flex';
   loadfunc(val);
    let filterbar=document.getElementById('items')
showval2=val[val.length-1];console.log(showval2)
if(showval2 !==showval1){
      filterbar.innerHTML += `<div class="filtershow " id='filteritem' onclick='hidefilter(this)'>
      <span class="showfilter">${val[val.length-1]}</span>
      <span class='close' onclick='closeval(this)' value=${val[val.length-1]}>&#10005;</span></div>`
}
}

const hidefilter=(e)=>{e.style.display="none"}

const closeval=(e)=>{
j=e.getAttribute('value')
console.log(j)
jj=val.indexOf(j)
console.log(jj)
val.splice(jj,1)
if (val.length===0) {
  document.getElementById('search').style='none'
}  
document.getElementById('content').innerHTML=''
loadfunc(val);
}

  function givefilterarr() {
    d=[];
  for(var i=0;i<granfilter.length ;i++){ 
    var cube=granfilter[i]
    for(var j=0;j<cube.length;j++){
       d.push(granfilter[i][j])
    }  
  }
  p=d.filter((value,index)=>d.indexOf(value) !== index)
  return d
  }
   
  
  

   
   
   