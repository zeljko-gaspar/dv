// import accounts from './accounts';
// import database from './database';
// import animations from './animations'
// import main from './main';

class API {
    static getAllData(){
        return new Promise((resolve, reject) => {
            let xml = new XMLHttpRequest();
            xml.open('GET', 'https://dv.zeljko-gaspar.com/api/data.json');
            xml.onreadystatechange = function(){
                if(xml.readyState === 4 && xml.status === 200) {
                    resolve(JSON.parse(xml.responseText))
                }
            }
            xml.send();
        })
    }
    static oneProduct(productId){
        return new Promise((resolve, reject) => {
            let xml = new XMLHttpRequest();
            xml.open('GET', 'https://dummyjson.com/products/'+productId);
            // xml.open('GET', 'https://dv.zeljko-gaspar.com/api/data.json');
            xml.onreadystatechange = function(){
                if(xml.readyState === 4 && xml.status === 200) {
                    resolve(JSON.parse(xml.responseText))
                }
            }
            xml.send();
        })
    }
}

// export default api;