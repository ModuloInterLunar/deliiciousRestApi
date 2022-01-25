# DeliiciousRestApi

## Instalar:

La primera vez que descarguéis el repositorio, tenéis que usar:

    npm install

Y añadir un archivo `.env`, que contendrá lo siguiente (que podéis modificar en función de vuestro caso)

    DATABASE_URL=mongodb://localhost/deliicious
    SECRET_TOKEN=123465789

Después, solo tenéis que usar `npm start` para iniciarlo.

<br/>

Para probar la conexión, se puede usar la extensión Rest Client -> 'humao.rest-client'

También tenéis que generar un token con routeLogin.rest, y guardarlo en las variables de entorno de Rest Client de la siguiente forma:

Pulsa `F1` y escribe `Open Settings (JSON)`, y pega lo siguiente en el archivo:

    "rest-client.environmentVariables": {
        "$shared": {
            "version": "v1",
            "token": "pon.tu.token.aqui"
        }
    }

Tendréis que generar un nuevo token cada ~~12 horas~~ 2 meses, y ponerlo en ese sitio

<br/>

Nota: no os irá sin haber creado la base de datos en vuestro equipo

Recomendación: para distinguir mejor las carpetas, descargad os la extensión 'pkief.material-icon-theme' (u otra similar)

### End