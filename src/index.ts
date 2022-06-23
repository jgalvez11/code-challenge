/**
 * Función que recibe una lista d enumeros y retorna el valor máximo absoluto de la resta
 *
 * @param array Lista de números
 * @returns Número máximo absoluto de la resta
 */
const calculateMaximumAbosluteDifference = (
  array: number[]
): string | number => {
  try {
    // Se valida que la lista exista y que tenga al menos 2 elementos
    if (!array || array.length <= 1) {
      return "El array debe contener al menos 2 elementos";
    }

    // Variable que almacena el primer arreglo
    let firstArray: number[] = [];
    // Variable que almacena el segundo arreglo
    let secondArray: number[] = [];
    // Variable que almacena el valor máximo absoluto de la resta
    let valueMax = 0;
    let result = {
      firstPart: [0],
      secondPart: [0],
      maxValueFirstPart: 0,
      maxValueSecondPart: 0,
    };

    /**
     * Se recorren los elementos para organizar los dos arreglos y comparar entre sí los valores máximos
     * y calcular el valor de cada resta entre sus maximos
     */
    for (let i = 0; i < array.length - 1; i++) {
      firstArray.push(array[i]);
      secondArray = array.slice(i + 1);

      // Se calcula el número máximo del primer arreglo
      const valueMaxFirstArray = Math.max(...firstArray);
      // Se calcula el número máximo del segundo arreglo
      const valueMaxSecondArray = Math.max(...secondArray);

      // Se calcula la resta absoluta entre los máximos de los dos arrelgos
      const V = Math.abs(valueMaxFirstArray - valueMaxSecondArray);

      // Se valida si el resultado de la resta es mayor al anterior resultado
      if (V > valueMax) {
        valueMax = V;

        // Se guarda la información en el objeto para luego obtenerla antes de enviar el resultado
        result = {
          firstPart: [...firstArray],
          secondPart: [...secondArray],
          maxValueFirstPart: valueMaxFirstArray,
          maxValueSecondPart: valueMaxSecondArray,
        };
      }
    }

    // Se imprime el objeto con la información
    console.log(result);

    // Se retorna el valor máximo
    return valueMax;
  } catch (error) {
    return String(error);
  }
};

/**
 * Arreglos
 */
const arr = [8, 9, 3, 6, 5, 5];
// const arr = [1, 2, -3, 3, -3, 2];
// const arr = [1, -2, 2, -4];

/**
 * Se invoca la función que realiza el cálculo
 */
console.log(calculateMaximumAbosluteDifference(arr));
