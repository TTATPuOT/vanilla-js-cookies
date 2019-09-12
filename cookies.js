class Cookies {
    set(name, value, options = {}) {
        options = {
            path: '/', //You can add yourself other default options
            ...options
        };

        if (options.expires === undefined) {
            options.expires = new Date();
            options.expires.setDate(options.expires.getDate() + 30); //By default, cookies saves for 30 days
        }
        if (options.expires.toUTCString) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (const key in options) {
            updatedCookie += "; " + key;
            const optionValue = options[key];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
        console.log(document.cookie);
    };

    get(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    delete(name) {
        this.set(name, "", {
            'max-age': -1,
            'expires': new Date()
        })
    };
}