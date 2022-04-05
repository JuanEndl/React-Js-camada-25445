#  React Aplicacion Virtual Computer 
+ La idea es hacer un ecommers de venta de componetes de computadora. Escondi las variables de entorno como habiamos hecho y subi el projecto a vercel 



NAVBAR: 
+ Se encuentra el logo, que nos llega al home si hacemos click, tambien se encuentra el catalogo de los productos, haciendo click en cada uno nos lleva al catalago de cada uno y  tenemos tambien el CartWidget que si hacemos click nos lleva al carrito.

ITEMLIST:
+ Se encuentran todos los productos se parados en cards hechas con CSS cada una esta compuesta con su imagen, categoria, titulo, precio y un boton de  ver mas que nos lleva a los detalles de cada uno.

ITEM DETAIL:
+ En Item Detail podemos ver la categoria, el titulo del producto, su descripcion del mismo, la cantidad de stock, tambien podremos agregar la cantidad de stock que nos permita, abajo de todo se puede el precio del producto sin modicar la cantidad, una ver apretado el boton de agregar al carrito con un if ternario nos van a aparecer 2 botones uno que nos lleva al menu de nuevo para seguir comprando y otro para terminar la compra e ir al carrito.

CART CONTEXT:
+ Se encuentra casi toda la funcionalidad del carrito.

COMPONENTE CART:
+ Se pueden ver los productos selecionados, con su imagen, su titulo, su cantidad selecionada, el precio unitario, el precio con la cantidad agregada, el total de los productos todos juntos tambien se pueden eleminar los productos por separados o todos los productos a las vez, si apretamos el boton comprar nos dirigimos al checkout.

CHECKOUT:
+ Nos muestra un cartel de finalizar compra, en el cual hay un formulario que hay que rellenar para pasar los datos, una vez rellenados los datos damos en el boton Realizar compra, una vez hecho eso, los datos van por firebase y nos devuelve el numero (la id de la orden) de orden del seguimiento del producto.





### instalaciones adicionales  
Tiene instalado un npx server para probar un servidor local, tailwind, React icons, la mayoria de las cosas use una combinacion de CSS y TAILDWIND para que mas o menos quede bien visual, cada imagen la trabaje individualmente para que tengan el mismo tamaño asi manipularlas mejor.


### Faltantes
Me falto agregarle una busqueda de productos mediante un imput (search) y un login de usuarios, lo tuve que deshacer  por falta de tiempo.




https://user-images.githubusercontent.com/87397662/161778483-449b7e7c-75d8-4903-a191-6ac6fe2f891e.mp4


