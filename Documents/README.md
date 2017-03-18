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
1. Deploy the API

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
		
		|  Path  |  Operation ID  |  GET Parameter  |
		|  :---  |  :---  |  :---  |
		|  /employees/favorites  | employee.getFavorites | n/a |
		|  /employees/{id}  | employee.findByID | id  (located in Path)|
		

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-favorites.png?raw=true)
<div style="page-break-after: always;"></div>

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-employee-by-id.png?raw=true)
<div style="page-break-after: always;"></div>

		![](https://github.com/kenatibm/Interconnect-2017/blob/master/Documents/images/bluemix-apic-design-path-get-employee-by-id-parameter.png?raw=true)
<div style="page-break-after: always;"></div>


1. **Deploy the API**





