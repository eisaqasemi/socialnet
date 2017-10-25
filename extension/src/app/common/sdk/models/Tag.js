var Tag = (function () {
    function Tag(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Tag`.
     */
    Tag.getModelName = function () {
        return "Tag";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Tag for dynamic purposes.
    **/
    Tag.factory = function (data) {
        return new Tag(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Tag.getModelDefinition = function () {
        return {
            name: 'Tag',
            plural: 'Tags',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {
                photos: {
                    name: 'photos',
                    type: 'Photo[]',
                    model: 'Photo'
                },
            }
        };
    };
    return Tag;
}());
export { Tag };
//# sourceMappingURL=Tag.js.map