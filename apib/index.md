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
 500 | Internal server error   | []

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
    + suffix: `.development` (string, optional) - Search for logs by the suffiex of bundle id each environments *<code>all</code> returns the log of all environments
    + device_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for logs by the field
    + beacon_id: `a004860f-767c-4388-b9d8-76b321a323e7` (string, optional) - Search for logs by the field
    + rssi_gt: `-255` (integer, optional) - Greater than or equal to **rssi**
    + rssi_lt: `0` (integer, optional) - Less than or equal to **rssi**
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
    + suffix: `.development` (string, optional) - Search for logs by the suffiex of bundle id each environments *<code>all</code> returns the log of all environments
    + device_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for logs by the field
    + beacon_id: `a004860f-767c-4388-b9d8-76b321a323e7` (string, optional) - Search for logs by the field
    + battery_gt: `0` (integer, optional) - Greater than or equal to **battery**
    + battery_lt: `100` (integer, optional) - Less than or equal to **battery**
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
    + suffix: `.development` (string, optional) - Search for logs by the suffiex of bundle id each environments *<code>all</code> returns the log of all environments
    + device_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for logs by the field
    + event_key: `Key` (string, optional) - Search for logs by the field (Partial match)
    + event_value: `Value` (string, optional) - Search for logs by the field (Partial match)
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
    + suffix: `.development` (string, optional) - Search for logs by the suffiex of bundle id each environments *<code>all</code> returns the log of all environments
    + device_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for logs by the field
    + region_id: `0df3ccce-c2ba-44f8-b252-f4775bbdc4d2` (string, optional) - Search for logs by the field
    + in_out: `true` (boolean, optional) - true: Region in / false: Region out
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
    + suffix: `.development` (string, optional) - Search for logs by the suffiex of bundle id each environments *<code>all</code> is to get the log of all environments
    + device_id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for logs by the field
    + os_type: `iOS` (string, optional) - Search for logs by the field (Partial match)
    + os_version: `11.` (string, optional) - Search for logs by the field (Partial match)
    + sdk_version: `2.` (string, optional) - Search for logs by the field (Partial match)
    + model: `iPhone` (string, optional) - Search for logs by the field (Partial match)
    + bluetooth: `true` (boolean, optional) - true: ON false: OFF
    + location: `true` (boolean, optional) - true: ON false: OFF
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



# Group Actions
Group description

## Get Actions [/actions]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 1000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for actions by the field
    + name: `demoAction` (string, optional) - Action name (Partial match)
    + interval: `60` (integer, optional) - Action interval (Partial match)
    + uri: `beacrew.jp` (string, optional) - URI (Partial match)
    + enabled: `true` (bool, optional) - Status
    + created_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **created**
    + created_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **created**
    + updated_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **updated**
    + updated_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **updated**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **created**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Actions [GET]
Get actions

+ Response 200 (application/json)

    + Body
    
        {
            "code": 200,
            "message": "OK",
            "payload": {
                "total": 200,
                "per_page": 100,
                "current_page": 1,
                "last_page": 2,
                "next_page_url": "https://api.bc-loco.jp/api/actions?page=2",
                "prev_page_url": null,
                "from": 1,
                "to": 100,
                "data": [
                    {
                        "id": "acafd1d5-9322-4a37-873a-f1952f939eca",
                        "name": "demoAction",
                        "interval": 60,
                        "uri": "https://www.demoaction.com",
                        "params": [
                            {
                                "key": "key01",
                                "val": "val01"
                            }
                        ],
                        "enabled": true,
                        "created": "2017-01-01 00:00:00",
                        "updated": "2017-01-01 00:00:00"
        	        }
        	        ...
                ]
            }
        }
 
## Get Action by id [/actions/:id]

### Get Action by id [GET]
Get Action by specified id

+ Response 200 (application/json)

    + Body

        {
            "code": 200,
            "message": "OK",
            "payload": {
                "id": "acafd1d5-9322-4a37-873a-f1952f939eca",
                "name": "demoAction",
                "interval": 60,
                "uri": "https://www.demoaction.com",
                "params": [
                    {
                        "key": "key01",
                        "val": "val01"
                    }
                ],
                "enabled": true,
                "created": "2017-01-01 00:00:00",
                "updated": "2017-01-01 00:00:00"
            }
        }    



# Group Beacons
Group description

