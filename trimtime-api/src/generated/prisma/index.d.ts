
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model OtpCode
 * 
 */
export type OtpCode = $Result.DefaultSelection<Prisma.$OtpCodePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model Salon
 * 
 */
export type Salon = $Result.DefaultSelection<Prisma.$SalonPayload>
/**
 * Model SalonPhoto
 * 
 */
export type SalonPhoto = $Result.DefaultSelection<Prisma.$SalonPhotoPayload>
/**
 * Model OpeningHours
 * 
 */
export type OpeningHours = $Result.DefaultSelection<Prisma.$OpeningHoursPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Barber
 * 
 */
export type Barber = $Result.DefaultSelection<Prisma.$BarberPayload>
/**
 * Model BarberService
 * 
 */
export type BarberService = $Result.DefaultSelection<Prisma.$BarberServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model QueueEntry
 * 
 */
export type QueueEntry = $Result.DefaultSelection<Prisma.$QueueEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  customer: 'customer',
  salon_owner: 'salon_owner',
  staff: 'staff',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SubscriptionTier: {
  free: 'free',
  pro: 'pro',
  enterprise: 'enterprise'
};

export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier]


export const SalonStatus: {
  pending: 'pending',
  active: 'active',
  suspended: 'suspended'
};

export type SalonStatus = (typeof SalonStatus)[keyof typeof SalonStatus]


