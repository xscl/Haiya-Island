/**
 * Created by ckyang on 16/8/7.
 */
var pointExport = ( function () {
    var points = ("point1 point4 point5 point7 point8-l point8-h point9-h point9-l point9 point10-l point10-h point11 point12 point13 point13-l point13-h " +
        "point14-h point14-l point15 point17 point19 point20-l point20-h point21-h point21-l point22 point23 point25 point25-l point25-h point26-h point26-l " +
        "point28 point29 point30").split(' ');
    var pointsIndex = {};
    for (var i = 0; i< points.length; i++) {
        pointsIndex[points[i]] = i;
    }

    return {
        exportPointsLocation: function () {
            return {
                "point1": {left: 78, top: 320},
                "point4": {left: 395, top: 320},
                "point5": {left: 506, top: 320},
                "point7": {left: 506, top: 470},
                "point8-l": {left: 446, top: 470},
                "point8-h": {left: 446, top: 448},
                "point9-h": {left: 343, top: 448},
                "point9-l": {left: 343, top: 470},
                "point9": {left: 295, top: 470},
                "point10-l": {left: 140, top: 475},
                "point10-h": {left: 140, top: 448},
                "point11": {left: 75, top: 448},
                "point12": {left: 75, top: 520},
                "point13": {left: 75, top: 595},
                "point13-l": {left: 130, top: 595},
                "point13-h": {left: 130, top: 575},
                "point14-h": {left: 223, top: 575},
                "point14-l": {left: 223, top: 585},
                "point15": {left: 285, top: 585},
                "point17": {left: 505, top: 585},
                "point19": {left: 505, top: 730},
                "point20-l": {left: 398, top: 730},
                "point20-h": {left: 398, top: 710},
                "point21-h": {left: 228, top: 710},
                "point21-l": {left: 228, top: 730},
                "point22": {left: 195, top: 730},
                "point23": {left: 75, top: 730},
                "point25": {left: 75, top: 878},
                "point25-l": {left: 135, top: 878},
                "point25-h": {left: 135, top: 850},
                "point26-h": {left: 240, top: 850},
                "point26-l": {left: 240, top: 872},
                "point28": {left: 396, top: 872},
                "point29": {left: 505, top: 872},
                "point30": {left: 490, top: 990}
            }
        },

        getPoints: function (startPointName,endPointName) {
            var p1 = pointsIndex[startPointName];
            var p2 = pointsIndex[endPointName];
            var small = Math.min(p1, p2);
            var big = p1 + p2 - small;
            var ary = points.slice(small,big+1);
            if (p1 > p2) {
                ary = ary.reverse();
            }
            return ary;
        }
    }
})();


// var array = pointExport.getPoints("point28","point19")
// var array = pointExport.getPoints("point19","point28");

// console.log(array);