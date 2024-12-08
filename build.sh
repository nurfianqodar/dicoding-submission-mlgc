read -p "image version to build: " version

docker build -t nurifanqodar/asclepius-api:$version .
