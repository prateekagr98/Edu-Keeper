'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.index2 = function(req, res) {
	res.render('index2', {
		user: req.user || null,
		request: req
	});
};