/**
 * Created by hp on 2018/2/1.
 */

define(function(require,exports,module){

    var util = {};                    //自建模块
    var util2 = require('./util');   //引入其他模块

    var colorRange = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    util.randomColor = function(){
        return '#' +
            colorRange[Math.floor(Math.random() * 16)] +
            colorRange[Math.floor(Math.random() * 16)] +
            colorRange[Math.floor(Math.random() * 16)] +
            colorRange[Math.floor(Math.random() * 16)] +
            colorRange[Math.floor(Math.random() * 16)] +
            colorRange[Math.floor(Math.random() * 16)];
    };

    module.exports = util;  //外部可调用的方法
});
