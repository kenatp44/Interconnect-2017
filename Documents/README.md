# Use IBM Mobile and API Connect to Create Exceptional Apps on the Cloud

Interconnect 2017 Session ID: 2378A

git location: [https://github.com/kenatibm/Interconnect-2017](https://github.com/kenatibm/Interconnect-2017)

## Speakers
| Ken Nelson | Chelsie Peterson | Paul Horan |
| :---- | :---- | :---- |
| *Integration Architect - Industrial SWAT*:  Cloud  -  Mobile  -  API | Hybrid Cloud Integration - Technical Sales Specialist IBM Hybrid Cloud  | Hybrid Cloud Integration Technical Sales Specialist IBM Hybrid Cloud |
| ken.nelson@us.ibm.com | cpeterson@us.ibm.com | pahoran@us.ibm.com |
| [linkedIn](https://www.linkedin.com/in/kendnelson/)  -  [Twitter](https://twitter.com/kenatibm) | [linkedIn](https://www.linkedin.com/in/cpete/)  -  [Twitter](https://twitter.com/ChelsieMarieP) | [linkedIn](https://www.linkedin.com/in/pahoran/)  -  [Twitter](https://twitter.com/NoazDad) |


## Session Information
Learn how to use [IBM's API Connect](http://www-03.ibm.com/software/products/en/api-connect) and [Mobile Foundation](http://www-03.ibm.com/software/products/en/ibm-mobilefirst-foundation) services to deliver an exceptional user experience deployed in the cloud. Engage in creating and consuming APIs for the always-on digital consumer. By combining the power of API Connect and Mobile Foundation services on Bluemix, you will learn about the integration points, security features and deployment options of this powerful solution. Once you have completed the lab, you will be ready to create solutions on your own by leveraging this unique, cloud-based tool combination offered only by IBM.

## Lab Requirements
All the tools necessary are installed on the virtual machine for this sesssion. However if you would like to setup a similar environment on your machine, you will need the following:

### Open-Source Tools
- *NodeJS* available from [http://nodejs.org](http://nodejs.org). This will also install the node package manager (npm) used to install Ionic, Mobile Foundation Command Line Interface and API Connect Command Line Interface.- *Ionic 2 / Angular 2*: install with `npm install -g ionic`- Apple *Xcode* and the iOS SDK - available for MacOS only. Not installed on the Virtual Machine for this lab.- *Android Studio* and the Android SDK tools: https://developer.android.com/studio/index.html- Any code editing tool of your choice, such as: 
	- Visual Studio Code [https://code.visualstudio.com/](https://code.visualstudio.com/)
	- Brackets [http://brackets.io/](https://atom.io/)
	- Atom [https://atom.io/](https://atom.io/)
	- Webstorm (Commercial) [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)

### IBM Tools
- These labs require a **Bluemix Public account**, available at https://www.bluemix.net- **API Connect CLI**: install with `npm install -g apiconnect`- **Mobile Foundation Command Line Interface**: install with `npm install -g mfpdev-cli`
- Optionally you can install the **Mobile Foundation Developer Kit** which includes a version of the server that you can run locally. To install the Mobile Foundation Developer Kit visit [https://mobilefirstplatform.ibmcloud.com/downloads/](https://mobilefirstplatform.ibmcloud.com/downloads/)	

## Lab Sections
There are four labs that you will complete, they are:

1. **Instantiate Bluemix Environment**: You will use a Bluemix environment to create the necessary cloud components used in future labs.

1. **Cloudant NoSQL data services**: You will instantiate a Cloudant database service in Bluemix, and use the commandline tool to load basic employee data. You will create several Cloudant views, and explore how to test those using the Cloudant admin console.
2. **API Connect**: API Connect is IBM's platform for the creation, execution, management, and security of scalable microservices and APIs. In this section, you will connect to the Cloudant database instance created in lab #1, and we'll create a fully managed REST-based API that exposes both GET and PUT endpoints from the Cloudant REST API.

3. **IBM Mobile Foundation** (aka MobileFirst Foundation): In this lab, you will develop both the server-side and the client-side of an Ionic 2/Angular 2 hybrid mobile application, deployed to both iOS and Android devices using Apache Cordova. You will also develop a Javascript Adapter that connects to the API exposed from API Connect, and then consume that adapter from the Ionic/Angular application code.

## Lab 1 - Instantiate Bluemix Environment
In this lab you will be given a Bluemix ID to use. This ID will be destroyed after the conference. 

> **Note:** If you currently have a Bluemix account and would prefer to use it you will need at least 4GB of available space.

### Steps
1. Login to Bluemix. http://www.bluemix.net
2. In the dev space, create the following services:
	3. Cloudant Database; located in the **Services** | **Data & Analytics** Section
	4. API Connect; located in the **Services** | **APIs** Section
4. In the dev space, create the following Apps
	4. Mobile Foundation; located in the **Apps** | **Mobile** Section

### Detailed Steps
1. Login to Bluemix. 
	- Open a browser and enter [http://www.bluemix.net](http://www.bluemix.net)
	- Click the Log In button

		![](https://github.com/kenatibm/Interconnect-2017/blob/7f26987641e907204940d8d3a3ff957ac582b4ba/Documents/images/bluemix-login.png?raw=true)
	- Enter your Bluemix user name (Email address or IBMId) and Click the Continue button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/7f26987641e907204940d8d3a3ff957ac582b4ba/Documents/images/bluemix-login-username.png?raw=true)
	- Enter your Bluemix user password and Click the Log In button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/7f26987641e907204940d8d3a3ff957ac582b4ba/Documents/images/bluemix-login-password.png?raw=true)
	- If successful you should see a screen similar to the following.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/7f26987641e907204940d8d3a3ff957ac582b4ba/Documents/images/bluemix-home.png?raw=true)


