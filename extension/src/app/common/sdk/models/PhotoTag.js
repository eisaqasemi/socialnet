var PhotoTag = (function () {
    function PhotoTag(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PhotoTag`.
     */
    PhotoTag.getModelName = function () {
        return "PhotoTag";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PhotoTag for dynamic purposes.
    **/
    PhotoTag.factory = function (data) {
        return new PhotoTag(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PhotoTag.getModelDefinition = function () {
        return {
            name: 'PhotoTag',
            plural: 'PhotoTags',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "photoId": {
                    name: 'photoId',
                    type: 'number'
                },
                "tagId": {
                    name: 'tagId',
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
                photo: {
                    name: 'photo',
                    type: 'Photo',
                    model: 'Photo'
                },
                tag: {
                    name: 'tag',
                    type: 'Tag',
                    model: 'Tag'
                },
            }
        };
    };
    return PhotoTag;
}());
export { PhotoTag };
//# sourceMappingURL=PhotoTag.js.map