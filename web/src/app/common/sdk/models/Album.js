var Album = (function () {
    function Album(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Album`.
     */
    Album.getModelName = function () {
        return "Album";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Album for dynamic purposes.
    **/
    Album.factory = function (data) {
        return new Album(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Album.getModelDefinition = function () {
        return {
            name: 'Album',
            plural: 'Albums',
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
                "socialNetUserId": {
                    name: 'socialNetUserId',
                    type: 'number'
                },
                "userId": {
                    name: 'userId',
                    type: 'number'
                },
            },
            relations: {
                photos: {
                    name: 'photos',
                    type: 'Photo[]',
                    model: 'Photo'
                },
                user: {
                    name: 'user',
                    type: 'SocialNetUser',
                    model: 'SocialNetUser'
                },
            }
        };
    };
    return Album;
}());
export { Album };
//# sourceMappingURL=Album.js.map