/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlTableValuedFunction class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table valued function item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this database.
 * 
 * @member {string} [name] Gets or sets the name of the table valued function.
 * 
 * @member {string} [definition] Gets or sets the definition of the table
 * valued function.
 * 
 */
function USqlTableValuedFunction() {
  USqlTableValuedFunction['super_'].call(this);
}

util.inherits(USqlTableValuedFunction, models['CatalogItem']);

/**
 * Defines the metadata of USqlTableValuedFunction
 *
 * @returns {object} metadata of USqlTableValuedFunction
 *
 */
USqlTableValuedFunction.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlTableValuedFunction',
    type: {
      name: 'Composite',
      className: 'USqlTableValuedFunction',
      modelProperties: {
        computeAccountName: {
          required: false,
          serializedName: 'computeAccountName',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        databaseName: {
          required: false,
          serializedName: 'databaseName',
          type: {
            name: 'String'
          }
        },
        schemaName: {
          required: false,
          serializedName: 'schemaName',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'tvfName',
          type: {
            name: 'String'
          }
        },
        definition: {
          required: false,
          serializedName: 'definition',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = USqlTableValuedFunction;
