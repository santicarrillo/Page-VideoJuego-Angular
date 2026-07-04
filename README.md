Pagina VideoJuegos - Trabajo Práctico Final

Seminario Angular 2026

Datos del estudiante


Nombre y Apellido: Santiago Carrillo
DNI: 4477835
Email: santiago03carrillo@gmail.com
Sede: Tandil


Temática elegida

La aplicación es un catálogo de videojuegos gratuitos. Permite explorar una lista de juegos consumida desde una API externa (FreeToGame) y guardar los que más te interesen en una sección de favoritos.

Secciones de la aplicación


Catálogo (/catalogo): muestra el listado completo de videojuegos obtenidos desde la API externa, con imagen, género, plataforma, descripción y un botón para agregar/quitar de favoritos.
Favoritos (/favoritos): muestra únicamente los juegos que el usuario marcó como favoritos, con la opción de quitarlos.


Funcionalidades implementadas


Ruteo entre dos secciones (Catálogo y Favoritos).
Componentes: Catalogo, Favoritos y JuegoCard (componente reutilizable de tarjeta de juego).
Interface Juego para tipar los datos.
Uso de @if, @else if, @else y @for para controlar la renderización.
Comunicación entre componentes mediante @Input() y un servicio compartido (JuegosService) que maneja el estado de favoritos usando signals.
Consumo de API externa (FreeToGame API) mediante HttpClient con una solicitud GET para obtener y mostrar los juegos.
Modal de "Leer más" para ver la descripción completa de cada juego.
Estilos personalizados (SCSS) con diseño responsive tipo grid.


Tecnologías utilizadas:

Angular (standalone components, signals, control de flujo @if/@for)
TypeScript
SCSS
API externa: FreeToGame
