FROM node:10 as builder

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY [".", "/usr/src/"]

RUN npm install --only=development

RUN npm run build

RUN npm test


# Productive image
FROM node:10

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

COPY --from=builder ["/usr/src/server.js", "/usr/src/config.js", "/usr/src/"]
COPY --from=builder ["/usr/src/public/", "/usr/src/public"]
COPY --from=builder ["/usr/src/views/", "/usr/src/views"]
COPY --from=builder ["/usr/src/auth/", "/usr/src/auth"]

EXPOSE 5050

CMD ["node", "server.js"]

