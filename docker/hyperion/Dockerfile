FROM node:16.5
RUN npm install pm2 -g
RUN git clone https://github.com/vexanium/hyperion-history-api
WORKDIR /hyperion-history-api
RUN git checkout dev-3.3
RUN npm install --production
