  function coh(file, rank, htype){
    if(file == a && rank == 1){
      ha1.style = htype
    }else if(file == a && rank == 2){
      ha2.style = htype
    }else if(file == a && rank == 3){
      ha3.style = htype
    }else if(file == a && rank == 4){
      ha4.style = htype
    }else if(file == a && rank == 5){
      ha5.style = htype
    }else if(file == a && rank == 6){
      ha6.style = htype
    }else if(file == a && rank == 7){
      ha7.style = htype
    }else if(file == a && rank == 8){
      ha8.style = htype
    }else if(file == b && rank == 1){
      hb1.style = htype
    }else if(file == b && rank == 2){
      hb2.style = htype
    }else if(file == b && rank == 3){
      hb3.style = htype
    }else if(file == b && rank == 4){
      hb4.style = htype
    }else if(file == b && rank == 5){
      hb5.style = htype
    }else if(file == b && rank == 6){
      hb6.style = htype
    }else if(file == b && rank == 7){
      hb7.style = htype
    }else if(file == b && rank == 8){
      hb8.style = htype
    }else if(file == c && rank == 1){
      hc1.style = htype
    }else if(file == c && rank == 2){
      hc2.style = htype
    }else if(file == c && rank == 3){
      hc3.style = htype
    }else if(file == c && rank == 4){
      hc4.style = htype
    }else if(file == c && rank == 5){
      hc5.style = htype
    }else if(file == c && rank == 6){
      hc6.style = htype
    }else if(file == c && rank == 7){
      hc7.style = htype
    }else if(file == c && rank == 8){
      hc8.style = htype
    }else if(file == d && rank == 1){
      hd1.style = htype
    }else if(file == d && rank == 2){
      hd2.style = htype
    }else if(file == d && rank == 3){
      hd3.style = htype
    }else if(file == d && rank == 4){
      hd4.style = htype
    }else if(file == d && rank == 5){
      hd5.style = htype
    }else if(file == d && rank == 6){
      hd6.style = htype
    }else if(file == d && rank == 7){
      hd7.style = htype
    }else if(file == d && rank == 8){
      hd8.style = htype
    }else if(file == e && rank == 1){
      he1.style = htype
    }else if(file == e && rank == 2){
      he2.style = htype
    }else if(file == e && rank == 3){
      he3.style = htype
    }else if(file == e && rank == 4){
      he4.style = htype
    }else if(file == e && rank == 5){
      he5.style = htype
    }else if(file == e && rank == 6){
      he6.style = htype
    }else if(file == e && rank == 7){
      he7.style = htype
    }else if(file == e && rank == 8){
      he8.style = htype
    }else if(file == f && rank == 1){
      hf1.style = htype
    }else if(file == f && rank == 2){
      hf2.style = htype
    }else if(file == f && rank == 3){
      hf3.style = htype
    }else if(file == f && rank == 4){
      hf4.style = htype
    }else if(file == f && rank == 5){
      hf5.style = htype
    }else if(file == f && rank == 6){
      hf6.style = htype
    }else if(file == f && rank == 7){
      hf7.style = htype
    }else if(file == f && rank == 8){
      hf8.style = htype
    }else if(file == g && rank == 1){
      hg1.style = htype
    }else if(file == g && rank == 2){
      hg2.style = htype
    }else if(file == g && rank == 3){
      hg3.style = htype
    }else if(file == g && rank == 4){
      hg4.style = htype
    }else if(file == g && rank == 5){
      hg5.style = htype
    }else if(file == g && rank == 6){
      hg6.style = htype
    }else if(file == g && rank == 7){
      hg7.style = htype
    }else if(file == g && rank == 8){
      hg8.style = htype
    }else if(file == h && rank == 1){
      hh1.style = htype
    }else if(file == h && rank == 2){
      hh2.style = htype
    }else if(file == h && rank == 3){
      hh3.style = htype
    }else if(file == h && rank == 4){
      hh4.style = htype
    }else if(file == h && rank == 5){
      hh5.style = htype
    }else if(file == h && rank == 6){
      hh6.style = htype
    }else if(file == h && rank == 7){
      hh7.style = htype
    }else if(file == h && rank == 8){
      hh8.style = htype
    }
  }
  function clear_ho(){
    for(let n=0; n < 8; n++){
      for(let m=0; m < 8; m++){
        coh(n+1, m+1, clear)
      }
    }
  }
  function clear_highlight(){
    for(let n=0; n < 8; n++){
      for(let m=0; m < 8; m++){
        boardhsq[n][m] = 0
        boardhbd[n][m] = 0
        boardksq[n][m] = 0
        coh(n+1, m+1, clear)
      }
    }
  }
  function reset_asq(){
    for(let n=0; n < 8; n++){
      for(let m=0; m < 8; m++){
        boardasq[n][m] = 99
      }
    }
  }
  function clear_dng(){
    for(let n=0; n<3; n++){
      for(let m=0; m<5; m++){
        boarddng[n][m] = 0
      }
    }
  }
  function mpm(){
    let pf = 1
    let pr = 1
    while(pr < 5){
      while(pf < 9){
        if(cellpmv(pf, pr) == 1){
          cohcellpmv(pf, pr, 1)
        }
        pf += 1
      }
      pr += 1
      pf = 1
    }
  }
  function cosrc(num, ptype){
    if(num == 1){
      wqrp.src = ptype
    }else if(num == 2){
      wqnp.src = ptype
    }else if(num == 3){
      wqbp.src = ptype
    }else if(num == 4){
      wqp.src = ptype
    }else if(num == 5){
      wkp.src = ptype
    }else if(num == 6){
      wkbp.src = ptype
    }else if(num == 7){
      wknp.src = ptype
    }else if(num == 8){
      wkrp.src = ptype
    }else if(num == -1){
      bqrp.src = ptype
    }else if(num == -2){
      bqnp.src = ptype
    }else if(num == -3){
      bqbp.src = ptype
    }else if(num == -4){
      bqp.src = ptype
    }else if(num == -5){
      bkp.src = ptype
    }else if(num == -6){
      bkbp.src = ptype
    }else if(num == -7){
      bknp.src = ptype
    }else if(num == -8){
      bkrp.src = ptype
    }
  }
  function cop(num, file, rank, ptype){
    mpm()
    let seedp = document.getElementById(cellid(file, rank))
    //cohcellpmv(rev_cellstatic(num, 0), rev_cellstatic(num, 1), 1)
    if(cellppa(initialfr[0], initialfr[1]) != 0 && !shrinking){
      //num = cellppa(initialfr[0], initialfr[1])
      let seedp = document.getElementById(cellid(initialfr[0], initialfr[1]))
    }
    if(cellid(file, rank) != ""){ 
      seedp.style = ptype
    }else{
      shrinkassist = false
    }
  }
  function move_all(file, rank, listf, listr, state, pname){
    for(let i=0; i<listf.length; i++){
      if(file+listf[i] > 0 && file+listf[i]<9 && rank+listr[i] > 0 && rank+listr[i]<9 && pname != "linos"){
        if(pname != "k" && pname != "n" && pname != "kp" && pname != "dng" && pname != "kpd" && pname != "castl1" && pname != "castl2" && pname != "enp"){
          if(state*(cell(file+listf[i], rank+listr[i])) > 0 ){
            coh(file+listf[i], rank+listr[i], ksq)
            cohcellksq(file+listf[i], rank+listr[i], 1)
            linosep = i
            break
          }else if(cell(file+listf[i], rank+listr[i]) != 0){
            linosep = i
            break
          }
        }
        if(pname != "castl1" && pname != "castl2" && pname != "kp" && pname != "dng" && pname != "enp" && cell(file+listf[i], rank+listr[i]) == 0){
          coh(file+listf[i], rank+listr[i], hsq)
          cohcellhsq(file+listf[i], rank+listr[i], 1)
        }else if((pname == "k" || pname == "n" || pname == "kp" || pname == "kpd") && state*(cell(file+listf[i], rank+listr[i])) > 0){
          coh(file+listf[i], rank+listr[i], ksq)
          cohcellksq(file+listf[i], rank+listr[i], 1)
        }else if(pname == "dng" && (cellhsq(file+listf[i], rank+listr[i]) == 1 || cellksq(file+listf[i], rank+listr[i]) == 1)){
          cohcelldng(b+listf[i], 2+listr[i], 100)
        }else if(pname == "dng" && cellhsq(file+listf[i], rank+listr[i]) == 0 && cellksq(file+listf[i], rank+listr[i]) == 0){
          if(incheck && celldng(b+listf[i], 2+listr[i]) == 200){
            //cohcelldng(b+listf[i], 2+listr[i], 0)
            //alert("I started")
          }else{
            cohcelldng(b+listf[i], 2+listr[i], 0)
          }
        }else if(pname == "castl1" && cell(file+listf[i], rank+listr[i]) == 0){
          coh(file+listf[i], rank+listr[i], csl)
          cohcellhsq(file+listf[i], rank+listr[i], 2)
        }else if(pname == "castl2" && cell(file+listf[i], rank+listr[i]) == 0){
          coh(file+listf[i], rank+listr[i], csl)
          cohcellhsq(file+listf[i], rank+listr[i], 3)
        }else if(pname == "enp"){
          coh(file+listf[i], rank+listr[i], ksq)
          cohcellksq(file+listf[i], rank+listr[i], 4)
        }
      }
    }
    if(incheck && pname != "k"){
      for(let i=0; i<listf.length; i++){
        if(file+listf[i] > 0 && file+listf[i]<9 && rank+listr[i] > 0 && rank+listr[i]<9){
          //alert("Its happening")
          if(pname == "linos"){
            cohcellasq(file+listf[i], rank+listr[i], 0)
          }else if(cellasq(file+listf[i], rank+listr[i]) != 0){
            //file += cellasq(file+listf[i], rank+listr[i])
            coh(file+listf[i], rank+listr[i], clear)
            cohcellksq(file+listf[i], rank+listr[i], 0)
            cohcellhsq(file+listf[i], rank+listr[i], 0)
          }
        }
      }
    }
  }
  function move_all2(file, rank, listf, listr, state, pname){
    let i = 0
    if(pname == "qseed"){
      /*for(let i=0; i<listf.length; i++){
        if(cell(file+listf[i], rank+listr[i]) != 0){
  
        }
        if(){
          coh(file+listf[i], rank+listr[i], hsq)
          cohcellhsq(file+listf[i], rank+listr[i], 1)
        }
      }*/
    }else if(file+listf[i] > 0 && file+listf[i]<9 && rank+listr[i] > 0 && rank+listr[i]<9){
      if(cell(file+listf[i], rank+listr[i]) == 0){
        coh(file+listf[i], rank+listr[i], hsq)
        cohcellhsq(file+listf[i], rank+listr[i], 1)
      }else if(file+listf[i]*2 > 0 && file+listf[i]*2<9 && rank+listr[i]*2 > 0 && rank+listr[i]*2<9 && cell(file+listf[i], rank+listr[i])*cell(file, rank)<0){  
        if(cell(file+listf[i]*2, rank+listr[i]*2) == 0){
          initialfr[6] = file+listf[i]
          initialfr[7] = rank+listr[i]
          coh(file+listf[i]*2, rank+listr[i]*2, ksq)
          cohcellksq(file+listf[i]*2, rank+listr[i]*2, 4)
        }
      }
    }
  }
  function knight_check(file, rank){
    if((cell(file, rank) == 10 || cell(file, rank) == 15) && piece_turn % 2 == 0){
      move_all(file, rank, [-1, -1, 1, 1, -2, 2,-2, 2], [2, -2, 2, -2, 1, 1, -1, -1], -1, "n")
    }else if((cell(file, rank) == -10 || cell(file, rank) == -15) && piece_turn % 2 == 1){
      move_all(file, rank, [-1, -1, 1, 1, -2, 2,-2, 2], [2, -2, 2, -2, 1, 1, -1, -1], 1, "n")
    }
  }
  function enp(file, rank, state, rstate){
    if(file+1<9 && file+1>0 && rank<9 && rank>0){
      if((cell(file+1, rank) < 9 && cell(file+1, rank) > 0) || (cell(file+1, rank) > -9 && cell(file+1, rank) < 0)){
        if(cellpmv(file+1, rstate) == 1){
          initialfr[6] = file+1
          initialfr[7] = rank
          move_all(file, rank, [1], [state], 0, "enp")
        }
      }
    }
    if(file-1<9 && file-1>0 && rank<9 && rank>0){
      if((cell(file-1, rank) < 9 && cell(file-1, rank) > 0) || (cell(file-1, rank) > -9 && cell(file-1, rank) < 0)){
        if(cellpmv(file-1, rstate) == 1){
          initialfr[6] = file-1
          initialfr[7] = rank
          move_all(file, rank, [-1], [state], 0, "enp")
        }
      }
    }
  }
  function pawn_check(file, rank){
    //alert(rank+1)
    if(cell(file, rank) > 0 && cell(file, rank) < 9 && rank+1 > 0 && rank+1 < 9 && piece_turn % 2 == 0){
      if(rank == 2){
        move_all(file, rank, [0,0], [1, 2], 0, "p")
      }else{
        move_all(file, rank, [0], [1], 0, "p")
      }
      move_all(file, rank, [1, -1], [1, 1], -1, "kp")
      if(rank == 5){
        enp(file, rank, 1, 3)
      }
    }else if(cell(file, rank) > -9 && cell(file, rank) < 0 && rank-1 > 0 && rank-1 < 9 && piece_turn % 2 == 1){
      if(rank == 7){
        move_all(file, rank, [0,0], [-1, -2], 0, "p")
      }else{
        move_all(file, rank, [0], [-1], 0, "p")
      }
      move_all(file, rank, [1, -1], [-1, -1], 1, "kp")
      if(rank == 4){
        enp(file, rank, -1, 2)
      }
    }
  }
  function rook_check(file, rank){
    if((cell(file, rank) == 9 || cell(file, rank) == 16) && piece_turn % 2 == 0){
      move_all(file, rank, [0,0,0,0,0,0,0], [1,2,3,4,5,6,7], -1, "r")
      move_all(file, rank, [1,2,3,4,5,6,7], [0,0,0,0,0,0,0], -1, "r")
      move_all(file, rank, [0,0,0,0,0,0,0], [-1,-2,-3,-4,-5,-6,-7], -1, "r")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [0,0,0,0,0,0,0], -1, "r")
    }else if((cell(file, rank) == -9 || cell(file, rank) == -16) && piece_turn % 2 == 1){
      move_all(file, rank, [0,0,0,0,0,0,0], [1,2,3,4,5,6,7], 1, "r")
      move_all(file, rank, [1,2,3,4,5,6,7], [0,0,0,0,0,0,0], 1, "r")
      move_all(file, rank, [0,0,0,0,0,0,0], [-1,-2,-3,-4,-5,-6,-7], 1, "r")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [0,0,0,0,0,0,0], 1, "r")
    }
  }
  function bishop_check(file, rank){
    if((cell(file, rank) == 11 || cell(file, rank) == 14) && piece_turn % 2 == 0){
      move_all(file, rank, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], -1, "b")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [-1,-2,-3,-4,-5,-6,-7], -1, "b")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [1,2,3,4,5,6,7], -1, "b")
      move_all(file, rank, [1,2,3,4,5,6,7], [-1,-2,-3,-4,-5,-6,-7], -1, "b")
    }else if((cell(file, rank) == -11 || cell(file, rank) == -14) && piece_turn % 2 == 1){
      move_all(file, rank, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], 1, "b")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [-1,-2,-3,-4,-5,-6,-7], 1, "b")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [1,2,3,4,5,6,7], 1, "b")
      move_all(file, rank, [1,2,3,4,5,6,7], [-1,-2,-3,-4,-5,-6,-7], 1, "b")
    }
  }
  function seedCheck(file, rank){
    if(cell(file, rank) == 17 && piece_turn % 2 == 0){
      move_all2(file, rank, [1], [1], -1, null)
      move_all2(file, rank, [-1], [1], -1, null)
      console.log("White Piece")
    }else if(cell(file, rank) == -17 && piece_turn % 2 == 1){
      move_all2(file, rank, [1], [-1], 1, null)
      move_all2(file, rank, [-1], [-1], 1, null)
      console.log("Black Piece")
    }
  }
  function queen_check(file, rank){
    if(cell(file, rank) == 12 && piece_turn % 2 == 0){
      move_all(file, rank, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], -1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [-1,-2,-3,-4,-5,-6,-7], -1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [1,2,3,4,5,6,7], -1, "q")
      move_all(file, rank, [1,2,3,4,5,6,7], [-1,-2,-3,-4,-5,-6,-7], -1, "q")
      move_all(file, rank, [0,0,0,0,0,0,0], [1,2,3,4,5,6,7], -1, "q")
      move_all(file, rank, [1,2,3,4,5,6,7], [0,0,0,0,0,0,0], -1, "q")
      move_all(file, rank, [0,0,0,0,0,0,0], [-1,-2,-3,-4,-5,-6,-7], -1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [0,0,0,0,0,0,0], -1, "q")
    }else if(cell(file, rank) == -12 && piece_turn % 2 == 1){
      move_all(file, rank, [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], 1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [-1,-2,-3,-4,-5,-6,-7], 1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [1,2,3,4,5,6,7], 1, "q")
      move_all(file, rank, [1,2,3,4,5,6,7], [-1,-2,-3,-4,-5,-6,-7], 1, "q")
      move_all(file, rank, [0,0,0,0,0,0,0], [1,2,3,4,5,6,7], 1, "q")
      move_all(file, rank, [1,2,3,4,5,6,7], [0,0,0,0,0,0,0], 1, "q")
      move_all(file, rank, [0,0,0,0,0,0,0], [-1,-2,-3,-4,-5,-6,-7], 1, "q")
      move_all(file, rank, [-1,-2,-3,-4,-5,-6,-7], [0,0,0,0,0,0,0], 1, "q")
    }
  }
  function checkmate(){
    let f = 1
    let r = 1
    while(f<9){
      while(r<9){
        if(cellasq(f, r) == 0 && (cellasq(f, r) == cellhsq(f, r) || cellasq(f, r) == cellksq(f, r))){
          //Do nothing
        }else if(cellasq(f, r) == 0){
          cohcellasq(f, r, 99)
        }
        r += 1
      }
      f += 1
      r = 1
    }
  }
  function linos(file, rank, state, p){
    for(let n=0; n < binum_dng.length; n++){
      if(boardindex(binum_dng[n]*state)){
        rev_cell1(binum_dng[n]*state)
        for(let i=0; i<npoc; i++){
          move_all(listpc[i][0], listpc[i][1], listf_dng[n], listr_dng[n], state*-1, pname_dng[n])
          move_all(listpc[i][0], listpc[i][1], listf_dng[n], listr_dng[n], state, pname_dng[n])
          move_all(rev_cell(-13*state, 0), rev_cell(-13*state, 1), [0], [0], state, "dng")
          clear_highlight()
          if(celldng(b, 2) != 0 && p == "nk" && (pname_dng[n]=="q" || pname_dng[n]=="r" || pname_dng[n]=="b")){
            incheck = true
            var nlrdng = listr_dng[n].slice(0, linosep)
            var nlfdng = listf_dng[n].slice(0, linosep)
            nlrdng[linosep] = 0
            nlfdng[linosep] = 0
            move_all(listpc[i][0], listpc[i][1], nlfdng, nlrdng, state, "linos")
            console.log(boardasq)
            break
          }else if(celldng(b, 2) != 0 && p == "nk"){
            incheck = true
            move_all(rev_cell((binum_dng[n]*state), 0), rev_cell((binum_dng[n]*state), 1), [0], [0], state, "linos")
            console.log(boardasq)
            break
          }
        }
      }
    }
  }
  function dngsq(file, rank, state, p){
    let n1 = 0
    while(n1 < 8){
      listr_dng[n1][0] = state
      listr_dng[n1][1] = state
      n1 += 1
    }
    for(let n=0; n < binum_dng.length; n++){
      if(boardindex(binum_dng[n]*state)){
        //console.log(ntpa)
        rev_cell1(binum_dng[n]*state)
        for(let i=0; i<npoc; i++){
          move_all(listpc[i][0], listpc[i][1], listf_dng[n], listr_dng[n], state*-1, pname_dng[n])
          move_all(listpc[i][0], listpc[i][1], listf_dng[n], listr_dng[n], state, pname_dng[n])
        }
      }
    }
    move_all(rev_cell(-13*state, 0), rev_cell(-13*state, 1), [0, 0, 1, -1, 1, 1, -1, -1, 0, -2, 2], [1, -1, 0, 0, 1, -1, 1, -1, 0, 0, 0], state, "dng")
    clear_highlight()
    if(celldng(b, 2) != 0 && p == "nk"){
      linos(file, rank, state, p)
      coh(rev_cell(-13*state, 0), rev_cell(-13*state, 1), checkv)
      check.play()
    }else if(celldng(z, 1) == 100){
      castl.play()
    }else if(p == "nk"){
      buttons.play()
    }
  }
  function castling(file, rank, r1c, r2c, state){
    if(boardindex(9*state) && r1c == 0 && cellhsq(file-1, rank) == 1 && cellksq(file-1, rank) == 0 && cell(file-3, rank) == 0){
      initialfr[2] = rev_cell(9*state, 0)
      initialfr[3] = rev_cell(9*state, 1)
      move_all(file, rank, [-2+celldng(z, 2)+celldng(a, 2)], [0], 1, "castl1")
    }
    if(boardindex(16*state) && r2c == 0 && cellhsq(file+1, rank) == 1 && cellksq(file+1, rank) == 0){
      initialfr[4] = rev_cell(16*state, 0)
      initialfr[5] = rev_cell(16*state, 1)
      move_all(file, rank, [2+celldng(d, 2)+celldng(c, 2)], [0], 1, "castl2")
    }
  }
  function king_check(file, rank){
    if(cell(file, rank) == 13 && piece_turn % 2 == 0){
      console.log(boarddng)
      coh(file, rank, hbd)
      cohcellhbd(file, rank, 1)
      move_all(file, rank, [0+celldng(b, 3), 0+celldng(b, 1), 1+celldng(c, 2), -1+celldng(a, 2), 1+celldng(c, 3), 1+celldng(c, 1), -1+celldng(a, 3), -1+celldng(a, 1)], [1, -1, 0, 0, 1, -1, 1, -1], -1, "k")
      if((cellpmv(e, 1) + celldng(b, 2)) == 0){
        castling(e, 1, cellpmv(a, 1), cellpmv(h, 1), 1)
      }
    }else if(cell(file, rank) == -13 && piece_turn % 2 == 1){
      console.log(boarddng)
      coh(file, rank, hbd)
      cohcellhbd(file, rank, 1)
      move_all(file, rank, [0+celldng(b, 3), 0+celldng(b, 1), 1+celldng(c, 2), -1+celldng(a, 2), 1+celldng(c, 3), 1+celldng(c, 1), -1+celldng(a, 3), -1+celldng(a, 1)], [1, -1, 0, 0, 1, -1, 1, -1], 1, "k")
      if((cellpmv(e, 4) + celldng(b, 2)) == 0){
        castling(e, 8, cellpmv(a, 4), cellpmv(h, 4), -1)
      }
    }
  }
  function piece_psh(file, rank){
    initialfr[0] = file
    initialfr[1] = rank
    pawn_check(file, rank)
    knight_check(file, rank)
    king_check(file, rank)
    rook_check(file, rank)
    bishop_check(file, rank)
    queen_check(file, rank)
    seedCheck(file, rank)
    //alert("I got here")
  }
  function showPromotionModal(pcol) {
    if(pcol == "white"){
      qrpp.src = "../img/w_rook.png"
      qbpp.src = "../img/w_bishop.png"
      qnpp.src = "../img/w_knight.png"
      qpp.src = "../img/w_queen.png"
    }else{
      qrpp.src = "../img/b_rook.png"
      qbpp.src = "../img/b_bishop.png"
      qnpp.src = "../img/b_knight.png"
      qpp.src = "../img/b_queen.png"
    }
    promotionModal.style.display = "block";
  }
  function hidePromotionModal(){
    promotionModal.style.display = "none";
  }
  function handlePromotionSelection(piece, shps) {
    promote.play()
    if(shps == 0){
      localStorage.test += hashstring(piece)
    }
    let state = 0
    if(cell(initialfr[8], initialfr[9]) > 0){
      state = 1
      cosrc(cell(initialfr[8], initialfr[9]), "../img/w_"+piece+".png")
    }else{
      state = -1
      cosrc(cell(initialfr[8], initialfr[9]), "../img/b_"+piece+".png")
    }
    if(piece == "queen"){
      copcellppa(initialfr[8], initialfr[9], cell(initialfr[8], initialfr[9]))
      copcell(initialfr[8], initialfr[9], 12*state)
      qnc += 1
    }else if(piece == "knight"){
      copcellppa(initialfr[8], initialfr[9], cell(initialfr[8], initialfr[9]))
      copcell(initialfr[8], initialfr[9], 10*state)
      nnc += 1
    }else if(piece == "bishop"){
      copcellppa(initialfr[8], initialfr[9], cell(initialfr[8], initialfr[9]))
      copcell(initialfr[8], initialfr[9], 11*state)
      bnc += 1
    }else if(piece == "rook"){
      copcellppa(initialfr[8], initialfr[9], cell(initialfr[8], initialfr[9]))
      copcell(initialfr[8], initialfr[9], 9*state)
      rnc += 1
    }
    hidePromotionModal();
  }
  function piece_rec(file, rank, dfile, drank){
    var htypef = ""
    var htyper = ""
    if(dfile == a){
      htyper = "left: 35px;"
    }else if(dfile == b){
      htyper = "left: 152px;"
    }else if(dfile == c){
      htyper = "left: 267px;"
    }else if(dfile == d){
      htyper = "left: 384px;"
    }else if(dfile == e){
      htyper = "left: 501px;"
    }else if(dfile == f){
      htyper = "left: 618px;"
    }else if(dfile == g){
      htyper = "left: 735px;"
    }else if(dfile == h){
      htyper = "left: 852px;"
    }
    if(drank == 1){
      htypef = "top: 1144px;"
    }else if(drank == 2){
      htypef = "top: 1027px;"
    }else if(drank == 3){
      htypef = "top: 910px;"
    }else if(drank == 4){
      htypef = "top: 793px;"
    }else if(drank == 5){
      htypef = "top: 676px;"
    }else if(drank == 6){
      htypef = "top: 559px;"
    }else if(drank == 7){
      htypef = "top: 442px;"
    }else if(drank == 8){
      htypef = "top: 325px;"
    }
    var htype = htypef + htyper
    piece_turn += 1
    cop(cell(file, rank), file, rank, htype)
    if(cell(file, rank) < 0 && cell(file, rank) > -9 && drank == 1){
      showPromotionModal("black")
    }else if(cell(file, rank) > 0 && cell(file, rank) < 9 && drank == 8){
      showPromotionModal("white")
    }  
    initialfr[8] = dfile
    initialfr[9] = drank
    cellnew(file, rank, dfile, drank)
    if(incheck){
      incheck = false
      reset_asq()
    }
    if(cell(dfile, drank) < 0){
      dngsq(rev_cell(13, 0), rev_cell(13, 1), -1, "nk")
    }else{
      dngsq(rev_cell(-13, 0), rev_cell(-13, 1), 1, "nk")
    }
  }
  socket.onmessage = function(event) {
      const mg = event.data;
      chessgame(parseInt(mg[0]), parseInt(mg[1]), 1);
      clear_ho();
  };
  function chessgame(file, rank,  s){
    /*if(s == 0 && (parseInt(localStorage.glnk) > 0 && cell(file, rank) < 0) || (parseInt(localStorage.glnk) < 0 && cell(file, rank) > 0)){
      return
    }*/
   // alert("You clicked me")
    if(cell(file, rank) != 0 && cellhbd(file, rank) == 0 && cellksq(file, rank) == 0){
      clear_highlight()
      coh(file, rank, hbd)
      cohcellhbd(file, rank, 1)
      piece_psh(file, rank)
      //console.log(boardhsq)
      if(incheck && piece_turn % 2 == 0){
        coh(rev_cell(-13*-1, 0), rev_cell(-13*-1, 1), checkv)
      }else if(incheck){
        coh(rev_cell(-13*1, 0), rev_cell(-13*1, 1), checkv)
      }
     }else if(cell(file, rank) == 0 && cellhsq(file, rank) == 1){
       clear_highlight()
       piece_rec(initialfr[0], initialfr[1], file, rank)
     }else if(cell(file, rank) == 0 && cellhsq(file, rank) == 2){
       clear_highlight()
       cohcelldng(z, 1, 100)
       piece_rec(initialfr[0], initialfr[1], file, rank)
       piece_rec(initialfr[2], initialfr[3], file+1, rank)
       cohcelldng(z, 1, 0)
       piece_turn -= 1
     }else if(cell(file, rank) == 0 && cellhsq(file, rank) == 3){
       clear_highlight()
       cohcelldng(z, 1, 100)
       piece_rec(initialfr[0], initialfr[1], file, rank)
       piece_rec(initialfr[4], initialfr[5], file-1, rank)
       cohcelldng(z, 1, 0)
       piece_turn -= 1
     }else if(cell(file, rank) != 0 && cellksq(file, rank) == 1){
       clear_highlight()
       if(cellppa(file, rank) != 0 && cellppa(initialfr[0], initialfr[1]) != 0){
         shrinking = true
         num = cellppa(file, rank)
         cop(num, file, rank, shrink)
         shrinking = false
       }else if(cellppa(file, rank) != 0){
        num = cellppa(file, rank)
        cop(num, file, rank, shrink)
       }else{
         shrinking = true
         cop(cell(file, rank), file, rank, shrink)
         shrinking = false
       }
       shrinkassist = true
       //kcellnew(file, rank)
       piece_rec(initialfr[0], initialfr[1], file, rank)
     }else if(cell(file, rank) == 0 && cellksq(file, rank) == 4){
       clear_highlight()
       cop(cell(initialfr[6], initialfr[7]), initialfr[6], initialfr[7], shrink)
       kcellnew(initialfr[6], initialfr[7])
       piece_rec(initialfr[0], initialfr[1], file, rank)
     }else{
       clear_highlight()
       if(incheck && piece_turn % 2 == 0){
        coh(rev_cell(-13*-1, 0), rev_cell(-13*-1, 1), checkv)
      }else if(incheck){
        coh(rev_cell(-13*1, 0), rev_cell(-13*1, 1), checkv)
      }
     }
     if(s != 2){
      localStorage.test += file
      localStorage.test += rank
     }  
     //alert(localStorage.test)
     if(s == 0){
      //socket.send(file+""+rank);
     }
  }
  function rs(){
    localStorage.test = ""
    window.location.reload()
  }