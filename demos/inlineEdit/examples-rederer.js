var demo = demo || {};
(function ($, fluid) {
    "use strict";

    fluid.defaults("demo.currencyConverter", {
        gradeNames: "fluid.rendererComponent",
        selectors: {
            render: ".demo-banquet-form-renderButton",
            amount: ".tut-currencyConverter-amount",
            currency: ".tut-currencyConverter-currency-selecter",
            result: ".tut-currencyConverter-result",
            view: ".tut-currencyConverter-model"
        },
        model: {
            rates: {
                names: ["euro", "yen", "yuan", "usd", "rupee"],
                values: ["0.712", "81.841", "6.609", "1.02", "45.789"]
            },
            currentSelection: "1.02",
            amount: 0,
            result: 34
        },
        protoTree: {
            amount: "${amount}",
            currency: {
                optionnames: "${rates.names}",
                optionlist: "${rates.values}",
                selection: "${currentSelection}"
            },
            result: "${amount}"
        },
        modelListeners: {
            "result": {
                func: "{that}.refreshView"
            },
            "": "{that}.outputData"
        },
        modelRelay: {
            target: "result",
            singleTransform: {
                type: "fluid.transforms.linearScale",
                input: "{that}.model.amount",
                factor: "{that}.model.currentSelection"
            }
        },
        events: {
            onRender: null,
            onCreate: null
        },
        listeners: {
            "onCreate.bindEvent": {
                "this": "{that}.dom.render",
                method: "on",
                args: ["click", "{that}.render"]
            },
            "onCreate.outputData": "{that}.outputData"
        },
        invokers: {
            render: "{that}.events.onRender.fire",
            outputData: {
                funcName: "demo.currencyConverter.outputData",
                args: ["{that}.model", "{that}.dom.view"]
            }
        },
        renderOnInit: true
    });

    demo.currencyConverter.outputData = function (model, modelView) {
        //model.result=model.currentSelection*model.amount;
        console.log(model.amount);
        console.log(model.result);
        console.log("Hello");
        modelView.text(JSON.stringify(model, null, 4));
    };


})(jQuery, fluid_2_0_0);

var s = demo.currencyConverter(".converter");
