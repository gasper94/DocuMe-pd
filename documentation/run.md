# Run expo local application

expo start -c --tunnel

<!-- Test Flight app build -->

eas build --profile preview --platform all
eas build --profile preview --platform ios

# Clean build

eas build --profile preview --platform ios

<!--

eas update:configure and follow all the steps.

eas build --profile production – don't forget to increase the build number

eas submit -p ios --latest in order to have the last build on testflight and also make sure you update the app in your phone.

eas update after this, force close the app 2-3 times and you'll see the changes.

-->
