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
                break
            }
        })
    }
})
document.querySelector('#white').addEventListener('click',function(){
    document.querySelector('.container_chose').style.display = 'none'
    document.querySelector('.dark_background').style.display = 'none'
})
let contador = 0


function aux(cod){
    if(cod.className.indexOf('active') != -1 || cod.className.indexOf('blue') != -1 || cod.className.indexOf('orange') != -1){
        switch(cod.classList[1]){
            //blue apenas troca a posicao do vermelho pelo azul 
            case 'blue':
                document.querySelector('.xadrez').style.left = '6.6vw'
                document.querySelector('.score').style.right = '6.6vw'

                let redchess = document.querySelector('.red').classList[0]
                let blueDescri = document.querySelector('.red').className.slice(5)
                let bluechess = cod.classList[0]
                document.querySelector('.score').innerHTML += `<div class='sco_${document.querySelector(`.${redchess}`).classList[2]}'>aiiii calica</div>`

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
                let blue_R1_Queen = Number(cod.className.slice(1,2))+1
                let blue_R2_Queen = Number(cod.className.slice(1,2))
                let blue_R3_Queen = Number(cod.className.slice(1,2))-1
                let blue_C1_Queen = Number(cod.className.slice(3,4))-1
                let blue_C2_Queen = Number(cod.className.slice(3,4))
                let blue_C3_Queen = Number(cod.className.slice(3,4))+1
                let blue1_Queen = document.querySelector(`.r${blue_R1_Queen}c${blue_C1_Queen}`)
                let blue2_Queen = document.querySelector(`.r${blue_R1_Queen}c${blue_C2_Queen}`)
                let blue3_Queen = document.querySelector(`.r${blue_R1_Queen}c${blue_C3_Queen}`)
                let blue4_Queen = document.querySelector(`.r${blue_R2_Queen}c${blue_C1_Queen}`)
                let blue5_Queen = document.querySelector(`.r${blue_R2_Queen}c${blue_C3_Queen}`)
                let blue6_Queen = document.querySelector(`.r${blue_R3_Queen}c${blue_C1_Queen}`)
                let blue7_Queen = document.querySelector(`.r${blue_R3_Queen}c${blue_C2_Queen}`)
                let blue8_Queen = document.querySelector(`.r${blue_R3_Queen}c${blue_C3_Queen}`)
                let Queen = [blue1_Queen,blue2_Queen,blue3_Queen,blue4_Queen,blue5_Queen,blue6_Queen,blue7_Queen,blue8_Queen]

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
                let blues_Queen = Queen.filter(conteudo => {
                    return conteudo != null && conteudo.classList[1] == undefined;
                });
                //orange filter
                let orange_Queen = Queen.filter(conteudo => {
                    return conteudo != null && conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined;
                });

                //blue map
                blues_Queen.map(azuis => {
                    return azuis.classList.add('blue')
                })
                //orange.map
                orange_Queen.map(laranja =>{
                    let a = laranja.className.slice(4)
                    laranja.className = laranja.classList[0]
                    laranja.classList.add('orange')
                    return laranja.className += a
                })
                let posiWQuenn=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let linha1Quenn =[]
                let linha2Quenn =[]
                let linha3Quenn =[]
                let linha4Quenn =[]
                for(i=0;i<=8;i++){
                    linha1Quenn[i] = document.querySelector(`.r${posiWQuenn[0]+(i+1)}c${posiWQuenn[1]-(i+1)}`)
                    linha2Quenn[i] = document.querySelector(`.r${posiWQuenn[0]+(i+1)}c${posiWQuenn[1]+(i+1)}`)
                    linha3Quenn[i] = document.querySelector(`.r${posiWQuenn[0]-(i+1)}c${posiWQuenn[1]-(i+1)}`)
                    linha4Quenn[i] = document.querySelector(`.r${posiWQuenn[0]-(i+1)}c${posiWQuenn[1]+(i+1)}`)
                }
                let linha1_Quenn = linha1Quenn.filter(conteudo =>{
                        return conteudo != null
                })
                let linha2_Quenn = linha2Quenn.filter(conteudo =>{
                        return conteudo != null
                })
                let linha3_Quenn = linha3Quenn.filter(conteudo =>{
                        return conteudo != null
                })
                let linha4_Quenn = linha4Quenn.filter(conteudo =>{
                        return conteudo != null
                })
                let auxx1Quenn=-1
                let auxx2Quenn=-1
                let auxx3Quenn=-1
                let auxx4Quenn=-1

                                                        //linha1
                linha1_Quenn.map(conteudo =>{
                    auxx1Quenn++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha1_Quenn.splice(auxx1Quenn+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx1Quenn = -1    
                        }
                        else{
                            linha1_Quenn.splice(auxx1Quenn)
                            conteudo.classList.remove('blue')
                            auxx1Quenn = -1
                        }
                    }   
                    return conteudo && auxx1Quenn           
                })
                                                        //linha2
                linha2_Quenn.map(conteudo =>{
                    auxx2Quenn++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha2_Quenn.splice(auxx2Quenn+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx2Quenn = -1    
                        }
                        else{
                            linha2_Quenn.splice(auxx2Quenn)
                            conteudo.classList.remove('blue')
                            auxx2Quenn = -1
                        }
                    }   
                    return conteudo && auxx2Quenn           
                })
                                                        //linha3          
                linha3_Quenn.map(conteudo =>{
                    auxx3Quenn++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha3_W.splice(auxx3Quenn+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx3Quenn = -1    
                        }
                        else{
                            linha3_Quenn.splice(auxx3Quenn)
                            conteudo.classList.remove('blue')
                            auxx3Quenn = -1
                        }
                    }   
                    return conteudo && auxx3Quenn         
                })             
                                                        //linha4
                linha4_Quenn.map(conteudo =>{
                    auxx4Quenn++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha4_Quenn.splice(auxx4Quenn+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx4Quenn = -1    
                        }
                        else{
                            linha4_Quenn.splice(auxx4Quenn)
                            conteudo.classList.remove('blue')
                            auxx4Quenn = -1
                        }
                    }   
                    return conteudo && auxx4Quenn           
                })
                //torre part
                let posi=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let linha1Y =[]
                let linha2Y =[]
                let linha1X =[]
                let linha2X =[]
                for(i=0;i<8;i++){
                    linha1Y[i] = document.querySelector(`.r${posi[0]+(i+1)}c${posi[1]}`) 
                    linha2Y[i] = document.querySelector(`.r${posi[0]-(i+1)}c${posi[1]}`)
                    linha1X[i] = document.querySelector(`.r${posi[0]}c${posi[1]+(i+1)}`)
                    linha2X[i] = document.querySelector(`.r${posi[0]}c${posi[1]-(i+1)}`)
                }
            let linha1_Y = linha1Y.filter(conteudo =>{
                    return conteudo != null
            })
            let linha2_Y = linha2Y.filter(conteudo =>{
                    return conteudo != null
            })
            let linha1_X = linha1X.filter(conteudo =>{
                    return conteudo != null
            })
            let linha2_X = linha2X.filter(conteudo =>{
                    return conteudo != null
            })
            //red
            cod.classList.add('red')  
            let auxx1T=-1
            let auxx2T=-1
            let auxx3T=-1
            let auxx4T=-1
                                                    //linha1Y
            linha1_Y.map(conteudo =>{
                auxx1T++
                conteudo.classList.add('blue')
                if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                    if(conteudo.classList[2] != cod.classList[2]){
                        linha1_Y.splice(auxx1T+1)
                        conteudo.classList.remove('blue')
                        //orange
                        let a = conteudo.className.slice(4)
                        conteudo.className = conteudo.className.slice(0,4)
                        conteudo.classList.add('orange')
                        conteudo.className += a
                        auxx1T = -1    
                    }
                    else{
                        linha1_Y.splice(auxx1T)
                        conteudo.classList.remove('blue')
                        auxx1T = -1
                    }
                }   
                return conteudo && auxx1T   
            })    
                                                    //linha2Y
            linha2_Y.map(conteudo =>{
                auxx2T++
                conteudo.classList.add('blue')
                if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                    if(conteudo.classList[2] != cod.classList[2]){
                        linha2_Y.splice(auxx2T+1)
                        conteudo.classList.remove('blue')
                        //orange
                        let a = conteudo.className.slice(4)
                        conteudo.className = conteudo.className.slice(0,4)
                        conteudo.classList.add('orange')
                        conteudo.className += a
                        auxx2T = -1    
                    }
                    else{
                        linha2_Y.splice(auxx2T)
                        conteudo.classList.remove('blue')
                        auxx2T = -1
                    }
                }   
                return conteudo && auxx2T           
            })
                                                    //linha1X     
            linha1_X.map(conteudo =>{
                auxx3T++
                conteudo.classList.add('blue')
                if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                    if(conteudo.classList[2] != cod.classList[2]){
                            linha1_X.splice(auxx3T+1)
                        conteudo.classList.remove('blue')
                        //orange
                        let a = conteudo.className.slice(4)
                        conteudo.className = conteudo.className.slice(0,4)
                        conteudo.classList.add('orange')
                        conteudo.className += a
                        auxx3T = -1    
                    }
                    else{
                        linha1_X.splice(auxx3T)
                        conteudo.classList.remove('blue')
                        auxx3T = -1
                    }
                }   
                return conteudo && auxx3T           
            })             
                                                    //linha2X
            linha2_X.map(conteudo =>{
                auxx4T++
                conteudo.classList.add('blue')
                if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                    if(conteudo.classList[2] != cod.classList[2]){
                            linha2_X.splice(auxx4T+1)
                        conteudo.classList.remove('blue')
                        //orange
                        let a = conteudo.className.slice(4)
                        conteudo.className = conteudo.className.slice(0,4)
                        conteudo.classList.add('orange')
                        conteudo.className += a
                        auxx4T = -1    
                    }
                    else{
                        linha2_X.splice(auxx4T)
                        conteudo.classList.remove('blue')
                        auxx4T = -1
                    }
                }   
                return conteudo && auxx4T           
            })
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
                        let linha1YW =[]
                        let linha2YW =[]
                        let linha1XW =[]
                        let linha2XW =[]
                        for(i=0;i<8;i++){
                            linha1YW[i] = document.querySelector(`.r${posiW[0]+(i+1)}c${posiW[1]}`) 
                            linha2YW[i] = document.querySelector(`.r${posiW[0]-(i+1)}c${posiW[1]}`)
                            linha1XW[i] = document.querySelector(`.r${posiW[0]}c${posiW[1]+(i+1)}`)
                            linha2XW[i] = document.querySelector(`.r${posiW[0]}c${posiW[1]-(i+1)}`)
                        }
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
                    let linha1_YW = linha1YW.filter(conteudo =>{
                            return conteudo != null
                    })
                    let linha2_YW = linha2YW.filter(conteudo =>{
                            return conteudo != null
                    })
                    let linha1_XW = linha1XW.filter(conteudo =>{
                            return conteudo != null
                    })
                    let linha2_XW = linha2XW.filter(conteudo =>{
                            return conteudo != null
                    })
                    //red
                    cod.classList.add('red')  
                    let auxx1WT=-1
                    let auxx2WT=-1
                    let auxx3WT=-1
                    let auxx4WT=-1
                                                            //linha1Y
                    linha1_YW.map(conteudo =>{
                        auxx1WT++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                linha1_YW.splice(auxx1WT+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx1WT = -1    
                            }
                            else{
                                linha1_YW.splice(auxx1WT)
                                conteudo.classList.remove('blue')
                                auxx1WT = -1
                            }
                        }   
                        return conteudo && auxx1WT   
                    })    
                                                            //linha2Y
                    linha2_YW.map(conteudo =>{
                        auxx2WT++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                linha2_YW.splice(auxx2WT+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx2WT = -1    
                            }
                            else{
                                linha2_YW.splice(auxx2WT)
                                conteudo.classList.remove('blue')
                                auxx2WT = -1
                            }
                        }   
                        return conteudo && auxx2WT           
                    })
                                                            //linha1X     
                    linha1_XW.map(conteudo =>{
                        auxx3WT++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                    linha1_XW.splice(auxx3WT+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx3WT = -1    
                            }
                            else{
                                linha1_XW.splice(auxx3WT)
                                conteudo.classList.remove('blue')
                                auxx3WT = -1
                            }
                        }   
                        return conteudo && auxx3WT           
                    })             
                                                            //linha2X
                    linha2_XW.map(conteudo =>{
                        auxx4WT++
                        conteudo.classList.add('blue')
                        if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                            if(conteudo.classList[2] != cod.classList[2]){
                                    linha2_XW.splice(auxx4WT+1)
                                conteudo.classList.remove('blue')
                                //orange
                                let a = conteudo.className.slice(4)
                                conteudo.className = conteudo.className.slice(0,4)
                                conteudo.classList.add('orange')
                                conteudo.className += a
                                auxx4WT = -1    
                            }
                            else{
                                linha2_XW.splice(auxx4WT)
                                conteudo.classList.remove('blue')
                                auxx4WT = -1
                            }
                        }   
                        return conteudo && auxx4WT           
                    })
            break
                                                                                        //BISPO
            case 'bispo':
                let posiWB=[Number(cod.className.slice(1,2)),Number(cod.className.slice(3,4))]
                let linha1W =[]
                let linha2W =[]
                let linha3W =[]
                let linha4W =[]
                for(i=0;i<=8;i++){
                    linha1W[i] = document.querySelector(`.r${posiWB[0]+(i+1)}c${posiWB[1]-(i+1)}`)
                    linha2W[i] = document.querySelector(`.r${posiWB[0]+(i+1)}c${posiWB[1]+(i+1)}`)
                    linha3W[i] = document.querySelector(`.r${posiWB[0]-(i+1)}c${posiWB[1]-(i+1)}`)
                    linha4W[i] = document.querySelector(`.r${posiWB[0]-(i+1)}c${posiWB[1]+(i+1)}`)
                }
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

                let linha1_W = linha1W.filter(conteudo =>{
                        return conteudo != null
                })
                let linha2_W = linha2W.filter(conteudo =>{
                        return conteudo != null
                })
                let linha3_W = linha3W.filter(conteudo =>{
                        return conteudo != null
                })
                let linha4_W = linha4W.filter(conteudo =>{
                        return conteudo != null
                })
                //red
                cod.classList.add('red')  
                let auxx1B=-1
                let auxx2B=-1
                let auxx3B=-1
                let auxx4B=-1

                                                        //linha1
                linha1_W.map(conteudo =>{
                    auxx1B++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha1_W.splice(auxx1B+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx1B = -1    
                        }
                        else{
                            linha1_W.splice(auxx1B)
                            conteudo.classList.remove('blue')
                            auxx1B = -1
                        }
                    }   
                    return conteudo && auxx1B           
                })
                                                        //linha2
                linha2_W.map(conteudo =>{
                    auxx2B++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha2_W.splice(auxx2B+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx2B = -1    
                        }
                        else{
                            linha2_W.splice(auxx2B)
                            conteudo.classList.remove('blue')
                            auxx2B = -1
                        }
                    }   
                    return conteudo && auxx2B           
                })
                                                        //linha3          
                linha3_W.map(conteudo =>{
                    auxx3B++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha3_W.splice(auxx3B+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx3B = -1    
                        }
                        else{
                            linha3_W.splice(auxx3B)
                            conteudo.classList.remove('blue')
                            auxx3B = -1
                        }
                    }   
                    return conteudo && auxx3B         
                })             
                                                        //linha4
                linha4_W.map(conteudo =>{
                    auxx4B++
                    conteudo.classList.add('blue')
                    if(conteudo.classList[2] == cod.classList[2] || conteudo.classList[2] != cod.classList[2] && conteudo.classList[2] != undefined){
                        if(conteudo.classList[2] != cod.classList[2]){
                            linha4_W.splice(auxx4B+1)
                            conteudo.classList.remove('blue')
                            //orange
                            let a = conteudo.className.slice(4)
                            conteudo.className = conteudo.className.slice(0,4)
                            conteudo.classList.add('orange')
                            conteudo.className += a
                            auxx4B = -1    
                        }
                        else{
                            linha4_W.splice(auxx4B)
                            conteudo.classList.remove('blue')
                            auxx4B = -1
                        }
                    }   
                    return conteudo && auxx4B           
                })
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
    <div class='${chess[i][0]} peao white front step active' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][0]};" ></div>
    <div class='${chess[i][1]} peao white front step active' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][1]};"></div>
    <div class='${chess[i][2]} peao white front step active' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][2]};"></div>
    <div class='${chess[i][3]} peao white front step active' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][3]};"></div>
    <div class='${chess[i][4]} peao white front step active' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][4]};"></div>
    <div class='${chess[i][5]} peao white front step active' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][5]};"></div>
    <div class='${chess[i][6]} peao white front step active' onclick="aux(this)" style="background-color: #9670FF; grid-area:${chess[i][6]};"></div>
    <div class='${chess[i][7]} peao white front step active' onclick="aux(this)" style="background-color: #392B61; grid-area:${chess[i][7]};"></div>
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
                <div class='${chess[i][0]} torre white active' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][0]};" ></div>
                <div class='${chess[i][1]} cavalo white active' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][1]};"></div>
                <div class='${chess[i][2]} bispo white active' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][2]};"></div>
                <div class='${chess[i][3]} queen white active' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][3]};"></div>
                <div class='${chess[i][4]} king white active' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][4]};"></div>
                <div class='${chess[i][5]} bispo white active' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][5]};"></div>
                <div class='${chess[i][6]} cavalo white active' onclick="aux(this)" style="background-color: #392B61; position:relative; grid-area:${chess[i][6]};"></div>
                <div class='${chess[i][7]} torre white active' onclick="aux(this)" style="background-color: #9670FF; position:relative; grid-area:${chess[i][7]};"></div>
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