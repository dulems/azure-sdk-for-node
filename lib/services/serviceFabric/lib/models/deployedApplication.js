/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeployedApplication class.
 * @constructor
 * @member {string} [id]
 * 
 * @member {string} [name]
 * 
 * @member {string} [typeName]
 * 
 * @member {number} [status]
 * 
 * @member {string} [workDirectory]
 * 
 * @member {string} [logDirectory]
 * 
 * @member {string} [tempDirectory]
 * 
 */
function DeployedApplication() {
}

/**
 * Defines the metadata of DeployedApplication
 *
 * @returns {object} metadata of DeployedApplication
 *
 */
DeployedApplication.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeployedApplication',
    type: {
      name: 'Composite',
      className: 'DeployedApplication',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'Id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'Name',
          type: {
            name: 'String'
          }
        },
        typeName: {
          required: false,
          serializedName: 'TypeName',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'Status',
          type: {
            name: 'Number'
          }
        },
        workDirectory: {
          required: false,
          serializedName: 'WorkDirectory',
          type: {
            name: 'String'
          }
        },
        logDirectory: {
          required: false,
          serializedName: 'LogDirectory',
          type: {
            name: 'String'
          }
        },
        tempDirectory: {
          required: false,
          serializedName: 'TempDirectory',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeployedApplication;
