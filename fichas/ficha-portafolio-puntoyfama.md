# Nombre del proyecto

Punto y Fama.

El mensaje del único commit dice «commit inicial punto y fama». Las clases del código se llaman `PuntoYFamaGame` y `PuntoYFamaApp`. El archivo, la carpeta y el nombre del ejecutable en `puntoyfama.spec` son `puntoyfama`. El código no asigna título a la ventana.

# Título de la ficha

Adivinar cuatro dígitos distintos y saber cuántos están en su sitio.

# Qué problema resuelve

Para quién es: no está en el repo.

Qué hacía esa persona antes: no está en el repo.

El programa es un juego de escritorio. Al empezar, sortea cuatro dígitos distintos entre 0 y 9. El jugador propone otros cuatro, separados por comas. El programa responde cuántos coinciden en valor y posición (fama) y cuántos coinciden en valor pero no en posición (puntos). La partida termina al acertar las cuatro posiciones o al gastar 10 intentos.

# Cómo se usa

No es un sitio web. No pide cuenta. No hay roles.

1. Se ejecuta `puntoyfama.py`, o las celdas de `puntoyfama.ipynb`. El script abre una ventana de Tkinter.
2. La ventana pide cuatro números separados por comas. El ejemplo escrito en la etiqueta es `1,2,3,4`.
3. Se escribe la propuesta en el campo y se pulsa «Jugar», o Enter. Enter llama a la misma acción que el botón.
4. Si la entrada no son exactamente cuatro números, si hay repetidos o si algún número es mayor que 9, la ventana muestra ese error y no descuenta un intento. El campo se vacía igual.
5. Si la entrada es válida, la ventana muestra el número de intento, la propuesta, las famas, los puntos y los intentos que quedan. Debajo lista los intentos anteriores.
6. Con 4 famas, el texto pasa a ser una felicitación y revela la secuencia. Con 0 intentos restantes, dice que se acabaron e indica la secuencia correcta.
7. «Reglas» muestra u oculta el texto de reglas. El botón cambia a «Ocultar reglas».
8. «Reiniciar» crea una partida nueva, borra el resultado, borra el historial y vacía el campo.

# Qué se construyó

Stack que sí está en el repo:

- Python. El notebook declara el kernel «Python 3 (ipykernel)» y la versión `3.10.10`.
- Biblioteca estándar: `tkinter`, `ttk` y `random`.
- Jupyter Notebook, formato nbformat 4.5. `puntoyfama.py` conserva las marcas `# In[5]` y `# In[6]`.
- PyInstaller. `puntoyfama.spec` define `Analysis`, `PYZ`, `EXE` y `COLLECT`. El ejecutable se llama `puntoyfama`, con `console=True` y `upx=True`.

No hay `requirements.txt`. No hay framework web. No hay base de datos.

`.gitignore` ignora `build/`, `dist/`, `__pycache__/`, `.ipynb_checkpoints`, `venv/`, `env/`, `.idea/` y `.vscode/`. El ejecutable empaquetado no está en el repo. Que esas carpetas estén ignoradas no dice si se llegaron a crear.

Qué se intentó y se descartó: no hay otro commit ni otro stack. En `puntoyfama.py` (y la misma celda del notebook) quedaron comentadas dos líneas de un texto de resultado más corto, sin número de intento. El texto activo sí numera el intento. Eso es lo único que el archivo muestra como versión anterior.

El reto difícil: el repo no lo nombra. La regla que el código sí implementa está en `PuntoYFamaGame.play`: si el dígito coincide en la posición, suma fama; si no, y está en la secuencia, suma un punto. Un acierto de posición no suma también punto. Evidencia: `puntoyfama.py`, en el bucle de las cuatro posiciones, y el mismo bloque en `puntoyfama.ipynb`.

# Números

No está en el repo.

No hay usuarios, registros, métricas, fechas de corte ni precios. Las únicas cifras del código son reglas de la partida: 4 dígitos, rango 0–9 y 10 intentos.

# Línea de tiempo

- 2025-10-06, 10:30:57 −0500. Commit `8629640`, mensaje «commit inicial punto y fama». Autor y committer en git: sebastian. Entra el árbol completo: `.gitignore`, `puntoyfama.ipynb`, `puntoyfama.py` y `puntoyfama.spec`. 4 archivos, 395 líneas añadidas. En git solo aparece ese nombre, así que el commit parece trabajo de una sola persona. No hay commits anteriores ni posteriores. No está en el repo la fecha en que se escribieron las celdas: el notebook tiene `execution_count` 5 y 6 en las dos celdas con código, la tercera celda está vacía y no hay salidas ni marcas de tiempo.

# Imágenes

No está en el repo.

No hay capturas, gráficos ni salidas con imagen. Las tres celdas del notebook tienen `outputs` vacíos.

# Enlaces

Repositorio: https://github.com/Jsgallardo82/puntoyfama

El remoto `origin` de git apunta a esa URL. El repositorio es público: la API de GitHub devuelve `private: false`. La descripción del repositorio en esa API es nula.

URL de despliegue: no está en el repo.

# Borrador

El juego se llama Punto y Fama. Así lo dice el único commit. La carpeta y el spec usan `puntoyfama`. La ventana no recibe un título en el código.

Abrir el programa muestra una ventana de Tkinter. No hay cuenta. No hay roles. Se escriben cuatro números separados por comas y se pulsa «Jugar», o Enter.

La partida esconde cuatro dígitos distintos del 0 al 9. Hay 10 intentos. Fama cuenta un dígito en la posición correcta. Punto cuenta un dígito correcto en otra posición. Un acierto de posición no suma punto. Al ganar o al quedarse sin intentos, el programa muestra la secuencia.

El mismo juego está en `puntoyfama.py` y en `puntoyfama.ipynb`. El script aún tiene marcas de celda de Jupyter. El notebook fija Python 3.10.10. `puntoyfama.spec` prepara un ejecutable con PyInstaller. Ese ejecutable no está en el repo.

En el mismo archivo quedó comentado un texto de resultado sin número de intento. No hay un segundo commit. No hay un enfoque descartado fuera de esas dos líneas.

Hay una sola fecha en git: 2025-10-06. El autor del commit es sebastian. [no está en el repo] si trabajó con alguien más. [no está en el repo] para quién era el juego. [no está en el repo] usuarios, métricas y URL de despliegue. No hay README. No hay capturas.

# Qué tiene que confirmar el autor

- Si el commit lo hizo solo. Git solo muestra al autor sebastian.
- Con quién, si hubo alguien que no aparece en git.
- Cuándo se escribió y se ejecutó el notebook. Git solo fecha el commit del 2025-10-06. Las celdas tienen conteo de ejecución 5 y 6, sin fecha.
- Si el nombre público de la ficha es «Punto y Fama» o `puntoyfama`. El código no titula la ventana.
- Si llegó a generar el ejecutable de PyInstaller y si lo llegó a usar. `build/` y `dist/` no están en el repo.
- Si quiere una captura de la ventana. En el repo no hay ninguna.
