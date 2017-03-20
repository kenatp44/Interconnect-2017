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
- **NodeJS**: available from [http://nodejs.org](http://nodejs.org). This will also install the node package manager (npm) used to install Ionic, Mobile Foundation Command Line Interface and API Connect Command Line Interface. Use version 6.x or higher, although 6.x is recommended.- **Ionic 2 / Angular 2**: install with `sudo npm install -g ionic`- Apple **Xcode**: and the iOS SDK - available for MacOS only. Not installed on the Virtual Machine for this lab. Not used in this lab.- **Android Studio**: and the Android SDK tools: https://developer.android.com/studio/index.html. Not used in this lab.- Any code editing tool of your choice, such as: 
	- Visual Studio Code [https://code.visualstudio.com/](https://code.visualstudio.com/)
	- Brackets [http://brackets.io/](https://atom.io/)
	- Atom [https://atom.io/](https://atom.io/)
	- Webstorm (Commercial) [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)
- **Git**: available from [https://git-scm.com/](https://git-scm.com/)
- **Cordova**: available from [http://cordova.apache.org/](http://cordova.apache.org/) `sudo npm install -g cordova`
- **Gulp**: available from [http://gulpjs.com/](http://gulpjs.com/) `sudo npm install -g gulp`
- **Maven**: available from [https://maven.apache.org/](https://maven.apache.org/) `sudo apt-get install maven`

### IBM Tools
- These labs require a **Bluemix Public account**, available at https://www.bluemix.net- **API Connect CLI**: install with `npm install -g apiconnect`. Note used in this lab.- **Mobile Foundation Command Line Interface**: install with `npm install -g mfpdev-cli`
- Optionally you can install the **Mobile Foundation Developer Kit** which includes a version of the server that you can run locally. To install the Mobile Foundation Developer Kit visit [https://mobilefirstplatform.ibmcloud.com/downloads/](https://mobilefirstplatform.ibmcloud.com/downloads/)	

## Lab Sections
There are four labs that you will complete, they are:

1. **Instantiate Bluemix Environment**: You will use a Bluemix environment to create the necessary cloud components used in future labs.

1. **Cloudant NoSQL data services**: You will instantiate a Cloudant database service in Bluemix, and use the commandline tool to load basic employee data. You will create several Cloudant views, and explore how to test those using the Cloudant admin console.
2. **API Connect**: API Connect is IBM's platform for the creation, execution, management, and security of scalable microservices and APIs. In this section, you will connect to the Cloudant database instance created in lab #1, and we'll create a fully managed REST-based API that exposes both GET and PUT endpoints from the Cloudant REST API.

3. **Mobile Foundation** (aka MobileFirst Foundation): In this lab, you will develop both the server-side and the client-side of an Ionic 2/Angular 2 hybrid mobile application, deployed to both iOS and Android devices using Apache Cordova. You will also develop a Javascript Adapter that connects to the API exposed from API Connect, and then consume that adapter from the Ionic/Angular application code.

<div style="page-break-after: always;"></div>

## Lab 1 - Instantiate Bluemix Environment
In this lab you will be given a Bluemix ID to use. This ID will be destroyed after the conference. 

> **Note:** If you currently have a Bluemix account and would prefer to use it you will need at least 4GB of available space.

### Steps
1. Login to Bluemix. http://www.bluemix.net
2. In the dev space, create the following services:
	3. Cloudant Database; located in the **Services** | **Data & Analytics** Section
	4. API Connect; located in the **Services** | **APIs** Section
	5. Create Developer Portal for API Connect
4. In the dev space, create the following Apps
	4. Mobile Foundation; located in the **Apps** | **Mobile** Section

### Detailed Steps
1. **Login to Bluemix** 
	- Open a browser and enter [http://www.bluemix.net](http://www.bluemix.net)
	- **Click** the **Log In** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-login.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- Enter your Bluemix user name (Email address or IBMId) and **Click** the **Continue** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-login-username.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- Enter your Bluemix user password and **Click** the **Log In** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-login-password.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- If successful you should see a screen similar to the following.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-home.png?raw=true)
		<div style="page-break-after: always;"></div>
		
1. **Create a Cloudant Service**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- **Click** the **Data & Analytics** link in the Services menu on the left hand side of the page
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-data-analytics-menu-link.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- **Click** the **Cloudant NoSQL DB** link from the results	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-link.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- Change the **Service name** to Interconnect2017-cloudant
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-service-name.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- **Scroll** to the Pricing Plans and ensure that the **Lite** plan is selected, then **Click** the **Create** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-pricing.png?raw=true)
		<div style="page-break-after: always;"></div>
		
	- When the service is created you should see a screen similar to the following. You can click the LAUNCH button if you like. However you will be coming back to this in a future lab
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-setup-complete.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Create API Connect Service**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)
<div style="page-break-after: always;"></div>		
	- **Click** the **APIs** link in the Services menu on the left hand side of the page
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-menu-link.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **API Connect** link from the results
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-api-connect-link.png?raw=true)
<div style="page-break-after: always;"></div>

	- Change the **Service name** to Interconnect2017-apic
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-service-name.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Scroll** to the Pricing Plans and ensure that the **Essentials** plan is selected, then **Click** the **Create** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-pricing.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the service is created you sould see a screen similar to the following.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-setup-complete.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Create Developer Portal for API Connect**

	Once you have provisioned API Connect on Bluemix you will need to instantiate a developer portal. You will use the Developer Portal to consume register your mobile application in a later lab.
	
	- With the API Connect Draft Page still open, **Click** the menu icon

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/blbluemix-apis-dp-menu.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Select** the **Dashboard** menu item

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-menu-dashboard.png?raw=true)
		<div style="page-break-after: always;"></div>

	- You will notice that you have a **Sandbox** catalog already defined but you will want to create a catalog for your application. To do that, **Click** the **Add** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-add-button.png?raw=true)
		<div style="page-break-after: always;"></div>

	- Then **Click** the **Catalog** menu option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-add-catalog-button.png?raw=true)
		<div style="page-break-after: always;"></div>

	- When the **Add Catalog** dialog opens, enter **EmployeeCatalog** for the **Display Name**. This will automatically generate the Catalog Name in lowercase. Then **Click** the **Add** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-add-catalog-dialog.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Click** the **EmployeeCatalog** to display the catalog properties

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Click** the **Settings** tab

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog-settings.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Click** the **Portal** settings option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog-settings-portal.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Select** the **IBM Developer Portal** option for the Portal Configuration. Note the Portal URL. You may want to open the URL in a new tab for later, however the URL will not be ready until after you have saved the configuration and the developer portal has been generated and activated.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog-settings-portal-IBM-portal.png?raw=true)
		<div style="page-break-after: always;"></div>

	- **Click** the **Save** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog-settings-save.png?raw=true)
		<div style="page-break-after: always;"></div>

	- After saving you should see a dialog letting you know that the developer portal is being created.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-employee-catalog-creating-developer-portal.png?raw=true)
		<div style="page-break-after: always;"></div>

	- You will recieve an email with a link for activation and to change the admin password. Click the link to activate the portal

