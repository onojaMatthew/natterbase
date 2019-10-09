# natterbase

# How to start the application
Open a terminal and run the following command

**_cd  natterbase_** 

At the root folder, run **_npm install_** to install all the packages

Create a **_.env_** file at root folder and paste

**_DB_PROD=mongodb://natterbase:natterbase1@ds331548.mlab.com:31548/natterbase_**

**_TEST_DB=mongodb://localhost:27017/test_**

**_DEV_DB=mongodb://localhost:27017/dev_**

inside it

Finally, run **_npm run dev_** to start the app in development mode

## To Test app run **_npm run test_**