## Get Beacons [/beacons]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 1000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for beacons by the field
    + name: `demoBeacon` (string, optional) - Beacon name (Partial match)
    + local_name: `demoBeacon` (string, optional) - Local name (Partial match)
    + uuid: `b80e08cd-091f-44a7-9ada-d6bc9899a0cf` (string, optional) - uuid
    + major: `62665` (integer, optional) - Major
    + minor: `62665` (integer, optional) - Minor
    + action_id: `acafd1d5-9322-4a37-873a-f1952f939eca` (string, optional) - Action id
    + tx_power: `-77` (integer, optional) - TxPower
    + battery_gt: `30` (integer, optional) - Greater than or equal to **battery**
    + battery_lt: `70` (integer, optional) - Less than or equal to **battery**
    + module_id: `Xkrv` (string, optional) - Module id
    + manufacturer: `Kontakt` (string, optional) - Manufacturer
    + model: `Standard` (string, optional) - Model
    + note: `demo` (string, optional) - Note (Partial match)
    + x: `339` (integer, optional) - X position
    + y: `146` (integer, optional) - Y position
    + h: `1` (integer, optional) - Height
    + enabled: `true` (bool, optional) - Status
    + created_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **created**
    + created_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **created**
    + updated_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **updated**
    + updated_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **updated**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **created**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Beacons [GET]
Get Beacons

+ Response 200 (application/json)

    + Body

        {
            "code": 200,
            "message": "OK",
            "payload": {
                "total": 200,
                "per_page": 100,
                "current_page": 1,
                "last_page": 2,
                "next_page_url": "https://api.bc-loco.jp/api/beacons?page=2",
                "prev_page_url": null,
                "from": 1,
                "to": 100,
                "data": [
                    {
                        "id": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                        "name": "demoBeacon",
                        "local_name": "demoBeacon",
                        "uuid": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                        "major": 62665,
                        "minor": 62665,
                        "action_id": "b2ea762c-ffda-43f7-b0cd-c0fa9a0c7f6e",
                        "tx_power": -77,
                        "battery": 100,
                        "module_id": "Xkrv",
                        "manufacturer": "Kontakt",
                        "model": "Standard",
                        "note": "demo",
                        "x": 339,
                        "y": 146,
                        "h": 1,
                        "enabled": true,
                        "created": "2017-01-01 00:00:00",
                        "updated": "2017-01-01 00:00:00"
                    }
                    ...
                ]
            }
        }

## Get Beacon by id [/beacons/:id]

### Get Beacon by id [GET]
Get beacon by specified id

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                    "name": "demoBeacon",
                    "local_name": "demoBeacon",
                    "uuid": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                    "major": 62665,
                    "minor": 62665,
                    "action_id": "b2ea762c-ffda-43f7-b0cd-c0fa9a0c7f6e",
                    "tx_power": -77,
                    "battery": 100,
                    "module_id": "Xkrv",
                    "manufacturer": "Kontakt",
                    "model": "Standard",
                    "note": "demo",
                    "x": 339,
                    "y": 146,
                    "h": 1,
                    "enabled": true,
                    "created": "2017-01-01 00:00:00",
                    "updated": "2017-01-01 00:00:00"
                }
                ...
            ]

      

# Group Clusters
Group description

## Get Clusters [/clusters]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 1000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + id: `7028fb82-b551-4828-a90e-7db58f2f6902` (array, optional) - Search for clusters by the field
    + name: `demoCluster` (string, optional) - Cluster name (Partial match)
    + parent_id: `b80e08cd-091f-44a7-9ada-d6bc9899a0cf` (string, optional) - Parent Cluster id
    + tag: `Facility` (string, optional) - Tag
    + image: `https://aaa.bbb.ccc/demoMap.jpg` (string, optional) - Image file URL
    + cm_per_pixel: `3.56` (integer, optional) - cm per pixel
    + att_coef: `2.0` (integer, optional) - att coef
    + enabled: `true` (bool, optional) - Status
    + created_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **created**
    + created_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **created**
    + updated_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **updated**
    + updated_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **updated**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **created**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

## Get Clusters [GET]
Get Clusters

+ Response 200 (application/json)

    + Body

        {
            "code": 200,
            "message": "OK",
            "payload": {
                "total": 200,
                "per_page": 100,
                "current_page": 1,
                "last_page": 2,
                "next_page_url": "https://api.bc-loco.jp/api/clusters?page=2",
                "prev_page_url": null,
                "from": 1,
                "to": 100,
                "data": [
                    {
                        "id": "7028fb82-b551-4828-a90e-7db58f2f6902",
                        "name": "demoCluster",
                        "image": null,
                        "cm_per_pixel": 3.56,
                        "att_coef": 2.0,      
                        "tag": "Facility",
                        "parent_id": null,
                        "beacons": [
                            {
                                "id": "acafd1d5-9322-4a37-873a-f1952f939eca"
                            }
                        ],
                        "enabled": true,
                        "created": "2017-01-01 00:00:00",
                        "updated": "2017-01-01 00:00:00"
                    }
                    ...
                ]
            }
        }