1. **Create Mobile Foundation App**
	- **Click** the **Catalog** link in the upper right section of the Bluemix Home page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-click-catalog.png?raw=true)
		<div style="page-break-after: always;"></div>
			
	- **Click** the **Mobile** link in the Apps menu on the left hand side of the page.
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-menu-link.png?raw=true)
<div style="page-break-after: always;"></div>		
	- **Click** the **Mobile Foundation** link from the results
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-foundation-link.png?raw=true)
<div style="page-break-after: always;"></div>		
	- Change the **Service name** to Interconnect2017-mobile
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-service-name.png?raw=true)
<div style="page-break-after: always;"></div>		
	- **Scroll** to the Pricing Plans and ensure that the **Developer** plan is selected, then **Click** the **Create** button
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-pricing.png?raw=true)
<div style="page-break-after: always;"></div>		
	- When setting up the Mobile Foundation server instance you have full control over the settings such as size of the server, adminstrator password, as well as Server Configuration options. You will want to set the admin username and password. To do that, **Click** the **Settings** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-settings-link.png?raw=true)
<div style="page-break-after: always;"></div>		
	- Leave the Topology Size as Small (S). **Click** the **Security** tab.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-topology.png?raw=true)
<div style="page-break-after: always;"></div>		
	- On the **Security** tab you can set the admin password. Set the password by entering *admin* in the **Console Login Password** field and then confirm the password by typing *admin* again tin the **Confirm Password** field. You can also set LTPA Keys if you have them on the screen, however for this lab you will not do that. **Scroll** to the bottom of the page and **Click** the **Next** button.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-security.png?raw=true)
