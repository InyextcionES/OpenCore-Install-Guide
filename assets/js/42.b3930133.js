(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{577:function(e,a,r){e.exports=r.p+"assets/img/python-path.29d651bd.png"},578:function(e,a,r){e.exports=r.p+"assets/img/Default.5b6ca6c9.png"},579:function(e,a,r){e.exports=r.p+"assets/img/Showalldevices.bc11c239.png"},670:function(e,a,r){"use strict";r.r(a);var o=r(25),t=Object(o.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"otros-problemas-miscelaneos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#otros-problemas-miscelaneos"}},[e._v("#")]),e._v(" Otros problemas misceláneos")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Versión soportada: 0.6.2")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#no-puedes-correr-acpidumpefi"}},[e._v("No puedes correr "),o("code",[e._v("acpidump.efi")])])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#arreglando-ssdttime-could-not-locate-or-download-iasl"}},[e._v("Arreglando SSDTTime: "),o("code",[e._v("Could not locate or download iasl!")])])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#arreglar-python-python-is-not-installed-or-not-found-on-path"}},[e._v("Arreglar Python: "),o("code",[e._v("Python is not installed or not found on PATH")])])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#el-disco-de-windows-no-puede-ver-discos-apfs"}},[e._v("El disco de Windows no puede ver discos APFS")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#resoluci%C3%B3n-incorrecta-con-opencore"}},[e._v("Resolución incorrecta con OpenCore")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#no-puedo-encontrar-el-disco-de-windowsbootcamp-en-el-men%C3%BA"}},[e._v("No puedo encontrar el disco de Windows/BootCamp en el menú")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#bootear-windows-resulta-en-una-pantalla-azul-o-linux-se-crashea"}},[e._v("Bootear Windows resulta en una pantalla azul o Linux se crashea")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#error-al-iniciar-windows-ocb-startimage-failed---already-started"}},[e._v("Error al iniciar Windows: "),o("code",[e._v("OCB: StartImage failed - Already started")])])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#iasl-warning--unresolved"}},[e._v("iASL warning, # unresolved")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#mediakit-reports-not-enough-space"}},[e._v("MediaKit reporta que no hay espacio suficiente")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#error-al-iniciar-windows-ocb-startimage-failed---already-started"}},[e._v("Error al iniciar Windows: "),o("code",[e._v("OCB: StartImage failed - Already started")])])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#inconsistencia-de-tiempo-entre-macos-y-windows"}},[e._v("Inconsistencia de tiempo entre macOS y Windows")])])])]),e._v(" "),o("h2",{attrs:{id:"no-puedes-correr-acpidump-efi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-puedes-correr-acpidump-efi"}},[e._v("#")]),e._v(" No puedes correr "),o("code",[e._v("acpidump.efi")])]),e._v(" "),o("p",[e._v("Corre en el shell de OpenCore:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("shell> fs0: //reemplaza con el disco\n\nfs0:\\> dir //para verificar que es el directorio correcto\n\n  Directory of fs0:\\\n\n   01/01/01 3:30p  EFI\n\nfs0:\\> cd EFI\\OC\\Tools //note that its with forward slashes\n\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\n")])])]),o("h2",{attrs:{id:"arreglando-ssdttime-could-not-locate-or-download-iasl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arreglando-ssdttime-could-not-locate-or-download-iasl"}},[e._v("#")]),e._v(" Arreglando SSDTTime: "),o("code",[e._v("Could not locate or download iasl!")])]),e._v(" "),o("p",[e._v("Esto usualmente es debido a una version desactualizada de Python, trata de actualizar Python o agrega iasl a la carpeta scripts de SSDTTime:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl para macOS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl para Windows"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl para Linux"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"arreglar-python-python-is-not-installed-or-not-found-on-path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arreglar-python-python-is-not-installed-or-not-found-on-path"}},[e._v("#")]),e._v(" Arreglar Python: "),o("code",[e._v("Python is not installed or not found on PATH")])]),e._v(" "),o("p",[e._v("Fácil de arreglar, descarga e instala el Python más reciente:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.python.org/downloads/macos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link para macOS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.python.org/downloads/windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link para Windows"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link para Linux"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Make sure "),o("code",[e._v("Add Python to PATH")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(577),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"el-disco-de-windows-no-puede-ver-discos-apfs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#el-disco-de-windows-no-puede-ver-discos-apfs"}},[e._v("#")]),e._v(" El disco de Windows no puede ver discos APFS")]),e._v(" "),o("ul",[o("li",[e._v("Drivers de BootCamp desactualizados (generalmente la versión 6.0 vendrá con brigadier, la utilidad de BootCamp en macOS provee versiones más nuevas como 6.1). CorpNewt también hizo un fork de brigadier arreglando estos errores: "),o("a",{attrs:{href:"https://github.com/corpnewt/brigadier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brigadier de CorpNewt"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"resolucion-incorrecta-con-opencore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resolucion-incorrecta-con-opencore"}},[e._v("#")]),e._v(" Resolución incorrecta con OpenCore")]),e._v(" "),o("ul",[o("li",[e._v("Sigue la guía de "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arreglando resolución y Verbose"),o("OutboundLink")],1),e._v(" para una configuración correcta, configura "),o("code",[e._v("UIScale")]),e._v(" a "),o("code",[e._v("02")]),e._v(" para HiDPI")]),e._v(" "),o("li",[e._v("Algunos usuarios se dieron cuenta que configurando "),o("code",[e._v("ConsoleMode")]),e._v(" a Max puede fallar a veces, dejándolo vacío puede ayudar.")])]),e._v(" "),o("h2",{attrs:{id:"no-puedo-encontrar-el-disco-de-windows-bootcamp-en-el-menu"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-puedo-encontrar-el-disco-de-windows-bootcamp-en-el-menu"}},[e._v("#")]),e._v(" No puedo encontrar el disco de Windows/BootCamp en el menú")]),e._v(" "),o("p",[e._v("En el caso de OpenCore, debemos tener en cuenta que las instalaciones legacy de Windows no son soportadas, únicamente UEFI. La mayoría de las instalaciones ahora son basasdas en UEFI pero aquellas hechas con el asistente de BootCamp son basadas en lagacy, así que tendrás que encontrar otras maneras de hacer un instalador (aquí Google es tu amigo). Esto también significa que las particiones MBR/Híbridas también están rotas así que tenrdrás que formatear el disco en el que quieres instalar Windows con Disk Utility. Dirígete a la guía "),o("a",{attrs:{href:"https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multiboot"),o("OutboundLink")],1),e._v(" para obtener más información.")]),e._v(" "),o("p",[e._v("Ahora, veremos algunas soluciones:")]),e._v(" "),o("ul",[o("li",[e._v("Asegúrate que "),o("code",[e._v("Misc -> Security -> ScanPolicy")]),e._v(" está configurado a "),o("code",[e._v("0")]),e._v(" para mostrar todos los discos")]),e._v(" "),o("li",[o("code",[e._v("Misc -> Boot -> Hideself")]),e._v(" debe estar habilitado cuando el gestor de arranque de Windows está en el mismo disco")])]),e._v(" "),o("h2",{attrs:{id:"bootear-windows-resulta-en-una-pantalla-azul-o-linux-se-crashea"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootear-windows-resulta-en-una-pantalla-azul-o-linux-se-crashea"}},[e._v("#")]),e._v(" Bootear Windows resulta en una pantalla azul o Linux se crashea")]),e._v(" "),o("p",[e._v("Esto se debe a problemas de alineación, asegúrate de que "),o("code",[e._v("SyncRuntimePermissions")]),e._v(" esté habilitado en firmwares compatibles con MAT. Verifica tus registros si tu firmware es compatible con las tablas de atributos de memoria (MATs, los cuales generalmente se ven en los firmwares de 2018 en adelante)")]),e._v(" "),o("p",[e._v("Error común de Windows:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("0xc000000d")])])]),e._v(" "),o("h2",{attrs:{id:"error-al-iniciar-windows-ocb-startimage-failed-already-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-al-iniciar-windows-ocb-startimage-failed-already-started"}},[e._v("#")]),e._v(" Error al iniciar Windows: "),o("code",[e._v("OCB: StartImage failed - Already started")])]),e._v(" "),o("p",[e._v("Esto es debido a que OpenCore se queda confundido cuando intenta arrancar Windows y accidentalmente piensa que está arrancando OpenCore. Esto puede ser arreglado moviendo Windows a su propia unidad "),o("em",[e._v("o")]),e._v(" agregando una ruta de unidad personalizada en BlessOverride. Dirígete a "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration.pdf"),o("OutboundLink")],1),e._v(" para más información.")]),e._v(" "),o("h2",{attrs:{id:"iasl-warning-unresolved"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iasl-warning-unresolved"}},[e._v("#")]),e._v(" iASL warning, # unresolved")]),e._v(" "),o("p",[e._v("Si cuando tratas de decompilar tu DSDT recibes un error similar a este:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)\n")])])]),o("p",[e._v("Podemos decir que esto sucede cuando una tabla ACPI requiere del resto para hacer referencia correctamente. No acepta la creación de DSDTs ya que sólo lo estamos usando para crear algunos SSDTs. Para aquellos que estén preocupados, pueden correr lo siguiente:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("iasl * [insert all ACPI files here]\n")])])]),o("h2",{attrs:{id:"mediakit-reporta-que-no-hay-espacio-suficiente"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mediakit-reporta-que-no-hay-espacio-suficiente"}},[e._v("#")]),e._v(" MediaKit reporta que no hay espacio suficiente")]),e._v(" "),o("p",[e._v("Este error es debido a que la EFI es demasiado pequeña, por defecto Windows creará una EFI de 100MB, mientras que macOS espera 200MB. Para solucionar esto tienes dos opciones:")]),e._v(" "),o("ul",[o("li",[e._v("Expande la EFI del disco a 200MB (busca en Google cómo)")]),e._v(" "),o("li",[e._v("Formatea el disco entero en vez de la partición")]),e._v(" "),o("li",[e._v("Ten en cuenta que por defecto Disk Utility sólo muestra particiones, presiona Cmd/Win+2 para mostrar todos los dispositivos (Alternativamente puedes presionar el botón view)")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"center"}},[e._v("Por defecto")]),e._v(" "),o("th",{staticStyle:{"text-align":"center"}},[e._v("Show All Devices (Cmd/Win+2)")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:r(578),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:r(579),alt:""}})])])])]),e._v(" "),o("h2",{attrs:{id:"inconsistencia-de-tiempo-entre-windows-y-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inconsistencia-de-tiempo-entre-windows-y-macos"}},[e._v("#")]),e._v(" Inconsistencia de tiempo entre Windows y macOS")]),e._v(" "),o("p",[e._v("Esto es debido a que macOS usa el Tiempo Universal, mientras que Windows utiliza el tiempo de Greenwich, por lo que tendrás que forzar que alguno de los dos sistemas operativos usen una forma distinta de medir el tiempo. Recomendamos fuertemente que modifiques Windows ya que es mucho menos destructivo y doloroso:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://inyextciones.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instalar las utilidades Bootcamp"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://superuser.com/q/494432",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modificar el registro de Windows"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);