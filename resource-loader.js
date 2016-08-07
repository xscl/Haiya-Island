var resourceLoader = (function() {
    function getPromise(paths, callback, time, percent) {
        var map = {};
        for (var i = 0; i< paths.length; i++) {
            map[paths[i]] = false;
        }
        var count = 0;
        var fakePercent = 0;
        var it = setInterval(function() {
            fakePercent++;
            if (fakePercent > percent) {
                fakePercent = percent;
                clearInterval(it);
            }
            if (count >= paths.length) {
                callback(true, count, paths.length, map, 100, fakePercent);
                clearInterval(it);
            }
            else {
                callback(false, count, paths.length, map, parseInt((count / paths.length) * (100 - percent)) + fakePercent, fakePercent);
            }
        }, time / percent);
        return function (path) {
            map[path] = true;
            count ++;
            var flag = true;
            for (var key in map) {
                if (map[key] === false) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                callback(true, count, paths.length, map, parseInt((count / paths.length) * (100 - percent)) + fakePercent, fakePercent);
            }
            else {
                callback(false, count, paths.length, path, parseInt((count / paths.length) * (100 - percent)) + fakePercent, fakePercent);
            }
        }
    }
    return {
        loadImage: function (path, promise) {
            $('<img/>').on('load', function () {
                promise(path);
            }).attr('src', path);
        },
        loadImages: function (paths, callback, time, percent, prefix) {
            prefix = prefix || '';
            var promise = getPromise(paths, callback, time, percent);
            for (var i = 0; i< paths.length; i++) {
                this.loadImage(prefix + paths[i], promise);
            }
        }
    };
})();
