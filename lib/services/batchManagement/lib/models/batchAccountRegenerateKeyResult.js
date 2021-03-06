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

/**
 * @class
 * Initializes a new instance of the BatchAccountRegenerateKeyResult class.
 * @constructor
 * Values returned by the RegenerateKey operation.
 * @member {string} [primary] The primary key associated with the account.
 * 
 * @member {string} [secondary] The secondary key associated with the account.
 * 
 */
function BatchAccountRegenerateKeyResult() {
}

/**
 * Defines the metadata of BatchAccountRegenerateKeyResult
 *
 * @returns {object} metadata of BatchAccountRegenerateKeyResult
 *
 */
BatchAccountRegenerateKeyResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BatchAccountRegenerateKeyResult',
    type: {
      name: 'Composite',
      className: 'BatchAccountRegenerateKeyResult',
      modelProperties: {
        primary: {
          required: false,
          serializedName: 'primary',
          type: {
            name: 'String'
          }
        },
        secondary: {
          required: false,
          serializedName: 'secondary',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BatchAccountRegenerateKeyResult;
