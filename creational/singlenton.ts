
/**
 * Rules implement singlenton:
 *  1. Make the constructor private
 *  2. Create a static method who calls the private
 *      constructor and save the instance in a static variable
 */

class SinglentonTS {

    private static instance: SinglentonTS;
    private version: string;

    private constructor(version: string) {
        this.version = version;
    }

    static getInstance(version: string): SinglentonTS {
        if (!SinglentonTS.instance) { 
            SinglentonTS.instance = new SinglentonTS(version);
        }
        return SinglentonTS.instance;
     }
}

function appSinglentonTS() {
    const singlenton1 = SinglentonTS.getInstance('version-1');
    const singlenton2 = SinglentonTS.getInstance('version-2');
    /**
     * I can't instace with new the class Singlento since the constructor is private
     * const singlenton3 = new SinglentonTS();
     *  
    */

    console.log(singlenton1 === singlenton2);

}

appSinglentonTS();