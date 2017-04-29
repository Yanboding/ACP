/**
 * Utility functions for this project.
 */

export default {
	/**
	 * Fetch a JSON object from back end, specified by api_path and the
	 * resulting JSON object will be sent via a consumer callback function.
	 */
	fetchJSON(api_path, callback) {
		console.log("[Utils.js]: fetching json from api")
		fetch(
			api_path
		).then( (res) => {
			console.log('[Utils.js]: returned from api')
			if (res.ok) {
				res.json().then( (data) => {
					callback(data)
				})
			} else {
				console.log('[Utils.js]: error, cannot get')
			}
		}, (err) => console.log('[Utils.js]: error, fetch failed'))
	},

	/**
	 * Fetch a JSON object from back end, specified by api_path and the
	 * resulting JSON object will be sent via a consumer callback function.
	 */
	sendJSON(api_path, json, callback) {
		console.log("[Utils.js]: sending json from api");
		
		let cb;
		if (callback) {
			cb = (data) => callback(data)
		} else {
			cb = (data) => console.log("[Utils.js]: noting to do for this sending")
		}
		
		fetch(api_path, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(json)
		}).then( (res) => {
			console.log('[Utils.js]: returned from api')
			if (res.ok) {
				res.json().then( (data) => {
					cb(data)
				})
			} else {
				console.log('[Utils.js]: error, cannot get')
			}
		}, (err) => console.log('[Utils.js]: error, fetch failed'))
	},

	/**
	 * Sleep for given amount of milliseconds
	 */
    sleeping(milliseconds) {
      	var start = new Date().getTime();
      	for (var i = 0; i < 1e7; i++) {
        	if ((new Date().getTime() - start) > milliseconds){
          		break;
        	}
      	}
    },

	UpdateJSON(api_path, json, callback) {
		console.log("[Utils.js]: sending json from api")

		let cb;
		if (callback) {
			cb = (data) => callback(data)
		} else {
			cb = (data) => console.log("[Utils.js]: noting to do for this sending")
		}

		fetch(api_path, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(json)
		}).then( (res) => {
			console.log('[Utils.js]: returned from api')
			if (res.ok) {
				res.json().then( (data) => {
					cb(data)
				})
			} else {
				console.log('[Utils.js]: error, cannot get')
			}
		}, (err) => console.log('[Utils.js]: error, fetch failed'))
	}
}