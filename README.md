Sistema de Autenticación Web 🛡️
Este proyecto es un sistema básico de autenticación de usuarios, desarrollado en HTML y Bootstrap, que incluye funcionalidades de inicio de sesión, registro de nuevos usuarios y recuperación de contraseña.

🔧 Funcionalidades
Inicio de sesión: index.html

Registro de usuarios: login.html

Recuperación de contraseña: recuperar.html

Cambio de contraseña: nueva_clave.html

📁 Estructura del Proyecto
python
Copiar código
/ (raíz del proyecto)
│
├── index.html           # Página principal de inicio de sesión
├── login.html           # Formulario de registro de usuario
├── recuperar.html       # Página para recuperar contraseña
├── nueva_clave.html     # Página para establecer nueva contraseña
└── js/
    ├── login.js         # Lógica para autenticación (no incluido pero referenciado)
    └── aprender.js      # Archivo adicional JS (no incluido pero referenciado)
💡 Tecnologías Utilizadas
HTML5

Bootstrap 5.3

SweetAlert2 para alertas interactivas

🔐 Lógica Básica
El formulario de registro recoge datos personales y credenciales.

El usuario puede iniciar sesión desde index.html.

En caso de olvido, se puede recuperar contraseña, lo que redirige a nueva_clave.html.

Validaciones básicas están implementadas en JavaScript, como coincidencia de contraseñas y confirmaciones visuales.

🚩 Notas Importantes
Este proyecto es 100% frontend. No guarda datos ni realiza peticiones a servidores o bases de datos.

Los scripts login.js y aprender.js están enlazados pero no fueron proporcionados, por lo que algunas funciones pueden estar incompletas.

Ideal como plantilla o práctica para proyectos educativos o prototipos.