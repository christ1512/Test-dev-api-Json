


module.exports={
    formatData: (data)=>{

        let datos=[]

        data.forEach(x => {
            if(x!=0){
                datos.push(x)
            }
        })

        return datos

    }

}