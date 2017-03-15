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
1. **Login to Bluemix** 
	- Open a browser and enter [http://www.bluemix.net](http://www.bluemix.net)
	- **Click** the **Log In** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-home.png?raw=true)
	- Enter your Bluemix user name (Email address or IBMId) and **Click** the **Continue** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-login-username.png?raw=true)
	- Enter your Bluemix user password and **Click** the **Log In** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-login-password.png?raw=true)
	- If successful you should see a screen similar to the following.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-home.png?raw=true)
		
1. **Create a Cloudant Service**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)
		
	- **Click** the **Data & Analytics** link in the Services menu on the left hand side of the page
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-data-analytics-menu-link.png?raw=true)
		
	- **Click** the **Cloudant NoSQL DB** link from the results	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-link.png?raw=true)
	- Change the **Service name** to Interconnect2017-cloudant
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-service-name.png?raw=true)
	- **Scroll** to the Pricing Plans and ensure that the **Lite** plan is selected, then **Click** the **Create** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-pricing.png?raw=true)
	- When the service is created you should see a screen similar to the following. You can click the LAUNCH button if you like. However you will be coming back to this in a future lab
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-complete.png?raw=true)

1. **Create API Connect Service**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)
		
	- **Click** the **APIs** link in the Services menu on the left hand side of the page
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-menu-link.png?raw=true)

	- **Click** the **API Connect** link from the results
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-api-connect-link.png?raw=true)

	- Change the **Service name** to Interconnect2017-apic
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-service-name.png?raw=true)

	- **Scroll** to the Pricing Plans and ensure that the **Essentials** plan is selected, then **Click** the **Create** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-pricing.png?raw=true)

	- When the service is created you sould see a screen similar to the following.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-complete.png?raw=true)

1. **Create Mobile Foundation App**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)	
	- **Click** the **Mobile** link in the Apps menu on the left hand side of the page.
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-menu-link.png?raw=true)
		
	- **Click** the **Mobile Foundation** link from the results
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-foundation-link.png?raw=true)
		
	- Change the **Service name** to Interconnect2017-mobile
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-service-name.png?raw=true)
		
	- **Scroll** to the Pricing Plans and ensure that the **Developer** plan is selected, then **Click** the **Create** button
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-pricing.png?raw=true)
		
	- When setting up the Mobile Foundation server instance you have full control over the settings such as size of the server, adminstrator password, as well as Server Configuration options. You will want to set the admin username and password. To do that, **Click** the **Settings** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-settings-link.png?raw=true)
		
	- Leave the Topology Size as Small (S). **Click** the **Security** tab.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-topology.png?raw=true)
		
	- On the **Security** tab you can set the admin password. Set the password by entering *admin* in the **Console Login Password** field and then confirm the password by typing *admin* again tin the **Confirm Password** field. You can also set LTPA Keys if you have them on the screen, however for this lab you will not do that. **Scroll** to the bottom of the page and **Click** the **Next** button.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-security.png?raw=true)
		
	- On the **Server Configuration** tab you can set up JNDI entries and configure the User Registry. You will not need this for this lab. **Scroll** to the bottom of the page and **Click** the **Start Advanced Server** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-server-configuration.png?raw=true)
		
	- This will start the server provisioning process. This can take up to 10 minutes.
		



