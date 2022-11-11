import auth0 from 'auth0-js';
import {promisify} from 'es6-promisify';

export default class Auth {
    constructor({domain, clientID, audience}) {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.domain = domain;
        this.clientID = clientID;

        this.auth0 = new auth0.WebAuth({
            domain,
            clientID,
            redirectUri: `${window.location.origin}/callback`,
            audience,
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    }

    handleAuthentication(cb) {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                cb(null);
            } else if (err) {
                cb(err);
                console.log(err);
            }
        });
    }

    getUserInfo(cb) {
        this.auth0.client.userInfo(localStorage.getItem('access_token'), cb);
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        window.location.replace(`https://${this.domain}/v2/logout?returnTo=${window.location.origin}`);
    }

    login() {
        this.auth0.authorize();
    }

    async isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        if (new Date().getTime() < expiresAt) {
            return true;
        } else {
            // We might have an SSO session elsewhere, if so, check:

            // Promisify checkSession and assign to original context:
            this.auth0.checkSessionPromise = promisify(this.auth0.checkSession);

            return this.auth0.checkSessionPromise({}).then((authResult) => {
                this.setSession(authResult);
                return true;
            }).catch((err) => {
                console.log(err);
                this.auth0.authorize();
                return false;
            });
        }
    }
}
