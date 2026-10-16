# Glucovida

> [Video de demostración]().

.

---
> *Desarrolladores:*
 - MHQ - [@WahWau](https://github.com/WahWau) (Uah/wa in commit logs)
 - DHH - [@CikiUmi](https://github.com/CikiUmi)


## Tecnología

Este proyecto usa Mendix Studio Pro 11.4.0, que no es versión LTS. Esto trae algunas restricciones:

| Componente | Versión que funciona |
|---|---|
| Studio Pro | 11.4.0 |
| Native Mobile Builder | 1.0.142 |
| Native Template | 15.4.4 |


> [!CAUTION]
> **Versión de Native Mobile Builder**
> 
> A partir de la versión 1.0.147, el builder reemplaza `@notifee/react-native` por `react-native-notify-kit`. La plantilla 15.x no conoce esa librería y el build falla con: `react-native-notify-kit is not a known dependency`.
> 
> El builder se actualiza solo. Para evitarlo, borre `%LOCALAPPDATA%\ui-updater\pending` antes de cada uso, o reemplaza esa carpeta por un archivo vacío llamado `pending`. [Descarga la versión 1.0.142](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/Build%20Native%20Apps%20Setup%20v1.0.142.exe).


## Limitaciones
- Make It Native, la aplicación oficial para probar aplicaciones nativas de Mendix en un dispositivo real, ya no soporta Studio Pro 11.4m así que se prueba con el emulador o con el APK.
- El APK no es compatible con dispositivos de páginas de 16 KB, por librerías de la plantilla. Es relevante para publicar en Google Play.
- La solución a largo plazo es migrar a una versión LTS de Studio Pro (11.12 o superior), .