<div style="page-break-after: always;"></div>		
	- On the **Server Configuration** tab you can set up JNDI entries and configure the User Registry. You will not need this for this lab. **Scroll** to the bottom of the page and **Click** the **Start Advanced Server** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-settings-server-configuration.png?raw=true)
<div style="page-break-after: always;"></div>		
	- This will start the server provisioning process. This can take up to 10 minutes.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-starting-server.png?raw=true)
<div style="page-break-after: always;"></div>	
	- When the server is provisioned, you will see the following screen.  Here you can 1) Launch the server console, 2) View the administrator password and 3) Add the analytics server (which will not be convered in this session).
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-mobile-setup-complete.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Conclusion**: Lab Complete

	The lab is complete. To confirm your setup of the necessary services, **Click** the **Bluemix** icon in the upper left side of the page. This will display the services and apps that have been provisioned. Your configuration should look similar to the one below.

	![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-setup-complete.png?raw=true)
<div style="page-break-after: always;"></div>

## Lab 2 - Create Employee Database using Cloudant

In this lab you will create a database in Cloudant that will be used to store employee records in NoSQL format. Cloudant's service provides integrated data management, search, and analytics engine designed for web & mobile applications. Cloudant scales databases on the CouchDB framework and provides hosting, administrative tools, analytics and commercial support for CouchDB and BigCouch. For more information on Cloudant, please visit [https://cloudant.com/](https://cloudant.com/)

### Steps
1. Login to Cloudant using the Bluemix Console
1. Create the Employee Database (employees)
1. Use terminal to load Employee Database with records
1. Confirm employee records exist
1. Create an employee list view
1. (Optional) Create an employee favorites view
1. Generate an application key for external access

### Detailed Steps

1. **Login to Cloudant using the Bluemix Console**
	- From the Bluemix **Dashboard**, found by clicking the hamburger icon in the upper left corner of the screen and selecting **Dashboard**, locate the Interconnect2017-cloudant service and **Click** it. 

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-dashboard-cloudant-service.png?raw=true)
		<div style="page-break-after: always;"></div>
				
1. **Create the Employee Database (employees)**

	- With the Cloudant service open, **Click** the **Manage** tab and then **Click** the **LAUNCH** button to open the Cloudant management console in a new tab in the browser.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-service.png?raw=true)
<div style="page-break-after: always;"></div>		
	- Once the Cloudant management console opens, **Click** the **Database** menu option to show the list of databases.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-database-menu.png?raw=true)
<div style="page-break-after: always;"></div>		
	- To create a new database, **Click** the **Create Database** button on the Databases page.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-create-database-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- Enter **employees** for the database name and **Click** the **Create** button.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-database-create.png?raw=true)
<div style="page-break-after: always;"></div>

	- The database was successfully created if you see a message that says **Database created successfully**

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-database-create-success.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Use terminal to load Employee Database with records**

		Bluemix stores a copy of the service credentials for the Cloudant service that you have created. To populate the database you will need the service credentials, specifically the URL that embeds the username and password as part of the URL.

	- With the Cloudant service open in the first browser window/tab, **Click** the **Service Credentials** tab

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-service-credentials-menu.png?raw=true)
<div style="page-break-after: always;"></div>
	
	- **Click** the **View Credentials** drop-down

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-service-credentials-view.png?raw=true)
<div style="page-break-after: always;"></div>
	
	- **Copy** the **URL** to the clipboard. The URL will contain the username and password as well as the url. Include the `https://` all the way to the end of the `cloudant.com`.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-service-credentials-url.png?raw=true)
