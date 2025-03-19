OBJETIVO DEL JUEGO
  Un acólito ha cometido herejías dentro de la comunidad y tiene que pagar por ello. Deberá dar 20 tragos a una serie de vinos de efectos siniestros y veremos si todavía está vivo al final. Si sobrevive a tal proeza será nombrado "Señor de los
  Vinillos.

JUEGO DADOS
  En este juego usaremos los siguientes dados:
  1) Nombre: Gracefull  Denominación: DG  Valores:  (1,1,1,2,3,4,5,6,7,8,8)
  2) Nombre Hieratic    Denominación: DH  Valores:  (1,1,1,1,1,2,2,2,3,3,4,4,5)

TIRADAS (ROLLS)
  Las tiradas de dados tendrán las siguiente forma:
  - numero de dados + Denominación del dado

  ejemplos: 
    - 2DG: Consiste en lanzar 2 dados agraciados (graceful) y sumar los resultados.
    - 3DH: Consiste en tirar 3 dados hieráticos (hieratic) y sumar los resultados.

LOS ARCHIVOS
  Creaaremos una carpeta llamada LordOfWines con los siguientes archivos:

  - LordOfWines.js: Contendrá la función main().
  - Die.js: Contendrá la clase Die.
  - Time.js: Contendrá la clase DieRoll.
  - Wine.js: Contendrá la clase Wine.
  - Heretic.js: Contendrá la clase Heretic (hereje).

* Nota: Además de los atributos y métodos que se describen a continuación, se deben crear todos los métodos y propiedades adicionales necesarias.

FASES DEL JUEGO
  1)  CLASE DIE
    Usaremos la clase Die para crear los datos para el juego

    - Atributos:
      - values(int array): un array con los valores de las caras del dado
    
    - Constructor:
        Parametros:
          - name (String): podrá ser tanto "Graceful" como "Hieratic". Dependiendo del nombre creara el dado correspondiente y quardara en values el array con los valores de las caras del dado. En caso de meter un nombre incorrecto crearemos por defecto un dado corriente de 6 caras.

    - Métodos:
      - roll(): simulará la tirada del dado y devolverá uno de sus valores

    - Función main(): En la función main() crearemos todos los datos y los intruduciremos en un array. A continuación ejecutaremos 20 veces la función roll() para cada dado. Aqui está el resultado:

    -------------------------------
    Dado Hierático
    -------------------------------
    1
    2
    3
    4
    5
    6
    ... continúa.
    ------------------------------

  2)  CLASE TIME

    Usaremos la clase Time para gestionar la hora del juego. La hora a la que se beben los vinos es importante saber, ya que los vinos pueden tener efectos adversos dependiendo de la hora de ingesta.

    Por suerte, nuestro protagonista tiene un reloj de oro en el cual puede consultar la hora en cualquier momento. Además, permite consultar el momento del día que es y avanzar en el tiempo. 

    - Atributos:
      - minutes (int): Indica los minutos de la hora actual.
      - hours (int): Indica el número de hora (Se contabilizarán 24 horas para 1 día)
      - day (int): Indica el día actual.

    - Constructor:
      Parámetros: Recibirá la hora y día de comienzo escogida por nosotros. Es decir, recibirá los parámetros minutes, hours y day.


    - Métodos:
      - getTimeDay(): Devolverá un string con el momento de hora del día. Los momentos son los siguientes:
        “Afternoon”: De 12:00 a 17:59
        “Dusk”: De 18:00 a 19:59”
        “Night”; De 20:00 a 02:59
        “Dawn” De 03:00 a 06:59
        “Morning”: De 07:00 a 11:59

      - passBy(int minutes): Avanzará la hora en tantos minutos como se especifique. Devolverá un string indicando los minutos y horas que han pasado. en la forma “Time passes by 2 hours 23 minutes”

        * Nota: El tiempo no podrá avanzar en más de 3 horas en una única llamada a la función.

      - getTime(): Devolverá un string en la forma: “Day 2, 12 hours 35 minutes”

    Función main():

  3)  CLASE WINE
  4)  CLASE HERETIC

EL TRAGO (THE GULP)

