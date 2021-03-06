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
 * Initializes a new instance of the InstanceViewStatus class.
 * @constructor
 * Instance view status.
 * @member {string} [code] Gets the status Code.
 * 
 * @member {string} [level] Gets or sets the level Code. Possible values
 * include: 'Info', 'Warning', 'Error'
 * 
 * @member {string} [displayStatus] Gets or sets the short localizable label
 * for the status.
 * 
 * @member {string} [message] Gets or sets the detailed Message, including for
 * alerts and error messages.
 * 
 * @member {date} [time] Gets or sets the time of the status.
 * 
 */
function InstanceViewStatus() {
}

/**
 * Defines the metadata of InstanceViewStatus
 *
 * @returns {object} metadata of InstanceViewStatus
 *
 */
InstanceViewStatus.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'InstanceViewStatus',
    type: {
      name: 'Composite',
      className: 'InstanceViewStatus',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        level: {
          required: false,
          serializedName: 'level',
          type: {
            name: 'Enum',
            allowedValues: [ 'Info', 'Warning', 'Error' ]
          }
        },
        displayStatus: {
          required: false,
          serializedName: 'displayStatus',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        time: {
          required: false,
          serializedName: 'time',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = InstanceViewStatus;
