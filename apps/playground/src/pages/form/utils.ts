export type Keys<T> = Extract<keyof T, string>
export type Values<T> = T[keyof T]
export type Entries<T> = [Keys<T>, Values<T>][]
export type Plain<T> = T extends (...a: any[]) => any
  ? T
  : T extends new (...a: any[]) => any
    ? T
    : T extends object
      ? {
          [Key in keyof T]: T[Key]
        }
      : T

/**
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 *
 * @param {T extends object} obj
 * The object to get the entries of.
 *
 * @return {Entries<T>}
 * Returns the new array of key-value pairs.
 *
 * @example
 * entries({ a: 1, b: '2' }) // [['a', 1], ['b', '2']]
 */
export function entries<T extends object>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>
}
