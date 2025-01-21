/**
 * Rules implement singlenton:
 *  1. Make the constructor private
 *  2. Create a static method who calls the private
 *      constructor and save the instance in a static variable
 */
var SinglentonTS = /** @class */ (function () {
    function SinglentonTS(version) {
        this.version = version;
    }
    SinglentonTS.getInstance = function (version) {
        if (!SinglentonTS.instance) {
            SinglentonTS.instance = new SinglentonTS(version);
        }
        return SinglentonTS.instance;
    };
    return SinglentonTS;
}());
function appSinglentonTS() {
    var singlenton1 = SinglentonTS.getInstance('version-1');
    var singlenton2 = SinglentonTS.getInstance('version-2');
    /**
     * I can't instace with new the class Singlento since the constructor is private
     * const singlenton3 = new SinglentonTS();
     *
    */
    console.log(singlenton1 === singlenton2);
}
appSinglentonTS();
