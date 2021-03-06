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
 * Initializes a new instance of the ServiceTypeServiceTypeDescription class.
 * @constructor
 * @member {boolean} [isStateful]
 * 
 * @member {string} [serviceTypeName]
 * 
 * @member {string} [placementConstraints]
 * 
 * @member {boolean} [hasPersistedState]
 * 
 */
function ServiceTypeServiceTypeDescription() {
}

/**
 * Defines the metadata of ServiceTypeServiceTypeDescription
 *
 * @returns {object} metadata of ServiceTypeServiceTypeDescription
 *
 */
ServiceTypeServiceTypeDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceType_ServiceTypeDescription',
    type: {
      name: 'Composite',
      className: 'ServiceTypeServiceTypeDescription',
      modelProperties: {
        isStateful: {
          required: false,
          serializedName: 'IsStateful',
          type: {
            name: 'Boolean'
          }
        },
        serviceTypeName: {
          required: false,
          serializedName: 'ServiceTypeName',
          type: {
            name: 'String'
          }
        },
        placementConstraints: {
          required: false,
          serializedName: 'PlacementConstraints',
          type: {
            name: 'String'
          }
        },
        hasPersistedState: {
          required: false,
          serializedName: 'HasPersistedState',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = ServiceTypeServiceTypeDescription;
