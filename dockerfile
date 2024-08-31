# Usa la imagen oficial de Node.js como base
FROM node:18

# Define el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al directorio de trabajo en el contenedor
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

# Instala las dependencias de la aplicación
RUN npm install

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que tu aplicación estará escuchando
EXPOSE 3000

# Define el comando para ejecutar tu aplicación
CMD ["npm", "run", "start:prod"]

