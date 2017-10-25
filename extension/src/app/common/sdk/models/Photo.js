var Photo = (function () {
    function Photo(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Photo`.
     */
    Photo.getModelName = function () {
        return "Photo";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Photo for dynamic purposes.
    **/
    Photo.factory = function (data) {
        return new Photo(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Photo.getModelDefinition = function () {
        return {
            name: 'Photo',
            plural: 'Photos',
            properties: {
                "url": {
                    name: 'url',
                    type: 'string'
                },
                "title": {
                    name: 'title',
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
                "albumId": {
                    name: 'albumId',
                    type: 'number'
                },
            },
            relations: {
                album: {
                    name: 'album',
                    type: 'Album',
                    model: 'Album'
                },
                tags: {
                    name: 'tags',
                    type: 'Tag[]',
                    model: 'Tag'
                },
            }
        };
    };
    return Photo;
}());
export { Photo };
//# sourceMappingURL=Photo.js.map