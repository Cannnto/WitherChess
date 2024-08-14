let container = document.querySelector(".xadrez") 

document.querySelector('#black').addEventListener('click',function(){
    document.querySelector('.container_chose').style.display = 'none'
    document.querySelector('.dark_background').style.display = 'none'
    for(i=0;i<8;i++){
        chess[i].map(conteudo =>{
            switch (document.querySelector(`.${conteudo}`).classList[2]){
                case 'white':
                    let arrayw =[]
                    for(iii=0;iii<(document.querySelector(`.${conteudo}`).classList.length-3);iii++){
                        arrayw[iii] = document.querySelector(`.${conteudo}`).classList[iii+3]
                    }
                    document.querySelector(`.${conteudo}`).className = document.querySelector(`.${conteudo}`).classList[0]+' '+document.querySelector(`.${conteudo}`).classList[1]
                    document.querySelector(`.${conteudo}`).classList.add('black')
                    for(iii=0;iii<arrayw.length;iii++){
                        document.querySelector(`.${conteudo}`).classList.add(arrayw[iii])
                    }
                break
                case 'black':
                    let array =[]
                    for(ii=0;ii<(document.querySelector(`.${conteudo}`).classList.length-3);ii++){
                        array[ii] = document.querySelector(`.${conteudo}`).classList[ii+3]
                    }
                    document.querySelector(`.${conteudo}`).className = document.querySelector(`.${conteudo}`).classList[0]+' '+document.querySelector(`.${conteudo}`).classList[1]
                    document.querySelector(`.${conteudo}`).classList.add('white')
                    for(ii=0;ii<array.length;ii++){
                        document.querySelector(`.${conteudo}`).classList.add(array[ii])
                    }
                    document.querySelector(`.${conteudo}`).classList.add('active')
                break
            }
        })
    }
})
document.querySelector('#white').addEventListener('click',function(){
    document.querySelector('.container_chose').style.display = 'none'
    document.querySelector('.dark_background').style.display = 'none'
    for(i=0;i<8;i++){
        chess[i].map(conteudo =>{
            if(document.querySelector(`.${conteudo}`).classList[2] == 'white'){
                    document.querySelector(`.${conteudo}`).classList.add('active')
            }
        })
    }
})

