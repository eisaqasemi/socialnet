var Message = (function () {
    function Message(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Message`.
     */
    Message.getModelName = function () {
        return "Message";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Message for dynamic purposes.
    **/
    Message.factory = function (data) {
        return new Message(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Message.getModelDefinition = function () {
        return {
            name: 'Message',
            plural: 'Messages',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "senderId": {
                    name: 'senderId',
                    type: 'number'
                },
                "reciever": {
                    name: 'reciever',
                    type: 'number'
                },
                "photoId": {
                    name: 'photoId',
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
                sender: {
                    name: 'sender',
                    type: 'SocialNetUser',
                    model: 'SocialNetUser'
                },
                socialNetUser: {
                    name: 'socialNetUser',
                    type: 'SocialNetUser',
                    model: 'SocialNetUser'
                },
                photo: {
                    name: 'photo',
                    type: 'Photo',
                    model: 'Photo'
                },
            }
        };
    };
    return Message;
}());
export { Message };
//# sourceMappingURL=Message.js.map