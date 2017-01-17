/*
 Copyright 2010-2016 OCAD University

 Licensed under the Educational Community License (ECL), Version 2.0 or the New
 BSD license. You may not use this file except in compliance with one these
 Licenses.

 You may obtain a copy of the ECL 2.0 License and BSD License at
 https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
 */

/* global fluid */

(function ($, fluid) {
    var examples = fluid.registerNamespace("examples");

    fluid.defaults("examples.tinyComponent", {
        gradeNames: "fluid.component",
        listeners: {
            "onCreate.logMessage": {
                func: "fluid.log",
                args: "Very Long Message..!!"
            }
        }
    });
    fluid.setLogging(true);
    var myComponent = examples.tinyComponent();

})(jQuery, fluid_2_0_0);
