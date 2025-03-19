OOP - CLASSES - MAGE

1) Crear un fichero Mage.js que contenga la clase Mage. Contendrá los siguientes atributos privados.
- name (String): Nombre del mago
- level (int): Nivel de experiencia del mago
- attack (int): Puntos de ataque
- life(int): Puntos de vida
- mana (int): Puntos de maná
Constructor por defecto: Creará un mago de nombre "Pakoh", nivel 1, puntos de ataque 30, vida 15 y maná 50.
Constructor con argumentos: Daremos valores a todos los atributos desde el constructor.

Métodos:
- heal(int points): Aumentará el atributo life un número de puntos igual a points y el maná se reducirá en 2 puntos. Si no hay puntos de maná suficientes para lanzar el hechizo devolveremos un valor -1 que gestionaremos como error en main().
- attack (Mage target): Recibirá de argumento un objeto de la clase Mage y simulará un combate entre dos magos.
  - El mago que invoca la función será el atacante
  - El mago que recibimos como argumento será el atacado. Se le quitará al atributo life del defensor un número de puntos igual al atributo attack del atacante.
- castSpell(Mage target): Recibirá de argumento un objeto de la clase Mage y simulará un lanzamiento de hechizo de un mago hacia otro.
  - El mago que invoca la función será el que lanza el hechizo.
  - El mago que recibimos como argumento será el atacado. Se le quitará al atributo life un número de puntos igual al atributo attack del atacante. Además, el atacante perderá 3 puntos de maná por haber lanzado el hechizo.Si no hay puntos de maná suficientes para lanzar el hechizo devolveremos un valor -1 que gestionaremos como error en main().
- isAlive(): Método que devolverá un boolean que será true si el mago está vivo (life > 0) o false si está muerto (life <= 0)

2) Crearemos el fichero MageTest.js que contendrá la función main()
- Combate entre 2 magos:
  - Crearemos 2 magos distintos.
  - Ejecutaremos las funciones heal(), attack(), castSpell() y isAlive(), primero invocadas desde el primer mago y después desde el segundo y mostrar resultados.
- Combate de 1 mago contra 9 magos:
  - Crear 10 magos, con los atributos: - name: "Richard von" + num mago. -level: num aleatorio entre 1 y 20, attack: 20, life: level*10, mana: level* 5
  - Meter en array de tipo Mage
  - Simular combate: Primer mago ataca al resto de magos. Mostrar resultados de cada ataque.

Nota: Se podrá añadir los métodos que se quieran para obtención de datos y poder mostrar en pantalla el combate con detalle.