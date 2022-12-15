# Fiuber Backoffice

Repositorio: https://github.com/taller2-fi-uber/backoffice

Github page: https://taller2-fi-uber.github.io/backoffice

## Desarolladores

Tomás Del Pup - tdelpup@fi.uba.ar

Pablo Dimartino - pdimartino@fi.uba.ar

Daniel Alejandro Pons - daniel@siltron.com.ar

Cristian Daniel Queirolo - Dominguez cqueirolo@fi.uba.ar

## Instalación

Clonar el proyecto

```bash
  git clone https://github.com/taller2-fi-uber/backoffice.git
```

Moverse al directorio

```bash
  cd backoffice-app
```

Crear o editar el archivo .env completando la ruta del backend

```bash
  REACT_APP_BACKEND_URL=http://35.227.202.233
```
Instalar las dependencias

```bash
  npm install
```

Iniciar la aplicacion
```bash
  npm start
```

Luego con un navegador dirigirse a localhost:3000/

## Update de la página

Al modificar la página se debe actualizar los componentes en github. Para realizar esto primero se generan dichos componentes:

```bash
  npm run deploy
```
Luego se comitean a git

```bash
  git add .
  git commit -m "Comentario"
  git push
```
Los cambios se publican automáticamente.

