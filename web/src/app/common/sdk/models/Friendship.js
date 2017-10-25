var Friendship = (function () {
    function Friendship(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Friendship`.
     */
    Friendship.getModelName = function () {
        return "Friendship";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Friendship for dynamic purposes.
    **/
    Friendship.factory = function (data) {
        return new Friendship(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Friendship.getModelDefinition = function () {
        return {
            name: 'Friendship',
            plural: 'Friendships',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "socialNetUserId": {
                    name: 'socialNetUserId',
                    type: 'number'
                },
                "friendId": {
                    name: 'friendId',
                    type: 'number'
                },
            },
            relations: {
                socialNetUser: {
                    name: 'socialNetUser',
                    type: 'SocialNetUser',
                    model: 'SocialNetUser'
                },
                friend: {
                    name: 'friend',
                    type: 'SocialNetUser',
                    model: 'SocialNetUser'
                },
            }
        };
    };
    return Friendship;
}());
export { Friendship };
//# sourceMappingURL=Friendship.js.map