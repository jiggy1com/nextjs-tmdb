module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-scss'],
	rules: {
		// SCSS at-rule handling
		'at-rule-no-unknown': null, // disable default CSS unknown at-rule
		'scss/at-rule-no-unknown': true, // enable SCSS-aware at-rule check

		// Ensure 1 empty line between selectors
		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'], // no empty line before the first rule
				ignore: ['after-comment'], // ignore after comments
			},
		],

		// Class names
		'selector-class-pattern': null, //'^[a-z0-9\\-]+$',

		// Variables
		'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]*$',

		// Functions
		'scss/at-function-pattern': '^[a-z][a-zA-Z0-9]*$',

		// Mixins
		'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]*$',

		// Allow camelCase keywords in values
		'value-keyword-case': null, // disable lowercase-only enforcement
	},
};