<div style="page-break-after: always;"></div>

	- Open a terminal window.
	
	- When the window opens navigate to the `Interconnect 2017/Snippets/Cloudant` directory
	
	- Set the DB variable to the URL you just copied from your Service Credentials. Type the following:
	
		`DB=[PASTE THE CONTENTS OF THE CLIPBOARD]` 
	
		it should like something like
	
		`DB=https://XXXXXXXX-XXXX-XXX-XXXX-XXXXXXXXXXXX-bluemix:`
	`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX@`
	`XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX-bluemix.cloudant.com`
	
	- Once the DB parameter is set, you will use curl to load the database using the employeeData.json file in the `Interconnect 2017/Snippets/Cloudant` directory. Type the following to load the database:
	
		`curl -H "Content-Type:application/json" -d @employeeData.json -X POST "$DB/employees/_bulk_docs"`

		> **Note:** you can copy/paste the commands that are in a file `terminal commands.txt` under `Interconnect 2017/Snippets/Cloudant` directory.
<div style="page-break-after: always;"></div>
		
1. **Confirm employee records exist**

	- Return to the browser tab that has the Cloudant management console open. Refresh the browser to show the list of employee records. Your screen should like like the following:

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-database-refresh.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Create an employee list view**

	Views are **Design Documents** used for working with document content in databases. A view can selectively filter documents and speed up searching for content. Views can be used to ‘pre-process’ results before they are returned to the client.
	
	- To create a view, **Click** the **Plus Sign** for the **Design Documents** menu option to open the menu.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **New View** menu option.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view.png?raw=true)
<div style="page-break-after: always;"></div>

	- Set the View **Name** the view **employeeList** and name the index **idxEmployeeList**.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-name-view-employeeList.png?raw=true)
<div style="page-break-after: always;"></div>

	- Copy the snippit in `employeeList-view.json` under `Interconnect 2017/Snippets/Cloudant` directory then past over the existing map function or type the following:

			function(emp) {
				if (emp.first_name && emp.last_name && emp.job_title && emp.email) {
					emit(emp._rev, {
						first_name: emp.first_name,
						last_name: emp.last_name,
						title: emp.job_title,
						email: emp.email,
						img: emp.img,
						favorite: emp.favorite
					});
				}
			}
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-name-view-employeeList-map.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Create Document and Build Index** button.
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view-create.png?raw=true)
<div style="page-break-after: always;"></div>

	- The page should look similar to the page below after the view has been successfully created.
			
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view-complete.png?raw=true)
<div style="page-break-after: always;"></div>

1. **(Optional) Create an employee favorites view**

	This is an optional section of the lab. Feel free to skip it if you are running out of time. For this section you will repeat the process of creating a view, but this time you will create a view that only returns employees that the user has flagged as a Favorite.
	
	- To create a view, **Click** the **Plus Sign** for the **Design Documents** menu option to open the menu.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-menu-o.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **New View** menu option.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view-o.png?raw=true)
<div style="page-break-after: always;"></div>

	- Set the View **Name** the view **employeeFavorites** and name the index **idxEmployeeFavorites**.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-name-view-employeeFavorites.png?raw=true)
<div style="page-break-after: always;"></div>

	- Copy the snippit in `employeeList-view.json` under `Interconnect 2017/Snippets/Cloudant` directory then past over the existing map function or type the following:

			function(emp) {
				if (emp.first_name && emp.last_name && emp.job_title && emp.email) {
					emit(emp._rev, {
						first_name: emp.first_name,
						last_name: emp.last_name,
						title: emp.job_title,
						email: emp.email,
						img: emp.img,
						favorite: emp.favorite
					});
				}
			}
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-name-view-employeeFavorites-map.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Create Document and Build Index** button.
		
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view-create-o.png?raw=true)
<div style="page-break-after: always;"></div>


	- The page should look similar to the page below after the view has been successfully created.
			
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-design-documents-new-view-complete-o.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Generate an application key for external access**

	An application will be used in lieu of a username and password to allow the API that you will write in a later lab to access the resources you just created.
	
	- **Click** the **Permissions** menu option
				
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-permissions-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Generate API Key** button
				
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-permissions-generate-api-key.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Copy** the generated **Key** and **Password**

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-permissions-key-password.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Check** the **_writer** permission for the generated key

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-cloudant-permissions-writer.png?raw=true)
<div style="page-break-after: always;"></div>

