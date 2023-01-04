export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "D0263479-76FB-455E-8174-785B8A067B7D";
   
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
   } 