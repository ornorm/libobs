/** @babel */

export class Observer {

    constructor({update=null}={}) {
        if (update) {
            this.update = update;
        }
    }

    update(o, arg) {

    }
}

export class Observable {

    constructor() {
        this.obs = [];
        this.changed = false;
    }

    addObserver(o) {
        if (!o) {
            throw new ReferenceError("NullPointerException");
        }
        if (this.obs.indexOf(o) === -1) {
            this.obs.push(o);
        }
    }

    clearChanged() {
        this.changed = false;
    }

    countObservers() {
        return this.obs.length;
    }

    deleteObserver(o) {
        let index = this.obs.indexOf(o);
        if (index !== -1) {
            this.obs.splice(index, 1);
        }
    }

    deleteObservers() {
        this.obs = [];
    }

    hasChanged() {
        return this.changed;
    }

    notifyObservers(arg) {
        if (this.hasChanged()) {
            this.clearChanged();
            let arrLocal = [].concat(this.obs);
            let len = arrLocal.length;
            while (len--) {
                let o = arrLocal[len];
                if (o) {
                    o.update(this, arg);
                }
            }
            this.clearChanged();
        }
    }

    setChanged() {
        this.changed = true;
    }
}
