var SocialNetUser = (function () {
    function SocialNetUser(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `SocialNetUser`.
     */
    SocialNetUser.getModelName = function () {
        return "SocialNetUser";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of SocialNetUser for dynamic purposes.
    **/
    SocialNetUser.factory = function (data) {
        return new SocialNetUser(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    SocialNetUser.getModelDefinition = function () {
        return {
            name: 'SocialNetUser',
            plural: 'SocialNetUsers',
            properties: {
                "firstName": {
                    name: 'firstName',
                    type: 'string'
                },
                "lastName": {
                    name: 'lastName',
                    type: 'string'
                },
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
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
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: ''
                },
                albums: {
                    name: 'albums',
                    type: 'Album[]',
                    model: 'Album'
                },
                friends: {
                    name: 'friends',
                    type: 'SocialNetUser[]',
                    model: 'SocialNetUser'
                },
            }
        };
    };
    return SocialNetUser;
}());
export { SocialNetUser };
//# sourceMappingURL=SocialNetUser.js.map