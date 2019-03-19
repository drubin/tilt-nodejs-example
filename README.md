# tilt-nodejs-example

Example showing off the hot_reload issues

Steps to reproduce 

1. Use lastest tilt version from master 
1. run  ~/go/bin/tilt up --debug --hud=false
1. Pod should fail to deploy because image wont be valid
1. Image is rebuild and new pod is started
1. Wait for pod to be healthy 
1. Make any change to `src/index.js`
1. Notice docker image is rebuilt
1. Pod is updated to new image
1. Reload doesn't work