# sample eas.json with [development client] flag to debug production version

{
"cli": {
"version": ">= 5.9.1"
},
"build": {
"development": {
"developmentClient": true,
"distribution": "internal"
},
"preview": {
"distribution": "internal",
"developmentClient": true
},
"production": {}
},
"submit": {
"production": {}
}
}
