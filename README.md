# Prueba_Appinit 2 - Consumir una API Pública

Reto técnico React, crear front y realizar consumo de una API pública, con control de rutas y persistencia de sesión.

## 🛠️ Stack Tecnológico
* **Framework:** React.
* **Lenguaje:** TypeScript.
* **Estilos:** Tailwind CSS.
* **Gestión de Estado:** Zustand.
* **Validación:** Zod + React Hook Form.

## 📁 Estructura del Proyecto

```text
src/
├── pages/                
│   ├── (LoginPage)/      # Componente de inicio de sesión 
│   └── (HomePage)/       # Componente principal para mostrar primera consulta al Poke Api
├── interfaces/           # Estructuras para tipar
├── context/              # Estado global y persistente con Zustand 
├── services/             # Cliente para consumor Poke Api utilizando fecth 
├── routes/               # Componente Wrapper para controlar el acceso a rutas según autenticación
├── validations/          # Utilidades y esquemas de validación (Zod)
└── layouts/              # Componente fijo en todas las pages (Navbar)
```

## 🚀 Instalación y Ejecución Local

* Asegúrate de tener instalado:

```text
> Node.js v24 o superior
> npm o yarn
> Editor de código Visual Studio Code
```

* Clonar el Repositorio:

```bash
git clone 
cd 
```

* Instalación de Dependencias:
Abre la terminal integrada y ejecuta

```bash
npm install
```

* Ejecutar la Aplicación:

```bash
npm run dev
```

* La aplicación estará disponible en:

```text
http://localhost:3000
```

## 🔐 Acceso a la Aplicación (Login)
La pantalla inicial corresponde al módulo de Inicio de Sesión

* Credenciales de Acceso - Cualquiera
  - El sistema no valida credenciales reales.
  - Cualquier dato que cumpla con el formato requerido permitirá el acceso.

* Reglas de validación
  - Estructura de un correo con @ y .
  - Password con mínimo 5 caracteres.

* Al enviar el formulario, el sistema redirige automáticamente al Dashboard.

## 📊 Home

Una vez autenticado, se carga el tablero principal donde podrás:

* Layouts con logo, nombre del usuario y botón Cerrar Sesión.
* automáticamente se realiza la priemra consulta y se muestra en una grid los pokemones.
* Botón de Search para filtrar.
* Botones de paginación.
