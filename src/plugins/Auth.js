var AuthPlugin = {
	setToken: function (token, expiration) {
		localStorage.setItem('authToken', token);
		localStorage.setItem('authTokenExpiration', expiration);
	},
	
	setUserType: function (userType) {
		localStorage.setItem('userType', userType);
	},

	setProfile: function (profile) {
		localStorage.setItem('profile', JSON.stringify(profile));
	},

	destroyToken: function () {
		localStorage.removeItem('user');
		localStorage.removeItem('authToken');
		localStorage.removeItem('profile');
		localStorage.removeItem('authTokenExpiration');
	},

	getToken: function () {
		var token = localStorage.getItem('authToken');
		var expiration = localStorage.getItem('authTokenExpiration');

		if (!token || !expiration)
			return null;

		if (Date.now() > parseInt(expiration)) {
			this.destroyToken();
			return null;
		} else {
			return token;
		}
	},

	getUserType: function () {
		var userType = localStorage.getItem('userType');
		
		return userType;
	},

	getProfile: function () {
		var profile = JSON.parse(localStorage.getItem('profile'));
		
		return profile;
	},

	loggedIn: function () {
		if (this.getToken())
			return true;
		else
			return false;
	}
};

export default function(Vue) {
	Vue.auth = AuthPlugin;

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: function() {
				return Vue.auth;
			}
		}
	})
}