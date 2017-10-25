import { FireLoopRef } from './index';
var FireLoop = (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new FireLoopRef(model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());
export { FireLoop };
//# sourceMappingURL=FireLoop.js.map