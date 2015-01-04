// -------
// CV Page
// -------
define([
    'jquery',
    'underscore',
    'views/_base',
    'text!../../templates/cv.html',
    'bootstraptab'
], function($, _, BaseView, html) {

    'use strict';

    var CvView = BaseView.extend({

        id:             'cv',
        name:           'My CV',
        template:       _.template(html),
        background:     'green',
        theme:          'red',

        onAfterRender: function() {
            $('body').addClass('is-inactive');
        }

    });

    return CvView;

});