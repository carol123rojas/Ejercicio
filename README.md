# Ejercicio
Curso react
                                               
# Git
- Para clonar en local solo toca copiar la URl en caso de que no tengas git local vamos a instalarlo de la siguiente manera: [Link](https://youtu.be/ChVqT1MrAsM?si=PNs4ZVln0gvvztjo).

- HACER CAMBIOS EN LA TERMINAL
    - git status (Ver los cambios que se realizaron).
    - git add . (Añadieron cambios en el repositorio local para subirlo al de la nube).
    - git commit -m "escribir mensaje de repositorio" (Escribir el nombre del repositorio para ver el cambio).
    - git push (Subir cambios al repositorio).
    - git pull (Descarga los cambios más recientes del repositorio remoto y los fusiona con tu rama actual).
    - git fetch (Descarga los cambios del repositorio remoto pero no los fusiona automáticamente).


# Error

1- No se puede cargar el archivo C:\Program Files\nodejs\npx.ps1 porque la ejecución de scripts está deshabilitada en este sistema.

Solución rápida: Cambiar la política de ejecución

Abre PowerShell como administrador:

- Haz clic derecho en el ícono de PowerShel
- Selecciona "Ejecutar como administrador".

Permite la ejecución de scripts con este comando:

- Set-ExecutionPolicy RemoteSigned

Confirma el cambio:

- Te pedirá una confirmación. Escribe Y y presiona Enter.

Verifica que se aplicó correctamente:

- Get-ExecutionPolicy
 
Intenta nuevamente crear tu proyecto:

- npx create-react-app mi-proyecto


2- En caso de que no aparezca la carpeta "node-modules" toca descargalar con el comando "npm install".
