(function($, window, undefined) {
    var lastTime = 0,
        running, animate = function(elem) {
            if (running) {
                window.requestAnimationFrame(animate, elem);
                jQuery.fx.tick()
            }
        },
        vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0, len = vendors.length; x < len && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(fn, element) {
            var currTime = new Date().getTime(),
                delta = currTime - lastTime,
                timeToCall = Math.max(0, 16 - delta);
            var id = window.setTimeout(function() {
                fn(currTime + timeToCall)
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        };
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id)
        }
    }
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer) && !running) {
            running = !0;
            animate(timer.elem)
        }
    };
    jQuery.fx.stop = function() {
        running = !1
    }
}(jQuery, this))