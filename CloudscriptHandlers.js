handlers.ExecuteFunctionPassthrough = function (args, context) {
    var entityToken = GetEntityToken("somesecretkeyhere")
    var headers = {
        "X-EntityToken": entityToken
    }
    
    var body = {
        FunctionParameter : args.FunctionParameter,
        Entity : context.currentEntity,
        FunctionName : args.FunctionName
    }
    var title = "valid_title"
    var url = "https://" + title + ".playfabapi.com/CloudScript/ExecuteFunction"
    var content = JSON.stringify(body);
    var httpMethod = "post";
    var contentType = "application/json";


    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return { responseContent: response };
};

function GetEntityToken(secretKey) {
    var headers = {
        "X-SecretKey": secretKey
    }
    
    var body = {
    }
    var url = "https://E2054.playfabapi.com/Authentication/GetEntityToken"
    var content = JSON.stringify(body);
    var httpMethod = "post";
    var contentType = "application/json";


    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers)

    
    return JSON.parse(response).data.EntityToken
}
