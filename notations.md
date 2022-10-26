OK 1. Index a BBDD, con lo pendiente de Lu
2. Buscador de prod
3. Vista del perfil del usuario (seguirla en método profile) con el botón de eliminar y que al eliminarlo redireccione al index
4. Vista sólo para admin que tire todos los usuarios y permita al ingresar en el perfil del usuario eliminarlo - botón eliminar (mismo botón que el anterior)
5. Vista actualizar perfil de usuario. Un form que tome los datos del usuario activo para que cada usuario pueda ingresar y cambiarlos (SIN CONTRASENA, el usuario no debería poder cambiarla desde ahí)

8. Index con categorías // vista -OK- + linkee con la página correspondiente del filtro correspondiente
9. Botón de nuevo producto sólo debe aparecer si el admin está loggeado -> <% console.log(locals.user.admin==1) %>
            <% let locales=locals.user %>
            <% let admin=locals.user.admin %>
            <% if (locales && admin==1) {%>