(function() {
    'use strict';

    var LessonPlans = new Array();

    LessonPlans[0] = {
        name: '',
        description: 'Let\'s Activate!',
        available: true,
        completed: true,
        modules: [{
            name: 'Welcome to Project Activate!',
            icon: 'book',
            type: 'handbook',
            available: true,
            target: '#/session/0',
            completed: true
        }, {
            name: 'Log Your Activity',
            icon: 'pencil',
            type: 'tool',
            available: true,
            target: '#/log'
        }, {
            name: 'Review Your History',
            icon: 'area-chart',
            type: 'tool',
            available: true,
            target: '#/history'
        }, {
            name: 'Ask for Help',
            icon: 'user-md',
            type: 'tool',
            available: true,
            target: '#/help'
        }]
    };

    angular.module('cbitsPrototype.constants')
        .constant('LessonPlans', LessonPlans);
})();