## Lab 3 - API Connect

Now that you you have created a datasource with data with a generated API Key, you will use API Connect on Bluemix to create an API Product and deploy it to the Developer Portal.

### Steps

1. Create a new API
1. Configure the API
1. Build the API Assembly
1. Deploy the API
1. Register Your App

### Detailed Steps

1. **Create a new API**
	- Start at the API Connect Dashboard then **Click** the API Connect Menu

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apis-dp-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **Drafts** menu option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-menu-drafts.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **APIs** tab

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-drafts-api-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Add** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-add-api-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **New API** menu option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-add-api-new-api.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the **New API** dialog opens, **set** the **Title** to **EmployeeDirectory** and **set** the **Base Path** to **/** (slash), then open the **Additional properties**.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-add-new-api-dialog-set-title.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Set** the **Security** field to **Client ID and secret** 
		- and **set** the **Gateway** to **Datapower** 
		- and finally **Click** the **Create API** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-add-new-api-dialog-set-gateway.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Configure the API**
	Now that you have created the API with some basic configuration, it is time to complete the configuration by adding the API path definitions and creating the assembly. There will be a total of three paths that you will create. The steps for the 
	
	- **Click** the **Paths** menu option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Add Path** button (⊕)

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-add.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Set** the **Path** field to **/employees** 

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-set-title.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **GET** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Set** the **Operation ID** to **employee.findAll** and set the **Description** to **Retieves a list of all Employees**

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-parameters.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Add Operation** link

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-add-operation.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **PUT** operation

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-add-operation-put.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Scroll** to the **PUT** operation you just added and expand it by **clicking** the **PUT** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-put.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Set** the **Opertation ID** to **employee.upsert** and set the **Description** to **Updates or adds an employee record**

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-put-parameters.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Add Parameter** link for the **PUT** operation and then **Select** the **Add new parameter** option

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-put-add-parameters.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Set** the **Name** field to **data** and **change** the **Located in** to **Body** also **check** the **Required** checkbox

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-put-parameter-options.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Save** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-save.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Repeat for two more paths**

		Now that you have created a path, you will repeat the steps for two more paths.
		
		|  Path  |  Operation ID  |  GET Parameter  |  Type |
		|  :---  |  :---  |  :---  |  :---  |
		|  /employees/favorites  | employee.getFavorites | n/a | n/a |
		|  /employees/{id}  | employee.findByID | id  (located in Path)|  string  |
		
		- **Path 2** - /employees/favorites
	
			![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-favorites.png?raw=true)
