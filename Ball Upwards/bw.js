function maxBall(v0) {
    let t = 0;
    while (true) {
        t += 0.1;
        let h = calcHeight(v0, t).toFixed(3), nextH = calcHeight(v0, t + 0.1).toFixed(3);
        console.log(h,nextH);
        if (nextH - h <= 0) {
            return Math.round(t * 10);
        }
    }
    function calcHeight(v0,t) {
        return v0*1000/3600*t - 0.5*9.81*t*t;
    }
}

console.log(maxBall(37));