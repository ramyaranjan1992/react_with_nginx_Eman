export function formDropdownTransform(valuesList, placeHolder){
    let returnListOfObj=[{key:"0",value:{code:'0',description:placeHolder}}]

    valuesList.map((value, index)=>{
        returnListOfObj.push({key:`${index+1}`,value:value})
        
    })
    return returnListOfObj
}


export function formBankDropdownTransform(valuesList, placeHolder){
    let returnListOfObj=[{key:"0",value:{code:'NA', description:placeHolder}}]

    valuesList.filter(value=>value.netbankFlag==='Active').map((value, index)=>{
        returnListOfObj.push({key:`${index+1}`,value:{code:value.bankId, description:value.bankName}})
        
    })
    return returnListOfObj
}