<div style="page-break-after: always;"></div>

		- **Path 3** - /employees/{id}

			![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-employee-by-id.png?raw=true)

			![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-employee-by-id-parameter.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Save** button

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-save-2.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Build the API Assembly**

	Next you will use the Assembly tool to build the execution of the REST services from Cloudant.
	
	- **Click** the **Assembly** tab

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-tab.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Drag & Drop** a **Operation Switch** operation onto the assembly workspace right before the invoke operation.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-operation-switch.png?raw=true)
<div style="page-break-after: always;"></div>

	- Next, **Drag & Drop** the existing **invoke** operation so that it is part of the **Operation Switch** operation.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-move-invoke.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Drag & Drop** three more **invoke** operations under the **Operation Switch** operation.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-add-three-invoke-operations.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Operation Switch** on the assembly workspace.

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-click-operation-switch.png?raw=true)
<div style="page-break-after: always;"></div>

	- For each of the four switch operations, map to one of the four paths created earlier
	
		|  Case  |  Path  |
		|  :---  |  :---  |
		|  case 0  |  employee.findById |
		|  case 1  |  employee.getFavorites |
		|  case 2  |  employee.findAll |
		|  Case 3  |  employee.upsert |
	

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-map-operation-case.png?raw=true)
<div style="page-break-after: always;"></div>

	
	- When mapped, your switch should look similar to the following

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-map-operation-case-complete.png?raw=true)
<div style="page-break-after: always;"></div>

	- Configure the four **invoke** operations that are under the **Operation Switch** operation. This will require you to use the Cloudant REST services. You may want to launch your instance of Cloudant, if it is not already open.  Don't forgot to use your Cloudant URLs. The Username is the Key you generated earlier and the Password is the the Password that was generated.

		|  Title  |  URL  |  Username  |  Password  |
		|  :---  |  :---  |  :---------  |  :---------  |
		|  findByID  |  https://**[REPLACE]**-bluemix.cloudant.com/employees/$(request.parameters.id)  |  [Your Cloudant Key]  |  [Your Cloudant Key Password]  |
		|  getFavorites  |  https://**[REPLACE]**-bluemix.cloudant.com/employees/_design/employeeFavorites/_view/idxEmployeeFavorites?limit=20&reduce=false  |  [Your Cloudant Key]  |  [Your Cloudant Key Password]  |
		|  findAll  |  https://**[REPLACE]**-bluemix.cloudant.com/employees/_design/employeeList/_view/idxEmployeeList?limit=20&reduce=false  |  [Your Cloudant Key]  |  [Your Cloudant Key Password]  |
		|  upsert  |  https://**[REPLACE]**-bluemix.cloudant.com/employees/$(request.body._id)  |  [Your Cloudant Key]  |  [Your Cloudant Key Password]  |

	- **Click** the **Save** button to save your assembly
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-assembly-save.png?raw=true)
<div style="page-break-after: always;"></div>

1. **Deploy the API**

	- **Click** the **All APIs** link
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-all-apis-link?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Products** link
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-products-link.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **+ Add** button then **Select** the **New Product** menu option
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-add-new-product-link.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the **New Product** dialog opens, **Set** the **Title** to EmployeeAPIs and **Click** the **Create Product** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-new-product-dialog.png?raw=true)
<div style="page-break-after: always;"></div>

	- This will create a new product with default settings.  **Click** the **APIs** menu option on the left hand side of the page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-add-api.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **(+)** Add button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-add-api-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the **Select APIs** dialog opens, **Check** the **EmployeeDirectory** API and **Click** the **Apply** button.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-add-api-dialog.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Save** button to save your changes.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-save.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Publish** button. Looks like a cloud with an up arrow.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **EmployeeCatalog** as the target	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-employee-catalog.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the API Connect menu
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-apic-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **Dashboard**
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-apic-menu-dashboard.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **EmployeeCatalog** to open
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-open-employee-catalog.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **EmployeeAPIs** menu option (three dots)
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-employeeapi-menu.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Select** the **Publish** option
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-employeeapi-menu-publish.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the **Edit visibility** dialog opens, **Click** the **Publish** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-publish-employeeapi-dialog.png?raw=true)
<div style="page-break-after: always;"></div>

	- Congratulations, your API is now published to the Developer Portal!

1. **Register Your App**

	Typically a consumer of the API that you just created will use the developer portal to register the application that they plan on developing or have already developed.  Once the developer has registered their application and subscribed to the API, they can begin to use the API.

	- The first step in registering your app is to create a user account. Open your Developer Portal. If you forgot the URL of the Developer Portal you can always go back to the EmployeeCatalog Settings, there you will find the link for your Developer Portal.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-register-app-portal-url.png?raw=true)
<div style="page-break-after: always;"></div>

	- To create your user account, **Click** the **Create an account** link on the top right side of the page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-create-account.png?raw=true)
<div style="page-break-after: always;"></div>

	- Complete the **Create new account** form by entering your Username, Developer Organization, and Captcha then **Click** the **Create new account** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-create-account-screen.png?raw=true)
