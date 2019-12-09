import React from 'react';

class Contact {
    constructor(name, fromm, till, desc) {
        this.name = name;
        this.fromm = fromm;
        this.till = till;
        this.desc = desc;
    }

    toString() {
        return (
            "Name:" + this.name +
            "From:" + this.fromm +
            "Till:" + this.till +
            "Description:" + this.desc
        );
    }
}

export default Contact;