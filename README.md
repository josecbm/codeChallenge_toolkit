# **Code Challenge**

## **About**

Fullstack code challenge

## **Demo**

- [WebApp](http://3.21.103.71/)
- [API](http://3.21.103.71:3000/)

## **Entorno de Desarrollo**

### **Backend**

Para correr el proyecto en un entorno de desarrollo por primera vez se deben seguir los siguientes pasos.

- Ir a la carpeta `backend`
- Installar los paquetes con el comando `npm install`
- Correr la aplicación con el comando `npm run dev`
- Si se desea correr las pruebas unitarias, se corren con el comando `npm run test` (Opcional)

### **Frontend**

Para correr el proyecto en un entorno de desarrollo por primera vez se deben seguir los siguientes pasos.

- Ir a la carpeta `frontend-app`
- Installar los paquetes con el comando `npm install`
- Correr la aplicación con el comando `npm start`

## **Entorno de Producción**

Para correr el proyecto para el entorno de producción o mediante Docker y Docker-Compose se deben seguir los siguientes pasos.

- Ir a la carpeta `frontend`
- Generar el build de la aplicación con el comando `npm run build`
- Ir a la raíz del repositorio
- Correr el comando `docker-compose up --build -d`

## **Consideraciones**

- El puerto utilizado para la API es el 3000.
- El puerto utilizado para el entorno de desarrollo de React puede ser cualquiera a excepción del 3000.
- El puerto de exposición de la página web en el entorno de producción es el 80.

## **Herramientas y software**

## **Recursos**

- [Docker](https://www.docker.com/)
- [NodeJs](https://nodejs.org/es/)
- [ReactJs](https://es.reactjs.org/)
