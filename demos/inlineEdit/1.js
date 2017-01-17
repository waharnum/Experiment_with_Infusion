var demo = demo || {};
(function () {
    "use strict";

    fluid.defaults("demo.currencyConverter", {
        gradeNames: "fluid.rendererComponent",
        selectors: {
            enter_amount: ".enter-amount",
            display_amount: ".display-amount",
            heading: ".heading"
        },
        model: {
            enter_amount: 15,
            enter_amount_string: "15",
            display_amount: 0,
            heading: "Hello...Welcome..!!"
        },
        protoTree: {
            enter_amount: "${enter_amount_string}",
            display_amount: "${display_amount}",
            heading: "${heading}"
        },
        modelListeners: {
            "": "{that}.output",
            "display_amount": {
                func: "{that}.refreshView"
            }
        },
        modelRelay: [{
            source: "{demo.currencyConverter}.model.enter_amount",
            target: "display_amount",
            singleTransform: {
                type: "fluid.transforms.linearScale",
                factor: 0.001
            }
        },
        {
            source: "{demo.currencyConverter}.model.enter_amount_string",
            target: "enter_amount",
            singleTransform: {
                type: "fluid.transforms.stringToNumber"
            }
        }
        ],
        listeners: {
            //"onCreate.output": "{that}.output"
        },
        invokers: {
            output: {
                funcName: "demo.currencyConverter.output",
                args: ["{that}.model"]
            },
            print: {
                funcName: "demo.currencyConverter.print",
                args: ["{that}.model"]
            }
        },
        renderOnInit: true
    });

    demo.currencyConverter.output = function (model) {
        //console.log(model);
        console.log(model);
    }

    demo.currencyConverter.print = function (model) {
        console.log(model.display_amount);
        //model.display_amount = model.enter_amount;
    }

})();


var s = demo.currencyConverter(".converter");