<div style="page-break-after: always;"></div>

	- Next, **Login** to the Developer Portal
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-login.png?raw=true)
<div style="page-break-after: always;"></div>

	- Once logged in, the first step is to register an application. To do that **Click** the **Apps** tab at the top of the page
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-apps-tab.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Create new App** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-apps-create-app-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- With the **Register Application** page open, enter a title of **Employee Directory** and **Click** the **Submit** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-create-new-app-page.png?raw=true)
<div style="page-break-after: always;"></div>

	- Once the app has been register **Check** the **Show Client Secret** checkbox. When the Client Secret is revealed, copy and paste it to a safe location. Once you leave this screen you will not have a chance to retrieve it again. You can also **Check** the **Client ID** checkbox to reveal the Client ID, unlike the Client Secret you can retrieve this later. 
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-app-settings-page.png?raw=true)
<div style="page-break-after: always;"></div>

	- Now that there is a registered application, you will need to subscribe to an API Product. To view what API Products are avaialble **Click** the **API Products** tab at the top of the page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-api-products.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **EmployeeAPIs**
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-employee-api.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Subscribe** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-api-subscribe-button.png?raw=true)
<div style="page-break-after: always;"></div>

	- When the **Subscribe** dialog opens, check the **Employee Directory** application and **Click** the **Subscribe** button
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-api-subscribe-dialog.png?raw=true)
<div style="page-break-after: always;"></div>

	- You can test your APIs **Clicking** the **EmployeeDirectory** menu item on the left side of the page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-test-api.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **GET /employees** service on the left side of the page.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-test-api-get-employee.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Click** the **Call Operation** button for the GET /employees service.
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-test-api-call-operation.png?raw=true)
<div style="page-break-after: always;"></div>

	- **Scroll** the right side of the page to see the results
	
		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-developer-test-api-response.png?raw=true)
<div style="page-break-after: always;"></div>


## Lab 4 - Mobile Foundation

### Steps
1. Housekeeping for Interconnect Lab only
2. Download and configure stand-alone app
2. Test the stand-alone app
3. Create Employee Adapter
4. Build & Deploy the Employee Adapter
5. Test the Employee Adapter
4. Add Mobile Foundation Cordova Plugin
5. Update source code to be Mobile Foundation aware
6. Create an Ionic Service Provider

### Detailed Steps

1. **Housekeeping for Interconnect Lab only**

	A couple of items were not installed on the VMWare image for Interconnect. You will need to install these before you can proceed.
	
	- **Install** Java

		Open a terminal and type the following:

		`sudo add-apt-repository ppa:webupd8team/java`
		
		`sudo apt update; sudo apt install oracle-java8-installer`
		
		`sudo apt install oracle-java8-set-default`
		
	- **Upgrade** nodejs

		Recent changes to Ionic require that nodejs be upgraded. In the same terminal, type the following:		
		`sudo apt-get install python-software-properties`
		
		`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`
		
		`sudo apt-get install nodejs`
	
	- **Install** git

		In the same terminal, type the following:
		
		`sudo apt-get install git`
		
		You will be prompted for the student password it is
		
		`Passw0rd!`  The 0 is a zero
		
	- **Install** Maven

		In the same terminal, type the following:
		
		`sudo apt-get install maven`

		You may be prompted for the student password it is
		
		`Passw0rd!`  The 0 is a zero

	- **Install** Ionic Command Line Interface, gulp & Cordova
		
		In the same terminal, type the following:
		
		`sudo npm install -g ionic gulp cordova`

		You may be prompted for the student password it is
		
		`Passw0rd!`  The 0 is a zero
		
	- **Restart VM**		
		
1. **Download and configure stand-alone app**

	You will use git to retrieve the base application from a git repository. First open a terminal, you will run all the commands from the terminal.

	- **Create** a working directory, **type**:
	
		`cd ~/`
		
		`mkdir projects`
		
		`cd projects`
		
	- Use **git** to retrieve source, **type**:
		
		`git clone https://github.com/kenatibm/IC2378-empApp.git`
		
		`cd IC2378-empApp`
		
	- **Install** node modules

		Typically you will not store components of the project that can be easily installed. With Ionic projects you have a package.json file that directs an npm install command what node modules to install, to do that in the IC-2378-empApp directory type:
		
		`npm install`
		
