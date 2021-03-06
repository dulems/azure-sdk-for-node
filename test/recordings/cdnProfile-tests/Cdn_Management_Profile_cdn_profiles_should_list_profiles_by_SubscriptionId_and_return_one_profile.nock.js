// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '455',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '366e3508-f712-49e5-a36b-c9fcff7e19e7',
  'x-ms-client-request-id': 'c2a6efdf-ba9d-4a84-a04f-32bf0f97657f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c3354f48-c740-4e5a-b55e-2d80288ba476',
  'x-ms-routing-request-id': 'WESTUS:20160302T231730Z:c3354f48-c740-4e5a-b55e-2d80288ba476',
  date: 'Wed, 02 Mar 2016 23:17:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '455',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '366e3508-f712-49e5-a36b-c9fcff7e19e7',
  'x-ms-client-request-id': 'c2a6efdf-ba9d-4a84-a04f-32bf0f97657f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c3354f48-c740-4e5a-b55e-2d80288ba476',
  'x-ms-routing-request-id': 'WESTUS:20160302T231730Z:c3354f48-c740-4e5a-b55e-2d80288ba476',
  date: 'Wed, 02 Mar 2016 23:17:30 GMT',
  connection: 'close' });
 return result; }]];