## Get Cluster by id [/clusters/:id]
### Get Cluster by id [GET]
Get Cluster by specified id

+ Response 200 (application/json)

    + Body

        {
            "code": 200,
            "message": "OK",
            "payload": {
                "id": "7028fb82-b551-4828-a90e-7db58f2f6902",
                "name": "demoCluster",
                "image": null,
                "cm_per_pixel": 3.56,
                "att_coef": 2.0,       
                "tag": "Facility",
                "parent_id": null,
                "beacons": [
                    {
                        "id": "acafd1d5-9322-4a37-873a-f1952f939eca"
                    }
                ],
                "enabled": true,
                "created": "2017-01-01 00:00:00",
                "updated": "2017-01-01 00:00:00"
            }
        }



# Group Regions
Group description

## Get Regions [/regions]

+ Parameters

    + per_page: `1000` (integer, optional) - Set a custom page size up to 1000
        + Default: `100`
    + page: `1` (integer, optional) - Specify pages
        + Default: `1`
    + id: `e996cb50-ffb1-4f5c-ade5-d111dcaba4b0` (array, optional) - Search for regions by the field
    + name: `demoRegion` (string, optional) - Region name (Partial match)
    + type: `Beacon` (string, optional) - Type ("Beacon" or "Geofence")
    + uuid: `b80e08cd-091f-44a7-9ada-d6bc9899a0cf` (string, optional) - uuid
    + major: `62665` (number, optional) - Major
    + minor: `62665` (number, optional) - Minor
    + latiitude: `35.658095` (number, optional) - Latitude
    + longitude: `139.701127` (number, optional) - Longitude
    + radius: `2000` (number, optional) - Radius
    + in: `5b56215c-a720-4e54-b3d8-de60f52d2d28` (string, optional) - Region in action id
    + out: `5b56215c-a720-4e54-b3d8-de60f52d2d28` (string, optional) - Region out action id
    + enabled: `true` (bool, optional) - Status
    + created_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **created**
    + created_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **created**
    + updated_gt: `2018-03-20 00:00:00` (date, optional) - Greater than or equal to **updated**
    + updated_lt: `2018-03-25 00:00:00` (date, optional) - Less than or equal to **updated**
    + sort: `desc` (string, optional) - Sort in ascending order or descending order by **created**
        + Default: `desc`
        + Members
            + `asc`
            + `desc`

### Get Regions [GET]
Get Regions

+ Response 200 (application/json)

    + Body
    
        {
            "code": 200,
            "message": "OK",
            "payload": {
                "total": 200,
                "per_page": 100,
                "current_page": 1,
                "last_page": 2,
                "next_page_url": "https://api.bc-loco.jp/api/regions?page=2",
                "prev_page_url": null,
                "from": 1,
                "to": 100,
                "data": [
                    {
                        "id": "acafd1d5-9322-4a37-873a-f1952f939eca",
                        "name": "demoRegion",
                        "type": "Beacon",
                        "uuid": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                        "major": 62665,
                        "minor": 62665,
                        "in": "5b56215c-a720-4e54-b3d8-de60f52d2d28",
                        "out": "5b56215c-a720-4e54-b3d8-de60f52d2d28",                
                        "enabled": true,
                        "created": "2017-01-01 00:00:00",
                        "updated": "2017-01-01 00:00:00"
                    },
                    {
                        "id": "acafd1d5-9322-4a37-873a-f1952f939eca",
                        "name": "demoRegion",
                        "type": "Geofence",
                        "longitude": 139.701127,
                        "latitude": 35.658095,
                        "radius": 2000,
                        "in": "5b56215c-a720-4e54-b3d8-de60f52d2d28",
                        "out": "5b56215c-a720-4e54-b3d8-de60f52d2d28",                   
                        "enabled": true,
                        "created": "2017-01-01 00:00:00",
                        "updated": "2017-01-01 00:00:00"
                    }
                    ...
                ]
            }
        }

## Get Region by id [/regions/:id]

### Get Region by id [GET]
Get Region by specified id

+ Response 200 (application/json)

    + Body

        {
            "code": 200,
            "message": "OK",
            "payload": {
                "id": "acafd1d5-9322-4a37-873a-f1952f939eca",
                "name": "demoRegion",
                "type": "Beacon",
                "uuid": "b80e08cd-091f-44a7-9ada-d6bc9899a0cf",
                "major": 62665,
                "minor": 62665,
                "in": "5b56215c-a720-4e54-b3d8-de60f52d2d28",
                "out": "5b56215c-a720-4e54-b3d8-de60f52d2d28",                
                "enabled": true,
                "created": "2017-01-01 00:00:00",
                "updated": "2017-01-01 00:00:00"
            }
        }

