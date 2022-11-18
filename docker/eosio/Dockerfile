FROM ubuntu:20.04
LABEL version="2.1.0" description="VEXCHAIN 2.1.0"
RUN apt-get update && apt-get install -y wget
RUN wget -nv https://github.com/vexanium/VexChain/releases/download/v2.1.0/vex_2.1.0-1_ubuntu_20.04_amd64.deb
RUN apt-get install -y ./vex_2.1.0-1_ubuntu_20.04_amd64.deb && rm -f ./vex_2.1.0-1_ubuntu_20.04_amd64.deb