function aux(cod){
    if(cod.className.indexOf('active') != -1 || cod.className.indexOf('blue') != -1 || cod.className.indexOf('orange') != -1){
        switch(cod.classList[1]){
            //blue apenas troca a posicao do vermelho pelo azul 
            case 'blue':
                document.querySelector('.xadrez').style.left = '6.6vw'
                document.querySelector('.score').style.right = '6.6vw'
                document.querySelector('.score').style.boxShadow = '0px 0px 10px #B19DD0'

                let redchess = document.querySelector('.red').classList[0]
                let blueDescri = document.querySelector('.red').className.slice(5)
                let bluechess = cod.classList[0]
                let columblue =''
                switch (bluechess.slice(3)){
                    case '1': columblue = 'A'
                    break
                    case '2': columblue = 'B'
                    break 
                    case '3': columblue = 'C'
                    break 
                    case '4': columblue = 'D'
                    break 
                    case '5': columblue = 'E'
                    break 
                    case '6': columblue = 'F'
                    break 
                    case '7': columblue = 'G'
                    break 
                    case '8': columblue = 'H'
                    break  
                }
                let columred =''
                switch (redchess.slice(3)){
                    case '1': columred = 'A'
                    break
                    case '2': columred = 'B'
                    break 
                    case '3': columred = 'C'
                    break 
                    case '4': columred = 'D'
                    break 
                    case '5': columred = 'E'
                    break 
                    case '6': columred = 'F'
                    break 
                    case '7': columred = 'G'
                    break 
                    case '8': columred = 'H'
                    break  
                }
                document.querySelector('.score').innerHTML += `<div class='sco_${document.querySelector(`.${redchess}`).classList[2]}'>${columred+redchess.slice(1,2)} ==> ${columblue+bluechess.slice(1,2)}<img class='scorePiece' src="wither/${document.querySelector(`.${redchess}`).classList[1]}_${document.querySelector(`.${redchess}`).classList[2]}.png">                </div>`

                document.querySelector(`.${bluechess}`).className = `${bluechess} ${blueDescri}`
                /*only peao*/document.querySelector(`.${bluechess}`).classList.remove('step') 
                //active
                                for(i=0;i<document.querySelectorAll(`.${document.querySelector('.red').classList[2]}`).length;i++){
                                    document.querySelectorAll(`.${document.querySelector('.red').classList[2]}`)[i].classList.remove('active')
                                }
                                if (document.querySelector('.red').classList[2] == 'black') {
                                    for(i=0;i<document.querySelectorAll('.white').length;i++){
                                        document.querySelectorAll('.white')[i].classList.add('active')
                                    }
                                }
                                if (document.querySelector('.red').classList[2] == 'white') {
                                    for(i=0;i<document.querySelectorAll('.black').length;i++){
                                        document.querySelectorAll('.black')[i].classList.add('active')
                                    }
                                }
                document.querySelector(`.${bluechess}`).classList.remove('red') 
                document.querySelector('.red').className = redchess

                const a = document.querySelectorAll('.blue').length
                for(i=0;i<a;i++){
                    document.querySelectorAll('.blue')[0].classList.remove('blue')
                }
                const b = document.querySelectorAll('.orange').length
                for(i=0;i<b;i++){
                    document.querySelectorAll('.orange')[0].classList.remove('orange')
                }   
            break
            case 'orange':
                let redchesss = document.querySelector('.red').classList[0]
                let orangeDescri = document.querySelector('.red').className.slice(5)
                let orangechess = cod.classList[0]
                let columblueO =''
                switch (orangechess.slice(3)){
                    case '1': columblueO = 'A'
                    break
                    case '2': columblueO = 'B'
                    break 
                    case '3': columblueO = 'C'
                    break 
                    case '4': columblueO = 'D'
                    break 
                    case '5': columblueO = 'E'
                    break 
                    case '6': columblueO = 'F'
                    break 
                    case '7': columblueO = 'G'
                    break 
                    case '8': columblueO = 'H'
                    break  
                }
                let columredO =''
                switch (redchesss.slice(3)){
                    case '1': columredO = 'A'
                    break
                    case '2': columredO = 'B'
                    break 
                    case '3': columredO = 'C'
                    break 
                    case '4': columredO = 'D'
                    break 
                    case '5': columredO = 'E'
                    break 
                    case '6': columredO = 'F'
                    break 
                    case '7': columredO = 'G'
                    break 
                    case '8': columredO = 'H'
                    break  
                }
                document.querySelector('.score').innerHTML += `<div class='sco_${document.querySelector(`.${redchesss}`).classList[2]}'>${columredO+redchesss.slice(1,2)} ==> ${columblueO+orangechess.slice(1,2)}<img class='scorePiece' src="wither/${document.querySelector(`.${redchesss}`).classList[1]}_${document.querySelector(`.${redchesss}`).classList[2]}.png"><img class='littleOrange' src="wither/${document.querySelector(`.${orangechess}`).classList[2]}_${document.querySelector(`.${orangechess}`).classList[3]}.png"></div>`
                document.querySelector(`.${orangechess}`).className = `${orangechess} ${orangeDescri}`
                //active
                            for(i=0;i<document.querySelectorAll(`.${document.querySelector('.red').classList[2]}`).length;i++){
                                document.querySelectorAll(`.${document.querySelector('.red').classList[2]}`)[i].classList.remove('active')
                            }
                            if (document.querySelector('.red').classList[2] == 'black') {
                                for(i=0;i<document.querySelectorAll('.white').length;i++){
                                    document.querySelectorAll('.white')[i].classList.add('active')
                                }
                            }
                            if (document.querySelector('.red').classList[2] == 'white') {
                                for(i=0;i<document.querySelectorAll('.black').length;i++){
                                    document.querySelectorAll('.black')[i].classList.add('active')
                                }
                            }
                document.querySelector(`.${orangechess}`).classList.remove('red') 
                document.querySelector('.red').className = redchesss

                const c = document.querySelectorAll('.blue').length
                for(i=0;i<c;i++){
                    document.querySelectorAll('.blue')[0].classList.remove('blue')
                }
                const d = document.querySelectorAll('.orange').length
                for(i=0;i<d;i++){
                    document.querySelectorAll('.orange')[0].classList.remove('orange')
                }   
            break
            case 'queen':
                                //controlador de opções
                        if(document.querySelector('.red') != null){
                            document.querySelector('.red').classList.remove('red')
                        }
                        if(document.querySelector('.orange') != null){
                            const a = document.querySelectorAll('.orange').length
                            for(i=0;i<a;i++){
                                document.querySelectorAll('.orange')[0].classList.remove('orange')
                            }
                        }
                        if(document.querySelector('.blue') != null){
                            const a = document.querySelectorAll('.blue').length
                            for(i=0;i<a;i++){
                                document.querySelectorAll('.blue')[0].classList.remove('blue')
                            }
                        }
                //red
                cod.classList.add('red')      
                let posiWQuenn=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let posi=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let line1Quenn =[]
                let line2Quenn =[]
                let line3Quenn =[]
                let line4Quenn =[]
                let line1Y =[]
                let line2Y =[]
                let line1X =[]
                let line2X =[]
                for(i=0;i<=8;i++){
                    line1Quenn[i] = document.querySelector(`.r${posiWQuenn[0]+(i+1)}c${posiWQuenn[1]-(i+1)}`)
                    line2Quenn[i] = document.querySelector(`.r${posiWQuenn[0]+(i+1)}c${posiWQuenn[1]+(i+1)}`)
                    line3Quenn[i] = document.querySelector(`.r${posiWQuenn[0]-(i+1)}c${posiWQuenn[1]-(i+1)}`)
                    line4Quenn[i] = document.querySelector(`.r${posiWQuenn[0]-(i+1)}c${posiWQuenn[1]+(i+1)}`)
                    line1Y[i] = document.querySelector(`.r${posi[0]+(i+1)}c${posi[1]}`) 
                    line2Y[i] = document.querySelector(`.r${posi[0]-(i+1)}c${posi[1]}`)
                    line1X[i] = document.querySelector(`.r${posi[0]}c${posi[1]+(i+1)}`)
                    line2X[i] = document.querySelector(`.r${posi[0]}c${posi[1]-(i+1)}`)
                }
                let linesQuenn = [line1Y,line2Y,line1X,line2X,line1Quenn,line2Quenn,line3Quenn,line4Quenn]
                let linesQuenn_=[]
                for(i=0;i<8;i++) {
                    linesQuenn_[i] = linesQuenn[i].filter(conteudo =>{
                    return conteudo != null
                })}

                for(i=0;i<8;i++){
                    let auxx=-1
                    linesQuenn_[i].map(conteudo =>{
                        auxx++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                linesQuenn_[i].splice(auxx+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx = -1    
                            }
                            else{
                                linesQuenn_[i].splice(auxx)
                                conteudo.classList.remove('blue')
                                auxx = -1
                            }
                        }   
                        return conteudo            
                    })
                }
                
            
            break
            case 'king':
                let blue_R1 = Number(cod.className.slice(1,2))+1
                let blue_R2 = Number(cod.className.slice(1,2))
                let blue_R3 = Number(cod.className.slice(1,2))-1
                let blue_C1 = Number(cod.className.slice(3,4))-1
                let blue_C2 = Number(cod.className.slice(3,4))
                let blue_C3 = Number(cod.className.slice(3,4))+1
                let blue1 = document.querySelector(`.r${blue_R1}c${blue_C1}`)
                let blue2 = document.querySelector(`.r${blue_R1}c${blue_C2}`)
                let blue3 = document.querySelector(`.r${blue_R1}c${blue_C3}`)
                let blue4 = document.querySelector(`.r${blue_R2}c${blue_C1}`)
                let blue5 = document.querySelector(`.r${blue_R2}c${blue_C3}`)
                let blue6 = document.querySelector(`.r${blue_R3}c${blue_C1}`)
                let blue7 = document.querySelector(`.r${blue_R3}c${blue_C2}`)
                let blue8 = document.querySelector(`.r${blue_R3}c${blue_C3}`)
                let king = [blue1,blue2,blue3,blue4,blue5,blue6,blue7,blue8]

                                //controlador de opções
                        if(document.querySelector('.red') != null){
                            document.querySelector('.red').classList.remove('red')
                        }
                        if(document.querySelector('.orange') != null){
                            const a = document.querySelectorAll('.orange').length
                            for(i=0;i<a;i++){
                                document.querySelectorAll('.orange')[0].classList.remove('orange')
                            }
                        }
                        if(document.querySelector('.blue') != null){
                            const a = document.querySelectorAll('.blue').length
                            for(i=0;i<a;i++){
                                document.querySelectorAll('.blue')[0].classList.remove('blue')
                            }
                        }
                //red
                cod.classList.add('red')      
                //blue filter
                let blues = king.filter(conteudo => {
                    return conteudo != null && conteudo.classList[1] == undefined;
                });
                //orange filter
                let orange = king.filter(conteudo => {
                    return conteudo != null && conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined;
                });

                //blue map
                blues.map(azuis => {
                    return azuis.classList.add('blue')
                })
                //orange.map
                orange.map(laranja =>{
                    let a = laranja.className.slice(4)
                    laranja.className = laranja.className.slice(0,4)
                    laranja.classList.add('orange')
                    return laranja.className += a
                })
            break
                                                                                        //TORRE
            case 'torre':
                let posiW=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let line1YW =[]
                let line2YW =[]
                let line1XW =[]
                let line2XW =[]
                for(i=0;i<8;i++){
                    line1YW[i] = document.querySelector(`.r${posiW[0]+(i+1)}c${posiW[1]}`) 
                    line2YW[i] = document.querySelector(`.r${posiW[0]-(i+1)}c${posiW[1]}`)
                    line1XW[i] = document.querySelector(`.r${posiW[0]}c${posiW[1]+(i+1)}`)
                    line2XW[i] = document.querySelector(`.r${posiW[0]}c${posiW[1]-(i+1)}`)
                }
                let linesHori = [line1YW,line2YW,line1XW,line2XW]
                let linesHori_=[]
                for(i=0;i<4;i++) {
                    linesHori_[i] = linesHori[i].filter(conteudo =>{
                    return conteudo != null
                })}
                                    //controlador de opções
                                    if(document.querySelector('.red') != null){
                                        document.querySelector('.red').classList.remove('red')
                                    }
                                    if(document.querySelector('.orange') != null){
                                        const a = document.querySelectorAll('.orange').length
                                        for(i=0;i<a;i++){
                                            document.querySelectorAll('.orange')[0].classList.remove('orange')
                                        }
                                    }
                                    if(document.querySelector('.blue') != null){
                                        const a = document.querySelectorAll('.blue').length
                                        for(i=0;i<a;i++){
                                            document.querySelectorAll('.blue')[0].classList.remove('blue')
                                        }
                                    }
                //red
                cod.classList.add('red')  

                for(i=0;i<4;i++){
                    let auxx=-1
                    linesHori_[i].map(conteudo =>{
                        auxx++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                linesHori_[i].splice(auxx+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx = -1    
                            }
                            else{
                                linesHori_[i].splice(auxx)
                                conteudo.classList.remove('blue')
                                auxx = -1
                            }
                        }   
                        return conteudo            
                    })
                }
            break
                                                                                        //BISPO
            case 'bispo':
                let posiWB=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let line1W =[]
                let line2W =[]
                let line3W =[]
                let line4W =[]
                for(i=0;i<=8;i++){
                    line1W[i] = document.querySelector(`.r${posiWB[0]+(i+1)}c${posiWB[1]-(i+1)}`)
                    line2W[i] = document.querySelector(`.r${posiWB[0]+(i+1)}c${posiWB[1]+(i+1)}`)
                    line3W[i] = document.querySelector(`.r${posiWB[0]-(i+1)}c${posiWB[1]-(i+1)}`)
                    line4W[i] = document.querySelector(`.r${posiWB[0]-(i+1)}c${posiWB[1]+(i+1)}`)
                }
                let linesDiag = [line1W,line2W,line3W,line4W]
                let linesDiag_=[]
                for(i=0;i<4;i++) {
                    linesDiag_[i] = linesDiag[i].filter(conteudo =>{
                    return conteudo != null
                })}
                                        //controlador de opções
                                        if(document.querySelector('.red') != null){
                                            document.querySelector('.red').classList.remove('red')
                                        }
                                        if(document.querySelector('.orange') != null){
                                            const a = document.querySelectorAll('.orange').length
                                            for(i=0;i<a;i++){
                                                document.querySelectorAll('.orange')[0].classList.remove('orange')
                                            }
                                        }
                                        if(document.querySelector('.blue') != null){
                                            const a = document.querySelectorAll('.blue').length
                                            for(i=0;i<a;i++){
                                                document.querySelectorAll('.blue')[0].classList.remove('blue')
                                            }
                                        }

                //red
                cod.classList.add('red')  
                
                for(i=0;i<4;i++){
                    let auxx=-1
                    linesDiag_[i].map(conteudo =>{
                        auxx++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                linesDiag_[i].splice(auxx+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx = -1    
                            }
                            else{
                                linesDiag_[i].splice(auxx)
                                conteudo.classList.remove('blue')
                                auxx = -1
                            }
                        }   
                        return conteudo            
                    })
                }
            break
                                                                                        //CAVALO
            case 'cavalo':
                let blue_R1W = Number(cod.className.slice(1,2))+2
                let blue_R2W = Number(cod.className.slice(1,2))+1
                let blue_R3W = Number(cod.className.slice(1,2))-1
                let blue_R4W = Number(cod.className.slice(1,2))-2
                let blue_C1W = Number(cod.className.slice(3,4))-2
                let blue_C2W = Number(cod.className.slice(3,4))-1
                let blue_C3W = Number(cod.className.slice(3,4))+1
                let blue_C4W = Number(cod.className.slice(3,4))+2
                let blue1W = document.querySelector(`.r${blue_R1W}c${blue_C2W}`)
                let blue2W = document.querySelector(`.r${blue_R2W}c${blue_C1W}`)
                let blue3W = document.querySelector(`.r${blue_R3W}c${blue_C4W}`)
                let blue4W = document.querySelector(`.r${blue_R4W}c${blue_C3W}`)
                let blue5W = document.querySelector(`.r${blue_R1W}c${blue_C3W}`)
                let blue6W = document.querySelector(`.r${blue_R2W}c${blue_C4W}`)
                let blue7W = document.querySelector(`.r${blue_R3W}c${blue_C1W}`)
                let blue8W = document.querySelector(`.r${blue_R4W}c${blue_C2W}`)
                let horseW = [blue1W,blue2W,blue3W,blue4W,blue5W,blue6W,blue7W,blue8W]
                    
                    //controlador de opções
                    if(document.querySelector('.red') != null){
                        document.querySelector('.red').classList.remove('red')
                    }
                    if(document.querySelector('.orange') != null){
                        const a = document.querySelectorAll('.orange').length
                        for(i=0;i<a;i++){
                            document.querySelectorAll('.orange')[0].classList.remove('orange')
                        }
                    }
                    if(document.querySelector('.blue') != null){
                        const a = document.querySelectorAll('.blue').length
                        for(i=0;i<a;i++){
                            document.querySelectorAll('.blue')[0].classList.remove('blue')
                        }
                    }
                //red
                cod.classList.add('red')      
                //blue filter
                let bluesW = horseW.filter(conteudo => {
                    return conteudo != null && conteudo.classList[1] == undefined;
                });
                //orange filter
                let orangeW = horseW.filter(conteudo => {
                    return conteudo != null && conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined;
                });

                //blue map
                bluesW.map(azuis => {
                    return azuis.classList.add('blue')
                })
                //orange.map
                orangeW.map(laranja =>{
                    let a = laranja.className.slice(4)
                    laranja.className = laranja.className.slice(0,4)
                    laranja.classList.add('orange')
                    return laranja.className += a
                })
            break
                                                                                                //PEAO
        case 'peao':
                                //controlador de opções
                                    if(document.querySelector('.red') != null){
                                        document.querySelector('.red').classList.remove('red')
                                    }
                                    if(document.querySelector('.orange') != null){
                                        const a = document.querySelectorAll('.orange').length
                                        for(i=0;i<a;i++){
                                            document.querySelectorAll('.orange')[0].classList.remove('orange')
                                        }
                                    }
                                    if(document.querySelector('.blue') != null){
                                        const a = document.querySelectorAll('.blue').length
                                        for(i=0;i<a;i++){
                                            document.querySelectorAll('.blue')[0].classList.remove('blue')
                                        }
                                    }
            if(cod.classList[3] == 'back'){
                    let blue1_cod_R = Number(cod.className.slice(1,2))-1
                    let blue_C = cod.className.slice(3,4)
                    if(document.querySelector(`.r${blue1_cod_R}c${blue_C}`).classList[1] == undefined){
                        //blue1
                        document.querySelector(`.r${blue1_cod_R}c${blue_C}`).classList.add('blue')
                        if(cod.classList[4] == 'step'){
                            let blue2_cod_R = Number(cod.className.slice(1,2))-2
                            if(document.querySelector(`.r${blue2_cod_R}c${blue_C}`).classList[1] == undefined){
                                //blue2
                                document.querySelector(`.r${blue2_cod_R}c${blue_C}`).classList.add('blue')
                            }
                        }
                    }
            }
            if(cod.classList[3] == 'front'){
                let blue1_cod_R = Number(cod.className.slice(1,2))+1
                let blue_C = cod.className.slice(3,4)
                if(document.querySelector(`.r${blue1_cod_R}c${blue_C}`).classList[1] == undefined){
                    //blue1
                    document.querySelector(`.r${blue1_cod_R}c${blue_C}`).classList.add('blue')
                    if(cod.classList[4] == 'step'){
                        let blue2_cod_R = Number(cod.className.slice(1,2))+2
                        if(document.querySelector(`.r${blue2_cod_R}c${blue_C}`).classList[1] == undefined){
                            //blue2
                            document.querySelector(`.r${blue2_cod_R}c${blue_C}`).classList.add('blue')
                        }
                    }
                }
            }
            //red
            cod.classList.add('red')                        
            //orange
            if(cod.classList[3] == 'back'){
                let orangeRow = Number(cod.className.slice(1,2))-1
                let orangeCol1 = Number(cod.className.slice(3,4))+1
                let orangeCol2 = Number(cod.className.slice(3,4))-1
                    if(document.querySelector(`.r${orangeRow}c${orangeCol1}`) != null && document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList[2] != cod.classList[2] && document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList[2] != undefined){
                        let a = document.querySelector(`.r${orangeRow}c${orangeCol1}`).className.slice(4)
                        document.querySelector(`.r${orangeRow}c${orangeCol1}`).className = document.querySelector(`.r${orangeRow}c${orangeCol1}`).className.slice(0,4) 
                        document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList.add('orange')
                        document.querySelector(`.r${orangeRow}c${orangeCol1}`).className += a
                    }
                    if(document.querySelector(`.r${orangeRow}c${orangeCol2}`) != null && document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList[2] != cod.classList[2] && document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList[2] != undefined){
                        let a = document.querySelector(`.r${orangeRow}c${orangeCol2}`).className.slice(4)
                        document.querySelector(`.r${orangeRow}c${orangeCol2}`).className = document.querySelector(`.r${orangeRow}c${orangeCol2}`).className.slice(0,4) 
                        document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList.add('orange')
                        document.querySelector(`.r${orangeRow}c${orangeCol2}`).className += a
            }}
            if(cod.classList[3] == 'front'){
                let orangeRow = Number(cod.className.slice(1,2))+1
                let orangeCol1 = Number(cod.className.slice(3,4))-1
                let orangeCol2 = Number(cod.className.slice(3,4))+1
                if(document.querySelector(`.r${orangeRow}c${orangeCol1}`) != null && document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList[2] != cod.classList[2] && document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList[2] != undefined){
                    let a = document.querySelector(`.r${orangeRow}c${orangeCol1}`).className.slice(4)
                    document.querySelector(`.r${orangeRow}c${orangeCol1}`).className = document.querySelector(`.r${orangeRow}c${orangeCol1}`).className.slice(0,4) 
                    document.querySelector(`.r${orangeRow}c${orangeCol1}`).classList.add('orange')
                    document.querySelector(`.r${orangeRow}c${orangeCol1}`).className += a
                }
                if(document.querySelector(`.r${orangeRow}c${orangeCol2}`) != null && document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList[2] != cod.classList[2] && document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList[2] != undefined){
                    let a = document.querySelector(`.r${orangeRow}c${orangeCol2}`).className.slice(4)
                    document.querySelector(`.r${orangeRow}c${orangeCol2}`).className = document.querySelector(`.r${orangeRow}c${orangeCol2}`).className.slice(0,4) 
                    document.querySelector(`.r${orangeRow}c${orangeCol2}`).classList.add('orange')
                    document.querySelector(`.r${orangeRow}c${orangeCol2}`).className += a
            }}
        break       
    }}
    let au=[]
        for(i=0;i<2;i++){
            au[i] = document.querySelectorAll('.king')[i]
        }
        let auu = au.filter(conteudo =>{
            return conteudo.classList[2] != cod.classList[2]    
        })
    let posi=[Number(auu[0].className.slice(1,2)),Number(auu[0].className.slice(3,4))]
    let line1Hori =[]
    let line2Hori =[]
    let line3Hori =[]
    let line4Hori =[]
    let line1Diag =[]
    let line2Diag =[]
    let line3Diag =[]
    let line4Diag =[]
    for(i=0;i<=8;i++){
        line1Diag[i] = document.querySelector(`.r${posi[0]+(i+1)}c${posi[1]-(i+1)}`)
        line2Diag[i] = document.querySelector(`.r${posi[0]+(i+1)}c${posi[1]+(i+1)}`)
        line3Diag[i] = document.querySelector(`.r${posi[0]-(i+1)}c${posi[1]-(i+1)}`)
        line4Diag[i] = document.querySelector(`.r${posi[0]-(i+1)}c${posi[1]+(i+1)}`)
        line1Hori[i] = document.querySelector(`.r${posi[0]+(i+1)}c${posi[1]}`) 
        line2Hori[i] = document.querySelector(`.r${posi[0]}c${posi[1]+(i+1)}`)
        line3Hori[i] = document.querySelector(`.r${posi[0]-(i+1)}c${posi[1]}`)
        line4Hori[i] = document.querySelector(`.r${posi[0]}c${posi[1]-(i+1)}`)
    }
    let lines =line1Hori.concat(line2Hori,line3Hori,line4Hori,line1Diag,line2Diag,line3Diag,line4Diag)

    let lines_= lines.filter(conteudo =>{
        return conteudo != null                     })
}






