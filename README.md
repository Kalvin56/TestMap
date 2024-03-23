## Installation
- https://rnmapbox.github.io/docs/install?configure-module=android&rebuild=android&v11-insructions=android
- https://docs.mapbox.com/android/navigation/v2/guides/get-started/install/#configure-credentials

Clé publique (android/src/main/res/values/developer-config.xml):  
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources xmlns:tools="http://schemas.android.com/tools">
    <string name="mapbox_access_token" translatable="false" tools:ignore="UnusedResources">PUBLIC_KEY</string>
</resources>
```

Clé privé («USER_HOME»/.gradle/gradle.properties):  
MAPBOX_DOWNLOADS_TOKEN=YOUR_SECRET_MAPBOX_ACCESS_TOKEN

Permissions:
```xml
<manifest ... >
  <!-- Always include this permission -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <!-- Include only if your app benefits from precise location access. -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <!-- Include if Android 13+ is target -->
  <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
</manifest>
```

Dépendances (android/build.gradle):
allprojects {
    repositories {
        maven {
              url 'https://api.mapbox.com/downloads/v2/releases/maven'
              authentication {
                  basic(BasicAuthentication)
              }
              credentials {
                // Do not change the username below.
                // This should always be `mapbox` (not your username).
                  username = "mapbox"
                  // Use the secret token you stored in gradle.properties as the password
                  password = project.properties['MAPBOX_DOWNLOADS_TOKEN'] ?: ""
              }
          }
    }
}