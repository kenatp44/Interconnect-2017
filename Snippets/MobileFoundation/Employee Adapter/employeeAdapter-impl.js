/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.
 */

var CLIENT_ID = '<Your Value Here>'
var CLIENT_SECRET = '<Your Value Here>'
var ACCEPT = 'application/json'
var JSON_CONTENT_TYPE = 'application/json'
var URLENCODED_CONTENT_TYPE = 'application/x-www-form-urlencoded'
var JSON = 'json'
var POST = 'post'
var GET = 'get'
var PUT = 'put'
var DELETE = 'delete'
var BASE_URL = '<Your BASE_URL here>'
var INPUT = {
    method: this.GET,
    returnedContentType: JSON,
    headers: {
        'Accept': ACCEPT,
        'Content-Type': JSON_CONTENT_TYPE,
        'x-ibm-client-id': CLIENT_ID,
        'x-ibm-client-secret': CLIENT_SECRET
    }

}

function getEmployees() {
    INPUT.path = this.BASE_URL
    return MFP.Server.invokeHttp(INPUT)
}

function getFavorites() {
    INPUT.path = this.BASE_URL + '/favorites'
    return MFP.Server.invokeHttp(INPUT)
}

function getEmployeeDetail(_id) {
    INPUT.path = this.BASE_URL + '/' + _id
    return MFP.Server.invokeHttp(INPUT)
}

function updateEmployee(_id, favorite) {
    var emp = this.getEmployeeDetail(_id); // first, retrieve the existing Employee record for the ID

    var newEmp = {}; // empty JSONObject

    newEmp._id = emp._id;
    newEmp._rev = emp._rev;
    newEmp.first_name = emp.first_name;
    newEmp.last_name = emp.last_name;
    newEmp.address = emp.address;
    newEmp.job_title = emp.job_title;
    newEmp.email = emp.email;
    newEmp.fax = emp.fax;
    newEmp.img = emp.img;
    newEmp.favorite = favorite;

    INPUT.path = this.BASE_URL; // now send the updated JSON doc back to Cloudant (thru APIC)
    INPUT.method = this.PUT;
    INPUT.body = {
        content: newEmp,
        contentType: this.URLENCODED_CONTENT_TYPE
    }

    var rsp = MFP.Server.invokeHttp(INPUT);
    return rsp;
}