1. **Test the stand-alone app**

	- **Start** Ionic Server

		From the terminal, type the following:
		
		`ionic serve`
		
	- **Open** a browser
		
		Open a browser, such as Google Chrome, and enter http://locahost:8100. You should see the application running. You can test it out. Right now it does not interact with your APIs, only a mock set of data.
		
1. **Create Employee Adapter**

	Adapters are the recommended way to interact with backend systems or APIs. To create an adapter that will provide CRUD functionality is a simple process. Adapters are are created as standalone projects.
	
	- **Change** to projects directory

		`cd ~/projects`
		
	- Use **mfpdev** to create the employee adapter

		`mfpdev adapter create`
		
		Answer the following questions
		
		|  Question  |  Answer  |
		| :--- | :--- |
		| Enter adapter name  | employeeAdapter |
		| Select adapter type | HTTP |
		| Enter group ID |  anything you want such as your company domain |
		
	- **Open** Visual Studio Code

	- In Visual Studio Code, **Open** the **employeeAdapter** folder
	
		`File | Open Folder`

	- **Open** the adapter file

	
	- **Change** the domain and procedures

		There are two sections of the adapter.xml file that you will replace, the connection domain and the procedures. Change the following and then **Save** the file.
	
		> **Note:** the source is in your snippets folder
		
		`<domain>api.us.apiconnect.ibmcloud.com</domain>`
		
		```
		<procedure name="getEmployees" secured="false"/>
	<procedure name="getEmployeeDetail" secured="false"/>
	<procedure name="getFavorites" secured="false"/>
	<procedure name="updateEmployee" secured="false"/>```
	
	- **Open** the **employeeAdapter-impl.js** file

		Once the file is open, remove all the code and replace with the following and then **Save** the file:

	> **Note:** the source is in your snippets folder
	
	> **Important**: Make sure you replace the CLIENT_ID and CLIENT_SECRET values with the values from when you registered your application with the Developer Portal. Also change the **BASE_URL** value. Your **BASE_URL** is the portion after the domain, for example: if your API URL is https://api.us.apiconnect.ibmcloud.com/kennelsonusibmcom-ic2017/employeecatalog/employees/ then the **BASE_URL** would be kennelsonusibmcom-ic2017/employeecatalog/employees
		
		```javascript
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
			var BASE_URL = '<Your Value Here>'
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
	
1. **Build and Deploy the Employee Adapter**

	In this section you will configure mfpdev cli to point to Mobile Foundation on Bluemix. Then you will publish your adapter to Bluemix and test.
	
	- **Go back to your terminal session**

		Make sure you are in your adapter directory, type:
		
		`cd ~/projects/employeeAdapter`
		
	- **Configure mfpdev cli to point to Mobile Foundation on Bluemix**

		`mfpdev server add`
		
		|  Question  |  Answer  |
		|  :---  |  :--- |
		|  Enter the name of the new server profile  |  bluemix-dev  |
		|  Enter the fully qualified URL of this server | https://[YOUR URL]:443  |
		|  Enter the MobileFirst Server administrator login ID: | admin |
		|  Enter the MobileFirst Server administrator password: | [ADMIN PASSWORD] |
		|  Enter the context root of the MobileFirst administration services | mfpadmin |
		|  Enter the MobileFirst Server connection timeout in seconds: | 30 |
		|  Make this server the default?: | Y |
		
		> **Note:** you can find your URL by opening your Mobile Foundation service on your instance of Bluemix. Copy the Server Route.
		
	- **Build** the **Employee Adapter**

		Type the following:
		
		`mfpdev adapter build`

	- **Publish** the **Employee Adapter**

		Type the following:
		
		`mfpdev adapter deploy`
		
1. **Test the Employee Adapter****

	- In a Browser, go to Bluemix and **Click** the Mobile Foundation Console

	- **Click** the **Launch Console** button
	- **Enter** the admin username and password if prompted
	- **Click** the **employeeAdapter** in the Adapters section on the left
	- **Click** the **Resources** tab
	- **Click** the **View Swagger Docs** button
	- **Click** either the **default** link or the **Show/Hide** link to show the methods
	- **Click** the **GET /getEmployees** to expand
	- **Click** the "Try it out!** button
	- **Scroll** to the response to view the result

	