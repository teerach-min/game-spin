
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model RewardHistory
 * 
 */
export type RewardHistory = $Result.DefaultSelection<Prisma.$RewardHistoryPayload>
/**
 * Model GameSpin
 * 
 */
export type GameSpin = $Result.DefaultSelection<Prisma.$GameSpinPayload>
/**
 * Model RedeemRewardHistory
 * 
 */
export type RedeemRewardHistory = $Result.DefaultSelection<Prisma.$RedeemRewardHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardHistory`: Exposes CRUD operations for the **RewardHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardHistories
    * const rewardHistories = await prisma.rewardHistory.findMany()
    * ```
    */
  get rewardHistory(): Prisma.RewardHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSpin`: Exposes CRUD operations for the **GameSpin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSpins
    * const gameSpins = await prisma.gameSpin.findMany()
    * ```
    */
  get gameSpin(): Prisma.GameSpinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redeemRewardHistory`: Exposes CRUD operations for the **RedeemRewardHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedeemRewardHistories
    * const redeemRewardHistories = await prisma.redeemRewardHistory.findMany()
    * ```
    */
  get redeemRewardHistory(): Prisma.RedeemRewardHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Reward: 'Reward',
    RewardHistory: 'RewardHistory',
    GameSpin: 'GameSpin',
    RedeemRewardHistory: 'RedeemRewardHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "reward" | "rewardHistory" | "gameSpin" | "redeemRewardHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      RewardHistory: {
        payload: Prisma.$RewardHistoryPayload<ExtArgs>
        fields: Prisma.RewardHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          findFirst: {
            args: Prisma.RewardHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          findMany: {
            args: Prisma.RewardHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>[]
          }
          create: {
            args: Prisma.RewardHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          createMany: {
            args: Prisma.RewardHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>[]
          }
          delete: {
            args: Prisma.RewardHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          update: {
            args: Prisma.RewardHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RewardHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RewardHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardHistoryPayload>
          }
          aggregate: {
            args: Prisma.RewardHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardHistory>
          }
          groupBy: {
            args: Prisma.RewardHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RewardHistoryCountAggregateOutputType> | number
          }
        }
      }
      GameSpin: {
        payload: Prisma.$GameSpinPayload<ExtArgs>
        fields: Prisma.GameSpinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSpinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSpinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          findFirst: {
            args: Prisma.GameSpinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSpinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          findMany: {
            args: Prisma.GameSpinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>[]
          }
          create: {
            args: Prisma.GameSpinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          createMany: {
            args: Prisma.GameSpinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSpinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>[]
          }
          delete: {
            args: Prisma.GameSpinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          update: {
            args: Prisma.GameSpinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          deleteMany: {
            args: Prisma.GameSpinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSpinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSpinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>[]
          }
          upsert: {
            args: Prisma.GameSpinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSpinPayload>
          }
          aggregate: {
            args: Prisma.GameSpinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSpin>
          }
          groupBy: {
            args: Prisma.GameSpinGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSpinGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSpinCountArgs<ExtArgs>
            result: $Utils.Optional<GameSpinCountAggregateOutputType> | number
          }
        }
      }
      RedeemRewardHistory: {
        payload: Prisma.$RedeemRewardHistoryPayload<ExtArgs>
        fields: Prisma.RedeemRewardHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedeemRewardHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedeemRewardHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          findFirst: {
            args: Prisma.RedeemRewardHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedeemRewardHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          findMany: {
            args: Prisma.RedeemRewardHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>[]
          }
          create: {
            args: Prisma.RedeemRewardHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          createMany: {
            args: Prisma.RedeemRewardHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedeemRewardHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>[]
          }
          delete: {
            args: Prisma.RedeemRewardHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          update: {
            args: Prisma.RedeemRewardHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RedeemRewardHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedeemRewardHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedeemRewardHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RedeemRewardHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedeemRewardHistoryPayload>
          }
          aggregate: {
            args: Prisma.RedeemRewardHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedeemRewardHistory>
          }
          groupBy: {
            args: Prisma.RedeemRewardHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedeemRewardHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedeemRewardHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RedeemRewardHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    reward?: RewardOmit
    rewardHistory?: RewardHistoryOmit
    gameSpin?: GameSpinOmit
    redeemRewardHistory?: RedeemRewardHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rewardHistories: number
    redeemRewardHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewardHistories?: boolean | UserCountOutputTypeCountRewardHistoriesArgs
    redeemRewardHistories?: boolean | UserCountOutputTypeCountRedeemRewardHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRedeemRewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedeemRewardHistoryWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    redeemRewardHistories: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redeemRewardHistories?: boolean | RewardCountOutputTypeCountRedeemRewardHistoriesArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountRedeemRewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedeemRewardHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    point: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    point?: true
  }

  export type UserSumAggregateInputType = {
    point?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    point: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rewardHistories?: boolean | User$rewardHistoriesArgs<ExtArgs>
    redeemRewardHistories?: boolean | User$redeemRewardHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewardHistories?: boolean | User$rewardHistoriesArgs<ExtArgs>
    redeemRewardHistories?: boolean | User$redeemRewardHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rewardHistories: Prisma.$RewardHistoryPayload<ExtArgs>[]
      redeemRewardHistories: Prisma.$RedeemRewardHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rewardHistories<T extends User$rewardHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redeemRewardHistories<T extends User$redeemRewardHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$redeemRewardHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly point: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rewardHistories
   */
  export type User$rewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    where?: RewardHistoryWhereInput
    orderBy?: RewardHistoryOrderByWithRelationInput | RewardHistoryOrderByWithRelationInput[]
    cursor?: RewardHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardHistoryScalarFieldEnum | RewardHistoryScalarFieldEnum[]
  }

  /**
   * User.redeemRewardHistories
   */
  export type User$redeemRewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    where?: RedeemRewardHistoryWhereInput
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    cursor?: RedeemRewardHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedeemRewardHistoryScalarFieldEnum | RedeemRewardHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    point: number | null
  }

  export type RewardSumAggregateOutputType = {
    point: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    name: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    point?: true
  }

  export type RewardSumAggregateInputType = {
    point?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    name?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    name: string
    point: number
    createdAt: Date
    updatedAt: Date
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    redeemRewardHistories?: boolean | Reward$redeemRewardHistoriesArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    name?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redeemRewardHistories?: boolean | Reward$redeemRewardHistoriesArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      redeemRewardHistories: Prisma.$RedeemRewardHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redeemRewardHistories<T extends Reward$redeemRewardHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Reward$redeemRewardHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly name: FieldRef<"Reward", 'String'>
    readonly point: FieldRef<"Reward", 'Int'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
    readonly updatedAt: FieldRef<"Reward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward.redeemRewardHistories
   */
  export type Reward$redeemRewardHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    where?: RedeemRewardHistoryWhereInput
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    cursor?: RedeemRewardHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedeemRewardHistoryScalarFieldEnum | RedeemRewardHistoryScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model RewardHistory
   */

  export type AggregateRewardHistory = {
    _count: RewardHistoryCountAggregateOutputType | null
    _min: RewardHistoryMinAggregateOutputType | null
    _max: RewardHistoryMaxAggregateOutputType | null
  }

  export type RewardHistoryMinAggregateOutputType = {
    id: string | null
    rewardPoint: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RewardHistoryMaxAggregateOutputType = {
    id: string | null
    rewardPoint: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RewardHistoryCountAggregateOutputType = {
    id: number
    rewardPoint: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RewardHistoryMinAggregateInputType = {
    id?: true
    rewardPoint?: true
    userId?: true
    createdAt?: true
  }

  export type RewardHistoryMaxAggregateInputType = {
    id?: true
    rewardPoint?: true
    userId?: true
    createdAt?: true
  }

  export type RewardHistoryCountAggregateInputType = {
    id?: true
    rewardPoint?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RewardHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardHistory to aggregate.
     */
    where?: RewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardHistories to fetch.
     */
    orderBy?: RewardHistoryOrderByWithRelationInput | RewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardHistories
    **/
    _count?: true | RewardHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardHistoryMaxAggregateInputType
  }

  export type GetRewardHistoryAggregateType<T extends RewardHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardHistory[P]>
      : GetScalarType<T[P], AggregateRewardHistory[P]>
  }




  export type RewardHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardHistoryWhereInput
    orderBy?: RewardHistoryOrderByWithAggregationInput | RewardHistoryOrderByWithAggregationInput[]
    by: RewardHistoryScalarFieldEnum[] | RewardHistoryScalarFieldEnum
    having?: RewardHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardHistoryCountAggregateInputType | true
    _min?: RewardHistoryMinAggregateInputType
    _max?: RewardHistoryMaxAggregateInputType
  }

  export type RewardHistoryGroupByOutputType = {
    id: string
    rewardPoint: string
    userId: string
    createdAt: Date
    _count: RewardHistoryCountAggregateOutputType | null
    _min: RewardHistoryMinAggregateOutputType | null
    _max: RewardHistoryMaxAggregateOutputType | null
  }

  type GetRewardHistoryGroupByPayload<T extends RewardHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RewardHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RewardHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rewardPoint?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardHistory"]>

  export type RewardHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rewardPoint?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardHistory"]>

  export type RewardHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rewardPoint?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardHistory"]>

  export type RewardHistorySelectScalar = {
    id?: boolean
    rewardPoint?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RewardHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rewardPoint" | "userId" | "createdAt", ExtArgs["result"]["rewardHistory"]>
  export type RewardHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rewardPoint: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["rewardHistory"]>
    composites: {}
  }

  type RewardHistoryGetPayload<S extends boolean | null | undefined | RewardHistoryDefaultArgs> = $Result.GetResult<Prisma.$RewardHistoryPayload, S>

  type RewardHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardHistoryCountAggregateInputType | true
    }

  export interface RewardHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardHistory'], meta: { name: 'RewardHistory' } }
    /**
     * Find zero or one RewardHistory that matches the filter.
     * @param {RewardHistoryFindUniqueArgs} args - Arguments to find a RewardHistory
     * @example
     * // Get one RewardHistory
     * const rewardHistory = await prisma.rewardHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardHistoryFindUniqueArgs>(args: SelectSubset<T, RewardHistoryFindUniqueArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardHistoryFindUniqueOrThrowArgs} args - Arguments to find a RewardHistory
     * @example
     * // Get one RewardHistory
     * const rewardHistory = await prisma.rewardHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryFindFirstArgs} args - Arguments to find a RewardHistory
     * @example
     * // Get one RewardHistory
     * const rewardHistory = await prisma.rewardHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardHistoryFindFirstArgs>(args?: SelectSubset<T, RewardHistoryFindFirstArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryFindFirstOrThrowArgs} args - Arguments to find a RewardHistory
     * @example
     * // Get one RewardHistory
     * const rewardHistory = await prisma.rewardHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardHistories
     * const rewardHistories = await prisma.rewardHistory.findMany()
     * 
     * // Get first 10 RewardHistories
     * const rewardHistories = await prisma.rewardHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardHistoryWithIdOnly = await prisma.rewardHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardHistoryFindManyArgs>(args?: SelectSubset<T, RewardHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardHistory.
     * @param {RewardHistoryCreateArgs} args - Arguments to create a RewardHistory.
     * @example
     * // Create one RewardHistory
     * const RewardHistory = await prisma.rewardHistory.create({
     *   data: {
     *     // ... data to create a RewardHistory
     *   }
     * })
     * 
     */
    create<T extends RewardHistoryCreateArgs>(args: SelectSubset<T, RewardHistoryCreateArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardHistories.
     * @param {RewardHistoryCreateManyArgs} args - Arguments to create many RewardHistories.
     * @example
     * // Create many RewardHistories
     * const rewardHistory = await prisma.rewardHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardHistoryCreateManyArgs>(args?: SelectSubset<T, RewardHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardHistories and returns the data saved in the database.
     * @param {RewardHistoryCreateManyAndReturnArgs} args - Arguments to create many RewardHistories.
     * @example
     * // Create many RewardHistories
     * const rewardHistory = await prisma.rewardHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardHistories and only return the `id`
     * const rewardHistoryWithIdOnly = await prisma.rewardHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardHistory.
     * @param {RewardHistoryDeleteArgs} args - Arguments to delete one RewardHistory.
     * @example
     * // Delete one RewardHistory
     * const RewardHistory = await prisma.rewardHistory.delete({
     *   where: {
     *     // ... filter to delete one RewardHistory
     *   }
     * })
     * 
     */
    delete<T extends RewardHistoryDeleteArgs>(args: SelectSubset<T, RewardHistoryDeleteArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardHistory.
     * @param {RewardHistoryUpdateArgs} args - Arguments to update one RewardHistory.
     * @example
     * // Update one RewardHistory
     * const rewardHistory = await prisma.rewardHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardHistoryUpdateArgs>(args: SelectSubset<T, RewardHistoryUpdateArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardHistories.
     * @param {RewardHistoryDeleteManyArgs} args - Arguments to filter RewardHistories to delete.
     * @example
     * // Delete a few RewardHistories
     * const { count } = await prisma.rewardHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardHistoryDeleteManyArgs>(args?: SelectSubset<T, RewardHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardHistories
     * const rewardHistory = await prisma.rewardHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardHistoryUpdateManyArgs>(args: SelectSubset<T, RewardHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardHistories and returns the data updated in the database.
     * @param {RewardHistoryUpdateManyAndReturnArgs} args - Arguments to update many RewardHistories.
     * @example
     * // Update many RewardHistories
     * const rewardHistory = await prisma.rewardHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardHistories and only return the `id`
     * const rewardHistoryWithIdOnly = await prisma.rewardHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardHistory.
     * @param {RewardHistoryUpsertArgs} args - Arguments to update or create a RewardHistory.
     * @example
     * // Update or create a RewardHistory
     * const rewardHistory = await prisma.rewardHistory.upsert({
     *   create: {
     *     // ... data to create a RewardHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardHistory we want to update
     *   }
     * })
     */
    upsert<T extends RewardHistoryUpsertArgs>(args: SelectSubset<T, RewardHistoryUpsertArgs<ExtArgs>>): Prisma__RewardHistoryClient<$Result.GetResult<Prisma.$RewardHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryCountArgs} args - Arguments to filter RewardHistories to count.
     * @example
     * // Count the number of RewardHistories
     * const count = await prisma.rewardHistory.count({
     *   where: {
     *     // ... the filter for the RewardHistories we want to count
     *   }
     * })
    **/
    count<T extends RewardHistoryCountArgs>(
      args?: Subset<T, RewardHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardHistoryAggregateArgs>(args: Subset<T, RewardHistoryAggregateArgs>): Prisma.PrismaPromise<GetRewardHistoryAggregateType<T>>

    /**
     * Group by RewardHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RewardHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardHistory model
   */
  readonly fields: RewardHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RewardHistory model
   */
  interface RewardHistoryFieldRefs {
    readonly id: FieldRef<"RewardHistory", 'String'>
    readonly rewardPoint: FieldRef<"RewardHistory", 'String'>
    readonly userId: FieldRef<"RewardHistory", 'String'>
    readonly createdAt: FieldRef<"RewardHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardHistory findUnique
   */
  export type RewardHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RewardHistory to fetch.
     */
    where: RewardHistoryWhereUniqueInput
  }

  /**
   * RewardHistory findUniqueOrThrow
   */
  export type RewardHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RewardHistory to fetch.
     */
    where: RewardHistoryWhereUniqueInput
  }

  /**
   * RewardHistory findFirst
   */
  export type RewardHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RewardHistory to fetch.
     */
    where?: RewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardHistories to fetch.
     */
    orderBy?: RewardHistoryOrderByWithRelationInput | RewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardHistories.
     */
    cursor?: RewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardHistories.
     */
    distinct?: RewardHistoryScalarFieldEnum | RewardHistoryScalarFieldEnum[]
  }

  /**
   * RewardHistory findFirstOrThrow
   */
  export type RewardHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RewardHistory to fetch.
     */
    where?: RewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardHistories to fetch.
     */
    orderBy?: RewardHistoryOrderByWithRelationInput | RewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardHistories.
     */
    cursor?: RewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardHistories.
     */
    distinct?: RewardHistoryScalarFieldEnum | RewardHistoryScalarFieldEnum[]
  }

  /**
   * RewardHistory findMany
   */
  export type RewardHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RewardHistories to fetch.
     */
    where?: RewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardHistories to fetch.
     */
    orderBy?: RewardHistoryOrderByWithRelationInput | RewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardHistories.
     */
    cursor?: RewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardHistories.
     */
    skip?: number
    distinct?: RewardHistoryScalarFieldEnum | RewardHistoryScalarFieldEnum[]
  }

  /**
   * RewardHistory create
   */
  export type RewardHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardHistory.
     */
    data: XOR<RewardHistoryCreateInput, RewardHistoryUncheckedCreateInput>
  }

  /**
   * RewardHistory createMany
   */
  export type RewardHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardHistories.
     */
    data: RewardHistoryCreateManyInput | RewardHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardHistory createManyAndReturn
   */
  export type RewardHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RewardHistories.
     */
    data: RewardHistoryCreateManyInput | RewardHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardHistory update
   */
  export type RewardHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardHistory.
     */
    data: XOR<RewardHistoryUpdateInput, RewardHistoryUncheckedUpdateInput>
    /**
     * Choose, which RewardHistory to update.
     */
    where: RewardHistoryWhereUniqueInput
  }

  /**
   * RewardHistory updateMany
   */
  export type RewardHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardHistories.
     */
    data: XOR<RewardHistoryUpdateManyMutationInput, RewardHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RewardHistories to update
     */
    where?: RewardHistoryWhereInput
    /**
     * Limit how many RewardHistories to update.
     */
    limit?: number
  }

  /**
   * RewardHistory updateManyAndReturn
   */
  export type RewardHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RewardHistories.
     */
    data: XOR<RewardHistoryUpdateManyMutationInput, RewardHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RewardHistories to update
     */
    where?: RewardHistoryWhereInput
    /**
     * Limit how many RewardHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardHistory upsert
   */
  export type RewardHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardHistory to update in case it exists.
     */
    where: RewardHistoryWhereUniqueInput
    /**
     * In case the RewardHistory found by the `where` argument doesn't exist, create a new RewardHistory with this data.
     */
    create: XOR<RewardHistoryCreateInput, RewardHistoryUncheckedCreateInput>
    /**
     * In case the RewardHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardHistoryUpdateInput, RewardHistoryUncheckedUpdateInput>
  }

  /**
   * RewardHistory delete
   */
  export type RewardHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
    /**
     * Filter which RewardHistory to delete.
     */
    where: RewardHistoryWhereUniqueInput
  }

  /**
   * RewardHistory deleteMany
   */
  export type RewardHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardHistories to delete
     */
    where?: RewardHistoryWhereInput
    /**
     * Limit how many RewardHistories to delete.
     */
    limit?: number
  }

  /**
   * RewardHistory without action
   */
  export type RewardHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardHistory
     */
    select?: RewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardHistory
     */
    omit?: RewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardHistoryInclude<ExtArgs> | null
  }


  /**
   * Model GameSpin
   */

  export type AggregateGameSpin = {
    _count: GameSpinCountAggregateOutputType | null
    _avg: GameSpinAvgAggregateOutputType | null
    _sum: GameSpinSumAggregateOutputType | null
    _min: GameSpinMinAggregateOutputType | null
    _max: GameSpinMaxAggregateOutputType | null
  }

  export type GameSpinAvgAggregateOutputType = {
    point: number | null
  }

  export type GameSpinSumAggregateOutputType = {
    point: number | null
  }

  export type GameSpinMinAggregateOutputType = {
    id: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSpinMaxAggregateOutputType = {
    id: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameSpinCountAggregateOutputType = {
    id: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameSpinAvgAggregateInputType = {
    point?: true
  }

  export type GameSpinSumAggregateInputType = {
    point?: true
  }

  export type GameSpinMinAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSpinMaxAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameSpinCountAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameSpinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSpin to aggregate.
     */
    where?: GameSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSpins to fetch.
     */
    orderBy?: GameSpinOrderByWithRelationInput | GameSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSpins
    **/
    _count?: true | GameSpinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSpinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSpinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSpinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSpinMaxAggregateInputType
  }

  export type GetGameSpinAggregateType<T extends GameSpinAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSpin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSpin[P]>
      : GetScalarType<T[P], AggregateGameSpin[P]>
  }




  export type GameSpinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSpinWhereInput
    orderBy?: GameSpinOrderByWithAggregationInput | GameSpinOrderByWithAggregationInput[]
    by: GameSpinScalarFieldEnum[] | GameSpinScalarFieldEnum
    having?: GameSpinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSpinCountAggregateInputType | true
    _avg?: GameSpinAvgAggregateInputType
    _sum?: GameSpinSumAggregateInputType
    _min?: GameSpinMinAggregateInputType
    _max?: GameSpinMaxAggregateInputType
  }

  export type GameSpinGroupByOutputType = {
    id: string
    point: number
    createdAt: Date
    updatedAt: Date
    _count: GameSpinCountAggregateOutputType | null
    _avg: GameSpinAvgAggregateOutputType | null
    _sum: GameSpinSumAggregateOutputType | null
    _min: GameSpinMinAggregateOutputType | null
    _max: GameSpinMaxAggregateOutputType | null
  }

  type GetGameSpinGroupByPayload<T extends GameSpinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSpinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSpinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSpinGroupByOutputType[P]>
            : GetScalarType<T[P], GameSpinGroupByOutputType[P]>
        }
      >
    >


  export type GameSpinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameSpin"]>

  export type GameSpinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameSpin"]>

  export type GameSpinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameSpin"]>

  export type GameSpinSelectScalar = {
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameSpinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["gameSpin"]>

  export type $GameSpinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSpin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameSpin"]>
    composites: {}
  }

  type GameSpinGetPayload<S extends boolean | null | undefined | GameSpinDefaultArgs> = $Result.GetResult<Prisma.$GameSpinPayload, S>

  type GameSpinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSpinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSpinCountAggregateInputType | true
    }

  export interface GameSpinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSpin'], meta: { name: 'GameSpin' } }
    /**
     * Find zero or one GameSpin that matches the filter.
     * @param {GameSpinFindUniqueArgs} args - Arguments to find a GameSpin
     * @example
     * // Get one GameSpin
     * const gameSpin = await prisma.gameSpin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSpinFindUniqueArgs>(args: SelectSubset<T, GameSpinFindUniqueArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSpin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSpinFindUniqueOrThrowArgs} args - Arguments to find a GameSpin
     * @example
     * // Get one GameSpin
     * const gameSpin = await prisma.gameSpin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSpinFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSpinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSpin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinFindFirstArgs} args - Arguments to find a GameSpin
     * @example
     * // Get one GameSpin
     * const gameSpin = await prisma.gameSpin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSpinFindFirstArgs>(args?: SelectSubset<T, GameSpinFindFirstArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSpin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinFindFirstOrThrowArgs} args - Arguments to find a GameSpin
     * @example
     * // Get one GameSpin
     * const gameSpin = await prisma.gameSpin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSpinFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSpinFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSpins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSpins
     * const gameSpins = await prisma.gameSpin.findMany()
     * 
     * // Get first 10 GameSpins
     * const gameSpins = await prisma.gameSpin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSpinWithIdOnly = await prisma.gameSpin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSpinFindManyArgs>(args?: SelectSubset<T, GameSpinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSpin.
     * @param {GameSpinCreateArgs} args - Arguments to create a GameSpin.
     * @example
     * // Create one GameSpin
     * const GameSpin = await prisma.gameSpin.create({
     *   data: {
     *     // ... data to create a GameSpin
     *   }
     * })
     * 
     */
    create<T extends GameSpinCreateArgs>(args: SelectSubset<T, GameSpinCreateArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSpins.
     * @param {GameSpinCreateManyArgs} args - Arguments to create many GameSpins.
     * @example
     * // Create many GameSpins
     * const gameSpin = await prisma.gameSpin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSpinCreateManyArgs>(args?: SelectSubset<T, GameSpinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSpins and returns the data saved in the database.
     * @param {GameSpinCreateManyAndReturnArgs} args - Arguments to create many GameSpins.
     * @example
     * // Create many GameSpins
     * const gameSpin = await prisma.gameSpin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSpins and only return the `id`
     * const gameSpinWithIdOnly = await prisma.gameSpin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSpinCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSpinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSpin.
     * @param {GameSpinDeleteArgs} args - Arguments to delete one GameSpin.
     * @example
     * // Delete one GameSpin
     * const GameSpin = await prisma.gameSpin.delete({
     *   where: {
     *     // ... filter to delete one GameSpin
     *   }
     * })
     * 
     */
    delete<T extends GameSpinDeleteArgs>(args: SelectSubset<T, GameSpinDeleteArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSpin.
     * @param {GameSpinUpdateArgs} args - Arguments to update one GameSpin.
     * @example
     * // Update one GameSpin
     * const gameSpin = await prisma.gameSpin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSpinUpdateArgs>(args: SelectSubset<T, GameSpinUpdateArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSpins.
     * @param {GameSpinDeleteManyArgs} args - Arguments to filter GameSpins to delete.
     * @example
     * // Delete a few GameSpins
     * const { count } = await prisma.gameSpin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSpinDeleteManyArgs>(args?: SelectSubset<T, GameSpinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSpins
     * const gameSpin = await prisma.gameSpin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSpinUpdateManyArgs>(args: SelectSubset<T, GameSpinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSpins and returns the data updated in the database.
     * @param {GameSpinUpdateManyAndReturnArgs} args - Arguments to update many GameSpins.
     * @example
     * // Update many GameSpins
     * const gameSpin = await prisma.gameSpin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSpins and only return the `id`
     * const gameSpinWithIdOnly = await prisma.gameSpin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameSpinUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSpinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSpin.
     * @param {GameSpinUpsertArgs} args - Arguments to update or create a GameSpin.
     * @example
     * // Update or create a GameSpin
     * const gameSpin = await prisma.gameSpin.upsert({
     *   create: {
     *     // ... data to create a GameSpin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSpin we want to update
     *   }
     * })
     */
    upsert<T extends GameSpinUpsertArgs>(args: SelectSubset<T, GameSpinUpsertArgs<ExtArgs>>): Prisma__GameSpinClient<$Result.GetResult<Prisma.$GameSpinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinCountArgs} args - Arguments to filter GameSpins to count.
     * @example
     * // Count the number of GameSpins
     * const count = await prisma.gameSpin.count({
     *   where: {
     *     // ... the filter for the GameSpins we want to count
     *   }
     * })
    **/
    count<T extends GameSpinCountArgs>(
      args?: Subset<T, GameSpinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSpinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameSpinAggregateArgs>(args: Subset<T, GameSpinAggregateArgs>): Prisma.PrismaPromise<GetGameSpinAggregateType<T>>

    /**
     * Group by GameSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSpinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameSpinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSpinGroupByArgs['orderBy'] }
        : { orderBy?: GameSpinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameSpinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSpinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSpin model
   */
  readonly fields: GameSpinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSpin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSpinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameSpin model
   */
  interface GameSpinFieldRefs {
    readonly id: FieldRef<"GameSpin", 'String'>
    readonly point: FieldRef<"GameSpin", 'Int'>
    readonly createdAt: FieldRef<"GameSpin", 'DateTime'>
    readonly updatedAt: FieldRef<"GameSpin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameSpin findUnique
   */
  export type GameSpinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter, which GameSpin to fetch.
     */
    where: GameSpinWhereUniqueInput
  }

  /**
   * GameSpin findUniqueOrThrow
   */
  export type GameSpinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter, which GameSpin to fetch.
     */
    where: GameSpinWhereUniqueInput
  }

  /**
   * GameSpin findFirst
   */
  export type GameSpinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter, which GameSpin to fetch.
     */
    where?: GameSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSpins to fetch.
     */
    orderBy?: GameSpinOrderByWithRelationInput | GameSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSpins.
     */
    cursor?: GameSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSpins.
     */
    distinct?: GameSpinScalarFieldEnum | GameSpinScalarFieldEnum[]
  }

  /**
   * GameSpin findFirstOrThrow
   */
  export type GameSpinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter, which GameSpin to fetch.
     */
    where?: GameSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSpins to fetch.
     */
    orderBy?: GameSpinOrderByWithRelationInput | GameSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSpins.
     */
    cursor?: GameSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSpins.
     */
    distinct?: GameSpinScalarFieldEnum | GameSpinScalarFieldEnum[]
  }

  /**
   * GameSpin findMany
   */
  export type GameSpinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter, which GameSpins to fetch.
     */
    where?: GameSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSpins to fetch.
     */
    orderBy?: GameSpinOrderByWithRelationInput | GameSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSpins.
     */
    cursor?: GameSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSpins.
     */
    skip?: number
    distinct?: GameSpinScalarFieldEnum | GameSpinScalarFieldEnum[]
  }

  /**
   * GameSpin create
   */
  export type GameSpinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * The data needed to create a GameSpin.
     */
    data: XOR<GameSpinCreateInput, GameSpinUncheckedCreateInput>
  }

  /**
   * GameSpin createMany
   */
  export type GameSpinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSpins.
     */
    data: GameSpinCreateManyInput | GameSpinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSpin createManyAndReturn
   */
  export type GameSpinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * The data used to create many GameSpins.
     */
    data: GameSpinCreateManyInput | GameSpinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSpin update
   */
  export type GameSpinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * The data needed to update a GameSpin.
     */
    data: XOR<GameSpinUpdateInput, GameSpinUncheckedUpdateInput>
    /**
     * Choose, which GameSpin to update.
     */
    where: GameSpinWhereUniqueInput
  }

  /**
   * GameSpin updateMany
   */
  export type GameSpinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSpins.
     */
    data: XOR<GameSpinUpdateManyMutationInput, GameSpinUncheckedUpdateManyInput>
    /**
     * Filter which GameSpins to update
     */
    where?: GameSpinWhereInput
    /**
     * Limit how many GameSpins to update.
     */
    limit?: number
  }

  /**
   * GameSpin updateManyAndReturn
   */
  export type GameSpinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * The data used to update GameSpins.
     */
    data: XOR<GameSpinUpdateManyMutationInput, GameSpinUncheckedUpdateManyInput>
    /**
     * Filter which GameSpins to update
     */
    where?: GameSpinWhereInput
    /**
     * Limit how many GameSpins to update.
     */
    limit?: number
  }

  /**
   * GameSpin upsert
   */
  export type GameSpinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * The filter to search for the GameSpin to update in case it exists.
     */
    where: GameSpinWhereUniqueInput
    /**
     * In case the GameSpin found by the `where` argument doesn't exist, create a new GameSpin with this data.
     */
    create: XOR<GameSpinCreateInput, GameSpinUncheckedCreateInput>
    /**
     * In case the GameSpin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSpinUpdateInput, GameSpinUncheckedUpdateInput>
  }

  /**
   * GameSpin delete
   */
  export type GameSpinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
    /**
     * Filter which GameSpin to delete.
     */
    where: GameSpinWhereUniqueInput
  }

  /**
   * GameSpin deleteMany
   */
  export type GameSpinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSpins to delete
     */
    where?: GameSpinWhereInput
    /**
     * Limit how many GameSpins to delete.
     */
    limit?: number
  }

  /**
   * GameSpin without action
   */
  export type GameSpinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSpin
     */
    select?: GameSpinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSpin
     */
    omit?: GameSpinOmit<ExtArgs> | null
  }


  /**
   * Model RedeemRewardHistory
   */

  export type AggregateRedeemRewardHistory = {
    _count: RedeemRewardHistoryCountAggregateOutputType | null
    _min: RedeemRewardHistoryMinAggregateOutputType | null
    _max: RedeemRewardHistoryMaxAggregateOutputType | null
  }

  export type RedeemRewardHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    createdAt: Date | null
  }

  export type RedeemRewardHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    createdAt: Date | null
  }

  export type RedeemRewardHistoryCountAggregateOutputType = {
    id: number
    userId: number
    rewardId: number
    createdAt: number
    _all: number
  }


  export type RedeemRewardHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    createdAt?: true
  }

  export type RedeemRewardHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    createdAt?: true
  }

  export type RedeemRewardHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    createdAt?: true
    _all?: true
  }

  export type RedeemRewardHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeemRewardHistory to aggregate.
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemRewardHistories to fetch.
     */
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedeemRewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemRewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemRewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedeemRewardHistories
    **/
    _count?: true | RedeemRewardHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedeemRewardHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedeemRewardHistoryMaxAggregateInputType
  }

  export type GetRedeemRewardHistoryAggregateType<T extends RedeemRewardHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRedeemRewardHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedeemRewardHistory[P]>
      : GetScalarType<T[P], AggregateRedeemRewardHistory[P]>
  }




  export type RedeemRewardHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedeemRewardHistoryWhereInput
    orderBy?: RedeemRewardHistoryOrderByWithAggregationInput | RedeemRewardHistoryOrderByWithAggregationInput[]
    by: RedeemRewardHistoryScalarFieldEnum[] | RedeemRewardHistoryScalarFieldEnum
    having?: RedeemRewardHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedeemRewardHistoryCountAggregateInputType | true
    _min?: RedeemRewardHistoryMinAggregateInputType
    _max?: RedeemRewardHistoryMaxAggregateInputType
  }

  export type RedeemRewardHistoryGroupByOutputType = {
    id: string
    userId: string
    rewardId: string
    createdAt: Date
    _count: RedeemRewardHistoryCountAggregateOutputType | null
    _min: RedeemRewardHistoryMinAggregateOutputType | null
    _max: RedeemRewardHistoryMaxAggregateOutputType | null
  }

  type GetRedeemRewardHistoryGroupByPayload<T extends RedeemRewardHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedeemRewardHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedeemRewardHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedeemRewardHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RedeemRewardHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RedeemRewardHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redeemRewardHistory"]>

  export type RedeemRewardHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redeemRewardHistory"]>

  export type RedeemRewardHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redeemRewardHistory"]>

  export type RedeemRewardHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    createdAt?: boolean
  }

  export type RedeemRewardHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rewardId" | "createdAt", ExtArgs["result"]["redeemRewardHistory"]>
  export type RedeemRewardHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type RedeemRewardHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type RedeemRewardHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }

  export type $RedeemRewardHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedeemRewardHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reward: Prisma.$RewardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rewardId: string
      createdAt: Date
    }, ExtArgs["result"]["redeemRewardHistory"]>
    composites: {}
  }

  type RedeemRewardHistoryGetPayload<S extends boolean | null | undefined | RedeemRewardHistoryDefaultArgs> = $Result.GetResult<Prisma.$RedeemRewardHistoryPayload, S>

  type RedeemRewardHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedeemRewardHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedeemRewardHistoryCountAggregateInputType | true
    }

  export interface RedeemRewardHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedeemRewardHistory'], meta: { name: 'RedeemRewardHistory' } }
    /**
     * Find zero or one RedeemRewardHistory that matches the filter.
     * @param {RedeemRewardHistoryFindUniqueArgs} args - Arguments to find a RedeemRewardHistory
     * @example
     * // Get one RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedeemRewardHistoryFindUniqueArgs>(args: SelectSubset<T, RedeemRewardHistoryFindUniqueArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RedeemRewardHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedeemRewardHistoryFindUniqueOrThrowArgs} args - Arguments to find a RedeemRewardHistory
     * @example
     * // Get one RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedeemRewardHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RedeemRewardHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedeemRewardHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryFindFirstArgs} args - Arguments to find a RedeemRewardHistory
     * @example
     * // Get one RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedeemRewardHistoryFindFirstArgs>(args?: SelectSubset<T, RedeemRewardHistoryFindFirstArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedeemRewardHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryFindFirstOrThrowArgs} args - Arguments to find a RedeemRewardHistory
     * @example
     * // Get one RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedeemRewardHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RedeemRewardHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RedeemRewardHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedeemRewardHistories
     * const redeemRewardHistories = await prisma.redeemRewardHistory.findMany()
     * 
     * // Get first 10 RedeemRewardHistories
     * const redeemRewardHistories = await prisma.redeemRewardHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redeemRewardHistoryWithIdOnly = await prisma.redeemRewardHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedeemRewardHistoryFindManyArgs>(args?: SelectSubset<T, RedeemRewardHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RedeemRewardHistory.
     * @param {RedeemRewardHistoryCreateArgs} args - Arguments to create a RedeemRewardHistory.
     * @example
     * // Create one RedeemRewardHistory
     * const RedeemRewardHistory = await prisma.redeemRewardHistory.create({
     *   data: {
     *     // ... data to create a RedeemRewardHistory
     *   }
     * })
     * 
     */
    create<T extends RedeemRewardHistoryCreateArgs>(args: SelectSubset<T, RedeemRewardHistoryCreateArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RedeemRewardHistories.
     * @param {RedeemRewardHistoryCreateManyArgs} args - Arguments to create many RedeemRewardHistories.
     * @example
     * // Create many RedeemRewardHistories
     * const redeemRewardHistory = await prisma.redeemRewardHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedeemRewardHistoryCreateManyArgs>(args?: SelectSubset<T, RedeemRewardHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedeemRewardHistories and returns the data saved in the database.
     * @param {RedeemRewardHistoryCreateManyAndReturnArgs} args - Arguments to create many RedeemRewardHistories.
     * @example
     * // Create many RedeemRewardHistories
     * const redeemRewardHistory = await prisma.redeemRewardHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedeemRewardHistories and only return the `id`
     * const redeemRewardHistoryWithIdOnly = await prisma.redeemRewardHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedeemRewardHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RedeemRewardHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RedeemRewardHistory.
     * @param {RedeemRewardHistoryDeleteArgs} args - Arguments to delete one RedeemRewardHistory.
     * @example
     * // Delete one RedeemRewardHistory
     * const RedeemRewardHistory = await prisma.redeemRewardHistory.delete({
     *   where: {
     *     // ... filter to delete one RedeemRewardHistory
     *   }
     * })
     * 
     */
    delete<T extends RedeemRewardHistoryDeleteArgs>(args: SelectSubset<T, RedeemRewardHistoryDeleteArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RedeemRewardHistory.
     * @param {RedeemRewardHistoryUpdateArgs} args - Arguments to update one RedeemRewardHistory.
     * @example
     * // Update one RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedeemRewardHistoryUpdateArgs>(args: SelectSubset<T, RedeemRewardHistoryUpdateArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RedeemRewardHistories.
     * @param {RedeemRewardHistoryDeleteManyArgs} args - Arguments to filter RedeemRewardHistories to delete.
     * @example
     * // Delete a few RedeemRewardHistories
     * const { count } = await prisma.redeemRewardHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedeemRewardHistoryDeleteManyArgs>(args?: SelectSubset<T, RedeemRewardHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedeemRewardHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedeemRewardHistories
     * const redeemRewardHistory = await prisma.redeemRewardHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedeemRewardHistoryUpdateManyArgs>(args: SelectSubset<T, RedeemRewardHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedeemRewardHistories and returns the data updated in the database.
     * @param {RedeemRewardHistoryUpdateManyAndReturnArgs} args - Arguments to update many RedeemRewardHistories.
     * @example
     * // Update many RedeemRewardHistories
     * const redeemRewardHistory = await prisma.redeemRewardHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RedeemRewardHistories and only return the `id`
     * const redeemRewardHistoryWithIdOnly = await prisma.redeemRewardHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RedeemRewardHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RedeemRewardHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RedeemRewardHistory.
     * @param {RedeemRewardHistoryUpsertArgs} args - Arguments to update or create a RedeemRewardHistory.
     * @example
     * // Update or create a RedeemRewardHistory
     * const redeemRewardHistory = await prisma.redeemRewardHistory.upsert({
     *   create: {
     *     // ... data to create a RedeemRewardHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedeemRewardHistory we want to update
     *   }
     * })
     */
    upsert<T extends RedeemRewardHistoryUpsertArgs>(args: SelectSubset<T, RedeemRewardHistoryUpsertArgs<ExtArgs>>): Prisma__RedeemRewardHistoryClient<$Result.GetResult<Prisma.$RedeemRewardHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RedeemRewardHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryCountArgs} args - Arguments to filter RedeemRewardHistories to count.
     * @example
     * // Count the number of RedeemRewardHistories
     * const count = await prisma.redeemRewardHistory.count({
     *   where: {
     *     // ... the filter for the RedeemRewardHistories we want to count
     *   }
     * })
    **/
    count<T extends RedeemRewardHistoryCountArgs>(
      args?: Subset<T, RedeemRewardHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedeemRewardHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedeemRewardHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedeemRewardHistoryAggregateArgs>(args: Subset<T, RedeemRewardHistoryAggregateArgs>): Prisma.PrismaPromise<GetRedeemRewardHistoryAggregateType<T>>

    /**
     * Group by RedeemRewardHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedeemRewardHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedeemRewardHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedeemRewardHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RedeemRewardHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedeemRewardHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedeemRewardHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedeemRewardHistory model
   */
  readonly fields: RedeemRewardHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedeemRewardHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedeemRewardHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RedeemRewardHistory model
   */
  interface RedeemRewardHistoryFieldRefs {
    readonly id: FieldRef<"RedeemRewardHistory", 'String'>
    readonly userId: FieldRef<"RedeemRewardHistory", 'String'>
    readonly rewardId: FieldRef<"RedeemRewardHistory", 'String'>
    readonly createdAt: FieldRef<"RedeemRewardHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RedeemRewardHistory findUnique
   */
  export type RedeemRewardHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RedeemRewardHistory to fetch.
     */
    where: RedeemRewardHistoryWhereUniqueInput
  }

  /**
   * RedeemRewardHistory findUniqueOrThrow
   */
  export type RedeemRewardHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RedeemRewardHistory to fetch.
     */
    where: RedeemRewardHistoryWhereUniqueInput
  }

  /**
   * RedeemRewardHistory findFirst
   */
  export type RedeemRewardHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RedeemRewardHistory to fetch.
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemRewardHistories to fetch.
     */
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeemRewardHistories.
     */
    cursor?: RedeemRewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemRewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemRewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeemRewardHistories.
     */
    distinct?: RedeemRewardHistoryScalarFieldEnum | RedeemRewardHistoryScalarFieldEnum[]
  }

  /**
   * RedeemRewardHistory findFirstOrThrow
   */
  export type RedeemRewardHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RedeemRewardHistory to fetch.
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemRewardHistories to fetch.
     */
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedeemRewardHistories.
     */
    cursor?: RedeemRewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemRewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemRewardHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedeemRewardHistories.
     */
    distinct?: RedeemRewardHistoryScalarFieldEnum | RedeemRewardHistoryScalarFieldEnum[]
  }

  /**
   * RedeemRewardHistory findMany
   */
  export type RedeemRewardHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RedeemRewardHistories to fetch.
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedeemRewardHistories to fetch.
     */
    orderBy?: RedeemRewardHistoryOrderByWithRelationInput | RedeemRewardHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedeemRewardHistories.
     */
    cursor?: RedeemRewardHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedeemRewardHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedeemRewardHistories.
     */
    skip?: number
    distinct?: RedeemRewardHistoryScalarFieldEnum | RedeemRewardHistoryScalarFieldEnum[]
  }

  /**
   * RedeemRewardHistory create
   */
  export type RedeemRewardHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RedeemRewardHistory.
     */
    data: XOR<RedeemRewardHistoryCreateInput, RedeemRewardHistoryUncheckedCreateInput>
  }

  /**
   * RedeemRewardHistory createMany
   */
  export type RedeemRewardHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedeemRewardHistories.
     */
    data: RedeemRewardHistoryCreateManyInput | RedeemRewardHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedeemRewardHistory createManyAndReturn
   */
  export type RedeemRewardHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RedeemRewardHistories.
     */
    data: RedeemRewardHistoryCreateManyInput | RedeemRewardHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RedeemRewardHistory update
   */
  export type RedeemRewardHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RedeemRewardHistory.
     */
    data: XOR<RedeemRewardHistoryUpdateInput, RedeemRewardHistoryUncheckedUpdateInput>
    /**
     * Choose, which RedeemRewardHistory to update.
     */
    where: RedeemRewardHistoryWhereUniqueInput
  }

  /**
   * RedeemRewardHistory updateMany
   */
  export type RedeemRewardHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedeemRewardHistories.
     */
    data: XOR<RedeemRewardHistoryUpdateManyMutationInput, RedeemRewardHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RedeemRewardHistories to update
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * Limit how many RedeemRewardHistories to update.
     */
    limit?: number
  }

  /**
   * RedeemRewardHistory updateManyAndReturn
   */
  export type RedeemRewardHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RedeemRewardHistories.
     */
    data: XOR<RedeemRewardHistoryUpdateManyMutationInput, RedeemRewardHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RedeemRewardHistories to update
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * Limit how many RedeemRewardHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RedeemRewardHistory upsert
   */
  export type RedeemRewardHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RedeemRewardHistory to update in case it exists.
     */
    where: RedeemRewardHistoryWhereUniqueInput
    /**
     * In case the RedeemRewardHistory found by the `where` argument doesn't exist, create a new RedeemRewardHistory with this data.
     */
    create: XOR<RedeemRewardHistoryCreateInput, RedeemRewardHistoryUncheckedCreateInput>
    /**
     * In case the RedeemRewardHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedeemRewardHistoryUpdateInput, RedeemRewardHistoryUncheckedUpdateInput>
  }

  /**
   * RedeemRewardHistory delete
   */
  export type RedeemRewardHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
    /**
     * Filter which RedeemRewardHistory to delete.
     */
    where: RedeemRewardHistoryWhereUniqueInput
  }

  /**
   * RedeemRewardHistory deleteMany
   */
  export type RedeemRewardHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedeemRewardHistories to delete
     */
    where?: RedeemRewardHistoryWhereInput
    /**
     * Limit how many RedeemRewardHistories to delete.
     */
    limit?: number
  }

  /**
   * RedeemRewardHistory without action
   */
  export type RedeemRewardHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedeemRewardHistory
     */
    select?: RedeemRewardHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedeemRewardHistory
     */
    omit?: RedeemRewardHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedeemRewardHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const RewardHistoryScalarFieldEnum: {
    id: 'id',
    rewardPoint: 'rewardPoint',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RewardHistoryScalarFieldEnum = (typeof RewardHistoryScalarFieldEnum)[keyof typeof RewardHistoryScalarFieldEnum]


  export const GameSpinScalarFieldEnum: {
    id: 'id',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameSpinScalarFieldEnum = (typeof GameSpinScalarFieldEnum)[keyof typeof GameSpinScalarFieldEnum]


  export const RedeemRewardHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rewardId: 'rewardId',
    createdAt: 'createdAt'
  };

  export type RedeemRewardHistoryScalarFieldEnum = (typeof RedeemRewardHistoryScalarFieldEnum)[keyof typeof RedeemRewardHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rewardHistories?: RewardHistoryListRelationFilter
    redeemRewardHistories?: RedeemRewardHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rewardHistories?: RewardHistoryOrderByRelationAggregateInput
    redeemRewardHistories?: RedeemRewardHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rewardHistories?: RewardHistoryListRelationFilter
    redeemRewardHistories?: RedeemRewardHistoryListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    point?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    name?: StringFilter<"Reward"> | string
    point?: IntFilter<"Reward"> | number
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    redeemRewardHistories?: RedeemRewardHistoryListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    redeemRewardHistories?: RedeemRewardHistoryOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    name?: StringFilter<"Reward"> | string
    point?: IntFilter<"Reward"> | number
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    updatedAt?: DateTimeFilter<"Reward"> | Date | string
    redeemRewardHistories?: RedeemRewardHistoryListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    name?: StringWithAggregatesFilter<"Reward"> | string
    point?: IntWithAggregatesFilter<"Reward"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
  }

  export type RewardHistoryWhereInput = {
    AND?: RewardHistoryWhereInput | RewardHistoryWhereInput[]
    OR?: RewardHistoryWhereInput[]
    NOT?: RewardHistoryWhereInput | RewardHistoryWhereInput[]
    id?: StringFilter<"RewardHistory"> | string
    rewardPoint?: StringFilter<"RewardHistory"> | string
    userId?: StringFilter<"RewardHistory"> | string
    createdAt?: DateTimeFilter<"RewardHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RewardHistoryOrderByWithRelationInput = {
    id?: SortOrder
    rewardPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RewardHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardHistoryWhereInput | RewardHistoryWhereInput[]
    OR?: RewardHistoryWhereInput[]
    NOT?: RewardHistoryWhereInput | RewardHistoryWhereInput[]
    rewardPoint?: StringFilter<"RewardHistory"> | string
    userId?: StringFilter<"RewardHistory"> | string
    createdAt?: DateTimeFilter<"RewardHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RewardHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    rewardPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RewardHistoryCountOrderByAggregateInput
    _max?: RewardHistoryMaxOrderByAggregateInput
    _min?: RewardHistoryMinOrderByAggregateInput
  }

  export type RewardHistoryScalarWhereWithAggregatesInput = {
    AND?: RewardHistoryScalarWhereWithAggregatesInput | RewardHistoryScalarWhereWithAggregatesInput[]
    OR?: RewardHistoryScalarWhereWithAggregatesInput[]
    NOT?: RewardHistoryScalarWhereWithAggregatesInput | RewardHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardHistory"> | string
    rewardPoint?: StringWithAggregatesFilter<"RewardHistory"> | string
    userId?: StringWithAggregatesFilter<"RewardHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RewardHistory"> | Date | string
  }

  export type GameSpinWhereInput = {
    AND?: GameSpinWhereInput | GameSpinWhereInput[]
    OR?: GameSpinWhereInput[]
    NOT?: GameSpinWhereInput | GameSpinWhereInput[]
    id?: StringFilter<"GameSpin"> | string
    point?: IntFilter<"GameSpin"> | number
    createdAt?: DateTimeFilter<"GameSpin"> | Date | string
    updatedAt?: DateTimeFilter<"GameSpin"> | Date | string
  }

  export type GameSpinOrderByWithRelationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSpinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameSpinWhereInput | GameSpinWhereInput[]
    OR?: GameSpinWhereInput[]
    NOT?: GameSpinWhereInput | GameSpinWhereInput[]
    point?: IntFilter<"GameSpin"> | number
    createdAt?: DateTimeFilter<"GameSpin"> | Date | string
    updatedAt?: DateTimeFilter<"GameSpin"> | Date | string
  }, "id">

  export type GameSpinOrderByWithAggregationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameSpinCountOrderByAggregateInput
    _avg?: GameSpinAvgOrderByAggregateInput
    _max?: GameSpinMaxOrderByAggregateInput
    _min?: GameSpinMinOrderByAggregateInput
    _sum?: GameSpinSumOrderByAggregateInput
  }

  export type GameSpinScalarWhereWithAggregatesInput = {
    AND?: GameSpinScalarWhereWithAggregatesInput | GameSpinScalarWhereWithAggregatesInput[]
    OR?: GameSpinScalarWhereWithAggregatesInput[]
    NOT?: GameSpinScalarWhereWithAggregatesInput | GameSpinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSpin"> | string
    point?: IntWithAggregatesFilter<"GameSpin"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameSpin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameSpin"> | Date | string
  }

  export type RedeemRewardHistoryWhereInput = {
    AND?: RedeemRewardHistoryWhereInput | RedeemRewardHistoryWhereInput[]
    OR?: RedeemRewardHistoryWhereInput[]
    NOT?: RedeemRewardHistoryWhereInput | RedeemRewardHistoryWhereInput[]
    id?: StringFilter<"RedeemRewardHistory"> | string
    userId?: StringFilter<"RedeemRewardHistory"> | string
    rewardId?: StringFilter<"RedeemRewardHistory"> | string
    createdAt?: DateTimeFilter<"RedeemRewardHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }

  export type RedeemRewardHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reward?: RewardOrderByWithRelationInput
  }

  export type RedeemRewardHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RedeemRewardHistoryWhereInput | RedeemRewardHistoryWhereInput[]
    OR?: RedeemRewardHistoryWhereInput[]
    NOT?: RedeemRewardHistoryWhereInput | RedeemRewardHistoryWhereInput[]
    userId?: StringFilter<"RedeemRewardHistory"> | string
    rewardId?: StringFilter<"RedeemRewardHistory"> | string
    createdAt?: DateTimeFilter<"RedeemRewardHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
  }, "id">

  export type RedeemRewardHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    createdAt?: SortOrder
    _count?: RedeemRewardHistoryCountOrderByAggregateInput
    _max?: RedeemRewardHistoryMaxOrderByAggregateInput
    _min?: RedeemRewardHistoryMinOrderByAggregateInput
  }

  export type RedeemRewardHistoryScalarWhereWithAggregatesInput = {
    AND?: RedeemRewardHistoryScalarWhereWithAggregatesInput | RedeemRewardHistoryScalarWhereWithAggregatesInput[]
    OR?: RedeemRewardHistoryScalarWhereWithAggregatesInput[]
    NOT?: RedeemRewardHistoryScalarWhereWithAggregatesInput | RedeemRewardHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RedeemRewardHistory"> | string
    userId?: StringWithAggregatesFilter<"RedeemRewardHistory"> | string
    rewardId?: StringWithAggregatesFilter<"RedeemRewardHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RedeemRewardHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardHistories?: RewardHistoryCreateNestedManyWithoutUserInput
    redeemRewardHistories?: RedeemRewardHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardHistories?: RewardHistoryUncheckedCreateNestedManyWithoutUserInput
    redeemRewardHistories?: RedeemRewardHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardHistories?: RewardHistoryUpdateManyWithoutUserNestedInput
    redeemRewardHistories?: RedeemRewardHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardHistories?: RewardHistoryUncheckedUpdateManyWithoutUserNestedInput
    redeemRewardHistories?: RedeemRewardHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardCreateInput = {
    id?: string
    name: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redeemRewardHistories?: RedeemRewardHistoryCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    name: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redeemRewardHistories?: RedeemRewardHistoryUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemRewardHistories?: RedeemRewardHistoryUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemRewardHistories?: RedeemRewardHistoryUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    name: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryCreateInput = {
    id?: string
    rewardPoint: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRewardHistoriesInput
  }

  export type RewardHistoryUncheckedCreateInput = {
    id?: string
    rewardPoint: string
    userId: string
    createdAt?: Date | string
  }

  export type RewardHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRewardHistoriesNestedInput
  }

  export type RewardHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryCreateManyInput = {
    id?: string
    rewardPoint: string
    userId: string
    createdAt?: Date | string
  }

  export type RewardHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSpinCreateInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSpinUncheckedCreateInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSpinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSpinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSpinCreateManyInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameSpinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameSpinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRedeemRewardHistoriesInput
    reward: RewardCreateNestedOneWithoutRedeemRewardHistoriesInput
  }

  export type RedeemRewardHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    rewardId: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput
    reward?: RewardUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput
  }

  export type RedeemRewardHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryCreateManyInput = {
    id?: string
    userId: string
    rewardId: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RewardHistoryListRelationFilter = {
    every?: RewardHistoryWhereInput
    some?: RewardHistoryWhereInput
    none?: RewardHistoryWhereInput
  }

  export type RedeemRewardHistoryListRelationFilter = {
    every?: RedeemRewardHistoryWhereInput
    some?: RedeemRewardHistoryWhereInput
    none?: RedeemRewardHistoryWhereInput
  }

  export type RewardHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RedeemRewardHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RewardHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    rewardPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    rewardPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    rewardPoint?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type GameSpinCountOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSpinAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type GameSpinMaxOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSpinMinOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSpinSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type RewardScalarRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type RedeemRewardHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedeemRewardHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedeemRewardHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput> | RewardHistoryCreateWithoutUserInput[] | RewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardHistoryCreateOrConnectWithoutUserInput | RewardHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RewardHistoryCreateManyUserInputEnvelope
    connect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
  }

  export type RedeemRewardHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput> | RedeemRewardHistoryCreateWithoutUserInput[] | RedeemRewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutUserInput | RedeemRewardHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RedeemRewardHistoryCreateManyUserInputEnvelope
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
  }

  export type RewardHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput> | RewardHistoryCreateWithoutUserInput[] | RewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardHistoryCreateOrConnectWithoutUserInput | RewardHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RewardHistoryCreateManyUserInputEnvelope
    connect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
  }

  export type RedeemRewardHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput> | RedeemRewardHistoryCreateWithoutUserInput[] | RedeemRewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutUserInput | RedeemRewardHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RedeemRewardHistoryCreateManyUserInputEnvelope
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RewardHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput> | RewardHistoryCreateWithoutUserInput[] | RewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardHistoryCreateOrConnectWithoutUserInput | RewardHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RewardHistoryUpsertWithWhereUniqueWithoutUserInput | RewardHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardHistoryCreateManyUserInputEnvelope
    set?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    disconnect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    delete?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    connect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    update?: RewardHistoryUpdateWithWhereUniqueWithoutUserInput | RewardHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardHistoryUpdateManyWithWhereWithoutUserInput | RewardHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardHistoryScalarWhereInput | RewardHistoryScalarWhereInput[]
  }

  export type RedeemRewardHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput> | RedeemRewardHistoryCreateWithoutUserInput[] | RedeemRewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutUserInput | RedeemRewardHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RedeemRewardHistoryUpsertWithWhereUniqueWithoutUserInput | RedeemRewardHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedeemRewardHistoryCreateManyUserInputEnvelope
    set?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    disconnect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    delete?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    update?: RedeemRewardHistoryUpdateWithWhereUniqueWithoutUserInput | RedeemRewardHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedeemRewardHistoryUpdateManyWithWhereWithoutUserInput | RedeemRewardHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
  }

  export type RewardHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput> | RewardHistoryCreateWithoutUserInput[] | RewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardHistoryCreateOrConnectWithoutUserInput | RewardHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RewardHistoryUpsertWithWhereUniqueWithoutUserInput | RewardHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardHistoryCreateManyUserInputEnvelope
    set?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    disconnect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    delete?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    connect?: RewardHistoryWhereUniqueInput | RewardHistoryWhereUniqueInput[]
    update?: RewardHistoryUpdateWithWhereUniqueWithoutUserInput | RewardHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardHistoryUpdateManyWithWhereWithoutUserInput | RewardHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardHistoryScalarWhereInput | RewardHistoryScalarWhereInput[]
  }

  export type RedeemRewardHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput> | RedeemRewardHistoryCreateWithoutUserInput[] | RedeemRewardHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutUserInput | RedeemRewardHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RedeemRewardHistoryUpsertWithWhereUniqueWithoutUserInput | RedeemRewardHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RedeemRewardHistoryCreateManyUserInputEnvelope
    set?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    disconnect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    delete?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    update?: RedeemRewardHistoryUpdateWithWhereUniqueWithoutUserInput | RedeemRewardHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RedeemRewardHistoryUpdateManyWithWhereWithoutUserInput | RedeemRewardHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
  }

  export type RedeemRewardHistoryCreateNestedManyWithoutRewardInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput> | RedeemRewardHistoryCreateWithoutRewardInput[] | RedeemRewardHistoryUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutRewardInput | RedeemRewardHistoryCreateOrConnectWithoutRewardInput[]
    createMany?: RedeemRewardHistoryCreateManyRewardInputEnvelope
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
  }

  export type RedeemRewardHistoryUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput> | RedeemRewardHistoryCreateWithoutRewardInput[] | RedeemRewardHistoryUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutRewardInput | RedeemRewardHistoryCreateOrConnectWithoutRewardInput[]
    createMany?: RedeemRewardHistoryCreateManyRewardInputEnvelope
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
  }

  export type RedeemRewardHistoryUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput> | RedeemRewardHistoryCreateWithoutRewardInput[] | RedeemRewardHistoryUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutRewardInput | RedeemRewardHistoryCreateOrConnectWithoutRewardInput[]
    upsert?: RedeemRewardHistoryUpsertWithWhereUniqueWithoutRewardInput | RedeemRewardHistoryUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RedeemRewardHistoryCreateManyRewardInputEnvelope
    set?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    disconnect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    delete?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    update?: RedeemRewardHistoryUpdateWithWhereUniqueWithoutRewardInput | RedeemRewardHistoryUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RedeemRewardHistoryUpdateManyWithWhereWithoutRewardInput | RedeemRewardHistoryUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
  }

  export type RedeemRewardHistoryUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput> | RedeemRewardHistoryCreateWithoutRewardInput[] | RedeemRewardHistoryUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RedeemRewardHistoryCreateOrConnectWithoutRewardInput | RedeemRewardHistoryCreateOrConnectWithoutRewardInput[]
    upsert?: RedeemRewardHistoryUpsertWithWhereUniqueWithoutRewardInput | RedeemRewardHistoryUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RedeemRewardHistoryCreateManyRewardInputEnvelope
    set?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    disconnect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    delete?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    connect?: RedeemRewardHistoryWhereUniqueInput | RedeemRewardHistoryWhereUniqueInput[]
    update?: RedeemRewardHistoryUpdateWithWhereUniqueWithoutRewardInput | RedeemRewardHistoryUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RedeemRewardHistoryUpdateManyWithWhereWithoutRewardInput | RedeemRewardHistoryUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRewardHistoriesInput = {
    create?: XOR<UserCreateWithoutRewardHistoriesInput, UserUncheckedCreateWithoutRewardHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRewardHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutRewardHistoriesInput, UserUncheckedCreateWithoutRewardHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardHistoriesInput
    upsert?: UserUpsertWithoutRewardHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardHistoriesInput, UserUpdateWithoutRewardHistoriesInput>, UserUncheckedUpdateWithoutRewardHistoriesInput>
  }

  export type UserCreateNestedOneWithoutRedeemRewardHistoriesInput = {
    create?: XOR<UserCreateWithoutRedeemRewardHistoriesInput, UserUncheckedCreateWithoutRedeemRewardHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedeemRewardHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type RewardCreateNestedOneWithoutRedeemRewardHistoriesInput = {
    create?: XOR<RewardCreateWithoutRedeemRewardHistoriesInput, RewardUncheckedCreateWithoutRedeemRewardHistoriesInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedeemRewardHistoriesInput
    connect?: RewardWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutRedeemRewardHistoriesInput, UserUncheckedCreateWithoutRedeemRewardHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRedeemRewardHistoriesInput
    upsert?: UserUpsertWithoutRedeemRewardHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRedeemRewardHistoriesInput, UserUpdateWithoutRedeemRewardHistoriesInput>, UserUncheckedUpdateWithoutRedeemRewardHistoriesInput>
  }

  export type RewardUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput = {
    create?: XOR<RewardCreateWithoutRedeemRewardHistoriesInput, RewardUncheckedCreateWithoutRedeemRewardHistoriesInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedeemRewardHistoriesInput
    upsert?: RewardUpsertWithoutRedeemRewardHistoriesInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutRedeemRewardHistoriesInput, RewardUpdateWithoutRedeemRewardHistoriesInput>, RewardUncheckedUpdateWithoutRedeemRewardHistoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RewardHistoryCreateWithoutUserInput = {
    id?: string
    rewardPoint: string
    createdAt?: Date | string
  }

  export type RewardHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    rewardPoint: string
    createdAt?: Date | string
  }

  export type RewardHistoryCreateOrConnectWithoutUserInput = {
    where: RewardHistoryWhereUniqueInput
    create: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput>
  }

  export type RewardHistoryCreateManyUserInputEnvelope = {
    data: RewardHistoryCreateManyUserInput | RewardHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RedeemRewardHistoryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    reward: RewardCreateNestedOneWithoutRedeemRewardHistoriesInput
  }

  export type RedeemRewardHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    rewardId: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryCreateOrConnectWithoutUserInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    create: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput>
  }

  export type RedeemRewardHistoryCreateManyUserInputEnvelope = {
    data: RedeemRewardHistoryCreateManyUserInput | RedeemRewardHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardHistoryWhereUniqueInput
    update: XOR<RewardHistoryUpdateWithoutUserInput, RewardHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<RewardHistoryCreateWithoutUserInput, RewardHistoryUncheckedCreateWithoutUserInput>
  }

  export type RewardHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardHistoryWhereUniqueInput
    data: XOR<RewardHistoryUpdateWithoutUserInput, RewardHistoryUncheckedUpdateWithoutUserInput>
  }

  export type RewardHistoryUpdateManyWithWhereWithoutUserInput = {
    where: RewardHistoryScalarWhereInput
    data: XOR<RewardHistoryUpdateManyMutationInput, RewardHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardHistoryScalarWhereInput = {
    AND?: RewardHistoryScalarWhereInput | RewardHistoryScalarWhereInput[]
    OR?: RewardHistoryScalarWhereInput[]
    NOT?: RewardHistoryScalarWhereInput | RewardHistoryScalarWhereInput[]
    id?: StringFilter<"RewardHistory"> | string
    rewardPoint?: StringFilter<"RewardHistory"> | string
    userId?: StringFilter<"RewardHistory"> | string
    createdAt?: DateTimeFilter<"RewardHistory"> | Date | string
  }

  export type RedeemRewardHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    update: XOR<RedeemRewardHistoryUpdateWithoutUserInput, RedeemRewardHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<RedeemRewardHistoryCreateWithoutUserInput, RedeemRewardHistoryUncheckedCreateWithoutUserInput>
  }

  export type RedeemRewardHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    data: XOR<RedeemRewardHistoryUpdateWithoutUserInput, RedeemRewardHistoryUncheckedUpdateWithoutUserInput>
  }

  export type RedeemRewardHistoryUpdateManyWithWhereWithoutUserInput = {
    where: RedeemRewardHistoryScalarWhereInput
    data: XOR<RedeemRewardHistoryUpdateManyMutationInput, RedeemRewardHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type RedeemRewardHistoryScalarWhereInput = {
    AND?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
    OR?: RedeemRewardHistoryScalarWhereInput[]
    NOT?: RedeemRewardHistoryScalarWhereInput | RedeemRewardHistoryScalarWhereInput[]
    id?: StringFilter<"RedeemRewardHistory"> | string
    userId?: StringFilter<"RedeemRewardHistory"> | string
    rewardId?: StringFilter<"RedeemRewardHistory"> | string
    createdAt?: DateTimeFilter<"RedeemRewardHistory"> | Date | string
  }

  export type RedeemRewardHistoryCreateWithoutRewardInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRedeemRewardHistoriesInput
  }

  export type RedeemRewardHistoryUncheckedCreateWithoutRewardInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryCreateOrConnectWithoutRewardInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    create: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput>
  }

  export type RedeemRewardHistoryCreateManyRewardInputEnvelope = {
    data: RedeemRewardHistoryCreateManyRewardInput | RedeemRewardHistoryCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type RedeemRewardHistoryUpsertWithWhereUniqueWithoutRewardInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    update: XOR<RedeemRewardHistoryUpdateWithoutRewardInput, RedeemRewardHistoryUncheckedUpdateWithoutRewardInput>
    create: XOR<RedeemRewardHistoryCreateWithoutRewardInput, RedeemRewardHistoryUncheckedCreateWithoutRewardInput>
  }

  export type RedeemRewardHistoryUpdateWithWhereUniqueWithoutRewardInput = {
    where: RedeemRewardHistoryWhereUniqueInput
    data: XOR<RedeemRewardHistoryUpdateWithoutRewardInput, RedeemRewardHistoryUncheckedUpdateWithoutRewardInput>
  }

  export type RedeemRewardHistoryUpdateManyWithWhereWithoutRewardInput = {
    where: RedeemRewardHistoryScalarWhereInput
    data: XOR<RedeemRewardHistoryUpdateManyMutationInput, RedeemRewardHistoryUncheckedUpdateManyWithoutRewardInput>
  }

  export type UserCreateWithoutRewardHistoriesInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redeemRewardHistories?: RedeemRewardHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardHistoriesInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    redeemRewardHistories?: RedeemRewardHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardHistoriesInput, UserUncheckedCreateWithoutRewardHistoriesInput>
  }

  export type UserUpsertWithoutRewardHistoriesInput = {
    update: XOR<UserUpdateWithoutRewardHistoriesInput, UserUncheckedUpdateWithoutRewardHistoriesInput>
    create: XOR<UserCreateWithoutRewardHistoriesInput, UserUncheckedCreateWithoutRewardHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardHistoriesInput, UserUncheckedUpdateWithoutRewardHistoriesInput>
  }

  export type UserUpdateWithoutRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemRewardHistories?: RedeemRewardHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemRewardHistories?: RedeemRewardHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRedeemRewardHistoriesInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardHistories?: RewardHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRedeemRewardHistoriesInput = {
    id?: string
    name: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rewardHistories?: RewardHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRedeemRewardHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRedeemRewardHistoriesInput, UserUncheckedCreateWithoutRedeemRewardHistoriesInput>
  }

  export type RewardCreateWithoutRedeemRewardHistoriesInput = {
    id?: string
    name: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardUncheckedCreateWithoutRedeemRewardHistoriesInput = {
    id?: string
    name: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardCreateOrConnectWithoutRedeemRewardHistoriesInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutRedeemRewardHistoriesInput, RewardUncheckedCreateWithoutRedeemRewardHistoriesInput>
  }

  export type UserUpsertWithoutRedeemRewardHistoriesInput = {
    update: XOR<UserUpdateWithoutRedeemRewardHistoriesInput, UserUncheckedUpdateWithoutRedeemRewardHistoriesInput>
    create: XOR<UserCreateWithoutRedeemRewardHistoriesInput, UserUncheckedCreateWithoutRedeemRewardHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRedeemRewardHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRedeemRewardHistoriesInput, UserUncheckedUpdateWithoutRedeemRewardHistoriesInput>
  }

  export type UserUpdateWithoutRedeemRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardHistories?: RewardHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRedeemRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rewardHistories?: RewardHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RewardUpsertWithoutRedeemRewardHistoriesInput = {
    update: XOR<RewardUpdateWithoutRedeemRewardHistoriesInput, RewardUncheckedUpdateWithoutRedeemRewardHistoriesInput>
    create: XOR<RewardCreateWithoutRedeemRewardHistoriesInput, RewardUncheckedCreateWithoutRedeemRewardHistoriesInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutRedeemRewardHistoriesInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutRedeemRewardHistoriesInput, RewardUncheckedUpdateWithoutRedeemRewardHistoriesInput>
  }

  export type RewardUpdateWithoutRedeemRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateWithoutRedeemRewardHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryCreateManyUserInput = {
    id?: string
    rewardPoint: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryCreateManyUserInput = {
    id?: string
    rewardId: string
    createdAt?: Date | string
  }

  export type RewardHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardPoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput
  }

  export type RedeemRewardHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryCreateManyRewardInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type RedeemRewardHistoryUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRedeemRewardHistoriesNestedInput
  }

  export type RedeemRewardHistoryUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedeemRewardHistoryUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}