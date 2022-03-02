import AsyncStorage from "@react-native-async-storage/async-storage";

const methods = (nameStorage: string) => ({
  remove: async function () {
    try {
      await AsyncStorage.removeItem(nameStorage, (error) => {
        if (error === null) {
          console.warn(`Se eliminó con éxito el storage ${nameStorage}`);
        } else {
          throw error;
        }
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  deleteOne: async function (index: any) {
    try {
      const requestValues = await this.get();
      const deleteSuccess = requestValues.filter((object: any) => object !== index);
      await this.set(deleteSuccess, "object");
      return true;
    } catch (error) {
      return false;
    }
  },
  delete: async function ({ index, value }: { index: string; value: any }) {
    try {
      const requestValues = await this.get();
      const deleteSuccess = requestValues.filter((object: any) => !object[index] === value);
      await this.set(deleteSuccess, "object");
      return true;
    } catch (error) {
      return false;
    }
  },
  /**
   * Obtener datos del Storage
   *
   * @param {string} type "array" | "object". Significa que tipo de datos quieres
   *
   * @return {object|[any]} Retorna un objecto o un arreglo, depende del tipo de datos que quieras obtener
   */
  get: async function (type: "array" | "object" = "array") {
    const returnUndefined = type === "array" ? [] : {};
    try {
      const values = await AsyncStorage.getItem(nameStorage);
      return values ? JSON.parse(values) : returnUndefined;
    } catch (error) {
      console.error(error);
      return returnUndefined;
    }
  },
  /**
   * Insertar datos en el Storage
   *
   * @param {object|[any]} values puede enviar Objetos o Arreglos
   * @param {string} type  "array" | "object". Significa que tipo de datos insertaras
   *
   * @return {object|[any]} Retorna un objecto o un arreglo, depende del tipo de datos que estés insertando
   */
  set: async function (values: any, type: "array" | "object" = "array") {
    try {
      switch (type) {
        case "object":
          // "Object" significa que modifica todo el storage
          await AsyncStorage.setItem(nameStorage, JSON.stringify(values));
          break;
        case "array":
          // "Array" significa que va a obtener todo lo que existe y agrega uno nuevo
          // eslint-disable-next-line no-case-declarations
          const requestValues = await this.get();
          await AsyncStorage.setItem(nameStorage, JSON.stringify([...requestValues, values]));
          break;
      }
      return values;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  /**
   *
   * @param {*} Filter
   *
   * @returns {object[]} Retorna un arreglo con la información encontrada
   */
  filter: async function ({ index = "", value }: { index: string; value: any }) {
    const values = await this.get();
    return values.filter((object: any) => object[index] === value);
  },
  update: async function ({ index, find, value }: { index: string; find: string; value: any }) {
    try {
      const values = await this.get();
      const updated = values.map((object: any) => (object[index] === find ? { ...object, ...value } : object));
      await this.set(updated);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
});

export const storage = {
  auth: methods("auth"),
  settings: methods("settings"),
};
