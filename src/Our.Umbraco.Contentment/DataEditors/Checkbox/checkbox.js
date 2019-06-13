﻿/* Copyright © 2019 Lee Kelleher, Umbrella Inc and other contributors.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

angular.module("umbraco").controller("Our.Umbraco.Contentment.DataEditors.Checkbox.Controller", [
    "$scope",
    function ($scope) {

        //console.log("checkbox.model", $scope.model);

        var defaultConfig = { showInline: 0, defaultValue: 0 }; // TODO: [LK:2019-06-06] Implement the `defaultValue`.
        var config = angular.extend({}, defaultConfig, $scope.model.config);

        var vm = this;

        function init() {

            vm.alias = $scope.model.alias;
            vm.true = 1;
            vm.false = 0;

            if (Object.toBoolean(config.showInline)) {
                vm.showInline = true;
                vm.label = $scope.model.label;
                vm.description = $scope.model.description;
            }

            $scope.model.value = Object.toBoolean($scope.model.value) ? vm.true : vm.false;

        };

        init();
    }
]);