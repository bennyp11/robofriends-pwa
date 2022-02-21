export default function registerServiceWorker()
{
	 if('serviceWorker' in navigator) {
		navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).then(function(register){
			console.log("worked", register);
		}).catch(function(err){
			console.log("error!")
		});
	}
}