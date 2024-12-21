import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState(false);
  const [cardIndex, setCardIndex] = useState(-1);

  function handleShowAnswer(index) {
    if (index !== cardIndex) {
      setAnswer(true);
      setCardIndex(index);
    } else {
      setAnswer(!answer);
    }
  }
  const questions = [
    {
      question:
        "Conditional access uses signals collected from a user during the sign-in process to decide whether to allow or deny user requests?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "To complete the sentence, select the appropriate option in the answer area. When planning to migrate a public website to Azure. You must plan to ____________",
      options: [
        "pay monthly usage costs.",
        "deploy a VPN",
        "pay to transfer all the website data to Azure",
        "reduce the number of connections to the website",
      ],
      Answer: "1",
    },
    {
      question:
        "A Company needs to implement Azure policies to automatically add a watermark to Microsoft word documents that contain credit card information. Which Azure service can they utilize to implement the requirement?",
      options: [
        "Microsoft Defender for Cloud",
        "Azure Information Protection (AIP)",
        "Azure Active Directory Identity Protection",
        "Microsoft Sentinel",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following Azure services provides serverless workflow orchestration to let you integrate apps, data, systems, or organizations?",
      options: [
        "Azure Bot Service",
        "Azure Logic Apps",
        "Azure Functions",
        "Azure Event Grid",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following is required to access Azure Cloud Shell?",
      options: [
        "Virtual Machine",
        "Azure Web App",
        "Azure Containers",
        "Storage Account",
      ],
      Answer: "4",
    },
    {
      question:
        "Which feature of Azure Monitor allows you to visually analyze telemetry data by integrating with Visual Studio?",
      options: ["Service Health", "Alerts", "Application Insights", "Metrics"],
      Answer: "3",
    },
    {
      question:
        "Azure Sentinel uses playbooks to perform which of the following tasks?",
      options: [
        "Automatically respond to threats",
        "Monitor Azure services",
        "Maintain security certificates",
        "Run PowerShell scripts",
      ],
      Answer: "1",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. If you assign permissions to a user to manage a resource group, the user can manage all resources in that resource group  2. If you assign a tag to a resource group, all the resources in that resource group are assigned the same tag. 3. All the resources deployed in a resource group must use the same Azure region.",
      options: ["Yes", "No"],
      Answer: "1. Yes, 2.No, 3.No",
    },
    {
      question:
        "A Company is considering using Linux-based Azure Container instances to deploy a simple application. The application runs as a stateful application. Which service can be used to provide storage to retrieve and persist data?",
      options: [
        "Azure Blob Storage",
        "Azure Disk Storage",
        "Azure Archive Storage",
        "Azure Files",
      ],
      Answer: "4",
    },
    {
      question:
        "Which Azure component provides information about Azure service incidents and planned maintenance so you can take action to mitigate downtime?",
      options: [
        "Azure Monitor",
        "Azure Security Center",
        "Azure Advisor",
        "Azure Service Health",
      ],
      Answer: "4",
    },
    {
      question:
        "You need to implement a serverless solution satisfying the below requirements:\n • You only pay for the time that your code runs\n • Execution is triggered via an HTTP request\nWhich Azure service should you use to implement this requirement?",
      options: [
        "Azure SQL database",
        "Azure Functions",
        "Azure Virtual Machine",
        "Azure database for PostgreSQL",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following can you use to view which user turned off a specific virtual machine during the last 14 days?",
      options: [
        "Azure Access Control IAM",
        "Azure Activity log",
        "Azure Event Hubs",
        "Azure Service health",
      ],
      Answer: "2",
    },
    {
      question:
        "What should you use in Azure Sentinel to see visualization of an Incident in relation to alert and entities?",
      options: [
        "Workbook",
        "Investigation graph",
        "Connector",
        "Analytics rule",
      ],
      Answer: "2",
    },
    {
      question: "Azure Active Directory lets you set dynamic membership rules?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Azure Cloud Shell can be accessed from a web browser on a Linux computer?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Authentication is the process of establishing which level of access an authenticated user or service has?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Which of the following is the least expensive storage replication option?",
      options: [
        "Geo Zone redundant storage (GZRS)",
        "Locally redundant storage (LRS)",
        "Zone redundant storage (ZRS)",
        "Geo redundant storage (GRS)",
      ],
      Answer: "2",
    },
    {
      question:
        "When you are implementing a Software as a Service (SaaS) solution, you are responsible for:",
      options: [
        "Defining scalability rules",
        "Configuring High availability",
        "Installing the SaaS solution",
        "Configuring the SaaS solution",
      ],
      Answer: "4",
    },
    {
      question:
        "If the resource group named MyResourceGroup has a delete lock:",
      options: [
        "The delete lock must be released in order for the administrator to delete the MyResourceGroup.",
        "Only members of Global administrators group can delete MyResourceGroup.",
        "Administrator needs to add an Azure tag in order to delete MyResourceGroup.",
        "Administrator needs to change Azure policy in order to delete MyResourceGroup.",
      ],
      Answer: "1",
    },
    {
      question:
        "Your company is planning on hosting resources in Azure. Is it possible for outside users to have access to these resources in Azure?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You can use Availability Zones in Azure to protect Azure virtual machines from a region failure?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Companies can increase the Service Level Agreement (SLA) guaranteed uptime by purchasing multiple subscriptions?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Which built-in role gives you access to manage blueprint definitions but not assign them?",
      options: [
        "Blueprint Operator",
        "Blueprint Contributor",
        "Owner",
        "Contributor",
      ],
      Answer: "2",
    },
    {
      question:
        "You have an Azure subscription and multiple windows10 devices. You need to ensure that only users whose devices have latest security patches installed can access Azure AD integrated applications. What should you implement?",
      options: [
        "Azure Bastion",
        "Azure Firewall",
        "Azure Policy",
        "Conditional access policy",
      ],
      Answer: "3",
    },
    {
      question:
        "You have an Azure Virtual machine that is accessed only from 9:00AM - 5:00PM each day. What should you do to minimize costs but preserve the associated hard disks and data?",
      options: [
        "Resize the Virtual Machine",
        "Scale down the Virtual Machine",
        "Delete the Virtual Machine",
        "Deallocate the Virtual Machine",
      ],
      Answer: "4",
    },
    {
      question:
        "Which Azure Service provides a graphical way to model business processes as a series of steps?",
      options: [
        "API Apps",
        "Azure Logic Apps",
        "Azure Service Fabric",
        "Azure Functions",
      ],
      Answer: "2",
    },
    {
      question:
        "Which factor always increases your network costs no matter how your Azure topology is constructed?",
      options: [
        "Port Speed",
        "The amount of inbound data",
        "Data transfer within same availability Zone",
        "The amount of outbound data",
      ],
      Answer: "4",
    },
    {
      question:
        "Which of the following permissions you need to delete an Azure Blueprint? (Choose three)",
      options: [
        "Microsoft.Blueprint/blueprints/delete",
        "Microsoft.Blueprint/blueprints/artifacts/delete",
        "Microsoft.Blueprint/blueprintAssignments/delete",
        "Microsoft.Blueprint/blueprints/versions/delete",
        "Microsoft.Blueprint/blueprints/versions/write",
      ],
      Answer: "1,2,4",
    },
    {
      question:
        "Which resources can be used as a source for a Network security group inbound security rule?",
      options: [
        "Service Tags only",
        "IP Addresses only",
        "Application Security groups only",
        "IP Addresses, Service Tags and Application Security groups",
      ],
      Answer: "4",
    },
    {
      question:
        "You are an administrator who must assign a role to a new employee. The employee needs to be able to have read-only access to all resources. Which role should you assign the employee using the principle of least privilege?",
      options: ["User access administrator", "Reader", "Contributor", "Owner"],
      Answer: "2",
    },
    {
      question: "At which layer of OSI does Express Route Operate?",
      options: ["Layer 3", "Layer 2", "Layer 7", "Layer 5"],
      Answer: "1",
    },
    {
      question:
        "A company wants to ensure its customer experience is minimally affected by any cloud resource failure while designing a cloud solution that will be deployed on Azure Cloud. Which of the following benefits of cloud computing should the company prioritize in its design plan?",
      options: ["Agility", "Scalability", "High availability", "Elasticity"],
      Answer: "3",
    },
    {
      question:
        "What is one point of entry that combines access to multiple resources behind it in federated identity management?",
      options: [
        "Single sign-on",
        "Single registration",
        "Proxy sign-on",
        "Flow control",
      ],
      Answer: "1",
    },
    {
      question:
        "You are building an application using Azure and you need a service that sends push notifications from the backend. Which Azure service can meet this requirement?",
      options: [
        "Azure App Service",
        "Azure SignalR service",
        "Azure Notification Hubs",
        "Azure cognitive search",
      ],
      Answer: "3",
    },
    {
      question:
        "You can create Group policies in Azure Active Directory (Azure AD)?",
      options: ["True", "False"],
      Answer: "1",
    },
    {
      question: "Microsoft Office 365, Gmail, Dropbox are examples of SaaS?",
      options: ["True", "False"],
      Answer: "1",
    },
    {
      question:
        "What do you call the strategy of layering multiple security defenses on top of each other to provide stronger protection than any single mechanism alone?",
      options: [
        "Azure Firewall",
        "Network Access control",
        "Azure AD Conditional access",
        "Defense in Depth",
      ],
      Answer: "4",
    },
    {
      question:
        "Your company needs to run 10 Windows Server 2016 and 20 Linux virtual machines on a regular basis and remove them after their task processing is finished. Which Azure Service should you use to minimize the administrative effort required to deploy and delete these virtual machines?",
      options: [
        "Azure DevTest Labs",
        "Microsoft Virtual Desktop",
        "Azure Virtual Machine scale sets",
        "Azure reserved VM instances",
      ],
      Answer: "1",
    },
    {
      question:
        "You can deploy physical servers in which of the following cloud models?",
      options: [
        "Private cloud only",
        "Private cloud and Hybrid Cloud only",
        "Hybrid cloud only",
        "Private cloud, hybrid cloud and public cloud",
      ],
      Answer: "2",
    },
    {
      question:
        "You plan to deploy several Azure Virtual Machines. You need to control the ports that devices on the internet can use to access the virtual machines. What should you use?",
      options: [
        "Azure Key Vault",
        "Network Security Group (NSG)",
        "Azure Active Directory (AAD)",
        "Network gateway",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company plans to automate the deployment of servers in Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?",
      options: [
        "Azure Multi Factor Authentication",
        "Azure Key Vault",
        "Azure Information Protection",
        "Azure Security Centre",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company plans to deploy an Artificial intelligence (AI) solution in Azure. What should the company use to build, test and deploy predictive analytics solutions?",
      options: [
        "Azure Machine learning Designer",
        "Azure Logic Apps",
        "Azure Cosmos DB",
        "Azure Batch",
      ],
      Answer: "1",
    },
    {
      question:
        "Your company plans to automate the deployment of servers in Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?",
      options: [
        "Azure Multi Factor Authentication",
        "Azure Key Vault",
        "Azure Information Protection",
        "Azure Security Centre",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company's Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. On-Premise data center will be retired post migration. You are required to employ a strategy that reduces the effect on users once the planned migration is completed. Solution: You plan to sync all the Active Directory user accounts to Azure Active Directory (AAD). Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You have 1000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to pay-as-you-go subscription and need to identify which expenditure model to use for the planned solution. Which expenditure model would you identify?",
      options: ["Capital", "Elastic", "Operational", "Scalable"],
      Answer: "3",
    },
    {
      question:
        "You create a Resource group named RG1 in Azure Resource Manager. You need to prevent the accidental deletion of resources in RG1. Which of the below mentioned settings would you use?",
      options: ["Deployment slots", "Locks", "Policies", "Automation Script"],
      Answer: "2",
    },
    {
      question:
        "Your developers have created 10 web applications that must be hosted on Azure and you need to determine which Azure web tier plan to use for hosting the web apps. The web tier plan must meet the following requirements. Web apps will use custom domains. Each web app requires 10GB of storage. Web apps must run in dedicated computer instances. Load balancing between instances must be included. Costs must be minimized. Which Web tier plan should you use?",
      options: ["Basic", "Standard", "Free", "Shared"],
      Answer: "2",
    },
    {
      question:
        "Select the appropriate option to complete the below sentence. Data that is stored in the archive tier of an Azure storage account:",
      options: [
        "can only be read using azure backup",
        "must be restored before the data can be accessed",
        "can be accessed at any time using azcopy.exe",
        "must be rehydrated before the data can be accessed.",
      ],
      Answer: "4",
    },
    {
      question:
        "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which azure feature can be used to provide best video playback experience. Which feature will you recommend?",
      options: [
        "an Azure Express Route Circuit",
        "a content delivery network (CDN)",
        "an Azure Traffic manager profile",
        "an application gateway",
      ],
      Answer: "2",
    },
    {
      question:
        "Select the answer that correctly completes the sentence. An Azure Web App that requires to connect to an on-premise Microsoft SQL server is an example of:",
      options: ["Hybrid", "Private", "Multi-Vendor", "Public"],
      Answer: "1",
    },
    {
      question:
        "You have an on-premises application that sends email notifications automatically based on a rule and you plan to migrate this application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?",
      options: [
        "Server Image from Azure Marketplace",
        "Azure API App",
        "Logic App",
        "Azure Virtual Machine",
      ],
      Answer: "3",
    },
    {
      question:
        "Your company has an Azure Subscription that contains resources in several regions. You need to ensure that users can create resources in only those regions?",
      options: [
        "Azure Policy",
        "Read only lock",
        "Management Group",
        "Reservation",
      ],
      Answer: "1",
    },
    {
      question:
        "SLA in Azure is a formal agreement between Microsoft and customer. Which factor is covered in SLA?",
      options: ["Availability", "Scalability", "Elasticity", "Durability"],
      Answer: "1",
    },
    {
      question:
        "A Company is planning on deploying Microsoft Azure resources to a resource Group (RG1) but the resources will belong to different locations. Can you have resources that belong to multiple locations in the same Resource Group?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You plan to provision Infrastructure as a service (IaaS) resource in Azure. Which three resources are example of IaaS?",
      options: [
        "Azure Web App",
        "Azure Virtual Network",
        "Azure Disk Storage",
        "Azure Virtual Machine",
        "Azure Logic App",
      ],
      Answer: "2, 3, 4",
    },
    {
      question:
        "Your Company's Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment's design from Microsoft. This is however not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to minimum. You recommend that the company subscribes to the Professional Direct Support plan. Does this Solution meet the Goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "An Azure Administrator plans to run a PowerShell Script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script?",
      options: [
        "A Computer that runs Windows 10 and has Azure PowerShell module installed.",
        "A Computer that runs macOS and has PowerShell Core 6.0 installed.",
        "A Computer that runs Linux and has Azure PowerShell module installed.",
        "A Computer that runs Chrome OS and uses Azure Cloud Shell.",
        "A Computer that runs Linux and has Azure CLI tools installed.",
      ],
      Answer: "1, 2, 4",
    },
    {
      question:
        "Your Company is planning to move from an on-premise environment to Azure and you have decided to develop your application using Docker as the development environment. Which of the following is the best service to use for this scenario?",
      options: [
        "Azure Virtual Machine.",
        "Azure Functions",
        "Azure Container Instances",
        "Azure App Service",
      ],
      Answer: "3",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements You must install the software that you want to use with IaaS. - 1.yes 2.no Answer: 2 You must apply software updates when Consuming SaaS service. - 1.yes 2.no Answer: 2 Azure Backup is an example of PaaS. - 1.yes 2.no Answer: 1",
      options: ["Yes", "No"],
      Answer: "2, 2, 1",
    },
    {
      question:
        "You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines in RG1. The solution must ensure that other objects can be created in RG1. What should you use?",
      options: ["Azure Role", "Tag", "Azure Policy", "Lock"],
      Answer: "3",
    },
    {
      question:
        "You need to ensure that when Azure Active Directory (AAD) users connect to it from the internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?",
      options: [
        "Azure AD Identity Protection",
        "Azure Advanced Threat Protection",
        "Azure AD Privileged Identity Management",
        "Azure AD Connect health.",
      ],
      Answer: "1",
    },
    {
      question:
        "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify?",
      options: [
        "Azure IoT Hub",
        "Azure File Storage",
        "Azure Queue Storage",
        "Azure Data Lake",
      ],
      Answer: "1, 4",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. PaaS Solution provides full control of Operating Systems that host applications. 2.PaaS Solution provides additional Memory to apps by changing pricing tiers.  3. PaaS Solution can automatically scale the number of instances.",
      options: ["Yes", "No"],
      Answer: "1.No, 2.Yes, 3.Yes",
    },
    {
      question:
        "You plan to implement an Azure Database Solution. You need to implement a database solution that meets the below mentioned requirements: Can add data concurrently from multiple regions. Can store JSON documents. Which database service should you deploy?",
      options: [
        "SQL Data Warehouse",
        "Azure Database for PostgreSQL servers",
        "Azure Cosmos DB",
        "Azure Database for MySQL servers",
      ],
      Answer: "3",
    },
    {
      question:
        "Your company plans to migrate all its data and resources to Azure. The company's migration plan states that only Platform as a Service (PaaS) solution must be used in Azure. You need to deploy an Azure environment that meets the company Migration Plan. You decide to create Azure Virtual Machines, Azure SQL databases and Azure Storage. Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify?",
      options: [
        "Azure IoT Hub",
        "Azure File Storage",
        "Azure Queue Storage",
        "Azure Data Lake",
      ],
      Answer: "1, 4",
    },
    {
      question:
        "You have an on-premise network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The Solution must minimize capital and operational expenditure costs. What should you include in the recommendation?",
      options: [
        "A Private Cloud",
        "An additional data center",
        "A Hybrid Cloud",
        "Full blown migration to Public Cloud",
      ],
      Answer: "3",
    },
    {
      question:
        "You are tasked with deploying Azure virtual machines for your company and you need to make use of appropriate Cloud deployment solution. You make use of Software as a Service (SaaS). Does the Solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "When you are implementing Software as a Service (SaaS) solution, you are responsible for which of the following?",
      options: [
        "Installing the SaaS Solution",
        "Configuring High Availability",
        "Configuring the SaaS Solution",
        "Defining Scalability rules",
      ],
      Answer: "3",
    },
    {
      question:
        "You plan to migrate a Web Application to Azure. The Web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?",
      options: [
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Infrastructure as a Service (IaaS)",
        "Database as a Service (DaaS)",
      ],
      Answer: "1",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. You can deploy Azure Resource Manager (ARM) templates by using the Azure Portal.  2.Azure Resource Manager (ARM) templates can define infrastructure by using code.  3.Each Azure resource to be deployed requires a separate Azure Resource Manager (ARM) template. ",
      options: ["Yes", "No"],
      Answer: "1.Yes, 2.Yes, 3.No",
    },
    {
      question:
        "Which two features or services can be integrated with Azure Monitor? Each correct Answer presents part of the solution.",
      options: [
        "Azure status",
        "Application Insights",
        "Azure Advisor",
        "Log Analytics",
        "Azure Service Health",
      ],
      Answer: "2, 4",
    },
    {
      question:
        "You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?",
      options: [
        "Azure Resource Manager (ARM)",
        "Microsoft Visual Studio",
        "a Windows command prompt",
        "a web browser",
      ],
      Answer: "4",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. A network security group (NSG) will block all network traffic by default.  2.Application security groups can be specified as part of network security group (NSG) rules.  3.Network security groups (NSGs) always include inbound security rules & outbound security rules. 4.Azure Arc can manage physical servers that run Linux.",
      options: ["Yes", "No"],
      Answer: "1.No, 2.Yes, 3.Yes 4.Yes",
    },
    {
      question:
        "Instructions: To Answer drag the appropriate Term from the column on the left to its description on the right. Each benefit may be used once, more than once, or not at all.  1. The ability to use the same credentials to access multiple resources & applications from different providers __________ 2.The process of identifying the access level of a user or service ___________ 3.Requires several elements to identify a used or a service ______________",
      options: [
        "Authorization",
        "Multi-factor authentication (MFA)",
        "Single Sign On",
      ],
      Answer:
        "1.Single Sign-on (SSO), 2.Authorization, 3.Multi-factor authentication (MFA)",
    },
    {
      question:
        "In Azure Firewall _____________ enables users on the internet to access a server on a Virtual Network?",
      options: [
        "Network interfaces",
        "Virtual networks",
        "Application rules",
        "Network Address Translation (NAT) rules",
        "Network rules",
      ],
      Answer: "4",
    },
    {
      question:
        "You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?",
      options: [
        "Adaptive network hardening in Azure Security Center",
        "Azure Service Health",
        "Azure Sentinel workbooks",
        "Adaptive application controls in Azure Security Center",
      ],
      Answer: "3",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. You can have two Azure Storage accounts that have the same name in the same Azure Subscription. 2.In an Azure Virtual machine scale set, the Virtual machines are configured identically 3.The number of Azure Virtual machines in a Virtual machine scale set can increase automatically. 4.The number of Azure Virtual machines in a Virtual machine scale set can decrease automatically.",
      options: ["Yes", "No"],
      Answer: "1.No, 2.Yes, 3.Yes 4.Yes",
    },
    {
      question: "Where does Azure Monitor store event data?",
      options: [
        "an Azure Blob Storage account",
        "Azure Storage Queue",
        "Azure SQL Database",
        "a Log Analytics workspace",
      ],
      Answer: "4",
    },
    {
      question: "All Azure Services that are in Public Preview are __________",
      options: [
        "Provided without any documentation",
        "Only configurable from Azure CLI",
        "Excluded from Service Level Agreements",
        "Only configurable from Azure portal",
      ],
      Answer: "3",
    },
    {
      question:
        "You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify?",
      options: [
        "the volume of outbound data",
        "the volume of inbound data",
        "the service tier",
        "the Azure region",
        "the type of processed data",
      ],
      Answer: "1, 3, 4",
    },
    {
      question:
        "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
      options: [
        "Modify an Azure Traffic Manager profile",
        "Modify a network security group (NSG)",
        "Modify a DDoS protection plan",
        "Modify an Azure firewall",
      ],
      Answer: "2, 4",
    },
    {
      question:
        "What provides a unified way to project and manage non-Azure resources in Azure Resource Manager (ARM)?",
      options: [
        "Azure Migrate",
        "Azure AD Connect",
        "Azure Arc",
        "Azure Front Door",
      ],
      Answer: "3",
    },
    {
      question:
        "_________ provides a global view of the status of Azure services, regions and specific resources.",
      options: [
        "Application Insights",
        "Azure Advisor",
        "Azure Service Health",
      ],
      Answer: "3",
    },
    {
      question:
        "Your Azure environment contains multiple Azure Virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager Profile. Does this meet the Goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Your Azure environment contains multiple Azure Virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the Goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. Azure Advisor can generate a list of Azure VM's that are protected by Azure backup. 2.If you implement the security recommendations provide by Azure Advisor, your company's secure score will decrease. 3.To maintain Microsoft support, you must implement the security recommendations provided by Azure Advisor within a period of 30 days",
      options: ["Yes", "No"],
      Answer: "1.No, 2.No, 3.No",
    },
    {
      question:
        "__________ a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
      options: [
        "Azure Policies provide",
        "Resource groups provide",
        "Azure Resource Manager templates provide",
        "Management groups provide",
      ],
      Answer: "3",
    },

    {
      question:
        "Azure Cost Management Tool can help you Answer which questions?",
      options: [
        "How much would I save by migrating to the cloud?",
        "What will my Azure resource cost once I deploy it?",
        "Which deployed Azure resources are underutilized?",
        "How have other developers addressed the deployment issues I have encountered?",
      ],
      Answer: "3",
    },
    {
      question:
        "Match the cloud service models to the appropriate solutions. To Answer, drag the appropriate model from the column on the left to its offering on the right. Each model may be used once, more than once, or not at all. 1.A Cloud-based file server -  2.A Cloud-based Accounting System - 3.A Cloud-based service for custom Apps - ",
      options: [
        "Infrastructure as a service (IaaS)",
        "Platform as a service (PaaS)",
        "Software as a service (SaaS)",
      ],
      Answer:
        "Infrastructure as a service (IaaS), Software as a service (SaaS), Platform as a service (PaaS)",
    },
    {
      question:
        "Your Azure environment contains multiple Azure Virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager Profile. Does this meet the Goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1.Data that is stored in an Azure Storage account automatically has at least three copies 2.All data that is copied to an Azure Storage account is backed up automatically to another azure data center. 3.An Azure Storage account can contain up to 2 TB of data and up to one million files. 4.Availability Zones are implemented in all Azure Regions ",
      options: ["Yes", "No"],
      Answer: "1.Yes, 2.No, 3.No, 4.No",
    },
    {
      question:
        "Which of the following statements about Azure cost and VM management is true?",
      options: [
        "Deleting a VM automatically deletes all its data disks and Public IP addresses as well.",
        "When a VM is stopped (deallocated), it will not incur any more charges.",
        "If you need to move a VM reservation to another region, You have to make a new reservation and exchange the old one for new one.",
        "Resources themselves do not cost anything. The resource group containing them incur charges.",
      ],
      Answer: "3",
    },
    {
      question:
        "Your organization is moving to the Azure cloud in order to take advantage of the consumption based expense model of cloud computing. Which of the following is an advantage of the consumption based expense model? (Choose two)",
      options: [
        "The importance of estimating future resource needs.",
        "The ability to pay for more resources when they are needed.",
        "The ability to stop paying for resources that are no longer needed.",
        "The ability to make one-time, up-front expenditures to purchase or secure tangible resources.",
      ],
      Answer: "2, 3",
    },
    {
      question:
        "A company needs to implement a solution within Microsoft Azure. Below are the Key requirements for this solution: Ability to store JSON documents, Ensure low latency access to data from around the world. Which of the following should you consider for this requirement?",
      options: [
        "Azure SQL Data Warehouse",
        "Azure Cosmos DB",
        "Azure SQL Database",
        "SQL Server Stretch database",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company's Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, On-Premise data center will be retired post migration. You are required to employ a strategy that reduces the effect on users once the planned migration is completed. Solution: You plan to require Azure Multi-Factor Authentication (MFA) Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question: "An Azure container instance is an example of an ___________",
      options: [
        "Compute service",
        "Identity service",
        "Networking service",
        "Storage service",
      ],
      Answer: "1",
    },
    {
      question: "Application Insights is a feature of ____________",
      options: [
        "Azure Advisor",
        "Azure Application Gateway",
        "Azure Arc",
        "Azure Monitor",
      ],
      Answer: "4",
    },
    {
      question:
        "A company wants to host a mission critical application on a set of Virtual Machines within Microsoft Azure. They want to ensure they can setup the infrastructure in Azure to guarantee the maximum possible uptime for the application. Which of the following can you make use of in Azure to fulfill this requirement? (Choose two)",
      options: [
        "Resource Groups",
        "Availability Zones",
        "Resource Tags",
        "Availability Sets",
      ],
      Answer: "2, 4",
    },
    {
      question:
        "Which of the following resources are mandatory for building an Azure virtual machine? (Choose two)",
      options: [
        "Public IP address",
        "Network Interface",
        "Data disks",
        "OS disks",
      ],
      Answer: "2, 4",
    },
    {
      question:
        "A ____________ for a managed instance enables data access to your managed instance from outside the virtual network.",
      options: [
        "Private endpoint",
        "Public endpoint",
        "Secure endpoint",
        "Network endpoint",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following should you enable to link to a service that's powered by Azure Private link?",
      options: [
        "Public endpoint",
        "Private endpoint",
        "A Virtual Private Network",
        "A Public Network",
      ],
      Answer: "2",
    },
    {
      question:
        "In Azure App service, a(n) ___________ is the compute resource that azure provides for hosting a website or web application.",
      options: [
        "Azure application Template",
        "App Service deployment slot",
        "App Service plan",
        "App Service Pipeline",
      ],
      Answer: "3",
    },
    {
      question: "Azure PowerShell modules can be installed on macOS.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Two Azure subscriptions can be merged into a single subscription.",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question: "Azure Cosmos DB is an example of Software as a service (SaaS)",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Your company has data centers in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two data centers as geo-clustered sites for site redundancy. You need to recommend an Azure Storage redundancy option. You have the following data storage requirements:\n- Data must be stored on multiple nodes.\n- Data must be stored on nodes in separate geographic locations.\n- Data can be read from the secondary location as well as from Primary location.",
      options: [
        "Geo-redundant storage",
        "Read access geo-redundant storage",
        "Zone-redundant storage",
        "Locally redundant storage",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company has virtual machines hosted in Microsoft Azure. The VMs are located in a single Azure Virtual Network named VNet1. The company has users that work remotely. The remote workers require access to the VMs in VNet1. You need to provide access for the remote workers. What should you do?",
      options: [
        "Configure a Site-to-Site (S2S) VPN.",
        "Configure a VNet-to-VNet VPN.",
        "Configure a Point-to-Site (P2S) VPN.",
        "Configure DirectAccess on a Windows Server 2019 server VM.",
        "Configure a Multi-Site VPN",
      ],
      Answer: "3",
    },
    {
      question:
        "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
      options: [
        "a read-only lock",
        "an Azure policy",
        "a management group",
        "a reservation",
      ],
      Answer: "2",
    },
    {
      question:
        "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?",
      options: ["Private", "Hybrid", "Public", "Community"],
      Answer: "3",
    },
    {
      question:
        "Select the appropriate Answer choice which completes the sentence correctly:\nA Cloud service that supports a maximum of 20 instances is more _________ than a service that supports a maximum of 5 instances.",
      options: ["Distributed", "Scalable", "Secure"],
      Answer: "2",
    },
    {
      question:
        "Which of the following is a feature of an Azure virtual network?",
      options: [
        "resource cost analysis",
        "packet inspection",
        "geo-redundancy",
        "isolation and segmentation",
      ],
      Answer: "4",
    },
    {
      question:
        "What statement applies to child resources when creating an Azure policy for parent resource?",
      options: [
        "Policies are rejected by all child resources",
        "Policies are inherited by all child resources",
        "Policies are merged into all child resources",
        "Policies apply only to parent resources",
      ],
      Answer: "2",
    },
    {
      question:
        "What should you do to bring Azure storage into your virtual network with a dedicated IP address?",
      options: [
        "Peer your Azure virtual network with an Azure Storage Vnet.",
        "Create a site-to-site VPN with Azure VPN Gateway",
        "Create a private connection with Azure ExpressRoute",
        "Create a private endpoint.",
      ],
      Answer: "4",
    },
    {
      question:
        "When using the Azure Site recovery service, what Azure storage type does Microsoft recommend for replication to Azure?",
      options: [
        "Premium Storage",
        "Virtual Storage",
        "Locally redundant Storage",
        "Geo redundant Storage",
      ],
      Answer: "4",
    },
    {
      question:
        "Your company plans to move several servers to Azure. The company's compliance policy states that a server named FinServer must be on a separate network segment. You are evaluating which Azure services can be used to meet the compliance policy requirements. Which Azure solution should you recommend?",
      options: [
        "a resource group for FinServer and another resource group for all the other servers.",
        "a virtual network for FinServer and another virtual network for all the other servers.",
        "a VPN for FinServer and a virtual network gateway for each other server.",
        "one resource group for all the servers and a resource lock for FinServer.",
      ],
      Answer: "2",
    },
    {
      question:
        "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. What are two possible solutions? Each correct Answer presents a complete solution.",
      options: [
        "Deploy the virtual machines to two or more availability zones",
        "Deploy the virtual machines to two or more resource groups",
        "Deploy the virtual machines to a scale set",
        "Deploy the virtual machines to two or more regions",
      ],
      Answer: "1, 4",
    },
    {
      question:
        "Select the Answer that correctly completes the sentence. When you transfer data to an Azure resource, its known as",
      options: ["external", "internal", "ingress", "egress"],
      Answer: "3",
    },
    {
      question:
        "Select the Answer that correctly completes the sentence. When you transfer data from an Azure resource, its known as",
      options: ["external", "internal", "ingress", "egress"],
      Answer: "4",
    },
    {
      question:
        "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines. You need to recommend which Azure resources must be created for the planned solution. Which two resources should you include in the recommendation?",
      options: [
        "a virtual network gateway",
        "a load balancer",
        "an application gateway",
        "a virtual network",
        "a gateway subnet",
      ],
      Answer: "1, 4",
    },
    {
      question:
        "You are leading a team of developers on a project whose goal is to improve customer experience on a credit card company's website. The solution requires custom code without the overhead of managing operating systems or infrastructure. Which of the following cloud offerings would you suggest to your client?",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "On-premises Infrastructure",
        "Software as a Service (SaaS)",
      ],
      Answer: "2",
    },
    {
      question:
        "Your organization has moved its operations to the Azure Cloud and wants to ensure that it enforces Zero trust security principles. Which of the following is an example of how the organization can enforce Zero trust principle of 'assume breach'?",
      options: [
        "Apply sensitivity labels to all documents",
        "Encrypt files in transit and at rest",
        "Create a policy that states that all confidential items can not be viewed or modified",
        "Use labels to verify user access to emails",
      ],
      Answer: "2",
    },
    {
      question:
        "Additional costs are incurred by creating additional resource groups in an Azure Subscription.",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Additional data transfer costs are incurred by copying data from Azure to on-premises network over a VPN.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "The Azure spending limit is fixed and cannot be increased or decreased.",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "This question requires that you evaluate the underlined text to determine if it is correct. Azure Scale Set enables you to scale to thousands of virtual machines for high-performance computing and large-scale parallel jobs. Instructions: Review the underlined text. If it makes the statement correct, Select 'No change is needed'. If the statement is incorrect, select the Answer choice that makes the statement correct?",
      options: [
        "No change is needed",
        "Automatic Scaling",
        "Azure Batch",
        "An availability zone",
      ],
      Answer: "3",
    },
    {
      question: "What is required to use Azure Cost Management?",
      options: [
        "Enterprise agreement",
        "Software Assurance",
        "Azure Plan",
        "Microsoft Customer agreement",
      ],
      Answer: "4",
    },
    {
      question:
        "How should you calculate the monthly uptime percentage? To Answer, select the appropriate options in the Answer area",
      options: [
        "Downtime in Minutes x 100",
        "Maximum Available Minutes x 100",
        "(Maximum Available Minutes - Downtime in Minutes) / Maximum Available Minutes x 100",
      ],
      Answer: "3",
    },
    {
      question:
        "Which of the following Azure services don't require you to select a particular region?",
      options: [
        "Virtual Machine",
        "Azure Active Directory",
        "Storage Account",
        "Azure DNS",
        "Azure Traffic Manager",
      ],
      Answer: "2",
    },
    {
      question: "What is required to use Azure Cost Management?",
      options: [
        "Enterprise agreement",
        "Software Assurance",
        "Azure Plan",
        "Microsoft Customer agreement",
      ],
      Answer: "4",
    },
    {
      question:
        "Which of the following Azure services don't require you to select a particular region?",
      options: [
        "Virtual Machine",
        "Azure Active Directory",
        "Storage Account",
        "Azure DNS",
        "Azure Traffic Manager",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The Virtual machines are currently hosted on the Hyper-V hosts in a data center. You are tasked to ensure that the intended Azure Solution uses the correct expenditure model. Solution: You recommend the use of Operational Expenditure model. Does this solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You are the data engineer for your company. An application uses a NoSQL database to store data. The database uses key-value and wide-column NoSQL database type. Developers need to access data in the database using an API. You need to determine which API to use for the database model and type. Which two APIs should you use?",
      options: [
        "SQL API",
        "MongoDB API",
        "Cassandra API",
        "Gremlin API",
        "Table API",
      ],
      Answer: "3, 5",
    },
    {
      question:
        "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 can't connect to the other virtual machines. How should you configure VM1?",
      options: [
        "Have two virtual interfaces",
        "Run a different operating system than the other virtual machine",
        "Deployed to a separate resource group",
        "Deployed to a separate virtual network",
      ],
      Answer: "4",
    },
    {
      question:
        "Which of the following Azure component types can be a part of Azure Blueprint definition?",
      options: [
        "Azure RBAC",
        "Azure Policy Assignment",
        "Azure Subscription",
        "Azure Role Assignment",
        "Azure Role Definition",
        "Azure Resource Manager Templates",
        "Azure Cloud Shell",
        "Azure Resource Groups",
      ],
      Answer: "1, 2, 5, 6",
    },
    {
      question:
        "This question requires that you evaluate the underlined text to determine if it is correct. Your company implements Azure Sentinel to automatically add a watermark to Microsoft Word documents that contain credit card information. Instructions: Review the underlined text. If it makes the statement correct, Select 'No change is needed'. If the statement is incorrect, select the Answer choice that makes the statement correct?",
      options: [
        "No change is needed",
        "Azure Information Protection",
        "DDoS protection",
        "Azure Active Directory (AAD) Identity Protection",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following would you use to setup communication between an on-premises VPN device and an Azure VPN gateway through an encrypted tunnel over the internet?",
      options: [
        "ExpressRoute",
        "Point-to-Site (P2S) VPN",
        "Site-to-Site (S2S) VPN",
      ],
      Answer: "3",
    },
    {
      question:
        "You can manage an on-premises Windows server as an Azure resource by using which of the following?",
      options: [
        "Azure AD connect",
        "Azure VPN gateway",
        "Azure Arc",
        "Azure Pipelines Agent",
      ],
      Answer: "3",
    },
    {
      question:
        "DNS Server running on a Virtual Machine is an example of PaaS?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "SQL Server installed on a Virtual Machine is an example of Platform as a Service?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "When you need to delegate permissions to several Azure Virtual machines simultaneously. You must deploy the Azure Virtual Machines",
      options: [
        "to the same availability Zone",
        "to the same Azure Resource Group",
        "to the same Azure region",
        "by using the same Azure resource manager Template",
      ],
      Answer: "2",
    },
    {
      question:
        "A Company is planning on setting up a solution in Microsoft Azure. The solution has a following Key requirement: Give the ability to detect and diagnose anomalies in Web Apps. Which of the following would be best suited for this requirement?",
      options: [
        "Azure Application Insights",
        "Azure Databricks",
        "Azure Logic App",
        "Azure App Service",
      ],
      Answer: "1",
    },
    {
      question:
        "You are working on understanding all the key terms when it comes to international standards, data privacy and data protection policies. Which of the following choices pertains to the following definition? 'An Organization that defines international standards across all industries.'",
      options: ["Azure Government", "ISO", "GDPR", "NIST"],
      Answer: "2",
    },
    {
      question:
        "Which of the following is one of the features of Azure Virtual Network?",
      options: [
        "Geo-redundancy",
        "Isolation and Segmentation",
        "Packet Inspection",
        "Resource Cost analysis",
      ],
      Answer: "2",
    },
    {
      question:
        "Monthly Salaries of technical personnel of an organization are an example of operational expenditure (OpEx) costs?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Azure Monitor can monitor the performance of on-premises computers and related infrastructure components yourself.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Azure Key Vault automatically generates a new secret after every use?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question: "Deploying your own datacenter is an example of CapEx.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Which of the following should you use to evaluate whether your company's Azure environment meets regulatory requirements?",
      options: [
        "Azure Service Health",
        "Microsoft Defender for Cloud",
        "Azure Knowledge Center",
        "Azure Advisor",
      ],
      Answer: "2",
    },
    {
      question:
        "What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?",
      options: ["Feature availability", "Bandwidth", "Uptime", "Performance"],
      Answer: "3",
    },
    {
      question:
        "You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?",
      options: [
        "A virtual machine data disk",
        "A File service in a storage account",
        "A Blob service in a storage account",
        "An Azure SQL database",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?",
      options: [
        "Virtual machine scale sets",
        "Azure API Management service",
        "Management groups",
        "Azure Resource Manager templates",
      ],
      Answer: "4",
    },
    {
      question:
        "Which node in the Azure portal should you use to assign a user the Reader role for a resource group?",
      options: [
        "User access management",
        "Policy Hub",
        "Access Control (IAM)",
        "User role management",
      ],
      Answer: "3",
    },
    {
      question:
        "To deploy an application to a number of Azure virtual machines, you should create a universal group. Instructions: Review the underlined text. If it makes the statement correct, select 'No Change is needed'. If the statement is incorrect, select the Answer choice that makes the statement correct.",
      options: ["No Change is needed", "Resource", "Deployment", "Security"],
      Answer: "3",
    },
    {
      question:
        "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
      options: [
        "Configure Azure Cost Management budgets.",
        "Deallocate the virtual machines during off hours.",
        "Use Azure reservations.",
        "Use Azure Hybrid Benefit.",
      ],
      Answer: "4",
    },
    {
      question:
        "If Windows Server or Microsoft SQL Server licenses are covered by __________, you can repurpose the licenses on Azure Virtual machines.",
      options: [
        "An End user license agreement (EULA)",
        "Microsoft Lifecycle Policy",
        "Software Assurance",
      ],
      Answer: "3",
    },
    {
      question:
        "A Premier support plan can only be purchased by companies that have an Enterprise Agreement (EA).",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You can manage an on-premises Windows Server as an Azure resource by using which of the following?",
      options: [
        "Azure Arc",
        "Azure AD connect",
        "Azure VPN gateway",
        "Azure Pipelines agent",
      ],
      Answer: "1",
    },
    {
      question:
        "Which of the following uses inbound and outbound rules to filter network traffic to and from Azure resources connected to Azure Virtual Networks?",
      options: [
        "Internal Load Balancer",
        "Application Security Group",
        "Network Security Group",
        "Public Load Balancer",
      ],
      Answer: "3",
    },
    {
      question:
        "Trust Center provides information about the Azure Compliance offering.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You can improve composite SLA by adding redundant service to your application.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "All Azure services in private preview must be accessed by using a separate Azure Portal.",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Which of the following is Microsoft's managed network security service in Azure that protects Azure Virtual Network resources?",
      options: [
        "Azure Bastion",
        "Application Security Group",
        "Azure Sentinel",
        "Azure Firewall",
      ],
      Answer: "4",
    },
    {
      question: "__________ is an Apache spark-based analytics service.",
      options: [
        "Azure Data Factory",
        "Azure DevOps",
        "Azure Databricks",
        "Azure Synapse Analytics",
      ],
      Answer: "3",
    },
    {
      question:
        "Which Azure service provides a set of version control tools to manage code?",
      options: [
        "Azure Repos",
        "Azure Cosmos DB",
        "Azure Storage",
        "Azure DevTest Labs",
      ],
      Answer: "1",
    },
    {
      question:
        "You have a virtual machine named VM1 that runs Windows Server 2019. VM1 is in the Australia East Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?",
      options: [
        "Azure virtual machines",
        "Azure Service Fabric",
        "Azure Monitor",
        "Azure Advisor",
      ],
      Answer: "3",
    },
    {
      question:
        "Which Azure Storage access tier has the highest storage costs, but the lowest access costs?",
      options: ["Hot tier", "Cool tier", "Cold tier", "Archive tier"],
      Answer: "1",
    },
    {
      question:
        "___________ provides in-depth information about security, privacy, compliance offerings, policies, and features across Microsoft Cloud Products.",
      options: [
        "Microsoft Trust Center",
        "Microsoft Purview",
        "Compliance portal",
        "Microsoft 365 Defender portal",
        "Microsoft Defender",
      ],
      Answer: "2",
    },
    {
      question:
        "Premium block blob storage accounts only support which of the following redundancy?",
      options: [
        "Geo Zone redundant Storage (GZRS)",
        "Geo redundant Storage (GRS)",
        "Locally redundant Storage (LRS)",
        "Zone redundant Storage (ZRS)",
      ],
      Answer: "4",
    },
    {
      question: "Which of the following can be used to enable Just in time?",
      options: [
        "Azure Firewall",
        "Azure Bastion",
        "Microsoft Defender for Cloud",
        "Azure Front Door",
      ],
      Answer: "3",
    },
    {
      question:
        "What is the minimum recommended data retention period for archive access tiers of Azure Storage?",
      options: ["30", "60", "90", "180"],
      Answer: "4",
    },
    {
      question:
        "What is the minimum recommended data retention period for cool access tiers of Azure Storage?",
      options: ["30", "60", "90", "180"],
      Answer: "1",
    },
    {
      question:
        "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
      options: [
        "An application security group",
        "A network security group (NSG)",
        "Azure Key Vault",
        "Azure Firewall",
      ],
      Answer: "4",
    },
    {
      question:
        "You plan to extend your company's network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1. You need to create an Azure resource that identifies the VPN appliance. Which Azure resource should you create?",
      options: [
        "Local Network Gateway",
        "Application network gateway",
        "Virtual network gateways",
        "Load balancers",
      ],
      Answer: "1",
    },
    {
      question:
        "You are developing a web application that will be hosted on Virtual Machines. You start deploying Azure Virtual Machines for hosting the application. Where in the Azure portal will you be notified when the deployment of Virtual Machines is complete?",
      options: [
        "Navigate section",
        "Activity Log section",
        "Notifications section",
        "View Account section",
      ],
      Answer: "3",
    },
    {
      question:
        "Azure SQL database allows users to perform patch management of database software?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Azure DevOps Services allows developers to deploy or update applications to Azure using continuous Integration/Continuous Delivery (CI/CD) pipelines?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "An organization that hosts its infrastructure in which of the following environments no longer requires a data center?",
      options: [
        "in a Private Cloud",
        "in a Hybrid Cloud",
        "in a Public Cloud",
        "on a Hyper-V host",
      ],
      Answer: "3",
    },
    {
      question:
        "Requiring a user to enter a password and Answer a security question when signing in to Azure Active Directory is an example of?",
      options: [
        "Managed identities",
        "Multi-factor authentication (MFA)",
        "Business-to-Customer (B2C)",
        "Identity Services",
      ],
      Answer: "2",
    },
    {
      question:
        "Which of the following can be used to view which user turned off a specific Virtual Machine during the last 14 days?",
      options: [
        "Azure Event Hubs",
        "Azure Activity Log",
        "Azure Access Control IAM",
        "Azure Service Health",
      ],
      Answer: "2",
    },
    {
      question:
        "What is used to grant permission to Azure Virtual Desktop resources?",
      options: [
        "Resource groups",
        "Application security groups",
        "Tags",
        "Role-based access control (RBAC) roles",
      ],
      Answer: "4",
    },
    {
      question:
        "Which of the following can calculate cost savings due to reduced electricity consumption as a result of migrating on-premises Microsoft SQL servers to Azure?",
      options: [
        "Azure Total Cost of Ownership (TCO) reduced calculator",
        "Azure Migrate: Server Assessment tool",
        "Azure Pricing Calculator",
        "Database Migration Assistant",
      ],
      Answer: "1",
    },
    {
      question: "Azure Resource Manager (ARM) Templates use the?",
      options: ["CSV format", "JSON format", "HTML format", "XML format"],
      Answer: "2",
    },
    {
      question:
        "If an Azure Virtual Machine has a status of Stopped (deallocated), then you will continue to pay for which of the following?",
      options: ["Storage", "Compute Capacity", "Networking", "I/O operations"],
      Answer: "1",
    },
    {
      question:
        "What do you need to create before you can create a new file share from the Azure portal?",
      options: [
        "Azure Data Box",
        "Resource Group",
        "Azure Migrate",
        "Storage Account",
      ],
      Answer: "4",
    },
    {
      question:
        "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?",
      options: [
        "Azure portal",
        "Windows PowerShell",
        "Azure Storage Explorer",
        "Azure Cloud Shell",
        "Azure CLI",
      ],
      Answer: "1,4",
    },
    {
      question:
        "You need to configure an Azure solution that meets the following requirements: 1. Secure websites from attacks 2. Generates reports that contain details of attempted attacks. What should you include in the solution?",
      options: [
        "DDoS protection",
        "Azure Firewall",
        "Network Security Group",
        "Azure Information Protection",
      ],
      Answer: "1",
    },
    {
      question:
        "To Answer, drag the appropriate model from the column on the left to its offering on the right. Each model may be used once, more than once, or not at all. Models 1. Azure App Service - 2. Azure Virtual Machines - 3. Microsoft Dynamics 365.",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
      ],
      Answer: "2,1,3",
    },
    {
      question:
        "You can use Azure Active Directory to set permissions by dividing users into groups?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question: "Azure Logic Apps is a serverless solution for running code?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "You need to manage containers. Which of the two Azure services can you use?",
      options: [
        "Azure Container Instances",
        "Azure Virtual Machines",
        "Azure Kubernetes Service (AKS)",
        "Azure Virtual Desktop",
        "Azure Functions",
      ],
      Answer: "1,3",
    },
    {
      question:
        "After you create a virtual machine, you need to modify the ___________ to allow connections to TCP port 8080 on the Virtual Machine.",
      options: [
        "Network Security Group (NSG)",
        "Route Table",
        "Virtual Network Gateway",
        "Virtual Network",
      ],
      Answer: "1",
    },
    {
      question:
        "You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?",
      options: [
        "Microsoft Defender for Cloud",
        "Azure Subscriptions",
        "Microsoft Store",
        "Azure Marketplace",
      ],
      Answer: "4",
    },
    {
      question:
        "An Azure service is no longer updated with new features after it becomes generally available?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "When you create Azure resources for a service in public preview, you must recreate the resources once the service becomes generally available?",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "_____________ Provides access to Azure compute capacity at deep discounts.",
      options: [
        "Azure Reserved Virtual Machine instances",
        "Azure Container Instances",
        "Azure Virtual Machine Scale Sets",
        "Azure Spot Virtual Machine Instances",
      ],
      Answer: "4",
    },
    {
      question:
        "Your company has multiple offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?",
      options: ["Policies", "Tags", "Locks", "Templates"],
      Answer: "2",
    },
    {
      question: "At which OSI layer does Express Route operate?",
      options: ["Layer 2", "Layer 3", "Layer 5", "Layer 7"],
      Answer: "2",
    },
    {
      question:
        "A company is planning to deploy resources to Azure. They want to have the ability to manage user access to resources across multiple subscriptions. Which of the following can help you achieve this requirement?",
      options: [
        "Azure Policies",
        "Resource Groups",
        "Azure App Service",
        "Management Groups",
      ],
      Answer: "4",
    },
    {
      question:
        "Which of the following does a customer provide in a Software as a Service (SaaS) model?",
      options: [
        "Application data",
        "Compute resources",
        "Application software",
        "Data storage",
      ],
      Answer: "1",
    },
    {
      question:
        "Your Azure trial account expired last week. You are now unable to __________.",
      options: [
        "Access the Azure Portal",
        "Create additional Azure Active Directory user accounts",
        "Access your data stored in Azure",
        "Start an existing Azure Virtual Machine",
      ],
      Answer: "4",
    },
    {
      question:
        "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?",
      options: [
        "10 Virtual Network Gateways",
        "One Network Security Group (NSG)",
        "10 Azure Express Route Circuits",
        "One Azure Firewall",
      ],
      Answer: "4",
    },
    {
      question:
        "You have an accounting application named App1 that uses a legacy database. You plan to move App1 to the cloud. Which service model should you use?",
      options: [
        "Software as a Service (SaaS)",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
      ],
      Answer: "2",
    },
    {
      question:
        "You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?",
      options: [
        "Azure Synapse Analytics",
        "Azure AD Connect",
        "Azure Key Vault",
        "Microsoft Sentinel",
      ],
      Answer: "4",
    },
    {
      question:
        "Azure Distributed Denial of Service (DDoS) Protection is an example of a protection mechanism implemented at the __________",
      options: [
        "Application Layer",
        "Compute Layer",
        "Network Layer",
        "Perimeter Layer",
      ],
      Answer: "3",
    },
    {
      question:
        "A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use?",
      options: [
        "Command Prompt",
        "Windows Defender Firewall",
        "Windows PowerShell",
        "Azure Resource Explorer",
        "Network and Sharing Center",
      ],
      Answer: "1,3",
    },
    {
      question:
        "Which of the following Azure Service should you use to store certificates?",
      options: [
        "Azure Key Vault",
        "Azure Information Protection",
        "Azure Storage account",
        "Azure Security Center",
      ],
      Answer: "1",
    },
    {
      question:
        "A company is planning on using their Microsoft Azure Free Account for hosting production-based resources. Does the Azure Free Account allow you to host production-based resources?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "A company wants to migrate some scripts to Microsoft Azure. They want to make use of the serverless features available in Azure. They decide to make use of Azure Functions. Would this meet the requirement?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "Which of the following are considered vertical scaling in a cloud environment?",
      options: [
        "Provision additional containers",
        "Increase the CPU and RAM of a virtual machine",
        "Increase the number of virtual machines",
        "Provision an additional Azure dedicated host",
      ],
      Answer: "2",
    },
    {
      question:
        "A company wants to host a set of tables in Microsoft Azure. They want absolutely zero administration of the underlying infrastructure and low latency access to data. You recommend using the Azure Cosmos DB. Would this meet the requirement?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "A company is planning on setting up a solution in Microsoft Azure and one of the key requirement is 'A tool that provides guidance and recommendations to improve an Azure environment'. Which of the following would be best suited for this requirement?",
      options: [
        "Azure Cognitive Services",
        "Azure DevOps",
        "Azure Application Insights",
        "Azure Advisor",
      ],
      Answer: "4",
    },
    {
      question:
        "Your development team needs to maintain multiple versions of files in Azure Blob Storage for auditing purposes. Which Azure feature can help you achieve file versioning?",
      options: [
        "Azure Blob versioning",
        "Azure Blob snapshots",
        "Azure Blob lifecycle management",
        "Azure Blob soft delete",
      ],
      Answer: "1",
    },
    {
      question:
        "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?",
      options: [
        "An Azure region failure",
        "Physical server failure",
        "A storage failure",
        "An Azure data center failure",
      ],
      Answer: "4",
    },
    {
      question:
        "To reduce costs, your organization wants to automatically shut down VMs during non-business hours and start them up again in the morning. What Azure service should you configure for this purpose?",
      options: [
        "Azure Policy",
        "Azure Logic Apps",
        "Azure Monitor",
        "Azure Automation",
      ],
      Answer: "4",
    },
    {
      question:
        "Your organization requires detailed auditing of who accesses and modifies data in Azure Blob Storage. Which Azure feature or service provides access logs and audit trails?",
      options: [
        "Azure Security Center",
        "Azure Monitor",
        "Azure Blob storage analytics",
        "Azure Sentinel",
      ],
      Answer: "3",
    },
    {
      question:
        "Your company plans to migrate to Azure and the company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure resources for the departments?",
      options: [
        "Multiple Azure Active Directory (Azure AD) directories",
        "Multiple subscriptions",
        "Multiple resource groups",
        "Multiple regions",
      ],
      Answer: "2,3",
    },
    {
      question: "To Answer, select the appropriate options",
      options: [
        "View Security recommendations - Advisor",
        "Monitor the health of Azure Services - Monitor",
      ],
      Answer: "1 - 4, 2 - 1",
    },
    {
      question:
        "Azure DevOps Services includes a Git repository for developers to store code.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "If you implement the security recommendations provided by Azure Advisor, your company's secure score will increase.",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "An Azure Reservation is used to reserve server capacity at a specific data center.",
      options: ["Yes", "No"],
      Answer: "2",
    },
    {
      question:
        "Who should take the lead in developing and implementing a disaster recovery plan for applications running on Azure Virtual Machines?",
      options: [
        "Microsoft Azure",
        "The customer",
        "A third-party provider",
        "Azure Site Recovery service",
      ],
      Answer: "2",
    },
    {
      question:
        "Your company stores sensitive customer data in Azure. Which Azure service helps you automatically classify and label data based on its sensitivity to enforce data protection policies?",
      options: [
        "Azure Purview",
        "Azure Monitor",
        "Azure Policy",
        "Azure Key Vault",
      ],
      Answer: "1",
    },
    {
      question:
        "A company needs to create around 50 customized Virtual Machines. Out of these, 20 are Windows-based virtual machines and 30 are Ubuntu machines. Which of the following would help reduce the administrative effort required to deploy the machines?",
      options: [
        "Azure Web Apps",
        "Azure Load Balancer",
        "Azure Virtual Machine Scale Sets",
        "Azure Traffic Manager",
      ],
      Answer: "3",
    },
    {
      question:
        "Which of the following can be used to help you enforce resource tagging so you can manage billing? (Choose two)",
      options: [
        "Compliance Manager",
        "Azure Service Health",
        "Azure Policy",
        "Azure Security Center",
        "Azure Management Groups",
      ],
      Answer: "3,5",
    },
    {
      question:
        "A company wants to have an Enterprise messaging solution integrated with their existing application hosted within Microsoft Azure. Which of the following should the company use for this requirement?",
      options: [
        "API Management Services",
        "Logic Apps",
        "API Connections",
        "Service Bus",
      ],
      Answer: "4",
    },
    {
      question:
        "In the shared responsibility model, who is typically responsible for conducting compliance audits to ensure that Azure services meet regulatory requirements?",
      options: [
        "Microsoft Azure",
        "The customer",
        "A third-party provider",
        "Regulatory authorities",
      ],
      Answer: "3",
    },
    {
      question:
        "Your company hosts an accounting application named App1 that is used by all the customers of the company. App1 has low usage during the first two weeks and very high usage during the last two weeks of each month. Which benefit of Azure Cloud supports cost management for this type of usage pattern?",
      options: [
        "High latency",
        "Elasticity",
        "High availability",
        "Load balancing",
      ],
      Answer: "2",
    },
    {
      question:
        "An organization that hosts its infrastructure ___________ no longer needs to maintain a data center.",
      options: [
        "in a Private Cloud",
        "in a Public Cloud",
        "in a Hybrid Cloud",
        "on a Hyper-V host",
      ],
      Answer: "2",
    },
    {
      question:
        "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which of the following resources is an example of IaaS?",
      options: [
        "An Azure virtual machine",
        "An Azure logic app",
        "An Azure web app",
        "An Azure SQL database",
      ],
      Answer: "1",
    },
    {
      question:
        "You have an on-premises network that contains 100 servers and you need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?",
      options: [
        "A Private cloud",
        "An additional data center",
        "A complete migration to Public cloud",
        "A Hybrid cloud",
      ],
      Answer: "4",
    },
    {
      question:
        "You are planning to deploy numerous web and database servers to Azure. You need to create a strategy that allows for connection types between the web and database servers to be controlled. You include use of Network Security Groups in your strategy. Does the solution meet the goal?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You can use 'Service Trust Portal' to download published audit reports and how Microsoft builds and operates its cloud services?",
      options: ["Yes", "No"],
      Answer: "1",
    },
    {
      question:
        "You plan to migrate a web application to Azure and the web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the application. What should you include in the recommendation?",
      options: [
        "Software as a Service (SaaS)",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Database as a Service (DaaS)",
      ],
      Answer: "3",
    },
    {
      question:
        "You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines only in RG1. The solution must ensure that other objects can be created in RG1. What should you use?",
      options: ["An Azure policy", "A lock", "An Azure role", "A tag"],
      Answer: "1",
    },
    {
      question:
        "You have an Azure virtual network named VNET1 in a resource group named RG1. You assign an Azure policy specifying that virtual networks are not an allowed resource type in RG1. VNET1 is deleted automatically. What should you do?",
      options: [
        "No Change is needed",
        "VNET1 becomes a read-only object.",
        "VNET1 is moved automatically to another resource group.",
        "VNET1 continues to function normally.",
      ],
      Answer: "4",
    },
    {
      question: "What does the term 'Azure policy initiative' refer to?",
      options: [
        "A collection of Azure policy definition assignments",
        "A group of role-based access controls (RBAC)",
        "A collection of policy definitions",
        "A group of Azure Blueprints definitions",
      ],
      Answer: "3",
    },
    {
      question:
        "One of the benefits of Azure Synapse Analytics is that high availability is built into the platform.",
      options: [
        "No Change is needed",
        "Versioning",
        "Automatic Scaling",
        "Data compression",
      ],
      Answer: "1",
    },
    {
      question:
        "A company is planning on setting up a solution in Microsoft Azure. The solution would have the following key requirement: Provides a platform for creating workflows. Which of the following would be best suited for this requirement?",
      options: [
        "Azure App Service",
        "Azure Application Insights",
        "Azure Logic Apps",
        "Azure Databricks",
      ],
      Answer: "3",
    },
    {
      question:
        "You plan to create an Azure Virtual machine and you need to identify which storage service must be used to store the unmanaged data disks of the Virtual machine. Which of the following would you identify?",
      options: ["Queues", "File shares", "Tables", "Containers"],
      Answer: "4",
    },
    {
      question:
        "Which of the following is a repeatable set of governance tools that helps development teams quickly build and create new environments while adhering to organizational compliance to speed up development and deployment?",
      options: [
        "CI/CD Pipeline",
        "Azure Blueprints",
        "Azure DevOps",
        "Azure Policy",
      ],
      Answer: "2",
    },
    {
      question:
        "How many management groups can be supported in a single directory?",
      options: ["10", "100", "1000", "10000"],
      Answer: "4",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. Data transfers between Azure services located in different azure regions is always free. 2.North America is represented by a single Azure region 3.Every Azure region has multiple datacenters.",
      options: ["Yes", "No"],
      Answer: "1. No, 2.No, 3.Yes",
    },
    {
      question:
        " 'Azure Key Vault' is used to store app secrets. Instructions: Review the '' text. If it makes the statement correct, select No Change is needed. If the statement is incorrect, Select the answer choice that makes the statement correct.?",
      options: [
        "No change is needed",
        "Azure Security Center",
        "Azure Repos",
        "Azure Blob Storage",
      ],
      Answer: "1",
    },
    {
      question:
        "For each of the following statements, Select Yes if the statement is true. Otherwise, Select No? Statements: 1. A DNS server that runs on an Azure Virtual Machine is an example of Platform as a service (PaaS) 2. Microsoft Intune is an example of Software as a Service (SaaS) 3. Azure Files is an example of Infrastructure as a Service (laaS)",
      options: ["Yes", "No"],
      Answer: "1. No, 2.Yes, 3.No",
    },
  ];
  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <h3 style={{ textAlign: "center" }}>AZ-900 QUESTIONS</h3>
        <Row>
          <Col>
            {questions.map((question, i) => (
              <Card className="cards">
                <Card.Body>
                  <p
                    className="question"
                    style={{ margin: "0px", marginBottom: "5px" }}
                  >{`${i + 1}. ${question.question}`}</p>
                  Options: <br />
                  {question.options.map((option, i) => (
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginBottom: "5px",
                      }}
                    >{`${i + 1}. ${option}`}</p>
                  ))}
                  <Button
                    style={{
                      background: "#301e4e",
                      border: "none",
                      marginTop: "4px",
                    }}
                    onClick={() => handleShowAnswer(i)}
                  >
                    Answer
                  </Button>
                  {answer && cardIndex === i && (
                    <p style={{ marginTop: "5px" }}>{question.Answer}</p>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <div
        className="footer"
        style={{
          background: "#301e4e",
          padding: "10px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        ©2024. Designed by Anish. All Rights Reserved.
      </div>
    </>
  );
}
