# Utiliza una imagen oficial de Node 
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del cliente al directorio de trabajo
COPY . .


EXPOSE 5175

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
