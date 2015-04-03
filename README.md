# InspIRCd-Censor-Generator
InspIRCd-Censor-Generator is a censor.conf generator for InspIRCd coded in tcl and executable by tclsh

# What does this software do?
This software formats any given list into the proper list for InspIRCd's censor.conf. The software will accept any webpage or file containing words and format them. If you supply it with badword it will format badword into &lt;badword text="badword" replace="&lt;censored&gt;"&gt;. This can be useful for large lists of bad words to add. You could also set this up to a crontab to verify you are blocking the newest of swear words that the cool teens these days use.

# Where are some places that I can find these badword lists?
- http://www.bannedwordlist.com/lists/swearWords.txt
- https://code.google.com/p/badwordslist/downloads/detail?name=badwords.txt
- I'm sure there is more, but we have Google for that

# Installtion
Just download InspIRCd-Censor-Generator.tcl and place it in a directory.

# System Requirements
- Tcl 8.5
- Tclsh
- The HTTP package version 1.0 if downloading the list via HTTP

# Usage
- Quick Version: Type "wget https://raw.githubusercontent.com/AlphaT3ch/InspIRCd-Censor-Generator/master/InspIRCd-Censor-Generator.tcl && tclsh InspIRCd-Censor-Generator.tcl > censor.conf && rm InspIRCd-Censor-Generator.tcl" in the terminal to quickly save it as censor.conf
- Open InspIRCd-Censor-Generator.tcl and edit the configuration
- Run "tclsh InspIRCd-Censor-Generator.tcl" and make sure that is the output you are looking for
- Run "tclsh InspIRCd-Censor-Generator.tcl > censor.conf" where censor.conf is the output file

# InspIRCd-Censor-Generator
InspIRCd-Censor-Generator es un generador censor.conf para InspIRCd codificado en tcl y ejecutable por tclsh

# ¿Qué hace este software?
Este software formatea cualquier lista dada en la lista adecuada para censor.conf de InspIRCd. El software aceptará cualquier página web o un archivo que contiene las palabras y darles formato. Si suministra con badword se dará formato badword en & lt; badword text = "bad words" replace = "& lt; censurado & gt;" & gt ;. Esto puede ser útil para las grandes listas de malas palabras que desea agregar. También puede configurar esto a un crontab para verificar que está bloqueando el más nuevo de malas palabras que los adolescentes frescas estos días utilizan.

# ¿Dónde están algunos lugares que puedo encontrar estas listas BADWORD?
- Http://www.bannedwordlist.com/lists/swearWords.txt
- Https://code.google.com/p/badwordslist/downloads/detail?name=badwords.txt
- Estoy seguro de que hay más, pero tenemos Google para que

# Installtion
Sólo tienes que descargar InspIRCd-Censor-Generator.tcl y colocarlo en un directorio.

# Requisitos Del Sistema
- Tcl 8.5
- Tclsh
- La versión del paquete HTTP 1.0 si la descarga de la lista a través de HTTP

# Uso
- Versión rápida: Tipo "wget https://raw.githubusercontent.com/AlphaT3ch/InspIRCd-Censor-Generator/master/InspIRCd-Censor-Generator.tcl && Tclsh InspIRCd-Censor-Generator.tcl> censor.conf && rm InspIRCd-Censor-Generator.tcl "en la terminal para guardar rápidamente como censor.conf
- Abrir InspIRCd-Censor-Generator.tcl y editar la configuración
- Ejecutar "tclsh InspIRCd-Censor-Generator.tcl" y asegurarse de que es la salida que busca
- Ejecutar "tclsh InspIRCd-Censor-Generator.tcl> censor.conf" donde censor.conf es el archivo de salida
