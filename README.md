<br/>

# Getting COSMIC

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step with React Native CLI, before proceeding.

## Start the Application

First, you will need to install the necessary packages.

```bash
npm install
```
Once all the Packages are installed.

For Android : 
```
npx react-native run-android
```

For iOS :
```
cd ios
pod install
cd ..
npx react-native run-ios
```

### Now what? Time To Play Around

- Add New Employees
- Explore Existing Employees
- Delete any Employees
- Update Details of Employees

# Folder Structure
```
COSMO
├── src
│ ├── assets
│ │ ├── data
│ │ └── images
│ ├── components
│ │ └── minors
│ │   ├── CreateEmployeeBtn.js
│ │   ├── CreateEmpModal.js
│ │   ├── EmployeeCard.js
│ │   ├── EmployeeDetails.js
│ │   ├── ListEmployees.js
│ │   ├── Loader.js
│ │   └── NoEmployees.js
│ ├── constants
│ │ ├── baseURL.js
│ │ └── devEnvBackend.js
│ ├── navigation
│ │ └── AppNavigation.js
│ ├── screens
│ │ ├── Details.js
│ │ └── Home.js
│ └── utils
│   ├── ApiCalls.js
│   ├── AppContext.js
└── └── AppProvider.js
```

### Why is this COSMIC ?

- Standard Code Practices
- Well Maintained API handling
- Proper Handling of Error and Empty States with Loaders.
- Finely divided Components for effective Resuability
- Minimal CSS but Smooth Designs
- Efficient Context Handling

![SpaceSpaceCatGIF](https://github.com/user-attachments/assets/f4e1db7a-fa6c-432e-83a6-2bc2a16a4bd3)




  # Happy Coding 🔥🔥

![cosmo default](https://github.com/user-attachments/assets/377a3434-1629-474c-9985-6e0e01b4143b)
![Cosmo Home](https://github.com/user-attachments/assets/8adc359c-f3cd-4c15-9fcd-b4c5d37ef745)

