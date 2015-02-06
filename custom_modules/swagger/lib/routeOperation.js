"use strict";

var fs = require('fs');

//Usage: obj.getDir('../').list
function RouteOperation() {
    var _this = {};

    //Get Directory List
    _this.getDir = function (dirPath) {
        var dirName = dirPath;
        var data = fs.readdirSync(dirName);
        data.forEach(function (dta) {
            var path = dirName + '/' + dta;
            if (fs.lstatSync(path).isDirectory()) {
                _this.getDir(path);
            } else {
                _this.getDir.list.push(path);
            }
        });
        return _this.getDir;
    };
    _this.getDir.list = [];

    return _this;
}
exports = model.exports = RouteOperation;

/*var obj = RouteOperation();
//obj.getDir('../').list;
console.log(obj.getDir('../').list);*/
