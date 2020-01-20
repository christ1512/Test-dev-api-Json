
module.exports = {

    palabra:(req,res)=>{

        const {palabra,limite}= req.params
        let arrayPalabra=palabra.split("")
        let contador=0
        let letra=arrayPalabra[0]
        let newArray=[]

        for(let i=0;i<arrayPalabra.length;i++){
            if(arrayPalabra[i]==letra){
                contador++
                if(contador<=limite){
                    newArray.push(arrayPalabra[i])
                }
            }else{
                letra=arrayPalabra[i]
                contador=1
                newArray.push(arrayPalabra[i])
            }
        }
        
        
        

        res.status(200).json({message:'palabra',arrayPalabra,limite,newArray})
    },

    moda:(req,res)=>{

        let {numeros}=req.params
        let arrayNumeros=numeros.split(",")
        let frecuencia=[]
        let contador=0
        let numero=0
        

        for(let i=0;i<arrayNumeros.length;i++){
                for(let x=0;x<arrayNumeros.length;x++){

                   
                  if(arrayNumeros[i]==arrayNumeros[x]){
                      contador++
                      numero=arrayNumeros[i]
                  }
                  
                }

                
                    frecuencia.push({numero:numero,repeticion:contador})
                
                

                contador=0
                
        }
        
        let lista=frecuencia.map(x=>rep=x.repeticion)
      
        let mayor = Math.max(...lista)
        
        let moda= frecuencia.filter(x=>x.repeticion==mayor)
        const Moda=[... new Set(moda.map(x=>x.numero))]

        res.status(200).json({message:'moda',arrayNumeros,Moda})
    }
}