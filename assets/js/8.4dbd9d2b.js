(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{352:function(e,a,o){e.exports=o.p+"assets/img/10.7-Lion.754d82b3.png"},353:function(e,a,o){e.exports=o.p+"assets/img/10.8-MountainLion.26ccbf90.png"},354:function(e,a,o){e.exports=o.p+"assets/img/10.9-Mavericks.173902a3.png"},355:function(e,a,o){e.exports=o.p+"assets/img/10.10-Yosemite.db1b35f6.png"},356:function(e,a,o){e.exports=o.p+"assets/img/10.12-Sierra.34764fef.png"},357:function(e,a,o){e.exports=o.p+"assets/img/10.13-HighSierra.a16af7dd.png"},358:function(e,a,o){e.exports=o.p+"assets/img/10.15-Catalina.3da44cb0.png"},572:function(e,a,o){e.exports=o.p+"assets/img/10.4-Tiger.c56a3acb.png"},573:function(e,a,o){e.exports=o.p+"assets/img/10.5-Leopard.7a062252.png"},574:function(e,a,o){e.exports=o.p+"assets/img/10.6-Snow-Loepard.e53c39f8.png"},575:function(e,a,o){e.exports=o.p+"assets/img/11-Big-Sur.67f79f3c.png"},660:function(e,a,o){"use strict";o.r(a);var r=o(26),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"¿por-que-opencore-encima-de-clover-y-otros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#¿por-que-opencore-encima-de-clover-y-otros"}},[e._v("#")]),e._v(" ¿Por qué OpenCore encima de Clover y otros?")]),e._v(" "),r("p",[e._v("Esta sección es un breve resumen de por qué la comunidad ha estado haciendo la transición a OpenCore. Aquellos que solo quieren una máquina con macOS pueden omitir esta página.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#caracteristicas-de-opencore"}},[e._v("Características de OpenCore")]),r("ul",[r("li",[r("a",{attrs:{href:"#soporte-de-software"}},[e._v("Soporte de Software")])]),r("li",[r("a",{attrs:{href:"#inyeccion-de-kexts"}},[e._v("Inyección de Kexts")])])])]),r("li",[r("a",{attrs:{href:"#mitos-comunes"}},[e._v("Mitos comunes")]),r("ul",[r("li",[r("a",{attrs:{href:"#opencore-no-es-estable-debido-a-que-esta-en-beta"}},[e._v("OpenCore no es estable debido a que está en beta")])]),r("li",[r("a",{attrs:{href:"#opencore-siempre-inyecta-datos-de-smbios-y-acpi-a-otros-sistemas-operativos"}},[e._v("OpenCore siempre inyecta datos de SMBIOS y ACPI a otros sistemas operativos")])]),r("li",[r("a",{attrs:{href:"#opencore-requiere-de-una-instalacion-limpia"}},[e._v("OpenCore requiere de una instalación limpia")])]),r("li",[r("a",{attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("Does OpenCore only support limited versions of macOS")])]),r("li",[r("a",{attrs:{href:"#¿opencore-soporta-hardware-antiguo"}},[e._v("¿OpenCore soporta hardware antiguo?")])]),r("li",[r("a",{attrs:{href:"#¿opencore-soporta-el-arranque-de-windows-linux"}},[e._v("¿OpenCore soporta el arranque de Windows/Linux?")])]),r("li",[r("a",{attrs:{href:"#la-legalidad-de-hackintoshing"}},[e._v("La legalidad de hackintoshing")])]),r("li",[r("a",{attrs:{href:"#¿macos-soporta-gpus-de-nvidia"}},[e._v("¿macOS soporta GPUs de Nvidia?")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"caracteristicas-de-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#caracteristicas-de-opencore"}},[e._v("#")]),e._v(" Características de OpenCore")]),e._v(" "),r("ul",[r("li",[e._v("En promedio, los sistemas con OpenCore se inician más rápido que los que usan Clover, ya que se realizan menos parches innecesarios.")]),e._v(" "),r("li",[e._v("Mejor estabilidad general debido a que los parches pueden ser mucho más precisos:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/fo9bfv/macos_10154_update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Actualización 10.15.4 de macOS (Post en inglés)"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Los parches AMD no necesitan actualizarse con cada actualización de seguridad menor")])])]),e._v(" "),r("li",[e._v("Mayor seguridad en general:\n"),r("ul",[r("li",[e._v("No es necesario deshabilitar la Protección de integridad del sistema (SIP)")]),e._v(" "),r("li",[e._v("Soporte de FileVault 2 incorporado")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html#Vault",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vaulting"),r("OutboundLink")],1),e._v(" Permite crear EFIs instantáneas que eviten modificaciones no deseadas")]),e._v(" "),r("li",[e._v('Soporte de arranque seguro o "secure boot" (actualmente en auditoría de seguridad, vendrá próximamente)')])])]),e._v(" "),r("li",[e._v("Cambios de SO con BootCamp y la selección del dispositivo de arranque son compatibles ya que OpenCore lee las variables NVRAM configuradas por el disco de arranque como una Mac real.")]),e._v(" "),r("li",[e._v("Omite la tecla de acceso rápido de arranque a través de boot.efi. Mantiene presionada la tecla "),r("code",[e._v("Option")]),e._v(" o "),r("code",[e._v("ESC")]),e._v(" al inicio para elegir un dispositivo de arranque, "),r("code",[e._v("Cmd+R")]),e._v(" para ingresar a Recuperación o "),r("code",[e._v("Cmd+Opt+P+R")]),e._v(" para restablecer NVRAM.")])]),e._v(" "),r("h3",{attrs:{id:"soporte-de-software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#soporte-de-software"}},[e._v("#")]),e._v(" Soporte de Software")]),e._v(" "),r("p",[e._v("La principal razón por la que alguien puede querer cambiar de otros gestores de arranque a OpenCore es en realidad por el soporte de software:")]),e._v(" "),r("ul",[r("li",[e._v("No se hacen mas pruebas de Kexts con Clover:\n"),r("ul",[r("li",[e._v("Tienes un bug con un kext? Muchos desarrolladores incluyendo la organización "),r("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera"),r("OutboundLink")],1),e._v(", la cual hace la mayoría de tus Kexts favoritos, no te darán soporte a menos que estés utilizando OpenCore.")])])]),e._v(" "),r("li",[e._v("Muchos drivers de firmware han sido fusionados en OpenCore:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Soporte de APFS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Soporte de FileVault"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parches de Firmware"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parches para AMD"),r("OutboundLink")],1),e._v(":\n"),r("ul",[r("li",[e._v("Tienes hardware basado en AMD? Bueno, los parches de kernel requeridos para iniciar macOS ya no están soportados por Clover, y sólo funcionan con OpenCore.")])])])]),e._v(" "),r("h3",{attrs:{id:"inyeccion-de-kexts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inyeccion-de-kexts"}},[e._v("#")]),e._v(" Inyección de Kexts")]),e._v(" "),r("p",[e._v("Para entender mejor el sistema de inyección de Kexts de OpenCore, primero debemos mirar cómo funciona Clover:")]),e._v(" "),r("ol",[r("li",[e._v("Parchea el SIP para deshabilitarlo")]),e._v(" "),r("li",[e._v("Parchea para habilitar el código zombie del XNU para poder inyectar kexts")]),e._v(" "),r("li",[e._v("Parchea la condición de carrera con inyección de kexts")]),e._v(" "),r("li",[e._v("Inyecta los kexts")]),e._v(" "),r("li",[e._v("Parchea el SIP para habilitarlo de nuevo")])]),e._v(" "),r("p",[e._v("Cosas a tener en cuenta con el método de Clover:")]),e._v(" "),r("ul",[r("li",[e._v("El llamado al código zombie del XNU no se ha utilizado desde 10.7, es sorprendente que Apple no haya quitado este código aún.\n"),r("ul",[r("li",[e._v("Con este parche, las actualizaciones del SO se rompen frecuentemente, como ha ocurrido recientemente con macOS 10.14.4 y 10.15")]),e._v(" "),r("li",[e._v("Deshabilita el SIP y luego intenta habilitarlo nuevamente, no creo que sea necesario decir mucho más.")])])]),e._v(" "),r("li",[e._v("Probablemente se rompa con 10.16")]),e._v(" "),r("li",[e._v("Soporta macOS hasta versiones antiguas (10.5 en adelante)")])]),e._v(" "),r("p",[e._v("Hechémosle un vistazo al método de OpenCore:")]),e._v(" "),r("ol",[r("li",[e._v('Toma el llamado "prelinked kernel" y kexts listos para inyectar')]),e._v(" "),r("li",[e._v("Reconstruye el caché en el ambiente del EFI con los nuevos kexts")]),e._v(" "),r("li",[e._v("Agrega este nuevo cache")])]),e._v(" "),r("p",[e._v("Cosas a tener en cuenta con el método de OpenCore:")]),e._v(" "),r("ul",[r("li",[e._v("El formato del OS Agnostic como el prelinked kernel se ha quedado igual desde 10.6 (V2), por lo que es dificil de romper el soporte.\n"),r("ul",[r("li",[e._v("OpenCore también soporta el prelinked kernel (V1, encontrada en 10.4 y 10.5, cacheless, Mkext y KernelCollections por lo que también tiene soporte para todas las versiones de Intel de OS X/macOS. Sin embargo, el soporte adecuado ha sido agregado en 10.6 y posterior.")])])]),e._v(" "),r("li",[e._v("Es mucho más estable, ya que se hacen mucho menos parches.")])]),e._v(" "),r("h2",{attrs:{id:"mitos-comunes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mitos-comunes"}},[e._v("#")]),e._v(" Mitos comunes")]),e._v(" "),r("h3",{attrs:{id:"opencore-no-es-estable-debido-a-que-esta-en-beta"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore-no-es-estable-debido-a-que-esta-en-beta"}},[e._v("#")]),e._v(" OpenCore no es estable debido a que está en beta")]),e._v(" "),r("p",[e._v("Respuesta corta: No")]),e._v(" "),r("p",[e._v("Respuesta larga: No")]),e._v(" "),r("p",[e._v("El número de versión de OpenCore no representa la calidad del proyecto. En cambio, es más una manera de ver el progreso del proyecto. Acidanthera sigue teniendo muchas cosas que quieren hacer con este proyecto, incluyendo refinamiento en general y soporte de aún más características.")]),e._v(" "),r("p",[e._v("Por ejemplo, OpenCore pasa por una auditoría de seguridad para asegurar que cumple con el arranque seguro UEFI, y es el único bootloader de Hackintosh que se somete a estas rigurosas revisiones y que cuenta con soporte de éste.")]),e._v(" "),r("p",[e._v("La versión 0.6.1 fue originalmente designada para ser el lanzamiento oficial de OpenCore ya que tendría soporte adecuado para Arranque Seguro UEFI/de Apple, y este sería el aniversario de un año de el lanzamiento de OpenCore como una herramienta pública. Sin embargo, debido a distintas circunstancias rodeando a macOS Big Sur y la reescritura del prelinker de OpenCore para soportar a dicha versión, se decidió posponer el lanzamiento oficial de 1.0.0 por otro año.")]),e._v(" "),r("p",[e._v("Plan de programación/Hoja de ruta:")]),e._v(" "),r("ul",[r("li",[e._v("2019: Año de beta")]),e._v(" "),r("li",[e._v("2020: Año del arranque seguro")]),e._v(" "),r("li",[e._v("2021: Año del refinamiento")])]),e._v(" "),r("p",[e._v("Así que por favor no veas el número de versión como un obstáculo, y más como algo que estás esperando.")]),e._v(" "),r("h3",{attrs:{id:"opencore-siempre-inyecta-datos-de-smbios-y-acpi-a-otros-sistemas-operativos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore-siempre-inyecta-datos-de-smbios-y-acpi-a-otros-sistemas-operativos"}},[e._v("#")]),e._v(" OpenCore siempre inyecta datos de SMBIOS y ACPI a otros sistemas operativos")]),e._v(" "),r("p",[e._v("Por defecto, OpenCore asumirá que todos los sistemas operativos deben ser tratados por igual en lo que refiere a la información de ACPI y SMBIOS. La razón de esto se divide en tres partes principales:")]),e._v(" "),r("ul",[r("li",[e._v("Esto permite soporte adecuado de multiboot como "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BootCamp"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Evita DSDTs mal hechos y anima a prácticas adecuadas de ACPI")]),e._v(" "),r("li",[e._v("Evita casos extremos donde la información es inyectada varias veces, algo comúnmente visto con Clover\n"),r("ul",[r("li",[e._v("Por ejemplo; cómo manejerías la inyección de SMBIOS y datos de ACPI una vez que booteaste boot.efi, pero después te echa? Los cambios ya están en la memoria, por lo que intentar deshacerlos puede ser peligroso. Esto es la razón por la que el método de Clover está mal visto.")])])])]),e._v(" "),r("p",[e._v("Sin embargo, hay quirks en OpenCore que permiten que la inyección de SMBIOS esté limitada a macOS mediante un parche vinculado a el parcheo de dónde macOS lee la información de SMBIOS. El quirk "),r("code",[e._v("CustomSMIOSGuid")]),e._v(" con "),r("code",[e._v("CustomSMBIOSMode")]),e._v(" puesto en "),r("code",[e._v("Custom")]),e._v(" puede romperse en el futuro, por lo que sólo recomendamos esta opción en el evento de que cierto software se rompa en otros sistemas operativos. Para tener mejor estabilidad, por favor deshabilita estos quirks.")]),e._v(" "),r("h3",{attrs:{id:"opencore-requiere-de-una-instalacion-limpia"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opencore-requiere-de-una-instalacion-limpia"}},[e._v("#")]),e._v(" OpenCore requiere de una instalación limpia")]),e._v(" "),r("p",[e._v('Esto no es cierto en el caso de que tengas una instalación "Vanilla". Esto se refiere a si el sistema operativo en sí se ha alterado en alguna manera, como instalando kexts de terceros en el volúmen del sistema u otras modificaciones no admitidas por Apple. Cuando tu sistema haya sido manipulado en gran medida por tí o por utilidades de terceros como Hackintool, recomendamos una nueva instalación para evitar posibles problemas.')]),e._v(" "),r("p",[e._v("Nota para usuarios de Clover: Reestablece tu NVRAM al hacer una instalación con OpenCore, ya que muchas de las variables de Clover pueden entrar en conflicto con OpenCore y macOS.")]),e._v(" "),r("h3",{attrs:{id:"does-opencore-only-support-limited-versions-of-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("#")]),e._v(" Does OpenCore only support limited versions of macOS")]),e._v(" "),r("p",[e._v("Desde 0.6.2, ahora puedes arrancar "),r("strong",[e._v("todas")]),e._v(" las versiones de Intel de macOS partiendo de 10.4! El soporte adecuado depende de tu hardware, así que verifícalo por ti mismo: "),r("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Limitaciones de Hardware")])],1),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Galería de instalación de macOS")]),e._v(" "),r("p",[e._v("Acidanthera ha probado muchas versiones, y "),r("a",{attrs:{href:"https://github.com/khronokernel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Khronokernel"),r("OutboundLink")],1),e._v(" ha corrido muchas versiones de OS X en su HP DC 7900(Core2 Quad Q8300). Esta es una galería de lo que ha probado:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(572),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(573),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(574),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(352),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(353),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(354),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(355),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(356),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(357),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(358),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:o(575),alt:""}})])]),e._v(" "),r("h3",{attrs:{id:"¿opencore-soporta-hardware-antiguo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#¿opencore-soporta-hardware-antiguo"}},[e._v("#")]),e._v(" ¿OpenCore soporta hardware antiguo?")]),e._v(" "),r("p",[e._v("Por el momento, la mayoría del hardware de Intel está soportado siempre que el sistema operativo lo soporte. Sin embargo, por favor dirígete a la "),r("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("página de limitaciones de Hardware")]),e._v(" para obtener más información sobre qué hardware está soportado en qué versiones de macOS")],1),e._v(" "),r("p",[e._v("Actualmente, las CPUs de Yonah en adelante han sido testeadas correctamente con OpenCore.")]),e._v(" "),r("h3",{attrs:{id:"¿opencore-soporta-el-arranque-de-windows-linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#¿opencore-soporta-el-arranque-de-windows-linux"}},[e._v("#")]),e._v(" ¿OpenCore soporta el arranque de Windows/Linux?")]),e._v(" "),r("p",[e._v("OpenCore funciona en la misma manera que cualquier otro bootloader, por lo que respeta a los otros sistemas operativos de la misma manera. Para cualquier otro SO donde el bootloader tiene una ruta o nombre irregular, puedes simplemente agregarlo a la sección BlessOverride")]),e._v(" "),r("h3",{attrs:{id:"la-legalidad-de-hackintoshing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#la-legalidad-de-hackintoshing"}},[e._v("#")]),e._v(" La legalidad de hackintoshing")]),e._v(" "),r("p",[e._v('Si hablamos de hackintoshing, podemos decir que se encuenta en un "área gris" legal, principalmente porque si bien esto no es ilegal, estamos infringiendo el EULA (El acuerdo de licencia). La razón por la que no es ilegal es la siguiente:')]),e._v(" "),r("ul",[r("li",[e._v("Estamos descargando macOS "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/0.6.8/Utilities/macrecovery/macrecovery.py#L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("directamente desde los servidores de Apple"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Estamos haciendo esto como una organización sin fines de lucro para la enseñanza y uso personal\n"),r("ul",[r("li",[e._v("Las personas que planean en usar su Hackintosh para el trabajo o venderla deberían echarle un vistazo al "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Psystar_Corporation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Caso Pystar"),r("OutboundLink")],1),e._v(" y sus leyes regionales")])])])]),e._v(" "),r("p",[e._v("Mientras que la EULA establece que macOS sólo debe ser instalado en Macs reales ("),r("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSCatalina.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("sección 2B-i"),r("OutboundLink")],1),e._v(") o en máquinas virtuales corriendo en Macs geniunas ("),r("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSCatalina.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("sección 2B-iii"),r("OutboundLink")],1),e._v("), no hay ninguna ley aplicable que pueda prohibir esto por completo. Sin embargo, sitios que reempaqueten y modifiquen instaladores de macOS pueden potencialmente entrar en el riesgo de tener "),r("a",{attrs:{href:"https://es.wikipedia.org/wiki/Digital_Millennium_Copyright_Act",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reclamos de DMCA (Derechos de Autor de la Era Digital; Digital Millennium Copyright Act en inglés)"),r("OutboundLink")],1),e._v(" o algo similar.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Nota")]),e._v(": No somos asesores legales oficiales, así que por favor asesórate correctamente tú mismo y discute esto con tus abogados si tienes alguna preocupación.")])]),e._v(" "),r("h3",{attrs:{id:"¿macos-soporta-gpus-de-nvidia"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#¿macos-soporta-gpus-de-nvidia"}},[e._v("#")]),e._v(" ¿macOS soporta GPUs de Nvidia?")]),e._v(" "),r("p",[e._v("Debido a problemas relacionados con la compatibilidad de Nvidia en las versiones más recientes de macOS, muchos usuarios han llegado a la conclusión de que macOS nunca soportó las GPUs de Nvidia y, en este momento, no lo hacen. Sin embargo, Apple todavía mantiene y soporta Macs con GPUs Nvidia en su último sistema operativo, como los modelos de MacBook Pro 2013 con GPU Kepler.")]),e._v(" "),r("p",[e._v("El problema principal gira en torno a las GPU Nvidia más nuevas, ya que Apple dejó de hacer máquinas con ellas y, por lo tanto, nunca tuvo soporte oficial para el sistema operativo de Apple, sino que los usuarios tuvieron que confiar en que Nvidia les dé drivers como un terceros. Debido a problemas con el Arranque seguro recientemente introducido por Apple, ya no podían soportar los WebDrivers y, por lo tanto, Nvidia no podía publicarlos para plataformas más nuevas, limitándolos a mac OS 10.13, High Sierra.")]),e._v(" "),r("p",[e._v("Para obtener más información sobre el soporte de sistemas operativos, dirígete aquí: "),r("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía de comradores de GPU"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);