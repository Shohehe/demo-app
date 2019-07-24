FROM node:10.12
ENV NODE_ENV="development"
COPY package.json /src/package.json
RUN cd /src; npm install
EXPOSE  9898
COPY . /src
CMD ["node", "/src/index.js"]