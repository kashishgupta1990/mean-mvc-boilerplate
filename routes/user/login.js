var sw = require("swagger-node-express");
var paramTypes = sw.paramTypes;
var url = require("url");
var swe = sw.errors;
var action = {
    user: require("../controllers/UserController")
};

//Refer: https://github.com/swagger-api/swagger-node-express
exports = module.exports = [
    {
        'spec': {
            path: "/user",
            description: "Operations about user",
            method: "GET",
            summary: "Get all users information",
            notes: "Returns all user information",
            type: "User",
            nickname: "getAllUser",
            produces: ["application/json"]
        },
        'action': action.getUserInfo
    }
];
