FROM node:alpine AS labseq-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=labseq-build /app/dist/labseq-app /usr/share/nginx/html
EXPOSE 80