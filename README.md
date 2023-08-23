# WebdriverIO TypeScript Test Project

This repository contains a test automation project for the verification of the physician information within the system, developed with [WebdriverIO](https://webdriver.io/) using TypeScript and the Mocha testing framework. It also integrates the Allure reporter for generating comprehensive test reports.


## Prerequisites

Before running the tests in this project, ensure you have the following prerequisites installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is typically installed with Node.js.

## Setup

 Clone the repository:


   git clone https://github.com/VictorySieg/clickdoc.git
### Install the dependencies:

  npm install

## Running Tests
   
npx wdio run ./wdio.conf.ts --spec .\test\specs\clickdoc.ts
## Generate report
allure generate allure-results --clean -o allure-report &&
allure open allure-report
## Project Structure
The project is organized as follows:

- test: This directory contains test scripts written in TypeScript using Mocha and WebdriverIO.
- allure-report: This directory stores the generated Allure test reports.
- tsconfig.json: TypeScript configuration file.
- wdio.conf.js: WebdriverIO configuration file.
