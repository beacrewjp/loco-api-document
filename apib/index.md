FORMAT: 1A
HOST: https://api.bc-loco.jp/api

# API Documentation
[Markdown](http://daringfireball.net/projects/markdown/syntax) **formatted** description.

## Authentication
Authentication to the API is done through the use of an API secret, each user has 1 API secret, and this key is sent in an HTTP with every request requiring authentication.

The API secret token is available on your account page and should be sent as an HTTP Header name **Authorization**

An example of a **Authorization** header:
```http
Authorization: mkjaqgrdbgvy2i25fq4iy7qey3q8v2cg
```
## HTTP Response Code

Code | Message                 | Payload
----:| ----------------------- | ---------------------------
 200 | OK                      | *Response data
 400 | Request invalid         | *Validation error messages
 401 | Secret invalid          | []
 500 | Internal Server Error   | []

## HTTP Response Structure
The following is the template of the response of each endpoint.

The acquired value is stored as an array in **data**.
```
{
    "code": 200,
    "message": "OK",
    "payload": {
        "total": 1000,
        "per_page": 100,
        "current_page": 1,
        "last_page": 10,
        "next_page_url": "https://api.bc-loco.jp/api/beacon_logs?page=2",
        "prev_page_url": null,
        "from": 1,
        "to": 100,
        "data": [
            {...}
        ]
    }
}
```

# Group Beacon Logs
Group description

## Get Beacon Logs [/beacon_logs]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 10000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + devide_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (string, optional) - Search for logs by the field
    + detected_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **detected**
    + detected_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **detected**
    + arrived_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **arrived**
    + arrived_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **arrived**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **detected**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Beacon Logs [GET]
Get beacon logs

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "acf4cc71-e16b-4c74-970b-efb4dd049cdc",
                    "bundle_id": "jp.bc-loco.api",
                    "device_id": "a836a50a-3214-4fd3-b6f9-08ef53176ada",
                    "beacon_id": "9db64ef9-9ce1-4b86-af8c-95ef88dfa68d",
                    "rssi": -66,
                    "detected": 1520968891000,
                    "arrived": 1520968918214
                }
                ...
            ]



# Group Battery Logs
Group description

## Get Battery Logs [/battery_logs]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 10000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + devide_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (string, optional) - Search for logs by the field
    + detected_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **detected**
    + detected_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **detected**
    + arrived_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **arrived**
    + arrived_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **arrived**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **detected**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Battery Logs [GET]
Get battery logs

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "acf4cc71-e16b-4c74-970b-efb4dd049cdc",
                    "bundle_id": "jp.bc-loco.api",
                    "device_id": "a836a50a-3214-4fd3-b6f9-08ef53176ada",
                    "beacon_id": "9db64ef9-9ce1-4b86-af8c-95ef88dfa68d",
                    "battery": 100,
                    "detected": 1520968891000,
                    "arrived": 1520968918214
                }
                ...
            ]



# Group Event Logs
Group description

## Get Event Logs [/event_logs]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 10000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + devide_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (string, optional) - Search for logs by the field
    + detected_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **detected**
    + detected_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **detected**
    + arrived_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **arrived**
    + arrived_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **arrived**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **detected**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Event Logs [GET]
Get event logs

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "acf4cc71-e16b-4c74-970b-efb4dd049cdc",
                    "bundle_id": "jp.bc-loco.api",
                    "device_id": "a836a50a-3214-4fd3-b6f9-08ef53176ada",
                    "event_key": "ek",
                    "event_value": "Event Key",
                    "detected": 1520968891000,
                    "arrived": 1520968918214
                }
                ...
            ]



# Group Region Logs
Group description

## Get Region Logs [/region_logs]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 10000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + devide_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (string, optional) - Search for logs by the field
    + detected_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **detected**
    + detected_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **detected**
    + arrived_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **arrived**
    + arrived_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **arrived**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **detected**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Region Logs [GET]
Get region logs

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "acf4cc71-e16b-4c74-970b-efb4dd049cdc",
                    "bundle_id": "jp.bc-loco.api",
                    "device_id": "a836a50a-3214-4fd3-b6f9-08ef53176ada",
                    "region_id": "aef90796-b2c5-4600-a86f-301a4b19be5c",
                    "in_out": true,
                    "detected": 1520968891000,
                    "arrived": 1520968918214
                }
                ...
            ]



# Group Device Logs
Group description

## Get Device Logs [/device_logs]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 10000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + devide_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (string, optional) - Search for logs by the field
    + detected_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **detected**
    + detected_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **detected**
    + arrived_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **arrived**
    + arrived_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **arrived**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **detected**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Device Logs [GET]
Get device logs

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "acf4cc71-e16b-4c74-970b-efb4dd049cdc",
                    "bundle_id": "jp.bc-loco.api",
                    "device_id": "a836a50a-3214-4fd3-b6f9-08ef53176ada",
                    "os_type": "iOS",
                    "os_version": "11.2.6",
                    "sdk_version": "1.0.0",
                    "model": "iPhone X",
                    "location": true,
                    "bluetooth": true,
                    "detected": 1520968891000,
                    "arrived": 1520968918214
                }
                ...
            ]
