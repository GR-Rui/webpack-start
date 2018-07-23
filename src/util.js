export default function getData() {
    return new Promise((resolve, reject) => {
    	console.log(111);
        resolve('ok');
    })
}