import EncryptedStorage from 'react-native-encrypted-storage';

export const getItemFromStorage=(key:any)=>{
    return new Promise((resolve,reject)=>{
        EncryptedStorage.getItem(key).then((response)=>{
            resolve(response)
        }).catch(error=>reject(error))
    })
}

export const setItemInStorage=(key:any,data:any)=>{
    return new Promise((resolve,reject)=>{
        EncryptedStorage.setItem(key,data).then((response)=>{
            resolve(response)
        }).catch(error=>reject(error))
    })
}