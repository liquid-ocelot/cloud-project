# Cloud Project

## Get the source

Clone the repo by using the following command:
`git clone --recurse-submodules https://github.com/liquid-ocelot/cloud-project`

## Run the project

To run the project, you'll need docker and minikube or equivalent. To deploy this project on minikube you'll need to enable the ingress addon by using the command `minikube addons enable ingress`.

After cloning the repo, you should have a folder with a `project.yml` file. This file must be applied by kubernetes by using the command `kubectl apply -f project.yml`

After that, kubernetes will handle the deployment of the application, when everything is ready open a web browser and go to `front-end.localhost`