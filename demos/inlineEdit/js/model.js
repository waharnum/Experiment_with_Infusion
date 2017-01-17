(function ($, fluid) {
    fluid.registerNamespace("model");

    fluid.defaults("model.converter", {
        gradeNames: ["fluid.modelComponent"],
        model: {
            rates: {
                euro: 0.712,
                yen: 81.841,
                yuan: 6.609,
                usd: 1.02,
                rupee: 45.789
            },
            currentSelection: "euro",
            amount: 0,
            convertedAmount: 0
        },
        invokers: {
            updateCurrency: {
                changePath: "currentSelection",
                value: "{arguments}.0"
            },
            updateRate: {
                funcName: "model.converter.updateRate",
                args: ["{that}", "{arguments}.1", "{arguments}.2"]
            },
            convert: {
                funcName: "model.converter.convert",
                args: ["{that}", "{arguments}.1"]
            },
            currentSel: {
                funcName: "model.converter.currentSel",
                args: ["{that}"]
            },
            newCurrency: {
                funcName: "model.converter.newCurrency",
                args: ["{that}", "{arguments}.1", "{arguments}.2"]
            }
        }
    });

    model.converter.updateRate = function (that, currency, newRate) {
        that.applier.change(["rates", currency], newRate);
    };

    model.converter.currentSel = function (that) {
        return that.model.rates[that.model.currentSelection]
    }

    model.converter.convert = function (that, amount) {
        that.applier.change("amount", amount);
        that.applier.change("convertedAmount", amount * that.model.rates[that.model.currentSelection]);
        return amount * that.model.rates[that.model.currentSelection];
    };

    model.converter.newCurrency = function (that, currency, rate) {
        that.updateRate(that,currency,rate);
    }

    var m = model.converter();
    console.log(m.model.rates["euro"]);

    console.log("Current Selection Rate : " + m.currentSel());
    console.log("Convert 100 CAN with Current Selection Money : " + m.convert(m, 100));
    m.updateRate(m, "yen", 5);
    m.updateCurrency("yen");
    console.log(m.model.rates);
    console.log("Current Selection Rate : " + m.currentSel());
    console.log("Convert 100 CAN with Current Selection Money : " + m.convert(m, 100));
    console.log(m.model);
    console.log(fluid.isDestroyed(m));
    var z = fluid.copy(m.model);
    console.log(z);
    m.newCurrency(m, "Dinar", 200);
    console.log(m.model.rates);

})(jQuery, fluid_2_0_0);