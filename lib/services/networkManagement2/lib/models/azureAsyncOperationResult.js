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

/**
 * @class
 * Initializes a new instance of the AzureAsyncOperationResult class.
 * @constructor
 * The response body contains the status of the specified asynchronous
 * operation, indicating whether it has succeeded, is inprogress, or has
 * failed. Note that this status is distinct from the HTTP status code
 * returned for the Get Operation Status operation itself. If the
 * asynchronous operation succeeded, the response body includes the HTTP
 * status code for the successful request. If the asynchronous operation
 * failed, the response body includes the HTTP status code for the failed
 * request and error information regarding the failure.
 * @member {string} [status] Status of the AzureAsuncOperation. Possible
 * values include: 'InProgress', 'Succeeded', 'Failed'
 * 
 * @member {object} [error]
 * 
 * @member {string} [error.code]
 * 
 * @member {string} [error.message]
 * 
 * @member {string} [error.target]
 * 
 * @member {array} [error.details]
 * 
 * @member {string} [error.innerError]
 * 
 */
function AzureAsyncOperationResult() {
}

/**
 * Defines the metadata of AzureAsyncOperationResult
 *
 * @returns {object} metadata of AzureAsyncOperationResult
 *
 */
AzureAsyncOperationResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AzureAsyncOperationResult',
    type: {
      name: 'Composite',
      className: 'AzureAsyncOperationResult',
      modelProperties: {
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'ErrorModel'
          }
        }
      }
    }
  };
};

module.exports = AzureAsyncOperationResult;