let chess = [['r8c1','r8c2','r8c3','r8c4','r8c5','r8c6','r8c7','r8c8'],
             ['r7c1','r7c2','r7c3','r7c4','r7c5','r7c6','r7c7','r7c8'],
             ['r6c1','r6c2','r6c3','r6c4','r6c5','r6c6','r6c7','r6c8'],
             ['r5c1','r5c2','r5c3','r5c4','r5c5','r5c6','r5c7','r5c8'],
             ['r4c1','r4c2','r4c3','r4c4','r4c5','r4c6','r4c7','r4c8'],
             ['r3c1','r3c2','r3c3','r3c4','r3c5','r3c6','r3c7','r3c8'],
             ['r2c1','r2c2','r2c3','r2c4','r2c5','r2c6','r2c7','r2c8'],
             ['r1c1','r1c2','r1c3','r1c4','r1c5','r1c6','r1c7','r1c8'],]
for(let i=chess.length-1;i>=0;i--){
    if(i%2==0){

        if(i==6){
    //6
            container.innerHTML += 
    `
    <div class='${chess[i][0]} peao white front step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][0]};" ></div>
    <div class='${chess[i][1]} peao white front step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][1]};"></div>
    <div class='${chess[i][2]} peao white front step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][2]};"></div>
    <div class='${chess[i][3]} peao white front step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][3]};"></div>
    <div class='${chess[i][4]} peao white front step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][4]};"></div>
    <div class='${chess[i][5]} peao white front step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][5]};"></div>
    <div class='${chess[i][6]} peao white front step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][6]};"></div>
    <div class='${chess[i][7]} peao white front step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][7]};"></div>
    `        
        }
        else{
            if(i==0){
                container.innerHTML += 
                `
                <div class='${chess[i][0]} torre black' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][0]};" ></div>
                <div class='${chess[i][1]} cavalo black' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][1]};"></div>
                <div class='${chess[i][2]} bispo black' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][2]};"></div>
                <div class='${chess[i][3]} queen black' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][3]};"></div>
                <div class='${chess[i][4]} king black' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][4]};"></div>
                <div class='${chess[i][5]} bispo black' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][5]};"></div>
                <div class='${chess[i][6]} cavalo black' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][6]};"></div>
                <div class='${chess[i][7]} torre black' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][7]};"></div>
                `                                        
            }
            else{
            container.innerHTML += 
             `
            <div class='${chess[i][0]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][0]};" ></div>
            <div class='${chess[i][1]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][1]};"></div>
            <div class='${chess[i][2]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][2]};"></div>
            <div class='${chess[i][3]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][3]};"></div>
            <div class='${chess[i][4]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][4]};"></div>
            <div class='${chess[i][5]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][5]};"></div>
            <div class='${chess[i][6]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][6]};"></div>
            <div class='${chess[i][7]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][7]};"></div>
            `
    }}}
    else{
        if(i==1){
            container.innerHTML += 
    `
    <div class='${chess[i][0]} peao black back step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][0]};" ></div>
    <div class='${chess[i][1]} peao black back step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][1]};"></div>
    <div class='${chess[i][2]} peao black back step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][2]};"></div>
    <div class='${chess[i][3]} peao black back step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][3]};"></div>
    <div class='${chess[i][4]} peao black back step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][4]};"></div>
    <div class='${chess[i][5]} peao black back step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][5]};"></div>
    <div class='${chess[i][6]} peao black back step' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][6]};"></div>
    <div class='${chess[i][7]} peao black back step' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][7]};"></div>
    `        
        }
        else{
            if(i==7){
                container.innerHTML += 
                `
                <div class='${chess[i][0]} torre white' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][0]};" ></div>
                <div class='${chess[i][1]} cavalo white' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][1]};"></div>
                <div class='${chess[i][2]} bispo white' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][2]};"></div>
                <div class='${chess[i][3]} queen white' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][3]};"></div>
                <div class='${chess[i][4]} king white' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][4]};"></div>
                <div class='${chess[i][5]} bispo white' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][5]};"></div>
                <div class='${chess[i][6]} cavalo white' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][6]};"></div>
                <div class='${chess[i][7]} torre white' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][7]};"></div>
                `                                        
            }
            else{
            container.innerHTML += 
             `
            <div class='${chess[i][0]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][0]};" ></div>
            <div class='${chess[i][1]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][1]};"></div>
            <div class='${chess[i][2]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][2]};"></div>
            <div class='${chess[i][3]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][3]};"></div>
            <div class='${chess[i][4]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][4]};"></div>
            <div class='${chess[i][5]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][5]};"></div>
            <div class='${chess[i][6]}' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][6]};"></div>
            <div class='${chess[i][7]}' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][7]};"></div>
            `
        }}}
}
for(i=1;i<=8;i++){
    if(i%2 == 0){
        document.querySelector(`.r${i}c1`).innerHTML += `<p class='numWhite'>${i}</p>`
    }
    else{
        document.querySelector(`.r${i}c1`).innerHTML += `<p class='numBlack'>${i}</p>`
    }
    switch(i){
        case 1:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrBlack'>A</p>`
        break
        case 2:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrWhite'>B</p>`
        break
        case 3:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrBlack'>C</p>`
        break
        case 4:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrWhite'>D</p>`
        break
        case 5:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrBlack'>E</p>`
        break
        case 6:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrWhite'>F</p>`
        break
        case 7:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrBlack'>G</p>`
        break
        case 8:document.querySelector(`.r1c${i}`).innerHTML +=`<p class='letrWhite'>H</p>` 
        break
    }
}