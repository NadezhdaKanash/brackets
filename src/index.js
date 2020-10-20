module.exports = function check(str, bracketsConfig) {

    if(str.length % 2 != 0) return false;

    let resStr = str;

    for(let i = 1; i <= str.length/2; i++) {
        if(resStr.length == 0) break;
        bracketsConfig.forEach(function(item) {
            if(resStr.length == 0) return;
            let target = item.join('');

            while (true) {
                let foundPos = resStr.indexOf(target);
                if(foundPos == -1) break;
                resStr = resStr.substring(0,foundPos) + resStr.substring(foundPos + 2,resStr.length);
                if(resStr.length == 0) break;
            }
        });
    }

    return resStr.length > 0 ? false : true;
}
