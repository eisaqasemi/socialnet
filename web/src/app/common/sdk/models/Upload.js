/* tslint:disable */
var Upload = (function () {
    function Upload(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Upload`.
     */
    Upload.getModelName = function () {
        return "Upload";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Upload for dynamic purposes.
    **/
    Upload.factory = function (data) {
        return new Upload(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Upload.getModelDefinition = function () {
        return {
            name: 'Upload',
            plural: 'Uploads',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Upload;
}());
export { Upload };
//# sourceMappingURL=Upload.js.map