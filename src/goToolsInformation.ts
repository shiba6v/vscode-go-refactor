// <!-- Everything below this line is generated. DO NOT EDIT. -->

import moment = require('moment');
import semver = require('semver');
import { gocodeClose, Tool } from './goTools';

export const allToolsInformation: { [key: string]: Tool } = {
	refillstruct: {
		name: 'refillstruct',
		importPath: 'github.com/shiba6v/reftools/cmd/refillstruct',
		modulePath: 'github.com/shiba6v/reftools',
		replacedByGopls: false,
		isImportant: false,
		description: 'Automatically fill the struct values with defined fields of other variables or defaults.',
		defaultVersion: 'latest'
	},
	errauto: {
		name: 'errauto',
		importPath: 'github.com/shiba6v/reftools/cmd/errauto',
		modulePath: 'github.com/shiba6v/reftools',
		replacedByGopls: false,
		isImportant: false,
		description: 'Automatically write default error handling.',
		defaultVersion: 'latest'
	}
};
