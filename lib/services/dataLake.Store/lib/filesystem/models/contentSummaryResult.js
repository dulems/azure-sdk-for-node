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
 * Initializes a new instance of the ContentSummaryResult class.
 * @constructor
 * Data Lake Store filesystem content summary information response.
 * @member {object} [contentSummary] Gets the content summary for the
 * specified path
 * 
 * @member {number} [contentSummary.directoryCount] Gets the number of
 * directories.
 * 
 * @member {number} [contentSummary.fileCount] Gets the number of files.
 * 
 * @member {number} [contentSummary.length] Gets the number of bytes used by
 * the contet.
 * 
 * @member {number} [contentSummary.spaceConsumed] Gets the disk space
 * consumed by the content.
 * 
 */
function ContentSummaryResult() {
}

/**
 * Defines the metadata of ContentSummaryResult
 *
 * @returns {object} metadata of ContentSummaryResult
 *
 */
ContentSummaryResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ContentSummaryResult',
    type: {
      name: 'Composite',
      className: 'ContentSummaryResult',
      modelProperties: {
        contentSummary: {
          required: false,
          readOnly: true,
          serializedName: 'ContentSummary',
          type: {
            name: 'Composite',
            className: 'ContentSummary'
          }
        }
      }
    }
  };
};

module.exports = ContentSummaryResult;
