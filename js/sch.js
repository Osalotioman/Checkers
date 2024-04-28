function setboard(prmv){
    let mdl = ""
    for(let i=0; i<prmv.length/2; i++){
        if(prmv[2*i] != "#"){
            chessgame(eval(prmv[2*i]), eval(prmv[2*i+1]), 2)
        }else{
          mdl += prmv[2*i+1]
          if(mdl == "queen" || mdl == "knight" || mdl == "bishop" || mdl == "rook"){
            handlePromotionSelection(mdl, 1)
            mdl = ""
          }
        }
    }
}
function hashstring(st){
  let stn = ""
  for(let i=0; i<st.length; i++){
    stn += "#"+st[i]
  }
  return stn
}
//alert(hashstring("queen"))
//alert(localStorage.test)
//localStorage.test += "queen"
//localStorage.test = "e2e4#q#u#e#e#nf7f5a2a3"
setboard(localStorage.test)