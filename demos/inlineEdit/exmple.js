var demo = demo || {};
(function ($, fluid) {
    "use strict";

    fluid.defaults("demo.currencyConverter", {
        gradeNames: ["fluid.rendererComponent"],
        selectors: {
            textFont: ".flc-examples-text-font"
        },
        model: {
            textFontNames: ["Serif", "Sans-Serif", "Arial"],
            textFontList: ["serif", "sansSerif", "arial"],
            textFontValue: ""
        },
        rendererOptions: {
            autoBind: true,
        },
        renderOnInit: true,
        protoTree: {
            textFont: {
                optionnames: "${textFontNames}",
                optionlist: "${textFontList}",
                selection: "${textFontValue}"
            }
        },
        resources: {
            template: {
                forceCache: true,
                url: "example.html"
            }
        }
    });

})(jQuery, fluid);

var s = demo.currencyConverter(".converter");