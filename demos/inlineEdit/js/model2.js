(function ($, fluid) {
    fluid.registerNamespace("tutorials");

    fluid.defaults("tutorials.currencyConverter", {

    });

    var promiseTwo = fluid.toPromise(2);
    var double = function (value) {
        return value * 2;
    };
    var promiseFour = fluid.promise.map(promiseTwo, double);

    console.log(promiseTwo);
    console.log(promiseFour);
    console.log(double(2));

})(jQuery, fluid_2_0_0);