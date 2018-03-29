function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let counter = -1;
        let newHeight = h;
        while(newHeight > window){
            newHeight *=  bounce;
            counter += 2;
        }
        return counter;
    }
    return -1
}

console.log(bouncingBall(3.0, 0.1, 1.5));