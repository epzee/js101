js101
=====

Javascript 101


<!---

#console.table([{a:1, b:2, c:3}, {a:"foo", b:false, c:undefined}]);
# +new Date()

#Closures have access to the outer function’s variable even after the outer function returns:
    # the inner function still has access to the outer function’s variables even after the outer function has returned.
      When functions in JavaScript execute, they use the same scope chain that was in effect when they were created.
#Closures store references to the outer function’s variables; they do not store the actual value

http://www.addthis.com/blog/2013/09/17/performance-optimizing-for-smart-layers/

#Memory Management
    event delegation (event bubbling)
    DOM performance
    Debouncing High-Rate Events

http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/    
-->


<!---

== Bloque conceptos fundamentales

presentación
    ustedes
    nosotros
    motivación (habla peter)
historia
    breve historia (ecmascript)
    foto eich
    [video nemen]
objetos
    creación
        object literal
        new/function
    acceso a las propiedades
        forma comun (usando punto)
        como array asociativo
    se pasan por referencia siempre
funciones
    function declaration
    function expression
    first class citizens (callbacks)
    anonymous functions
    IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE)   
    # function overloading
        - args not required
        - args untyped (like all js variables)
        - "magic args" function foo(p1,p2,p3) {...} :: foo(1); foo(1,2); foo(1,2,3); foo(1,2,3,4)
        - opts/config obj literal as last parameter 
    # In js every function returns a value (undefined by default)   
herencia
    descripcion general lenguaje prototipado    
    prototype con objetos
    prototype con funciones
    librerias para hacer herencia (extend)
scope
    definicion
    ejemplos (IIFE)
hoisting
    definicion
    ejemplos    
closure
    definicion
    ejemplos (usando revealed module pattern)

== Bloque buenas practicas

Falsy Values
    cuales son
    ejemplo con !!
Comparison Operators
    dif entre == y ===
    ejemplo
jQuery
    append
    selector caching & chaining
        # $ method chaining: $foo.css('bar').show()
    selector performance (sizzle)
        #Sizzle: 
            right to left!!!
            Being really specific on the left-hand side has a lot less value than being really specific on the right-hand side.
    no conflict
_
    debounce
    array filter
devtools
    #Profile:
        #from the console: profile() & profileEnd()
        #in code: console.profile("desc") & console.profileEnd("desc")
    #For timing functions: console.time("desc") & console.timeEnd("desc"): desc: 3372.902ms
jslint
    mostrar ejemplo
    grunt
non-blocking script loading pattern 
bundle & minification
repaint & reflow
Debouncing High-Rate Events
"use strict"
for in
multiple var declaration (lint hint)
gzip
qué quedo afuera
    ES6
    traspiler
recursos / links
    https://developer.mozilla.org/en-US/docs/Web
    https://developers.google.com/chrome-developer-tools/

-->