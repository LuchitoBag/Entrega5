

const productos=[

    {id:1, name:"Remera Penguin",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/144102513_235586961473944_3046347032099697614_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=uCCkCq_1h6UAX8gpbOk&_nc_ht=scontent.fcor2-2.fna&oh=b71df4a55668e91a50631d1d1fdc87fb&oe=6164E5DC"},
    {id:2, name:"Remera Lacoste",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/145204125_237455387953768_6709928529960162273_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=AsRmZYVl2_IAX9Hmonh&tn=Z14wTvK2VbuUp9Dv&_nc_ht=scontent.fcor2-2.fna&oh=b7e69f76c7870e118ce13cee8692d2f4&oe=616318BC"},
    {id:3, name:"Buzo Tommy Hilfiger",picture:"https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/143498300_234299764935997_6281457520752145481_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=wM03ZCyqa0MAX-X-SSF&tn=Z14wTvK2VbuUp9Dv&_nc_ht=scontent.fcor2-2.fna&oh=0d00deef009b5aed23e9dcb026727089&oe=61665E32"},
    ]

   export const getFetch = new Promise((resolve, reject) => {


        let respuesta = "200"
        if (respuesta === "200"){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject("404")
        }
    })
    
    
  