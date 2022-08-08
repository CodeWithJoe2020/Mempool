const { ethers } = require("ethers");

const provider = new ethers.providers.WebSocketProvider("wss://ws-nd-455-693-912.p2pify.com/ab870a782db1a62584325ff3edecb044");
//const toPCS = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

async function mempool(){
    provider.on("pending", async(tx)=>{
        const txInfo = await provider.getTransaction(tx);
        try{
          console.log(ethers.utils.formatEther(txInfo.gasLimit))
            
        }
        catch{
            console.log("no data to show")
        }
        
    })
}

mempool()
