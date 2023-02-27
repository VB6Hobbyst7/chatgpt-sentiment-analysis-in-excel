# Sentiment Analysis in Excel using ChatGPT
Discover awesome ChatGPT features you can use in Excel
<br /><br />

<!-- badges: start -->
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)&nbsp;&nbsp;
![Microsoft Excel](https://img.shields.io/badge/Microsoft_Excel-217346?logo=microsoft-excel&logoColor=white)&nbsp;&nbsp;
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/en/)&nbsp;&nbsp;
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?logo=npm&logoColor=white)&nbsp;&nbsp;
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?logo=webpack&logoColor=black)&nbsp;&nbsp;
[![NodeJS with Webpack](https://github.com/analyticsinmotion/chatgpt-sentiment-analysis-in-excel/actions/workflows/webpack.yml/badge.svg)](https://github.com/analyticsinmotion/chatgpt-sentiment-analysis-in-excel/actions/workflows/webpack.yml)&nbsp;&nbsp;
[![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/analyticsinmotion/chatgpt-sentiment-analysis-in-excel/blob/main/LICENSE.md)&nbsp;&nbsp;
![Lifecycle:Stable](https://img.shields.io/badge/Lifecycle-Stable-97ca00)&nbsp;&nbsp;
![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)&nbsp;&nbsp;
<!-- badges: end -->

<!-- DESCRIPTION -->
## 1. Description

With an Excel Custom Function Add-in you can make direct calls to ChatGPT for NLP capabilities such as text Moderation and Sentiment Analysis. Results from ChatGPT will be returned to your worksheet almost instantly.
<br /><br />



https://user-images.githubusercontent.com/52817125/221394461-92dd3f83-5d41-4f32-9f48-3d701f523b2e.mp4




<br />

<!-- GETTING STARTED -->
## 2. Getting Started
### 2.1 Dependencies
- Requires an OpenAI API Key (create an account and get API Key at <a href="https://chat.openai.com">https://chat.openai.com</a>)
- Requires Microsoft Excel (<a href="https://www.microsoft.com/en-us">https://www.microsoft.com/en-us</a>)
- Requires Node.js (>= 18.14.2 LTS) (<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>)
- Requires NPM (>= 9.5.0) (<a href="https://www.npmjs.com">https://www.npmjs.com</a>)
- Requires dotenv-webpack (<a href="https://www.npmjs.com/package/dotenv-webpack">https://www.npmjs.com/package/dotenv-webpack</a>)
- Requires Yo Office generator (<a href="https://github.com/OfficeDev/generator-office">https://github.com/OfficeDev/generator-office</a>)



### 2.2 Editing, Debugging and Testing
- Visual Studio Code (<a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>)
  - NPM Intellisense Extension (RECOMMENDED)
  - Microsoft Edge Tools for VS Code Extension (RECOMMENDED)

### 2.3 Directory Structure 
This repository contains the architecture and source code used by the Yeoman generator for Office Add-ins (Yo Office generator). The generator creates the scaffolding of files for a variety of Office Add-in projects. Listed below are the main directories/files that were added or edited for this project.


    chatgpt-sentiment-analysis-in-excel
    ├── assets
    ├── src
    │   ├── functions
    │   │   └── functions.js
    │   └── taskpane
    │   │   ├── taskpane.css    
    │   │   └── taskpane.html    
    ├── .env
    ├── manifst.xml
    ├── tsconfig.json
    └── webpack.config.js    


<br />
    
<!-- INSTRUCTIONS -->
## 3. Instructions
This Excel Custom Function provides two formulas that can be applied to text data - *Moderation* and *Sentiment*.<br />
<br />
To utilize these formulas simply type ```=chatgpt``` in the formula bar and the predictive formula dropdown should appear. You can either continue to type the formula or select one of the dropdown options.
<br />

<img src=".github/assets/images/aim-custom-function-chatgpt-excel-formulas.png" width=100% height=100%>

<br />

<strong>MODERATION Check Formula</strong>

Valid Moderation Input include:

Direct Cell References
```
=CHATGPT.MODERATION(A2)
```
Entering text directly. Please ensure any text is enclosed in double quotation marks.
```
=CHATGPT.MODERATION("Any text you want to be checked")
```
Valid Moderation Responses include:
- Passed
- Failed
- Blank

<br />

<strong>SENTIMENT Classifier Formula</strong>

Valid Sentiment Input include:
```
=CHATGPT.SENTIMENT(A2)

=CHATGPT.SENTIMENT("Any text you want to find the sentiment for")
```
Valid Sentiment Responses include:
- Positive
- Negative
- Neutral
- Blank

<br />

To apply the Sentiment Classifier only on text that has passed moderation you can apply a formula similar to this:
```
=IF(B2="Failed","",CHATGPT.SENTIMENT(A2))
```

<br />
<strong>Task Pane</strong>
<br /><br />

To open the task pane and read more information about this custom function:
- Click the ribbon tab **AI Copilot** 
- Select **NLP Functions**

The taks pane will open in the right-hand side of the workbook with the title **NLP Functions with ChatGPT**
<br /><br />
<img src=".github/assets/images/aim-custom-function-chatgpt-excel-opening-the task-pane.png" width=100% height=100%>


<br />

<!-- Installation -->
## 4. Installation
### 4.1 Node.js
- Download and install Node.js

### 4.2 Yeoman generator for Office Add-ins - YO OFFICE
- Install yo generator office at the Command Line. 

Please ensure the command prompt has been opened with administrative priviledges

``` npm install -g yo generator-office```



<br /><br />

<!-- OpenAI API Rate Limits -->
## 5. OpenAI API Rate Limits

A rate limit is a restriction that an API imposes on the number of times a user or client can access the server within a specified period of time. 
Rate limits are a common practice for APIs, and they're put in place to help protect against abuse or misuse, help  manage the aggregate load on infrastructure, and ensure that everyone has fair access.

To see the latest API rate limits per user tier please read the following: <a href="https://platform.openai.com/docs/guides/rate-limits/overview">https://platform.openai.com/docs/guides/rate-limits/overview</a>

Each cell in Excel where the CHATGPT.SENTIMENT formula is executed should be considered and counted as a single Request. 

<br />

<!-- Best Practices for API Key Safety -->
## 6. Best Practices for API Key Safety

Your OpenAI APIKEY key/s should be kept secure and private at all times.

Please follow the best practices guide for API security from OpenAI 
<br />
<a href="https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety">https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety</a>



