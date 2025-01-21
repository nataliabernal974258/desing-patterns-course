
/**
 * Rules implement singlenton:
 *  1. Make the constructor private
 *  2. Create a static method who calls the private
 *      constructor and save the instance in a static variable
 */


class Singlenton {
    static instance = undefined;

    constructor(version) {
        this.version = version;   
    }

    static getInstance(version) { 
        if (!Singlenton.instance) { 
            Singlenton.instance = new Singlenton(version);
        }
        return Singlenton.instance;
    }
}
function appSinglenton() { 
    const singlenton1 = Singlenton.getInstance('version-1');
    const singlenton2 = Singlenton.getInstance('version-2');

    console.log(singlenton1 === singlenton2);
}

appSinglenton();