export const DayOfWeek: {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const BookingStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled',
  no_show: 'no_show'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const BookingType: {
  appointment: 'appointment',
  walk_in: 'walk_in',
  queue: 'queue'
};

export type BookingType = (typeof BookingType)[keyof typeof BookingType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SubscriptionTier = $Enums.SubscriptionTier

export const SubscriptionTier: typeof $Enums.SubscriptionTier

export type SalonStatus = $Enums.SalonStatus

export const SalonStatus: typeof $Enums.SalonStatus

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type BookingType = $Enums.BookingType

export const BookingType: typeof $Enums.BookingType

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.otpCode`: Exposes CRUD operations for the **OtpCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpCodes
    * const otpCodes = await prisma.otpCode.findMany()
    * ```
    */
  get otpCode(): Prisma.OtpCodeDelegate<ExtArgs>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs>;

  /**
   * `prisma.salon`: Exposes CRUD operations for the **Salon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salons
    * const salons = await prisma.salon.findMany()
    * ```
    */
  get salon(): Prisma.SalonDelegate<ExtArgs>;

  /**
   * `prisma.salonPhoto`: Exposes CRUD operations for the **SalonPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalonPhotos
    * const salonPhotos = await prisma.salonPhoto.findMany()
    * ```
    */
  get salonPhoto(): Prisma.SalonPhotoDelegate<ExtArgs>;

  /**
   * `prisma.openingHours`: Exposes CRUD operations for the **OpeningHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpeningHours
    * const openingHours = await prisma.openingHours.findMany()
    * ```
    */
  get openingHours(): Prisma.OpeningHoursDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.barber`: Exposes CRUD operations for the **Barber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbers
    * const barbers = await prisma.barber.findMany()
    * ```
    */
  get barber(): Prisma.BarberDelegate<ExtArgs>;

  /**
   * `prisma.barberService`: Exposes CRUD operations for the **BarberService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarberServices
    * const barberServices = await prisma.barberService.findMany()
    * ```
    */
  get barberService(): Prisma.BarberServiceDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.queueEntry`: Exposes CRUD operations for the **QueueEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueueEntries
    * const queueEntries = await prisma.queueEntry.findMany()
    * ```
    */
  get queueEntry(): Prisma.QueueEntryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    OtpCode: 'OtpCode',
    SubscriptionPlan: 'SubscriptionPlan',
    Salon: 'Salon',
    SalonPhoto: 'SalonPhoto',
    OpeningHours: 'OpeningHours',
    Service: 'Service',
    Barber: 'Barber',
    BarberService: 'BarberService',
    Booking: 'Booking',
    QueueEntry: 'QueueEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "otpCode" | "subscriptionPlan" | "salon" | "salonPhoto" | "openingHours" | "service" | "barber" | "barberService" | "booking" | "queueEntry"
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
      OtpCode: {
        payload: Prisma.$OtpCodePayload<ExtArgs>
        fields: Prisma.OtpCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findFirst: {
            args: Prisma.OtpCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          findMany: {
            args: Prisma.OtpCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          create: {
            args: Prisma.OtpCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          createMany: {
            args: Prisma.OtpCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>[]
          }
          delete: {
            args: Prisma.OtpCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          update: {
            args: Prisma.OtpCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          deleteMany: {
            args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpCodePayload>
          }
          aggregate: {
            args: Prisma.OtpCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpCode>
          }
          groupBy: {
            args: Prisma.OtpCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCodeCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCodeCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      Salon: {
        payload: Prisma.$SalonPayload<ExtArgs>
        fields: Prisma.SalonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findFirst: {
            args: Prisma.SalonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findMany: {
            args: Prisma.SalonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          create: {
            args: Prisma.SalonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          createMany: {
            args: Prisma.SalonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          delete: {
            args: Prisma.SalonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          update: {
            args: Prisma.SalonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          deleteMany: {
            args: Prisma.SalonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          aggregate: {
            args: Prisma.SalonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalon>
          }
          groupBy: {
            args: Prisma.SalonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonCountArgs<ExtArgs>
            result: $Utils.Optional<SalonCountAggregateOutputType> | number
          }
        }
      }
      SalonPhoto: {
        payload: Prisma.$SalonPhotoPayload<ExtArgs>
        fields: Prisma.SalonPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          findFirst: {
            args: Prisma.SalonPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          findMany: {
            args: Prisma.SalonPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>[]
          }
          create: {
            args: Prisma.SalonPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          createMany: {
            args: Prisma.SalonPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>[]
          }
          delete: {
            args: Prisma.SalonPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          update: {
            args: Prisma.SalonPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          deleteMany: {
            args: Prisma.SalonPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalonPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPhotoPayload>
          }
          aggregate: {
            args: Prisma.SalonPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalonPhoto>
          }
          groupBy: {
            args: Prisma.SalonPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<SalonPhotoCountAggregateOutputType> | number
          }
        }
      }
      OpeningHours: {
        payload: Prisma.$OpeningHoursPayload<ExtArgs>
        fields: Prisma.OpeningHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpeningHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpeningHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          findFirst: {
            args: Prisma.OpeningHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpeningHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          findMany: {
            args: Prisma.OpeningHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>[]
          }
          create: {
            args: Prisma.OpeningHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          createMany: {
            args: Prisma.OpeningHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpeningHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>[]
          }
          delete: {
            args: Prisma.OpeningHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          update: {
            args: Prisma.OpeningHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          deleteMany: {
            args: Prisma.OpeningHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpeningHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OpeningHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpeningHoursPayload>
          }
          aggregate: {
            args: Prisma.OpeningHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpeningHours>
          }
          groupBy: {
            args: Prisma.OpeningHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpeningHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpeningHoursCountArgs<ExtArgs>
            result: $Utils.Optional<OpeningHoursCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Barber: {
        payload: Prisma.$BarberPayload<ExtArgs>
        fields: Prisma.BarberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          findFirst: {
            args: Prisma.BarberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          findMany: {
            args: Prisma.BarberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>[]
          }
          create: {
            args: Prisma.BarberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          createMany: {
            args: Prisma.BarberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>[]
          }
          delete: {
            args: Prisma.BarberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          update: {
            args: Prisma.BarberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          deleteMany: {
            args: Prisma.BarberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          aggregate: {
            args: Prisma.BarberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarber>
          }
          groupBy: {
            args: Prisma.BarberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberCountArgs<ExtArgs>
            result: $Utils.Optional<BarberCountAggregateOutputType> | number
          }
        }
      }
      BarberService: {
        payload: Prisma.$BarberServicePayload<ExtArgs>
        fields: Prisma.BarberServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          findFirst: {
            args: Prisma.BarberServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          findMany: {
            args: Prisma.BarberServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>[]
          }
          create: {
            args: Prisma.BarberServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          createMany: {
            args: Prisma.BarberServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarberServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>[]
          }
          delete: {
            args: Prisma.BarberServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          update: {
            args: Prisma.BarberServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          deleteMany: {
            args: Prisma.BarberServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarberServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberServicePayload>
          }
          aggregate: {
            args: Prisma.BarberServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarberService>
          }
          groupBy: {
            args: Prisma.BarberServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BarberServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      QueueEntry: {
        payload: Prisma.$QueueEntryPayload<ExtArgs>
        fields: Prisma.QueueEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          findFirst: {
            args: Prisma.QueueEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          findMany: {
            args: Prisma.QueueEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>[]
          }
          create: {
            args: Prisma.QueueEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          createMany: {
            args: Prisma.QueueEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueueEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>[]
          }
          delete: {
            args: Prisma.QueueEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          update: {
            args: Prisma.QueueEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          deleteMany: {
            args: Prisma.QueueEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueueEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueEntryPayload>
          }
          aggregate: {
            args: Prisma.QueueEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueueEntry>
          }
          groupBy: {
            args: Prisma.QueueEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueueEntryCountArgs<ExtArgs>
            result: $Utils.Optional<QueueEntryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    ownedSalons: number
    barbers: number
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedSalons?: boolean | UserCountOutputTypeCountOwnedSalonsArgs
    barbers?: boolean | UserCountOutputTypeCountBarbersArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountOwnedSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBarbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    salons: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | SubscriptionPlanCountOutputTypeCountSalonsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
  }


  /**
   * Count Type SalonCountOutputType
   */

  export type SalonCountOutputType = {
    photos: number
    openingHours: number
    services: number
    barbers: number
    bookings: number
    queueEntries: number
  }

  export type SalonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | SalonCountOutputTypeCountPhotosArgs
    openingHours?: boolean | SalonCountOutputTypeCountOpeningHoursArgs
    services?: boolean | SalonCountOutputTypeCountServicesArgs
    barbers?: boolean | SalonCountOutputTypeCountBarbersArgs
    bookings?: boolean | SalonCountOutputTypeCountBookingsArgs
    queueEntries?: boolean | SalonCountOutputTypeCountQueueEntriesArgs
  }

  // Custom InputTypes
  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonCountOutputType
     */
    select?: SalonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonPhotoWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountOpeningHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpeningHoursWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountBarbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountQueueEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueEntryWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    barberServices: number
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberServices?: boolean | ServiceCountOutputTypeCountBarberServicesArgs
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBarberServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberServiceWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BarberCountOutputType
   */

  export type BarberCountOutputType = {
    barberServices: number
    bookings: number
  }

  export type BarberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barberServices?: boolean | BarberCountOutputTypeCountBarberServicesArgs
    bookings?: boolean | BarberCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberCountOutputType
     */
    select?: BarberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeCountBarberServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberServiceWhereInput
  }

  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    name: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedSalons?: boolean | User$ownedSalonsArgs<ExtArgs>
    barbers?: boolean | User$barbersArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedSalons?: boolean | User$ownedSalonsArgs<ExtArgs>
    barbers?: boolean | User$barbersArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedSalons: Prisma.$SalonPayload<ExtArgs>[]
      barbers: Prisma.$BarberPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      name: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedSalons<T extends User$ownedSalonsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedSalonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany"> | Null>
    barbers<T extends User$barbersArgs<ExtArgs> = {}>(args?: Subset<T, User$barbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
  }

  /**
   * User.ownedSalons
   */
  export type User$ownedSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    cursor?: SalonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * User.barbers
   */
  export type User$barbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    where?: BarberWhereInput
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    cursor?: BarberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OtpCode
   */

  export type AggregateOtpCode = {
    _count: OtpCodeCountAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  export type OtpCodeMinAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpCodeMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpCodeCountAggregateOutputType = {
    id: number
    phone: number
    code: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type OtpCodeMinAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type OtpCodeMaxAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type OtpCodeCountAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type OtpCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCode to aggregate.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpCodes
    **/
    _count?: true | OtpCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpCodeMaxAggregateInputType
  }

  export type GetOtpCodeAggregateType<T extends OtpCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpCode[P]>
      : GetScalarType<T[P], AggregateOtpCode[P]>
  }




  export type OtpCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpCodeWhereInput
    orderBy?: OtpCodeOrderByWithAggregationInput | OtpCodeOrderByWithAggregationInput[]
    by: OtpCodeScalarFieldEnum[] | OtpCodeScalarFieldEnum
    having?: OtpCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCodeCountAggregateInputType | true
    _min?: OtpCodeMinAggregateInputType
    _max?: OtpCodeMaxAggregateInputType
  }

  export type OtpCodeGroupByOutputType = {
    id: string
    phone: string
    code: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: OtpCodeCountAggregateOutputType | null
    _min: OtpCodeMinAggregateOutputType | null
    _max: OtpCodeMaxAggregateOutputType | null
  }

  type GetOtpCodeGroupByPayload<T extends OtpCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
            : GetScalarType<T[P], OtpCodeGroupByOutputType[P]>
        }
      >
    >


  export type OtpCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpCode"]>

  export type OtpCodeSelectScalar = {
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }


  export type $OtpCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      code: string
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpCode"]>
    composites: {}
  }

  type OtpCodeGetPayload<S extends boolean | null | undefined | OtpCodeDefaultArgs> = $Result.GetResult<Prisma.$OtpCodePayload, S>

  type OtpCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpCodeCountAggregateInputType | true
    }

  export interface OtpCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpCode'], meta: { name: 'OtpCode' } }
    /**
     * Find zero or one OtpCode that matches the filter.
     * @param {OtpCodeFindUniqueArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpCodeFindUniqueArgs>(args: SelectSubset<T, OtpCodeFindUniqueArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtpCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtpCodeFindUniqueOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtpCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpCodeFindFirstArgs>(args?: SelectSubset<T, OtpCodeFindFirstArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtpCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindFirstOrThrowArgs} args - Arguments to find a OtpCode
     * @example
     * // Get one OtpCode
     * const otpCode = await prisma.otpCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtpCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpCodes
     * const otpCodes = await prisma.otpCode.findMany()
     * 
     * // Get first 10 OtpCodes
     * const otpCodes = await prisma.otpCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpCodeFindManyArgs>(args?: SelectSubset<T, OtpCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtpCode.
     * @param {OtpCodeCreateArgs} args - Arguments to create a OtpCode.
     * @example
     * // Create one OtpCode
     * const OtpCode = await prisma.otpCode.create({
     *   data: {
     *     // ... data to create a OtpCode
     *   }
     * })
     * 
     */
    create<T extends OtpCodeCreateArgs>(args: SelectSubset<T, OtpCodeCreateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtpCodes.
     * @param {OtpCodeCreateManyArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCodeCreateManyArgs>(args?: SelectSubset<T, OtpCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpCodes and returns the data saved in the database.
     * @param {OtpCodeCreateManyAndReturnArgs} args - Arguments to create many OtpCodes.
     * @example
     * // Create many OtpCodes
     * const otpCode = await prisma.otpCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpCodes and only return the `id`
     * const otpCodeWithIdOnly = await prisma.otpCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtpCode.
     * @param {OtpCodeDeleteArgs} args - Arguments to delete one OtpCode.
     * @example
     * // Delete one OtpCode
     * const OtpCode = await prisma.otpCode.delete({
     *   where: {
     *     // ... filter to delete one OtpCode
     *   }
     * })
     * 
     */
    delete<T extends OtpCodeDeleteArgs>(args: SelectSubset<T, OtpCodeDeleteArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtpCode.
     * @param {OtpCodeUpdateArgs} args - Arguments to update one OtpCode.
     * @example
     * // Update one OtpCode
     * const otpCode = await prisma.otpCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpCodeUpdateArgs>(args: SelectSubset<T, OtpCodeUpdateArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtpCodes.
     * @param {OtpCodeDeleteManyArgs} args - Arguments to filter OtpCodes to delete.
     * @example
     * // Delete a few OtpCodes
     * const { count } = await prisma.otpCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpCodeDeleteManyArgs>(args?: SelectSubset<T, OtpCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpCodes
     * const otpCode = await prisma.otpCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpCodeUpdateManyArgs>(args: SelectSubset<T, OtpCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtpCode.
     * @param {OtpCodeUpsertArgs} args - Arguments to update or create a OtpCode.
     * @example
     * // Update or create a OtpCode
     * const otpCode = await prisma.otpCode.upsert({
     *   create: {
     *     // ... data to create a OtpCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpCode we want to update
     *   }
     * })
     */
    upsert<T extends OtpCodeUpsertArgs>(args: SelectSubset<T, OtpCodeUpsertArgs<ExtArgs>>): Prisma__OtpCodeClient<$Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtpCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeCountArgs} args - Arguments to filter OtpCodes to count.
     * @example
     * // Count the number of OtpCodes
     * const count = await prisma.otpCode.count({
     *   where: {
     *     // ... the filter for the OtpCodes we want to count
     *   }
     * })
    **/
    count<T extends OtpCodeCountArgs>(
      args?: Subset<T, OtpCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpCodeAggregateArgs>(args: Subset<T, OtpCodeAggregateArgs>): Prisma.PrismaPromise<GetOtpCodeAggregateType<T>>

    /**
     * Group by OtpCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCodeGroupByArgs} args - Group by arguments.
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
      T extends OtpCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpCodeGroupByArgs['orderBy'] }
        : { orderBy?: OtpCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpCode model
   */
  readonly fields: OtpCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OtpCode model
   */ 
  interface OtpCodeFieldRefs {
    readonly id: FieldRef<"OtpCode", 'String'>
    readonly phone: FieldRef<"OtpCode", 'String'>
    readonly code: FieldRef<"OtpCode", 'String'>
    readonly expiresAt: FieldRef<"OtpCode", 'DateTime'>
    readonly used: FieldRef<"OtpCode", 'Boolean'>
    readonly createdAt: FieldRef<"OtpCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpCode findUnique
   */
  export type OtpCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findUniqueOrThrow
   */
  export type OtpCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode findFirst
   */
  export type OtpCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findFirstOrThrow
   */
  export type OtpCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter, which OtpCode to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpCodes.
     */
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode findMany
   */
  export type OtpCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter, which OtpCodes to fetch.
     */
    where?: OtpCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpCodes to fetch.
     */
    orderBy?: OtpCodeOrderByWithRelationInput | OtpCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpCodes.
     */
    cursor?: OtpCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpCodes.
     */
    skip?: number
    distinct?: OtpCodeScalarFieldEnum | OtpCodeScalarFieldEnum[]
  }

  /**
   * OtpCode create
   */
  export type OtpCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a OtpCode.
     */
    data: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
  }

  /**
   * OtpCode createMany
   */
  export type OtpCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpCode createManyAndReturn
   */
  export type OtpCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtpCodes.
     */
    data: OtpCodeCreateManyInput | OtpCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpCode update
   */
  export type OtpCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a OtpCode.
     */
    data: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
    /**
     * Choose, which OtpCode to update.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode updateMany
   */
  export type OtpCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpCodes.
     */
    data: XOR<OtpCodeUpdateManyMutationInput, OtpCodeUncheckedUpdateManyInput>
    /**
     * Filter which OtpCodes to update
     */
    where?: OtpCodeWhereInput
  }

  /**
   * OtpCode upsert
   */
  export type OtpCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the OtpCode to update in case it exists.
     */
    where: OtpCodeWhereUniqueInput
    /**
     * In case the OtpCode found by the `where` argument doesn't exist, create a new OtpCode with this data.
     */
    create: XOR<OtpCodeCreateInput, OtpCodeUncheckedCreateInput>
    /**
     * In case the OtpCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpCodeUpdateInput, OtpCodeUncheckedUpdateInput>
  }

  /**
   * OtpCode delete
   */
  export type OtpCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
    /**
     * Filter which OtpCode to delete.
     */
    where: OtpCodeWhereUniqueInput
  }

  /**
   * OtpCode deleteMany
   */
  export type OtpCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpCodes to delete
     */
    where?: OtpCodeWhereInput
  }

  /**
   * OtpCode without action
   */
  export type OtpCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpCode
     */
    select?: OtpCodeSelect<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    priceMonthly: Decimal | null
    maxBarbers: number | null
    maxBookings: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    priceMonthly: Decimal | null
    maxBarbers: number | null
    maxBookings: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: $Enums.SubscriptionTier | null
    priceMonthly: Decimal | null
    maxBarbers: number | null
    maxBookings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: $Enums.SubscriptionTier | null
    priceMonthly: Decimal | null
    maxBarbers: number | null
    maxBookings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    priceMonthly: number
    maxBarbers: number
    maxBookings: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    priceMonthly?: true
    maxBarbers?: true
    maxBookings?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    priceMonthly?: true
    maxBarbers?: true
    maxBookings?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    priceMonthly?: true
    maxBarbers?: true
    maxBookings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    priceMonthly?: true
    maxBarbers?: true
    maxBookings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    priceMonthly?: true
    maxBarbers?: true
    maxBookings?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: $Enums.SubscriptionTier
    priceMonthly: Decimal | null
    maxBarbers: number | null
    maxBookings: number | null
    features: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceMonthly?: boolean
    maxBarbers?: boolean
    maxBookings?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salons?: boolean | SubscriptionPlan$salonsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceMonthly?: boolean
    maxBarbers?: boolean
    maxBookings?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    priceMonthly?: boolean
    maxBarbers?: boolean
    maxBookings?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | SubscriptionPlan$salonsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      salons: Prisma.$SalonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.SubscriptionTier
      priceMonthly: Prisma.Decimal | null
      maxBarbers: number | null
      maxBookings: number | null
      features: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salons<T extends SubscriptionPlan$salonsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$salonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SubscriptionPlan model
   */ 
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'SubscriptionTier'>
    readonly priceMonthly: FieldRef<"SubscriptionPlan", 'Decimal'>
    readonly maxBarbers: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxBookings: FieldRef<"SubscriptionPlan", 'Int'>
    readonly features: FieldRef<"SubscriptionPlan", 'Json'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
  }

  /**
   * SubscriptionPlan.salons
   */
  export type SubscriptionPlan$salonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    cursor?: SalonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Salon
   */

  export type AggregateSalon = {
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  export type SalonAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type SalonSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type SalonMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    planId: string | null
    slug: string | null
    name: string | null
    phone: string | null
    address: string | null
    mapsUrl: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    coverImage: string | null
    logoImage: string | null
    status: $Enums.SalonStatus | null
    subscription: $Enums.SubscriptionTier | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalonMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    planId: string | null
    slug: string | null
    name: string | null
    phone: string | null
    address: string | null
    mapsUrl: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    coverImage: string | null
    logoImage: string | null
    status: $Enums.SalonStatus | null
    subscription: $Enums.SubscriptionTier | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalonCountAggregateOutputType = {
    id: number
    ownerId: number
    planId: number
    slug: number
    name: number
    phone: number
    address: number
    mapsUrl: number
    latitude: number
    longitude: number
    coverImage: number
    logoImage: number
    status: number
    subscription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalonAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SalonSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SalonMinAggregateInputType = {
    id?: true
    ownerId?: true
    planId?: true
    slug?: true
    name?: true
    phone?: true
    address?: true
    mapsUrl?: true
    latitude?: true
    longitude?: true
    coverImage?: true
    logoImage?: true
    status?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalonMaxAggregateInputType = {
    id?: true
    ownerId?: true
    planId?: true
    slug?: true
    name?: true
    phone?: true
    address?: true
    mapsUrl?: true
    latitude?: true
    longitude?: true
    coverImage?: true
    logoImage?: true
    status?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalonCountAggregateInputType = {
    id?: true
    ownerId?: true
    planId?: true
    slug?: true
    name?: true
    phone?: true
    address?: true
    mapsUrl?: true
    latitude?: true
    longitude?: true
    coverImage?: true
    logoImage?: true
    status?: true
    subscription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salon to aggregate.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salons
    **/
    _count?: true | SalonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonMaxAggregateInputType
  }

  export type GetSalonAggregateType<T extends SalonAggregateArgs> = {
        [P in keyof T & keyof AggregateSalon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalon[P]>
      : GetScalarType<T[P], AggregateSalon[P]>
  }




  export type SalonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithAggregationInput | SalonOrderByWithAggregationInput[]
    by: SalonScalarFieldEnum[] | SalonScalarFieldEnum
    having?: SalonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonCountAggregateInputType | true
    _avg?: SalonAvgAggregateInputType
    _sum?: SalonSumAggregateInputType
    _min?: SalonMinAggregateInputType
    _max?: SalonMaxAggregateInputType
  }

  export type SalonGroupByOutputType = {
    id: string
    ownerId: string | null
    planId: string | null
    slug: string
    name: string
    phone: string | null
    address: string | null
    mapsUrl: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    coverImage: string | null
    logoImage: string | null
    status: $Enums.SalonStatus
    subscription: $Enums.SubscriptionTier
    createdAt: Date
    updatedAt: Date
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  type GetSalonGroupByPayload<T extends SalonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonGroupByOutputType[P]>
            : GetScalarType<T[P], SalonGroupByOutputType[P]>
        }
      >
    >


  export type SalonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    planId?: boolean
    slug?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    mapsUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    coverImage?: boolean
    logoImage?: boolean
    status?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Salon$ownerArgs<ExtArgs>
    plan?: boolean | Salon$planArgs<ExtArgs>
    photos?: boolean | Salon$photosArgs<ExtArgs>
    openingHours?: boolean | Salon$openingHoursArgs<ExtArgs>
    services?: boolean | Salon$servicesArgs<ExtArgs>
    barbers?: boolean | Salon$barbersArgs<ExtArgs>
    bookings?: boolean | Salon$bookingsArgs<ExtArgs>
    queueEntries?: boolean | Salon$queueEntriesArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    planId?: boolean
    slug?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    mapsUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    coverImage?: boolean
    logoImage?: boolean
    status?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Salon$ownerArgs<ExtArgs>
    plan?: boolean | Salon$planArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectScalar = {
    id?: boolean
    ownerId?: boolean
    planId?: boolean
    slug?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    mapsUrl?: boolean
    latitude?: boolean
    longitude?: boolean
    coverImage?: boolean
    logoImage?: boolean
    status?: boolean
    subscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Salon$ownerArgs<ExtArgs>
    plan?: boolean | Salon$planArgs<ExtArgs>
    photos?: boolean | Salon$photosArgs<ExtArgs>
    openingHours?: boolean | Salon$openingHoursArgs<ExtArgs>
    services?: boolean | Salon$servicesArgs<ExtArgs>
    barbers?: boolean | Salon$barbersArgs<ExtArgs>
    bookings?: boolean | Salon$bookingsArgs<ExtArgs>
    queueEntries?: boolean | Salon$queueEntriesArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Salon$ownerArgs<ExtArgs>
    plan?: boolean | Salon$planArgs<ExtArgs>
  }

  export type $SalonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salon"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs> | null
      photos: Prisma.$SalonPhotoPayload<ExtArgs>[]
      openingHours: Prisma.$OpeningHoursPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      barbers: Prisma.$BarberPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      queueEntries: Prisma.$QueueEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string | null
      planId: string | null
      slug: string
      name: string
      phone: string | null
      address: string | null
      mapsUrl: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      coverImage: string | null
      logoImage: string | null
      status: $Enums.SalonStatus
      subscription: $Enums.SubscriptionTier
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salon"]>
    composites: {}
  }

  type SalonGetPayload<S extends boolean | null | undefined | SalonDefaultArgs> = $Result.GetResult<Prisma.$SalonPayload, S>

  type SalonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalonCountAggregateInputType | true
    }

  export interface SalonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salon'], meta: { name: 'Salon' } }
    /**
     * Find zero or one Salon that matches the filter.
     * @param {SalonFindUniqueArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonFindUniqueArgs>(args: SelectSubset<T, SalonFindUniqueArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Salon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalonFindUniqueOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Salon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonFindFirstArgs>(args?: SelectSubset<T, SalonFindFirstArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Salon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Salons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salons
     * const salons = await prisma.salon.findMany()
     * 
     * // Get first 10 Salons
     * const salons = await prisma.salon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonWithIdOnly = await prisma.salon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonFindManyArgs>(args?: SelectSubset<T, SalonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Salon.
     * @param {SalonCreateArgs} args - Arguments to create a Salon.
     * @example
     * // Create one Salon
     * const Salon = await prisma.salon.create({
     *   data: {
     *     // ... data to create a Salon
     *   }
     * })
     * 
     */
    create<T extends SalonCreateArgs>(args: SelectSubset<T, SalonCreateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Salons.
     * @param {SalonCreateManyArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonCreateManyArgs>(args?: SelectSubset<T, SalonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salons and returns the data saved in the database.
     * @param {SalonCreateManyAndReturnArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salons and only return the `id`
     * const salonWithIdOnly = await prisma.salon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Salon.
     * @param {SalonDeleteArgs} args - Arguments to delete one Salon.
     * @example
     * // Delete one Salon
     * const Salon = await prisma.salon.delete({
     *   where: {
     *     // ... filter to delete one Salon
     *   }
     * })
     * 
     */
    delete<T extends SalonDeleteArgs>(args: SelectSubset<T, SalonDeleteArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Salon.
     * @param {SalonUpdateArgs} args - Arguments to update one Salon.
     * @example
     * // Update one Salon
     * const salon = await prisma.salon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonUpdateArgs>(args: SelectSubset<T, SalonUpdateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Salons.
     * @param {SalonDeleteManyArgs} args - Arguments to filter Salons to delete.
     * @example
     * // Delete a few Salons
     * const { count } = await prisma.salon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonDeleteManyArgs>(args?: SelectSubset<T, SalonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salons
     * const salon = await prisma.salon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonUpdateManyArgs>(args: SelectSubset<T, SalonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Salon.
     * @param {SalonUpsertArgs} args - Arguments to update or create a Salon.
     * @example
     * // Update or create a Salon
     * const salon = await prisma.salon.upsert({
     *   create: {
     *     // ... data to create a Salon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salon we want to update
     *   }
     * })
     */
    upsert<T extends SalonUpsertArgs>(args: SelectSubset<T, SalonUpsertArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonCountArgs} args - Arguments to filter Salons to count.
     * @example
     * // Count the number of Salons
     * const count = await prisma.salon.count({
     *   where: {
     *     // ... the filter for the Salons we want to count
     *   }
     * })
    **/
    count<T extends SalonCountArgs>(
      args?: Subset<T, SalonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalonAggregateArgs>(args: Subset<T, SalonAggregateArgs>): Prisma.PrismaPromise<GetSalonAggregateType<T>>

    /**
     * Group by Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonGroupByArgs} args - Group by arguments.
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
      T extends SalonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonGroupByArgs['orderBy'] }
        : { orderBy?: SalonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salon model
   */
  readonly fields: SalonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Salon$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Salon$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    plan<T extends Salon$planArgs<ExtArgs> = {}>(args?: Subset<T, Salon$planArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    photos<T extends Salon$photosArgs<ExtArgs> = {}>(args?: Subset<T, Salon$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findMany"> | Null>
    openingHours<T extends Salon$openingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Salon$openingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findMany"> | Null>
    services<T extends Salon$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Salon$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    barbers<T extends Salon$barbersArgs<ExtArgs> = {}>(args?: Subset<T, Salon$barbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Salon$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Salon$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    queueEntries<T extends Salon$queueEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Salon$queueEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Salon model
   */ 
  interface SalonFieldRefs {
    readonly id: FieldRef<"Salon", 'String'>
    readonly ownerId: FieldRef<"Salon", 'String'>
    readonly planId: FieldRef<"Salon", 'String'>
    readonly slug: FieldRef<"Salon", 'String'>
    readonly name: FieldRef<"Salon", 'String'>
    readonly phone: FieldRef<"Salon", 'String'>
    readonly address: FieldRef<"Salon", 'String'>
    readonly mapsUrl: FieldRef<"Salon", 'String'>
    readonly latitude: FieldRef<"Salon", 'Decimal'>
    readonly longitude: FieldRef<"Salon", 'Decimal'>
    readonly coverImage: FieldRef<"Salon", 'String'>
    readonly logoImage: FieldRef<"Salon", 'String'>
    readonly status: FieldRef<"Salon", 'SalonStatus'>
    readonly subscription: FieldRef<"Salon", 'SubscriptionTier'>
    readonly createdAt: FieldRef<"Salon", 'DateTime'>
    readonly updatedAt: FieldRef<"Salon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Salon findUnique
   */
  export type SalonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findUniqueOrThrow
   */
  export type SalonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findFirst
   */
  export type SalonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findFirstOrThrow
   */
  export type SalonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findMany
   */
  export type SalonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salons to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon create
   */
  export type SalonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to create a Salon.
     */
    data: XOR<SalonCreateInput, SalonUncheckedCreateInput>
  }

  /**
   * Salon createMany
   */
  export type SalonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salon createManyAndReturn
   */
  export type SalonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salon update
   */
  export type SalonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to update a Salon.
     */
    data: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
    /**
     * Choose, which Salon to update.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon updateMany
   */
  export type SalonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salons.
     */
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyInput>
    /**
     * Filter which Salons to update
     */
    where?: SalonWhereInput
  }

  /**
   * Salon upsert
   */
  export type SalonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The filter to search for the Salon to update in case it exists.
     */
    where: SalonWhereUniqueInput
    /**
     * In case the Salon found by the `where` argument doesn't exist, create a new Salon with this data.
     */
    create: XOR<SalonCreateInput, SalonUncheckedCreateInput>
    /**
     * In case the Salon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
  }

  /**
   * Salon delete
   */
  export type SalonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter which Salon to delete.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon deleteMany
   */
  export type SalonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salons to delete
     */
    where?: SalonWhereInput
  }

  /**
   * Salon.owner
   */
  export type Salon$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Salon.plan
   */
  export type Salon$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    where?: SubscriptionPlanWhereInput
  }

  /**
   * Salon.photos
   */
  export type Salon$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    where?: SalonPhotoWhereInput
    orderBy?: SalonPhotoOrderByWithRelationInput | SalonPhotoOrderByWithRelationInput[]
    cursor?: SalonPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonPhotoScalarFieldEnum | SalonPhotoScalarFieldEnum[]
  }

  /**
   * Salon.openingHours
   */
  export type Salon$openingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    where?: OpeningHoursWhereInput
    orderBy?: OpeningHoursOrderByWithRelationInput | OpeningHoursOrderByWithRelationInput[]
    cursor?: OpeningHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpeningHoursScalarFieldEnum | OpeningHoursScalarFieldEnum[]
  }

  /**
   * Salon.services
   */
  export type Salon$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Salon.barbers
   */
  export type Salon$barbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    where?: BarberWhereInput
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    cursor?: BarberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Salon.bookings
   */
  export type Salon$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Salon.queueEntries
   */
  export type Salon$queueEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    where?: QueueEntryWhereInput
    orderBy?: QueueEntryOrderByWithRelationInput | QueueEntryOrderByWithRelationInput[]
    cursor?: QueueEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueEntryScalarFieldEnum | QueueEntryScalarFieldEnum[]
  }

  /**
   * Salon without action
   */
  export type SalonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
  }


  /**
   * Model SalonPhoto
   */

  export type AggregateSalonPhoto = {
    _count: SalonPhotoCountAggregateOutputType | null
    _avg: SalonPhotoAvgAggregateOutputType | null
    _sum: SalonPhotoSumAggregateOutputType | null
    _min: SalonPhotoMinAggregateOutputType | null
    _max: SalonPhotoMaxAggregateOutputType | null
  }

  export type SalonPhotoAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type SalonPhotoSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type SalonPhotoMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type SalonPhotoMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    url: string | null
    altText: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type SalonPhotoCountAggregateOutputType = {
    id: number
    salonId: number
    url: number
    altText: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type SalonPhotoAvgAggregateInputType = {
    sortOrder?: true
  }

  export type SalonPhotoSumAggregateInputType = {
    sortOrder?: true
  }

  export type SalonPhotoMinAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    altText?: true
    sortOrder?: true
    createdAt?: true
  }

  export type SalonPhotoMaxAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    altText?: true
    sortOrder?: true
    createdAt?: true
  }

  export type SalonPhotoCountAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    altText?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type SalonPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonPhoto to aggregate.
     */
    where?: SalonPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonPhotos to fetch.
     */
    orderBy?: SalonPhotoOrderByWithRelationInput | SalonPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalonPhotos
    **/
    _count?: true | SalonPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonPhotoMaxAggregateInputType
  }

  export type GetSalonPhotoAggregateType<T extends SalonPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateSalonPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalonPhoto[P]>
      : GetScalarType<T[P], AggregateSalonPhoto[P]>
  }




  export type SalonPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonPhotoWhereInput
    orderBy?: SalonPhotoOrderByWithAggregationInput | SalonPhotoOrderByWithAggregationInput[]
    by: SalonPhotoScalarFieldEnum[] | SalonPhotoScalarFieldEnum
    having?: SalonPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonPhotoCountAggregateInputType | true
    _avg?: SalonPhotoAvgAggregateInputType
    _sum?: SalonPhotoSumAggregateInputType
    _min?: SalonPhotoMinAggregateInputType
    _max?: SalonPhotoMaxAggregateInputType
  }

  export type SalonPhotoGroupByOutputType = {
    id: string
    salonId: string
    url: string
    altText: string | null
    sortOrder: number
    createdAt: Date
    _count: SalonPhotoCountAggregateOutputType | null
    _avg: SalonPhotoAvgAggregateOutputType | null
    _sum: SalonPhotoSumAggregateOutputType | null
    _min: SalonPhotoMinAggregateOutputType | null
    _max: SalonPhotoMaxAggregateOutputType | null
  }

  type GetSalonPhotoGroupByPayload<T extends SalonPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], SalonPhotoGroupByOutputType[P]>
        }
      >
    >


  export type SalonPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonPhoto"]>

  export type SalonPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonPhoto"]>

  export type SalonPhotoSelectScalar = {
    id?: boolean
    salonId?: boolean
    url?: boolean
    altText?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type SalonPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type SalonPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $SalonPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalonPhoto"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      url: string
      altText: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["salonPhoto"]>
    composites: {}
  }

  type SalonPhotoGetPayload<S extends boolean | null | undefined | SalonPhotoDefaultArgs> = $Result.GetResult<Prisma.$SalonPhotoPayload, S>

  type SalonPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalonPhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalonPhotoCountAggregateInputType | true
    }

  export interface SalonPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalonPhoto'], meta: { name: 'SalonPhoto' } }
    /**
     * Find zero or one SalonPhoto that matches the filter.
     * @param {SalonPhotoFindUniqueArgs} args - Arguments to find a SalonPhoto
     * @example
     * // Get one SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonPhotoFindUniqueArgs>(args: SelectSubset<T, SalonPhotoFindUniqueArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalonPhoto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalonPhotoFindUniqueOrThrowArgs} args - Arguments to find a SalonPhoto
     * @example
     * // Get one SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalonPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoFindFirstArgs} args - Arguments to find a SalonPhoto
     * @example
     * // Get one SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonPhotoFindFirstArgs>(args?: SelectSubset<T, SalonPhotoFindFirstArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalonPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoFindFirstOrThrowArgs} args - Arguments to find a SalonPhoto
     * @example
     * // Get one SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalonPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalonPhotos
     * const salonPhotos = await prisma.salonPhoto.findMany()
     * 
     * // Get first 10 SalonPhotos
     * const salonPhotos = await prisma.salonPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonPhotoWithIdOnly = await prisma.salonPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonPhotoFindManyArgs>(args?: SelectSubset<T, SalonPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalonPhoto.
     * @param {SalonPhotoCreateArgs} args - Arguments to create a SalonPhoto.
     * @example
     * // Create one SalonPhoto
     * const SalonPhoto = await prisma.salonPhoto.create({
     *   data: {
     *     // ... data to create a SalonPhoto
     *   }
     * })
     * 
     */
    create<T extends SalonPhotoCreateArgs>(args: SelectSubset<T, SalonPhotoCreateArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalonPhotos.
     * @param {SalonPhotoCreateManyArgs} args - Arguments to create many SalonPhotos.
     * @example
     * // Create many SalonPhotos
     * const salonPhoto = await prisma.salonPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonPhotoCreateManyArgs>(args?: SelectSubset<T, SalonPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalonPhotos and returns the data saved in the database.
     * @param {SalonPhotoCreateManyAndReturnArgs} args - Arguments to create many SalonPhotos.
     * @example
     * // Create many SalonPhotos
     * const salonPhoto = await prisma.salonPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalonPhotos and only return the `id`
     * const salonPhotoWithIdOnly = await prisma.salonPhoto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalonPhoto.
     * @param {SalonPhotoDeleteArgs} args - Arguments to delete one SalonPhoto.
     * @example
     * // Delete one SalonPhoto
     * const SalonPhoto = await prisma.salonPhoto.delete({
     *   where: {
     *     // ... filter to delete one SalonPhoto
     *   }
     * })
     * 
     */
    delete<T extends SalonPhotoDeleteArgs>(args: SelectSubset<T, SalonPhotoDeleteArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalonPhoto.
     * @param {SalonPhotoUpdateArgs} args - Arguments to update one SalonPhoto.
     * @example
     * // Update one SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonPhotoUpdateArgs>(args: SelectSubset<T, SalonPhotoUpdateArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalonPhotos.
     * @param {SalonPhotoDeleteManyArgs} args - Arguments to filter SalonPhotos to delete.
     * @example
     * // Delete a few SalonPhotos
     * const { count } = await prisma.salonPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonPhotoDeleteManyArgs>(args?: SelectSubset<T, SalonPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalonPhotos
     * const salonPhoto = await prisma.salonPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonPhotoUpdateManyArgs>(args: SelectSubset<T, SalonPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalonPhoto.
     * @param {SalonPhotoUpsertArgs} args - Arguments to update or create a SalonPhoto.
     * @example
     * // Update or create a SalonPhoto
     * const salonPhoto = await prisma.salonPhoto.upsert({
     *   create: {
     *     // ... data to create a SalonPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalonPhoto we want to update
     *   }
     * })
     */
    upsert<T extends SalonPhotoUpsertArgs>(args: SelectSubset<T, SalonPhotoUpsertArgs<ExtArgs>>): Prisma__SalonPhotoClient<$Result.GetResult<Prisma.$SalonPhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalonPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoCountArgs} args - Arguments to filter SalonPhotos to count.
     * @example
     * // Count the number of SalonPhotos
     * const count = await prisma.salonPhoto.count({
     *   where: {
     *     // ... the filter for the SalonPhotos we want to count
     *   }
     * })
    **/
    count<T extends SalonPhotoCountArgs>(
      args?: Subset<T, SalonPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalonPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalonPhotoAggregateArgs>(args: Subset<T, SalonPhotoAggregateArgs>): Prisma.PrismaPromise<GetSalonPhotoAggregateType<T>>

    /**
     * Group by SalonPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonPhotoGroupByArgs} args - Group by arguments.
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
      T extends SalonPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonPhotoGroupByArgs['orderBy'] }
        : { orderBy?: SalonPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalonPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalonPhoto model
   */
  readonly fields: SalonPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalonPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SalonPhoto model
   */ 
  interface SalonPhotoFieldRefs {
    readonly id: FieldRef<"SalonPhoto", 'String'>
    readonly salonId: FieldRef<"SalonPhoto", 'String'>
    readonly url: FieldRef<"SalonPhoto", 'String'>
    readonly altText: FieldRef<"SalonPhoto", 'String'>
    readonly sortOrder: FieldRef<"SalonPhoto", 'Int'>
    readonly createdAt: FieldRef<"SalonPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalonPhoto findUnique
   */
  export type SalonPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter, which SalonPhoto to fetch.
     */
    where: SalonPhotoWhereUniqueInput
  }

  /**
   * SalonPhoto findUniqueOrThrow
   */
  export type SalonPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter, which SalonPhoto to fetch.
     */
    where: SalonPhotoWhereUniqueInput
  }

  /**
   * SalonPhoto findFirst
   */
  export type SalonPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter, which SalonPhoto to fetch.
     */
    where?: SalonPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonPhotos to fetch.
     */
    orderBy?: SalonPhotoOrderByWithRelationInput | SalonPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonPhotos.
     */
    cursor?: SalonPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonPhotos.
     */
    distinct?: SalonPhotoScalarFieldEnum | SalonPhotoScalarFieldEnum[]
  }

  /**
   * SalonPhoto findFirstOrThrow
   */
  export type SalonPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter, which SalonPhoto to fetch.
     */
    where?: SalonPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonPhotos to fetch.
     */
    orderBy?: SalonPhotoOrderByWithRelationInput | SalonPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonPhotos.
     */
    cursor?: SalonPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonPhotos.
     */
    distinct?: SalonPhotoScalarFieldEnum | SalonPhotoScalarFieldEnum[]
  }

  /**
   * SalonPhoto findMany
   */
  export type SalonPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter, which SalonPhotos to fetch.
     */
    where?: SalonPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonPhotos to fetch.
     */
    orderBy?: SalonPhotoOrderByWithRelationInput | SalonPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalonPhotos.
     */
    cursor?: SalonPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonPhotos.
     */
    skip?: number
    distinct?: SalonPhotoScalarFieldEnum | SalonPhotoScalarFieldEnum[]
  }

  /**
   * SalonPhoto create
   */
  export type SalonPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a SalonPhoto.
     */
    data: XOR<SalonPhotoCreateInput, SalonPhotoUncheckedCreateInput>
  }

  /**
   * SalonPhoto createMany
   */
  export type SalonPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalonPhotos.
     */
    data: SalonPhotoCreateManyInput | SalonPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalonPhoto createManyAndReturn
   */
  export type SalonPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalonPhotos.
     */
    data: SalonPhotoCreateManyInput | SalonPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalonPhoto update
   */
  export type SalonPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a SalonPhoto.
     */
    data: XOR<SalonPhotoUpdateInput, SalonPhotoUncheckedUpdateInput>
    /**
     * Choose, which SalonPhoto to update.
     */
    where: SalonPhotoWhereUniqueInput
  }

  /**
   * SalonPhoto updateMany
   */
  export type SalonPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalonPhotos.
     */
    data: XOR<SalonPhotoUpdateManyMutationInput, SalonPhotoUncheckedUpdateManyInput>
    /**
     * Filter which SalonPhotos to update
     */
    where?: SalonPhotoWhereInput
  }

  /**
   * SalonPhoto upsert
   */
  export type SalonPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the SalonPhoto to update in case it exists.
     */
    where: SalonPhotoWhereUniqueInput
    /**
     * In case the SalonPhoto found by the `where` argument doesn't exist, create a new SalonPhoto with this data.
     */
    create: XOR<SalonPhotoCreateInput, SalonPhotoUncheckedCreateInput>
    /**
     * In case the SalonPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonPhotoUpdateInput, SalonPhotoUncheckedUpdateInput>
  }

  /**
   * SalonPhoto delete
   */
  export type SalonPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
    /**
     * Filter which SalonPhoto to delete.
     */
    where: SalonPhotoWhereUniqueInput
  }

  /**
   * SalonPhoto deleteMany
   */
  export type SalonPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonPhotos to delete
     */
    where?: SalonPhotoWhereInput
  }

  /**
   * SalonPhoto without action
   */
  export type SalonPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonPhoto
     */
    select?: SalonPhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonPhotoInclude<ExtArgs> | null
  }


  /**
   * Model OpeningHours
   */

  export type AggregateOpeningHours = {
    _count: OpeningHoursCountAggregateOutputType | null
    _min: OpeningHoursMinAggregateOutputType | null
    _max: OpeningHoursMaxAggregateOutputType | null
  }

  export type OpeningHoursMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
  }

  export type OpeningHoursMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
  }

  export type OpeningHoursCountAggregateOutputType = {
    id: number
    salonId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    isOpen: number
    _all: number
  }


  export type OpeningHoursMinAggregateInputType = {
    id?: true
    salonId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
  }

  export type OpeningHoursMaxAggregateInputType = {
    id?: true
    salonId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
  }

  export type OpeningHoursCountAggregateInputType = {
    id?: true
    salonId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    _all?: true
  }

  export type OpeningHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpeningHours to aggregate.
     */
    where?: OpeningHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHoursOrderByWithRelationInput | OpeningHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpeningHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpeningHours
    **/
    _count?: true | OpeningHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpeningHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpeningHoursMaxAggregateInputType
  }

  export type GetOpeningHoursAggregateType<T extends OpeningHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOpeningHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpeningHours[P]>
      : GetScalarType<T[P], AggregateOpeningHours[P]>
  }




  export type OpeningHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpeningHoursWhereInput
    orderBy?: OpeningHoursOrderByWithAggregationInput | OpeningHoursOrderByWithAggregationInput[]
    by: OpeningHoursScalarFieldEnum[] | OpeningHoursScalarFieldEnum
    having?: OpeningHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpeningHoursCountAggregateInputType | true
    _min?: OpeningHoursMinAggregateInputType
    _max?: OpeningHoursMaxAggregateInputType
  }

  export type OpeningHoursGroupByOutputType = {
    id: string
    salonId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string | null
    closeTime: string | null
    isOpen: boolean
    _count: OpeningHoursCountAggregateOutputType | null
    _min: OpeningHoursMinAggregateOutputType | null
    _max: OpeningHoursMaxAggregateOutputType | null
  }

  type GetOpeningHoursGroupByPayload<T extends OpeningHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpeningHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpeningHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpeningHoursGroupByOutputType[P]>
            : GetScalarType<T[P], OpeningHoursGroupByOutputType[P]>
        }
      >
    >


  export type OpeningHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openingHours"]>

  export type OpeningHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openingHours"]>

  export type OpeningHoursSelectScalar = {
    id?: boolean
    salonId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
  }

  export type OpeningHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type OpeningHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $OpeningHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpeningHours"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      dayOfWeek: $Enums.DayOfWeek
      openTime: string | null
      closeTime: string | null
      isOpen: boolean
    }, ExtArgs["result"]["openingHours"]>
    composites: {}
  }

  type OpeningHoursGetPayload<S extends boolean | null | undefined | OpeningHoursDefaultArgs> = $Result.GetResult<Prisma.$OpeningHoursPayload, S>

  type OpeningHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OpeningHoursFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OpeningHoursCountAggregateInputType | true
    }

  export interface OpeningHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpeningHours'], meta: { name: 'OpeningHours' } }
    /**
     * Find zero or one OpeningHours that matches the filter.
     * @param {OpeningHoursFindUniqueArgs} args - Arguments to find a OpeningHours
     * @example
     * // Get one OpeningHours
     * const openingHours = await prisma.openingHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpeningHoursFindUniqueArgs>(args: SelectSubset<T, OpeningHoursFindUniqueArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OpeningHours that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OpeningHoursFindUniqueOrThrowArgs} args - Arguments to find a OpeningHours
     * @example
     * // Get one OpeningHours
     * const openingHours = await prisma.openingHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpeningHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, OpeningHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OpeningHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursFindFirstArgs} args - Arguments to find a OpeningHours
     * @example
     * // Get one OpeningHours
     * const openingHours = await prisma.openingHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpeningHoursFindFirstArgs>(args?: SelectSubset<T, OpeningHoursFindFirstArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OpeningHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursFindFirstOrThrowArgs} args - Arguments to find a OpeningHours
     * @example
     * // Get one OpeningHours
     * const openingHours = await prisma.openingHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpeningHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, OpeningHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OpeningHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpeningHours
     * const openingHours = await prisma.openingHours.findMany()
     * 
     * // Get first 10 OpeningHours
     * const openingHours = await prisma.openingHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openingHoursWithIdOnly = await prisma.openingHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpeningHoursFindManyArgs>(args?: SelectSubset<T, OpeningHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OpeningHours.
     * @param {OpeningHoursCreateArgs} args - Arguments to create a OpeningHours.
     * @example
     * // Create one OpeningHours
     * const OpeningHours = await prisma.openingHours.create({
     *   data: {
     *     // ... data to create a OpeningHours
     *   }
     * })
     * 
     */
    create<T extends OpeningHoursCreateArgs>(args: SelectSubset<T, OpeningHoursCreateArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OpeningHours.
     * @param {OpeningHoursCreateManyArgs} args - Arguments to create many OpeningHours.
     * @example
     * // Create many OpeningHours
     * const openingHours = await prisma.openingHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpeningHoursCreateManyArgs>(args?: SelectSubset<T, OpeningHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpeningHours and returns the data saved in the database.
     * @param {OpeningHoursCreateManyAndReturnArgs} args - Arguments to create many OpeningHours.
     * @example
     * // Create many OpeningHours
     * const openingHours = await prisma.openingHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpeningHours and only return the `id`
     * const openingHoursWithIdOnly = await prisma.openingHours.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpeningHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, OpeningHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OpeningHours.
     * @param {OpeningHoursDeleteArgs} args - Arguments to delete one OpeningHours.
     * @example
     * // Delete one OpeningHours
     * const OpeningHours = await prisma.openingHours.delete({
     *   where: {
     *     // ... filter to delete one OpeningHours
     *   }
     * })
     * 
     */
    delete<T extends OpeningHoursDeleteArgs>(args: SelectSubset<T, OpeningHoursDeleteArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OpeningHours.
     * @param {OpeningHoursUpdateArgs} args - Arguments to update one OpeningHours.
     * @example
     * // Update one OpeningHours
     * const openingHours = await prisma.openingHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpeningHoursUpdateArgs>(args: SelectSubset<T, OpeningHoursUpdateArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OpeningHours.
     * @param {OpeningHoursDeleteManyArgs} args - Arguments to filter OpeningHours to delete.
     * @example
     * // Delete a few OpeningHours
     * const { count } = await prisma.openingHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpeningHoursDeleteManyArgs>(args?: SelectSubset<T, OpeningHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpeningHours
     * const openingHours = await prisma.openingHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpeningHoursUpdateManyArgs>(args: SelectSubset<T, OpeningHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpeningHours.
     * @param {OpeningHoursUpsertArgs} args - Arguments to update or create a OpeningHours.
     * @example
     * // Update or create a OpeningHours
     * const openingHours = await prisma.openingHours.upsert({
     *   create: {
     *     // ... data to create a OpeningHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpeningHours we want to update
     *   }
     * })
     */
    upsert<T extends OpeningHoursUpsertArgs>(args: SelectSubset<T, OpeningHoursUpsertArgs<ExtArgs>>): Prisma__OpeningHoursClient<$Result.GetResult<Prisma.$OpeningHoursPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursCountArgs} args - Arguments to filter OpeningHours to count.
     * @example
     * // Count the number of OpeningHours
     * const count = await prisma.openingHours.count({
     *   where: {
     *     // ... the filter for the OpeningHours we want to count
     *   }
     * })
    **/
    count<T extends OpeningHoursCountArgs>(
      args?: Subset<T, OpeningHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpeningHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpeningHoursAggregateArgs>(args: Subset<T, OpeningHoursAggregateArgs>): Prisma.PrismaPromise<GetOpeningHoursAggregateType<T>>

    /**
     * Group by OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHoursGroupByArgs} args - Group by arguments.
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
      T extends OpeningHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpeningHoursGroupByArgs['orderBy'] }
        : { orderBy?: OpeningHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpeningHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpeningHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpeningHours model
   */
  readonly fields: OpeningHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpeningHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpeningHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OpeningHours model
   */ 
  interface OpeningHoursFieldRefs {
    readonly id: FieldRef<"OpeningHours", 'String'>
    readonly salonId: FieldRef<"OpeningHours", 'String'>
    readonly dayOfWeek: FieldRef<"OpeningHours", 'DayOfWeek'>
    readonly openTime: FieldRef<"OpeningHours", 'String'>
    readonly closeTime: FieldRef<"OpeningHours", 'String'>
    readonly isOpen: FieldRef<"OpeningHours", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OpeningHours findUnique
   */
  export type OpeningHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where: OpeningHoursWhereUniqueInput
  }

  /**
   * OpeningHours findUniqueOrThrow
   */
  export type OpeningHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where: OpeningHoursWhereUniqueInput
  }

  /**
   * OpeningHours findFirst
   */
  export type OpeningHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where?: OpeningHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHoursOrderByWithRelationInput | OpeningHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpeningHours.
     */
    cursor?: OpeningHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpeningHours.
     */
    distinct?: OpeningHoursScalarFieldEnum | OpeningHoursScalarFieldEnum[]
  }

  /**
   * OpeningHours findFirstOrThrow
   */
  export type OpeningHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where?: OpeningHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHoursOrderByWithRelationInput | OpeningHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpeningHours.
     */
    cursor?: OpeningHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpeningHours.
     */
    distinct?: OpeningHoursScalarFieldEnum | OpeningHoursScalarFieldEnum[]
  }

  /**
   * OpeningHours findMany
   */
  export type OpeningHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where?: OpeningHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHoursOrderByWithRelationInput | OpeningHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpeningHours.
     */
    cursor?: OpeningHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    distinct?: OpeningHoursScalarFieldEnum | OpeningHoursScalarFieldEnum[]
  }

  /**
   * OpeningHours create
   */
  export type OpeningHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a OpeningHours.
     */
    data: XOR<OpeningHoursCreateInput, OpeningHoursUncheckedCreateInput>
  }

  /**
   * OpeningHours createMany
   */
  export type OpeningHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpeningHours.
     */
    data: OpeningHoursCreateManyInput | OpeningHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpeningHours createManyAndReturn
   */
  export type OpeningHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OpeningHours.
     */
    data: OpeningHoursCreateManyInput | OpeningHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpeningHours update
   */
  export type OpeningHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a OpeningHours.
     */
    data: XOR<OpeningHoursUpdateInput, OpeningHoursUncheckedUpdateInput>
    /**
     * Choose, which OpeningHours to update.
     */
    where: OpeningHoursWhereUniqueInput
  }

  /**
   * OpeningHours updateMany
   */
  export type OpeningHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpeningHours.
     */
    data: XOR<OpeningHoursUpdateManyMutationInput, OpeningHoursUncheckedUpdateManyInput>
    /**
     * Filter which OpeningHours to update
     */
    where?: OpeningHoursWhereInput
  }

  /**
   * OpeningHours upsert
   */
  export type OpeningHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the OpeningHours to update in case it exists.
     */
    where: OpeningHoursWhereUniqueInput
    /**
     * In case the OpeningHours found by the `where` argument doesn't exist, create a new OpeningHours with this data.
     */
    create: XOR<OpeningHoursCreateInput, OpeningHoursUncheckedCreateInput>
    /**
     * In case the OpeningHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpeningHoursUpdateInput, OpeningHoursUncheckedUpdateInput>
  }

  /**
   * OpeningHours delete
   */
  export type OpeningHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
    /**
     * Filter which OpeningHours to delete.
     */
    where: OpeningHoursWhereUniqueInput
  }

  /**
   * OpeningHours deleteMany
   */
  export type OpeningHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpeningHours to delete
     */
    where?: OpeningHoursWhereInput
  }

  /**
   * OpeningHours without action
   */
  export type OpeningHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHours
     */
    select?: OpeningHoursSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpeningHoursInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: Decimal | null
    durationMins: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: Decimal | null
    durationMins: number | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationMins: number | null
    icon: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationMins: number | null
    icon: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    salonId: number
    name: number
    description: number
    price: number
    durationMins: number
    icon: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    durationMins?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    durationMins?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    description?: true
    price?: true
    durationMins?: true
    icon?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    description?: true
    price?: true
    durationMins?: true
    icon?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    salonId?: true
    name?: true
    description?: true
    price?: true
    durationMins?: true
    icon?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    salonId: string
    name: string
    description: string | null
    price: Decimal
    durationMins: number
    icon: string | null
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationMins?: boolean
    icon?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    barberServices?: boolean | Service$barberServicesArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationMins?: boolean
    icon?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    salonId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationMins?: boolean
    icon?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    barberServices?: boolean | Service$barberServicesArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      barberServices: Prisma.$BarberServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      durationMins: number
      icon: string | null
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    barberServices<T extends Service$barberServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$barberServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly salonId: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Decimal'>
    readonly durationMins: FieldRef<"Service", 'Int'>
    readonly icon: FieldRef<"Service", 'String'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.barberServices
   */
  export type Service$barberServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    where?: BarberServiceWhereInput
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    cursor?: BarberServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberServiceScalarFieldEnum | BarberServiceScalarFieldEnum[]
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Barber
   */

  export type AggregateBarber = {
    _count: BarberCountAggregateOutputType | null
    _avg: BarberAvgAggregateOutputType | null
    _sum: BarberSumAggregateOutputType | null
    _min: BarberMinAggregateOutputType | null
    _max: BarberMaxAggregateOutputType | null
  }

  export type BarberAvgAggregateOutputType = {
    rating: Decimal | null
  }

  export type BarberSumAggregateOutputType = {
    rating: Decimal | null
  }

  export type BarberMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    userId: string | null
    name: string | null
    title: string | null
    photoUrl: string | null
    rating: Decimal | null
    isActive: boolean | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarberMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    userId: string | null
    name: string | null
    title: string | null
    photoUrl: string | null
    rating: Decimal | null
    isActive: boolean | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarberCountAggregateOutputType = {
    id: number
    salonId: number
    userId: number
    name: number
    title: number
    photoUrl: number
    rating: number
    isActive: number
    isOnline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarberAvgAggregateInputType = {
    rating?: true
  }

  export type BarberSumAggregateInputType = {
    rating?: true
  }

  export type BarberMinAggregateInputType = {
    id?: true
    salonId?: true
    userId?: true
    name?: true
    title?: true
    photoUrl?: true
    rating?: true
    isActive?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarberMaxAggregateInputType = {
    id?: true
    salonId?: true
    userId?: true
    name?: true
    title?: true
    photoUrl?: true
    rating?: true
    isActive?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarberCountAggregateInputType = {
    id?: true
    salonId?: true
    userId?: true
    name?: true
    title?: true
    photoUrl?: true
    rating?: true
    isActive?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barber to aggregate.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbers
    **/
    _count?: true | BarberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberMaxAggregateInputType
  }

  export type GetBarberAggregateType<T extends BarberAggregateArgs> = {
        [P in keyof T & keyof AggregateBarber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarber[P]>
      : GetScalarType<T[P], AggregateBarber[P]>
  }




  export type BarberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberWhereInput
    orderBy?: BarberOrderByWithAggregationInput | BarberOrderByWithAggregationInput[]
    by: BarberScalarFieldEnum[] | BarberScalarFieldEnum
    having?: BarberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberCountAggregateInputType | true
    _avg?: BarberAvgAggregateInputType
    _sum?: BarberSumAggregateInputType
    _min?: BarberMinAggregateInputType
    _max?: BarberMaxAggregateInputType
  }

  export type BarberGroupByOutputType = {
    id: string
    salonId: string
    userId: string | null
    name: string
    title: string | null
    photoUrl: string | null
    rating: Decimal
    isActive: boolean
    isOnline: boolean
    createdAt: Date
    updatedAt: Date
    _count: BarberCountAggregateOutputType | null
    _avg: BarberAvgAggregateOutputType | null
    _sum: BarberSumAggregateOutputType | null
    _min: BarberMinAggregateOutputType | null
    _max: BarberMaxAggregateOutputType | null
  }

  type GetBarberGroupByPayload<T extends BarberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberGroupByOutputType[P]>
            : GetScalarType<T[P], BarberGroupByOutputType[P]>
        }
      >
    >


  export type BarberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    photoUrl?: boolean
    rating?: boolean
    isActive?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    user?: boolean | Barber$userArgs<ExtArgs>
    barberServices?: boolean | Barber$barberServicesArgs<ExtArgs>
    bookings?: boolean | Barber$bookingsArgs<ExtArgs>
    _count?: boolean | BarberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barber"]>

  export type BarberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    photoUrl?: boolean
    rating?: boolean
    isActive?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    user?: boolean | Barber$userArgs<ExtArgs>
  }, ExtArgs["result"]["barber"]>

  export type BarberSelectScalar = {
    id?: boolean
    salonId?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    photoUrl?: boolean
    rating?: boolean
    isActive?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    user?: boolean | Barber$userArgs<ExtArgs>
    barberServices?: boolean | Barber$barberServicesArgs<ExtArgs>
    bookings?: boolean | Barber$bookingsArgs<ExtArgs>
    _count?: boolean | BarberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    user?: boolean | Barber$userArgs<ExtArgs>
  }

  export type $BarberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barber"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      barberServices: Prisma.$BarberServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      userId: string | null
      name: string
      title: string | null
      photoUrl: string | null
      rating: Prisma.Decimal
      isActive: boolean
      isOnline: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barber"]>
    composites: {}
  }

  type BarberGetPayload<S extends boolean | null | undefined | BarberDefaultArgs> = $Result.GetResult<Prisma.$BarberPayload, S>

  type BarberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarberCountAggregateInputType | true
    }

  export interface BarberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barber'], meta: { name: 'Barber' } }
    /**
     * Find zero or one Barber that matches the filter.
     * @param {BarberFindUniqueArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberFindUniqueArgs>(args: SelectSubset<T, BarberFindUniqueArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Barber that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarberFindUniqueOrThrowArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Barber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindFirstArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberFindFirstArgs>(args?: SelectSubset<T, BarberFindFirstArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Barber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindFirstOrThrowArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Barbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbers
     * const barbers = await prisma.barber.findMany()
     * 
     * // Get first 10 Barbers
     * const barbers = await prisma.barber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barberWithIdOnly = await prisma.barber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarberFindManyArgs>(args?: SelectSubset<T, BarberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Barber.
     * @param {BarberCreateArgs} args - Arguments to create a Barber.
     * @example
     * // Create one Barber
     * const Barber = await prisma.barber.create({
     *   data: {
     *     // ... data to create a Barber
     *   }
     * })
     * 
     */
    create<T extends BarberCreateArgs>(args: SelectSubset<T, BarberCreateArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Barbers.
     * @param {BarberCreateManyArgs} args - Arguments to create many Barbers.
     * @example
     * // Create many Barbers
     * const barber = await prisma.barber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberCreateManyArgs>(args?: SelectSubset<T, BarberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbers and returns the data saved in the database.
     * @param {BarberCreateManyAndReturnArgs} args - Arguments to create many Barbers.
     * @example
     * // Create many Barbers
     * const barber = await prisma.barber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbers and only return the `id`
     * const barberWithIdOnly = await prisma.barber.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarberCreateManyAndReturnArgs>(args?: SelectSubset<T, BarberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Barber.
     * @param {BarberDeleteArgs} args - Arguments to delete one Barber.
     * @example
     * // Delete one Barber
     * const Barber = await prisma.barber.delete({
     *   where: {
     *     // ... filter to delete one Barber
     *   }
     * })
     * 
     */
    delete<T extends BarberDeleteArgs>(args: SelectSubset<T, BarberDeleteArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Barber.
     * @param {BarberUpdateArgs} args - Arguments to update one Barber.
     * @example
     * // Update one Barber
     * const barber = await prisma.barber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberUpdateArgs>(args: SelectSubset<T, BarberUpdateArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Barbers.
     * @param {BarberDeleteManyArgs} args - Arguments to filter Barbers to delete.
     * @example
     * // Delete a few Barbers
     * const { count } = await prisma.barber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberDeleteManyArgs>(args?: SelectSubset<T, BarberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbers
     * const barber = await prisma.barber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberUpdateManyArgs>(args: SelectSubset<T, BarberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barber.
     * @param {BarberUpsertArgs} args - Arguments to update or create a Barber.
     * @example
     * // Update or create a Barber
     * const barber = await prisma.barber.upsert({
     *   create: {
     *     // ... data to create a Barber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barber we want to update
     *   }
     * })
     */
    upsert<T extends BarberUpsertArgs>(args: SelectSubset<T, BarberUpsertArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Barbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberCountArgs} args - Arguments to filter Barbers to count.
     * @example
     * // Count the number of Barbers
     * const count = await prisma.barber.count({
     *   where: {
     *     // ... the filter for the Barbers we want to count
     *   }
     * })
    **/
    count<T extends BarberCountArgs>(
      args?: Subset<T, BarberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarberAggregateArgs>(args: Subset<T, BarberAggregateArgs>): Prisma.PrismaPromise<GetBarberAggregateType<T>>

    /**
     * Group by Barber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberGroupByArgs} args - Group by arguments.
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
      T extends BarberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberGroupByArgs['orderBy'] }
        : { orderBy?: BarberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barber model
   */
  readonly fields: BarberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends Barber$userArgs<ExtArgs> = {}>(args?: Subset<T, Barber$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    barberServices<T extends Barber$barberServicesArgs<ExtArgs> = {}>(args?: Subset<T, Barber$barberServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Barber$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Barber$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Barber model
   */ 
  interface BarberFieldRefs {
    readonly id: FieldRef<"Barber", 'String'>
    readonly salonId: FieldRef<"Barber", 'String'>
    readonly userId: FieldRef<"Barber", 'String'>
    readonly name: FieldRef<"Barber", 'String'>
    readonly title: FieldRef<"Barber", 'String'>
    readonly photoUrl: FieldRef<"Barber", 'String'>
    readonly rating: FieldRef<"Barber", 'Decimal'>
    readonly isActive: FieldRef<"Barber", 'Boolean'>
    readonly isOnline: FieldRef<"Barber", 'Boolean'>
    readonly createdAt: FieldRef<"Barber", 'DateTime'>
    readonly updatedAt: FieldRef<"Barber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Barber findUnique
   */
  export type BarberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber findUniqueOrThrow
   */
  export type BarberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber findFirst
   */
  export type BarberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbers.
     */
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber findFirstOrThrow
   */
  export type BarberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbers.
     */
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber findMany
   */
  export type BarberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barbers to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber create
   */
  export type BarberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The data needed to create a Barber.
     */
    data: XOR<BarberCreateInput, BarberUncheckedCreateInput>
  }

  /**
   * Barber createMany
   */
  export type BarberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbers.
     */
    data: BarberCreateManyInput | BarberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barber createManyAndReturn
   */
  export type BarberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Barbers.
     */
    data: BarberCreateManyInput | BarberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barber update
   */
  export type BarberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The data needed to update a Barber.
     */
    data: XOR<BarberUpdateInput, BarberUncheckedUpdateInput>
    /**
     * Choose, which Barber to update.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber updateMany
   */
  export type BarberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbers.
     */
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyInput>
    /**
     * Filter which Barbers to update
     */
    where?: BarberWhereInput
  }

  /**
   * Barber upsert
   */
  export type BarberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The filter to search for the Barber to update in case it exists.
     */
    where: BarberWhereUniqueInput
    /**
     * In case the Barber found by the `where` argument doesn't exist, create a new Barber with this data.
     */
    create: XOR<BarberCreateInput, BarberUncheckedCreateInput>
    /**
     * In case the Barber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberUpdateInput, BarberUncheckedUpdateInput>
  }

  /**
   * Barber delete
   */
  export type BarberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter which Barber to delete.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber deleteMany
   */
  export type BarberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbers to delete
     */
    where?: BarberWhereInput
  }

  /**
   * Barber.user
   */
  export type Barber$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Barber.barberServices
   */
  export type Barber$barberServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    where?: BarberServiceWhereInput
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    cursor?: BarberServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberServiceScalarFieldEnum | BarberServiceScalarFieldEnum[]
  }

  /**
   * Barber.bookings
   */
  export type Barber$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Barber without action
   */
  export type BarberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
  }


  /**
   * Model BarberService
   */

  export type AggregateBarberService = {
    _count: BarberServiceCountAggregateOutputType | null
    _min: BarberServiceMinAggregateOutputType | null
    _max: BarberServiceMaxAggregateOutputType | null
  }

  export type BarberServiceMinAggregateOutputType = {
    barberId: string | null
    serviceId: string | null
  }

  export type BarberServiceMaxAggregateOutputType = {
    barberId: string | null
    serviceId: string | null
  }

  export type BarberServiceCountAggregateOutputType = {
    barberId: number
    serviceId: number
    _all: number
  }


  export type BarberServiceMinAggregateInputType = {
    barberId?: true
    serviceId?: true
  }

  export type BarberServiceMaxAggregateInputType = {
    barberId?: true
    serviceId?: true
  }

  export type BarberServiceCountAggregateInputType = {
    barberId?: true
    serviceId?: true
    _all?: true
  }

  export type BarberServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberService to aggregate.
     */
    where?: BarberServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberServices to fetch.
     */
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarberServices
    **/
    _count?: true | BarberServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberServiceMaxAggregateInputType
  }

  export type GetBarberServiceAggregateType<T extends BarberServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBarberService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarberService[P]>
      : GetScalarType<T[P], AggregateBarberService[P]>
  }




  export type BarberServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberServiceWhereInput
    orderBy?: BarberServiceOrderByWithAggregationInput | BarberServiceOrderByWithAggregationInput[]
    by: BarberServiceScalarFieldEnum[] | BarberServiceScalarFieldEnum
    having?: BarberServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberServiceCountAggregateInputType | true
    _min?: BarberServiceMinAggregateInputType
    _max?: BarberServiceMaxAggregateInputType
  }

  export type BarberServiceGroupByOutputType = {
    barberId: string
    serviceId: string
    _count: BarberServiceCountAggregateOutputType | null
    _min: BarberServiceMinAggregateOutputType | null
    _max: BarberServiceMaxAggregateOutputType | null
  }

  type GetBarberServiceGroupByPayload<T extends BarberServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BarberServiceGroupByOutputType[P]>
        }
      >
    >


  export type BarberServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barberId?: boolean
    serviceId?: boolean
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberService"]>

  export type BarberServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barberId?: boolean
    serviceId?: boolean
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barberService"]>

  export type BarberServiceSelectScalar = {
    barberId?: boolean
    serviceId?: boolean
  }

  export type BarberServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type BarberServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $BarberServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarberService"
    objects: {
      barber: Prisma.$BarberPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      barberId: string
      serviceId: string
    }, ExtArgs["result"]["barberService"]>
    composites: {}
  }

  type BarberServiceGetPayload<S extends boolean | null | undefined | BarberServiceDefaultArgs> = $Result.GetResult<Prisma.$BarberServicePayload, S>

  type BarberServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarberServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarberServiceCountAggregateInputType | true
    }

  export interface BarberServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarberService'], meta: { name: 'BarberService' } }
    /**
     * Find zero or one BarberService that matches the filter.
     * @param {BarberServiceFindUniqueArgs} args - Arguments to find a BarberService
     * @example
     * // Get one BarberService
     * const barberService = await prisma.barberService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberServiceFindUniqueArgs>(args: SelectSubset<T, BarberServiceFindUniqueArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BarberService that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarberServiceFindUniqueOrThrowArgs} args - Arguments to find a BarberService
     * @example
     * // Get one BarberService
     * const barberService = await prisma.barberService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BarberService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceFindFirstArgs} args - Arguments to find a BarberService
     * @example
     * // Get one BarberService
     * const barberService = await prisma.barberService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberServiceFindFirstArgs>(args?: SelectSubset<T, BarberServiceFindFirstArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BarberService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceFindFirstOrThrowArgs} args - Arguments to find a BarberService
     * @example
     * // Get one BarberService
     * const barberService = await prisma.barberService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BarberServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarberServices
     * const barberServices = await prisma.barberService.findMany()
     * 
     * // Get first 10 BarberServices
     * const barberServices = await prisma.barberService.findMany({ take: 10 })
     * 
     * // Only select the `barberId`
     * const barberServiceWithBarberIdOnly = await prisma.barberService.findMany({ select: { barberId: true } })
     * 
     */
    findMany<T extends BarberServiceFindManyArgs>(args?: SelectSubset<T, BarberServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BarberService.
     * @param {BarberServiceCreateArgs} args - Arguments to create a BarberService.
     * @example
     * // Create one BarberService
     * const BarberService = await prisma.barberService.create({
     *   data: {
     *     // ... data to create a BarberService
     *   }
     * })
     * 
     */
    create<T extends BarberServiceCreateArgs>(args: SelectSubset<T, BarberServiceCreateArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BarberServices.
     * @param {BarberServiceCreateManyArgs} args - Arguments to create many BarberServices.
     * @example
     * // Create many BarberServices
     * const barberService = await prisma.barberService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberServiceCreateManyArgs>(args?: SelectSubset<T, BarberServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarberServices and returns the data saved in the database.
     * @param {BarberServiceCreateManyAndReturnArgs} args - Arguments to create many BarberServices.
     * @example
     * // Create many BarberServices
     * const barberService = await prisma.barberService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarberServices and only return the `barberId`
     * const barberServiceWithBarberIdOnly = await prisma.barberService.createManyAndReturn({ 
     *   select: { barberId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarberServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BarberServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BarberService.
     * @param {BarberServiceDeleteArgs} args - Arguments to delete one BarberService.
     * @example
     * // Delete one BarberService
     * const BarberService = await prisma.barberService.delete({
     *   where: {
     *     // ... filter to delete one BarberService
     *   }
     * })
     * 
     */
    delete<T extends BarberServiceDeleteArgs>(args: SelectSubset<T, BarberServiceDeleteArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BarberService.
     * @param {BarberServiceUpdateArgs} args - Arguments to update one BarberService.
     * @example
     * // Update one BarberService
     * const barberService = await prisma.barberService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberServiceUpdateArgs>(args: SelectSubset<T, BarberServiceUpdateArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BarberServices.
     * @param {BarberServiceDeleteManyArgs} args - Arguments to filter BarberServices to delete.
     * @example
     * // Delete a few BarberServices
     * const { count } = await prisma.barberService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberServiceDeleteManyArgs>(args?: SelectSubset<T, BarberServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarberServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarberServices
     * const barberService = await prisma.barberService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberServiceUpdateManyArgs>(args: SelectSubset<T, BarberServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BarberService.
     * @param {BarberServiceUpsertArgs} args - Arguments to update or create a BarberService.
     * @example
     * // Update or create a BarberService
     * const barberService = await prisma.barberService.upsert({
     *   create: {
     *     // ... data to create a BarberService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarberService we want to update
     *   }
     * })
     */
    upsert<T extends BarberServiceUpsertArgs>(args: SelectSubset<T, BarberServiceUpsertArgs<ExtArgs>>): Prisma__BarberServiceClient<$Result.GetResult<Prisma.$BarberServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BarberServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceCountArgs} args - Arguments to filter BarberServices to count.
     * @example
     * // Count the number of BarberServices
     * const count = await prisma.barberService.count({
     *   where: {
     *     // ... the filter for the BarberServices we want to count
     *   }
     * })
    **/
    count<T extends BarberServiceCountArgs>(
      args?: Subset<T, BarberServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarberService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarberServiceAggregateArgs>(args: Subset<T, BarberServiceAggregateArgs>): Prisma.PrismaPromise<GetBarberServiceAggregateType<T>>

    /**
     * Group by BarberService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberServiceGroupByArgs} args - Group by arguments.
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
      T extends BarberServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberServiceGroupByArgs['orderBy'] }
        : { orderBy?: BarberServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarberServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarberService model
   */
  readonly fields: BarberServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarberService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barber<T extends BarberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberDefaultArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BarberService model
   */ 
  interface BarberServiceFieldRefs {
    readonly barberId: FieldRef<"BarberService", 'String'>
    readonly serviceId: FieldRef<"BarberService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarberService findUnique
   */
  export type BarberServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberService to fetch.
     */
    where: BarberServiceWhereUniqueInput
  }

  /**
   * BarberService findUniqueOrThrow
   */
  export type BarberServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberService to fetch.
     */
    where: BarberServiceWhereUniqueInput
  }

  /**
   * BarberService findFirst
   */
  export type BarberServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberService to fetch.
     */
    where?: BarberServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberServices to fetch.
     */
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberServices.
     */
    cursor?: BarberServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberServices.
     */
    distinct?: BarberServiceScalarFieldEnum | BarberServiceScalarFieldEnum[]
  }

  /**
   * BarberService findFirstOrThrow
   */
  export type BarberServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberService to fetch.
     */
    where?: BarberServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberServices to fetch.
     */
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarberServices.
     */
    cursor?: BarberServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarberServices.
     */
    distinct?: BarberServiceScalarFieldEnum | BarberServiceScalarFieldEnum[]
  }

  /**
   * BarberService findMany
   */
  export type BarberServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarberServices to fetch.
     */
    where?: BarberServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarberServices to fetch.
     */
    orderBy?: BarberServiceOrderByWithRelationInput | BarberServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarberServices.
     */
    cursor?: BarberServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarberServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarberServices.
     */
    skip?: number
    distinct?: BarberServiceScalarFieldEnum | BarberServiceScalarFieldEnum[]
  }

  /**
   * BarberService create
   */
  export type BarberServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BarberService.
     */
    data: XOR<BarberServiceCreateInput, BarberServiceUncheckedCreateInput>
  }

  /**
   * BarberService createMany
   */
  export type BarberServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarberServices.
     */
    data: BarberServiceCreateManyInput | BarberServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarberService createManyAndReturn
   */
  export type BarberServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BarberServices.
     */
    data: BarberServiceCreateManyInput | BarberServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarberService update
   */
  export type BarberServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BarberService.
     */
    data: XOR<BarberServiceUpdateInput, BarberServiceUncheckedUpdateInput>
    /**
     * Choose, which BarberService to update.
     */
    where: BarberServiceWhereUniqueInput
  }

  /**
   * BarberService updateMany
   */
  export type BarberServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarberServices.
     */
    data: XOR<BarberServiceUpdateManyMutationInput, BarberServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarberServices to update
     */
    where?: BarberServiceWhereInput
  }

  /**
   * BarberService upsert
   */
  export type BarberServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BarberService to update in case it exists.
     */
    where: BarberServiceWhereUniqueInput
    /**
     * In case the BarberService found by the `where` argument doesn't exist, create a new BarberService with this data.
     */
    create: XOR<BarberServiceCreateInput, BarberServiceUncheckedCreateInput>
    /**
     * In case the BarberService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberServiceUpdateInput, BarberServiceUncheckedUpdateInput>
  }

  /**
   * BarberService delete
   */
  export type BarberServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
    /**
     * Filter which BarberService to delete.
     */
    where: BarberServiceWhereUniqueInput
  }

  /**
   * BarberService deleteMany
   */
  export type BarberServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarberServices to delete
     */
    where?: BarberServiceWhereInput
  }

  /**
   * BarberService without action
   */
  export type BarberServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberService
     */
    select?: BarberServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    servicePrice: Decimal | null
    durationMins: number | null
    price: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    servicePrice: Decimal | null
    durationMins: number | null
    price: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    customerId: string | null
    barberId: string | null
    serviceId: string | null
    customerName: string | null
    customerPhone: string | null
    serviceName: string | null
    servicePrice: Decimal | null
    appointmentAt: Date | null
    durationMins: number | null
    price: Decimal | null
    status: $Enums.BookingStatus | null
    type: $Enums.BookingType | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    customerId: string | null
    barberId: string | null
    serviceId: string | null
    customerName: string | null
    customerPhone: string | null
    serviceName: string | null
    servicePrice: Decimal | null
    appointmentAt: Date | null
    durationMins: number | null
    price: Decimal | null
    status: $Enums.BookingStatus | null
    type: $Enums.BookingType | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    salonId: number
    customerId: number
    barberId: number
    serviceId: number
    customerName: number
    customerPhone: number
    serviceName: number
    servicePrice: number
    appointmentAt: number
    durationMins: number
    price: number
    status: number
    type: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    servicePrice?: true
    durationMins?: true
    price?: true
  }

  export type BookingSumAggregateInputType = {
    servicePrice?: true
    durationMins?: true
    price?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    salonId?: true
    customerId?: true
    barberId?: true
    serviceId?: true
    customerName?: true
    customerPhone?: true
    serviceName?: true
    servicePrice?: true
    appointmentAt?: true
    durationMins?: true
    price?: true
    status?: true
    type?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    salonId?: true
    customerId?: true
    barberId?: true
    serviceId?: true
    customerName?: true
    customerPhone?: true
    serviceName?: true
    servicePrice?: true
    appointmentAt?: true
    durationMins?: true
    price?: true
    status?: true
    type?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    salonId?: true
    customerId?: true
    barberId?: true
    serviceId?: true
    customerName?: true
    customerPhone?: true
    serviceName?: true
    servicePrice?: true
    appointmentAt?: true
    durationMins?: true
    price?: true
    status?: true
    type?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    salonId: string
    customerId: string | null
    barberId: string | null
    serviceId: string | null
    customerName: string | null
    customerPhone: string | null
    serviceName: string | null
    servicePrice: Decimal | null
    appointmentAt: Date
    durationMins: number
    price: Decimal
    status: $Enums.BookingStatus
    type: $Enums.BookingType
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    customerId?: boolean
    barberId?: boolean
    serviceId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    serviceName?: boolean
    servicePrice?: boolean
    appointmentAt?: boolean
    durationMins?: boolean
    price?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Booking$customerArgs<ExtArgs>
    barber?: boolean | Booking$barberArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
    queueEntry?: boolean | Booking$queueEntryArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    customerId?: boolean
    barberId?: boolean
    serviceId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    serviceName?: boolean
    servicePrice?: boolean
    appointmentAt?: boolean
    durationMins?: boolean
    price?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Booking$customerArgs<ExtArgs>
    barber?: boolean | Booking$barberArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    salonId?: boolean
    customerId?: boolean
    barberId?: boolean
    serviceId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    serviceName?: boolean
    servicePrice?: boolean
    appointmentAt?: boolean
    durationMins?: boolean
    price?: boolean
    status?: boolean
    type?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Booking$customerArgs<ExtArgs>
    barber?: boolean | Booking$barberArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
    queueEntry?: boolean | Booking$queueEntryArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    customer?: boolean | Booking$customerArgs<ExtArgs>
    barber?: boolean | Booking$barberArgs<ExtArgs>
    service?: boolean | Booking$serviceArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      customer: Prisma.$UserPayload<ExtArgs> | null
      barber: Prisma.$BarberPayload<ExtArgs> | null
      service: Prisma.$ServicePayload<ExtArgs> | null
      queueEntry: Prisma.$QueueEntryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      customerId: string | null
      barberId: string | null
      serviceId: string | null
      customerName: string | null
      customerPhone: string | null
      serviceName: string | null
      servicePrice: Prisma.Decimal | null
      appointmentAt: Date
      durationMins: number
      price: Prisma.Decimal
      status: $Enums.BookingStatus
      type: $Enums.BookingType
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends Booking$customerArgs<ExtArgs> = {}>(args?: Subset<T, Booking$customerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    barber<T extends Booking$barberArgs<ExtArgs> = {}>(args?: Subset<T, Booking$barberArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    service<T extends Booking$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Booking$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    queueEntry<T extends Booking$queueEntryArgs<ExtArgs> = {}>(args?: Subset<T, Booking$queueEntryArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly salonId: FieldRef<"Booking", 'String'>
    readonly customerId: FieldRef<"Booking", 'String'>
    readonly barberId: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly customerName: FieldRef<"Booking", 'String'>
    readonly customerPhone: FieldRef<"Booking", 'String'>
    readonly serviceName: FieldRef<"Booking", 'String'>
    readonly servicePrice: FieldRef<"Booking", 'Decimal'>
    readonly appointmentAt: FieldRef<"Booking", 'DateTime'>
    readonly durationMins: FieldRef<"Booking", 'Int'>
    readonly price: FieldRef<"Booking", 'Decimal'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly type: FieldRef<"Booking", 'BookingType'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.customer
   */
  export type Booking$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking.barber
   */
  export type Booking$barberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    where?: BarberWhereInput
  }

  /**
   * Booking.service
   */
  export type Booking$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Booking.queueEntry
   */
  export type Booking$queueEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    where?: QueueEntryWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model QueueEntry
   */

  export type AggregateQueueEntry = {
    _count: QueueEntryCountAggregateOutputType | null
    _avg: QueueEntryAvgAggregateOutputType | null
    _sum: QueueEntrySumAggregateOutputType | null
    _min: QueueEntryMinAggregateOutputType | null
    _max: QueueEntryMaxAggregateOutputType | null
  }

  export type QueueEntryAvgAggregateOutputType = {
    position: number | null
    estimatedWait: number | null
  }

  export type QueueEntrySumAggregateOutputType = {
    position: number | null
    estimatedWait: number | null
  }

  export type QueueEntryMinAggregateOutputType = {
    id: string | null
    salonId: string | null
    bookingId: string | null
    position: number | null
    estimatedWait: number | null
    checkedIn: boolean | null
    joinedAt: Date | null
    servedAt: Date | null
  }

  export type QueueEntryMaxAggregateOutputType = {
    id: string | null
    salonId: string | null
    bookingId: string | null
    position: number | null
    estimatedWait: number | null
    checkedIn: boolean | null
    joinedAt: Date | null
    servedAt: Date | null
  }

  export type QueueEntryCountAggregateOutputType = {
    id: number
    salonId: number
    bookingId: number
    position: number
    estimatedWait: number
    checkedIn: number
    joinedAt: number
    servedAt: number
    _all: number
  }


  export type QueueEntryAvgAggregateInputType = {
    position?: true
    estimatedWait?: true
  }

  export type QueueEntrySumAggregateInputType = {
    position?: true
    estimatedWait?: true
  }

  export type QueueEntryMinAggregateInputType = {
    id?: true
    salonId?: true
    bookingId?: true
    position?: true
    estimatedWait?: true
    checkedIn?: true
    joinedAt?: true
    servedAt?: true
  }

  export type QueueEntryMaxAggregateInputType = {
    id?: true
    salonId?: true
    bookingId?: true
    position?: true
    estimatedWait?: true
    checkedIn?: true
    joinedAt?: true
    servedAt?: true
  }

  export type QueueEntryCountAggregateInputType = {
    id?: true
    salonId?: true
    bookingId?: true
    position?: true
    estimatedWait?: true
    checkedIn?: true
    joinedAt?: true
    servedAt?: true
    _all?: true
  }

  export type QueueEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueEntry to aggregate.
     */
    where?: QueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueEntries to fetch.
     */
    orderBy?: QueueEntryOrderByWithRelationInput | QueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueueEntries
    **/
    _count?: true | QueueEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueueEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueueEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueEntryMaxAggregateInputType
  }

  export type GetQueueEntryAggregateType<T extends QueueEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateQueueEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueueEntry[P]>
      : GetScalarType<T[P], AggregateQueueEntry[P]>
  }




  export type QueueEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueEntryWhereInput
    orderBy?: QueueEntryOrderByWithAggregationInput | QueueEntryOrderByWithAggregationInput[]
    by: QueueEntryScalarFieldEnum[] | QueueEntryScalarFieldEnum
    having?: QueueEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueEntryCountAggregateInputType | true
    _avg?: QueueEntryAvgAggregateInputType
    _sum?: QueueEntrySumAggregateInputType
    _min?: QueueEntryMinAggregateInputType
    _max?: QueueEntryMaxAggregateInputType
  }

  export type QueueEntryGroupByOutputType = {
    id: string
    salonId: string
    bookingId: string
    position: number
    estimatedWait: number | null
    checkedIn: boolean
    joinedAt: Date
    servedAt: Date | null
    _count: QueueEntryCountAggregateOutputType | null
    _avg: QueueEntryAvgAggregateOutputType | null
    _sum: QueueEntrySumAggregateOutputType | null
    _min: QueueEntryMinAggregateOutputType | null
    _max: QueueEntryMaxAggregateOutputType | null
  }

  type GetQueueEntryGroupByPayload<T extends QueueEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueEntryGroupByOutputType[P]>
            : GetScalarType<T[P], QueueEntryGroupByOutputType[P]>
        }
      >
    >


  export type QueueEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    bookingId?: boolean
    position?: boolean
    estimatedWait?: boolean
    checkedIn?: boolean
    joinedAt?: boolean
    servedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queueEntry"]>

  export type QueueEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    bookingId?: boolean
    position?: boolean
    estimatedWait?: boolean
    checkedIn?: boolean
    joinedAt?: boolean
    servedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queueEntry"]>

  export type QueueEntrySelectScalar = {
    id?: boolean
    salonId?: boolean
    bookingId?: boolean
    position?: boolean
    estimatedWait?: boolean
    checkedIn?: boolean
    joinedAt?: boolean
    servedAt?: boolean
  }

  export type QueueEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type QueueEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $QueueEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueueEntry"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonId: string
      bookingId: string
      position: number
      estimatedWait: number | null
      checkedIn: boolean
      joinedAt: Date
      servedAt: Date | null
    }, ExtArgs["result"]["queueEntry"]>
    composites: {}
  }

  type QueueEntryGetPayload<S extends boolean | null | undefined | QueueEntryDefaultArgs> = $Result.GetResult<Prisma.$QueueEntryPayload, S>

  type QueueEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QueueEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QueueEntryCountAggregateInputType | true
    }

  export interface QueueEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueueEntry'], meta: { name: 'QueueEntry' } }
    /**
     * Find zero or one QueueEntry that matches the filter.
     * @param {QueueEntryFindUniqueArgs} args - Arguments to find a QueueEntry
     * @example
     * // Get one QueueEntry
     * const queueEntry = await prisma.queueEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueEntryFindUniqueArgs>(args: SelectSubset<T, QueueEntryFindUniqueArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QueueEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QueueEntryFindUniqueOrThrowArgs} args - Arguments to find a QueueEntry
     * @example
     * // Get one QueueEntry
     * const queueEntry = await prisma.queueEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QueueEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryFindFirstArgs} args - Arguments to find a QueueEntry
     * @example
     * // Get one QueueEntry
     * const queueEntry = await prisma.queueEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueEntryFindFirstArgs>(args?: SelectSubset<T, QueueEntryFindFirstArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QueueEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryFindFirstOrThrowArgs} args - Arguments to find a QueueEntry
     * @example
     * // Get one QueueEntry
     * const queueEntry = await prisma.queueEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QueueEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueueEntries
     * const queueEntries = await prisma.queueEntry.findMany()
     * 
     * // Get first 10 QueueEntries
     * const queueEntries = await prisma.queueEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueEntryWithIdOnly = await prisma.queueEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueEntryFindManyArgs>(args?: SelectSubset<T, QueueEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QueueEntry.
     * @param {QueueEntryCreateArgs} args - Arguments to create a QueueEntry.
     * @example
     * // Create one QueueEntry
     * const QueueEntry = await prisma.queueEntry.create({
     *   data: {
     *     // ... data to create a QueueEntry
     *   }
     * })
     * 
     */
    create<T extends QueueEntryCreateArgs>(args: SelectSubset<T, QueueEntryCreateArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QueueEntries.
     * @param {QueueEntryCreateManyArgs} args - Arguments to create many QueueEntries.
     * @example
     * // Create many QueueEntries
     * const queueEntry = await prisma.queueEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueEntryCreateManyArgs>(args?: SelectSubset<T, QueueEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueueEntries and returns the data saved in the database.
     * @param {QueueEntryCreateManyAndReturnArgs} args - Arguments to create many QueueEntries.
     * @example
     * // Create many QueueEntries
     * const queueEntry = await prisma.queueEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueueEntries and only return the `id`
     * const queueEntryWithIdOnly = await prisma.queueEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueueEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QueueEntry.
     * @param {QueueEntryDeleteArgs} args - Arguments to delete one QueueEntry.
     * @example
     * // Delete one QueueEntry
     * const QueueEntry = await prisma.queueEntry.delete({
     *   where: {
     *     // ... filter to delete one QueueEntry
     *   }
     * })
     * 
     */
    delete<T extends QueueEntryDeleteArgs>(args: SelectSubset<T, QueueEntryDeleteArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QueueEntry.
     * @param {QueueEntryUpdateArgs} args - Arguments to update one QueueEntry.
     * @example
     * // Update one QueueEntry
     * const queueEntry = await prisma.queueEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueEntryUpdateArgs>(args: SelectSubset<T, QueueEntryUpdateArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QueueEntries.
     * @param {QueueEntryDeleteManyArgs} args - Arguments to filter QueueEntries to delete.
     * @example
     * // Delete a few QueueEntries
     * const { count } = await prisma.queueEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueEntryDeleteManyArgs>(args?: SelectSubset<T, QueueEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueueEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueueEntries
     * const queueEntry = await prisma.queueEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueEntryUpdateManyArgs>(args: SelectSubset<T, QueueEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QueueEntry.
     * @param {QueueEntryUpsertArgs} args - Arguments to update or create a QueueEntry.
     * @example
     * // Update or create a QueueEntry
     * const queueEntry = await prisma.queueEntry.upsert({
     *   create: {
     *     // ... data to create a QueueEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueueEntry we want to update
     *   }
     * })
     */
    upsert<T extends QueueEntryUpsertArgs>(args: SelectSubset<T, QueueEntryUpsertArgs<ExtArgs>>): Prisma__QueueEntryClient<$Result.GetResult<Prisma.$QueueEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QueueEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryCountArgs} args - Arguments to filter QueueEntries to count.
     * @example
     * // Count the number of QueueEntries
     * const count = await prisma.queueEntry.count({
     *   where: {
     *     // ... the filter for the QueueEntries we want to count
     *   }
     * })
    **/
    count<T extends QueueEntryCountArgs>(
      args?: Subset<T, QueueEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueueEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueueEntryAggregateArgs>(args: Subset<T, QueueEntryAggregateArgs>): Prisma.PrismaPromise<GetQueueEntryAggregateType<T>>

    /**
     * Group by QueueEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueEntryGroupByArgs} args - Group by arguments.
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
      T extends QueueEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueEntryGroupByArgs['orderBy'] }
        : { orderBy?: QueueEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueueEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueueEntry model
   */
  readonly fields: QueueEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueueEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the QueueEntry model
   */ 
  interface QueueEntryFieldRefs {
    readonly id: FieldRef<"QueueEntry", 'String'>
    readonly salonId: FieldRef<"QueueEntry", 'String'>
    readonly bookingId: FieldRef<"QueueEntry", 'String'>
    readonly position: FieldRef<"QueueEntry", 'Int'>
    readonly estimatedWait: FieldRef<"QueueEntry", 'Int'>
    readonly checkedIn: FieldRef<"QueueEntry", 'Boolean'>
    readonly joinedAt: FieldRef<"QueueEntry", 'DateTime'>
    readonly servedAt: FieldRef<"QueueEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QueueEntry findUnique
   */
  export type QueueEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which QueueEntry to fetch.
     */
    where: QueueEntryWhereUniqueInput
  }

  /**
   * QueueEntry findUniqueOrThrow
   */
  export type QueueEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which QueueEntry to fetch.
     */
    where: QueueEntryWhereUniqueInput
  }

  /**
   * QueueEntry findFirst
   */
  export type QueueEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which QueueEntry to fetch.
     */
    where?: QueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueEntries to fetch.
     */
    orderBy?: QueueEntryOrderByWithRelationInput | QueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueEntries.
     */
    cursor?: QueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueEntries.
     */
    distinct?: QueueEntryScalarFieldEnum | QueueEntryScalarFieldEnum[]
  }

  /**
   * QueueEntry findFirstOrThrow
   */
  export type QueueEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which QueueEntry to fetch.
     */
    where?: QueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueEntries to fetch.
     */
    orderBy?: QueueEntryOrderByWithRelationInput | QueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueEntries.
     */
    cursor?: QueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueEntries.
     */
    distinct?: QueueEntryScalarFieldEnum | QueueEntryScalarFieldEnum[]
  }

  /**
   * QueueEntry findMany
   */
  export type QueueEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which QueueEntries to fetch.
     */
    where?: QueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueEntries to fetch.
     */
    orderBy?: QueueEntryOrderByWithRelationInput | QueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueueEntries.
     */
    cursor?: QueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueEntries.
     */
    skip?: number
    distinct?: QueueEntryScalarFieldEnum | QueueEntryScalarFieldEnum[]
  }

  /**
   * QueueEntry create
   */
  export type QueueEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a QueueEntry.
     */
    data: XOR<QueueEntryCreateInput, QueueEntryUncheckedCreateInput>
  }

  /**
   * QueueEntry createMany
   */
  export type QueueEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueueEntries.
     */
    data: QueueEntryCreateManyInput | QueueEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueueEntry createManyAndReturn
   */
  export type QueueEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QueueEntries.
     */
    data: QueueEntryCreateManyInput | QueueEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueueEntry update
   */
  export type QueueEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a QueueEntry.
     */
    data: XOR<QueueEntryUpdateInput, QueueEntryUncheckedUpdateInput>
    /**
     * Choose, which QueueEntry to update.
     */
    where: QueueEntryWhereUniqueInput
  }

  /**
   * QueueEntry updateMany
   */
  export type QueueEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueueEntries.
     */
    data: XOR<QueueEntryUpdateManyMutationInput, QueueEntryUncheckedUpdateManyInput>
    /**
     * Filter which QueueEntries to update
     */
    where?: QueueEntryWhereInput
  }

  /**
   * QueueEntry upsert
   */
  export type QueueEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the QueueEntry to update in case it exists.
     */
    where: QueueEntryWhereUniqueInput
    /**
     * In case the QueueEntry found by the `where` argument doesn't exist, create a new QueueEntry with this data.
     */
    create: XOR<QueueEntryCreateInput, QueueEntryUncheckedCreateInput>
    /**
     * In case the QueueEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueEntryUpdateInput, QueueEntryUncheckedUpdateInput>
  }

  /**
   * QueueEntry delete
   */
  export type QueueEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
    /**
     * Filter which QueueEntry to delete.
     */
    where: QueueEntryWhereUniqueInput
  }

  /**
   * QueueEntry deleteMany
   */
  export type QueueEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueEntries to delete
     */
    where?: QueueEntryWhereInput
  }

  /**
   * QueueEntry without action
   */
  export type QueueEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueEntry
     */
    select?: QueueEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueEntryInclude<ExtArgs> | null
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
    phone: 'phone',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpCodeScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    code: 'code',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceMonthly: 'priceMonthly',
    maxBarbers: 'maxBarbers',
    maxBookings: 'maxBookings',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const SalonScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    planId: 'planId',
    slug: 'slug',
    name: 'name',
    phone: 'phone',
    address: 'address',
    mapsUrl: 'mapsUrl',
    latitude: 'latitude',
    longitude: 'longitude',
    coverImage: 'coverImage',
    logoImage: 'logoImage',
    status: 'status',
    subscription: 'subscription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalonScalarFieldEnum = (typeof SalonScalarFieldEnum)[keyof typeof SalonScalarFieldEnum]


  export const SalonPhotoScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    url: 'url',
    altText: 'altText',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type SalonPhotoScalarFieldEnum = (typeof SalonPhotoScalarFieldEnum)[keyof typeof SalonPhotoScalarFieldEnum]


  export const OpeningHoursScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isOpen: 'isOpen'
  };

  export type OpeningHoursScalarFieldEnum = (typeof OpeningHoursScalarFieldEnum)[keyof typeof OpeningHoursScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    name: 'name',
    description: 'description',
    price: 'price',
    durationMins: 'durationMins',
    icon: 'icon',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const BarberScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    userId: 'userId',
    name: 'name',
    title: 'title',
    photoUrl: 'photoUrl',
    rating: 'rating',
    isActive: 'isActive',
    isOnline: 'isOnline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarberScalarFieldEnum = (typeof BarberScalarFieldEnum)[keyof typeof BarberScalarFieldEnum]


  export const BarberServiceScalarFieldEnum: {
    barberId: 'barberId',
    serviceId: 'serviceId'
  };

  export type BarberServiceScalarFieldEnum = (typeof BarberServiceScalarFieldEnum)[keyof typeof BarberServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    customerId: 'customerId',
    barberId: 'barberId',
    serviceId: 'serviceId',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    serviceName: 'serviceName',
    servicePrice: 'servicePrice',
    appointmentAt: 'appointmentAt',
    durationMins: 'durationMins',
    price: 'price',
    status: 'status',
    type: 'type',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const QueueEntryScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    bookingId: 'bookingId',
    position: 'position',
    estimatedWait: 'estimatedWait',
    checkedIn: 'checkedIn',
    joinedAt: 'joinedAt',
    servedAt: 'servedAt'
  };

  export type QueueEntryScalarFieldEnum = (typeof QueueEntryScalarFieldEnum)[keyof typeof QueueEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubscriptionTier'
   */
  export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>
    


  /**
   * Reference to a field of type 'SubscriptionTier[]'
   */
  export type ListEnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'SalonStatus'
   */
  export type EnumSalonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalonStatus'>
    


  /**
   * Reference to a field of type 'SalonStatus[]'
   */
  export type ListEnumSalonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalonStatus[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'BookingType'
   */
  export type EnumBookingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingType'>
    


  /**
   * Reference to a field of type 'BookingType[]'
   */
  export type ListEnumBookingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingType[]'>
    


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
    id?: UuidFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedSalons?: SalonListRelationFilter
    barbers?: BarberListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedSalons?: SalonOrderByRelationAggregateInput
    barbers?: BarberOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedSalons?: SalonListRelationFilter
    barbers?: BarberListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpCodeWhereInput = {
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    id?: UuidFilter<"OtpCode"> | string
    phone?: StringFilter<"OtpCode"> | string
    code?: StringFilter<"OtpCode"> | string
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    used?: BoolFilter<"OtpCode"> | boolean
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
  }

  export type OtpCodeOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpCodeWhereInput | OtpCodeWhereInput[]
    OR?: OtpCodeWhereInput[]
    NOT?: OtpCodeWhereInput | OtpCodeWhereInput[]
    phone?: StringFilter<"OtpCode"> | string
    code?: StringFilter<"OtpCode"> | string
    expiresAt?: DateTimeFilter<"OtpCode"> | Date | string
    used?: BoolFilter<"OtpCode"> | boolean
    createdAt?: DateTimeFilter<"OtpCode"> | Date | string
  }, "id">

  export type OtpCodeOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCodeCountOrderByAggregateInput
    _max?: OtpCodeMaxOrderByAggregateInput
    _min?: OtpCodeMinOrderByAggregateInput
  }

  export type OtpCodeScalarWhereWithAggregatesInput = {
    AND?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    OR?: OtpCodeScalarWhereWithAggregatesInput[]
    NOT?: OtpCodeScalarWhereWithAggregatesInput | OtpCodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OtpCode"> | string
    phone?: StringWithAggregatesFilter<"OtpCode"> | string
    code?: StringWithAggregatesFilter<"OtpCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
    used?: BoolWithAggregatesFilter<"OtpCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpCode"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: UuidFilter<"SubscriptionPlan"> | string
    name?: EnumSubscriptionTierFilter<"SubscriptionPlan"> | $Enums.SubscriptionTier
    priceMonthly?: DecimalNullableFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: IntNullableFilter<"SubscriptionPlan"> | number | null
    maxBookings?: IntNullableFilter<"SubscriptionPlan"> | number | null
    features?: JsonFilter<"SubscriptionPlan">
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    salons?: SalonListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceMonthly?: SortOrderInput | SortOrder
    maxBarbers?: SortOrderInput | SortOrder
    maxBookings?: SortOrderInput | SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salons?: SalonOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.SubscriptionTier
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    priceMonthly?: DecimalNullableFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: IntNullableFilter<"SubscriptionPlan"> | number | null
    maxBookings?: IntNullableFilter<"SubscriptionPlan"> | number | null
    features?: JsonFilter<"SubscriptionPlan">
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    salons?: SalonListRelationFilter
  }, "id" | "name">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceMonthly?: SortOrderInput | SortOrder
    maxBarbers?: SortOrderInput | SortOrder
    maxBookings?: SortOrderInput | SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: EnumSubscriptionTierWithAggregatesFilter<"SubscriptionPlan"> | $Enums.SubscriptionTier
    priceMonthly?: DecimalNullableWithAggregatesFilter<"SubscriptionPlan"> | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: IntNullableWithAggregatesFilter<"SubscriptionPlan"> | number | null
    maxBookings?: IntNullableWithAggregatesFilter<"SubscriptionPlan"> | number | null
    features?: JsonWithAggregatesFilter<"SubscriptionPlan">
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type SalonWhereInput = {
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    id?: UuidFilter<"Salon"> | string
    ownerId?: UuidNullableFilter<"Salon"> | string | null
    planId?: UuidNullableFilter<"Salon"> | string | null
    slug?: StringFilter<"Salon"> | string
    name?: StringFilter<"Salon"> | string
    phone?: StringNullableFilter<"Salon"> | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    mapsUrl?: StringNullableFilter<"Salon"> | string | null
    latitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    coverImage?: StringNullableFilter<"Salon"> | string | null
    logoImage?: StringNullableFilter<"Salon"> | string | null
    status?: EnumSalonStatusFilter<"Salon"> | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFilter<"Salon"> | $Enums.SubscriptionTier
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    plan?: XOR<SubscriptionPlanNullableRelationFilter, SubscriptionPlanWhereInput> | null
    photos?: SalonPhotoListRelationFilter
    openingHours?: OpeningHoursListRelationFilter
    services?: ServiceListRelationFilter
    barbers?: BarberListRelationFilter
    bookings?: BookingListRelationFilter
    queueEntries?: QueueEntryListRelationFilter
  }

  export type SalonOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    logoImage?: SortOrderInput | SortOrder
    status?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    plan?: SubscriptionPlanOrderByWithRelationInput
    photos?: SalonPhotoOrderByRelationAggregateInput
    openingHours?: OpeningHoursOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    barbers?: BarberOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    queueEntries?: QueueEntryOrderByRelationAggregateInput
  }

  export type SalonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    ownerId?: UuidNullableFilter<"Salon"> | string | null
    planId?: UuidNullableFilter<"Salon"> | string | null
    name?: StringFilter<"Salon"> | string
    phone?: StringNullableFilter<"Salon"> | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    mapsUrl?: StringNullableFilter<"Salon"> | string | null
    latitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    coverImage?: StringNullableFilter<"Salon"> | string | null
    logoImage?: StringNullableFilter<"Salon"> | string | null
    status?: EnumSalonStatusFilter<"Salon"> | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFilter<"Salon"> | $Enums.SubscriptionTier
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    plan?: XOR<SubscriptionPlanNullableRelationFilter, SubscriptionPlanWhereInput> | null
    photos?: SalonPhotoListRelationFilter
    openingHours?: OpeningHoursListRelationFilter
    services?: ServiceListRelationFilter
    barbers?: BarberListRelationFilter
    bookings?: BookingListRelationFilter
    queueEntries?: QueueEntryListRelationFilter
  }, "id" | "slug">

  export type SalonOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    logoImage?: SortOrderInput | SortOrder
    status?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalonCountOrderByAggregateInput
    _avg?: SalonAvgOrderByAggregateInput
    _max?: SalonMaxOrderByAggregateInput
    _min?: SalonMinOrderByAggregateInput
    _sum?: SalonSumOrderByAggregateInput
  }

  export type SalonScalarWhereWithAggregatesInput = {
    AND?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    OR?: SalonScalarWhereWithAggregatesInput[]
    NOT?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Salon"> | string
    ownerId?: UuidNullableWithAggregatesFilter<"Salon"> | string | null
    planId?: UuidNullableWithAggregatesFilter<"Salon"> | string | null
    slug?: StringWithAggregatesFilter<"Salon"> | string
    name?: StringWithAggregatesFilter<"Salon"> | string
    phone?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    address?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    mapsUrl?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    logoImage?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    status?: EnumSalonStatusWithAggregatesFilter<"Salon"> | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierWithAggregatesFilter<"Salon"> | $Enums.SubscriptionTier
    createdAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
  }

  export type SalonPhotoWhereInput = {
    AND?: SalonPhotoWhereInput | SalonPhotoWhereInput[]
    OR?: SalonPhotoWhereInput[]
    NOT?: SalonPhotoWhereInput | SalonPhotoWhereInput[]
    id?: UuidFilter<"SalonPhoto"> | string
    salonId?: UuidFilter<"SalonPhoto"> | string
    url?: StringFilter<"SalonPhoto"> | string
    altText?: StringNullableFilter<"SalonPhoto"> | string | null
    sortOrder?: IntFilter<"SalonPhoto"> | number
    createdAt?: DateTimeFilter<"SalonPhoto"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
  }

  export type SalonPhotoOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type SalonPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalonPhotoWhereInput | SalonPhotoWhereInput[]
    OR?: SalonPhotoWhereInput[]
    NOT?: SalonPhotoWhereInput | SalonPhotoWhereInput[]
    salonId?: UuidFilter<"SalonPhoto"> | string
    url?: StringFilter<"SalonPhoto"> | string
    altText?: StringNullableFilter<"SalonPhoto"> | string | null
    sortOrder?: IntFilter<"SalonPhoto"> | number
    createdAt?: DateTimeFilter<"SalonPhoto"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
  }, "id">

  export type SalonPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: SalonPhotoCountOrderByAggregateInput
    _avg?: SalonPhotoAvgOrderByAggregateInput
    _max?: SalonPhotoMaxOrderByAggregateInput
    _min?: SalonPhotoMinOrderByAggregateInput
    _sum?: SalonPhotoSumOrderByAggregateInput
  }

  export type SalonPhotoScalarWhereWithAggregatesInput = {
    AND?: SalonPhotoScalarWhereWithAggregatesInput | SalonPhotoScalarWhereWithAggregatesInput[]
    OR?: SalonPhotoScalarWhereWithAggregatesInput[]
    NOT?: SalonPhotoScalarWhereWithAggregatesInput | SalonPhotoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SalonPhoto"> | string
    salonId?: UuidWithAggregatesFilter<"SalonPhoto"> | string
    url?: StringWithAggregatesFilter<"SalonPhoto"> | string
    altText?: StringNullableWithAggregatesFilter<"SalonPhoto"> | string | null
    sortOrder?: IntWithAggregatesFilter<"SalonPhoto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SalonPhoto"> | Date | string
  }

  export type OpeningHoursWhereInput = {
    AND?: OpeningHoursWhereInput | OpeningHoursWhereInput[]
    OR?: OpeningHoursWhereInput[]
    NOT?: OpeningHoursWhereInput | OpeningHoursWhereInput[]
    id?: UuidFilter<"OpeningHours"> | string
    salonId?: UuidFilter<"OpeningHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"OpeningHours"> | $Enums.DayOfWeek
    openTime?: StringNullableFilter<"OpeningHours"> | string | null
    closeTime?: StringNullableFilter<"OpeningHours"> | string | null
    isOpen?: BoolFilter<"OpeningHours"> | boolean
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
  }

  export type OpeningHoursOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    isOpen?: SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type OpeningHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    salonId_dayOfWeek?: OpeningHoursSalonIdDayOfWeekCompoundUniqueInput
    AND?: OpeningHoursWhereInput | OpeningHoursWhereInput[]
    OR?: OpeningHoursWhereInput[]
    NOT?: OpeningHoursWhereInput | OpeningHoursWhereInput[]
    salonId?: UuidFilter<"OpeningHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"OpeningHours"> | $Enums.DayOfWeek
    openTime?: StringNullableFilter<"OpeningHours"> | string | null
    closeTime?: StringNullableFilter<"OpeningHours"> | string | null
    isOpen?: BoolFilter<"OpeningHours"> | boolean
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
  }, "id" | "salonId_dayOfWeek">

  export type OpeningHoursOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    isOpen?: SortOrder
    _count?: OpeningHoursCountOrderByAggregateInput
    _max?: OpeningHoursMaxOrderByAggregateInput
    _min?: OpeningHoursMinOrderByAggregateInput
  }

  export type OpeningHoursScalarWhereWithAggregatesInput = {
    AND?: OpeningHoursScalarWhereWithAggregatesInput | OpeningHoursScalarWhereWithAggregatesInput[]
    OR?: OpeningHoursScalarWhereWithAggregatesInput[]
    NOT?: OpeningHoursScalarWhereWithAggregatesInput | OpeningHoursScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OpeningHours"> | string
    salonId?: UuidWithAggregatesFilter<"OpeningHours"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"OpeningHours"> | $Enums.DayOfWeek
    openTime?: StringNullableWithAggregatesFilter<"OpeningHours"> | string | null
    closeTime?: StringNullableWithAggregatesFilter<"OpeningHours"> | string | null
    isOpen?: BoolWithAggregatesFilter<"OpeningHours"> | boolean
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: UuidFilter<"Service"> | string
    salonId?: UuidFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMins?: IntFilter<"Service"> | number
    icon?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    barberServices?: BarberServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationMins?: SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    barberServices?: BarberServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    salonId?: UuidFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMins?: IntFilter<"Service"> | number
    icon?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    barberServices?: BarberServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationMins?: SortOrder
    icon?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Service"> | string
    salonId?: UuidWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMins?: IntWithAggregatesFilter<"Service"> | number
    icon?: StringNullableWithAggregatesFilter<"Service"> | string | null
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type BarberWhereInput = {
    AND?: BarberWhereInput | BarberWhereInput[]
    OR?: BarberWhereInput[]
    NOT?: BarberWhereInput | BarberWhereInput[]
    id?: UuidFilter<"Barber"> | string
    salonId?: UuidFilter<"Barber"> | string
    userId?: UuidNullableFilter<"Barber"> | string | null
    name?: StringFilter<"Barber"> | string
    title?: StringNullableFilter<"Barber"> | string | null
    photoUrl?: StringNullableFilter<"Barber"> | string | null
    rating?: DecimalFilter<"Barber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Barber"> | boolean
    isOnline?: BoolFilter<"Barber"> | boolean
    createdAt?: DateTimeFilter<"Barber"> | Date | string
    updatedAt?: DateTimeFilter<"Barber"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    barberServices?: BarberServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type BarberOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    barberServices?: BarberServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BarberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarberWhereInput | BarberWhereInput[]
    OR?: BarberWhereInput[]
    NOT?: BarberWhereInput | BarberWhereInput[]
    salonId?: UuidFilter<"Barber"> | string
    userId?: UuidNullableFilter<"Barber"> | string | null
    name?: StringFilter<"Barber"> | string
    title?: StringNullableFilter<"Barber"> | string | null
    photoUrl?: StringNullableFilter<"Barber"> | string | null
    rating?: DecimalFilter<"Barber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Barber"> | boolean
    isOnline?: BoolFilter<"Barber"> | boolean
    createdAt?: DateTimeFilter<"Barber"> | Date | string
    updatedAt?: DateTimeFilter<"Barber"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    barberServices?: BarberServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type BarberOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarberCountOrderByAggregateInput
    _avg?: BarberAvgOrderByAggregateInput
    _max?: BarberMaxOrderByAggregateInput
    _min?: BarberMinOrderByAggregateInput
    _sum?: BarberSumOrderByAggregateInput
  }

  export type BarberScalarWhereWithAggregatesInput = {
    AND?: BarberScalarWhereWithAggregatesInput | BarberScalarWhereWithAggregatesInput[]
    OR?: BarberScalarWhereWithAggregatesInput[]
    NOT?: BarberScalarWhereWithAggregatesInput | BarberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Barber"> | string
    salonId?: UuidWithAggregatesFilter<"Barber"> | string
    userId?: UuidNullableWithAggregatesFilter<"Barber"> | string | null
    name?: StringWithAggregatesFilter<"Barber"> | string
    title?: StringNullableWithAggregatesFilter<"Barber"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Barber"> | string | null
    rating?: DecimalWithAggregatesFilter<"Barber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Barber"> | boolean
    isOnline?: BoolWithAggregatesFilter<"Barber"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Barber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Barber"> | Date | string
  }

  export type BarberServiceWhereInput = {
    AND?: BarberServiceWhereInput | BarberServiceWhereInput[]
    OR?: BarberServiceWhereInput[]
    NOT?: BarberServiceWhereInput | BarberServiceWhereInput[]
    barberId?: UuidFilter<"BarberService"> | string
    serviceId?: UuidFilter<"BarberService"> | string
    barber?: XOR<BarberRelationFilter, BarberWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }

  export type BarberServiceOrderByWithRelationInput = {
    barberId?: SortOrder
    serviceId?: SortOrder
    barber?: BarberOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type BarberServiceWhereUniqueInput = Prisma.AtLeast<{
    barberId_serviceId?: BarberServiceBarberIdServiceIdCompoundUniqueInput
    AND?: BarberServiceWhereInput | BarberServiceWhereInput[]
    OR?: BarberServiceWhereInput[]
    NOT?: BarberServiceWhereInput | BarberServiceWhereInput[]
    barberId?: UuidFilter<"BarberService"> | string
    serviceId?: UuidFilter<"BarberService"> | string
    barber?: XOR<BarberRelationFilter, BarberWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }, "barberId_serviceId">

  export type BarberServiceOrderByWithAggregationInput = {
    barberId?: SortOrder
    serviceId?: SortOrder
    _count?: BarberServiceCountOrderByAggregateInput
    _max?: BarberServiceMaxOrderByAggregateInput
    _min?: BarberServiceMinOrderByAggregateInput
  }

  export type BarberServiceScalarWhereWithAggregatesInput = {
    AND?: BarberServiceScalarWhereWithAggregatesInput | BarberServiceScalarWhereWithAggregatesInput[]
    OR?: BarberServiceScalarWhereWithAggregatesInput[]
    NOT?: BarberServiceScalarWhereWithAggregatesInput | BarberServiceScalarWhereWithAggregatesInput[]
    barberId?: UuidWithAggregatesFilter<"BarberService"> | string
    serviceId?: UuidWithAggregatesFilter<"BarberService"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: UuidFilter<"Booking"> | string
    salonId?: UuidFilter<"Booking"> | string
    customerId?: UuidNullableFilter<"Booking"> | string | null
    barberId?: UuidNullableFilter<"Booking"> | string | null
    serviceId?: UuidNullableFilter<"Booking"> | string | null
    customerName?: StringNullableFilter<"Booking"> | string | null
    customerPhone?: StringNullableFilter<"Booking"> | string | null
    serviceName?: StringNullableFilter<"Booking"> | string | null
    servicePrice?: DecimalNullableFilter<"Booking"> | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFilter<"Booking"> | Date | string
    durationMins?: IntFilter<"Booking"> | number
    price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    type?: EnumBookingTypeFilter<"Booking"> | $Enums.BookingType
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    customer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    barber?: XOR<BarberNullableRelationFilter, BarberWhereInput> | null
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
    queueEntry?: XOR<QueueEntryNullableRelationFilter, QueueEntryWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    barberId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    serviceName?: SortOrderInput | SortOrder
    servicePrice?: SortOrderInput | SortOrder
    appointmentAt?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    customer?: UserOrderByWithRelationInput
    barber?: BarberOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    queueEntry?: QueueEntryOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    salonId?: UuidFilter<"Booking"> | string
    customerId?: UuidNullableFilter<"Booking"> | string | null
    barberId?: UuidNullableFilter<"Booking"> | string | null
    serviceId?: UuidNullableFilter<"Booking"> | string | null
    customerName?: StringNullableFilter<"Booking"> | string | null
    customerPhone?: StringNullableFilter<"Booking"> | string | null
    serviceName?: StringNullableFilter<"Booking"> | string | null
    servicePrice?: DecimalNullableFilter<"Booking"> | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFilter<"Booking"> | Date | string
    durationMins?: IntFilter<"Booking"> | number
    price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    type?: EnumBookingTypeFilter<"Booking"> | $Enums.BookingType
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    customer?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    barber?: XOR<BarberNullableRelationFilter, BarberWhereInput> | null
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
    queueEntry?: XOR<QueueEntryNullableRelationFilter, QueueEntryWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    barberId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    serviceName?: SortOrderInput | SortOrder
    servicePrice?: SortOrderInput | SortOrder
    appointmentAt?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Booking"> | string
    salonId?: UuidWithAggregatesFilter<"Booking"> | string
    customerId?: UuidNullableWithAggregatesFilter<"Booking"> | string | null
    barberId?: UuidNullableWithAggregatesFilter<"Booking"> | string | null
    serviceId?: UuidNullableWithAggregatesFilter<"Booking"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    customerPhone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    serviceName?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    servicePrice?: DecimalNullableWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    durationMins?: IntWithAggregatesFilter<"Booking"> | number
    price?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    type?: EnumBookingTypeWithAggregatesFilter<"Booking"> | $Enums.BookingType
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type QueueEntryWhereInput = {
    AND?: QueueEntryWhereInput | QueueEntryWhereInput[]
    OR?: QueueEntryWhereInput[]
    NOT?: QueueEntryWhereInput | QueueEntryWhereInput[]
    id?: UuidFilter<"QueueEntry"> | string
    salonId?: UuidFilter<"QueueEntry"> | string
    bookingId?: UuidFilter<"QueueEntry"> | string
    position?: IntFilter<"QueueEntry"> | number
    estimatedWait?: IntNullableFilter<"QueueEntry"> | number | null
    checkedIn?: BoolFilter<"QueueEntry"> | boolean
    joinedAt?: DateTimeFilter<"QueueEntry"> | Date | string
    servedAt?: DateTimeNullableFilter<"QueueEntry"> | Date | string | null
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }

  export type QueueEntryOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    bookingId?: SortOrder
    position?: SortOrder
    estimatedWait?: SortOrderInput | SortOrder
    checkedIn?: SortOrder
    joinedAt?: SortOrder
    servedAt?: SortOrderInput | SortOrder
    salon?: SalonOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type QueueEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    salonId_position?: QueueEntrySalonIdPositionCompoundUniqueInput
    AND?: QueueEntryWhereInput | QueueEntryWhereInput[]
    OR?: QueueEntryWhereInput[]
    NOT?: QueueEntryWhereInput | QueueEntryWhereInput[]
    salonId?: UuidFilter<"QueueEntry"> | string
    position?: IntFilter<"QueueEntry"> | number
    estimatedWait?: IntNullableFilter<"QueueEntry"> | number | null
    checkedIn?: BoolFilter<"QueueEntry"> | boolean
    joinedAt?: DateTimeFilter<"QueueEntry"> | Date | string
    servedAt?: DateTimeNullableFilter<"QueueEntry"> | Date | string | null
    salon?: XOR<SalonRelationFilter, SalonWhereInput>
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }, "id" | "bookingId" | "salonId_position">

  export type QueueEntryOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    bookingId?: SortOrder
    position?: SortOrder
    estimatedWait?: SortOrderInput | SortOrder
    checkedIn?: SortOrder
    joinedAt?: SortOrder
    servedAt?: SortOrderInput | SortOrder
    _count?: QueueEntryCountOrderByAggregateInput
    _avg?: QueueEntryAvgOrderByAggregateInput
    _max?: QueueEntryMaxOrderByAggregateInput
    _min?: QueueEntryMinOrderByAggregateInput
    _sum?: QueueEntrySumOrderByAggregateInput
  }

  export type QueueEntryScalarWhereWithAggregatesInput = {
    AND?: QueueEntryScalarWhereWithAggregatesInput | QueueEntryScalarWhereWithAggregatesInput[]
    OR?: QueueEntryScalarWhereWithAggregatesInput[]
    NOT?: QueueEntryScalarWhereWithAggregatesInput | QueueEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"QueueEntry"> | string
    salonId?: UuidWithAggregatesFilter<"QueueEntry"> | string
    bookingId?: UuidWithAggregatesFilter<"QueueEntry"> | string
    position?: IntWithAggregatesFilter<"QueueEntry"> | number
    estimatedWait?: IntNullableWithAggregatesFilter<"QueueEntry"> | number | null
    checkedIn?: BoolWithAggregatesFilter<"QueueEntry"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"QueueEntry"> | Date | string
    servedAt?: DateTimeNullableWithAggregatesFilter<"QueueEntry"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonCreateNestedManyWithoutOwnerInput
    barbers?: BarberCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonUncheckedCreateNestedManyWithoutOwnerInput
    barbers?: BarberUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUpdateManyWithoutOwnerNestedInput
    barbers?: BarberUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUncheckedUpdateManyWithoutOwnerNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpCodeUncheckedCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeCreateManyInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: $Enums.SubscriptionTier
    priceMonthly?: Decimal | DecimalJsLike | number | string | null
    maxBarbers?: number | null
    maxBookings?: number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    salons?: SalonCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: $Enums.SubscriptionTier
    priceMonthly?: Decimal | DecimalJsLike | number | string | null
    maxBarbers?: number | null
    maxBookings?: number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    salons?: SalonUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salons?: SalonUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salons?: SalonUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: $Enums.SubscriptionTier
    priceMonthly?: Decimal | DecimalJsLike | number | string | null
    maxBarbers?: number | null
    maxBookings?: number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateManyInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoCreateInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
    salon: SalonCreateNestedOneWithoutPhotosInput
  }

  export type SalonPhotoUncheckedCreateInput = {
    id?: string
    salonId: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type SalonPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type SalonPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoCreateManyInput = {
    id?: string
    salonId: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type SalonPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpeningHoursCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
    salon: SalonCreateNestedOneWithoutOpeningHoursInput
  }

  export type OpeningHoursUncheckedCreateInput = {
    id?: string
    salonId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
  }

  export type OpeningHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    salon?: SalonUpdateOneRequiredWithoutOpeningHoursNestedInput
  }

  export type OpeningHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpeningHoursCreateManyInput = {
    id?: string
    salonId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
  }

  export type OpeningHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpeningHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutServicesInput
    barberServices?: BarberServiceCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    salonId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
    barberServices?: BarberServiceUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    salonId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberCreateInput = {
    id?: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBarbersInput
    user?: UserCreateNestedOneWithoutBarbersInput
    barberServices?: BarberServiceCreateNestedManyWithoutBarberInput
    bookings?: BookingCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateInput = {
    id?: string
    salonId: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutBarberInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBarbersNestedInput
    user?: UserUpdateOneWithoutBarbersNestedInput
    barberServices?: BarberServiceUpdateManyWithoutBarberNestedInput
    bookings?: BookingUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutBarberNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarberCreateManyInput = {
    id?: string
    salonId: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberServiceCreateInput = {
    barber: BarberCreateNestedOneWithoutBarberServicesInput
    service: ServiceCreateNestedOneWithoutBarberServicesInput
  }

  export type BarberServiceUncheckedCreateInput = {
    barberId: string
    serviceId: string
  }

  export type BarberServiceUpdateInput = {
    barber?: BarberUpdateOneRequiredWithoutBarberServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutBarberServicesNestedInput
  }

  export type BarberServiceUncheckedUpdateInput = {
    barberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type BarberServiceCreateManyInput = {
    barberId: string
    serviceId: string
  }

  export type BarberServiceUpdateManyMutationInput = {

  }

  export type BarberServiceUncheckedUpdateManyInput = {
    barberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBookingsInput
    customer?: UserCreateNestedOneWithoutBookingsInput
    barber?: BarberCreateNestedOneWithoutBookingsInput
    service?: ServiceCreateNestedOneWithoutBookingsInput
    queueEntry?: QueueEntryCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    salonId: string
    customerId?: string | null
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: QueueEntryUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBookingsNestedInput
    customer?: UserUpdateOneWithoutBookingsNestedInput
    barber?: BarberUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneWithoutBookingsNestedInput
    queueEntry?: QueueEntryUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: QueueEntryUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    salonId: string
    customerId?: string | null
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueEntryCreateInput = {
    id?: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
    salon: SalonCreateNestedOneWithoutQueueEntriesInput
    booking: BookingCreateNestedOneWithoutQueueEntryInput
  }

  export type QueueEntryUncheckedCreateInput = {
    id?: string
    salonId: string
    bookingId: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
  }

  export type QueueEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salon?: SalonUpdateOneRequiredWithoutQueueEntriesNestedInput
    booking?: BookingUpdateOneRequiredWithoutQueueEntryNestedInput
  }

  export type QueueEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QueueEntryCreateManyInput = {
    id?: string
    salonId: string
    bookingId: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
  }

  export type QueueEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QueueEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type SalonListRelationFilter = {
    every?: SalonWhereInput
    some?: SalonWhereInput
    none?: SalonWhereInput
  }

  export type BarberListRelationFilter = {
    every?: BarberWhereInput
    some?: BarberWhereInput
    none?: BarberWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OtpCodeCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpCodeMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceMonthly?: SortOrder
    maxBarbers?: SortOrder
    maxBookings?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    priceMonthly?: SortOrder
    maxBarbers?: SortOrder
    maxBookings?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceMonthly?: SortOrder
    maxBarbers?: SortOrder
    maxBookings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceMonthly?: SortOrder
    maxBarbers?: SortOrder
    maxBookings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    priceMonthly?: SortOrder
    maxBarbers?: SortOrder
    maxBookings?: SortOrder
  }

  export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSalonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SalonStatus | EnumSalonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalonStatusFilter<$PrismaModel> | $Enums.SalonStatus
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SubscriptionPlanNullableRelationFilter = {
    is?: SubscriptionPlanWhereInput | null
    isNot?: SubscriptionPlanWhereInput | null
  }

  export type SalonPhotoListRelationFilter = {
    every?: SalonPhotoWhereInput
    some?: SalonPhotoWhereInput
    none?: SalonPhotoWhereInput
  }

  export type OpeningHoursListRelationFilter = {
    every?: OpeningHoursWhereInput
    some?: OpeningHoursWhereInput
    none?: OpeningHoursWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type QueueEntryListRelationFilter = {
    every?: QueueEntryWhereInput
    some?: QueueEntryWhereInput
    none?: QueueEntryWhereInput
  }

  export type SalonPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpeningHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueueEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalonCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    planId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    mapsUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverImage?: SortOrder
    logoImage?: SortOrder
    status?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SalonMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    planId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    mapsUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverImage?: SortOrder
    logoImage?: SortOrder
    status?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    planId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    mapsUrl?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverImage?: SortOrder
    logoImage?: SortOrder
    status?: SortOrder
    subscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalonSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSalonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalonStatus | EnumSalonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalonStatusWithAggregatesFilter<$PrismaModel> | $Enums.SalonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalonStatusFilter<$PrismaModel>
    _max?: NestedEnumSalonStatusFilter<$PrismaModel>
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

  export type SalonRelationFilter = {
    is?: SalonWhereInput
    isNot?: SalonWhereInput
  }

  export type SalonPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonPhotoAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type SalonPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonPhotoSumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type OpeningHoursSalonIdDayOfWeekCompoundUniqueInput = {
    salonId: string
    dayOfWeek: $Enums.DayOfWeek
  }

  export type OpeningHoursCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
  }

  export type OpeningHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
  }

  export type OpeningHoursMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BarberServiceListRelationFilter = {
    every?: BarberServiceWhereInput
    some?: BarberServiceWhereInput
    none?: BarberServiceWhereInput
  }

  export type BarberServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMins?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    durationMins?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMins?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMins?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    durationMins?: SortOrder
    sortOrder?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BarberCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarberAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BarberMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarberMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    rating?: SortOrder
    isActive?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarberSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BarberRelationFilter = {
    is?: BarberWhereInput
    isNot?: BarberWhereInput
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type BarberServiceBarberIdServiceIdCompoundUniqueInput = {
    barberId: string
    serviceId: string
  }

  export type BarberServiceCountOrderByAggregateInput = {
    barberId?: SortOrder
    serviceId?: SortOrder
  }

  export type BarberServiceMaxOrderByAggregateInput = {
    barberId?: SortOrder
    serviceId?: SortOrder
  }

  export type BarberServiceMinOrderByAggregateInput = {
    barberId?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumBookingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeFilter<$PrismaModel> | $Enums.BookingType
  }

  export type BarberNullableRelationFilter = {
    is?: BarberWhereInput | null
    isNot?: BarberWhereInput | null
  }

  export type ServiceNullableRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type QueueEntryNullableRelationFilter = {
    is?: QueueEntryWhereInput | null
    isNot?: QueueEntryWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    barberId?: SortOrder
    serviceId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    serviceName?: SortOrder
    servicePrice?: SortOrder
    appointmentAt?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    servicePrice?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    barberId?: SortOrder
    serviceId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    serviceName?: SortOrder
    servicePrice?: SortOrder
    appointmentAt?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    customerId?: SortOrder
    barberId?: SortOrder
    serviceId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    serviceName?: SortOrder
    servicePrice?: SortOrder
    appointmentAt?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
    status?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    servicePrice?: SortOrder
    durationMins?: SortOrder
    price?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumBookingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingTypeFilter<$PrismaModel>
    _max?: NestedEnumBookingTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type QueueEntrySalonIdPositionCompoundUniqueInput = {
    salonId: string
    position: number
  }

  export type QueueEntryCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    bookingId?: SortOrder
    position?: SortOrder
    estimatedWait?: SortOrder
    checkedIn?: SortOrder
    joinedAt?: SortOrder
    servedAt?: SortOrder
  }

  export type QueueEntryAvgOrderByAggregateInput = {
    position?: SortOrder
    estimatedWait?: SortOrder
  }

  export type QueueEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    bookingId?: SortOrder
    position?: SortOrder
    estimatedWait?: SortOrder
    checkedIn?: SortOrder
    joinedAt?: SortOrder
    servedAt?: SortOrder
  }

  export type QueueEntryMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    bookingId?: SortOrder
    position?: SortOrder
    estimatedWait?: SortOrder
    checkedIn?: SortOrder
    joinedAt?: SortOrder
    servedAt?: SortOrder
  }

  export type QueueEntrySumOrderByAggregateInput = {
    position?: SortOrder
    estimatedWait?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalonCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput> | SalonCreateWithoutOwnerInput[] | SalonUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutOwnerInput | SalonCreateOrConnectWithoutOwnerInput[]
    createMany?: SalonCreateManyOwnerInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type BarberCreateNestedManyWithoutUserInput = {
    create?: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput> | BarberCreateWithoutUserInput[] | BarberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutUserInput | BarberCreateOrConnectWithoutUserInput[]
    createMany?: BarberCreateManyUserInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SalonUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput> | SalonCreateWithoutOwnerInput[] | SalonUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutOwnerInput | SalonCreateOrConnectWithoutOwnerInput[]
    createMany?: SalonCreateManyOwnerInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type BarberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput> | BarberCreateWithoutUserInput[] | BarberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutUserInput | BarberCreateOrConnectWithoutUserInput[]
    createMany?: BarberCreateManyUserInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalonUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput> | SalonCreateWithoutOwnerInput[] | SalonUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutOwnerInput | SalonCreateOrConnectWithoutOwnerInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutOwnerInput | SalonUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SalonCreateManyOwnerInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutOwnerInput | SalonUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutOwnerInput | SalonUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type BarberUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput> | BarberCreateWithoutUserInput[] | BarberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutUserInput | BarberCreateOrConnectWithoutUserInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutUserInput | BarberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarberCreateManyUserInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutUserInput | BarberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutUserInput | BarberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SalonUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput> | SalonCreateWithoutOwnerInput[] | SalonUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutOwnerInput | SalonCreateOrConnectWithoutOwnerInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutOwnerInput | SalonUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SalonCreateManyOwnerInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutOwnerInput | SalonUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutOwnerInput | SalonUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type BarberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput> | BarberCreateWithoutUserInput[] | BarberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutUserInput | BarberCreateOrConnectWithoutUserInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutUserInput | BarberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarberCreateManyUserInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutUserInput | BarberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutUserInput | BarberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SalonCreateNestedManyWithoutPlanInput = {
    create?: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput> | SalonCreateWithoutPlanInput[] | SalonUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutPlanInput | SalonCreateOrConnectWithoutPlanInput[]
    createMany?: SalonCreateManyPlanInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type SalonUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput> | SalonCreateWithoutPlanInput[] | SalonUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutPlanInput | SalonCreateOrConnectWithoutPlanInput[]
    createMany?: SalonCreateManyPlanInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalonUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput> | SalonCreateWithoutPlanInput[] | SalonUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutPlanInput | SalonCreateOrConnectWithoutPlanInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutPlanInput | SalonUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SalonCreateManyPlanInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutPlanInput | SalonUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutPlanInput | SalonUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type SalonUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput> | SalonCreateWithoutPlanInput[] | SalonUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutPlanInput | SalonCreateOrConnectWithoutPlanInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutPlanInput | SalonUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SalonCreateManyPlanInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutPlanInput | SalonUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutPlanInput | SalonUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedSalonsInput = {
    create?: XOR<UserCreateWithoutOwnedSalonsInput, UserUncheckedCreateWithoutOwnedSalonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedSalonsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionPlanCreateNestedOneWithoutSalonsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSalonsInput, SubscriptionPlanUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSalonsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SalonPhotoCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput> | SalonPhotoCreateWithoutSalonInput[] | SalonPhotoUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonPhotoCreateOrConnectWithoutSalonInput | SalonPhotoCreateOrConnectWithoutSalonInput[]
    createMany?: SalonPhotoCreateManySalonInputEnvelope
    connect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
  }

  export type OpeningHoursCreateNestedManyWithoutSalonInput = {
    create?: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput> | OpeningHoursCreateWithoutSalonInput[] | OpeningHoursUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: OpeningHoursCreateOrConnectWithoutSalonInput | OpeningHoursCreateOrConnectWithoutSalonInput[]
    createMany?: OpeningHoursCreateManySalonInputEnvelope
    connect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutSalonInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BarberCreateNestedManyWithoutSalonInput = {
    create?: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput> | BarberCreateWithoutSalonInput[] | BarberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutSalonInput | BarberCreateOrConnectWithoutSalonInput[]
    createMany?: BarberCreateManySalonInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutSalonInput = {
    create?: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput> | BookingCreateWithoutSalonInput[] | BookingUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSalonInput | BookingCreateOrConnectWithoutSalonInput[]
    createMany?: BookingCreateManySalonInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type QueueEntryCreateNestedManyWithoutSalonInput = {
    create?: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput> | QueueEntryCreateWithoutSalonInput[] | QueueEntryUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: QueueEntryCreateOrConnectWithoutSalonInput | QueueEntryCreateOrConnectWithoutSalonInput[]
    createMany?: QueueEntryCreateManySalonInputEnvelope
    connect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
  }

  export type SalonPhotoUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput> | SalonPhotoCreateWithoutSalonInput[] | SalonPhotoUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonPhotoCreateOrConnectWithoutSalonInput | SalonPhotoCreateOrConnectWithoutSalonInput[]
    createMany?: SalonPhotoCreateManySalonInputEnvelope
    connect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
  }

  export type OpeningHoursUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput> | OpeningHoursCreateWithoutSalonInput[] | OpeningHoursUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: OpeningHoursCreateOrConnectWithoutSalonInput | OpeningHoursCreateOrConnectWithoutSalonInput[]
    createMany?: OpeningHoursCreateManySalonInputEnvelope
    connect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BarberUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput> | BarberCreateWithoutSalonInput[] | BarberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutSalonInput | BarberCreateOrConnectWithoutSalonInput[]
    createMany?: BarberCreateManySalonInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput> | BookingCreateWithoutSalonInput[] | BookingUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSalonInput | BookingCreateOrConnectWithoutSalonInput[]
    createMany?: BookingCreateManySalonInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type QueueEntryUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput> | QueueEntryCreateWithoutSalonInput[] | QueueEntryUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: QueueEntryCreateOrConnectWithoutSalonInput | QueueEntryCreateOrConnectWithoutSalonInput[]
    createMany?: QueueEntryCreateManySalonInputEnvelope
    connect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
  }

  export type EnumSalonStatusFieldUpdateOperationsInput = {
    set?: $Enums.SalonStatus
  }

  export type UserUpdateOneWithoutOwnedSalonsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedSalonsInput, UserUncheckedCreateWithoutOwnedSalonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedSalonsInput
    upsert?: UserUpsertWithoutOwnedSalonsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedSalonsInput, UserUpdateWithoutOwnedSalonsInput>, UserUncheckedUpdateWithoutOwnedSalonsInput>
  }

  export type SubscriptionPlanUpdateOneWithoutSalonsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSalonsInput, SubscriptionPlanUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSalonsInput
    upsert?: SubscriptionPlanUpsertWithoutSalonsInput
    disconnect?: SubscriptionPlanWhereInput | boolean
    delete?: SubscriptionPlanWhereInput | boolean
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutSalonsInput, SubscriptionPlanUpdateWithoutSalonsInput>, SubscriptionPlanUncheckedUpdateWithoutSalonsInput>
  }

  export type SalonPhotoUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput> | SalonPhotoCreateWithoutSalonInput[] | SalonPhotoUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonPhotoCreateOrConnectWithoutSalonInput | SalonPhotoCreateOrConnectWithoutSalonInput[]
    upsert?: SalonPhotoUpsertWithWhereUniqueWithoutSalonInput | SalonPhotoUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonPhotoCreateManySalonInputEnvelope
    set?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    disconnect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    delete?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    connect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    update?: SalonPhotoUpdateWithWhereUniqueWithoutSalonInput | SalonPhotoUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonPhotoUpdateManyWithWhereWithoutSalonInput | SalonPhotoUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonPhotoScalarWhereInput | SalonPhotoScalarWhereInput[]
  }

  export type OpeningHoursUpdateManyWithoutSalonNestedInput = {
    create?: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput> | OpeningHoursCreateWithoutSalonInput[] | OpeningHoursUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: OpeningHoursCreateOrConnectWithoutSalonInput | OpeningHoursCreateOrConnectWithoutSalonInput[]
    upsert?: OpeningHoursUpsertWithWhereUniqueWithoutSalonInput | OpeningHoursUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: OpeningHoursCreateManySalonInputEnvelope
    set?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    disconnect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    delete?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    connect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    update?: OpeningHoursUpdateWithWhereUniqueWithoutSalonInput | OpeningHoursUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: OpeningHoursUpdateManyWithWhereWithoutSalonInput | OpeningHoursUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: OpeningHoursScalarWhereInput | OpeningHoursScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSalonInput | ServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSalonInput | ServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSalonInput | ServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BarberUpdateManyWithoutSalonNestedInput = {
    create?: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput> | BarberCreateWithoutSalonInput[] | BarberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutSalonInput | BarberCreateOrConnectWithoutSalonInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutSalonInput | BarberUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: BarberCreateManySalonInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutSalonInput | BarberUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutSalonInput | BarberUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutSalonNestedInput = {
    create?: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput> | BookingCreateWithoutSalonInput[] | BookingUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSalonInput | BookingCreateOrConnectWithoutSalonInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSalonInput | BookingUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: BookingCreateManySalonInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSalonInput | BookingUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSalonInput | BookingUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type QueueEntryUpdateManyWithoutSalonNestedInput = {
    create?: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput> | QueueEntryCreateWithoutSalonInput[] | QueueEntryUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: QueueEntryCreateOrConnectWithoutSalonInput | QueueEntryCreateOrConnectWithoutSalonInput[]
    upsert?: QueueEntryUpsertWithWhereUniqueWithoutSalonInput | QueueEntryUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: QueueEntryCreateManySalonInputEnvelope
    set?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    disconnect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    delete?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    connect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    update?: QueueEntryUpdateWithWhereUniqueWithoutSalonInput | QueueEntryUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: QueueEntryUpdateManyWithWhereWithoutSalonInput | QueueEntryUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: QueueEntryScalarWhereInput | QueueEntryScalarWhereInput[]
  }

  export type SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput> | SalonPhotoCreateWithoutSalonInput[] | SalonPhotoUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonPhotoCreateOrConnectWithoutSalonInput | SalonPhotoCreateOrConnectWithoutSalonInput[]
    upsert?: SalonPhotoUpsertWithWhereUniqueWithoutSalonInput | SalonPhotoUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonPhotoCreateManySalonInputEnvelope
    set?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    disconnect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    delete?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    connect?: SalonPhotoWhereUniqueInput | SalonPhotoWhereUniqueInput[]
    update?: SalonPhotoUpdateWithWhereUniqueWithoutSalonInput | SalonPhotoUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonPhotoUpdateManyWithWhereWithoutSalonInput | SalonPhotoUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonPhotoScalarWhereInput | SalonPhotoScalarWhereInput[]
  }

  export type OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput> | OpeningHoursCreateWithoutSalonInput[] | OpeningHoursUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: OpeningHoursCreateOrConnectWithoutSalonInput | OpeningHoursCreateOrConnectWithoutSalonInput[]
    upsert?: OpeningHoursUpsertWithWhereUniqueWithoutSalonInput | OpeningHoursUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: OpeningHoursCreateManySalonInputEnvelope
    set?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    disconnect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    delete?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    connect?: OpeningHoursWhereUniqueInput | OpeningHoursWhereUniqueInput[]
    update?: OpeningHoursUpdateWithWhereUniqueWithoutSalonInput | OpeningHoursUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: OpeningHoursUpdateManyWithWhereWithoutSalonInput | OpeningHoursUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: OpeningHoursScalarWhereInput | OpeningHoursScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput> | ServiceCreateWithoutSalonInput[] | ServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonInput | ServiceCreateOrConnectWithoutSalonInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutSalonInput | ServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: ServiceCreateManySalonInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutSalonInput | ServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutSalonInput | ServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BarberUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput> | BarberCreateWithoutSalonInput[] | BarberUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutSalonInput | BarberCreateOrConnectWithoutSalonInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutSalonInput | BarberUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: BarberCreateManySalonInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutSalonInput | BarberUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutSalonInput | BarberUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput> | BookingCreateWithoutSalonInput[] | BookingUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSalonInput | BookingCreateOrConnectWithoutSalonInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSalonInput | BookingUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: BookingCreateManySalonInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSalonInput | BookingUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSalonInput | BookingUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type QueueEntryUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput> | QueueEntryCreateWithoutSalonInput[] | QueueEntryUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: QueueEntryCreateOrConnectWithoutSalonInput | QueueEntryCreateOrConnectWithoutSalonInput[]
    upsert?: QueueEntryUpsertWithWhereUniqueWithoutSalonInput | QueueEntryUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: QueueEntryCreateManySalonInputEnvelope
    set?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    disconnect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    delete?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    connect?: QueueEntryWhereUniqueInput | QueueEntryWhereUniqueInput[]
    update?: QueueEntryUpdateWithWhereUniqueWithoutSalonInput | QueueEntryUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: QueueEntryUpdateManyWithWhereWithoutSalonInput | QueueEntryUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: QueueEntryScalarWhereInput | QueueEntryScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutPhotosInput = {
    create?: XOR<SalonCreateWithoutPhotosInput, SalonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: SalonCreateOrConnectWithoutPhotosInput
    connect?: SalonWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalonUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<SalonCreateWithoutPhotosInput, SalonUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: SalonCreateOrConnectWithoutPhotosInput
    upsert?: SalonUpsertWithoutPhotosInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutPhotosInput, SalonUpdateWithoutPhotosInput>, SalonUncheckedUpdateWithoutPhotosInput>
  }

  export type SalonCreateNestedOneWithoutOpeningHoursInput = {
    create?: XOR<SalonCreateWithoutOpeningHoursInput, SalonUncheckedCreateWithoutOpeningHoursInput>
    connectOrCreate?: SalonCreateOrConnectWithoutOpeningHoursInput
    connect?: SalonWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type SalonUpdateOneRequiredWithoutOpeningHoursNestedInput = {
    create?: XOR<SalonCreateWithoutOpeningHoursInput, SalonUncheckedCreateWithoutOpeningHoursInput>
    connectOrCreate?: SalonCreateOrConnectWithoutOpeningHoursInput
    upsert?: SalonUpsertWithoutOpeningHoursInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutOpeningHoursInput, SalonUpdateWithoutOpeningHoursInput>, SalonUncheckedUpdateWithoutOpeningHoursInput>
  }

  export type SalonCreateNestedOneWithoutServicesInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    connect?: SalonWhereUniqueInput
  }

  export type BarberServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput> | BarberServiceCreateWithoutServiceInput[] | BarberServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutServiceInput | BarberServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BarberServiceCreateManyServiceInputEnvelope
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BarberServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput> | BarberServiceCreateWithoutServiceInput[] | BarberServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutServiceInput | BarberServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BarberServiceCreateManyServiceInputEnvelope
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SalonUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    upsert?: SalonUpsertWithoutServicesInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutServicesInput, SalonUpdateWithoutServicesInput>, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type BarberServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput> | BarberServiceCreateWithoutServiceInput[] | BarberServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutServiceInput | BarberServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BarberServiceUpsertWithWhereUniqueWithoutServiceInput | BarberServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BarberServiceCreateManyServiceInputEnvelope
    set?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    disconnect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    delete?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    update?: BarberServiceUpdateWithWhereUniqueWithoutServiceInput | BarberServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BarberServiceUpdateManyWithWhereWithoutServiceInput | BarberServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput> | BarberServiceCreateWithoutServiceInput[] | BarberServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutServiceInput | BarberServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BarberServiceUpsertWithWhereUniqueWithoutServiceInput | BarberServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BarberServiceCreateManyServiceInputEnvelope
    set?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    disconnect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    delete?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    update?: BarberServiceUpdateWithWhereUniqueWithoutServiceInput | BarberServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BarberServiceUpdateManyWithWhereWithoutServiceInput | BarberServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutBarbersInput = {
    create?: XOR<SalonCreateWithoutBarbersInput, SalonUncheckedCreateWithoutBarbersInput>
    connectOrCreate?: SalonCreateOrConnectWithoutBarbersInput
    connect?: SalonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBarbersInput = {
    create?: XOR<UserCreateWithoutBarbersInput, UserUncheckedCreateWithoutBarbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarbersInput
    connect?: UserWhereUniqueInput
  }

  export type BarberServiceCreateNestedManyWithoutBarberInput = {
    create?: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput> | BarberServiceCreateWithoutBarberInput[] | BarberServiceUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutBarberInput | BarberServiceCreateOrConnectWithoutBarberInput[]
    createMany?: BarberServiceCreateManyBarberInputEnvelope
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutBarberInput = {
    create?: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput> | BookingCreateWithoutBarberInput[] | BookingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberInput | BookingCreateOrConnectWithoutBarberInput[]
    createMany?: BookingCreateManyBarberInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BarberServiceUncheckedCreateNestedManyWithoutBarberInput = {
    create?: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput> | BarberServiceCreateWithoutBarberInput[] | BarberServiceUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutBarberInput | BarberServiceCreateOrConnectWithoutBarberInput[]
    createMany?: BarberServiceCreateManyBarberInputEnvelope
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBarberInput = {
    create?: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput> | BookingCreateWithoutBarberInput[] | BookingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberInput | BookingCreateOrConnectWithoutBarberInput[]
    createMany?: BookingCreateManyBarberInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SalonUpdateOneRequiredWithoutBarbersNestedInput = {
    create?: XOR<SalonCreateWithoutBarbersInput, SalonUncheckedCreateWithoutBarbersInput>
    connectOrCreate?: SalonCreateOrConnectWithoutBarbersInput
    upsert?: SalonUpsertWithoutBarbersInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutBarbersInput, SalonUpdateWithoutBarbersInput>, SalonUncheckedUpdateWithoutBarbersInput>
  }

  export type UserUpdateOneWithoutBarbersNestedInput = {
    create?: XOR<UserCreateWithoutBarbersInput, UserUncheckedCreateWithoutBarbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarbersInput
    upsert?: UserUpsertWithoutBarbersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBarbersInput, UserUpdateWithoutBarbersInput>, UserUncheckedUpdateWithoutBarbersInput>
  }

  export type BarberServiceUpdateManyWithoutBarberNestedInput = {
    create?: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput> | BarberServiceCreateWithoutBarberInput[] | BarberServiceUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutBarberInput | BarberServiceCreateOrConnectWithoutBarberInput[]
    upsert?: BarberServiceUpsertWithWhereUniqueWithoutBarberInput | BarberServiceUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: BarberServiceCreateManyBarberInputEnvelope
    set?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    disconnect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    delete?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    update?: BarberServiceUpdateWithWhereUniqueWithoutBarberInput | BarberServiceUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: BarberServiceUpdateManyWithWhereWithoutBarberInput | BarberServiceUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutBarberNestedInput = {
    create?: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput> | BookingCreateWithoutBarberInput[] | BookingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberInput | BookingCreateOrConnectWithoutBarberInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarberInput | BookingUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: BookingCreateManyBarberInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarberInput | BookingUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarberInput | BookingUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberServiceUncheckedUpdateManyWithoutBarberNestedInput = {
    create?: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput> | BarberServiceCreateWithoutBarberInput[] | BarberServiceUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BarberServiceCreateOrConnectWithoutBarberInput | BarberServiceCreateOrConnectWithoutBarberInput[]
    upsert?: BarberServiceUpsertWithWhereUniqueWithoutBarberInput | BarberServiceUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: BarberServiceCreateManyBarberInputEnvelope
    set?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    disconnect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    delete?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    connect?: BarberServiceWhereUniqueInput | BarberServiceWhereUniqueInput[]
    update?: BarberServiceUpdateWithWhereUniqueWithoutBarberInput | BarberServiceUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: BarberServiceUpdateManyWithWhereWithoutBarberInput | BarberServiceUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBarberNestedInput = {
    create?: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput> | BookingCreateWithoutBarberInput[] | BookingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarberInput | BookingCreateOrConnectWithoutBarberInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarberInput | BookingUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: BookingCreateManyBarberInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarberInput | BookingUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarberInput | BookingUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarberCreateNestedOneWithoutBarberServicesInput = {
    create?: XOR<BarberCreateWithoutBarberServicesInput, BarberUncheckedCreateWithoutBarberServicesInput>
    connectOrCreate?: BarberCreateOrConnectWithoutBarberServicesInput
    connect?: BarberWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBarberServicesInput = {
    create?: XOR<ServiceCreateWithoutBarberServicesInput, ServiceUncheckedCreateWithoutBarberServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBarberServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type BarberUpdateOneRequiredWithoutBarberServicesNestedInput = {
    create?: XOR<BarberCreateWithoutBarberServicesInput, BarberUncheckedCreateWithoutBarberServicesInput>
    connectOrCreate?: BarberCreateOrConnectWithoutBarberServicesInput
    upsert?: BarberUpsertWithoutBarberServicesInput
    connect?: BarberWhereUniqueInput
    update?: XOR<XOR<BarberUpdateToOneWithWhereWithoutBarberServicesInput, BarberUpdateWithoutBarberServicesInput>, BarberUncheckedUpdateWithoutBarberServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutBarberServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutBarberServicesInput, ServiceUncheckedCreateWithoutBarberServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBarberServicesInput
    upsert?: ServiceUpsertWithoutBarberServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBarberServicesInput, ServiceUpdateWithoutBarberServicesInput>, ServiceUncheckedUpdateWithoutBarberServicesInput>
  }

  export type SalonCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SalonCreateWithoutBookingsInput, SalonUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutBookingsInput
    connect?: SalonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type BarberCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BarberCreateWithoutBookingsInput, BarberUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberCreateOrConnectWithoutBookingsInput
    connect?: BarberWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type QueueEntryCreateNestedOneWithoutBookingInput = {
    create?: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
    connectOrCreate?: QueueEntryCreateOrConnectWithoutBookingInput
    connect?: QueueEntryWhereUniqueInput
  }

  export type QueueEntryUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
    connectOrCreate?: QueueEntryCreateOrConnectWithoutBookingInput
    connect?: QueueEntryWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumBookingTypeFieldUpdateOperationsInput = {
    set?: $Enums.BookingType
  }

  export type SalonUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<SalonCreateWithoutBookingsInput, SalonUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutBookingsInput
    upsert?: SalonUpsertWithoutBookingsInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutBookingsInput, SalonUpdateWithoutBookingsInput>, SalonUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type BarberUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<BarberCreateWithoutBookingsInput, BarberUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarberCreateOrConnectWithoutBookingsInput
    upsert?: BarberUpsertWithoutBookingsInput
    disconnect?: BarberWhereInput | boolean
    delete?: BarberWhereInput | boolean
    connect?: BarberWhereUniqueInput
    update?: XOR<XOR<BarberUpdateToOneWithWhereWithoutBookingsInput, BarberUpdateWithoutBookingsInput>, BarberUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type QueueEntryUpdateOneWithoutBookingNestedInput = {
    create?: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
    connectOrCreate?: QueueEntryCreateOrConnectWithoutBookingInput
    upsert?: QueueEntryUpsertWithoutBookingInput
    disconnect?: QueueEntryWhereInput | boolean
    delete?: QueueEntryWhereInput | boolean
    connect?: QueueEntryWhereUniqueInput
    update?: XOR<XOR<QueueEntryUpdateToOneWithWhereWithoutBookingInput, QueueEntryUpdateWithoutBookingInput>, QueueEntryUncheckedUpdateWithoutBookingInput>
  }

  export type QueueEntryUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
    connectOrCreate?: QueueEntryCreateOrConnectWithoutBookingInput
    upsert?: QueueEntryUpsertWithoutBookingInput
    disconnect?: QueueEntryWhereInput | boolean
    delete?: QueueEntryWhereInput | boolean
    connect?: QueueEntryWhereUniqueInput
    update?: XOR<XOR<QueueEntryUpdateToOneWithWhereWithoutBookingInput, QueueEntryUpdateWithoutBookingInput>, QueueEntryUncheckedUpdateWithoutBookingInput>
  }

  export type SalonCreateNestedOneWithoutQueueEntriesInput = {
    create?: XOR<SalonCreateWithoutQueueEntriesInput, SalonUncheckedCreateWithoutQueueEntriesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutQueueEntriesInput
    connect?: SalonWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutQueueEntryInput = {
    create?: XOR<BookingCreateWithoutQueueEntryInput, BookingUncheckedCreateWithoutQueueEntryInput>
    connectOrCreate?: BookingCreateOrConnectWithoutQueueEntryInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SalonUpdateOneRequiredWithoutQueueEntriesNestedInput = {
    create?: XOR<SalonCreateWithoutQueueEntriesInput, SalonUncheckedCreateWithoutQueueEntriesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutQueueEntriesInput
    upsert?: SalonUpsertWithoutQueueEntriesInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutQueueEntriesInput, SalonUpdateWithoutQueueEntriesInput>, SalonUncheckedUpdateWithoutQueueEntriesInput>
  }

  export type BookingUpdateOneRequiredWithoutQueueEntryNestedInput = {
    create?: XOR<BookingCreateWithoutQueueEntryInput, BookingUncheckedCreateWithoutQueueEntryInput>
    connectOrCreate?: BookingCreateOrConnectWithoutQueueEntryInput
    upsert?: BookingUpsertWithoutQueueEntryInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutQueueEntryInput, BookingUpdateWithoutQueueEntryInput>, BookingUncheckedUpdateWithoutQueueEntryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSalonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SalonStatus | EnumSalonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalonStatusFilter<$PrismaModel> | $Enums.SalonStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSalonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalonStatus | EnumSalonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalonStatus[] | ListEnumSalonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalonStatusWithAggregatesFilter<$PrismaModel> | $Enums.SalonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalonStatusFilter<$PrismaModel>
    _max?: NestedEnumSalonStatusFilter<$PrismaModel>
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

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeFilter<$PrismaModel> | $Enums.BookingType
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingType | EnumBookingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingType[] | ListEnumBookingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingTypeWithAggregatesFilter<$PrismaModel> | $Enums.BookingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingTypeFilter<$PrismaModel>
    _max?: NestedEnumBookingTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalonCreateWithoutOwnerInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutOwnerInput = {
    id?: string
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutOwnerInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput>
  }

  export type SalonCreateManyOwnerInputEnvelope = {
    data: SalonCreateManyOwnerInput | SalonCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BarberCreateWithoutUserInput = {
    id?: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBarbersInput
    barberServices?: BarberServiceCreateNestedManyWithoutBarberInput
    bookings?: BookingCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutUserInput = {
    id?: string
    salonId: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutBarberInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutUserInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput>
  }

  export type BarberCreateManyUserInputEnvelope = {
    data: BarberCreateManyUserInput | BarberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBookingsInput
    barber?: BarberCreateNestedOneWithoutBookingsInput
    service?: ServiceCreateNestedOneWithoutBookingsInput
    queueEntry?: QueueEntryCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    salonId: string
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: QueueEntryUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SalonWhereUniqueInput
    update: XOR<SalonUpdateWithoutOwnerInput, SalonUncheckedUpdateWithoutOwnerInput>
    create: XOR<SalonCreateWithoutOwnerInput, SalonUncheckedCreateWithoutOwnerInput>
  }

  export type SalonUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SalonWhereUniqueInput
    data: XOR<SalonUpdateWithoutOwnerInput, SalonUncheckedUpdateWithoutOwnerInput>
  }

  export type SalonUpdateManyWithWhereWithoutOwnerInput = {
    where: SalonScalarWhereInput
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SalonScalarWhereInput = {
    AND?: SalonScalarWhereInput | SalonScalarWhereInput[]
    OR?: SalonScalarWhereInput[]
    NOT?: SalonScalarWhereInput | SalonScalarWhereInput[]
    id?: UuidFilter<"Salon"> | string
    ownerId?: UuidNullableFilter<"Salon"> | string | null
    planId?: UuidNullableFilter<"Salon"> | string | null
    slug?: StringFilter<"Salon"> | string
    name?: StringFilter<"Salon"> | string
    phone?: StringNullableFilter<"Salon"> | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    mapsUrl?: StringNullableFilter<"Salon"> | string | null
    latitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Salon"> | Decimal | DecimalJsLike | number | string | null
    coverImage?: StringNullableFilter<"Salon"> | string | null
    logoImage?: StringNullableFilter<"Salon"> | string | null
    status?: EnumSalonStatusFilter<"Salon"> | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFilter<"Salon"> | $Enums.SubscriptionTier
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
  }

  export type BarberUpsertWithWhereUniqueWithoutUserInput = {
    where: BarberWhereUniqueInput
    update: XOR<BarberUpdateWithoutUserInput, BarberUncheckedUpdateWithoutUserInput>
    create: XOR<BarberCreateWithoutUserInput, BarberUncheckedCreateWithoutUserInput>
  }

  export type BarberUpdateWithWhereUniqueWithoutUserInput = {
    where: BarberWhereUniqueInput
    data: XOR<BarberUpdateWithoutUserInput, BarberUncheckedUpdateWithoutUserInput>
  }

  export type BarberUpdateManyWithWhereWithoutUserInput = {
    where: BarberScalarWhereInput
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyWithoutUserInput>
  }

  export type BarberScalarWhereInput = {
    AND?: BarberScalarWhereInput | BarberScalarWhereInput[]
    OR?: BarberScalarWhereInput[]
    NOT?: BarberScalarWhereInput | BarberScalarWhereInput[]
    id?: UuidFilter<"Barber"> | string
    salonId?: UuidFilter<"Barber"> | string
    userId?: UuidNullableFilter<"Barber"> | string | null
    name?: StringFilter<"Barber"> | string
    title?: StringNullableFilter<"Barber"> | string | null
    photoUrl?: StringNullableFilter<"Barber"> | string | null
    rating?: DecimalFilter<"Barber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Barber"> | boolean
    isOnline?: BoolFilter<"Barber"> | boolean
    createdAt?: DateTimeFilter<"Barber"> | Date | string
    updatedAt?: DateTimeFilter<"Barber"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: UuidFilter<"Booking"> | string
    salonId?: UuidFilter<"Booking"> | string
    customerId?: UuidNullableFilter<"Booking"> | string | null
    barberId?: UuidNullableFilter<"Booking"> | string | null
    serviceId?: UuidNullableFilter<"Booking"> | string | null
    customerName?: StringNullableFilter<"Booking"> | string | null
    customerPhone?: StringNullableFilter<"Booking"> | string | null
    serviceName?: StringNullableFilter<"Booking"> | string | null
    servicePrice?: DecimalNullableFilter<"Booking"> | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFilter<"Booking"> | Date | string
    durationMins?: IntFilter<"Booking"> | number
    price?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    type?: EnumBookingTypeFilter<"Booking"> | $Enums.BookingType
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type SalonCreateWithoutPlanInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutPlanInput = {
    id?: string
    ownerId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutPlanInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput>
  }

  export type SalonCreateManyPlanInputEnvelope = {
    data: SalonCreateManyPlanInput | SalonCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithWhereUniqueWithoutPlanInput = {
    where: SalonWhereUniqueInput
    update: XOR<SalonUpdateWithoutPlanInput, SalonUncheckedUpdateWithoutPlanInput>
    create: XOR<SalonCreateWithoutPlanInput, SalonUncheckedCreateWithoutPlanInput>
  }

  export type SalonUpdateWithWhereUniqueWithoutPlanInput = {
    where: SalonWhereUniqueInput
    data: XOR<SalonUpdateWithoutPlanInput, SalonUncheckedUpdateWithoutPlanInput>
  }

  export type SalonUpdateManyWithWhereWithoutPlanInput = {
    where: SalonScalarWhereInput
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserCreateWithoutOwnedSalonsInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    barbers?: BarberCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutOwnedSalonsInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    barbers?: BarberUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutOwnedSalonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedSalonsInput, UserUncheckedCreateWithoutOwnedSalonsInput>
  }

  export type SubscriptionPlanCreateWithoutSalonsInput = {
    id?: string
    name: $Enums.SubscriptionTier
    priceMonthly?: Decimal | DecimalJsLike | number | string | null
    maxBarbers?: number | null
    maxBookings?: number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUncheckedCreateWithoutSalonsInput = {
    id?: string
    name: $Enums.SubscriptionTier
    priceMonthly?: Decimal | DecimalJsLike | number | string | null
    maxBarbers?: number | null
    maxBookings?: number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanCreateOrConnectWithoutSalonsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSalonsInput, SubscriptionPlanUncheckedCreateWithoutSalonsInput>
  }

  export type SalonPhotoCreateWithoutSalonInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type SalonPhotoUncheckedCreateWithoutSalonInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type SalonPhotoCreateOrConnectWithoutSalonInput = {
    where: SalonPhotoWhereUniqueInput
    create: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput>
  }

  export type SalonPhotoCreateManySalonInputEnvelope = {
    data: SalonPhotoCreateManySalonInput | SalonPhotoCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type OpeningHoursCreateWithoutSalonInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
  }

  export type OpeningHoursUncheckedCreateWithoutSalonInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
  }

  export type OpeningHoursCreateOrConnectWithoutSalonInput = {
    where: OpeningHoursWhereUniqueInput
    create: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput>
  }

  export type OpeningHoursCreateManySalonInputEnvelope = {
    data: OpeningHoursCreateManySalonInput | OpeningHoursCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutSalonInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceCreateNestedManyWithoutServiceInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutSalonInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutServiceInput
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput>
  }

  export type ServiceCreateManySalonInputEnvelope = {
    data: ServiceCreateManySalonInput | ServiceCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type BarberCreateWithoutSalonInput = {
    id?: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutBarbersInput
    barberServices?: BarberServiceCreateNestedManyWithoutBarberInput
    bookings?: BookingCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutSalonInput = {
    id?: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutBarberInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutSalonInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput>
  }

  export type BarberCreateManySalonInputEnvelope = {
    data: BarberCreateManySalonInput | BarberCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutSalonInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: UserCreateNestedOneWithoutBookingsInput
    barber?: BarberCreateNestedOneWithoutBookingsInput
    service?: ServiceCreateNestedOneWithoutBookingsInput
    queueEntry?: QueueEntryCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSalonInput = {
    id?: string
    customerId?: string | null
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: QueueEntryUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSalonInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput>
  }

  export type BookingCreateManySalonInputEnvelope = {
    data: BookingCreateManySalonInput | BookingCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type QueueEntryCreateWithoutSalonInput = {
    id?: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
    booking: BookingCreateNestedOneWithoutQueueEntryInput
  }

  export type QueueEntryUncheckedCreateWithoutSalonInput = {
    id?: string
    bookingId: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
  }

  export type QueueEntryCreateOrConnectWithoutSalonInput = {
    where: QueueEntryWhereUniqueInput
    create: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput>
  }

  export type QueueEntryCreateManySalonInputEnvelope = {
    data: QueueEntryCreateManySalonInput | QueueEntryCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedSalonsInput = {
    update: XOR<UserUpdateWithoutOwnedSalonsInput, UserUncheckedUpdateWithoutOwnedSalonsInput>
    create: XOR<UserCreateWithoutOwnedSalonsInput, UserUncheckedCreateWithoutOwnedSalonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedSalonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedSalonsInput, UserUncheckedUpdateWithoutOwnedSalonsInput>
  }

  export type UserUpdateWithoutOwnedSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barbers?: BarberUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barbers?: BarberUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SubscriptionPlanUpsertWithoutSalonsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSalonsInput, SubscriptionPlanUncheckedUpdateWithoutSalonsInput>
    create: XOR<SubscriptionPlanCreateWithoutSalonsInput, SubscriptionPlanUncheckedCreateWithoutSalonsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSalonsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutSalonsInput, SubscriptionPlanUncheckedUpdateWithoutSalonsInput>
  }

  export type SubscriptionPlanUpdateWithoutSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    priceMonthly?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBarbers?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookings?: NullableIntFieldUpdateOperationsInput | number | null
    features?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoUpsertWithWhereUniqueWithoutSalonInput = {
    where: SalonPhotoWhereUniqueInput
    update: XOR<SalonPhotoUpdateWithoutSalonInput, SalonPhotoUncheckedUpdateWithoutSalonInput>
    create: XOR<SalonPhotoCreateWithoutSalonInput, SalonPhotoUncheckedCreateWithoutSalonInput>
  }

  export type SalonPhotoUpdateWithWhereUniqueWithoutSalonInput = {
    where: SalonPhotoWhereUniqueInput
    data: XOR<SalonPhotoUpdateWithoutSalonInput, SalonPhotoUncheckedUpdateWithoutSalonInput>
  }

  export type SalonPhotoUpdateManyWithWhereWithoutSalonInput = {
    where: SalonPhotoScalarWhereInput
    data: XOR<SalonPhotoUpdateManyMutationInput, SalonPhotoUncheckedUpdateManyWithoutSalonInput>
  }

  export type SalonPhotoScalarWhereInput = {
    AND?: SalonPhotoScalarWhereInput | SalonPhotoScalarWhereInput[]
    OR?: SalonPhotoScalarWhereInput[]
    NOT?: SalonPhotoScalarWhereInput | SalonPhotoScalarWhereInput[]
    id?: UuidFilter<"SalonPhoto"> | string
    salonId?: UuidFilter<"SalonPhoto"> | string
    url?: StringFilter<"SalonPhoto"> | string
    altText?: StringNullableFilter<"SalonPhoto"> | string | null
    sortOrder?: IntFilter<"SalonPhoto"> | number
    createdAt?: DateTimeFilter<"SalonPhoto"> | Date | string
  }

  export type OpeningHoursUpsertWithWhereUniqueWithoutSalonInput = {
    where: OpeningHoursWhereUniqueInput
    update: XOR<OpeningHoursUpdateWithoutSalonInput, OpeningHoursUncheckedUpdateWithoutSalonInput>
    create: XOR<OpeningHoursCreateWithoutSalonInput, OpeningHoursUncheckedCreateWithoutSalonInput>
  }

  export type OpeningHoursUpdateWithWhereUniqueWithoutSalonInput = {
    where: OpeningHoursWhereUniqueInput
    data: XOR<OpeningHoursUpdateWithoutSalonInput, OpeningHoursUncheckedUpdateWithoutSalonInput>
  }

  export type OpeningHoursUpdateManyWithWhereWithoutSalonInput = {
    where: OpeningHoursScalarWhereInput
    data: XOR<OpeningHoursUpdateManyMutationInput, OpeningHoursUncheckedUpdateManyWithoutSalonInput>
  }

  export type OpeningHoursScalarWhereInput = {
    AND?: OpeningHoursScalarWhereInput | OpeningHoursScalarWhereInput[]
    OR?: OpeningHoursScalarWhereInput[]
    NOT?: OpeningHoursScalarWhereInput | OpeningHoursScalarWhereInput[]
    id?: UuidFilter<"OpeningHours"> | string
    salonId?: UuidFilter<"OpeningHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"OpeningHours"> | $Enums.DayOfWeek
    openTime?: StringNullableFilter<"OpeningHours"> | string | null
    closeTime?: StringNullableFilter<"OpeningHours"> | string | null
    isOpen?: BoolFilter<"OpeningHours"> | boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutSalonInput, ServiceUncheckedUpdateWithoutSalonInput>
    create: XOR<ServiceCreateWithoutSalonInput, ServiceUncheckedCreateWithoutSalonInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutSalonInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutSalonInput, ServiceUncheckedUpdateWithoutSalonInput>
  }

  export type ServiceUpdateManyWithWhereWithoutSalonInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutSalonInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: UuidFilter<"Service"> | string
    salonId?: UuidFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMins?: IntFilter<"Service"> | number
    icon?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type BarberUpsertWithWhereUniqueWithoutSalonInput = {
    where: BarberWhereUniqueInput
    update: XOR<BarberUpdateWithoutSalonInput, BarberUncheckedUpdateWithoutSalonInput>
    create: XOR<BarberCreateWithoutSalonInput, BarberUncheckedCreateWithoutSalonInput>
  }

  export type BarberUpdateWithWhereUniqueWithoutSalonInput = {
    where: BarberWhereUniqueInput
    data: XOR<BarberUpdateWithoutSalonInput, BarberUncheckedUpdateWithoutSalonInput>
  }

  export type BarberUpdateManyWithWhereWithoutSalonInput = {
    where: BarberScalarWhereInput
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyWithoutSalonInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutSalonInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSalonInput, BookingUncheckedUpdateWithoutSalonInput>
    create: XOR<BookingCreateWithoutSalonInput, BookingUncheckedCreateWithoutSalonInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSalonInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSalonInput, BookingUncheckedUpdateWithoutSalonInput>
  }

  export type BookingUpdateManyWithWhereWithoutSalonInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSalonInput>
  }

  export type QueueEntryUpsertWithWhereUniqueWithoutSalonInput = {
    where: QueueEntryWhereUniqueInput
    update: XOR<QueueEntryUpdateWithoutSalonInput, QueueEntryUncheckedUpdateWithoutSalonInput>
    create: XOR<QueueEntryCreateWithoutSalonInput, QueueEntryUncheckedCreateWithoutSalonInput>
  }

  export type QueueEntryUpdateWithWhereUniqueWithoutSalonInput = {
    where: QueueEntryWhereUniqueInput
    data: XOR<QueueEntryUpdateWithoutSalonInput, QueueEntryUncheckedUpdateWithoutSalonInput>
  }

  export type QueueEntryUpdateManyWithWhereWithoutSalonInput = {
    where: QueueEntryScalarWhereInput
    data: XOR<QueueEntryUpdateManyMutationInput, QueueEntryUncheckedUpdateManyWithoutSalonInput>
  }

  export type QueueEntryScalarWhereInput = {
    AND?: QueueEntryScalarWhereInput | QueueEntryScalarWhereInput[]
    OR?: QueueEntryScalarWhereInput[]
    NOT?: QueueEntryScalarWhereInput | QueueEntryScalarWhereInput[]
    id?: UuidFilter<"QueueEntry"> | string
    salonId?: UuidFilter<"QueueEntry"> | string
    bookingId?: UuidFilter<"QueueEntry"> | string
    position?: IntFilter<"QueueEntry"> | number
    estimatedWait?: IntNullableFilter<"QueueEntry"> | number | null
    checkedIn?: BoolFilter<"QueueEntry"> | boolean
    joinedAt?: DateTimeFilter<"QueueEntry"> | Date | string
    servedAt?: DateTimeNullableFilter<"QueueEntry"> | Date | string | null
  }

  export type SalonCreateWithoutPhotosInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutPhotosInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutPhotosInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutPhotosInput, SalonUncheckedCreateWithoutPhotosInput>
  }

  export type SalonUpsertWithoutPhotosInput = {
    update: XOR<SalonUpdateWithoutPhotosInput, SalonUncheckedUpdateWithoutPhotosInput>
    create: XOR<SalonCreateWithoutPhotosInput, SalonUncheckedCreateWithoutPhotosInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutPhotosInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutPhotosInput, SalonUncheckedUpdateWithoutPhotosInput>
  }

  export type SalonUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateWithoutOpeningHoursInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutOpeningHoursInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutOpeningHoursInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutOpeningHoursInput, SalonUncheckedCreateWithoutOpeningHoursInput>
  }

  export type SalonUpsertWithoutOpeningHoursInput = {
    update: XOR<SalonUpdateWithoutOpeningHoursInput, SalonUncheckedUpdateWithoutOpeningHoursInput>
    create: XOR<SalonCreateWithoutOpeningHoursInput, SalonUncheckedCreateWithoutOpeningHoursInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutOpeningHoursInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutOpeningHoursInput, SalonUncheckedUpdateWithoutOpeningHoursInput>
  }

  export type SalonUpdateWithoutOpeningHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutOpeningHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateWithoutServicesInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutServicesInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutServicesInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
  }

  export type BarberServiceCreateWithoutServiceInput = {
    barber: BarberCreateNestedOneWithoutBarberServicesInput
  }

  export type BarberServiceUncheckedCreateWithoutServiceInput = {
    barberId: string
  }

  export type BarberServiceCreateOrConnectWithoutServiceInput = {
    where: BarberServiceWhereUniqueInput
    create: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput>
  }

  export type BarberServiceCreateManyServiceInputEnvelope = {
    data: BarberServiceCreateManyServiceInput | BarberServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutServiceInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBookingsInput
    customer?: UserCreateNestedOneWithoutBookingsInput
    barber?: BarberCreateNestedOneWithoutBookingsInput
    queueEntry?: QueueEntryCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string
    salonId: string
    customerId?: string | null
    barberId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: QueueEntryUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutServicesInput = {
    update: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutServicesInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type SalonUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type BarberServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: BarberServiceWhereUniqueInput
    update: XOR<BarberServiceUpdateWithoutServiceInput, BarberServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<BarberServiceCreateWithoutServiceInput, BarberServiceUncheckedCreateWithoutServiceInput>
  }

  export type BarberServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: BarberServiceWhereUniqueInput
    data: XOR<BarberServiceUpdateWithoutServiceInput, BarberServiceUncheckedUpdateWithoutServiceInput>
  }

  export type BarberServiceUpdateManyWithWhereWithoutServiceInput = {
    where: BarberServiceScalarWhereInput
    data: XOR<BarberServiceUpdateManyMutationInput, BarberServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type BarberServiceScalarWhereInput = {
    AND?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
    OR?: BarberServiceScalarWhereInput[]
    NOT?: BarberServiceScalarWhereInput | BarberServiceScalarWhereInput[]
    barberId?: UuidFilter<"BarberService"> | string
    serviceId?: UuidFilter<"BarberService"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type SalonCreateWithoutBarbersInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutBarbersInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutBarbersInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutBarbersInput, SalonUncheckedCreateWithoutBarbersInput>
  }

  export type UserCreateWithoutBarbersInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutBarbersInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutBarbersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBarbersInput, UserUncheckedCreateWithoutBarbersInput>
  }

  export type BarberServiceCreateWithoutBarberInput = {
    service: ServiceCreateNestedOneWithoutBarberServicesInput
  }

  export type BarberServiceUncheckedCreateWithoutBarberInput = {
    serviceId: string
  }

  export type BarberServiceCreateOrConnectWithoutBarberInput = {
    where: BarberServiceWhereUniqueInput
    create: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput>
  }

  export type BarberServiceCreateManyBarberInputEnvelope = {
    data: BarberServiceCreateManyBarberInput | BarberServiceCreateManyBarberInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutBarberInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBookingsInput
    customer?: UserCreateNestedOneWithoutBookingsInput
    service?: ServiceCreateNestedOneWithoutBookingsInput
    queueEntry?: QueueEntryCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBarberInput = {
    id?: string
    salonId: string
    customerId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: QueueEntryUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBarberInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput>
  }

  export type BookingCreateManyBarberInputEnvelope = {
    data: BookingCreateManyBarberInput | BookingCreateManyBarberInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutBarbersInput = {
    update: XOR<SalonUpdateWithoutBarbersInput, SalonUncheckedUpdateWithoutBarbersInput>
    create: XOR<SalonCreateWithoutBarbersInput, SalonUncheckedCreateWithoutBarbersInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutBarbersInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutBarbersInput, SalonUncheckedUpdateWithoutBarbersInput>
  }

  export type SalonUpdateWithoutBarbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutBarbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type UserUpsertWithoutBarbersInput = {
    update: XOR<UserUpdateWithoutBarbersInput, UserUncheckedUpdateWithoutBarbersInput>
    create: XOR<UserCreateWithoutBarbersInput, UserUncheckedCreateWithoutBarbersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBarbersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBarbersInput, UserUncheckedUpdateWithoutBarbersInput>
  }

  export type UserUpdateWithoutBarbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutBarbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BarberServiceUpsertWithWhereUniqueWithoutBarberInput = {
    where: BarberServiceWhereUniqueInput
    update: XOR<BarberServiceUpdateWithoutBarberInput, BarberServiceUncheckedUpdateWithoutBarberInput>
    create: XOR<BarberServiceCreateWithoutBarberInput, BarberServiceUncheckedCreateWithoutBarberInput>
  }

  export type BarberServiceUpdateWithWhereUniqueWithoutBarberInput = {
    where: BarberServiceWhereUniqueInput
    data: XOR<BarberServiceUpdateWithoutBarberInput, BarberServiceUncheckedUpdateWithoutBarberInput>
  }

  export type BarberServiceUpdateManyWithWhereWithoutBarberInput = {
    where: BarberServiceScalarWhereInput
    data: XOR<BarberServiceUpdateManyMutationInput, BarberServiceUncheckedUpdateManyWithoutBarberInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutBarberInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBarberInput, BookingUncheckedUpdateWithoutBarberInput>
    create: XOR<BookingCreateWithoutBarberInput, BookingUncheckedCreateWithoutBarberInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBarberInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBarberInput, BookingUncheckedUpdateWithoutBarberInput>
  }

  export type BookingUpdateManyWithWhereWithoutBarberInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBarberInput>
  }

  export type BarberCreateWithoutBarberServicesInput = {
    id?: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBarbersInput
    user?: UserCreateNestedOneWithoutBarbersInput
    bookings?: BookingCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutBarberServicesInput = {
    id?: string
    salonId: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutBarberServicesInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutBarberServicesInput, BarberUncheckedCreateWithoutBarberServicesInput>
  }

  export type ServiceCreateWithoutBarberServicesInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBarberServicesInput = {
    id?: string
    salonId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBarberServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBarberServicesInput, ServiceUncheckedCreateWithoutBarberServicesInput>
  }

  export type BarberUpsertWithoutBarberServicesInput = {
    update: XOR<BarberUpdateWithoutBarberServicesInput, BarberUncheckedUpdateWithoutBarberServicesInput>
    create: XOR<BarberCreateWithoutBarberServicesInput, BarberUncheckedCreateWithoutBarberServicesInput>
    where?: BarberWhereInput
  }

  export type BarberUpdateToOneWithWhereWithoutBarberServicesInput = {
    where?: BarberWhereInput
    data: XOR<BarberUpdateWithoutBarberServicesInput, BarberUncheckedUpdateWithoutBarberServicesInput>
  }

  export type BarberUpdateWithoutBarberServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBarbersNestedInput
    user?: UserUpdateOneWithoutBarbersNestedInput
    bookings?: BookingUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutBarberServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type ServiceUpsertWithoutBarberServicesInput = {
    update: XOR<ServiceUpdateWithoutBarberServicesInput, ServiceUncheckedUpdateWithoutBarberServicesInput>
    create: XOR<ServiceCreateWithoutBarberServicesInput, ServiceUncheckedCreateWithoutBarberServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBarberServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBarberServicesInput, ServiceUncheckedUpdateWithoutBarberServicesInput>
  }

  export type ServiceUpdateWithoutBarberServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBarberServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type SalonCreateWithoutBookingsInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutBookingsInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    queueEntries?: QueueEntryUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutBookingsInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutBookingsInput, SalonUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonCreateNestedManyWithoutOwnerInput
    barbers?: BarberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    phone: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedSalons?: SalonUncheckedCreateNestedManyWithoutOwnerInput
    barbers?: BarberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type BarberCreateWithoutBookingsInput = {
    id?: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBarbersInput
    user?: UserCreateNestedOneWithoutBarbersInput
    barberServices?: BarberServiceCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutBookingsInput = {
    id?: string
    salonId: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutBookingsInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutBookingsInput, BarberUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutServicesInput
    barberServices?: BarberServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    salonId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    barberServices?: BarberServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type QueueEntryCreateWithoutBookingInput = {
    id?: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
    salon: SalonCreateNestedOneWithoutQueueEntriesInput
  }

  export type QueueEntryUncheckedCreateWithoutBookingInput = {
    id?: string
    salonId: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
  }

  export type QueueEntryCreateOrConnectWithoutBookingInput = {
    where: QueueEntryWhereUniqueInput
    create: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
  }

  export type SalonUpsertWithoutBookingsInput = {
    update: XOR<SalonUpdateWithoutBookingsInput, SalonUncheckedUpdateWithoutBookingsInput>
    create: XOR<SalonCreateWithoutBookingsInput, SalonUncheckedCreateWithoutBookingsInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutBookingsInput, SalonUncheckedUpdateWithoutBookingsInput>
  }

  export type SalonUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUpdateManyWithoutOwnerNestedInput
    barbers?: BarberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedSalons?: SalonUncheckedUpdateManyWithoutOwnerNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BarberUpsertWithoutBookingsInput = {
    update: XOR<BarberUpdateWithoutBookingsInput, BarberUncheckedUpdateWithoutBookingsInput>
    create: XOR<BarberCreateWithoutBookingsInput, BarberUncheckedCreateWithoutBookingsInput>
    where?: BarberWhereInput
  }

  export type BarberUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BarberWhereInput
    data: XOR<BarberUpdateWithoutBookingsInput, BarberUncheckedUpdateWithoutBookingsInput>
  }

  export type BarberUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBarbersNestedInput
    user?: UserUpdateOneWithoutBarbersNestedInput
    barberServices?: BarberServiceUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
    barberServices?: BarberServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type QueueEntryUpsertWithoutBookingInput = {
    update: XOR<QueueEntryUpdateWithoutBookingInput, QueueEntryUncheckedUpdateWithoutBookingInput>
    create: XOR<QueueEntryCreateWithoutBookingInput, QueueEntryUncheckedCreateWithoutBookingInput>
    where?: QueueEntryWhereInput
  }

  export type QueueEntryUpdateToOneWithWhereWithoutBookingInput = {
    where?: QueueEntryWhereInput
    data: XOR<QueueEntryUpdateWithoutBookingInput, QueueEntryUncheckedUpdateWithoutBookingInput>
  }

  export type QueueEntryUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salon?: SalonUpdateOneRequiredWithoutQueueEntriesNestedInput
  }

  export type QueueEntryUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalonCreateWithoutQueueEntriesInput = {
    id?: string
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedSalonsInput
    plan?: SubscriptionPlanCreateNestedOneWithoutSalonsInput
    photos?: SalonPhotoCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursCreateNestedManyWithoutSalonInput
    services?: ServiceCreateNestedManyWithoutSalonInput
    barbers?: BarberCreateNestedManyWithoutSalonInput
    bookings?: BookingCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutQueueEntriesInput = {
    id?: string
    ownerId?: string | null
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: SalonPhotoUncheckedCreateNestedManyWithoutSalonInput
    openingHours?: OpeningHoursUncheckedCreateNestedManyWithoutSalonInput
    services?: ServiceUncheckedCreateNestedManyWithoutSalonInput
    barbers?: BarberUncheckedCreateNestedManyWithoutSalonInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutQueueEntriesInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutQueueEntriesInput, SalonUncheckedCreateWithoutQueueEntriesInput>
  }

  export type BookingCreateWithoutQueueEntryInput = {
    id?: string
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutBookingsInput
    customer?: UserCreateNestedOneWithoutBookingsInput
    barber?: BarberCreateNestedOneWithoutBookingsInput
    service?: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutQueueEntryInput = {
    id?: string
    salonId: string
    customerId?: string | null
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutQueueEntryInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutQueueEntryInput, BookingUncheckedCreateWithoutQueueEntryInput>
  }

  export type SalonUpsertWithoutQueueEntriesInput = {
    update: XOR<SalonUpdateWithoutQueueEntriesInput, SalonUncheckedUpdateWithoutQueueEntriesInput>
    create: XOR<SalonCreateWithoutQueueEntriesInput, SalonUncheckedCreateWithoutQueueEntriesInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutQueueEntriesInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutQueueEntriesInput, SalonUncheckedUpdateWithoutQueueEntriesInput>
  }

  export type SalonUpdateWithoutQueueEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutQueueEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type BookingUpsertWithoutQueueEntryInput = {
    update: XOR<BookingUpdateWithoutQueueEntryInput, BookingUncheckedUpdateWithoutQueueEntryInput>
    create: XOR<BookingCreateWithoutQueueEntryInput, BookingUncheckedCreateWithoutQueueEntryInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutQueueEntryInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutQueueEntryInput, BookingUncheckedUpdateWithoutQueueEntryInput>
  }

  export type BookingUpdateWithoutQueueEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBookingsNestedInput
    customer?: UserUpdateOneWithoutBookingsNestedInput
    barber?: BarberUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutQueueEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateManyOwnerInput = {
    id?: string
    planId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberCreateManyUserInput = {
    id?: string
    salonId: string
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    salonId: string
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneWithoutSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBarbersNestedInput
    barberServices?: BarberServiceUpdateManyWithoutBarberNestedInput
    bookings?: BookingUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutBarberNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBookingsNestedInput
    barber?: BarberUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneWithoutBookingsNestedInput
    queueEntry?: QueueEntryUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: QueueEntryUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateManyPlanInput = {
    id?: string
    ownerId?: string | null
    slug: string
    name: string
    phone?: string | null
    address?: string | null
    mapsUrl?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    coverImage?: string | null
    logoImage?: string | null
    status?: $Enums.SalonStatus
    subscription?: $Enums.SubscriptionTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedSalonsNestedInput
    photos?: SalonPhotoUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUpdateManyWithoutSalonNestedInput
    services?: ServiceUpdateManyWithoutSalonNestedInput
    barbers?: BarberUpdateManyWithoutSalonNestedInput
    bookings?: BookingUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: SalonPhotoUncheckedUpdateManyWithoutSalonNestedInput
    openingHours?: OpeningHoursUncheckedUpdateManyWithoutSalonNestedInput
    services?: ServiceUncheckedUpdateManyWithoutSalonNestedInput
    barbers?: BarberUncheckedUpdateManyWithoutSalonNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSalonNestedInput
    queueEntries?: QueueEntryUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalonStatusFieldUpdateOperationsInput | $Enums.SalonStatus
    subscription?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoCreateManySalonInput = {
    id?: string
    url: string
    altText?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type OpeningHoursCreateManySalonInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime?: string | null
    closeTime?: string | null
    isOpen?: boolean
  }

  export type ServiceCreateManySalonInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMins: number
    icon?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberCreateManySalonInput = {
    id?: string
    userId?: string | null
    name: string
    title?: string | null
    photoUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManySalonInput = {
    id?: string
    customerId?: string | null
    barberId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueueEntryCreateManySalonInput = {
    id?: string
    bookingId: string
    position: number
    estimatedWait?: number | null
    checkedIn?: boolean
    joinedAt?: Date | string
    servedAt?: Date | string | null
  }

  export type SalonPhotoUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonPhotoUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpeningHoursUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpeningHoursUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OpeningHoursUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: NullableStringFieldUpdateOperationsInput | string | null
    closeTime?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUpdateManyWithoutServiceNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutServiceNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMins?: IntFieldUpdateOperationsInput | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutBarbersNestedInput
    barberServices?: BarberServiceUpdateManyWithoutBarberNestedInput
    bookings?: BookingUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barberServices?: BarberServiceUncheckedUpdateManyWithoutBarberNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneWithoutBookingsNestedInput
    barber?: BarberUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneWithoutBookingsNestedInput
    queueEntry?: QueueEntryUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: QueueEntryUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueEntryUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking?: BookingUpdateOneRequiredWithoutQueueEntryNestedInput
  }

  export type QueueEntryUncheckedUpdateWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QueueEntryUncheckedUpdateManyWithoutSalonInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    estimatedWait?: NullableIntFieldUpdateOperationsInput | number | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BarberServiceCreateManyServiceInput = {
    barberId: string
  }

  export type BookingCreateManyServiceInput = {
    id?: string
    salonId: string
    customerId?: string | null
    barberId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberServiceUpdateWithoutServiceInput = {
    barber?: BarberUpdateOneRequiredWithoutBarberServicesNestedInput
  }

  export type BarberServiceUncheckedUpdateWithoutServiceInput = {
    barberId?: StringFieldUpdateOperationsInput | string
  }

  export type BarberServiceUncheckedUpdateManyWithoutServiceInput = {
    barberId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBookingsNestedInput
    customer?: UserUpdateOneWithoutBookingsNestedInput
    barber?: BarberUpdateOneWithoutBookingsNestedInput
    queueEntry?: QueueEntryUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: QueueEntryUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    barberId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarberServiceCreateManyBarberInput = {
    serviceId: string
  }

  export type BookingCreateManyBarberInput = {
    id?: string
    salonId: string
    customerId?: string | null
    serviceId?: string | null
    customerName?: string | null
    customerPhone?: string | null
    serviceName?: string | null
    servicePrice?: Decimal | DecimalJsLike | number | string | null
    appointmentAt: Date | string
    durationMins: number
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    type?: $Enums.BookingType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarberServiceUpdateWithoutBarberInput = {
    service?: ServiceUpdateOneRequiredWithoutBarberServicesNestedInput
  }

  export type BarberServiceUncheckedUpdateWithoutBarberInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type BarberServiceUncheckedUpdateManyWithoutBarberInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutBarberInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutBookingsNestedInput
    customer?: UserUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneWithoutBookingsNestedInput
    queueEntry?: QueueEntryUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBarberInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: QueueEntryUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutBarberInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    serviceName?: NullableStringFieldUpdateOperationsInput | string | null
    servicePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    appointmentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    type?: EnumBookingTypeFieldUpdateOperationsInput | $Enums.BookingType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionPlanCountOutputTypeDefaultArgs instead
     */
    export type SubscriptionPlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalonCountOutputTypeDefaultArgs instead
     */
    export type SalonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarberCountOutputTypeDefaultArgs instead
     */
    export type BarberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpCodeDefaultArgs instead
     */
    export type OtpCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionPlanDefaultArgs instead
     */
    export type SubscriptionPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalonDefaultArgs instead
     */
    export type SalonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalonPhotoDefaultArgs instead
     */
    export type SalonPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalonPhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OpeningHoursDefaultArgs instead
     */
    export type OpeningHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OpeningHoursDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarberDefaultArgs instead
     */
    export type BarberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarberServiceDefaultArgs instead
     */
    export type BarberServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarberServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QueueEntryDefaultArgs instead
     */
    export type QueueEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QueueEntryDefaultArgs<ExtArgs>

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