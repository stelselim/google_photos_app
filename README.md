# Steel Photo App - New way of Google Photos

**This app is built for Google Photos with a new UI and capabilities.** 

<img width=180 src="https://user-images.githubusercontent.com/46201537/198855038-239c0b87-5008-486e-91a4-f8b7d4d26804.png"/>

<br/>
<br/>

## Features
- [X] Google OAuth for accessing Google Photos
- [X] Listing medias from library.
- [X] Listing albums.
- [X] Listing shared albums.
- [X] Search in library.
    - [X] 32 different keywords.
    - [X] Multiple keywords.
- [X] Photos can be viewed, downloaded. 
- [X] Videos can be viewed, downloaded.
- [X] Caching for videos & images.
- [X] Multiple Language Support 
    - [X] English
    - [X] Turkish
    
<br/>

## Google OAuth & Google Photos
This project directly use Google Photos API from Google Cloud. API key is enabled on [Google Photos API](https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com). Moreover, Photos API requests are sent with [REST](https://developers.google.com/photos/library/guides/get-started). 


While authenticating with Google, the app requests three different permissions.
- photoslibrary.readonly
- photoslibrary.appendonly
- photoslibrary.sharing


<br/>

## TypeScript - Types
## Localizations - Multiple Language Support
## Redux - Redux tool kit
## Hooks 


## Setup 
Create OAuth 2.0 Client IDs on [Google Cloud API Credentials](https://console.cloud.google.com/apis/credentials) for both iOS & Android. Add these files to proper paths of the project. 
- GoogleService-Info.plist, put under the **ios/[AppName]** folder.
- google-services.json, put under the **android/app** folder.

* For iOS
```
npm install
npm run start
npm run ios
```

* For Android
```
npm install
npm run start
npm run android
```



<br/>

## Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/stelselim/google_photos_app/issues).




<br/>
<br/>
<br/>
<br/>


## Screenshots 

* #### [1] Login Screen - [2] Photos Tab - [3] Photo View Screen
<div style="display: flex; flex-direction: row-reverse;">
<img src="https://user-images.githubusercontent.com/46201537/198854475-7def1bbd-feb6-4d67-9398-306de66e1007.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854473-d5ad118c-a8c3-4c65-bf2a-1769cb5d8efe.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854461-ce541c54-2260-43a4-a8c5-c3641f0e07ca.png" width=250/>
</div>
<br/>
<br/>

* #### [4] Photo View Save Feature  - [5] Photos View Details - [6] Video View Screen
<div style="display: flex; flex-direction: row-reverse;">
<img src="https://user-images.githubusercontent.com/46201537/198854462-0ba0e8d1-bae3-4549-aeb8-30b027762782.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854476-aa772859-4c85-4c58-8d1f-f14f05b0d27c.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854467-6c79b952-d871-43f9-b0ed-afcaabf7829e.png" width=250/>
</div>
<br/>
<br/>

* #### [7] Video View Details  - [8] Albums Tab - [9] Albums Content View
<div style="display: flex; flex-direction: row-reverse;">
<img src="https://user-images.githubusercontent.com/46201537/198854472-ff2057b5-5ee1-4709-8e5b-c95794adeec4.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854445-349d7d00-e347-41a0-ab22-12e8b335e33c.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854447-e79b486a-d3ef-4c64-b6c3-6a1beb08702a.png" width=250/>
</div>
<br/>
<br/>

* #### [10] Shared Albums Tab  - [11] Search Tab - [12] Profile Bottom Sheet
<div style="display: flex; flex-direction: row-reverse;">
<img src="https://user-images.githubusercontent.com/46201537/198854449-9f78fc9f-0c1e-42f8-87e8-0305e17e54ee.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854451-50e57feb-d5a4-46ec-98a2-d12b37525bdc.png" width=250/>
<img src="https://user-images.githubusercontent.com/46201537/198854464-b9b44ed5-b163-48ce-b25f-12e03dd88969.png" width=250/>
</div>
<br/>
<br/>
<br/>

## Authors

👤 **Selim Ustel**

- GitHub: [@stelselim](https://github.com/stelselim)
- LinkedIn: [@selimustel](https://www.linkedin.com/in/selimustel/)

<br/>
