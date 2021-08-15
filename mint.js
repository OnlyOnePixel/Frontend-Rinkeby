var PROVIDER, SIGNER, CONTRACT;
var CONTRACT_ADDRESS = "0x93f5813b47F02157CF53B3a294746c95F6098948";

async function mint(){
	await ethereum.request( {method:"eth_requestAccounts"} );
	PROVIDER = new ethers.providers.Web3Provider( window.ethereum )
    SIGNER = PROVIDER.getSigner()
    let ABI = await fetch( "assets/abi/OnePixel.json" ).then( e=>e.json() )
    CONTRACT = new ethers.Contract( CONTRACT_ADDRESS, ABI,  SIGNER);
    let amount = parseInt(document.getElementById("InputAmount").value)
    await CONTRACT.bulkBuy(amount, {value:String(amount * 50000000000000000), gasLimit: 2000000})
}