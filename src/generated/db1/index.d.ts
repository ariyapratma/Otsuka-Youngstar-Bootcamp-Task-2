
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
 * Model mst_application
 * 
 */
export type mst_application = $Result.DefaultSelection<Prisma.$mst_applicationPayload>
/**
 * Model mst_application_version
 * 
 */
export type mst_application_version = $Result.DefaultSelection<Prisma.$mst_application_versionPayload>
/**
 * Model mst_authorization
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type mst_authorization = $Result.DefaultSelection<Prisma.$mst_authorizationPayload>
/**
 * Model mst_authorization_profile
 * 
 */
export type mst_authorization_profile = $Result.DefaultSelection<Prisma.$mst_authorization_profilePayload>
/**
 * Model mst_authorization_usergroup
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type mst_authorization_usergroup = $Result.DefaultSelection<Prisma.$mst_authorization_usergroupPayload>
/**
 * Model mst_entities
 * 
 */
export type mst_entities = $Result.DefaultSelection<Prisma.$mst_entitiesPayload>
/**
 * Model mst_group
 * 
 */
export type mst_group = $Result.DefaultSelection<Prisma.$mst_groupPayload>
/**
 * Model mst_manpower_cost
 * 
 */
export type mst_manpower_cost = $Result.DefaultSelection<Prisma.$mst_manpower_costPayload>
/**
 * Model mst_profile
 * 
 */
export type mst_profile = $Result.DefaultSelection<Prisma.$mst_profilePayload>
/**
 * Model tr_document
 * 
 */
export type tr_document = $Result.DefaultSelection<Prisma.$tr_documentPayload>
/**
 * Model tr_history
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tr_history = $Result.DefaultSelection<Prisma.$tr_historyPayload>
/**
 * Model tr_project
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tr_project = $Result.DefaultSelection<Prisma.$tr_projectPayload>
/**
 * Model tr_project_activity
 * 
 */
export type tr_project_activity = $Result.DefaultSelection<Prisma.$tr_project_activityPayload>
/**
 * Model tr_project_overview
 * 
 */
export type tr_project_overview = $Result.DefaultSelection<Prisma.$tr_project_overviewPayload>
/**
 * Model tr_project_participant
 * 
 */
export type tr_project_participant = $Result.DefaultSelection<Prisma.$tr_project_participantPayload>
/**
 * Model tr_project_risk_mitigation
 * 
 */
export type tr_project_risk_mitigation = $Result.DefaultSelection<Prisma.$tr_project_risk_mitigationPayload>
/**
 * Model tr_project_scope
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tr_project_scope = $Result.DefaultSelection<Prisma.$tr_project_scopePayload>
/**
 * Model tr_project_task
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tr_project_task = $Result.DefaultSelection<Prisma.$tr_project_taskPayload>
/**
 * Model tr_project_team
 * 
 */
export type tr_project_team = $Result.DefaultSelection<Prisma.$tr_project_teamPayload>
/**
 * Model tr_request
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type tr_request = $Result.DefaultSelection<Prisma.$tr_requestPayload>
/**
 * Model tr_request_validation
 * 
 */
export type tr_request_validation = $Result.DefaultSelection<Prisma.$tr_request_validationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mst_applications
 * const mst_applications = await prisma.mst_application.findMany()
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
   * // Fetch zero or more Mst_applications
   * const mst_applications = await prisma.mst_application.findMany()
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
   * `prisma.mst_application`: Exposes CRUD operations for the **mst_application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_applications
    * const mst_applications = await prisma.mst_application.findMany()
    * ```
    */
  get mst_application(): Prisma.mst_applicationDelegate<ExtArgs>;

  /**
   * `prisma.mst_application_version`: Exposes CRUD operations for the **mst_application_version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_application_versions
    * const mst_application_versions = await prisma.mst_application_version.findMany()
    * ```
    */
  get mst_application_version(): Prisma.mst_application_versionDelegate<ExtArgs>;

  /**
   * `prisma.mst_authorization`: Exposes CRUD operations for the **mst_authorization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_authorizations
    * const mst_authorizations = await prisma.mst_authorization.findMany()
    * ```
    */
  get mst_authorization(): Prisma.mst_authorizationDelegate<ExtArgs>;

  /**
   * `prisma.mst_authorization_profile`: Exposes CRUD operations for the **mst_authorization_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_authorization_profiles
    * const mst_authorization_profiles = await prisma.mst_authorization_profile.findMany()
    * ```
    */
  get mst_authorization_profile(): Prisma.mst_authorization_profileDelegate<ExtArgs>;

  /**
   * `prisma.mst_authorization_usergroup`: Exposes CRUD operations for the **mst_authorization_usergroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_authorization_usergroups
    * const mst_authorization_usergroups = await prisma.mst_authorization_usergroup.findMany()
    * ```
    */
  get mst_authorization_usergroup(): Prisma.mst_authorization_usergroupDelegate<ExtArgs>;

  /**
   * `prisma.mst_entities`: Exposes CRUD operations for the **mst_entities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_entities
    * const mst_entities = await prisma.mst_entities.findMany()
    * ```
    */
  get mst_entities(): Prisma.mst_entitiesDelegate<ExtArgs>;

  /**
   * `prisma.mst_group`: Exposes CRUD operations for the **mst_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_groups
    * const mst_groups = await prisma.mst_group.findMany()
    * ```
    */
  get mst_group(): Prisma.mst_groupDelegate<ExtArgs>;

  /**
   * `prisma.mst_manpower_cost`: Exposes CRUD operations for the **mst_manpower_cost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_manpower_costs
    * const mst_manpower_costs = await prisma.mst_manpower_cost.findMany()
    * ```
    */
  get mst_manpower_cost(): Prisma.mst_manpower_costDelegate<ExtArgs>;

  /**
   * `prisma.mst_profile`: Exposes CRUD operations for the **mst_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_profiles
    * const mst_profiles = await prisma.mst_profile.findMany()
    * ```
    */
  get mst_profile(): Prisma.mst_profileDelegate<ExtArgs>;

  /**
   * `prisma.tr_document`: Exposes CRUD operations for the **tr_document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_documents
    * const tr_documents = await prisma.tr_document.findMany()
    * ```
    */
  get tr_document(): Prisma.tr_documentDelegate<ExtArgs>;

  /**
   * `prisma.tr_history`: Exposes CRUD operations for the **tr_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_histories
    * const tr_histories = await prisma.tr_history.findMany()
    * ```
    */
  get tr_history(): Prisma.tr_historyDelegate<ExtArgs>;

  /**
   * `prisma.tr_project`: Exposes CRUD operations for the **tr_project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_projects
    * const tr_projects = await prisma.tr_project.findMany()
    * ```
    */
  get tr_project(): Prisma.tr_projectDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_activity`: Exposes CRUD operations for the **tr_project_activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_activities
    * const tr_project_activities = await prisma.tr_project_activity.findMany()
    * ```
    */
  get tr_project_activity(): Prisma.tr_project_activityDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_overview`: Exposes CRUD operations for the **tr_project_overview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_overviews
    * const tr_project_overviews = await prisma.tr_project_overview.findMany()
    * ```
    */
  get tr_project_overview(): Prisma.tr_project_overviewDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_participant`: Exposes CRUD operations for the **tr_project_participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_participants
    * const tr_project_participants = await prisma.tr_project_participant.findMany()
    * ```
    */
  get tr_project_participant(): Prisma.tr_project_participantDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_risk_mitigation`: Exposes CRUD operations for the **tr_project_risk_mitigation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_risk_mitigations
    * const tr_project_risk_mitigations = await prisma.tr_project_risk_mitigation.findMany()
    * ```
    */
  get tr_project_risk_mitigation(): Prisma.tr_project_risk_mitigationDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_scope`: Exposes CRUD operations for the **tr_project_scope** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_scopes
    * const tr_project_scopes = await prisma.tr_project_scope.findMany()
    * ```
    */
  get tr_project_scope(): Prisma.tr_project_scopeDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_task`: Exposes CRUD operations for the **tr_project_task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_tasks
    * const tr_project_tasks = await prisma.tr_project_task.findMany()
    * ```
    */
  get tr_project_task(): Prisma.tr_project_taskDelegate<ExtArgs>;

  /**
   * `prisma.tr_project_team`: Exposes CRUD operations for the **tr_project_team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_project_teams
    * const tr_project_teams = await prisma.tr_project_team.findMany()
    * ```
    */
  get tr_project_team(): Prisma.tr_project_teamDelegate<ExtArgs>;

  /**
   * `prisma.tr_request`: Exposes CRUD operations for the **tr_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_requests
    * const tr_requests = await prisma.tr_request.findMany()
    * ```
    */
  get tr_request(): Prisma.tr_requestDelegate<ExtArgs>;

  /**
   * `prisma.tr_request_validation`: Exposes CRUD operations for the **tr_request_validation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_request_validations
    * const tr_request_validations = await prisma.tr_request_validation.findMany()
    * ```
    */
  get tr_request_validation(): Prisma.tr_request_validationDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
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
    mst_application: 'mst_application',
    mst_application_version: 'mst_application_version',
    mst_authorization: 'mst_authorization',
    mst_authorization_profile: 'mst_authorization_profile',
    mst_authorization_usergroup: 'mst_authorization_usergroup',
    mst_entities: 'mst_entities',
    mst_group: 'mst_group',
    mst_manpower_cost: 'mst_manpower_cost',
    mst_profile: 'mst_profile',
    tr_document: 'tr_document',
    tr_history: 'tr_history',
    tr_project: 'tr_project',
    tr_project_activity: 'tr_project_activity',
    tr_project_overview: 'tr_project_overview',
    tr_project_participant: 'tr_project_participant',
    tr_project_risk_mitigation: 'tr_project_risk_mitigation',
    tr_project_scope: 'tr_project_scope',
    tr_project_task: 'tr_project_task',
    tr_project_team: 'tr_project_team',
    tr_request: 'tr_request',
    tr_request_validation: 'tr_request_validation'
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
      modelProps: "mst_application" | "mst_application_version" | "mst_authorization" | "mst_authorization_profile" | "mst_authorization_usergroup" | "mst_entities" | "mst_group" | "mst_manpower_cost" | "mst_profile" | "tr_document" | "tr_history" | "tr_project" | "tr_project_activity" | "tr_project_overview" | "tr_project_participant" | "tr_project_risk_mitigation" | "tr_project_scope" | "tr_project_task" | "tr_project_team" | "tr_request" | "tr_request_validation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mst_application: {
        payload: Prisma.$mst_applicationPayload<ExtArgs>
        fields: Prisma.mst_applicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_applicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_applicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          findFirst: {
            args: Prisma.mst_applicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_applicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          findMany: {
            args: Prisma.mst_applicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>[]
          }
          create: {
            args: Prisma.mst_applicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          createMany: {
            args: Prisma.mst_applicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_applicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          update: {
            args: Prisma.mst_applicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          deleteMany: {
            args: Prisma.mst_applicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_applicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_applicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_applicationPayload>
          }
          aggregate: {
            args: Prisma.Mst_applicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_application>
          }
          groupBy: {
            args: Prisma.mst_applicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_applicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_applicationCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_applicationCountAggregateOutputType> | number
          }
        }
      }
      mst_application_version: {
        payload: Prisma.$mst_application_versionPayload<ExtArgs>
        fields: Prisma.mst_application_versionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_application_versionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_application_versionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          findFirst: {
            args: Prisma.mst_application_versionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_application_versionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          findMany: {
            args: Prisma.mst_application_versionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>[]
          }
          create: {
            args: Prisma.mst_application_versionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          createMany: {
            args: Prisma.mst_application_versionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_application_versionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          update: {
            args: Prisma.mst_application_versionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          deleteMany: {
            args: Prisma.mst_application_versionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_application_versionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_application_versionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_application_versionPayload>
          }
          aggregate: {
            args: Prisma.Mst_application_versionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_application_version>
          }
          groupBy: {
            args: Prisma.mst_application_versionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_application_versionGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_application_versionCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_application_versionCountAggregateOutputType> | number
          }
        }
      }
      mst_authorization: {
        payload: Prisma.$mst_authorizationPayload<ExtArgs>
        fields: Prisma.mst_authorizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_authorizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_authorizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          findFirst: {
            args: Prisma.mst_authorizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_authorizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          findMany: {
            args: Prisma.mst_authorizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>[]
          }
          create: {
            args: Prisma.mst_authorizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          createMany: {
            args: Prisma.mst_authorizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_authorizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          update: {
            args: Prisma.mst_authorizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          deleteMany: {
            args: Prisma.mst_authorizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_authorizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_authorizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorizationPayload>
          }
          aggregate: {
            args: Prisma.Mst_authorizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_authorization>
          }
          groupBy: {
            args: Prisma.mst_authorizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_authorizationCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorizationCountAggregateOutputType> | number
          }
        }
      }
      mst_authorization_profile: {
        payload: Prisma.$mst_authorization_profilePayload<ExtArgs>
        fields: Prisma.mst_authorization_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_authorization_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_authorization_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          findFirst: {
            args: Prisma.mst_authorization_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_authorization_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          findMany: {
            args: Prisma.mst_authorization_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>[]
          }
          create: {
            args: Prisma.mst_authorization_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          createMany: {
            args: Prisma.mst_authorization_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_authorization_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          update: {
            args: Prisma.mst_authorization_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          deleteMany: {
            args: Prisma.mst_authorization_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_authorization_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_authorization_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_profilePayload>
          }
          aggregate: {
            args: Prisma.Mst_authorization_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_authorization_profile>
          }
          groupBy: {
            args: Prisma.mst_authorization_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorization_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_authorization_profileCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorization_profileCountAggregateOutputType> | number
          }
        }
      }
      mst_authorization_usergroup: {
        payload: Prisma.$mst_authorization_usergroupPayload<ExtArgs>
        fields: Prisma.mst_authorization_usergroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_authorization_usergroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_authorization_usergroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          findFirst: {
            args: Prisma.mst_authorization_usergroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_authorization_usergroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          findMany: {
            args: Prisma.mst_authorization_usergroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>[]
          }
          create: {
            args: Prisma.mst_authorization_usergroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          createMany: {
            args: Prisma.mst_authorization_usergroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_authorization_usergroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          update: {
            args: Prisma.mst_authorization_usergroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          deleteMany: {
            args: Prisma.mst_authorization_usergroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_authorization_usergroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_authorization_usergroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_authorization_usergroupPayload>
          }
          aggregate: {
            args: Prisma.Mst_authorization_usergroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_authorization_usergroup>
          }
          groupBy: {
            args: Prisma.mst_authorization_usergroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorization_usergroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_authorization_usergroupCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_authorization_usergroupCountAggregateOutputType> | number
          }
        }
      }
      mst_entities: {
        payload: Prisma.$mst_entitiesPayload<ExtArgs>
        fields: Prisma.mst_entitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_entitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_entitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          findFirst: {
            args: Prisma.mst_entitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_entitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          findMany: {
            args: Prisma.mst_entitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>[]
          }
          create: {
            args: Prisma.mst_entitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          createMany: {
            args: Prisma.mst_entitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_entitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          update: {
            args: Prisma.mst_entitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          deleteMany: {
            args: Prisma.mst_entitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_entitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_entitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_entitiesPayload>
          }
          aggregate: {
            args: Prisma.Mst_entitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_entities>
          }
          groupBy: {
            args: Prisma.mst_entitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_entitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_entitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_entitiesCountAggregateOutputType> | number
          }
        }
      }
      mst_group: {
        payload: Prisma.$mst_groupPayload<ExtArgs>
        fields: Prisma.mst_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          findFirst: {
            args: Prisma.mst_groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          findMany: {
            args: Prisma.mst_groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>[]
          }
          create: {
            args: Prisma.mst_groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          createMany: {
            args: Prisma.mst_groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          update: {
            args: Prisma.mst_groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          deleteMany: {
            args: Prisma.mst_groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_groupPayload>
          }
          aggregate: {
            args: Prisma.Mst_groupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_group>
          }
          groupBy: {
            args: Prisma.mst_groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_groupCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_groupCountAggregateOutputType> | number
          }
        }
      }
      mst_manpower_cost: {
        payload: Prisma.$mst_manpower_costPayload<ExtArgs>
        fields: Prisma.mst_manpower_costFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_manpower_costFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_manpower_costFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          findFirst: {
            args: Prisma.mst_manpower_costFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_manpower_costFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          findMany: {
            args: Prisma.mst_manpower_costFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>[]
          }
          create: {
            args: Prisma.mst_manpower_costCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          createMany: {
            args: Prisma.mst_manpower_costCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_manpower_costDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          update: {
            args: Prisma.mst_manpower_costUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          deleteMany: {
            args: Prisma.mst_manpower_costDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_manpower_costUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_manpower_costUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_manpower_costPayload>
          }
          aggregate: {
            args: Prisma.Mst_manpower_costAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_manpower_cost>
          }
          groupBy: {
            args: Prisma.mst_manpower_costGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_manpower_costGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_manpower_costCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_manpower_costCountAggregateOutputType> | number
          }
        }
      }
      mst_profile: {
        payload: Prisma.$mst_profilePayload<ExtArgs>
        fields: Prisma.mst_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          findFirst: {
            args: Prisma.mst_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          findMany: {
            args: Prisma.mst_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>[]
          }
          create: {
            args: Prisma.mst_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          createMany: {
            args: Prisma.mst_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          update: {
            args: Prisma.mst_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          deleteMany: {
            args: Prisma.mst_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_profilePayload>
          }
          aggregate: {
            args: Prisma.Mst_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_profile>
          }
          groupBy: {
            args: Prisma.mst_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_profileCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_profileCountAggregateOutputType> | number
          }
        }
      }
      tr_document: {
        payload: Prisma.$tr_documentPayload<ExtArgs>
        fields: Prisma.tr_documentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_documentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_documentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          findFirst: {
            args: Prisma.tr_documentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_documentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          findMany: {
            args: Prisma.tr_documentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>[]
          }
          create: {
            args: Prisma.tr_documentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          createMany: {
            args: Prisma.tr_documentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_documentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          update: {
            args: Prisma.tr_documentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          deleteMany: {
            args: Prisma.tr_documentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_documentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_documentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_documentPayload>
          }
          aggregate: {
            args: Prisma.Tr_documentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_document>
          }
          groupBy: {
            args: Prisma.tr_documentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_documentGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_documentCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_documentCountAggregateOutputType> | number
          }
        }
      }
      tr_history: {
        payload: Prisma.$tr_historyPayload<ExtArgs>
        fields: Prisma.tr_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          findFirst: {
            args: Prisma.tr_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          findMany: {
            args: Prisma.tr_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>[]
          }
          create: {
            args: Prisma.tr_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          createMany: {
            args: Prisma.tr_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          update: {
            args: Prisma.tr_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          deleteMany: {
            args: Prisma.tr_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_historyPayload>
          }
          aggregate: {
            args: Prisma.Tr_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_history>
          }
          groupBy: {
            args: Prisma.tr_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_historyCountAggregateOutputType> | number
          }
        }
      }
      tr_project: {
        payload: Prisma.$tr_projectPayload<ExtArgs>
        fields: Prisma.tr_projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          findFirst: {
            args: Prisma.tr_projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          findMany: {
            args: Prisma.tr_projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>[]
          }
          create: {
            args: Prisma.tr_projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          createMany: {
            args: Prisma.tr_projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          update: {
            args: Prisma.tr_projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          deleteMany: {
            args: Prisma.tr_projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_projectPayload>
          }
          aggregate: {
            args: Prisma.Tr_projectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project>
          }
          groupBy: {
            args: Prisma.tr_projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_projectGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_projectCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_projectCountAggregateOutputType> | number
          }
        }
      }
      tr_project_activity: {
        payload: Prisma.$tr_project_activityPayload<ExtArgs>
        fields: Prisma.tr_project_activityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_activityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_activityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          findFirst: {
            args: Prisma.tr_project_activityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_activityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          findMany: {
            args: Prisma.tr_project_activityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>[]
          }
          create: {
            args: Prisma.tr_project_activityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          createMany: {
            args: Prisma.tr_project_activityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_activityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          update: {
            args: Prisma.tr_project_activityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_activityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_activityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_activityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_activityPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_activityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_activity>
          }
          groupBy: {
            args: Prisma.tr_project_activityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_activityGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_activityCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_activityCountAggregateOutputType> | number
          }
        }
      }
      tr_project_overview: {
        payload: Prisma.$tr_project_overviewPayload<ExtArgs>
        fields: Prisma.tr_project_overviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_overviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_overviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          findFirst: {
            args: Prisma.tr_project_overviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_overviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          findMany: {
            args: Prisma.tr_project_overviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>[]
          }
          create: {
            args: Prisma.tr_project_overviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          createMany: {
            args: Prisma.tr_project_overviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_overviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          update: {
            args: Prisma.tr_project_overviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_overviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_overviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_overviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_overviewPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_overviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_overview>
          }
          groupBy: {
            args: Prisma.tr_project_overviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_overviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_overviewCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_overviewCountAggregateOutputType> | number
          }
        }
      }
      tr_project_participant: {
        payload: Prisma.$tr_project_participantPayload<ExtArgs>
        fields: Prisma.tr_project_participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          findFirst: {
            args: Prisma.tr_project_participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          findMany: {
            args: Prisma.tr_project_participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>[]
          }
          create: {
            args: Prisma.tr_project_participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          createMany: {
            args: Prisma.tr_project_participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          update: {
            args: Prisma.tr_project_participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_participantPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_participantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_participant>
          }
          groupBy: {
            args: Prisma.tr_project_participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_participantGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_participantCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_participantCountAggregateOutputType> | number
          }
        }
      }
      tr_project_risk_mitigation: {
        payload: Prisma.$tr_project_risk_mitigationPayload<ExtArgs>
        fields: Prisma.tr_project_risk_mitigationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_risk_mitigationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_risk_mitigationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          findFirst: {
            args: Prisma.tr_project_risk_mitigationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_risk_mitigationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          findMany: {
            args: Prisma.tr_project_risk_mitigationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>[]
          }
          create: {
            args: Prisma.tr_project_risk_mitigationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          createMany: {
            args: Prisma.tr_project_risk_mitigationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_risk_mitigationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          update: {
            args: Prisma.tr_project_risk_mitigationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_risk_mitigationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_risk_mitigationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_risk_mitigationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_risk_mitigationPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_risk_mitigationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_risk_mitigation>
          }
          groupBy: {
            args: Prisma.tr_project_risk_mitigationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_risk_mitigationGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_risk_mitigationCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_risk_mitigationCountAggregateOutputType> | number
          }
        }
      }
      tr_project_scope: {
        payload: Prisma.$tr_project_scopePayload<ExtArgs>
        fields: Prisma.tr_project_scopeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_scopeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_scopeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          findFirst: {
            args: Prisma.tr_project_scopeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_scopeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          findMany: {
            args: Prisma.tr_project_scopeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>[]
          }
          create: {
            args: Prisma.tr_project_scopeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          createMany: {
            args: Prisma.tr_project_scopeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_scopeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          update: {
            args: Prisma.tr_project_scopeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          deleteMany: {
            args: Prisma.tr_project_scopeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_scopeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_scopeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_scopePayload>
          }
          aggregate: {
            args: Prisma.Tr_project_scopeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_scope>
          }
          groupBy: {
            args: Prisma.tr_project_scopeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_scopeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_scopeCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_scopeCountAggregateOutputType> | number
          }
        }
      }
      tr_project_task: {
        payload: Prisma.$tr_project_taskPayload<ExtArgs>
        fields: Prisma.tr_project_taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          findFirst: {
            args: Prisma.tr_project_taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          findMany: {
            args: Prisma.tr_project_taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>[]
          }
          create: {
            args: Prisma.tr_project_taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          createMany: {
            args: Prisma.tr_project_taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          update: {
            args: Prisma.tr_project_taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_taskPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_taskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_task>
          }
          groupBy: {
            args: Prisma.tr_project_taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_taskGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_taskCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_taskCountAggregateOutputType> | number
          }
        }
      }
      tr_project_team: {
        payload: Prisma.$tr_project_teamPayload<ExtArgs>
        fields: Prisma.tr_project_teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_project_teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_project_teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          findFirst: {
            args: Prisma.tr_project_teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_project_teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          findMany: {
            args: Prisma.tr_project_teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>[]
          }
          create: {
            args: Prisma.tr_project_teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          createMany: {
            args: Prisma.tr_project_teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_project_teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          update: {
            args: Prisma.tr_project_teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          deleteMany: {
            args: Prisma.tr_project_teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_project_teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_project_teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_project_teamPayload>
          }
          aggregate: {
            args: Prisma.Tr_project_teamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_project_team>
          }
          groupBy: {
            args: Prisma.tr_project_teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_teamGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_project_teamCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_project_teamCountAggregateOutputType> | number
          }
        }
      }
      tr_request: {
        payload: Prisma.$tr_requestPayload<ExtArgs>
        fields: Prisma.tr_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          findFirst: {
            args: Prisma.tr_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          findMany: {
            args: Prisma.tr_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>[]
          }
          create: {
            args: Prisma.tr_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          createMany: {
            args: Prisma.tr_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          update: {
            args: Prisma.tr_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          deleteMany: {
            args: Prisma.tr_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_requestPayload>
          }
          aggregate: {
            args: Prisma.Tr_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_request>
          }
          groupBy: {
            args: Prisma.tr_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_requestCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_requestCountAggregateOutputType> | number
          }
        }
      }
      tr_request_validation: {
        payload: Prisma.$tr_request_validationPayload<ExtArgs>
        fields: Prisma.tr_request_validationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_request_validationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_request_validationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          findFirst: {
            args: Prisma.tr_request_validationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_request_validationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          findMany: {
            args: Prisma.tr_request_validationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>[]
          }
          create: {
            args: Prisma.tr_request_validationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          createMany: {
            args: Prisma.tr_request_validationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_request_validationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          update: {
            args: Prisma.tr_request_validationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          deleteMany: {
            args: Prisma.tr_request_validationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_request_validationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_request_validationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_request_validationPayload>
          }
          aggregate: {
            args: Prisma.Tr_request_validationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_request_validation>
          }
          groupBy: {
            args: Prisma.tr_request_validationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_request_validationGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_request_validationCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_request_validationCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model mst_application
   */

  export type AggregateMst_application = {
    _count: Mst_applicationCountAggregateOutputType | null
    _avg: Mst_applicationAvgAggregateOutputType | null
    _sum: Mst_applicationSumAggregateOutputType | null
    _min: Mst_applicationMinAggregateOutputType | null
    _max: Mst_applicationMaxAggregateOutputType | null
  }

  export type Mst_applicationAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_applicationSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_applicationMinAggregateOutputType = {
    id: number | null
    application_name: string | null
    group_id_technician: string | null
    department_code: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_applicationMaxAggregateOutputType = {
    id: number | null
    application_name: string | null
    group_id_technician: string | null
    department_code: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_applicationCountAggregateOutputType = {
    id: number
    application_name: number
    group_id_technician: number
    department_code: number
    is_deleted: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_applicationAvgAggregateInputType = {
    id?: true
  }

  export type Mst_applicationSumAggregateInputType = {
    id?: true
  }

  export type Mst_applicationMinAggregateInputType = {
    id?: true
    application_name?: true
    group_id_technician?: true
    department_code?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_applicationMaxAggregateInputType = {
    id?: true
    application_name?: true
    group_id_technician?: true
    department_code?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_applicationCountAggregateInputType = {
    id?: true
    application_name?: true
    group_id_technician?: true
    department_code?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_application to aggregate.
     */
    where?: mst_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_applications to fetch.
     */
    orderBy?: mst_applicationOrderByWithRelationInput | mst_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_applications
    **/
    _count?: true | Mst_applicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_applicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_applicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_applicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_applicationMaxAggregateInputType
  }

  export type GetMst_applicationAggregateType<T extends Mst_applicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_application[P]>
      : GetScalarType<T[P], AggregateMst_application[P]>
  }




  export type mst_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_applicationWhereInput
    orderBy?: mst_applicationOrderByWithAggregationInput | mst_applicationOrderByWithAggregationInput[]
    by: Mst_applicationScalarFieldEnum[] | Mst_applicationScalarFieldEnum
    having?: mst_applicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_applicationCountAggregateInputType | true
    _avg?: Mst_applicationAvgAggregateInputType
    _sum?: Mst_applicationSumAggregateInputType
    _min?: Mst_applicationMinAggregateInputType
    _max?: Mst_applicationMaxAggregateInputType
  }

  export type Mst_applicationGroupByOutputType = {
    id: number
    application_name: string | null
    group_id_technician: string | null
    department_code: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_applicationCountAggregateOutputType | null
    _avg: Mst_applicationAvgAggregateOutputType | null
    _sum: Mst_applicationSumAggregateOutputType | null
    _min: Mst_applicationMinAggregateOutputType | null
    _max: Mst_applicationMaxAggregateOutputType | null
  }

  type GetMst_applicationGroupByPayload<T extends mst_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_applicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_applicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_applicationGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_applicationGroupByOutputType[P]>
        }
      >
    >


  export type mst_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    application_name?: boolean
    group_id_technician?: boolean
    department_code?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_application"]>


  export type mst_applicationSelectScalar = {
    id?: boolean
    application_name?: boolean
    group_id_technician?: boolean
    department_code?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_application"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      application_name: string | null
      group_id_technician: string | null
      department_code: string | null
      is_deleted: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_application"]>
    composites: {}
  }

  type mst_applicationGetPayload<S extends boolean | null | undefined | mst_applicationDefaultArgs> = $Result.GetResult<Prisma.$mst_applicationPayload, S>

  type mst_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_applicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_applicationCountAggregateInputType | true
    }

  export interface mst_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_application'], meta: { name: 'mst_application' } }
    /**
     * Find zero or one Mst_application that matches the filter.
     * @param {mst_applicationFindUniqueArgs} args - Arguments to find a Mst_application
     * @example
     * // Get one Mst_application
     * const mst_application = await prisma.mst_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_applicationFindUniqueArgs>(args: SelectSubset<T, mst_applicationFindUniqueArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_application that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_applicationFindUniqueOrThrowArgs} args - Arguments to find a Mst_application
     * @example
     * // Get one Mst_application
     * const mst_application = await prisma.mst_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_applicationFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_applicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationFindFirstArgs} args - Arguments to find a Mst_application
     * @example
     * // Get one Mst_application
     * const mst_application = await prisma.mst_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_applicationFindFirstArgs>(args?: SelectSubset<T, mst_applicationFindFirstArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationFindFirstOrThrowArgs} args - Arguments to find a Mst_application
     * @example
     * // Get one Mst_application
     * const mst_application = await prisma.mst_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_applicationFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_applicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_applications
     * const mst_applications = await prisma.mst_application.findMany()
     * 
     * // Get first 10 Mst_applications
     * const mst_applications = await prisma.mst_application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_applicationWithIdOnly = await prisma.mst_application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_applicationFindManyArgs>(args?: SelectSubset<T, mst_applicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_application.
     * @param {mst_applicationCreateArgs} args - Arguments to create a Mst_application.
     * @example
     * // Create one Mst_application
     * const Mst_application = await prisma.mst_application.create({
     *   data: {
     *     // ... data to create a Mst_application
     *   }
     * })
     * 
     */
    create<T extends mst_applicationCreateArgs>(args: SelectSubset<T, mst_applicationCreateArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_applications.
     * @param {mst_applicationCreateManyArgs} args - Arguments to create many Mst_applications.
     * @example
     * // Create many Mst_applications
     * const mst_application = await prisma.mst_application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_applicationCreateManyArgs>(args?: SelectSubset<T, mst_applicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_application.
     * @param {mst_applicationDeleteArgs} args - Arguments to delete one Mst_application.
     * @example
     * // Delete one Mst_application
     * const Mst_application = await prisma.mst_application.delete({
     *   where: {
     *     // ... filter to delete one Mst_application
     *   }
     * })
     * 
     */
    delete<T extends mst_applicationDeleteArgs>(args: SelectSubset<T, mst_applicationDeleteArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_application.
     * @param {mst_applicationUpdateArgs} args - Arguments to update one Mst_application.
     * @example
     * // Update one Mst_application
     * const mst_application = await prisma.mst_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_applicationUpdateArgs>(args: SelectSubset<T, mst_applicationUpdateArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_applications.
     * @param {mst_applicationDeleteManyArgs} args - Arguments to filter Mst_applications to delete.
     * @example
     * // Delete a few Mst_applications
     * const { count } = await prisma.mst_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_applicationDeleteManyArgs>(args?: SelectSubset<T, mst_applicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_applications
     * const mst_application = await prisma.mst_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_applicationUpdateManyArgs>(args: SelectSubset<T, mst_applicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_application.
     * @param {mst_applicationUpsertArgs} args - Arguments to update or create a Mst_application.
     * @example
     * // Update or create a Mst_application
     * const mst_application = await prisma.mst_application.upsert({
     *   create: {
     *     // ... data to create a Mst_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_application we want to update
     *   }
     * })
     */
    upsert<T extends mst_applicationUpsertArgs>(args: SelectSubset<T, mst_applicationUpsertArgs<ExtArgs>>): Prisma__mst_applicationClient<$Result.GetResult<Prisma.$mst_applicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationCountArgs} args - Arguments to filter Mst_applications to count.
     * @example
     * // Count the number of Mst_applications
     * const count = await prisma.mst_application.count({
     *   where: {
     *     // ... the filter for the Mst_applications we want to count
     *   }
     * })
    **/
    count<T extends mst_applicationCountArgs>(
      args?: Subset<T, mst_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_applicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_applicationAggregateArgs>(args: Subset<T, Mst_applicationAggregateArgs>): Prisma.PrismaPromise<GetMst_applicationAggregateType<T>>

    /**
     * Group by Mst_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_applicationGroupByArgs} args - Group by arguments.
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
      T extends mst_applicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_applicationGroupByArgs['orderBy'] }
        : { orderBy?: mst_applicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_applicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_application model
   */
  readonly fields: mst_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_applicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_application model
   */ 
  interface mst_applicationFieldRefs {
    readonly id: FieldRef<"mst_application", 'Int'>
    readonly application_name: FieldRef<"mst_application", 'String'>
    readonly group_id_technician: FieldRef<"mst_application", 'String'>
    readonly department_code: FieldRef<"mst_application", 'String'>
    readonly is_deleted: FieldRef<"mst_application", 'String'>
    readonly created_at: FieldRef<"mst_application", 'DateTime'>
    readonly created_by: FieldRef<"mst_application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_application findUnique
   */
  export type mst_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter, which mst_application to fetch.
     */
    where: mst_applicationWhereUniqueInput
  }

  /**
   * mst_application findUniqueOrThrow
   */
  export type mst_applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter, which mst_application to fetch.
     */
    where: mst_applicationWhereUniqueInput
  }

  /**
   * mst_application findFirst
   */
  export type mst_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter, which mst_application to fetch.
     */
    where?: mst_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_applications to fetch.
     */
    orderBy?: mst_applicationOrderByWithRelationInput | mst_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_applications.
     */
    cursor?: mst_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_applications.
     */
    distinct?: Mst_applicationScalarFieldEnum | Mst_applicationScalarFieldEnum[]
  }

  /**
   * mst_application findFirstOrThrow
   */
  export type mst_applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter, which mst_application to fetch.
     */
    where?: mst_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_applications to fetch.
     */
    orderBy?: mst_applicationOrderByWithRelationInput | mst_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_applications.
     */
    cursor?: mst_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_applications.
     */
    distinct?: Mst_applicationScalarFieldEnum | Mst_applicationScalarFieldEnum[]
  }

  /**
   * mst_application findMany
   */
  export type mst_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter, which mst_applications to fetch.
     */
    where?: mst_applicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_applications to fetch.
     */
    orderBy?: mst_applicationOrderByWithRelationInput | mst_applicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_applications.
     */
    cursor?: mst_applicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_applications.
     */
    skip?: number
    distinct?: Mst_applicationScalarFieldEnum | Mst_applicationScalarFieldEnum[]
  }

  /**
   * mst_application create
   */
  export type mst_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_application.
     */
    data?: XOR<mst_applicationCreateInput, mst_applicationUncheckedCreateInput>
  }

  /**
   * mst_application createMany
   */
  export type mst_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_applications.
     */
    data: mst_applicationCreateManyInput | mst_applicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_application update
   */
  export type mst_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_application.
     */
    data: XOR<mst_applicationUpdateInput, mst_applicationUncheckedUpdateInput>
    /**
     * Choose, which mst_application to update.
     */
    where: mst_applicationWhereUniqueInput
  }

  /**
   * mst_application updateMany
   */
  export type mst_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_applications.
     */
    data: XOR<mst_applicationUpdateManyMutationInput, mst_applicationUncheckedUpdateManyInput>
    /**
     * Filter which mst_applications to update
     */
    where?: mst_applicationWhereInput
  }

  /**
   * mst_application upsert
   */
  export type mst_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_application to update in case it exists.
     */
    where: mst_applicationWhereUniqueInput
    /**
     * In case the mst_application found by the `where` argument doesn't exist, create a new mst_application with this data.
     */
    create: XOR<mst_applicationCreateInput, mst_applicationUncheckedCreateInput>
    /**
     * In case the mst_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_applicationUpdateInput, mst_applicationUncheckedUpdateInput>
  }

  /**
   * mst_application delete
   */
  export type mst_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
    /**
     * Filter which mst_application to delete.
     */
    where: mst_applicationWhereUniqueInput
  }

  /**
   * mst_application deleteMany
   */
  export type mst_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_applications to delete
     */
    where?: mst_applicationWhereInput
  }

  /**
   * mst_application without action
   */
  export type mst_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application
     */
    select?: mst_applicationSelect<ExtArgs> | null
  }


  /**
   * Model mst_application_version
   */

  export type AggregateMst_application_version = {
    _count: Mst_application_versionCountAggregateOutputType | null
    _avg: Mst_application_versionAvgAggregateOutputType | null
    _sum: Mst_application_versionSumAggregateOutputType | null
    _min: Mst_application_versionMinAggregateOutputType | null
    _max: Mst_application_versionMaxAggregateOutputType | null
  }

  export type Mst_application_versionAvgAggregateOutputType = {
    id: number | null
    application_id: number | null
  }

  export type Mst_application_versionSumAggregateOutputType = {
    id: number | null
    application_id: number | null
  }

  export type Mst_application_versionMinAggregateOutputType = {
    id: number | null
    application_id: number | null
    version: string | null
    content: string | null
    golive_date: Date | null
  }

  export type Mst_application_versionMaxAggregateOutputType = {
    id: number | null
    application_id: number | null
    version: string | null
    content: string | null
    golive_date: Date | null
  }

  export type Mst_application_versionCountAggregateOutputType = {
    id: number
    application_id: number
    version: number
    content: number
    golive_date: number
    _all: number
  }


  export type Mst_application_versionAvgAggregateInputType = {
    id?: true
    application_id?: true
  }

  export type Mst_application_versionSumAggregateInputType = {
    id?: true
    application_id?: true
  }

  export type Mst_application_versionMinAggregateInputType = {
    id?: true
    application_id?: true
    version?: true
    content?: true
    golive_date?: true
  }

  export type Mst_application_versionMaxAggregateInputType = {
    id?: true
    application_id?: true
    version?: true
    content?: true
    golive_date?: true
  }

  export type Mst_application_versionCountAggregateInputType = {
    id?: true
    application_id?: true
    version?: true
    content?: true
    golive_date?: true
    _all?: true
  }

  export type Mst_application_versionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_application_version to aggregate.
     */
    where?: mst_application_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_application_versions to fetch.
     */
    orderBy?: mst_application_versionOrderByWithRelationInput | mst_application_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_application_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_application_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_application_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_application_versions
    **/
    _count?: true | Mst_application_versionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_application_versionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_application_versionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_application_versionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_application_versionMaxAggregateInputType
  }

  export type GetMst_application_versionAggregateType<T extends Mst_application_versionAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_application_version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_application_version[P]>
      : GetScalarType<T[P], AggregateMst_application_version[P]>
  }




  export type mst_application_versionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_application_versionWhereInput
    orderBy?: mst_application_versionOrderByWithAggregationInput | mst_application_versionOrderByWithAggregationInput[]
    by: Mst_application_versionScalarFieldEnum[] | Mst_application_versionScalarFieldEnum
    having?: mst_application_versionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_application_versionCountAggregateInputType | true
    _avg?: Mst_application_versionAvgAggregateInputType
    _sum?: Mst_application_versionSumAggregateInputType
    _min?: Mst_application_versionMinAggregateInputType
    _max?: Mst_application_versionMaxAggregateInputType
  }

  export type Mst_application_versionGroupByOutputType = {
    id: number
    application_id: number | null
    version: string | null
    content: string | null
    golive_date: Date | null
    _count: Mst_application_versionCountAggregateOutputType | null
    _avg: Mst_application_versionAvgAggregateOutputType | null
    _sum: Mst_application_versionSumAggregateOutputType | null
    _min: Mst_application_versionMinAggregateOutputType | null
    _max: Mst_application_versionMaxAggregateOutputType | null
  }

  type GetMst_application_versionGroupByPayload<T extends mst_application_versionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_application_versionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_application_versionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_application_versionGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_application_versionGroupByOutputType[P]>
        }
      >
    >


  export type mst_application_versionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    application_id?: boolean
    version?: boolean
    content?: boolean
    golive_date?: boolean
  }, ExtArgs["result"]["mst_application_version"]>


  export type mst_application_versionSelectScalar = {
    id?: boolean
    application_id?: boolean
    version?: boolean
    content?: boolean
    golive_date?: boolean
  }


  export type $mst_application_versionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_application_version"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      application_id: number | null
      version: string | null
      content: string | null
      golive_date: Date | null
    }, ExtArgs["result"]["mst_application_version"]>
    composites: {}
  }

  type mst_application_versionGetPayload<S extends boolean | null | undefined | mst_application_versionDefaultArgs> = $Result.GetResult<Prisma.$mst_application_versionPayload, S>

  type mst_application_versionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_application_versionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_application_versionCountAggregateInputType | true
    }

  export interface mst_application_versionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_application_version'], meta: { name: 'mst_application_version' } }
    /**
     * Find zero or one Mst_application_version that matches the filter.
     * @param {mst_application_versionFindUniqueArgs} args - Arguments to find a Mst_application_version
     * @example
     * // Get one Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_application_versionFindUniqueArgs>(args: SelectSubset<T, mst_application_versionFindUniqueArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_application_version that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_application_versionFindUniqueOrThrowArgs} args - Arguments to find a Mst_application_version
     * @example
     * // Get one Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_application_versionFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_application_versionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_application_version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionFindFirstArgs} args - Arguments to find a Mst_application_version
     * @example
     * // Get one Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_application_versionFindFirstArgs>(args?: SelectSubset<T, mst_application_versionFindFirstArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_application_version that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionFindFirstOrThrowArgs} args - Arguments to find a Mst_application_version
     * @example
     * // Get one Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_application_versionFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_application_versionFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_application_versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_application_versions
     * const mst_application_versions = await prisma.mst_application_version.findMany()
     * 
     * // Get first 10 Mst_application_versions
     * const mst_application_versions = await prisma.mst_application_version.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_application_versionWithIdOnly = await prisma.mst_application_version.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_application_versionFindManyArgs>(args?: SelectSubset<T, mst_application_versionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_application_version.
     * @param {mst_application_versionCreateArgs} args - Arguments to create a Mst_application_version.
     * @example
     * // Create one Mst_application_version
     * const Mst_application_version = await prisma.mst_application_version.create({
     *   data: {
     *     // ... data to create a Mst_application_version
     *   }
     * })
     * 
     */
    create<T extends mst_application_versionCreateArgs>(args: SelectSubset<T, mst_application_versionCreateArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_application_versions.
     * @param {mst_application_versionCreateManyArgs} args - Arguments to create many Mst_application_versions.
     * @example
     * // Create many Mst_application_versions
     * const mst_application_version = await prisma.mst_application_version.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_application_versionCreateManyArgs>(args?: SelectSubset<T, mst_application_versionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_application_version.
     * @param {mst_application_versionDeleteArgs} args - Arguments to delete one Mst_application_version.
     * @example
     * // Delete one Mst_application_version
     * const Mst_application_version = await prisma.mst_application_version.delete({
     *   where: {
     *     // ... filter to delete one Mst_application_version
     *   }
     * })
     * 
     */
    delete<T extends mst_application_versionDeleteArgs>(args: SelectSubset<T, mst_application_versionDeleteArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_application_version.
     * @param {mst_application_versionUpdateArgs} args - Arguments to update one Mst_application_version.
     * @example
     * // Update one Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_application_versionUpdateArgs>(args: SelectSubset<T, mst_application_versionUpdateArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_application_versions.
     * @param {mst_application_versionDeleteManyArgs} args - Arguments to filter Mst_application_versions to delete.
     * @example
     * // Delete a few Mst_application_versions
     * const { count } = await prisma.mst_application_version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_application_versionDeleteManyArgs>(args?: SelectSubset<T, mst_application_versionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_application_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_application_versions
     * const mst_application_version = await prisma.mst_application_version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_application_versionUpdateManyArgs>(args: SelectSubset<T, mst_application_versionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_application_version.
     * @param {mst_application_versionUpsertArgs} args - Arguments to update or create a Mst_application_version.
     * @example
     * // Update or create a Mst_application_version
     * const mst_application_version = await prisma.mst_application_version.upsert({
     *   create: {
     *     // ... data to create a Mst_application_version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_application_version we want to update
     *   }
     * })
     */
    upsert<T extends mst_application_versionUpsertArgs>(args: SelectSubset<T, mst_application_versionUpsertArgs<ExtArgs>>): Prisma__mst_application_versionClient<$Result.GetResult<Prisma.$mst_application_versionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_application_versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionCountArgs} args - Arguments to filter Mst_application_versions to count.
     * @example
     * // Count the number of Mst_application_versions
     * const count = await prisma.mst_application_version.count({
     *   where: {
     *     // ... the filter for the Mst_application_versions we want to count
     *   }
     * })
    **/
    count<T extends mst_application_versionCountArgs>(
      args?: Subset<T, mst_application_versionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_application_versionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_application_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_application_versionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_application_versionAggregateArgs>(args: Subset<T, Mst_application_versionAggregateArgs>): Prisma.PrismaPromise<GetMst_application_versionAggregateType<T>>

    /**
     * Group by Mst_application_version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_application_versionGroupByArgs} args - Group by arguments.
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
      T extends mst_application_versionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_application_versionGroupByArgs['orderBy'] }
        : { orderBy?: mst_application_versionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_application_versionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_application_versionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_application_version model
   */
  readonly fields: mst_application_versionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_application_version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_application_versionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_application_version model
   */ 
  interface mst_application_versionFieldRefs {
    readonly id: FieldRef<"mst_application_version", 'Int'>
    readonly application_id: FieldRef<"mst_application_version", 'Int'>
    readonly version: FieldRef<"mst_application_version", 'String'>
    readonly content: FieldRef<"mst_application_version", 'String'>
    readonly golive_date: FieldRef<"mst_application_version", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mst_application_version findUnique
   */
  export type mst_application_versionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter, which mst_application_version to fetch.
     */
    where: mst_application_versionWhereUniqueInput
  }

  /**
   * mst_application_version findUniqueOrThrow
   */
  export type mst_application_versionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter, which mst_application_version to fetch.
     */
    where: mst_application_versionWhereUniqueInput
  }

  /**
   * mst_application_version findFirst
   */
  export type mst_application_versionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter, which mst_application_version to fetch.
     */
    where?: mst_application_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_application_versions to fetch.
     */
    orderBy?: mst_application_versionOrderByWithRelationInput | mst_application_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_application_versions.
     */
    cursor?: mst_application_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_application_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_application_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_application_versions.
     */
    distinct?: Mst_application_versionScalarFieldEnum | Mst_application_versionScalarFieldEnum[]
  }

  /**
   * mst_application_version findFirstOrThrow
   */
  export type mst_application_versionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter, which mst_application_version to fetch.
     */
    where?: mst_application_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_application_versions to fetch.
     */
    orderBy?: mst_application_versionOrderByWithRelationInput | mst_application_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_application_versions.
     */
    cursor?: mst_application_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_application_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_application_versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_application_versions.
     */
    distinct?: Mst_application_versionScalarFieldEnum | Mst_application_versionScalarFieldEnum[]
  }

  /**
   * mst_application_version findMany
   */
  export type mst_application_versionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter, which mst_application_versions to fetch.
     */
    where?: mst_application_versionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_application_versions to fetch.
     */
    orderBy?: mst_application_versionOrderByWithRelationInput | mst_application_versionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_application_versions.
     */
    cursor?: mst_application_versionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_application_versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_application_versions.
     */
    skip?: number
    distinct?: Mst_application_versionScalarFieldEnum | Mst_application_versionScalarFieldEnum[]
  }

  /**
   * mst_application_version create
   */
  export type mst_application_versionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_application_version.
     */
    data?: XOR<mst_application_versionCreateInput, mst_application_versionUncheckedCreateInput>
  }

  /**
   * mst_application_version createMany
   */
  export type mst_application_versionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_application_versions.
     */
    data: mst_application_versionCreateManyInput | mst_application_versionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_application_version update
   */
  export type mst_application_versionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_application_version.
     */
    data: XOR<mst_application_versionUpdateInput, mst_application_versionUncheckedUpdateInput>
    /**
     * Choose, which mst_application_version to update.
     */
    where: mst_application_versionWhereUniqueInput
  }

  /**
   * mst_application_version updateMany
   */
  export type mst_application_versionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_application_versions.
     */
    data: XOR<mst_application_versionUpdateManyMutationInput, mst_application_versionUncheckedUpdateManyInput>
    /**
     * Filter which mst_application_versions to update
     */
    where?: mst_application_versionWhereInput
  }

  /**
   * mst_application_version upsert
   */
  export type mst_application_versionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_application_version to update in case it exists.
     */
    where: mst_application_versionWhereUniqueInput
    /**
     * In case the mst_application_version found by the `where` argument doesn't exist, create a new mst_application_version with this data.
     */
    create: XOR<mst_application_versionCreateInput, mst_application_versionUncheckedCreateInput>
    /**
     * In case the mst_application_version was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_application_versionUpdateInput, mst_application_versionUncheckedUpdateInput>
  }

  /**
   * mst_application_version delete
   */
  export type mst_application_versionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
    /**
     * Filter which mst_application_version to delete.
     */
    where: mst_application_versionWhereUniqueInput
  }

  /**
   * mst_application_version deleteMany
   */
  export type mst_application_versionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_application_versions to delete
     */
    where?: mst_application_versionWhereInput
  }

  /**
   * mst_application_version without action
   */
  export type mst_application_versionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_application_version
     */
    select?: mst_application_versionSelect<ExtArgs> | null
  }


  /**
   * Model mst_authorization
   */

  export type AggregateMst_authorization = {
    _count: Mst_authorizationCountAggregateOutputType | null
    _avg: Mst_authorizationAvgAggregateOutputType | null
    _sum: Mst_authorizationSumAggregateOutputType | null
    _min: Mst_authorizationMinAggregateOutputType | null
    _max: Mst_authorizationMaxAggregateOutputType | null
  }

  export type Mst_authorizationAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_authorizationSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_authorizationMinAggregateOutputType = {
    id: number | null
    employee_code: string | null
    is_active: string | null
    created_at: Date | null
    created_by: string | null
    technician_level: string | null
  }

  export type Mst_authorizationMaxAggregateOutputType = {
    id: number | null
    employee_code: string | null
    is_active: string | null
    created_at: Date | null
    created_by: string | null
    technician_level: string | null
  }

  export type Mst_authorizationCountAggregateOutputType = {
    id: number
    employee_code: number
    is_active: number
    created_at: number
    created_by: number
    technician_level: number
    _all: number
  }


  export type Mst_authorizationAvgAggregateInputType = {
    id?: true
  }

  export type Mst_authorizationSumAggregateInputType = {
    id?: true
  }

  export type Mst_authorizationMinAggregateInputType = {
    id?: true
    employee_code?: true
    is_active?: true
    created_at?: true
    created_by?: true
    technician_level?: true
  }

  export type Mst_authorizationMaxAggregateInputType = {
    id?: true
    employee_code?: true
    is_active?: true
    created_at?: true
    created_by?: true
    technician_level?: true
  }

  export type Mst_authorizationCountAggregateInputType = {
    id?: true
    employee_code?: true
    is_active?: true
    created_at?: true
    created_by?: true
    technician_level?: true
    _all?: true
  }

  export type Mst_authorizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorization to aggregate.
     */
    where?: mst_authorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorizations to fetch.
     */
    orderBy?: mst_authorizationOrderByWithRelationInput | mst_authorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_authorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_authorizations
    **/
    _count?: true | Mst_authorizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_authorizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_authorizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_authorizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_authorizationMaxAggregateInputType
  }

  export type GetMst_authorizationAggregateType<T extends Mst_authorizationAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_authorization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_authorization[P]>
      : GetScalarType<T[P], AggregateMst_authorization[P]>
  }




  export type mst_authorizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_authorizationWhereInput
    orderBy?: mst_authorizationOrderByWithAggregationInput | mst_authorizationOrderByWithAggregationInput[]
    by: Mst_authorizationScalarFieldEnum[] | Mst_authorizationScalarFieldEnum
    having?: mst_authorizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_authorizationCountAggregateInputType | true
    _avg?: Mst_authorizationAvgAggregateInputType
    _sum?: Mst_authorizationSumAggregateInputType
    _min?: Mst_authorizationMinAggregateInputType
    _max?: Mst_authorizationMaxAggregateInputType
  }

  export type Mst_authorizationGroupByOutputType = {
    id: number
    employee_code: string | null
    is_active: string | null
    created_at: Date | null
    created_by: string | null
    technician_level: string | null
    _count: Mst_authorizationCountAggregateOutputType | null
    _avg: Mst_authorizationAvgAggregateOutputType | null
    _sum: Mst_authorizationSumAggregateOutputType | null
    _min: Mst_authorizationMinAggregateOutputType | null
    _max: Mst_authorizationMaxAggregateOutputType | null
  }

  type GetMst_authorizationGroupByPayload<T extends mst_authorizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_authorizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_authorizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_authorizationGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_authorizationGroupByOutputType[P]>
        }
      >
    >


  export type mst_authorizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    technician_level?: boolean
  }, ExtArgs["result"]["mst_authorization"]>


  export type mst_authorizationSelectScalar = {
    id?: boolean
    employee_code?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    technician_level?: boolean
  }


  export type $mst_authorizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_authorization"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_code: string | null
      is_active: string | null
      created_at: Date | null
      created_by: string | null
      technician_level: string | null
    }, ExtArgs["result"]["mst_authorization"]>
    composites: {}
  }

  type mst_authorizationGetPayload<S extends boolean | null | undefined | mst_authorizationDefaultArgs> = $Result.GetResult<Prisma.$mst_authorizationPayload, S>

  type mst_authorizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_authorizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_authorizationCountAggregateInputType | true
    }

  export interface mst_authorizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_authorization'], meta: { name: 'mst_authorization' } }
    /**
     * Find zero or one Mst_authorization that matches the filter.
     * @param {mst_authorizationFindUniqueArgs} args - Arguments to find a Mst_authorization
     * @example
     * // Get one Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_authorizationFindUniqueArgs>(args: SelectSubset<T, mst_authorizationFindUniqueArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_authorization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_authorizationFindUniqueOrThrowArgs} args - Arguments to find a Mst_authorization
     * @example
     * // Get one Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_authorizationFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_authorizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_authorization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationFindFirstArgs} args - Arguments to find a Mst_authorization
     * @example
     * // Get one Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_authorizationFindFirstArgs>(args?: SelectSubset<T, mst_authorizationFindFirstArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_authorization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationFindFirstOrThrowArgs} args - Arguments to find a Mst_authorization
     * @example
     * // Get one Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_authorizationFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_authorizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_authorizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_authorizations
     * const mst_authorizations = await prisma.mst_authorization.findMany()
     * 
     * // Get first 10 Mst_authorizations
     * const mst_authorizations = await prisma.mst_authorization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_authorizationWithIdOnly = await prisma.mst_authorization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_authorizationFindManyArgs>(args?: SelectSubset<T, mst_authorizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_authorization.
     * @param {mst_authorizationCreateArgs} args - Arguments to create a Mst_authorization.
     * @example
     * // Create one Mst_authorization
     * const Mst_authorization = await prisma.mst_authorization.create({
     *   data: {
     *     // ... data to create a Mst_authorization
     *   }
     * })
     * 
     */
    create<T extends mst_authorizationCreateArgs>(args: SelectSubset<T, mst_authorizationCreateArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_authorizations.
     * @param {mst_authorizationCreateManyArgs} args - Arguments to create many Mst_authorizations.
     * @example
     * // Create many Mst_authorizations
     * const mst_authorization = await prisma.mst_authorization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_authorizationCreateManyArgs>(args?: SelectSubset<T, mst_authorizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_authorization.
     * @param {mst_authorizationDeleteArgs} args - Arguments to delete one Mst_authorization.
     * @example
     * // Delete one Mst_authorization
     * const Mst_authorization = await prisma.mst_authorization.delete({
     *   where: {
     *     // ... filter to delete one Mst_authorization
     *   }
     * })
     * 
     */
    delete<T extends mst_authorizationDeleteArgs>(args: SelectSubset<T, mst_authorizationDeleteArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_authorization.
     * @param {mst_authorizationUpdateArgs} args - Arguments to update one Mst_authorization.
     * @example
     * // Update one Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_authorizationUpdateArgs>(args: SelectSubset<T, mst_authorizationUpdateArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_authorizations.
     * @param {mst_authorizationDeleteManyArgs} args - Arguments to filter Mst_authorizations to delete.
     * @example
     * // Delete a few Mst_authorizations
     * const { count } = await prisma.mst_authorization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_authorizationDeleteManyArgs>(args?: SelectSubset<T, mst_authorizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_authorizations
     * const mst_authorization = await prisma.mst_authorization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_authorizationUpdateManyArgs>(args: SelectSubset<T, mst_authorizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_authorization.
     * @param {mst_authorizationUpsertArgs} args - Arguments to update or create a Mst_authorization.
     * @example
     * // Update or create a Mst_authorization
     * const mst_authorization = await prisma.mst_authorization.upsert({
     *   create: {
     *     // ... data to create a Mst_authorization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_authorization we want to update
     *   }
     * })
     */
    upsert<T extends mst_authorizationUpsertArgs>(args: SelectSubset<T, mst_authorizationUpsertArgs<ExtArgs>>): Prisma__mst_authorizationClient<$Result.GetResult<Prisma.$mst_authorizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationCountArgs} args - Arguments to filter Mst_authorizations to count.
     * @example
     * // Count the number of Mst_authorizations
     * const count = await prisma.mst_authorization.count({
     *   where: {
     *     // ... the filter for the Mst_authorizations we want to count
     *   }
     * })
    **/
    count<T extends mst_authorizationCountArgs>(
      args?: Subset<T, mst_authorizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_authorizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_authorizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_authorizationAggregateArgs>(args: Subset<T, Mst_authorizationAggregateArgs>): Prisma.PrismaPromise<GetMst_authorizationAggregateType<T>>

    /**
     * Group by Mst_authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorizationGroupByArgs} args - Group by arguments.
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
      T extends mst_authorizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_authorizationGroupByArgs['orderBy'] }
        : { orderBy?: mst_authorizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_authorizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_authorizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_authorization model
   */
  readonly fields: mst_authorizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_authorization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_authorizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_authorization model
   */ 
  interface mst_authorizationFieldRefs {
    readonly id: FieldRef<"mst_authorization", 'Int'>
    readonly employee_code: FieldRef<"mst_authorization", 'String'>
    readonly is_active: FieldRef<"mst_authorization", 'String'>
    readonly created_at: FieldRef<"mst_authorization", 'DateTime'>
    readonly created_by: FieldRef<"mst_authorization", 'String'>
    readonly technician_level: FieldRef<"mst_authorization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_authorization findUnique
   */
  export type mst_authorizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization to fetch.
     */
    where: mst_authorizationWhereUniqueInput
  }

  /**
   * mst_authorization findUniqueOrThrow
   */
  export type mst_authorizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization to fetch.
     */
    where: mst_authorizationWhereUniqueInput
  }

  /**
   * mst_authorization findFirst
   */
  export type mst_authorizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization to fetch.
     */
    where?: mst_authorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorizations to fetch.
     */
    orderBy?: mst_authorizationOrderByWithRelationInput | mst_authorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorizations.
     */
    cursor?: mst_authorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorizations.
     */
    distinct?: Mst_authorizationScalarFieldEnum | Mst_authorizationScalarFieldEnum[]
  }

  /**
   * mst_authorization findFirstOrThrow
   */
  export type mst_authorizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization to fetch.
     */
    where?: mst_authorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorizations to fetch.
     */
    orderBy?: mst_authorizationOrderByWithRelationInput | mst_authorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorizations.
     */
    cursor?: mst_authorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorizations.
     */
    distinct?: Mst_authorizationScalarFieldEnum | Mst_authorizationScalarFieldEnum[]
  }

  /**
   * mst_authorization findMany
   */
  export type mst_authorizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorizations to fetch.
     */
    where?: mst_authorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorizations to fetch.
     */
    orderBy?: mst_authorizationOrderByWithRelationInput | mst_authorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_authorizations.
     */
    cursor?: mst_authorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorizations.
     */
    skip?: number
    distinct?: Mst_authorizationScalarFieldEnum | Mst_authorizationScalarFieldEnum[]
  }

  /**
   * mst_authorization create
   */
  export type mst_authorizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_authorization.
     */
    data?: XOR<mst_authorizationCreateInput, mst_authorizationUncheckedCreateInput>
  }

  /**
   * mst_authorization createMany
   */
  export type mst_authorizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_authorizations.
     */
    data: mst_authorizationCreateManyInput | mst_authorizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_authorization update
   */
  export type mst_authorizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_authorization.
     */
    data: XOR<mst_authorizationUpdateInput, mst_authorizationUncheckedUpdateInput>
    /**
     * Choose, which mst_authorization to update.
     */
    where: mst_authorizationWhereUniqueInput
  }

  /**
   * mst_authorization updateMany
   */
  export type mst_authorizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_authorizations.
     */
    data: XOR<mst_authorizationUpdateManyMutationInput, mst_authorizationUncheckedUpdateManyInput>
    /**
     * Filter which mst_authorizations to update
     */
    where?: mst_authorizationWhereInput
  }

  /**
   * mst_authorization upsert
   */
  export type mst_authorizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_authorization to update in case it exists.
     */
    where: mst_authorizationWhereUniqueInput
    /**
     * In case the mst_authorization found by the `where` argument doesn't exist, create a new mst_authorization with this data.
     */
    create: XOR<mst_authorizationCreateInput, mst_authorizationUncheckedCreateInput>
    /**
     * In case the mst_authorization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_authorizationUpdateInput, mst_authorizationUncheckedUpdateInput>
  }

  /**
   * mst_authorization delete
   */
  export type mst_authorizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
    /**
     * Filter which mst_authorization to delete.
     */
    where: mst_authorizationWhereUniqueInput
  }

  /**
   * mst_authorization deleteMany
   */
  export type mst_authorizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorizations to delete
     */
    where?: mst_authorizationWhereInput
  }

  /**
   * mst_authorization without action
   */
  export type mst_authorizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization
     */
    select?: mst_authorizationSelect<ExtArgs> | null
  }


  /**
   * Model mst_authorization_profile
   */

  export type AggregateMst_authorization_profile = {
    _count: Mst_authorization_profileCountAggregateOutputType | null
    _avg: Mst_authorization_profileAvgAggregateOutputType | null
    _sum: Mst_authorization_profileSumAggregateOutputType | null
    _min: Mst_authorization_profileMinAggregateOutputType | null
    _max: Mst_authorization_profileMaxAggregateOutputType | null
  }

  export type Mst_authorization_profileAvgAggregateOutputType = {
    id: number | null
    profile_id: number | null
    entities_id: number | null
  }

  export type Mst_authorization_profileSumAggregateOutputType = {
    id: number | null
    profile_id: number | null
    entities_id: number | null
  }

  export type Mst_authorization_profileMinAggregateOutputType = {
    id: number | null
    employee_code: string | null
    profile_id: number | null
    entities_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_authorization_profileMaxAggregateOutputType = {
    id: number | null
    employee_code: string | null
    profile_id: number | null
    entities_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_authorization_profileCountAggregateOutputType = {
    id: number
    employee_code: number
    profile_id: number
    entities_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_authorization_profileAvgAggregateInputType = {
    id?: true
    profile_id?: true
    entities_id?: true
  }

  export type Mst_authorization_profileSumAggregateInputType = {
    id?: true
    profile_id?: true
    entities_id?: true
  }

  export type Mst_authorization_profileMinAggregateInputType = {
    id?: true
    employee_code?: true
    profile_id?: true
    entities_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_authorization_profileMaxAggregateInputType = {
    id?: true
    employee_code?: true
    profile_id?: true
    entities_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_authorization_profileCountAggregateInputType = {
    id?: true
    employee_code?: true
    profile_id?: true
    entities_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_authorization_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorization_profile to aggregate.
     */
    where?: mst_authorization_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_profiles to fetch.
     */
    orderBy?: mst_authorization_profileOrderByWithRelationInput | mst_authorization_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_authorization_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_authorization_profiles
    **/
    _count?: true | Mst_authorization_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_authorization_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_authorization_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_authorization_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_authorization_profileMaxAggregateInputType
  }

  export type GetMst_authorization_profileAggregateType<T extends Mst_authorization_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_authorization_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_authorization_profile[P]>
      : GetScalarType<T[P], AggregateMst_authorization_profile[P]>
  }




  export type mst_authorization_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_authorization_profileWhereInput
    orderBy?: mst_authorization_profileOrderByWithAggregationInput | mst_authorization_profileOrderByWithAggregationInput[]
    by: Mst_authorization_profileScalarFieldEnum[] | Mst_authorization_profileScalarFieldEnum
    having?: mst_authorization_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_authorization_profileCountAggregateInputType | true
    _avg?: Mst_authorization_profileAvgAggregateInputType
    _sum?: Mst_authorization_profileSumAggregateInputType
    _min?: Mst_authorization_profileMinAggregateInputType
    _max?: Mst_authorization_profileMaxAggregateInputType
  }

  export type Mst_authorization_profileGroupByOutputType = {
    id: number
    employee_code: string | null
    profile_id: number | null
    entities_id: number | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_authorization_profileCountAggregateOutputType | null
    _avg: Mst_authorization_profileAvgAggregateOutputType | null
    _sum: Mst_authorization_profileSumAggregateOutputType | null
    _min: Mst_authorization_profileMinAggregateOutputType | null
    _max: Mst_authorization_profileMaxAggregateOutputType | null
  }

  type GetMst_authorization_profileGroupByPayload<T extends mst_authorization_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_authorization_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_authorization_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_authorization_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_authorization_profileGroupByOutputType[P]>
        }
      >
    >


  export type mst_authorization_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    profile_id?: boolean
    entities_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_authorization_profile"]>


  export type mst_authorization_profileSelectScalar = {
    id?: boolean
    employee_code?: boolean
    profile_id?: boolean
    entities_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_authorization_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_authorization_profile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_code: string | null
      profile_id: number | null
      entities_id: number | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_authorization_profile"]>
    composites: {}
  }

  type mst_authorization_profileGetPayload<S extends boolean | null | undefined | mst_authorization_profileDefaultArgs> = $Result.GetResult<Prisma.$mst_authorization_profilePayload, S>

  type mst_authorization_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_authorization_profileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_authorization_profileCountAggregateInputType | true
    }

  export interface mst_authorization_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_authorization_profile'], meta: { name: 'mst_authorization_profile' } }
    /**
     * Find zero or one Mst_authorization_profile that matches the filter.
     * @param {mst_authorization_profileFindUniqueArgs} args - Arguments to find a Mst_authorization_profile
     * @example
     * // Get one Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_authorization_profileFindUniqueArgs>(args: SelectSubset<T, mst_authorization_profileFindUniqueArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_authorization_profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_authorization_profileFindUniqueOrThrowArgs} args - Arguments to find a Mst_authorization_profile
     * @example
     * // Get one Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_authorization_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_authorization_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_authorization_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileFindFirstArgs} args - Arguments to find a Mst_authorization_profile
     * @example
     * // Get one Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_authorization_profileFindFirstArgs>(args?: SelectSubset<T, mst_authorization_profileFindFirstArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_authorization_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileFindFirstOrThrowArgs} args - Arguments to find a Mst_authorization_profile
     * @example
     * // Get one Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_authorization_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_authorization_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_authorization_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_authorization_profiles
     * const mst_authorization_profiles = await prisma.mst_authorization_profile.findMany()
     * 
     * // Get first 10 Mst_authorization_profiles
     * const mst_authorization_profiles = await prisma.mst_authorization_profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_authorization_profileWithIdOnly = await prisma.mst_authorization_profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_authorization_profileFindManyArgs>(args?: SelectSubset<T, mst_authorization_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_authorization_profile.
     * @param {mst_authorization_profileCreateArgs} args - Arguments to create a Mst_authorization_profile.
     * @example
     * // Create one Mst_authorization_profile
     * const Mst_authorization_profile = await prisma.mst_authorization_profile.create({
     *   data: {
     *     // ... data to create a Mst_authorization_profile
     *   }
     * })
     * 
     */
    create<T extends mst_authorization_profileCreateArgs>(args: SelectSubset<T, mst_authorization_profileCreateArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_authorization_profiles.
     * @param {mst_authorization_profileCreateManyArgs} args - Arguments to create many Mst_authorization_profiles.
     * @example
     * // Create many Mst_authorization_profiles
     * const mst_authorization_profile = await prisma.mst_authorization_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_authorization_profileCreateManyArgs>(args?: SelectSubset<T, mst_authorization_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_authorization_profile.
     * @param {mst_authorization_profileDeleteArgs} args - Arguments to delete one Mst_authorization_profile.
     * @example
     * // Delete one Mst_authorization_profile
     * const Mst_authorization_profile = await prisma.mst_authorization_profile.delete({
     *   where: {
     *     // ... filter to delete one Mst_authorization_profile
     *   }
     * })
     * 
     */
    delete<T extends mst_authorization_profileDeleteArgs>(args: SelectSubset<T, mst_authorization_profileDeleteArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_authorization_profile.
     * @param {mst_authorization_profileUpdateArgs} args - Arguments to update one Mst_authorization_profile.
     * @example
     * // Update one Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_authorization_profileUpdateArgs>(args: SelectSubset<T, mst_authorization_profileUpdateArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_authorization_profiles.
     * @param {mst_authorization_profileDeleteManyArgs} args - Arguments to filter Mst_authorization_profiles to delete.
     * @example
     * // Delete a few Mst_authorization_profiles
     * const { count } = await prisma.mst_authorization_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_authorization_profileDeleteManyArgs>(args?: SelectSubset<T, mst_authorization_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_authorization_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_authorization_profiles
     * const mst_authorization_profile = await prisma.mst_authorization_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_authorization_profileUpdateManyArgs>(args: SelectSubset<T, mst_authorization_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_authorization_profile.
     * @param {mst_authorization_profileUpsertArgs} args - Arguments to update or create a Mst_authorization_profile.
     * @example
     * // Update or create a Mst_authorization_profile
     * const mst_authorization_profile = await prisma.mst_authorization_profile.upsert({
     *   create: {
     *     // ... data to create a Mst_authorization_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_authorization_profile we want to update
     *   }
     * })
     */
    upsert<T extends mst_authorization_profileUpsertArgs>(args: SelectSubset<T, mst_authorization_profileUpsertArgs<ExtArgs>>): Prisma__mst_authorization_profileClient<$Result.GetResult<Prisma.$mst_authorization_profilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_authorization_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileCountArgs} args - Arguments to filter Mst_authorization_profiles to count.
     * @example
     * // Count the number of Mst_authorization_profiles
     * const count = await prisma.mst_authorization_profile.count({
     *   where: {
     *     // ... the filter for the Mst_authorization_profiles we want to count
     *   }
     * })
    **/
    count<T extends mst_authorization_profileCountArgs>(
      args?: Subset<T, mst_authorization_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_authorization_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_authorization_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_authorization_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_authorization_profileAggregateArgs>(args: Subset<T, Mst_authorization_profileAggregateArgs>): Prisma.PrismaPromise<GetMst_authorization_profileAggregateType<T>>

    /**
     * Group by Mst_authorization_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_profileGroupByArgs} args - Group by arguments.
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
      T extends mst_authorization_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_authorization_profileGroupByArgs['orderBy'] }
        : { orderBy?: mst_authorization_profileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_authorization_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_authorization_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_authorization_profile model
   */
  readonly fields: mst_authorization_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_authorization_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_authorization_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_authorization_profile model
   */ 
  interface mst_authorization_profileFieldRefs {
    readonly id: FieldRef<"mst_authorization_profile", 'Int'>
    readonly employee_code: FieldRef<"mst_authorization_profile", 'String'>
    readonly profile_id: FieldRef<"mst_authorization_profile", 'Int'>
    readonly entities_id: FieldRef<"mst_authorization_profile", 'Int'>
    readonly created_at: FieldRef<"mst_authorization_profile", 'DateTime'>
    readonly created_by: FieldRef<"mst_authorization_profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_authorization_profile findUnique
   */
  export type mst_authorization_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_profile to fetch.
     */
    where: mst_authorization_profileWhereUniqueInput
  }

  /**
   * mst_authorization_profile findUniqueOrThrow
   */
  export type mst_authorization_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_profile to fetch.
     */
    where: mst_authorization_profileWhereUniqueInput
  }

  /**
   * mst_authorization_profile findFirst
   */
  export type mst_authorization_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_profile to fetch.
     */
    where?: mst_authorization_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_profiles to fetch.
     */
    orderBy?: mst_authorization_profileOrderByWithRelationInput | mst_authorization_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorization_profiles.
     */
    cursor?: mst_authorization_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorization_profiles.
     */
    distinct?: Mst_authorization_profileScalarFieldEnum | Mst_authorization_profileScalarFieldEnum[]
  }

  /**
   * mst_authorization_profile findFirstOrThrow
   */
  export type mst_authorization_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_profile to fetch.
     */
    where?: mst_authorization_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_profiles to fetch.
     */
    orderBy?: mst_authorization_profileOrderByWithRelationInput | mst_authorization_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorization_profiles.
     */
    cursor?: mst_authorization_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorization_profiles.
     */
    distinct?: Mst_authorization_profileScalarFieldEnum | Mst_authorization_profileScalarFieldEnum[]
  }

  /**
   * mst_authorization_profile findMany
   */
  export type mst_authorization_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_profiles to fetch.
     */
    where?: mst_authorization_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_profiles to fetch.
     */
    orderBy?: mst_authorization_profileOrderByWithRelationInput | mst_authorization_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_authorization_profiles.
     */
    cursor?: mst_authorization_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_profiles.
     */
    skip?: number
    distinct?: Mst_authorization_profileScalarFieldEnum | Mst_authorization_profileScalarFieldEnum[]
  }

  /**
   * mst_authorization_profile create
   */
  export type mst_authorization_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_authorization_profile.
     */
    data?: XOR<mst_authorization_profileCreateInput, mst_authorization_profileUncheckedCreateInput>
  }

  /**
   * mst_authorization_profile createMany
   */
  export type mst_authorization_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_authorization_profiles.
     */
    data: mst_authorization_profileCreateManyInput | mst_authorization_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_authorization_profile update
   */
  export type mst_authorization_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_authorization_profile.
     */
    data: XOR<mst_authorization_profileUpdateInput, mst_authorization_profileUncheckedUpdateInput>
    /**
     * Choose, which mst_authorization_profile to update.
     */
    where: mst_authorization_profileWhereUniqueInput
  }

  /**
   * mst_authorization_profile updateMany
   */
  export type mst_authorization_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_authorization_profiles.
     */
    data: XOR<mst_authorization_profileUpdateManyMutationInput, mst_authorization_profileUncheckedUpdateManyInput>
    /**
     * Filter which mst_authorization_profiles to update
     */
    where?: mst_authorization_profileWhereInput
  }

  /**
   * mst_authorization_profile upsert
   */
  export type mst_authorization_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_authorization_profile to update in case it exists.
     */
    where: mst_authorization_profileWhereUniqueInput
    /**
     * In case the mst_authorization_profile found by the `where` argument doesn't exist, create a new mst_authorization_profile with this data.
     */
    create: XOR<mst_authorization_profileCreateInput, mst_authorization_profileUncheckedCreateInput>
    /**
     * In case the mst_authorization_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_authorization_profileUpdateInput, mst_authorization_profileUncheckedUpdateInput>
  }

  /**
   * mst_authorization_profile delete
   */
  export type mst_authorization_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
    /**
     * Filter which mst_authorization_profile to delete.
     */
    where: mst_authorization_profileWhereUniqueInput
  }

  /**
   * mst_authorization_profile deleteMany
   */
  export type mst_authorization_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorization_profiles to delete
     */
    where?: mst_authorization_profileWhereInput
  }

  /**
   * mst_authorization_profile without action
   */
  export type mst_authorization_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_profile
     */
    select?: mst_authorization_profileSelect<ExtArgs> | null
  }


  /**
   * Model mst_authorization_usergroup
   */

  export type AggregateMst_authorization_usergroup = {
    _count: Mst_authorization_usergroupCountAggregateOutputType | null
    _avg: Mst_authorization_usergroupAvgAggregateOutputType | null
    _sum: Mst_authorization_usergroupSumAggregateOutputType | null
    _min: Mst_authorization_usergroupMinAggregateOutputType | null
    _max: Mst_authorization_usergroupMaxAggregateOutputType | null
  }

  export type Mst_authorization_usergroupAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
  }

  export type Mst_authorization_usergroupSumAggregateOutputType = {
    id: number | null
    group_id: number | null
  }

  export type Mst_authorization_usergroupMinAggregateOutputType = {
    id: number | null
    employee_code: string | null
    group_id: number | null
    is_manager: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_authorization_usergroupMaxAggregateOutputType = {
    id: number | null
    employee_code: string | null
    group_id: number | null
    is_manager: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_authorization_usergroupCountAggregateOutputType = {
    id: number
    employee_code: number
    group_id: number
    is_manager: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_authorization_usergroupAvgAggregateInputType = {
    id?: true
    group_id?: true
  }

  export type Mst_authorization_usergroupSumAggregateInputType = {
    id?: true
    group_id?: true
  }

  export type Mst_authorization_usergroupMinAggregateInputType = {
    id?: true
    employee_code?: true
    group_id?: true
    is_manager?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_authorization_usergroupMaxAggregateInputType = {
    id?: true
    employee_code?: true
    group_id?: true
    is_manager?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_authorization_usergroupCountAggregateInputType = {
    id?: true
    employee_code?: true
    group_id?: true
    is_manager?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_authorization_usergroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorization_usergroup to aggregate.
     */
    where?: mst_authorization_usergroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_usergroups to fetch.
     */
    orderBy?: mst_authorization_usergroupOrderByWithRelationInput | mst_authorization_usergroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_authorization_usergroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_usergroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_usergroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_authorization_usergroups
    **/
    _count?: true | Mst_authorization_usergroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_authorization_usergroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_authorization_usergroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_authorization_usergroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_authorization_usergroupMaxAggregateInputType
  }

  export type GetMst_authorization_usergroupAggregateType<T extends Mst_authorization_usergroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_authorization_usergroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_authorization_usergroup[P]>
      : GetScalarType<T[P], AggregateMst_authorization_usergroup[P]>
  }




  export type mst_authorization_usergroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_authorization_usergroupWhereInput
    orderBy?: mst_authorization_usergroupOrderByWithAggregationInput | mst_authorization_usergroupOrderByWithAggregationInput[]
    by: Mst_authorization_usergroupScalarFieldEnum[] | Mst_authorization_usergroupScalarFieldEnum
    having?: mst_authorization_usergroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_authorization_usergroupCountAggregateInputType | true
    _avg?: Mst_authorization_usergroupAvgAggregateInputType
    _sum?: Mst_authorization_usergroupSumAggregateInputType
    _min?: Mst_authorization_usergroupMinAggregateInputType
    _max?: Mst_authorization_usergroupMaxAggregateInputType
  }

  export type Mst_authorization_usergroupGroupByOutputType = {
    id: number
    employee_code: string | null
    group_id: number | null
    is_manager: string | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_authorization_usergroupCountAggregateOutputType | null
    _avg: Mst_authorization_usergroupAvgAggregateOutputType | null
    _sum: Mst_authorization_usergroupSumAggregateOutputType | null
    _min: Mst_authorization_usergroupMinAggregateOutputType | null
    _max: Mst_authorization_usergroupMaxAggregateOutputType | null
  }

  type GetMst_authorization_usergroupGroupByPayload<T extends mst_authorization_usergroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_authorization_usergroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_authorization_usergroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_authorization_usergroupGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_authorization_usergroupGroupByOutputType[P]>
        }
      >
    >


  export type mst_authorization_usergroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employee_code?: boolean
    group_id?: boolean
    is_manager?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_authorization_usergroup"]>


  export type mst_authorization_usergroupSelectScalar = {
    id?: boolean
    employee_code?: boolean
    group_id?: boolean
    is_manager?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_authorization_usergroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_authorization_usergroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employee_code: string | null
      group_id: number | null
      is_manager: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_authorization_usergroup"]>
    composites: {}
  }

  type mst_authorization_usergroupGetPayload<S extends boolean | null | undefined | mst_authorization_usergroupDefaultArgs> = $Result.GetResult<Prisma.$mst_authorization_usergroupPayload, S>

  type mst_authorization_usergroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_authorization_usergroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_authorization_usergroupCountAggregateInputType | true
    }

  export interface mst_authorization_usergroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_authorization_usergroup'], meta: { name: 'mst_authorization_usergroup' } }
    /**
     * Find zero or one Mst_authorization_usergroup that matches the filter.
     * @param {mst_authorization_usergroupFindUniqueArgs} args - Arguments to find a Mst_authorization_usergroup
     * @example
     * // Get one Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_authorization_usergroupFindUniqueArgs>(args: SelectSubset<T, mst_authorization_usergroupFindUniqueArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_authorization_usergroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_authorization_usergroupFindUniqueOrThrowArgs} args - Arguments to find a Mst_authorization_usergroup
     * @example
     * // Get one Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_authorization_usergroupFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_authorization_usergroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_authorization_usergroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupFindFirstArgs} args - Arguments to find a Mst_authorization_usergroup
     * @example
     * // Get one Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_authorization_usergroupFindFirstArgs>(args?: SelectSubset<T, mst_authorization_usergroupFindFirstArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_authorization_usergroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupFindFirstOrThrowArgs} args - Arguments to find a Mst_authorization_usergroup
     * @example
     * // Get one Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_authorization_usergroupFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_authorization_usergroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_authorization_usergroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_authorization_usergroups
     * const mst_authorization_usergroups = await prisma.mst_authorization_usergroup.findMany()
     * 
     * // Get first 10 Mst_authorization_usergroups
     * const mst_authorization_usergroups = await prisma.mst_authorization_usergroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_authorization_usergroupWithIdOnly = await prisma.mst_authorization_usergroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_authorization_usergroupFindManyArgs>(args?: SelectSubset<T, mst_authorization_usergroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_authorization_usergroup.
     * @param {mst_authorization_usergroupCreateArgs} args - Arguments to create a Mst_authorization_usergroup.
     * @example
     * // Create one Mst_authorization_usergroup
     * const Mst_authorization_usergroup = await prisma.mst_authorization_usergroup.create({
     *   data: {
     *     // ... data to create a Mst_authorization_usergroup
     *   }
     * })
     * 
     */
    create<T extends mst_authorization_usergroupCreateArgs>(args: SelectSubset<T, mst_authorization_usergroupCreateArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_authorization_usergroups.
     * @param {mst_authorization_usergroupCreateManyArgs} args - Arguments to create many Mst_authorization_usergroups.
     * @example
     * // Create many Mst_authorization_usergroups
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_authorization_usergroupCreateManyArgs>(args?: SelectSubset<T, mst_authorization_usergroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_authorization_usergroup.
     * @param {mst_authorization_usergroupDeleteArgs} args - Arguments to delete one Mst_authorization_usergroup.
     * @example
     * // Delete one Mst_authorization_usergroup
     * const Mst_authorization_usergroup = await prisma.mst_authorization_usergroup.delete({
     *   where: {
     *     // ... filter to delete one Mst_authorization_usergroup
     *   }
     * })
     * 
     */
    delete<T extends mst_authorization_usergroupDeleteArgs>(args: SelectSubset<T, mst_authorization_usergroupDeleteArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_authorization_usergroup.
     * @param {mst_authorization_usergroupUpdateArgs} args - Arguments to update one Mst_authorization_usergroup.
     * @example
     * // Update one Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_authorization_usergroupUpdateArgs>(args: SelectSubset<T, mst_authorization_usergroupUpdateArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_authorization_usergroups.
     * @param {mst_authorization_usergroupDeleteManyArgs} args - Arguments to filter Mst_authorization_usergroups to delete.
     * @example
     * // Delete a few Mst_authorization_usergroups
     * const { count } = await prisma.mst_authorization_usergroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_authorization_usergroupDeleteManyArgs>(args?: SelectSubset<T, mst_authorization_usergroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_authorization_usergroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_authorization_usergroups
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_authorization_usergroupUpdateManyArgs>(args: SelectSubset<T, mst_authorization_usergroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_authorization_usergroup.
     * @param {mst_authorization_usergroupUpsertArgs} args - Arguments to update or create a Mst_authorization_usergroup.
     * @example
     * // Update or create a Mst_authorization_usergroup
     * const mst_authorization_usergroup = await prisma.mst_authorization_usergroup.upsert({
     *   create: {
     *     // ... data to create a Mst_authorization_usergroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_authorization_usergroup we want to update
     *   }
     * })
     */
    upsert<T extends mst_authorization_usergroupUpsertArgs>(args: SelectSubset<T, mst_authorization_usergroupUpsertArgs<ExtArgs>>): Prisma__mst_authorization_usergroupClient<$Result.GetResult<Prisma.$mst_authorization_usergroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_authorization_usergroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupCountArgs} args - Arguments to filter Mst_authorization_usergroups to count.
     * @example
     * // Count the number of Mst_authorization_usergroups
     * const count = await prisma.mst_authorization_usergroup.count({
     *   where: {
     *     // ... the filter for the Mst_authorization_usergroups we want to count
     *   }
     * })
    **/
    count<T extends mst_authorization_usergroupCountArgs>(
      args?: Subset<T, mst_authorization_usergroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_authorization_usergroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_authorization_usergroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_authorization_usergroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_authorization_usergroupAggregateArgs>(args: Subset<T, Mst_authorization_usergroupAggregateArgs>): Prisma.PrismaPromise<GetMst_authorization_usergroupAggregateType<T>>

    /**
     * Group by Mst_authorization_usergroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_authorization_usergroupGroupByArgs} args - Group by arguments.
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
      T extends mst_authorization_usergroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_authorization_usergroupGroupByArgs['orderBy'] }
        : { orderBy?: mst_authorization_usergroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_authorization_usergroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_authorization_usergroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_authorization_usergroup model
   */
  readonly fields: mst_authorization_usergroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_authorization_usergroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_authorization_usergroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_authorization_usergroup model
   */ 
  interface mst_authorization_usergroupFieldRefs {
    readonly id: FieldRef<"mst_authorization_usergroup", 'Int'>
    readonly employee_code: FieldRef<"mst_authorization_usergroup", 'String'>
    readonly group_id: FieldRef<"mst_authorization_usergroup", 'Int'>
    readonly is_manager: FieldRef<"mst_authorization_usergroup", 'String'>
    readonly created_at: FieldRef<"mst_authorization_usergroup", 'DateTime'>
    readonly created_by: FieldRef<"mst_authorization_usergroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_authorization_usergroup findUnique
   */
  export type mst_authorization_usergroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_usergroup to fetch.
     */
    where: mst_authorization_usergroupWhereUniqueInput
  }

  /**
   * mst_authorization_usergroup findUniqueOrThrow
   */
  export type mst_authorization_usergroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_usergroup to fetch.
     */
    where: mst_authorization_usergroupWhereUniqueInput
  }

  /**
   * mst_authorization_usergroup findFirst
   */
  export type mst_authorization_usergroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_usergroup to fetch.
     */
    where?: mst_authorization_usergroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_usergroups to fetch.
     */
    orderBy?: mst_authorization_usergroupOrderByWithRelationInput | mst_authorization_usergroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorization_usergroups.
     */
    cursor?: mst_authorization_usergroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_usergroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_usergroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorization_usergroups.
     */
    distinct?: Mst_authorization_usergroupScalarFieldEnum | Mst_authorization_usergroupScalarFieldEnum[]
  }

  /**
   * mst_authorization_usergroup findFirstOrThrow
   */
  export type mst_authorization_usergroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_usergroup to fetch.
     */
    where?: mst_authorization_usergroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_usergroups to fetch.
     */
    orderBy?: mst_authorization_usergroupOrderByWithRelationInput | mst_authorization_usergroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_authorization_usergroups.
     */
    cursor?: mst_authorization_usergroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_usergroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_usergroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_authorization_usergroups.
     */
    distinct?: Mst_authorization_usergroupScalarFieldEnum | Mst_authorization_usergroupScalarFieldEnum[]
  }

  /**
   * mst_authorization_usergroup findMany
   */
  export type mst_authorization_usergroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter, which mst_authorization_usergroups to fetch.
     */
    where?: mst_authorization_usergroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_authorization_usergroups to fetch.
     */
    orderBy?: mst_authorization_usergroupOrderByWithRelationInput | mst_authorization_usergroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_authorization_usergroups.
     */
    cursor?: mst_authorization_usergroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_authorization_usergroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_authorization_usergroups.
     */
    skip?: number
    distinct?: Mst_authorization_usergroupScalarFieldEnum | Mst_authorization_usergroupScalarFieldEnum[]
  }

  /**
   * mst_authorization_usergroup create
   */
  export type mst_authorization_usergroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_authorization_usergroup.
     */
    data?: XOR<mst_authorization_usergroupCreateInput, mst_authorization_usergroupUncheckedCreateInput>
  }

  /**
   * mst_authorization_usergroup createMany
   */
  export type mst_authorization_usergroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_authorization_usergroups.
     */
    data: mst_authorization_usergroupCreateManyInput | mst_authorization_usergroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_authorization_usergroup update
   */
  export type mst_authorization_usergroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_authorization_usergroup.
     */
    data: XOR<mst_authorization_usergroupUpdateInput, mst_authorization_usergroupUncheckedUpdateInput>
    /**
     * Choose, which mst_authorization_usergroup to update.
     */
    where: mst_authorization_usergroupWhereUniqueInput
  }

  /**
   * mst_authorization_usergroup updateMany
   */
  export type mst_authorization_usergroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_authorization_usergroups.
     */
    data: XOR<mst_authorization_usergroupUpdateManyMutationInput, mst_authorization_usergroupUncheckedUpdateManyInput>
    /**
     * Filter which mst_authorization_usergroups to update
     */
    where?: mst_authorization_usergroupWhereInput
  }

  /**
   * mst_authorization_usergroup upsert
   */
  export type mst_authorization_usergroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_authorization_usergroup to update in case it exists.
     */
    where: mst_authorization_usergroupWhereUniqueInput
    /**
     * In case the mst_authorization_usergroup found by the `where` argument doesn't exist, create a new mst_authorization_usergroup with this data.
     */
    create: XOR<mst_authorization_usergroupCreateInput, mst_authorization_usergroupUncheckedCreateInput>
    /**
     * In case the mst_authorization_usergroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_authorization_usergroupUpdateInput, mst_authorization_usergroupUncheckedUpdateInput>
  }

  /**
   * mst_authorization_usergroup delete
   */
  export type mst_authorization_usergroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
    /**
     * Filter which mst_authorization_usergroup to delete.
     */
    where: mst_authorization_usergroupWhereUniqueInput
  }

  /**
   * mst_authorization_usergroup deleteMany
   */
  export type mst_authorization_usergroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_authorization_usergroups to delete
     */
    where?: mst_authorization_usergroupWhereInput
  }

  /**
   * mst_authorization_usergroup without action
   */
  export type mst_authorization_usergroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_authorization_usergroup
     */
    select?: mst_authorization_usergroupSelect<ExtArgs> | null
  }


  /**
   * Model mst_entities
   */

  export type AggregateMst_entities = {
    _count: Mst_entitiesCountAggregateOutputType | null
    _avg: Mst_entitiesAvgAggregateOutputType | null
    _sum: Mst_entitiesSumAggregateOutputType | null
    _min: Mst_entitiesMinAggregateOutputType | null
    _max: Mst_entitiesMaxAggregateOutputType | null
  }

  export type Mst_entitiesAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type Mst_entitiesSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type Mst_entitiesMinAggregateOutputType = {
    id: number | null
    entities_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_entitiesMaxAggregateOutputType = {
    id: number | null
    entities_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_entitiesCountAggregateOutputType = {
    id: number
    entities_name: number
    parent_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_entitiesAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type Mst_entitiesSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type Mst_entitiesMinAggregateInputType = {
    id?: true
    entities_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_entitiesMaxAggregateInputType = {
    id?: true
    entities_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_entitiesCountAggregateInputType = {
    id?: true
    entities_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_entitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_entities to aggregate.
     */
    where?: mst_entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_entities to fetch.
     */
    orderBy?: mst_entitiesOrderByWithRelationInput | mst_entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_entities
    **/
    _count?: true | Mst_entitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_entitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_entitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_entitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_entitiesMaxAggregateInputType
  }

  export type GetMst_entitiesAggregateType<T extends Mst_entitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_entities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_entities[P]>
      : GetScalarType<T[P], AggregateMst_entities[P]>
  }




  export type mst_entitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_entitiesWhereInput
    orderBy?: mst_entitiesOrderByWithAggregationInput | mst_entitiesOrderByWithAggregationInput[]
    by: Mst_entitiesScalarFieldEnum[] | Mst_entitiesScalarFieldEnum
    having?: mst_entitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_entitiesCountAggregateInputType | true
    _avg?: Mst_entitiesAvgAggregateInputType
    _sum?: Mst_entitiesSumAggregateInputType
    _min?: Mst_entitiesMinAggregateInputType
    _max?: Mst_entitiesMaxAggregateInputType
  }

  export type Mst_entitiesGroupByOutputType = {
    id: number
    entities_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_entitiesCountAggregateOutputType | null
    _avg: Mst_entitiesAvgAggregateOutputType | null
    _sum: Mst_entitiesSumAggregateOutputType | null
    _min: Mst_entitiesMinAggregateOutputType | null
    _max: Mst_entitiesMaxAggregateOutputType | null
  }

  type GetMst_entitiesGroupByPayload<T extends mst_entitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_entitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_entitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_entitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_entitiesGroupByOutputType[P]>
        }
      >
    >


  export type mst_entitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entities_name?: boolean
    parent_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_entities"]>


  export type mst_entitiesSelectScalar = {
    id?: boolean
    entities_name?: boolean
    parent_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_entitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_entities"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entities_name: string | null
      parent_id: number | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_entities"]>
    composites: {}
  }

  type mst_entitiesGetPayload<S extends boolean | null | undefined | mst_entitiesDefaultArgs> = $Result.GetResult<Prisma.$mst_entitiesPayload, S>

  type mst_entitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_entitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_entitiesCountAggregateInputType | true
    }

  export interface mst_entitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_entities'], meta: { name: 'mst_entities' } }
    /**
     * Find zero or one Mst_entities that matches the filter.
     * @param {mst_entitiesFindUniqueArgs} args - Arguments to find a Mst_entities
     * @example
     * // Get one Mst_entities
     * const mst_entities = await prisma.mst_entities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_entitiesFindUniqueArgs>(args: SelectSubset<T, mst_entitiesFindUniqueArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_entities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_entitiesFindUniqueOrThrowArgs} args - Arguments to find a Mst_entities
     * @example
     * // Get one Mst_entities
     * const mst_entities = await prisma.mst_entities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_entitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_entitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesFindFirstArgs} args - Arguments to find a Mst_entities
     * @example
     * // Get one Mst_entities
     * const mst_entities = await prisma.mst_entities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_entitiesFindFirstArgs>(args?: SelectSubset<T, mst_entitiesFindFirstArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_entities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesFindFirstOrThrowArgs} args - Arguments to find a Mst_entities
     * @example
     * // Get one Mst_entities
     * const mst_entities = await prisma.mst_entities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_entitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_entitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_entities
     * const mst_entities = await prisma.mst_entities.findMany()
     * 
     * // Get first 10 Mst_entities
     * const mst_entities = await prisma.mst_entities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_entitiesWithIdOnly = await prisma.mst_entities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_entitiesFindManyArgs>(args?: SelectSubset<T, mst_entitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_entities.
     * @param {mst_entitiesCreateArgs} args - Arguments to create a Mst_entities.
     * @example
     * // Create one Mst_entities
     * const Mst_entities = await prisma.mst_entities.create({
     *   data: {
     *     // ... data to create a Mst_entities
     *   }
     * })
     * 
     */
    create<T extends mst_entitiesCreateArgs>(args: SelectSubset<T, mst_entitiesCreateArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_entities.
     * @param {mst_entitiesCreateManyArgs} args - Arguments to create many Mst_entities.
     * @example
     * // Create many Mst_entities
     * const mst_entities = await prisma.mst_entities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_entitiesCreateManyArgs>(args?: SelectSubset<T, mst_entitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_entities.
     * @param {mst_entitiesDeleteArgs} args - Arguments to delete one Mst_entities.
     * @example
     * // Delete one Mst_entities
     * const Mst_entities = await prisma.mst_entities.delete({
     *   where: {
     *     // ... filter to delete one Mst_entities
     *   }
     * })
     * 
     */
    delete<T extends mst_entitiesDeleteArgs>(args: SelectSubset<T, mst_entitiesDeleteArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_entities.
     * @param {mst_entitiesUpdateArgs} args - Arguments to update one Mst_entities.
     * @example
     * // Update one Mst_entities
     * const mst_entities = await prisma.mst_entities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_entitiesUpdateArgs>(args: SelectSubset<T, mst_entitiesUpdateArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_entities.
     * @param {mst_entitiesDeleteManyArgs} args - Arguments to filter Mst_entities to delete.
     * @example
     * // Delete a few Mst_entities
     * const { count } = await prisma.mst_entities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_entitiesDeleteManyArgs>(args?: SelectSubset<T, mst_entitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_entities
     * const mst_entities = await prisma.mst_entities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_entitiesUpdateManyArgs>(args: SelectSubset<T, mst_entitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_entities.
     * @param {mst_entitiesUpsertArgs} args - Arguments to update or create a Mst_entities.
     * @example
     * // Update or create a Mst_entities
     * const mst_entities = await prisma.mst_entities.upsert({
     *   create: {
     *     // ... data to create a Mst_entities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_entities we want to update
     *   }
     * })
     */
    upsert<T extends mst_entitiesUpsertArgs>(args: SelectSubset<T, mst_entitiesUpsertArgs<ExtArgs>>): Prisma__mst_entitiesClient<$Result.GetResult<Prisma.$mst_entitiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesCountArgs} args - Arguments to filter Mst_entities to count.
     * @example
     * // Count the number of Mst_entities
     * const count = await prisma.mst_entities.count({
     *   where: {
     *     // ... the filter for the Mst_entities we want to count
     *   }
     * })
    **/
    count<T extends mst_entitiesCountArgs>(
      args?: Subset<T, mst_entitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_entitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_entitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_entitiesAggregateArgs>(args: Subset<T, Mst_entitiesAggregateArgs>): Prisma.PrismaPromise<GetMst_entitiesAggregateType<T>>

    /**
     * Group by Mst_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_entitiesGroupByArgs} args - Group by arguments.
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
      T extends mst_entitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_entitiesGroupByArgs['orderBy'] }
        : { orderBy?: mst_entitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_entitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_entitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_entities model
   */
  readonly fields: mst_entitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_entities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_entitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_entities model
   */ 
  interface mst_entitiesFieldRefs {
    readonly id: FieldRef<"mst_entities", 'Int'>
    readonly entities_name: FieldRef<"mst_entities", 'String'>
    readonly parent_id: FieldRef<"mst_entities", 'Int'>
    readonly created_at: FieldRef<"mst_entities", 'DateTime'>
    readonly created_by: FieldRef<"mst_entities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_entities findUnique
   */
  export type mst_entitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter, which mst_entities to fetch.
     */
    where: mst_entitiesWhereUniqueInput
  }

  /**
   * mst_entities findUniqueOrThrow
   */
  export type mst_entitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter, which mst_entities to fetch.
     */
    where: mst_entitiesWhereUniqueInput
  }

  /**
   * mst_entities findFirst
   */
  export type mst_entitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter, which mst_entities to fetch.
     */
    where?: mst_entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_entities to fetch.
     */
    orderBy?: mst_entitiesOrderByWithRelationInput | mst_entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_entities.
     */
    cursor?: mst_entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_entities.
     */
    distinct?: Mst_entitiesScalarFieldEnum | Mst_entitiesScalarFieldEnum[]
  }

  /**
   * mst_entities findFirstOrThrow
   */
  export type mst_entitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter, which mst_entities to fetch.
     */
    where?: mst_entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_entities to fetch.
     */
    orderBy?: mst_entitiesOrderByWithRelationInput | mst_entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_entities.
     */
    cursor?: mst_entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_entities.
     */
    distinct?: Mst_entitiesScalarFieldEnum | Mst_entitiesScalarFieldEnum[]
  }

  /**
   * mst_entities findMany
   */
  export type mst_entitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter, which mst_entities to fetch.
     */
    where?: mst_entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_entities to fetch.
     */
    orderBy?: mst_entitiesOrderByWithRelationInput | mst_entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_entities.
     */
    cursor?: mst_entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_entities.
     */
    skip?: number
    distinct?: Mst_entitiesScalarFieldEnum | Mst_entitiesScalarFieldEnum[]
  }

  /**
   * mst_entities create
   */
  export type mst_entitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_entities.
     */
    data?: XOR<mst_entitiesCreateInput, mst_entitiesUncheckedCreateInput>
  }

  /**
   * mst_entities createMany
   */
  export type mst_entitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_entities.
     */
    data: mst_entitiesCreateManyInput | mst_entitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_entities update
   */
  export type mst_entitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_entities.
     */
    data: XOR<mst_entitiesUpdateInput, mst_entitiesUncheckedUpdateInput>
    /**
     * Choose, which mst_entities to update.
     */
    where: mst_entitiesWhereUniqueInput
  }

  /**
   * mst_entities updateMany
   */
  export type mst_entitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_entities.
     */
    data: XOR<mst_entitiesUpdateManyMutationInput, mst_entitiesUncheckedUpdateManyInput>
    /**
     * Filter which mst_entities to update
     */
    where?: mst_entitiesWhereInput
  }

  /**
   * mst_entities upsert
   */
  export type mst_entitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_entities to update in case it exists.
     */
    where: mst_entitiesWhereUniqueInput
    /**
     * In case the mst_entities found by the `where` argument doesn't exist, create a new mst_entities with this data.
     */
    create: XOR<mst_entitiesCreateInput, mst_entitiesUncheckedCreateInput>
    /**
     * In case the mst_entities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_entitiesUpdateInput, mst_entitiesUncheckedUpdateInput>
  }

  /**
   * mst_entities delete
   */
  export type mst_entitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
    /**
     * Filter which mst_entities to delete.
     */
    where: mst_entitiesWhereUniqueInput
  }

  /**
   * mst_entities deleteMany
   */
  export type mst_entitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_entities to delete
     */
    where?: mst_entitiesWhereInput
  }

  /**
   * mst_entities without action
   */
  export type mst_entitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_entities
     */
    select?: mst_entitiesSelect<ExtArgs> | null
  }


  /**
   * Model mst_group
   */

  export type AggregateMst_group = {
    _count: Mst_groupCountAggregateOutputType | null
    _avg: Mst_groupAvgAggregateOutputType | null
    _sum: Mst_groupSumAggregateOutputType | null
    _min: Mst_groupMinAggregateOutputType | null
    _max: Mst_groupMaxAggregateOutputType | null
  }

  export type Mst_groupAvgAggregateOutputType = {
    id: number | null
    entities_id: number | null
    parent_id: number | null
  }

  export type Mst_groupSumAggregateOutputType = {
    id: number | null
    entities_id: number | null
    parent_id: number | null
  }

  export type Mst_groupMinAggregateOutputType = {
    id: number | null
    entities_id: number | null
    group_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_groupMaxAggregateOutputType = {
    id: number | null
    entities_id: number | null
    group_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_groupCountAggregateOutputType = {
    id: number
    entities_id: number
    group_name: number
    parent_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_groupAvgAggregateInputType = {
    id?: true
    entities_id?: true
    parent_id?: true
  }

  export type Mst_groupSumAggregateInputType = {
    id?: true
    entities_id?: true
    parent_id?: true
  }

  export type Mst_groupMinAggregateInputType = {
    id?: true
    entities_id?: true
    group_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_groupMaxAggregateInputType = {
    id?: true
    entities_id?: true
    group_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_groupCountAggregateInputType = {
    id?: true
    entities_id?: true
    group_name?: true
    parent_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_groupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_group to aggregate.
     */
    where?: mst_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_groups to fetch.
     */
    orderBy?: mst_groupOrderByWithRelationInput | mst_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_groups
    **/
    _count?: true | Mst_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_groupMaxAggregateInputType
  }

  export type GetMst_groupAggregateType<T extends Mst_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_group[P]>
      : GetScalarType<T[P], AggregateMst_group[P]>
  }




  export type mst_groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_groupWhereInput
    orderBy?: mst_groupOrderByWithAggregationInput | mst_groupOrderByWithAggregationInput[]
    by: Mst_groupScalarFieldEnum[] | Mst_groupScalarFieldEnum
    having?: mst_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_groupCountAggregateInputType | true
    _avg?: Mst_groupAvgAggregateInputType
    _sum?: Mst_groupSumAggregateInputType
    _min?: Mst_groupMinAggregateInputType
    _max?: Mst_groupMaxAggregateInputType
  }

  export type Mst_groupGroupByOutputType = {
    id: number
    entities_id: number | null
    group_name: string | null
    parent_id: number | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_groupCountAggregateOutputType | null
    _avg: Mst_groupAvgAggregateOutputType | null
    _sum: Mst_groupSumAggregateOutputType | null
    _min: Mst_groupMinAggregateOutputType | null
    _max: Mst_groupMaxAggregateOutputType | null
  }

  type GetMst_groupGroupByPayload<T extends mst_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_groupGroupByOutputType[P]>
        }
      >
    >


  export type mst_groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entities_id?: boolean
    group_name?: boolean
    parent_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_group"]>


  export type mst_groupSelectScalar = {
    id?: boolean
    entities_id?: boolean
    group_name?: boolean
    parent_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_group"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entities_id: number | null
      group_name: string | null
      parent_id: number | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_group"]>
    composites: {}
  }

  type mst_groupGetPayload<S extends boolean | null | undefined | mst_groupDefaultArgs> = $Result.GetResult<Prisma.$mst_groupPayload, S>

  type mst_groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_groupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_groupCountAggregateInputType | true
    }

  export interface mst_groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_group'], meta: { name: 'mst_group' } }
    /**
     * Find zero or one Mst_group that matches the filter.
     * @param {mst_groupFindUniqueArgs} args - Arguments to find a Mst_group
     * @example
     * // Get one Mst_group
     * const mst_group = await prisma.mst_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_groupFindUniqueArgs>(args: SelectSubset<T, mst_groupFindUniqueArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_groupFindUniqueOrThrowArgs} args - Arguments to find a Mst_group
     * @example
     * // Get one Mst_group
     * const mst_group = await prisma.mst_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_groupFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupFindFirstArgs} args - Arguments to find a Mst_group
     * @example
     * // Get one Mst_group
     * const mst_group = await prisma.mst_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_groupFindFirstArgs>(args?: SelectSubset<T, mst_groupFindFirstArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupFindFirstOrThrowArgs} args - Arguments to find a Mst_group
     * @example
     * // Get one Mst_group
     * const mst_group = await prisma.mst_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_groupFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_groups
     * const mst_groups = await prisma.mst_group.findMany()
     * 
     * // Get first 10 Mst_groups
     * const mst_groups = await prisma.mst_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_groupWithIdOnly = await prisma.mst_group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_groupFindManyArgs>(args?: SelectSubset<T, mst_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_group.
     * @param {mst_groupCreateArgs} args - Arguments to create a Mst_group.
     * @example
     * // Create one Mst_group
     * const Mst_group = await prisma.mst_group.create({
     *   data: {
     *     // ... data to create a Mst_group
     *   }
     * })
     * 
     */
    create<T extends mst_groupCreateArgs>(args: SelectSubset<T, mst_groupCreateArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_groups.
     * @param {mst_groupCreateManyArgs} args - Arguments to create many Mst_groups.
     * @example
     * // Create many Mst_groups
     * const mst_group = await prisma.mst_group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_groupCreateManyArgs>(args?: SelectSubset<T, mst_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_group.
     * @param {mst_groupDeleteArgs} args - Arguments to delete one Mst_group.
     * @example
     * // Delete one Mst_group
     * const Mst_group = await prisma.mst_group.delete({
     *   where: {
     *     // ... filter to delete one Mst_group
     *   }
     * })
     * 
     */
    delete<T extends mst_groupDeleteArgs>(args: SelectSubset<T, mst_groupDeleteArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_group.
     * @param {mst_groupUpdateArgs} args - Arguments to update one Mst_group.
     * @example
     * // Update one Mst_group
     * const mst_group = await prisma.mst_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_groupUpdateArgs>(args: SelectSubset<T, mst_groupUpdateArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_groups.
     * @param {mst_groupDeleteManyArgs} args - Arguments to filter Mst_groups to delete.
     * @example
     * // Delete a few Mst_groups
     * const { count } = await prisma.mst_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_groupDeleteManyArgs>(args?: SelectSubset<T, mst_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_groups
     * const mst_group = await prisma.mst_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_groupUpdateManyArgs>(args: SelectSubset<T, mst_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_group.
     * @param {mst_groupUpsertArgs} args - Arguments to update or create a Mst_group.
     * @example
     * // Update or create a Mst_group
     * const mst_group = await prisma.mst_group.upsert({
     *   create: {
     *     // ... data to create a Mst_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_group we want to update
     *   }
     * })
     */
    upsert<T extends mst_groupUpsertArgs>(args: SelectSubset<T, mst_groupUpsertArgs<ExtArgs>>): Prisma__mst_groupClient<$Result.GetResult<Prisma.$mst_groupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupCountArgs} args - Arguments to filter Mst_groups to count.
     * @example
     * // Count the number of Mst_groups
     * const count = await prisma.mst_group.count({
     *   where: {
     *     // ... the filter for the Mst_groups we want to count
     *   }
     * })
    **/
    count<T extends mst_groupCountArgs>(
      args?: Subset<T, mst_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_groupAggregateArgs>(args: Subset<T, Mst_groupAggregateArgs>): Prisma.PrismaPromise<GetMst_groupAggregateType<T>>

    /**
     * Group by Mst_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_groupGroupByArgs} args - Group by arguments.
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
      T extends mst_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_groupGroupByArgs['orderBy'] }
        : { orderBy?: mst_groupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_group model
   */
  readonly fields: mst_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_group model
   */ 
  interface mst_groupFieldRefs {
    readonly id: FieldRef<"mst_group", 'Int'>
    readonly entities_id: FieldRef<"mst_group", 'Int'>
    readonly group_name: FieldRef<"mst_group", 'String'>
    readonly parent_id: FieldRef<"mst_group", 'Int'>
    readonly created_at: FieldRef<"mst_group", 'DateTime'>
    readonly created_by: FieldRef<"mst_group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_group findUnique
   */
  export type mst_groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter, which mst_group to fetch.
     */
    where: mst_groupWhereUniqueInput
  }

  /**
   * mst_group findUniqueOrThrow
   */
  export type mst_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter, which mst_group to fetch.
     */
    where: mst_groupWhereUniqueInput
  }

  /**
   * mst_group findFirst
   */
  export type mst_groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter, which mst_group to fetch.
     */
    where?: mst_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_groups to fetch.
     */
    orderBy?: mst_groupOrderByWithRelationInput | mst_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_groups.
     */
    cursor?: mst_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_groups.
     */
    distinct?: Mst_groupScalarFieldEnum | Mst_groupScalarFieldEnum[]
  }

  /**
   * mst_group findFirstOrThrow
   */
  export type mst_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter, which mst_group to fetch.
     */
    where?: mst_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_groups to fetch.
     */
    orderBy?: mst_groupOrderByWithRelationInput | mst_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_groups.
     */
    cursor?: mst_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_groups.
     */
    distinct?: Mst_groupScalarFieldEnum | Mst_groupScalarFieldEnum[]
  }

  /**
   * mst_group findMany
   */
  export type mst_groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter, which mst_groups to fetch.
     */
    where?: mst_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_groups to fetch.
     */
    orderBy?: mst_groupOrderByWithRelationInput | mst_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_groups.
     */
    cursor?: mst_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_groups.
     */
    skip?: number
    distinct?: Mst_groupScalarFieldEnum | Mst_groupScalarFieldEnum[]
  }

  /**
   * mst_group create
   */
  export type mst_groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_group.
     */
    data?: XOR<mst_groupCreateInput, mst_groupUncheckedCreateInput>
  }

  /**
   * mst_group createMany
   */
  export type mst_groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_groups.
     */
    data: mst_groupCreateManyInput | mst_groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_group update
   */
  export type mst_groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_group.
     */
    data: XOR<mst_groupUpdateInput, mst_groupUncheckedUpdateInput>
    /**
     * Choose, which mst_group to update.
     */
    where: mst_groupWhereUniqueInput
  }

  /**
   * mst_group updateMany
   */
  export type mst_groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_groups.
     */
    data: XOR<mst_groupUpdateManyMutationInput, mst_groupUncheckedUpdateManyInput>
    /**
     * Filter which mst_groups to update
     */
    where?: mst_groupWhereInput
  }

  /**
   * mst_group upsert
   */
  export type mst_groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_group to update in case it exists.
     */
    where: mst_groupWhereUniqueInput
    /**
     * In case the mst_group found by the `where` argument doesn't exist, create a new mst_group with this data.
     */
    create: XOR<mst_groupCreateInput, mst_groupUncheckedCreateInput>
    /**
     * In case the mst_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_groupUpdateInput, mst_groupUncheckedUpdateInput>
  }

  /**
   * mst_group delete
   */
  export type mst_groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
    /**
     * Filter which mst_group to delete.
     */
    where: mst_groupWhereUniqueInput
  }

  /**
   * mst_group deleteMany
   */
  export type mst_groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_groups to delete
     */
    where?: mst_groupWhereInput
  }

  /**
   * mst_group without action
   */
  export type mst_groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_group
     */
    select?: mst_groupSelect<ExtArgs> | null
  }


  /**
   * Model mst_manpower_cost
   */

  export type AggregateMst_manpower_cost = {
    _count: Mst_manpower_costCountAggregateOutputType | null
    _avg: Mst_manpower_costAvgAggregateOutputType | null
    _sum: Mst_manpower_costSumAggregateOutputType | null
    _min: Mst_manpower_costMinAggregateOutputType | null
    _max: Mst_manpower_costMaxAggregateOutputType | null
  }

  export type Mst_manpower_costAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_manpower_costSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_manpower_costMinAggregateOutputType = {
    id: number | null
    technician_level: string | null
    hourly: string | null
    monthly: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_manpower_costMaxAggregateOutputType = {
    id: number | null
    technician_level: string | null
    hourly: string | null
    monthly: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_manpower_costCountAggregateOutputType = {
    id: number
    technician_level: number
    hourly: number
    monthly: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_manpower_costAvgAggregateInputType = {
    id?: true
  }

  export type Mst_manpower_costSumAggregateInputType = {
    id?: true
  }

  export type Mst_manpower_costMinAggregateInputType = {
    id?: true
    technician_level?: true
    hourly?: true
    monthly?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_manpower_costMaxAggregateInputType = {
    id?: true
    technician_level?: true
    hourly?: true
    monthly?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_manpower_costCountAggregateInputType = {
    id?: true
    technician_level?: true
    hourly?: true
    monthly?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_manpower_costAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_manpower_cost to aggregate.
     */
    where?: mst_manpower_costWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_manpower_costs to fetch.
     */
    orderBy?: mst_manpower_costOrderByWithRelationInput | mst_manpower_costOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_manpower_costWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_manpower_costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_manpower_costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_manpower_costs
    **/
    _count?: true | Mst_manpower_costCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_manpower_costAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_manpower_costSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_manpower_costMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_manpower_costMaxAggregateInputType
  }

  export type GetMst_manpower_costAggregateType<T extends Mst_manpower_costAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_manpower_cost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_manpower_cost[P]>
      : GetScalarType<T[P], AggregateMst_manpower_cost[P]>
  }




  export type mst_manpower_costGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_manpower_costWhereInput
    orderBy?: mst_manpower_costOrderByWithAggregationInput | mst_manpower_costOrderByWithAggregationInput[]
    by: Mst_manpower_costScalarFieldEnum[] | Mst_manpower_costScalarFieldEnum
    having?: mst_manpower_costScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_manpower_costCountAggregateInputType | true
    _avg?: Mst_manpower_costAvgAggregateInputType
    _sum?: Mst_manpower_costSumAggregateInputType
    _min?: Mst_manpower_costMinAggregateInputType
    _max?: Mst_manpower_costMaxAggregateInputType
  }

  export type Mst_manpower_costGroupByOutputType = {
    id: number
    technician_level: string | null
    hourly: string | null
    monthly: string | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_manpower_costCountAggregateOutputType | null
    _avg: Mst_manpower_costAvgAggregateOutputType | null
    _sum: Mst_manpower_costSumAggregateOutputType | null
    _min: Mst_manpower_costMinAggregateOutputType | null
    _max: Mst_manpower_costMaxAggregateOutputType | null
  }

  type GetMst_manpower_costGroupByPayload<T extends mst_manpower_costGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_manpower_costGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_manpower_costGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_manpower_costGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_manpower_costGroupByOutputType[P]>
        }
      >
    >


  export type mst_manpower_costSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technician_level?: boolean
    hourly?: boolean
    monthly?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_manpower_cost"]>


  export type mst_manpower_costSelectScalar = {
    id?: boolean
    technician_level?: boolean
    hourly?: boolean
    monthly?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_manpower_costPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_manpower_cost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      technician_level: string | null
      hourly: string | null
      monthly: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_manpower_cost"]>
    composites: {}
  }

  type mst_manpower_costGetPayload<S extends boolean | null | undefined | mst_manpower_costDefaultArgs> = $Result.GetResult<Prisma.$mst_manpower_costPayload, S>

  type mst_manpower_costCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_manpower_costFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_manpower_costCountAggregateInputType | true
    }

  export interface mst_manpower_costDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_manpower_cost'], meta: { name: 'mst_manpower_cost' } }
    /**
     * Find zero or one Mst_manpower_cost that matches the filter.
     * @param {mst_manpower_costFindUniqueArgs} args - Arguments to find a Mst_manpower_cost
     * @example
     * // Get one Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_manpower_costFindUniqueArgs>(args: SelectSubset<T, mst_manpower_costFindUniqueArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_manpower_cost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_manpower_costFindUniqueOrThrowArgs} args - Arguments to find a Mst_manpower_cost
     * @example
     * // Get one Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_manpower_costFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_manpower_costFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_manpower_cost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costFindFirstArgs} args - Arguments to find a Mst_manpower_cost
     * @example
     * // Get one Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_manpower_costFindFirstArgs>(args?: SelectSubset<T, mst_manpower_costFindFirstArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_manpower_cost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costFindFirstOrThrowArgs} args - Arguments to find a Mst_manpower_cost
     * @example
     * // Get one Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_manpower_costFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_manpower_costFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_manpower_costs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_manpower_costs
     * const mst_manpower_costs = await prisma.mst_manpower_cost.findMany()
     * 
     * // Get first 10 Mst_manpower_costs
     * const mst_manpower_costs = await prisma.mst_manpower_cost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_manpower_costWithIdOnly = await prisma.mst_manpower_cost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_manpower_costFindManyArgs>(args?: SelectSubset<T, mst_manpower_costFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_manpower_cost.
     * @param {mst_manpower_costCreateArgs} args - Arguments to create a Mst_manpower_cost.
     * @example
     * // Create one Mst_manpower_cost
     * const Mst_manpower_cost = await prisma.mst_manpower_cost.create({
     *   data: {
     *     // ... data to create a Mst_manpower_cost
     *   }
     * })
     * 
     */
    create<T extends mst_manpower_costCreateArgs>(args: SelectSubset<T, mst_manpower_costCreateArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_manpower_costs.
     * @param {mst_manpower_costCreateManyArgs} args - Arguments to create many Mst_manpower_costs.
     * @example
     * // Create many Mst_manpower_costs
     * const mst_manpower_cost = await prisma.mst_manpower_cost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_manpower_costCreateManyArgs>(args?: SelectSubset<T, mst_manpower_costCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_manpower_cost.
     * @param {mst_manpower_costDeleteArgs} args - Arguments to delete one Mst_manpower_cost.
     * @example
     * // Delete one Mst_manpower_cost
     * const Mst_manpower_cost = await prisma.mst_manpower_cost.delete({
     *   where: {
     *     // ... filter to delete one Mst_manpower_cost
     *   }
     * })
     * 
     */
    delete<T extends mst_manpower_costDeleteArgs>(args: SelectSubset<T, mst_manpower_costDeleteArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_manpower_cost.
     * @param {mst_manpower_costUpdateArgs} args - Arguments to update one Mst_manpower_cost.
     * @example
     * // Update one Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_manpower_costUpdateArgs>(args: SelectSubset<T, mst_manpower_costUpdateArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_manpower_costs.
     * @param {mst_manpower_costDeleteManyArgs} args - Arguments to filter Mst_manpower_costs to delete.
     * @example
     * // Delete a few Mst_manpower_costs
     * const { count } = await prisma.mst_manpower_cost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_manpower_costDeleteManyArgs>(args?: SelectSubset<T, mst_manpower_costDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_manpower_costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_manpower_costs
     * const mst_manpower_cost = await prisma.mst_manpower_cost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_manpower_costUpdateManyArgs>(args: SelectSubset<T, mst_manpower_costUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_manpower_cost.
     * @param {mst_manpower_costUpsertArgs} args - Arguments to update or create a Mst_manpower_cost.
     * @example
     * // Update or create a Mst_manpower_cost
     * const mst_manpower_cost = await prisma.mst_manpower_cost.upsert({
     *   create: {
     *     // ... data to create a Mst_manpower_cost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_manpower_cost we want to update
     *   }
     * })
     */
    upsert<T extends mst_manpower_costUpsertArgs>(args: SelectSubset<T, mst_manpower_costUpsertArgs<ExtArgs>>): Prisma__mst_manpower_costClient<$Result.GetResult<Prisma.$mst_manpower_costPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_manpower_costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costCountArgs} args - Arguments to filter Mst_manpower_costs to count.
     * @example
     * // Count the number of Mst_manpower_costs
     * const count = await prisma.mst_manpower_cost.count({
     *   where: {
     *     // ... the filter for the Mst_manpower_costs we want to count
     *   }
     * })
    **/
    count<T extends mst_manpower_costCountArgs>(
      args?: Subset<T, mst_manpower_costCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_manpower_costCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_manpower_cost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_manpower_costAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_manpower_costAggregateArgs>(args: Subset<T, Mst_manpower_costAggregateArgs>): Prisma.PrismaPromise<GetMst_manpower_costAggregateType<T>>

    /**
     * Group by Mst_manpower_cost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_manpower_costGroupByArgs} args - Group by arguments.
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
      T extends mst_manpower_costGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_manpower_costGroupByArgs['orderBy'] }
        : { orderBy?: mst_manpower_costGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_manpower_costGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_manpower_costGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_manpower_cost model
   */
  readonly fields: mst_manpower_costFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_manpower_cost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_manpower_costClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_manpower_cost model
   */ 
  interface mst_manpower_costFieldRefs {
    readonly id: FieldRef<"mst_manpower_cost", 'Int'>
    readonly technician_level: FieldRef<"mst_manpower_cost", 'String'>
    readonly hourly: FieldRef<"mst_manpower_cost", 'String'>
    readonly monthly: FieldRef<"mst_manpower_cost", 'String'>
    readonly created_at: FieldRef<"mst_manpower_cost", 'DateTime'>
    readonly created_by: FieldRef<"mst_manpower_cost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_manpower_cost findUnique
   */
  export type mst_manpower_costFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter, which mst_manpower_cost to fetch.
     */
    where: mst_manpower_costWhereUniqueInput
  }

  /**
   * mst_manpower_cost findUniqueOrThrow
   */
  export type mst_manpower_costFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter, which mst_manpower_cost to fetch.
     */
    where: mst_manpower_costWhereUniqueInput
  }

  /**
   * mst_manpower_cost findFirst
   */
  export type mst_manpower_costFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter, which mst_manpower_cost to fetch.
     */
    where?: mst_manpower_costWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_manpower_costs to fetch.
     */
    orderBy?: mst_manpower_costOrderByWithRelationInput | mst_manpower_costOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_manpower_costs.
     */
    cursor?: mst_manpower_costWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_manpower_costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_manpower_costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_manpower_costs.
     */
    distinct?: Mst_manpower_costScalarFieldEnum | Mst_manpower_costScalarFieldEnum[]
  }

  /**
   * mst_manpower_cost findFirstOrThrow
   */
  export type mst_manpower_costFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter, which mst_manpower_cost to fetch.
     */
    where?: mst_manpower_costWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_manpower_costs to fetch.
     */
    orderBy?: mst_manpower_costOrderByWithRelationInput | mst_manpower_costOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_manpower_costs.
     */
    cursor?: mst_manpower_costWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_manpower_costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_manpower_costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_manpower_costs.
     */
    distinct?: Mst_manpower_costScalarFieldEnum | Mst_manpower_costScalarFieldEnum[]
  }

  /**
   * mst_manpower_cost findMany
   */
  export type mst_manpower_costFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter, which mst_manpower_costs to fetch.
     */
    where?: mst_manpower_costWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_manpower_costs to fetch.
     */
    orderBy?: mst_manpower_costOrderByWithRelationInput | mst_manpower_costOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_manpower_costs.
     */
    cursor?: mst_manpower_costWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_manpower_costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_manpower_costs.
     */
    skip?: number
    distinct?: Mst_manpower_costScalarFieldEnum | Mst_manpower_costScalarFieldEnum[]
  }

  /**
   * mst_manpower_cost create
   */
  export type mst_manpower_costCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_manpower_cost.
     */
    data?: XOR<mst_manpower_costCreateInput, mst_manpower_costUncheckedCreateInput>
  }

  /**
   * mst_manpower_cost createMany
   */
  export type mst_manpower_costCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_manpower_costs.
     */
    data: mst_manpower_costCreateManyInput | mst_manpower_costCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_manpower_cost update
   */
  export type mst_manpower_costUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_manpower_cost.
     */
    data: XOR<mst_manpower_costUpdateInput, mst_manpower_costUncheckedUpdateInput>
    /**
     * Choose, which mst_manpower_cost to update.
     */
    where: mst_manpower_costWhereUniqueInput
  }

  /**
   * mst_manpower_cost updateMany
   */
  export type mst_manpower_costUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_manpower_costs.
     */
    data: XOR<mst_manpower_costUpdateManyMutationInput, mst_manpower_costUncheckedUpdateManyInput>
    /**
     * Filter which mst_manpower_costs to update
     */
    where?: mst_manpower_costWhereInput
  }

  /**
   * mst_manpower_cost upsert
   */
  export type mst_manpower_costUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_manpower_cost to update in case it exists.
     */
    where: mst_manpower_costWhereUniqueInput
    /**
     * In case the mst_manpower_cost found by the `where` argument doesn't exist, create a new mst_manpower_cost with this data.
     */
    create: XOR<mst_manpower_costCreateInput, mst_manpower_costUncheckedCreateInput>
    /**
     * In case the mst_manpower_cost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_manpower_costUpdateInput, mst_manpower_costUncheckedUpdateInput>
  }

  /**
   * mst_manpower_cost delete
   */
  export type mst_manpower_costDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
    /**
     * Filter which mst_manpower_cost to delete.
     */
    where: mst_manpower_costWhereUniqueInput
  }

  /**
   * mst_manpower_cost deleteMany
   */
  export type mst_manpower_costDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_manpower_costs to delete
     */
    where?: mst_manpower_costWhereInput
  }

  /**
   * mst_manpower_cost without action
   */
  export type mst_manpower_costDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_manpower_cost
     */
    select?: mst_manpower_costSelect<ExtArgs> | null
  }


  /**
   * Model mst_profile
   */

  export type AggregateMst_profile = {
    _count: Mst_profileCountAggregateOutputType | null
    _avg: Mst_profileAvgAggregateOutputType | null
    _sum: Mst_profileSumAggregateOutputType | null
    _min: Mst_profileMinAggregateOutputType | null
    _max: Mst_profileMaxAggregateOutputType | null
  }

  export type Mst_profileAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_profileSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_profileMinAggregateOutputType = {
    id: number | null
    profile_name: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_profileMaxAggregateOutputType = {
    id: number | null
    profile_name: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Mst_profileCountAggregateOutputType = {
    id: number
    profile_name: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Mst_profileAvgAggregateInputType = {
    id?: true
  }

  export type Mst_profileSumAggregateInputType = {
    id?: true
  }

  export type Mst_profileMinAggregateInputType = {
    id?: true
    profile_name?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_profileMaxAggregateInputType = {
    id?: true
    profile_name?: true
    created_at?: true
    created_by?: true
  }

  export type Mst_profileCountAggregateInputType = {
    id?: true
    profile_name?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Mst_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_profile to aggregate.
     */
    where?: mst_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_profiles to fetch.
     */
    orderBy?: mst_profileOrderByWithRelationInput | mst_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_profiles
    **/
    _count?: true | Mst_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_profileMaxAggregateInputType
  }

  export type GetMst_profileAggregateType<T extends Mst_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_profile[P]>
      : GetScalarType<T[P], AggregateMst_profile[P]>
  }




  export type mst_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_profileWhereInput
    orderBy?: mst_profileOrderByWithAggregationInput | mst_profileOrderByWithAggregationInput[]
    by: Mst_profileScalarFieldEnum[] | Mst_profileScalarFieldEnum
    having?: mst_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_profileCountAggregateInputType | true
    _avg?: Mst_profileAvgAggregateInputType
    _sum?: Mst_profileSumAggregateInputType
    _min?: Mst_profileMinAggregateInputType
    _max?: Mst_profileMaxAggregateInputType
  }

  export type Mst_profileGroupByOutputType = {
    id: number
    profile_name: string | null
    created_at: Date | null
    created_by: string | null
    _count: Mst_profileCountAggregateOutputType | null
    _avg: Mst_profileAvgAggregateOutputType | null
    _sum: Mst_profileSumAggregateOutputType | null
    _min: Mst_profileMinAggregateOutputType | null
    _max: Mst_profileMaxAggregateOutputType | null
  }

  type GetMst_profileGroupByPayload<T extends mst_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_profileGroupByOutputType[P]>
        }
      >
    >


  export type mst_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_name?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["mst_profile"]>


  export type mst_profileSelectScalar = {
    id?: boolean
    profile_name?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $mst_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_profile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profile_name: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["mst_profile"]>
    composites: {}
  }

  type mst_profileGetPayload<S extends boolean | null | undefined | mst_profileDefaultArgs> = $Result.GetResult<Prisma.$mst_profilePayload, S>

  type mst_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_profileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_profileCountAggregateInputType | true
    }

  export interface mst_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_profile'], meta: { name: 'mst_profile' } }
    /**
     * Find zero or one Mst_profile that matches the filter.
     * @param {mst_profileFindUniqueArgs} args - Arguments to find a Mst_profile
     * @example
     * // Get one Mst_profile
     * const mst_profile = await prisma.mst_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_profileFindUniqueArgs>(args: SelectSubset<T, mst_profileFindUniqueArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_profileFindUniqueOrThrowArgs} args - Arguments to find a Mst_profile
     * @example
     * // Get one Mst_profile
     * const mst_profile = await prisma.mst_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileFindFirstArgs} args - Arguments to find a Mst_profile
     * @example
     * // Get one Mst_profile
     * const mst_profile = await prisma.mst_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_profileFindFirstArgs>(args?: SelectSubset<T, mst_profileFindFirstArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileFindFirstOrThrowArgs} args - Arguments to find a Mst_profile
     * @example
     * // Get one Mst_profile
     * const mst_profile = await prisma.mst_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_profiles
     * const mst_profiles = await prisma.mst_profile.findMany()
     * 
     * // Get first 10 Mst_profiles
     * const mst_profiles = await prisma.mst_profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_profileWithIdOnly = await prisma.mst_profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_profileFindManyArgs>(args?: SelectSubset<T, mst_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_profile.
     * @param {mst_profileCreateArgs} args - Arguments to create a Mst_profile.
     * @example
     * // Create one Mst_profile
     * const Mst_profile = await prisma.mst_profile.create({
     *   data: {
     *     // ... data to create a Mst_profile
     *   }
     * })
     * 
     */
    create<T extends mst_profileCreateArgs>(args: SelectSubset<T, mst_profileCreateArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_profiles.
     * @param {mst_profileCreateManyArgs} args - Arguments to create many Mst_profiles.
     * @example
     * // Create many Mst_profiles
     * const mst_profile = await prisma.mst_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_profileCreateManyArgs>(args?: SelectSubset<T, mst_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_profile.
     * @param {mst_profileDeleteArgs} args - Arguments to delete one Mst_profile.
     * @example
     * // Delete one Mst_profile
     * const Mst_profile = await prisma.mst_profile.delete({
     *   where: {
     *     // ... filter to delete one Mst_profile
     *   }
     * })
     * 
     */
    delete<T extends mst_profileDeleteArgs>(args: SelectSubset<T, mst_profileDeleteArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_profile.
     * @param {mst_profileUpdateArgs} args - Arguments to update one Mst_profile.
     * @example
     * // Update one Mst_profile
     * const mst_profile = await prisma.mst_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_profileUpdateArgs>(args: SelectSubset<T, mst_profileUpdateArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_profiles.
     * @param {mst_profileDeleteManyArgs} args - Arguments to filter Mst_profiles to delete.
     * @example
     * // Delete a few Mst_profiles
     * const { count } = await prisma.mst_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_profileDeleteManyArgs>(args?: SelectSubset<T, mst_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_profiles
     * const mst_profile = await prisma.mst_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_profileUpdateManyArgs>(args: SelectSubset<T, mst_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_profile.
     * @param {mst_profileUpsertArgs} args - Arguments to update or create a Mst_profile.
     * @example
     * // Update or create a Mst_profile
     * const mst_profile = await prisma.mst_profile.upsert({
     *   create: {
     *     // ... data to create a Mst_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_profile we want to update
     *   }
     * })
     */
    upsert<T extends mst_profileUpsertArgs>(args: SelectSubset<T, mst_profileUpsertArgs<ExtArgs>>): Prisma__mst_profileClient<$Result.GetResult<Prisma.$mst_profilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileCountArgs} args - Arguments to filter Mst_profiles to count.
     * @example
     * // Count the number of Mst_profiles
     * const count = await prisma.mst_profile.count({
     *   where: {
     *     // ... the filter for the Mst_profiles we want to count
     *   }
     * })
    **/
    count<T extends mst_profileCountArgs>(
      args?: Subset<T, mst_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_profileAggregateArgs>(args: Subset<T, Mst_profileAggregateArgs>): Prisma.PrismaPromise<GetMst_profileAggregateType<T>>

    /**
     * Group by Mst_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_profileGroupByArgs} args - Group by arguments.
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
      T extends mst_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_profileGroupByArgs['orderBy'] }
        : { orderBy?: mst_profileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_profile model
   */
  readonly fields: mst_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_profile model
   */ 
  interface mst_profileFieldRefs {
    readonly id: FieldRef<"mst_profile", 'Int'>
    readonly profile_name: FieldRef<"mst_profile", 'String'>
    readonly created_at: FieldRef<"mst_profile", 'DateTime'>
    readonly created_by: FieldRef<"mst_profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_profile findUnique
   */
  export type mst_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_profile to fetch.
     */
    where: mst_profileWhereUniqueInput
  }

  /**
   * mst_profile findUniqueOrThrow
   */
  export type mst_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_profile to fetch.
     */
    where: mst_profileWhereUniqueInput
  }

  /**
   * mst_profile findFirst
   */
  export type mst_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_profile to fetch.
     */
    where?: mst_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_profiles to fetch.
     */
    orderBy?: mst_profileOrderByWithRelationInput | mst_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_profiles.
     */
    cursor?: mst_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_profiles.
     */
    distinct?: Mst_profileScalarFieldEnum | Mst_profileScalarFieldEnum[]
  }

  /**
   * mst_profile findFirstOrThrow
   */
  export type mst_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_profile to fetch.
     */
    where?: mst_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_profiles to fetch.
     */
    orderBy?: mst_profileOrderByWithRelationInput | mst_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_profiles.
     */
    cursor?: mst_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_profiles.
     */
    distinct?: Mst_profileScalarFieldEnum | Mst_profileScalarFieldEnum[]
  }

  /**
   * mst_profile findMany
   */
  export type mst_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter, which mst_profiles to fetch.
     */
    where?: mst_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_profiles to fetch.
     */
    orderBy?: mst_profileOrderByWithRelationInput | mst_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_profiles.
     */
    cursor?: mst_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_profiles.
     */
    skip?: number
    distinct?: Mst_profileScalarFieldEnum | Mst_profileScalarFieldEnum[]
  }

  /**
   * mst_profile create
   */
  export type mst_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_profile.
     */
    data?: XOR<mst_profileCreateInput, mst_profileUncheckedCreateInput>
  }

  /**
   * mst_profile createMany
   */
  export type mst_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_profiles.
     */
    data: mst_profileCreateManyInput | mst_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_profile update
   */
  export type mst_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_profile.
     */
    data: XOR<mst_profileUpdateInput, mst_profileUncheckedUpdateInput>
    /**
     * Choose, which mst_profile to update.
     */
    where: mst_profileWhereUniqueInput
  }

  /**
   * mst_profile updateMany
   */
  export type mst_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_profiles.
     */
    data: XOR<mst_profileUpdateManyMutationInput, mst_profileUncheckedUpdateManyInput>
    /**
     * Filter which mst_profiles to update
     */
    where?: mst_profileWhereInput
  }

  /**
   * mst_profile upsert
   */
  export type mst_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_profile to update in case it exists.
     */
    where: mst_profileWhereUniqueInput
    /**
     * In case the mst_profile found by the `where` argument doesn't exist, create a new mst_profile with this data.
     */
    create: XOR<mst_profileCreateInput, mst_profileUncheckedCreateInput>
    /**
     * In case the mst_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_profileUpdateInput, mst_profileUncheckedUpdateInput>
  }

  /**
   * mst_profile delete
   */
  export type mst_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
    /**
     * Filter which mst_profile to delete.
     */
    where: mst_profileWhereUniqueInput
  }

  /**
   * mst_profile deleteMany
   */
  export type mst_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_profiles to delete
     */
    where?: mst_profileWhereInput
  }

  /**
   * mst_profile without action
   */
  export type mst_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_profile
     */
    select?: mst_profileSelect<ExtArgs> | null
  }


  /**
   * Model tr_document
   */

  export type AggregateTr_document = {
    _count: Tr_documentCountAggregateOutputType | null
    _avg: Tr_documentAvgAggregateOutputType | null
    _sum: Tr_documentSumAggregateOutputType | null
    _min: Tr_documentMinAggregateOutputType | null
    _max: Tr_documentMaxAggregateOutputType | null
  }

  export type Tr_documentAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type Tr_documentSumAggregateOutputType = {
    id: number | null
    type_id: number | null
  }

  export type Tr_documentMinAggregateOutputType = {
    id: number | null
    type: string | null
    type_id: number | null
    name: string | null
    filename: string | null
    filepath: string | null
    mime: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_documentMaxAggregateOutputType = {
    id: number | null
    type: string | null
    type_id: number | null
    name: string | null
    filename: string | null
    filepath: string | null
    mime: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_documentCountAggregateOutputType = {
    id: number
    type: number
    type_id: number
    name: number
    filename: number
    filepath: number
    mime: number
    is_deleted: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_documentAvgAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type Tr_documentSumAggregateInputType = {
    id?: true
    type_id?: true
  }

  export type Tr_documentMinAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    name?: true
    filename?: true
    filepath?: true
    mime?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_documentMaxAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    name?: true
    filename?: true
    filepath?: true
    mime?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_documentCountAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    name?: true
    filename?: true
    filepath?: true
    mime?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_documentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_document to aggregate.
     */
    where?: tr_documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_documents to fetch.
     */
    orderBy?: tr_documentOrderByWithRelationInput | tr_documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_documents
    **/
    _count?: true | Tr_documentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_documentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_documentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_documentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_documentMaxAggregateInputType
  }

  export type GetTr_documentAggregateType<T extends Tr_documentAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_document]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_document[P]>
      : GetScalarType<T[P], AggregateTr_document[P]>
  }




  export type tr_documentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_documentWhereInput
    orderBy?: tr_documentOrderByWithAggregationInput | tr_documentOrderByWithAggregationInput[]
    by: Tr_documentScalarFieldEnum[] | Tr_documentScalarFieldEnum
    having?: tr_documentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_documentCountAggregateInputType | true
    _avg?: Tr_documentAvgAggregateInputType
    _sum?: Tr_documentSumAggregateInputType
    _min?: Tr_documentMinAggregateInputType
    _max?: Tr_documentMaxAggregateInputType
  }

  export type Tr_documentGroupByOutputType = {
    id: number
    type: string | null
    type_id: number | null
    name: string | null
    filename: string | null
    filepath: string | null
    mime: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_documentCountAggregateOutputType | null
    _avg: Tr_documentAvgAggregateOutputType | null
    _sum: Tr_documentSumAggregateOutputType | null
    _min: Tr_documentMinAggregateOutputType | null
    _max: Tr_documentMaxAggregateOutputType | null
  }

  type GetTr_documentGroupByPayload<T extends tr_documentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_documentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_documentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_documentGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_documentGroupByOutputType[P]>
        }
      >
    >


  export type tr_documentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    type_id?: boolean
    name?: boolean
    filename?: boolean
    filepath?: boolean
    mime?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_document"]>


  export type tr_documentSelectScalar = {
    id?: boolean
    type?: boolean
    type_id?: boolean
    name?: boolean
    filename?: boolean
    filepath?: boolean
    mime?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_documentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_document"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      type_id: number | null
      name: string | null
      filename: string | null
      filepath: string | null
      mime: string | null
      is_deleted: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_document"]>
    composites: {}
  }

  type tr_documentGetPayload<S extends boolean | null | undefined | tr_documentDefaultArgs> = $Result.GetResult<Prisma.$tr_documentPayload, S>

  type tr_documentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_documentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_documentCountAggregateInputType | true
    }

  export interface tr_documentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_document'], meta: { name: 'tr_document' } }
    /**
     * Find zero or one Tr_document that matches the filter.
     * @param {tr_documentFindUniqueArgs} args - Arguments to find a Tr_document
     * @example
     * // Get one Tr_document
     * const tr_document = await prisma.tr_document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_documentFindUniqueArgs>(args: SelectSubset<T, tr_documentFindUniqueArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_documentFindUniqueOrThrowArgs} args - Arguments to find a Tr_document
     * @example
     * // Get one Tr_document
     * const tr_document = await prisma.tr_document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_documentFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_documentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentFindFirstArgs} args - Arguments to find a Tr_document
     * @example
     * // Get one Tr_document
     * const tr_document = await prisma.tr_document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_documentFindFirstArgs>(args?: SelectSubset<T, tr_documentFindFirstArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentFindFirstOrThrowArgs} args - Arguments to find a Tr_document
     * @example
     * // Get one Tr_document
     * const tr_document = await prisma.tr_document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_documentFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_documentFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_documents
     * const tr_documents = await prisma.tr_document.findMany()
     * 
     * // Get first 10 Tr_documents
     * const tr_documents = await prisma.tr_document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_documentWithIdOnly = await prisma.tr_document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_documentFindManyArgs>(args?: SelectSubset<T, tr_documentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_document.
     * @param {tr_documentCreateArgs} args - Arguments to create a Tr_document.
     * @example
     * // Create one Tr_document
     * const Tr_document = await prisma.tr_document.create({
     *   data: {
     *     // ... data to create a Tr_document
     *   }
     * })
     * 
     */
    create<T extends tr_documentCreateArgs>(args: SelectSubset<T, tr_documentCreateArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_documents.
     * @param {tr_documentCreateManyArgs} args - Arguments to create many Tr_documents.
     * @example
     * // Create many Tr_documents
     * const tr_document = await prisma.tr_document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_documentCreateManyArgs>(args?: SelectSubset<T, tr_documentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_document.
     * @param {tr_documentDeleteArgs} args - Arguments to delete one Tr_document.
     * @example
     * // Delete one Tr_document
     * const Tr_document = await prisma.tr_document.delete({
     *   where: {
     *     // ... filter to delete one Tr_document
     *   }
     * })
     * 
     */
    delete<T extends tr_documentDeleteArgs>(args: SelectSubset<T, tr_documentDeleteArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_document.
     * @param {tr_documentUpdateArgs} args - Arguments to update one Tr_document.
     * @example
     * // Update one Tr_document
     * const tr_document = await prisma.tr_document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_documentUpdateArgs>(args: SelectSubset<T, tr_documentUpdateArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_documents.
     * @param {tr_documentDeleteManyArgs} args - Arguments to filter Tr_documents to delete.
     * @example
     * // Delete a few Tr_documents
     * const { count } = await prisma.tr_document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_documentDeleteManyArgs>(args?: SelectSubset<T, tr_documentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_documents
     * const tr_document = await prisma.tr_document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_documentUpdateManyArgs>(args: SelectSubset<T, tr_documentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_document.
     * @param {tr_documentUpsertArgs} args - Arguments to update or create a Tr_document.
     * @example
     * // Update or create a Tr_document
     * const tr_document = await prisma.tr_document.upsert({
     *   create: {
     *     // ... data to create a Tr_document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_document we want to update
     *   }
     * })
     */
    upsert<T extends tr_documentUpsertArgs>(args: SelectSubset<T, tr_documentUpsertArgs<ExtArgs>>): Prisma__tr_documentClient<$Result.GetResult<Prisma.$tr_documentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentCountArgs} args - Arguments to filter Tr_documents to count.
     * @example
     * // Count the number of Tr_documents
     * const count = await prisma.tr_document.count({
     *   where: {
     *     // ... the filter for the Tr_documents we want to count
     *   }
     * })
    **/
    count<T extends tr_documentCountArgs>(
      args?: Subset<T, tr_documentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_documentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_documentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_documentAggregateArgs>(args: Subset<T, Tr_documentAggregateArgs>): Prisma.PrismaPromise<GetTr_documentAggregateType<T>>

    /**
     * Group by Tr_document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_documentGroupByArgs} args - Group by arguments.
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
      T extends tr_documentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_documentGroupByArgs['orderBy'] }
        : { orderBy?: tr_documentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_documentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_documentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_document model
   */
  readonly fields: tr_documentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_documentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_document model
   */ 
  interface tr_documentFieldRefs {
    readonly id: FieldRef<"tr_document", 'Int'>
    readonly type: FieldRef<"tr_document", 'String'>
    readonly type_id: FieldRef<"tr_document", 'Int'>
    readonly name: FieldRef<"tr_document", 'String'>
    readonly filename: FieldRef<"tr_document", 'String'>
    readonly filepath: FieldRef<"tr_document", 'String'>
    readonly mime: FieldRef<"tr_document", 'String'>
    readonly is_deleted: FieldRef<"tr_document", 'String'>
    readonly created_at: FieldRef<"tr_document", 'DateTime'>
    readonly created_by: FieldRef<"tr_document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_document findUnique
   */
  export type tr_documentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter, which tr_document to fetch.
     */
    where: tr_documentWhereUniqueInput
  }

  /**
   * tr_document findUniqueOrThrow
   */
  export type tr_documentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter, which tr_document to fetch.
     */
    where: tr_documentWhereUniqueInput
  }

  /**
   * tr_document findFirst
   */
  export type tr_documentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter, which tr_document to fetch.
     */
    where?: tr_documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_documents to fetch.
     */
    orderBy?: tr_documentOrderByWithRelationInput | tr_documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_documents.
     */
    cursor?: tr_documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_documents.
     */
    distinct?: Tr_documentScalarFieldEnum | Tr_documentScalarFieldEnum[]
  }

  /**
   * tr_document findFirstOrThrow
   */
  export type tr_documentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter, which tr_document to fetch.
     */
    where?: tr_documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_documents to fetch.
     */
    orderBy?: tr_documentOrderByWithRelationInput | tr_documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_documents.
     */
    cursor?: tr_documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_documents.
     */
    distinct?: Tr_documentScalarFieldEnum | Tr_documentScalarFieldEnum[]
  }

  /**
   * tr_document findMany
   */
  export type tr_documentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter, which tr_documents to fetch.
     */
    where?: tr_documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_documents to fetch.
     */
    orderBy?: tr_documentOrderByWithRelationInput | tr_documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_documents.
     */
    cursor?: tr_documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_documents.
     */
    skip?: number
    distinct?: Tr_documentScalarFieldEnum | Tr_documentScalarFieldEnum[]
  }

  /**
   * tr_document create
   */
  export type tr_documentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_document.
     */
    data?: XOR<tr_documentCreateInput, tr_documentUncheckedCreateInput>
  }

  /**
   * tr_document createMany
   */
  export type tr_documentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_documents.
     */
    data: tr_documentCreateManyInput | tr_documentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_document update
   */
  export type tr_documentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_document.
     */
    data: XOR<tr_documentUpdateInput, tr_documentUncheckedUpdateInput>
    /**
     * Choose, which tr_document to update.
     */
    where: tr_documentWhereUniqueInput
  }

  /**
   * tr_document updateMany
   */
  export type tr_documentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_documents.
     */
    data: XOR<tr_documentUpdateManyMutationInput, tr_documentUncheckedUpdateManyInput>
    /**
     * Filter which tr_documents to update
     */
    where?: tr_documentWhereInput
  }

  /**
   * tr_document upsert
   */
  export type tr_documentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_document to update in case it exists.
     */
    where: tr_documentWhereUniqueInput
    /**
     * In case the tr_document found by the `where` argument doesn't exist, create a new tr_document with this data.
     */
    create: XOR<tr_documentCreateInput, tr_documentUncheckedCreateInput>
    /**
     * In case the tr_document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_documentUpdateInput, tr_documentUncheckedUpdateInput>
  }

  /**
   * tr_document delete
   */
  export type tr_documentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
    /**
     * Filter which tr_document to delete.
     */
    where: tr_documentWhereUniqueInput
  }

  /**
   * tr_document deleteMany
   */
  export type tr_documentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_documents to delete
     */
    where?: tr_documentWhereInput
  }

  /**
   * tr_document without action
   */
  export type tr_documentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_document
     */
    select?: tr_documentSelect<ExtArgs> | null
  }


  /**
   * Model tr_history
   */

  export type AggregateTr_history = {
    _count: Tr_historyCountAggregateOutputType | null
    _avg: Tr_historyAvgAggregateOutputType | null
    _sum: Tr_historySumAggregateOutputType | null
    _min: Tr_historyMinAggregateOutputType | null
    _max: Tr_historyMaxAggregateOutputType | null
  }

  export type Tr_historyAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
    document_id: number | null
  }

  export type Tr_historySumAggregateOutputType = {
    id: number | null
    type_id: number | null
    document_id: number | null
  }

  export type Tr_historyMinAggregateOutputType = {
    id: number | null
    type: string | null
    type_id: number | null
    action: string | null
    document_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_historyMaxAggregateOutputType = {
    id: number | null
    type: string | null
    type_id: number | null
    action: string | null
    document_id: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_historyCountAggregateOutputType = {
    id: number
    type: number
    type_id: number
    action: number
    document_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_historyAvgAggregateInputType = {
    id?: true
    type_id?: true
    document_id?: true
  }

  export type Tr_historySumAggregateInputType = {
    id?: true
    type_id?: true
    document_id?: true
  }

  export type Tr_historyMinAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    action?: true
    document_id?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_historyMaxAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    action?: true
    document_id?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_historyCountAggregateInputType = {
    id?: true
    type?: true
    type_id?: true
    action?: true
    document_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_history to aggregate.
     */
    where?: tr_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_histories to fetch.
     */
    orderBy?: tr_historyOrderByWithRelationInput | tr_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_histories
    **/
    _count?: true | Tr_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_historyMaxAggregateInputType
  }

  export type GetTr_historyAggregateType<T extends Tr_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_history[P]>
      : GetScalarType<T[P], AggregateTr_history[P]>
  }




  export type tr_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_historyWhereInput
    orderBy?: tr_historyOrderByWithAggregationInput | tr_historyOrderByWithAggregationInput[]
    by: Tr_historyScalarFieldEnum[] | Tr_historyScalarFieldEnum
    having?: tr_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_historyCountAggregateInputType | true
    _avg?: Tr_historyAvgAggregateInputType
    _sum?: Tr_historySumAggregateInputType
    _min?: Tr_historyMinAggregateInputType
    _max?: Tr_historyMaxAggregateInputType
  }

  export type Tr_historyGroupByOutputType = {
    id: number
    type: string | null
    type_id: number | null
    action: string | null
    document_id: number | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_historyCountAggregateOutputType | null
    _avg: Tr_historyAvgAggregateOutputType | null
    _sum: Tr_historySumAggregateOutputType | null
    _min: Tr_historyMinAggregateOutputType | null
    _max: Tr_historyMaxAggregateOutputType | null
  }

  type GetTr_historyGroupByPayload<T extends tr_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_historyGroupByOutputType[P]>
        }
      >
    >


  export type tr_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    type_id?: boolean
    action?: boolean
    document_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_history"]>


  export type tr_historySelectScalar = {
    id?: boolean
    type?: boolean
    type_id?: boolean
    action?: boolean
    document_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_history"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      type_id: number | null
      action: string | null
      document_id: number | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_history"]>
    composites: {}
  }

  type tr_historyGetPayload<S extends boolean | null | undefined | tr_historyDefaultArgs> = $Result.GetResult<Prisma.$tr_historyPayload, S>

  type tr_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_historyCountAggregateInputType | true
    }

  export interface tr_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_history'], meta: { name: 'tr_history' } }
    /**
     * Find zero or one Tr_history that matches the filter.
     * @param {tr_historyFindUniqueArgs} args - Arguments to find a Tr_history
     * @example
     * // Get one Tr_history
     * const tr_history = await prisma.tr_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_historyFindUniqueArgs>(args: SelectSubset<T, tr_historyFindUniqueArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_history that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_historyFindUniqueOrThrowArgs} args - Arguments to find a Tr_history
     * @example
     * // Get one Tr_history
     * const tr_history = await prisma.tr_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyFindFirstArgs} args - Arguments to find a Tr_history
     * @example
     * // Get one Tr_history
     * const tr_history = await prisma.tr_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_historyFindFirstArgs>(args?: SelectSubset<T, tr_historyFindFirstArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyFindFirstOrThrowArgs} args - Arguments to find a Tr_history
     * @example
     * // Get one Tr_history
     * const tr_history = await prisma.tr_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_histories
     * const tr_histories = await prisma.tr_history.findMany()
     * 
     * // Get first 10 Tr_histories
     * const tr_histories = await prisma.tr_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_historyWithIdOnly = await prisma.tr_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_historyFindManyArgs>(args?: SelectSubset<T, tr_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_history.
     * @param {tr_historyCreateArgs} args - Arguments to create a Tr_history.
     * @example
     * // Create one Tr_history
     * const Tr_history = await prisma.tr_history.create({
     *   data: {
     *     // ... data to create a Tr_history
     *   }
     * })
     * 
     */
    create<T extends tr_historyCreateArgs>(args: SelectSubset<T, tr_historyCreateArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_histories.
     * @param {tr_historyCreateManyArgs} args - Arguments to create many Tr_histories.
     * @example
     * // Create many Tr_histories
     * const tr_history = await prisma.tr_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_historyCreateManyArgs>(args?: SelectSubset<T, tr_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_history.
     * @param {tr_historyDeleteArgs} args - Arguments to delete one Tr_history.
     * @example
     * // Delete one Tr_history
     * const Tr_history = await prisma.tr_history.delete({
     *   where: {
     *     // ... filter to delete one Tr_history
     *   }
     * })
     * 
     */
    delete<T extends tr_historyDeleteArgs>(args: SelectSubset<T, tr_historyDeleteArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_history.
     * @param {tr_historyUpdateArgs} args - Arguments to update one Tr_history.
     * @example
     * // Update one Tr_history
     * const tr_history = await prisma.tr_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_historyUpdateArgs>(args: SelectSubset<T, tr_historyUpdateArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_histories.
     * @param {tr_historyDeleteManyArgs} args - Arguments to filter Tr_histories to delete.
     * @example
     * // Delete a few Tr_histories
     * const { count } = await prisma.tr_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_historyDeleteManyArgs>(args?: SelectSubset<T, tr_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_histories
     * const tr_history = await prisma.tr_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_historyUpdateManyArgs>(args: SelectSubset<T, tr_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_history.
     * @param {tr_historyUpsertArgs} args - Arguments to update or create a Tr_history.
     * @example
     * // Update or create a Tr_history
     * const tr_history = await prisma.tr_history.upsert({
     *   create: {
     *     // ... data to create a Tr_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_history we want to update
     *   }
     * })
     */
    upsert<T extends tr_historyUpsertArgs>(args: SelectSubset<T, tr_historyUpsertArgs<ExtArgs>>): Prisma__tr_historyClient<$Result.GetResult<Prisma.$tr_historyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyCountArgs} args - Arguments to filter Tr_histories to count.
     * @example
     * // Count the number of Tr_histories
     * const count = await prisma.tr_history.count({
     *   where: {
     *     // ... the filter for the Tr_histories we want to count
     *   }
     * })
    **/
    count<T extends tr_historyCountArgs>(
      args?: Subset<T, tr_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_historyAggregateArgs>(args: Subset<T, Tr_historyAggregateArgs>): Prisma.PrismaPromise<GetTr_historyAggregateType<T>>

    /**
     * Group by Tr_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_historyGroupByArgs} args - Group by arguments.
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
      T extends tr_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_historyGroupByArgs['orderBy'] }
        : { orderBy?: tr_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_history model
   */
  readonly fields: tr_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_history model
   */ 
  interface tr_historyFieldRefs {
    readonly id: FieldRef<"tr_history", 'Int'>
    readonly type: FieldRef<"tr_history", 'String'>
    readonly type_id: FieldRef<"tr_history", 'Int'>
    readonly action: FieldRef<"tr_history", 'String'>
    readonly document_id: FieldRef<"tr_history", 'Int'>
    readonly created_at: FieldRef<"tr_history", 'DateTime'>
    readonly created_by: FieldRef<"tr_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_history findUnique
   */
  export type tr_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter, which tr_history to fetch.
     */
    where: tr_historyWhereUniqueInput
  }

  /**
   * tr_history findUniqueOrThrow
   */
  export type tr_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter, which tr_history to fetch.
     */
    where: tr_historyWhereUniqueInput
  }

  /**
   * tr_history findFirst
   */
  export type tr_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter, which tr_history to fetch.
     */
    where?: tr_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_histories to fetch.
     */
    orderBy?: tr_historyOrderByWithRelationInput | tr_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_histories.
     */
    cursor?: tr_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_histories.
     */
    distinct?: Tr_historyScalarFieldEnum | Tr_historyScalarFieldEnum[]
  }

  /**
   * tr_history findFirstOrThrow
   */
  export type tr_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter, which tr_history to fetch.
     */
    where?: tr_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_histories to fetch.
     */
    orderBy?: tr_historyOrderByWithRelationInput | tr_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_histories.
     */
    cursor?: tr_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_histories.
     */
    distinct?: Tr_historyScalarFieldEnum | Tr_historyScalarFieldEnum[]
  }

  /**
   * tr_history findMany
   */
  export type tr_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter, which tr_histories to fetch.
     */
    where?: tr_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_histories to fetch.
     */
    orderBy?: tr_historyOrderByWithRelationInput | tr_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_histories.
     */
    cursor?: tr_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_histories.
     */
    skip?: number
    distinct?: Tr_historyScalarFieldEnum | Tr_historyScalarFieldEnum[]
  }

  /**
   * tr_history create
   */
  export type tr_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * The data needed to create a tr_history.
     */
    data?: XOR<tr_historyCreateInput, tr_historyUncheckedCreateInput>
  }

  /**
   * tr_history createMany
   */
  export type tr_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_histories.
     */
    data: tr_historyCreateManyInput | tr_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_history update
   */
  export type tr_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * The data needed to update a tr_history.
     */
    data: XOR<tr_historyUpdateInput, tr_historyUncheckedUpdateInput>
    /**
     * Choose, which tr_history to update.
     */
    where: tr_historyWhereUniqueInput
  }

  /**
   * tr_history updateMany
   */
  export type tr_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_histories.
     */
    data: XOR<tr_historyUpdateManyMutationInput, tr_historyUncheckedUpdateManyInput>
    /**
     * Filter which tr_histories to update
     */
    where?: tr_historyWhereInput
  }

  /**
   * tr_history upsert
   */
  export type tr_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * The filter to search for the tr_history to update in case it exists.
     */
    where: tr_historyWhereUniqueInput
    /**
     * In case the tr_history found by the `where` argument doesn't exist, create a new tr_history with this data.
     */
    create: XOR<tr_historyCreateInput, tr_historyUncheckedCreateInput>
    /**
     * In case the tr_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_historyUpdateInput, tr_historyUncheckedUpdateInput>
  }

  /**
   * tr_history delete
   */
  export type tr_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
    /**
     * Filter which tr_history to delete.
     */
    where: tr_historyWhereUniqueInput
  }

  /**
   * tr_history deleteMany
   */
  export type tr_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_histories to delete
     */
    where?: tr_historyWhereInput
  }

  /**
   * tr_history without action
   */
  export type tr_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_history
     */
    select?: tr_historySelect<ExtArgs> | null
  }


  /**
   * Model tr_project
   */

  export type AggregateTr_project = {
    _count: Tr_projectCountAggregateOutputType | null
    _avg: Tr_projectAvgAggregateOutputType | null
    _sum: Tr_projectSumAggregateOutputType | null
    _min: Tr_projectMinAggregateOutputType | null
    _max: Tr_projectMaxAggregateOutputType | null
  }

  export type Tr_projectAvgAggregateOutputType = {
    id: number | null
    request_id: number | null
    application_id: number | null
    group_id: number | null
  }

  export type Tr_projectSumAggregateOutputType = {
    id: number | null
    request_id: number | null
    application_id: number | null
    group_id: number | null
  }

  export type Tr_projectMinAggregateOutputType = {
    id: number | null
    request_id: number | null
    application_id: number | null
    project_code: string | null
    background: string | null
    issue_description: string | null
    business_impact: string | null
    group_id: number | null
    plan_start_date: Date | null
    plant_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    percent_done: string | null
    auto_percent_done: string | null
    status: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_projectMaxAggregateOutputType = {
    id: number | null
    request_id: number | null
    application_id: number | null
    project_code: string | null
    background: string | null
    issue_description: string | null
    business_impact: string | null
    group_id: number | null
    plan_start_date: Date | null
    plant_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    percent_done: string | null
    auto_percent_done: string | null
    status: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_projectCountAggregateOutputType = {
    id: number
    request_id: number
    application_id: number
    project_code: number
    background: number
    issue_description: number
    business_impact: number
    group_id: number
    plan_start_date: number
    plant_end_date: number
    real_start_date: number
    real_end_date: number
    percent_done: number
    auto_percent_done: number
    status: number
    is_deleted: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_projectAvgAggregateInputType = {
    id?: true
    request_id?: true
    application_id?: true
    group_id?: true
  }

  export type Tr_projectSumAggregateInputType = {
    id?: true
    request_id?: true
    application_id?: true
    group_id?: true
  }

  export type Tr_projectMinAggregateInputType = {
    id?: true
    request_id?: true
    application_id?: true
    project_code?: true
    background?: true
    issue_description?: true
    business_impact?: true
    group_id?: true
    plan_start_date?: true
    plant_end_date?: true
    real_start_date?: true
    real_end_date?: true
    percent_done?: true
    auto_percent_done?: true
    status?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_projectMaxAggregateInputType = {
    id?: true
    request_id?: true
    application_id?: true
    project_code?: true
    background?: true
    issue_description?: true
    business_impact?: true
    group_id?: true
    plan_start_date?: true
    plant_end_date?: true
    real_start_date?: true
    real_end_date?: true
    percent_done?: true
    auto_percent_done?: true
    status?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_projectCountAggregateInputType = {
    id?: true
    request_id?: true
    application_id?: true
    project_code?: true
    background?: true
    issue_description?: true
    business_impact?: true
    group_id?: true
    plan_start_date?: true
    plant_end_date?: true
    real_start_date?: true
    real_end_date?: true
    percent_done?: true
    auto_percent_done?: true
    status?: true
    is_deleted?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_projectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project to aggregate.
     */
    where?: tr_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_projects to fetch.
     */
    orderBy?: tr_projectOrderByWithRelationInput | tr_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_projects
    **/
    _count?: true | Tr_projectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_projectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_projectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_projectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_projectMaxAggregateInputType
  }

  export type GetTr_projectAggregateType<T extends Tr_projectAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project[P]>
      : GetScalarType<T[P], AggregateTr_project[P]>
  }




  export type tr_projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_projectWhereInput
    orderBy?: tr_projectOrderByWithAggregationInput | tr_projectOrderByWithAggregationInput[]
    by: Tr_projectScalarFieldEnum[] | Tr_projectScalarFieldEnum
    having?: tr_projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_projectCountAggregateInputType | true
    _avg?: Tr_projectAvgAggregateInputType
    _sum?: Tr_projectSumAggregateInputType
    _min?: Tr_projectMinAggregateInputType
    _max?: Tr_projectMaxAggregateInputType
  }

  export type Tr_projectGroupByOutputType = {
    id: number
    request_id: number | null
    application_id: number | null
    project_code: string | null
    background: string | null
    issue_description: string | null
    business_impact: string | null
    group_id: number | null
    plan_start_date: Date | null
    plant_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    percent_done: string | null
    auto_percent_done: string | null
    status: string | null
    is_deleted: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_projectCountAggregateOutputType | null
    _avg: Tr_projectAvgAggregateOutputType | null
    _sum: Tr_projectSumAggregateOutputType | null
    _min: Tr_projectMinAggregateOutputType | null
    _max: Tr_projectMaxAggregateOutputType | null
  }

  type GetTr_projectGroupByPayload<T extends tr_projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_projectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_projectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_projectGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_projectGroupByOutputType[P]>
        }
      >
    >


  export type tr_projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    application_id?: boolean
    project_code?: boolean
    background?: boolean
    issue_description?: boolean
    business_impact?: boolean
    group_id?: boolean
    plan_start_date?: boolean
    plant_end_date?: boolean
    real_start_date?: boolean
    real_end_date?: boolean
    percent_done?: boolean
    auto_percent_done?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project"]>


  export type tr_projectSelectScalar = {
    id?: boolean
    request_id?: boolean
    application_id?: boolean
    project_code?: boolean
    background?: boolean
    issue_description?: boolean
    business_impact?: boolean
    group_id?: boolean
    plan_start_date?: boolean
    plant_end_date?: boolean
    real_start_date?: boolean
    real_end_date?: boolean
    percent_done?: boolean
    auto_percent_done?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      request_id: number | null
      application_id: number | null
      project_code: string | null
      background: string | null
      issue_description: string | null
      business_impact: string | null
      group_id: number | null
      plan_start_date: Date | null
      plant_end_date: Date | null
      real_start_date: Date | null
      real_end_date: Date | null
      percent_done: string | null
      auto_percent_done: string | null
      status: string | null
      is_deleted: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project"]>
    composites: {}
  }

  type tr_projectGetPayload<S extends boolean | null | undefined | tr_projectDefaultArgs> = $Result.GetResult<Prisma.$tr_projectPayload, S>

  type tr_projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_projectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_projectCountAggregateInputType | true
    }

  export interface tr_projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project'], meta: { name: 'tr_project' } }
    /**
     * Find zero or one Tr_project that matches the filter.
     * @param {tr_projectFindUniqueArgs} args - Arguments to find a Tr_project
     * @example
     * // Get one Tr_project
     * const tr_project = await prisma.tr_project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_projectFindUniqueArgs>(args: SelectSubset<T, tr_projectFindUniqueArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_projectFindUniqueOrThrowArgs} args - Arguments to find a Tr_project
     * @example
     * // Get one Tr_project
     * const tr_project = await prisma.tr_project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_projectFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectFindFirstArgs} args - Arguments to find a Tr_project
     * @example
     * // Get one Tr_project
     * const tr_project = await prisma.tr_project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_projectFindFirstArgs>(args?: SelectSubset<T, tr_projectFindFirstArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectFindFirstOrThrowArgs} args - Arguments to find a Tr_project
     * @example
     * // Get one Tr_project
     * const tr_project = await prisma.tr_project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_projectFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_projects
     * const tr_projects = await prisma.tr_project.findMany()
     * 
     * // Get first 10 Tr_projects
     * const tr_projects = await prisma.tr_project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_projectWithIdOnly = await prisma.tr_project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_projectFindManyArgs>(args?: SelectSubset<T, tr_projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project.
     * @param {tr_projectCreateArgs} args - Arguments to create a Tr_project.
     * @example
     * // Create one Tr_project
     * const Tr_project = await prisma.tr_project.create({
     *   data: {
     *     // ... data to create a Tr_project
     *   }
     * })
     * 
     */
    create<T extends tr_projectCreateArgs>(args: SelectSubset<T, tr_projectCreateArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_projects.
     * @param {tr_projectCreateManyArgs} args - Arguments to create many Tr_projects.
     * @example
     * // Create many Tr_projects
     * const tr_project = await prisma.tr_project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_projectCreateManyArgs>(args?: SelectSubset<T, tr_projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project.
     * @param {tr_projectDeleteArgs} args - Arguments to delete one Tr_project.
     * @example
     * // Delete one Tr_project
     * const Tr_project = await prisma.tr_project.delete({
     *   where: {
     *     // ... filter to delete one Tr_project
     *   }
     * })
     * 
     */
    delete<T extends tr_projectDeleteArgs>(args: SelectSubset<T, tr_projectDeleteArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project.
     * @param {tr_projectUpdateArgs} args - Arguments to update one Tr_project.
     * @example
     * // Update one Tr_project
     * const tr_project = await prisma.tr_project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_projectUpdateArgs>(args: SelectSubset<T, tr_projectUpdateArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_projects.
     * @param {tr_projectDeleteManyArgs} args - Arguments to filter Tr_projects to delete.
     * @example
     * // Delete a few Tr_projects
     * const { count } = await prisma.tr_project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_projectDeleteManyArgs>(args?: SelectSubset<T, tr_projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_projects
     * const tr_project = await prisma.tr_project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_projectUpdateManyArgs>(args: SelectSubset<T, tr_projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project.
     * @param {tr_projectUpsertArgs} args - Arguments to update or create a Tr_project.
     * @example
     * // Update or create a Tr_project
     * const tr_project = await prisma.tr_project.upsert({
     *   create: {
     *     // ... data to create a Tr_project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project we want to update
     *   }
     * })
     */
    upsert<T extends tr_projectUpsertArgs>(args: SelectSubset<T, tr_projectUpsertArgs<ExtArgs>>): Prisma__tr_projectClient<$Result.GetResult<Prisma.$tr_projectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectCountArgs} args - Arguments to filter Tr_projects to count.
     * @example
     * // Count the number of Tr_projects
     * const count = await prisma.tr_project.count({
     *   where: {
     *     // ... the filter for the Tr_projects we want to count
     *   }
     * })
    **/
    count<T extends tr_projectCountArgs>(
      args?: Subset<T, tr_projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_projectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_projectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_projectAggregateArgs>(args: Subset<T, Tr_projectAggregateArgs>): Prisma.PrismaPromise<GetTr_projectAggregateType<T>>

    /**
     * Group by Tr_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_projectGroupByArgs} args - Group by arguments.
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
      T extends tr_projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_projectGroupByArgs['orderBy'] }
        : { orderBy?: tr_projectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_projectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project model
   */
  readonly fields: tr_projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project model
   */ 
  interface tr_projectFieldRefs {
    readonly id: FieldRef<"tr_project", 'Int'>
    readonly request_id: FieldRef<"tr_project", 'Int'>
    readonly application_id: FieldRef<"tr_project", 'Int'>
    readonly project_code: FieldRef<"tr_project", 'String'>
    readonly background: FieldRef<"tr_project", 'String'>
    readonly issue_description: FieldRef<"tr_project", 'String'>
    readonly business_impact: FieldRef<"tr_project", 'String'>
    readonly group_id: FieldRef<"tr_project", 'Int'>
    readonly plan_start_date: FieldRef<"tr_project", 'DateTime'>
    readonly plant_end_date: FieldRef<"tr_project", 'DateTime'>
    readonly real_start_date: FieldRef<"tr_project", 'DateTime'>
    readonly real_end_date: FieldRef<"tr_project", 'DateTime'>
    readonly percent_done: FieldRef<"tr_project", 'String'>
    readonly auto_percent_done: FieldRef<"tr_project", 'String'>
    readonly status: FieldRef<"tr_project", 'String'>
    readonly is_deleted: FieldRef<"tr_project", 'String'>
    readonly created_at: FieldRef<"tr_project", 'DateTime'>
    readonly created_by: FieldRef<"tr_project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project findUnique
   */
  export type tr_projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter, which tr_project to fetch.
     */
    where: tr_projectWhereUniqueInput
  }

  /**
   * tr_project findUniqueOrThrow
   */
  export type tr_projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter, which tr_project to fetch.
     */
    where: tr_projectWhereUniqueInput
  }

  /**
   * tr_project findFirst
   */
  export type tr_projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter, which tr_project to fetch.
     */
    where?: tr_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_projects to fetch.
     */
    orderBy?: tr_projectOrderByWithRelationInput | tr_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_projects.
     */
    cursor?: tr_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_projects.
     */
    distinct?: Tr_projectScalarFieldEnum | Tr_projectScalarFieldEnum[]
  }

  /**
   * tr_project findFirstOrThrow
   */
  export type tr_projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter, which tr_project to fetch.
     */
    where?: tr_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_projects to fetch.
     */
    orderBy?: tr_projectOrderByWithRelationInput | tr_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_projects.
     */
    cursor?: tr_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_projects.
     */
    distinct?: Tr_projectScalarFieldEnum | Tr_projectScalarFieldEnum[]
  }

  /**
   * tr_project findMany
   */
  export type tr_projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter, which tr_projects to fetch.
     */
    where?: tr_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_projects to fetch.
     */
    orderBy?: tr_projectOrderByWithRelationInput | tr_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_projects.
     */
    cursor?: tr_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_projects.
     */
    skip?: number
    distinct?: Tr_projectScalarFieldEnum | Tr_projectScalarFieldEnum[]
  }

  /**
   * tr_project create
   */
  export type tr_projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project.
     */
    data: XOR<tr_projectCreateInput, tr_projectUncheckedCreateInput>
  }

  /**
   * tr_project createMany
   */
  export type tr_projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_projects.
     */
    data: tr_projectCreateManyInput | tr_projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project update
   */
  export type tr_projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project.
     */
    data: XOR<tr_projectUpdateInput, tr_projectUncheckedUpdateInput>
    /**
     * Choose, which tr_project to update.
     */
    where: tr_projectWhereUniqueInput
  }

  /**
   * tr_project updateMany
   */
  export type tr_projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_projects.
     */
    data: XOR<tr_projectUpdateManyMutationInput, tr_projectUncheckedUpdateManyInput>
    /**
     * Filter which tr_projects to update
     */
    where?: tr_projectWhereInput
  }

  /**
   * tr_project upsert
   */
  export type tr_projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project to update in case it exists.
     */
    where: tr_projectWhereUniqueInput
    /**
     * In case the tr_project found by the `where` argument doesn't exist, create a new tr_project with this data.
     */
    create: XOR<tr_projectCreateInput, tr_projectUncheckedCreateInput>
    /**
     * In case the tr_project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_projectUpdateInput, tr_projectUncheckedUpdateInput>
  }

  /**
   * tr_project delete
   */
  export type tr_projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
    /**
     * Filter which tr_project to delete.
     */
    where: tr_projectWhereUniqueInput
  }

  /**
   * tr_project deleteMany
   */
  export type tr_projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_projects to delete
     */
    where?: tr_projectWhereInput
  }

  /**
   * tr_project without action
   */
  export type tr_projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project
     */
    select?: tr_projectSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_activity
   */

  export type AggregateTr_project_activity = {
    _count: Tr_project_activityCountAggregateOutputType | null
    _avg: Tr_project_activityAvgAggregateOutputType | null
    _sum: Tr_project_activitySumAggregateOutputType | null
    _min: Tr_project_activityMinAggregateOutputType | null
    _max: Tr_project_activityMaxAggregateOutputType | null
  }

  export type Tr_project_activityAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_activitySumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_activityMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    activity_name: string | null
    date: Date | null
    content: string | null
    document: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_activityMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    activity_name: string | null
    date: Date | null
    content: string | null
    document: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_activityCountAggregateOutputType = {
    id: number
    project_id: number
    activity_name: number
    date: number
    content: number
    document: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_activityAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_activitySumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_activityMinAggregateInputType = {
    id?: true
    project_id?: true
    activity_name?: true
    date?: true
    content?: true
    document?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_activityMaxAggregateInputType = {
    id?: true
    project_id?: true
    activity_name?: true
    date?: true
    content?: true
    document?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_activityCountAggregateInputType = {
    id?: true
    project_id?: true
    activity_name?: true
    date?: true
    content?: true
    document?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_activityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_activity to aggregate.
     */
    where?: tr_project_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_activities to fetch.
     */
    orderBy?: tr_project_activityOrderByWithRelationInput | tr_project_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_activities
    **/
    _count?: true | Tr_project_activityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_activityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_activitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_activityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_activityMaxAggregateInputType
  }

  export type GetTr_project_activityAggregateType<T extends Tr_project_activityAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_activity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_activity[P]>
      : GetScalarType<T[P], AggregateTr_project_activity[P]>
  }




  export type tr_project_activityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_activityWhereInput
    orderBy?: tr_project_activityOrderByWithAggregationInput | tr_project_activityOrderByWithAggregationInput[]
    by: Tr_project_activityScalarFieldEnum[] | Tr_project_activityScalarFieldEnum
    having?: tr_project_activityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_activityCountAggregateInputType | true
    _avg?: Tr_project_activityAvgAggregateInputType
    _sum?: Tr_project_activitySumAggregateInputType
    _min?: Tr_project_activityMinAggregateInputType
    _max?: Tr_project_activityMaxAggregateInputType
  }

  export type Tr_project_activityGroupByOutputType = {
    id: number
    project_id: number | null
    activity_name: string | null
    date: Date | null
    content: string | null
    document: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_project_activityCountAggregateOutputType | null
    _avg: Tr_project_activityAvgAggregateOutputType | null
    _sum: Tr_project_activitySumAggregateOutputType | null
    _min: Tr_project_activityMinAggregateOutputType | null
    _max: Tr_project_activityMaxAggregateOutputType | null
  }

  type GetTr_project_activityGroupByPayload<T extends tr_project_activityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_activityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_activityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_activityGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_activityGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_activitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    activity_name?: boolean
    date?: boolean
    content?: boolean
    document?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_activity"]>


  export type tr_project_activitySelectScalar = {
    id?: boolean
    project_id?: boolean
    activity_name?: boolean
    date?: boolean
    content?: boolean
    document?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_activityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_activity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      activity_name: string | null
      date: Date | null
      content: string | null
      document: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_activity"]>
    composites: {}
  }

  type tr_project_activityGetPayload<S extends boolean | null | undefined | tr_project_activityDefaultArgs> = $Result.GetResult<Prisma.$tr_project_activityPayload, S>

  type tr_project_activityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_activityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_activityCountAggregateInputType | true
    }

  export interface tr_project_activityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_activity'], meta: { name: 'tr_project_activity' } }
    /**
     * Find zero or one Tr_project_activity that matches the filter.
     * @param {tr_project_activityFindUniqueArgs} args - Arguments to find a Tr_project_activity
     * @example
     * // Get one Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_activityFindUniqueArgs>(args: SelectSubset<T, tr_project_activityFindUniqueArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_activityFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_activity
     * @example
     * // Get one Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_activityFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_activityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityFindFirstArgs} args - Arguments to find a Tr_project_activity
     * @example
     * // Get one Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_activityFindFirstArgs>(args?: SelectSubset<T, tr_project_activityFindFirstArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityFindFirstOrThrowArgs} args - Arguments to find a Tr_project_activity
     * @example
     * // Get one Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_activityFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_activityFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_activities
     * const tr_project_activities = await prisma.tr_project_activity.findMany()
     * 
     * // Get first 10 Tr_project_activities
     * const tr_project_activities = await prisma.tr_project_activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_activityWithIdOnly = await prisma.tr_project_activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_activityFindManyArgs>(args?: SelectSubset<T, tr_project_activityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_activity.
     * @param {tr_project_activityCreateArgs} args - Arguments to create a Tr_project_activity.
     * @example
     * // Create one Tr_project_activity
     * const Tr_project_activity = await prisma.tr_project_activity.create({
     *   data: {
     *     // ... data to create a Tr_project_activity
     *   }
     * })
     * 
     */
    create<T extends tr_project_activityCreateArgs>(args: SelectSubset<T, tr_project_activityCreateArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_activities.
     * @param {tr_project_activityCreateManyArgs} args - Arguments to create many Tr_project_activities.
     * @example
     * // Create many Tr_project_activities
     * const tr_project_activity = await prisma.tr_project_activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_activityCreateManyArgs>(args?: SelectSubset<T, tr_project_activityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_activity.
     * @param {tr_project_activityDeleteArgs} args - Arguments to delete one Tr_project_activity.
     * @example
     * // Delete one Tr_project_activity
     * const Tr_project_activity = await prisma.tr_project_activity.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_activity
     *   }
     * })
     * 
     */
    delete<T extends tr_project_activityDeleteArgs>(args: SelectSubset<T, tr_project_activityDeleteArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_activity.
     * @param {tr_project_activityUpdateArgs} args - Arguments to update one Tr_project_activity.
     * @example
     * // Update one Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_activityUpdateArgs>(args: SelectSubset<T, tr_project_activityUpdateArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_activities.
     * @param {tr_project_activityDeleteManyArgs} args - Arguments to filter Tr_project_activities to delete.
     * @example
     * // Delete a few Tr_project_activities
     * const { count } = await prisma.tr_project_activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_activityDeleteManyArgs>(args?: SelectSubset<T, tr_project_activityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_activities
     * const tr_project_activity = await prisma.tr_project_activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_activityUpdateManyArgs>(args: SelectSubset<T, tr_project_activityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_activity.
     * @param {tr_project_activityUpsertArgs} args - Arguments to update or create a Tr_project_activity.
     * @example
     * // Update or create a Tr_project_activity
     * const tr_project_activity = await prisma.tr_project_activity.upsert({
     *   create: {
     *     // ... data to create a Tr_project_activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_activity we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_activityUpsertArgs>(args: SelectSubset<T, tr_project_activityUpsertArgs<ExtArgs>>): Prisma__tr_project_activityClient<$Result.GetResult<Prisma.$tr_project_activityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityCountArgs} args - Arguments to filter Tr_project_activities to count.
     * @example
     * // Count the number of Tr_project_activities
     * const count = await prisma.tr_project_activity.count({
     *   where: {
     *     // ... the filter for the Tr_project_activities we want to count
     *   }
     * })
    **/
    count<T extends tr_project_activityCountArgs>(
      args?: Subset<T, tr_project_activityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_activityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_activityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_activityAggregateArgs>(args: Subset<T, Tr_project_activityAggregateArgs>): Prisma.PrismaPromise<GetTr_project_activityAggregateType<T>>

    /**
     * Group by Tr_project_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_activityGroupByArgs} args - Group by arguments.
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
      T extends tr_project_activityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_activityGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_activityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_activityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_activity model
   */
  readonly fields: tr_project_activityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_activityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_activity model
   */ 
  interface tr_project_activityFieldRefs {
    readonly id: FieldRef<"tr_project_activity", 'Int'>
    readonly project_id: FieldRef<"tr_project_activity", 'Int'>
    readonly activity_name: FieldRef<"tr_project_activity", 'String'>
    readonly date: FieldRef<"tr_project_activity", 'DateTime'>
    readonly content: FieldRef<"tr_project_activity", 'String'>
    readonly document: FieldRef<"tr_project_activity", 'String'>
    readonly created_at: FieldRef<"tr_project_activity", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_activity findUnique
   */
  export type tr_project_activityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter, which tr_project_activity to fetch.
     */
    where: tr_project_activityWhereUniqueInput
  }

  /**
   * tr_project_activity findUniqueOrThrow
   */
  export type tr_project_activityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter, which tr_project_activity to fetch.
     */
    where: tr_project_activityWhereUniqueInput
  }

  /**
   * tr_project_activity findFirst
   */
  export type tr_project_activityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter, which tr_project_activity to fetch.
     */
    where?: tr_project_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_activities to fetch.
     */
    orderBy?: tr_project_activityOrderByWithRelationInput | tr_project_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_activities.
     */
    cursor?: tr_project_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_activities.
     */
    distinct?: Tr_project_activityScalarFieldEnum | Tr_project_activityScalarFieldEnum[]
  }

  /**
   * tr_project_activity findFirstOrThrow
   */
  export type tr_project_activityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter, which tr_project_activity to fetch.
     */
    where?: tr_project_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_activities to fetch.
     */
    orderBy?: tr_project_activityOrderByWithRelationInput | tr_project_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_activities.
     */
    cursor?: tr_project_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_activities.
     */
    distinct?: Tr_project_activityScalarFieldEnum | Tr_project_activityScalarFieldEnum[]
  }

  /**
   * tr_project_activity findMany
   */
  export type tr_project_activityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter, which tr_project_activities to fetch.
     */
    where?: tr_project_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_activities to fetch.
     */
    orderBy?: tr_project_activityOrderByWithRelationInput | tr_project_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_activities.
     */
    cursor?: tr_project_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_activities.
     */
    skip?: number
    distinct?: Tr_project_activityScalarFieldEnum | Tr_project_activityScalarFieldEnum[]
  }

  /**
   * tr_project_activity create
   */
  export type tr_project_activityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_activity.
     */
    data?: XOR<tr_project_activityCreateInput, tr_project_activityUncheckedCreateInput>
  }

  /**
   * tr_project_activity createMany
   */
  export type tr_project_activityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_activities.
     */
    data: tr_project_activityCreateManyInput | tr_project_activityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_activity update
   */
  export type tr_project_activityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_activity.
     */
    data: XOR<tr_project_activityUpdateInput, tr_project_activityUncheckedUpdateInput>
    /**
     * Choose, which tr_project_activity to update.
     */
    where: tr_project_activityWhereUniqueInput
  }

  /**
   * tr_project_activity updateMany
   */
  export type tr_project_activityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_activities.
     */
    data: XOR<tr_project_activityUpdateManyMutationInput, tr_project_activityUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_activities to update
     */
    where?: tr_project_activityWhereInput
  }

  /**
   * tr_project_activity upsert
   */
  export type tr_project_activityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_activity to update in case it exists.
     */
    where: tr_project_activityWhereUniqueInput
    /**
     * In case the tr_project_activity found by the `where` argument doesn't exist, create a new tr_project_activity with this data.
     */
    create: XOR<tr_project_activityCreateInput, tr_project_activityUncheckedCreateInput>
    /**
     * In case the tr_project_activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_activityUpdateInput, tr_project_activityUncheckedUpdateInput>
  }

  /**
   * tr_project_activity delete
   */
  export type tr_project_activityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
    /**
     * Filter which tr_project_activity to delete.
     */
    where: tr_project_activityWhereUniqueInput
  }

  /**
   * tr_project_activity deleteMany
   */
  export type tr_project_activityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_activities to delete
     */
    where?: tr_project_activityWhereInput
  }

  /**
   * tr_project_activity without action
   */
  export type tr_project_activityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_activity
     */
    select?: tr_project_activitySelect<ExtArgs> | null
  }


  /**
   * Model tr_project_overview
   */

  export type AggregateTr_project_overview = {
    _count: Tr_project_overviewCountAggregateOutputType | null
    _avg: Tr_project_overviewAvgAggregateOutputType | null
    _sum: Tr_project_overviewSumAggregateOutputType | null
    _min: Tr_project_overviewMinAggregateOutputType | null
    _max: Tr_project_overviewMaxAggregateOutputType | null
  }

  export type Tr_project_overviewAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_overviewSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_overviewMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    purpose: string | null
    goals: string | null
    success_measurement: string | null
    intangible_benefit: string | null
    impact_of_not_doing: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_overviewMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    purpose: string | null
    goals: string | null
    success_measurement: string | null
    intangible_benefit: string | null
    impact_of_not_doing: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_overviewCountAggregateOutputType = {
    id: number
    project_id: number
    purpose: number
    goals: number
    success_measurement: number
    intangible_benefit: number
    impact_of_not_doing: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_overviewAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_overviewSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_overviewMinAggregateInputType = {
    id?: true
    project_id?: true
    purpose?: true
    goals?: true
    success_measurement?: true
    intangible_benefit?: true
    impact_of_not_doing?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_overviewMaxAggregateInputType = {
    id?: true
    project_id?: true
    purpose?: true
    goals?: true
    success_measurement?: true
    intangible_benefit?: true
    impact_of_not_doing?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_overviewCountAggregateInputType = {
    id?: true
    project_id?: true
    purpose?: true
    goals?: true
    success_measurement?: true
    intangible_benefit?: true
    impact_of_not_doing?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_overviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_overview to aggregate.
     */
    where?: tr_project_overviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_overviews to fetch.
     */
    orderBy?: tr_project_overviewOrderByWithRelationInput | tr_project_overviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_overviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_overviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_overviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_overviews
    **/
    _count?: true | Tr_project_overviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_overviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_overviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_overviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_overviewMaxAggregateInputType
  }

  export type GetTr_project_overviewAggregateType<T extends Tr_project_overviewAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_overview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_overview[P]>
      : GetScalarType<T[P], AggregateTr_project_overview[P]>
  }




  export type tr_project_overviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_overviewWhereInput
    orderBy?: tr_project_overviewOrderByWithAggregationInput | tr_project_overviewOrderByWithAggregationInput[]
    by: Tr_project_overviewScalarFieldEnum[] | Tr_project_overviewScalarFieldEnum
    having?: tr_project_overviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_overviewCountAggregateInputType | true
    _avg?: Tr_project_overviewAvgAggregateInputType
    _sum?: Tr_project_overviewSumAggregateInputType
    _min?: Tr_project_overviewMinAggregateInputType
    _max?: Tr_project_overviewMaxAggregateInputType
  }

  export type Tr_project_overviewGroupByOutputType = {
    id: number
    project_id: number | null
    purpose: string | null
    goals: string | null
    success_measurement: string | null
    intangible_benefit: string | null
    impact_of_not_doing: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_project_overviewCountAggregateOutputType | null
    _avg: Tr_project_overviewAvgAggregateOutputType | null
    _sum: Tr_project_overviewSumAggregateOutputType | null
    _min: Tr_project_overviewMinAggregateOutputType | null
    _max: Tr_project_overviewMaxAggregateOutputType | null
  }

  type GetTr_project_overviewGroupByPayload<T extends tr_project_overviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_overviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_overviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_overviewGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_overviewGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_overviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    purpose?: boolean
    goals?: boolean
    success_measurement?: boolean
    intangible_benefit?: boolean
    impact_of_not_doing?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_overview"]>


  export type tr_project_overviewSelectScalar = {
    id?: boolean
    project_id?: boolean
    purpose?: boolean
    goals?: boolean
    success_measurement?: boolean
    intangible_benefit?: boolean
    impact_of_not_doing?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_overviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_overview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      purpose: string | null
      goals: string | null
      success_measurement: string | null
      intangible_benefit: string | null
      impact_of_not_doing: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_overview"]>
    composites: {}
  }

  type tr_project_overviewGetPayload<S extends boolean | null | undefined | tr_project_overviewDefaultArgs> = $Result.GetResult<Prisma.$tr_project_overviewPayload, S>

  type tr_project_overviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_overviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_overviewCountAggregateInputType | true
    }

  export interface tr_project_overviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_overview'], meta: { name: 'tr_project_overview' } }
    /**
     * Find zero or one Tr_project_overview that matches the filter.
     * @param {tr_project_overviewFindUniqueArgs} args - Arguments to find a Tr_project_overview
     * @example
     * // Get one Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_overviewFindUniqueArgs>(args: SelectSubset<T, tr_project_overviewFindUniqueArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_overview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_overviewFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_overview
     * @example
     * // Get one Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_overviewFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_overviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_overview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewFindFirstArgs} args - Arguments to find a Tr_project_overview
     * @example
     * // Get one Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_overviewFindFirstArgs>(args?: SelectSubset<T, tr_project_overviewFindFirstArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_overview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewFindFirstOrThrowArgs} args - Arguments to find a Tr_project_overview
     * @example
     * // Get one Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_overviewFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_overviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_overviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_overviews
     * const tr_project_overviews = await prisma.tr_project_overview.findMany()
     * 
     * // Get first 10 Tr_project_overviews
     * const tr_project_overviews = await prisma.tr_project_overview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_overviewWithIdOnly = await prisma.tr_project_overview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_overviewFindManyArgs>(args?: SelectSubset<T, tr_project_overviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_overview.
     * @param {tr_project_overviewCreateArgs} args - Arguments to create a Tr_project_overview.
     * @example
     * // Create one Tr_project_overview
     * const Tr_project_overview = await prisma.tr_project_overview.create({
     *   data: {
     *     // ... data to create a Tr_project_overview
     *   }
     * })
     * 
     */
    create<T extends tr_project_overviewCreateArgs>(args: SelectSubset<T, tr_project_overviewCreateArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_overviews.
     * @param {tr_project_overviewCreateManyArgs} args - Arguments to create many Tr_project_overviews.
     * @example
     * // Create many Tr_project_overviews
     * const tr_project_overview = await prisma.tr_project_overview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_overviewCreateManyArgs>(args?: SelectSubset<T, tr_project_overviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_overview.
     * @param {tr_project_overviewDeleteArgs} args - Arguments to delete one Tr_project_overview.
     * @example
     * // Delete one Tr_project_overview
     * const Tr_project_overview = await prisma.tr_project_overview.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_overview
     *   }
     * })
     * 
     */
    delete<T extends tr_project_overviewDeleteArgs>(args: SelectSubset<T, tr_project_overviewDeleteArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_overview.
     * @param {tr_project_overviewUpdateArgs} args - Arguments to update one Tr_project_overview.
     * @example
     * // Update one Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_overviewUpdateArgs>(args: SelectSubset<T, tr_project_overviewUpdateArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_overviews.
     * @param {tr_project_overviewDeleteManyArgs} args - Arguments to filter Tr_project_overviews to delete.
     * @example
     * // Delete a few Tr_project_overviews
     * const { count } = await prisma.tr_project_overview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_overviewDeleteManyArgs>(args?: SelectSubset<T, tr_project_overviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_overviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_overviews
     * const tr_project_overview = await prisma.tr_project_overview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_overviewUpdateManyArgs>(args: SelectSubset<T, tr_project_overviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_overview.
     * @param {tr_project_overviewUpsertArgs} args - Arguments to update or create a Tr_project_overview.
     * @example
     * // Update or create a Tr_project_overview
     * const tr_project_overview = await prisma.tr_project_overview.upsert({
     *   create: {
     *     // ... data to create a Tr_project_overview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_overview we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_overviewUpsertArgs>(args: SelectSubset<T, tr_project_overviewUpsertArgs<ExtArgs>>): Prisma__tr_project_overviewClient<$Result.GetResult<Prisma.$tr_project_overviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_overviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewCountArgs} args - Arguments to filter Tr_project_overviews to count.
     * @example
     * // Count the number of Tr_project_overviews
     * const count = await prisma.tr_project_overview.count({
     *   where: {
     *     // ... the filter for the Tr_project_overviews we want to count
     *   }
     * })
    **/
    count<T extends tr_project_overviewCountArgs>(
      args?: Subset<T, tr_project_overviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_overviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_overview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_overviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_overviewAggregateArgs>(args: Subset<T, Tr_project_overviewAggregateArgs>): Prisma.PrismaPromise<GetTr_project_overviewAggregateType<T>>

    /**
     * Group by Tr_project_overview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_overviewGroupByArgs} args - Group by arguments.
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
      T extends tr_project_overviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_overviewGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_overviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_overviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_overviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_overview model
   */
  readonly fields: tr_project_overviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_overview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_overviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_overview model
   */ 
  interface tr_project_overviewFieldRefs {
    readonly id: FieldRef<"tr_project_overview", 'Int'>
    readonly project_id: FieldRef<"tr_project_overview", 'Int'>
    readonly purpose: FieldRef<"tr_project_overview", 'String'>
    readonly goals: FieldRef<"tr_project_overview", 'String'>
    readonly success_measurement: FieldRef<"tr_project_overview", 'String'>
    readonly intangible_benefit: FieldRef<"tr_project_overview", 'String'>
    readonly impact_of_not_doing: FieldRef<"tr_project_overview", 'String'>
    readonly created_at: FieldRef<"tr_project_overview", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_overview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_overview findUnique
   */
  export type tr_project_overviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_overview to fetch.
     */
    where: tr_project_overviewWhereUniqueInput
  }

  /**
   * tr_project_overview findUniqueOrThrow
   */
  export type tr_project_overviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_overview to fetch.
     */
    where: tr_project_overviewWhereUniqueInput
  }

  /**
   * tr_project_overview findFirst
   */
  export type tr_project_overviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_overview to fetch.
     */
    where?: tr_project_overviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_overviews to fetch.
     */
    orderBy?: tr_project_overviewOrderByWithRelationInput | tr_project_overviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_overviews.
     */
    cursor?: tr_project_overviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_overviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_overviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_overviews.
     */
    distinct?: Tr_project_overviewScalarFieldEnum | Tr_project_overviewScalarFieldEnum[]
  }

  /**
   * tr_project_overview findFirstOrThrow
   */
  export type tr_project_overviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_overview to fetch.
     */
    where?: tr_project_overviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_overviews to fetch.
     */
    orderBy?: tr_project_overviewOrderByWithRelationInput | tr_project_overviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_overviews.
     */
    cursor?: tr_project_overviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_overviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_overviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_overviews.
     */
    distinct?: Tr_project_overviewScalarFieldEnum | Tr_project_overviewScalarFieldEnum[]
  }

  /**
   * tr_project_overview findMany
   */
  export type tr_project_overviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_overviews to fetch.
     */
    where?: tr_project_overviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_overviews to fetch.
     */
    orderBy?: tr_project_overviewOrderByWithRelationInput | tr_project_overviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_overviews.
     */
    cursor?: tr_project_overviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_overviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_overviews.
     */
    skip?: number
    distinct?: Tr_project_overviewScalarFieldEnum | Tr_project_overviewScalarFieldEnum[]
  }

  /**
   * tr_project_overview create
   */
  export type tr_project_overviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_overview.
     */
    data?: XOR<tr_project_overviewCreateInput, tr_project_overviewUncheckedCreateInput>
  }

  /**
   * tr_project_overview createMany
   */
  export type tr_project_overviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_overviews.
     */
    data: tr_project_overviewCreateManyInput | tr_project_overviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_overview update
   */
  export type tr_project_overviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_overview.
     */
    data: XOR<tr_project_overviewUpdateInput, tr_project_overviewUncheckedUpdateInput>
    /**
     * Choose, which tr_project_overview to update.
     */
    where: tr_project_overviewWhereUniqueInput
  }

  /**
   * tr_project_overview updateMany
   */
  export type tr_project_overviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_overviews.
     */
    data: XOR<tr_project_overviewUpdateManyMutationInput, tr_project_overviewUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_overviews to update
     */
    where?: tr_project_overviewWhereInput
  }

  /**
   * tr_project_overview upsert
   */
  export type tr_project_overviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_overview to update in case it exists.
     */
    where: tr_project_overviewWhereUniqueInput
    /**
     * In case the tr_project_overview found by the `where` argument doesn't exist, create a new tr_project_overview with this data.
     */
    create: XOR<tr_project_overviewCreateInput, tr_project_overviewUncheckedCreateInput>
    /**
     * In case the tr_project_overview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_overviewUpdateInput, tr_project_overviewUncheckedUpdateInput>
  }

  /**
   * tr_project_overview delete
   */
  export type tr_project_overviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
    /**
     * Filter which tr_project_overview to delete.
     */
    where: tr_project_overviewWhereUniqueInput
  }

  /**
   * tr_project_overview deleteMany
   */
  export type tr_project_overviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_overviews to delete
     */
    where?: tr_project_overviewWhereInput
  }

  /**
   * tr_project_overview without action
   */
  export type tr_project_overviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_overview
     */
    select?: tr_project_overviewSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_participant
   */

  export type AggregateTr_project_participant = {
    _count: Tr_project_participantCountAggregateOutputType | null
    _avg: Tr_project_participantAvgAggregateOutputType | null
    _sum: Tr_project_participantSumAggregateOutputType | null
    _min: Tr_project_participantMinAggregateOutputType | null
    _max: Tr_project_participantMaxAggregateOutputType | null
  }

  export type Tr_project_participantAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_participantSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_participantMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    employee_code: string | null
    role: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_participantMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    employee_code: string | null
    role: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_participantCountAggregateOutputType = {
    id: number
    project_id: number
    employee_code: number
    role: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_participantAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_participantSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_participantMinAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    role?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_participantMaxAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    role?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_participantCountAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    role?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_participantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_participant to aggregate.
     */
    where?: tr_project_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_participants to fetch.
     */
    orderBy?: tr_project_participantOrderByWithRelationInput | tr_project_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_participants
    **/
    _count?: true | Tr_project_participantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_participantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_participantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_participantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_participantMaxAggregateInputType
  }

  export type GetTr_project_participantAggregateType<T extends Tr_project_participantAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_participant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_participant[P]>
      : GetScalarType<T[P], AggregateTr_project_participant[P]>
  }




  export type tr_project_participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_participantWhereInput
    orderBy?: tr_project_participantOrderByWithAggregationInput | tr_project_participantOrderByWithAggregationInput[]
    by: Tr_project_participantScalarFieldEnum[] | Tr_project_participantScalarFieldEnum
    having?: tr_project_participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_participantCountAggregateInputType | true
    _avg?: Tr_project_participantAvgAggregateInputType
    _sum?: Tr_project_participantSumAggregateInputType
    _min?: Tr_project_participantMinAggregateInputType
    _max?: Tr_project_participantMaxAggregateInputType
  }

  export type Tr_project_participantGroupByOutputType = {
    id: number
    project_id: number | null
    employee_code: string | null
    role: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_project_participantCountAggregateOutputType | null
    _avg: Tr_project_participantAvgAggregateOutputType | null
    _sum: Tr_project_participantSumAggregateOutputType | null
    _min: Tr_project_participantMinAggregateOutputType | null
    _max: Tr_project_participantMaxAggregateOutputType | null
  }

  type GetTr_project_participantGroupByPayload<T extends tr_project_participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_participantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_participantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_participantGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_participantGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    employee_code?: boolean
    role?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_participant"]>


  export type tr_project_participantSelectScalar = {
    id?: boolean
    project_id?: boolean
    employee_code?: boolean
    role?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_participant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      employee_code: string | null
      role: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_participant"]>
    composites: {}
  }

  type tr_project_participantGetPayload<S extends boolean | null | undefined | tr_project_participantDefaultArgs> = $Result.GetResult<Prisma.$tr_project_participantPayload, S>

  type tr_project_participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_participantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_participantCountAggregateInputType | true
    }

  export interface tr_project_participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_participant'], meta: { name: 'tr_project_participant' } }
    /**
     * Find zero or one Tr_project_participant that matches the filter.
     * @param {tr_project_participantFindUniqueArgs} args - Arguments to find a Tr_project_participant
     * @example
     * // Get one Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_participantFindUniqueArgs>(args: SelectSubset<T, tr_project_participantFindUniqueArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_participant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_participantFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_participant
     * @example
     * // Get one Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_participantFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantFindFirstArgs} args - Arguments to find a Tr_project_participant
     * @example
     * // Get one Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_participantFindFirstArgs>(args?: SelectSubset<T, tr_project_participantFindFirstArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantFindFirstOrThrowArgs} args - Arguments to find a Tr_project_participant
     * @example
     * // Get one Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_participantFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_participants
     * const tr_project_participants = await prisma.tr_project_participant.findMany()
     * 
     * // Get first 10 Tr_project_participants
     * const tr_project_participants = await prisma.tr_project_participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_participantWithIdOnly = await prisma.tr_project_participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_participantFindManyArgs>(args?: SelectSubset<T, tr_project_participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_participant.
     * @param {tr_project_participantCreateArgs} args - Arguments to create a Tr_project_participant.
     * @example
     * // Create one Tr_project_participant
     * const Tr_project_participant = await prisma.tr_project_participant.create({
     *   data: {
     *     // ... data to create a Tr_project_participant
     *   }
     * })
     * 
     */
    create<T extends tr_project_participantCreateArgs>(args: SelectSubset<T, tr_project_participantCreateArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_participants.
     * @param {tr_project_participantCreateManyArgs} args - Arguments to create many Tr_project_participants.
     * @example
     * // Create many Tr_project_participants
     * const tr_project_participant = await prisma.tr_project_participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_participantCreateManyArgs>(args?: SelectSubset<T, tr_project_participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_participant.
     * @param {tr_project_participantDeleteArgs} args - Arguments to delete one Tr_project_participant.
     * @example
     * // Delete one Tr_project_participant
     * const Tr_project_participant = await prisma.tr_project_participant.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_participant
     *   }
     * })
     * 
     */
    delete<T extends tr_project_participantDeleteArgs>(args: SelectSubset<T, tr_project_participantDeleteArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_participant.
     * @param {tr_project_participantUpdateArgs} args - Arguments to update one Tr_project_participant.
     * @example
     * // Update one Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_participantUpdateArgs>(args: SelectSubset<T, tr_project_participantUpdateArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_participants.
     * @param {tr_project_participantDeleteManyArgs} args - Arguments to filter Tr_project_participants to delete.
     * @example
     * // Delete a few Tr_project_participants
     * const { count } = await prisma.tr_project_participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_participantDeleteManyArgs>(args?: SelectSubset<T, tr_project_participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_participants
     * const tr_project_participant = await prisma.tr_project_participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_participantUpdateManyArgs>(args: SelectSubset<T, tr_project_participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_participant.
     * @param {tr_project_participantUpsertArgs} args - Arguments to update or create a Tr_project_participant.
     * @example
     * // Update or create a Tr_project_participant
     * const tr_project_participant = await prisma.tr_project_participant.upsert({
     *   create: {
     *     // ... data to create a Tr_project_participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_participant we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_participantUpsertArgs>(args: SelectSubset<T, tr_project_participantUpsertArgs<ExtArgs>>): Prisma__tr_project_participantClient<$Result.GetResult<Prisma.$tr_project_participantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantCountArgs} args - Arguments to filter Tr_project_participants to count.
     * @example
     * // Count the number of Tr_project_participants
     * const count = await prisma.tr_project_participant.count({
     *   where: {
     *     // ... the filter for the Tr_project_participants we want to count
     *   }
     * })
    **/
    count<T extends tr_project_participantCountArgs>(
      args?: Subset<T, tr_project_participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_participantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_participantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_participantAggregateArgs>(args: Subset<T, Tr_project_participantAggregateArgs>): Prisma.PrismaPromise<GetTr_project_participantAggregateType<T>>

    /**
     * Group by Tr_project_participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_participantGroupByArgs} args - Group by arguments.
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
      T extends tr_project_participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_participantGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_participantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_participantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_participant model
   */
  readonly fields: tr_project_participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_participant model
   */ 
  interface tr_project_participantFieldRefs {
    readonly id: FieldRef<"tr_project_participant", 'Int'>
    readonly project_id: FieldRef<"tr_project_participant", 'Int'>
    readonly employee_code: FieldRef<"tr_project_participant", 'String'>
    readonly role: FieldRef<"tr_project_participant", 'String'>
    readonly created_at: FieldRef<"tr_project_participant", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_participant findUnique
   */
  export type tr_project_participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_participant to fetch.
     */
    where: tr_project_participantWhereUniqueInput
  }

  /**
   * tr_project_participant findUniqueOrThrow
   */
  export type tr_project_participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_participant to fetch.
     */
    where: tr_project_participantWhereUniqueInput
  }

  /**
   * tr_project_participant findFirst
   */
  export type tr_project_participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_participant to fetch.
     */
    where?: tr_project_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_participants to fetch.
     */
    orderBy?: tr_project_participantOrderByWithRelationInput | tr_project_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_participants.
     */
    cursor?: tr_project_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_participants.
     */
    distinct?: Tr_project_participantScalarFieldEnum | Tr_project_participantScalarFieldEnum[]
  }

  /**
   * tr_project_participant findFirstOrThrow
   */
  export type tr_project_participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_participant to fetch.
     */
    where?: tr_project_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_participants to fetch.
     */
    orderBy?: tr_project_participantOrderByWithRelationInput | tr_project_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_participants.
     */
    cursor?: tr_project_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_participants.
     */
    distinct?: Tr_project_participantScalarFieldEnum | Tr_project_participantScalarFieldEnum[]
  }

  /**
   * tr_project_participant findMany
   */
  export type tr_project_participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_participants to fetch.
     */
    where?: tr_project_participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_participants to fetch.
     */
    orderBy?: tr_project_participantOrderByWithRelationInput | tr_project_participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_participants.
     */
    cursor?: tr_project_participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_participants.
     */
    skip?: number
    distinct?: Tr_project_participantScalarFieldEnum | Tr_project_participantScalarFieldEnum[]
  }

  /**
   * tr_project_participant create
   */
  export type tr_project_participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_participant.
     */
    data?: XOR<tr_project_participantCreateInput, tr_project_participantUncheckedCreateInput>
  }

  /**
   * tr_project_participant createMany
   */
  export type tr_project_participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_participants.
     */
    data: tr_project_participantCreateManyInput | tr_project_participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_participant update
   */
  export type tr_project_participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_participant.
     */
    data: XOR<tr_project_participantUpdateInput, tr_project_participantUncheckedUpdateInput>
    /**
     * Choose, which tr_project_participant to update.
     */
    where: tr_project_participantWhereUniqueInput
  }

  /**
   * tr_project_participant updateMany
   */
  export type tr_project_participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_participants.
     */
    data: XOR<tr_project_participantUpdateManyMutationInput, tr_project_participantUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_participants to update
     */
    where?: tr_project_participantWhereInput
  }

  /**
   * tr_project_participant upsert
   */
  export type tr_project_participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_participant to update in case it exists.
     */
    where: tr_project_participantWhereUniqueInput
    /**
     * In case the tr_project_participant found by the `where` argument doesn't exist, create a new tr_project_participant with this data.
     */
    create: XOR<tr_project_participantCreateInput, tr_project_participantUncheckedCreateInput>
    /**
     * In case the tr_project_participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_participantUpdateInput, tr_project_participantUncheckedUpdateInput>
  }

  /**
   * tr_project_participant delete
   */
  export type tr_project_participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
    /**
     * Filter which tr_project_participant to delete.
     */
    where: tr_project_participantWhereUniqueInput
  }

  /**
   * tr_project_participant deleteMany
   */
  export type tr_project_participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_participants to delete
     */
    where?: tr_project_participantWhereInput
  }

  /**
   * tr_project_participant without action
   */
  export type tr_project_participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_participant
     */
    select?: tr_project_participantSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_risk_mitigation
   */

  export type AggregateTr_project_risk_mitigation = {
    _count: Tr_project_risk_mitigationCountAggregateOutputType | null
    _avg: Tr_project_risk_mitigationAvgAggregateOutputType | null
    _sum: Tr_project_risk_mitigationSumAggregateOutputType | null
    _min: Tr_project_risk_mitigationMinAggregateOutputType | null
    _max: Tr_project_risk_mitigationMaxAggregateOutputType | null
  }

  export type Tr_project_risk_mitigationAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_risk_mitigationSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_risk_mitigationMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    risk: string | null
    point_control: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_risk_mitigationMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    risk: string | null
    point_control: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_risk_mitigationCountAggregateOutputType = {
    id: number
    project_id: number
    risk: number
    point_control: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_risk_mitigationAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_risk_mitigationSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_risk_mitigationMinAggregateInputType = {
    id?: true
    project_id?: true
    risk?: true
    point_control?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_risk_mitigationMaxAggregateInputType = {
    id?: true
    project_id?: true
    risk?: true
    point_control?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_risk_mitigationCountAggregateInputType = {
    id?: true
    project_id?: true
    risk?: true
    point_control?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_risk_mitigationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_risk_mitigation to aggregate.
     */
    where?: tr_project_risk_mitigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_risk_mitigations to fetch.
     */
    orderBy?: tr_project_risk_mitigationOrderByWithRelationInput | tr_project_risk_mitigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_risk_mitigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_risk_mitigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_risk_mitigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_risk_mitigations
    **/
    _count?: true | Tr_project_risk_mitigationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_risk_mitigationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_risk_mitigationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_risk_mitigationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_risk_mitigationMaxAggregateInputType
  }

  export type GetTr_project_risk_mitigationAggregateType<T extends Tr_project_risk_mitigationAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_risk_mitigation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_risk_mitigation[P]>
      : GetScalarType<T[P], AggregateTr_project_risk_mitigation[P]>
  }




  export type tr_project_risk_mitigationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_risk_mitigationWhereInput
    orderBy?: tr_project_risk_mitigationOrderByWithAggregationInput | tr_project_risk_mitigationOrderByWithAggregationInput[]
    by: Tr_project_risk_mitigationScalarFieldEnum[] | Tr_project_risk_mitigationScalarFieldEnum
    having?: tr_project_risk_mitigationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_risk_mitigationCountAggregateInputType | true
    _avg?: Tr_project_risk_mitigationAvgAggregateInputType
    _sum?: Tr_project_risk_mitigationSumAggregateInputType
    _min?: Tr_project_risk_mitigationMinAggregateInputType
    _max?: Tr_project_risk_mitigationMaxAggregateInputType
  }

  export type Tr_project_risk_mitigationGroupByOutputType = {
    id: number
    project_id: number | null
    risk: string | null
    point_control: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_project_risk_mitigationCountAggregateOutputType | null
    _avg: Tr_project_risk_mitigationAvgAggregateOutputType | null
    _sum: Tr_project_risk_mitigationSumAggregateOutputType | null
    _min: Tr_project_risk_mitigationMinAggregateOutputType | null
    _max: Tr_project_risk_mitigationMaxAggregateOutputType | null
  }

  type GetTr_project_risk_mitigationGroupByPayload<T extends tr_project_risk_mitigationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_risk_mitigationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_risk_mitigationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_risk_mitigationGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_risk_mitigationGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_risk_mitigationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    risk?: boolean
    point_control?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_risk_mitigation"]>


  export type tr_project_risk_mitigationSelectScalar = {
    id?: boolean
    project_id?: boolean
    risk?: boolean
    point_control?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_risk_mitigationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_risk_mitigation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      risk: string | null
      point_control: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_risk_mitigation"]>
    composites: {}
  }

  type tr_project_risk_mitigationGetPayload<S extends boolean | null | undefined | tr_project_risk_mitigationDefaultArgs> = $Result.GetResult<Prisma.$tr_project_risk_mitigationPayload, S>

  type tr_project_risk_mitigationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_risk_mitigationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_risk_mitigationCountAggregateInputType | true
    }

  export interface tr_project_risk_mitigationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_risk_mitigation'], meta: { name: 'tr_project_risk_mitigation' } }
    /**
     * Find zero or one Tr_project_risk_mitigation that matches the filter.
     * @param {tr_project_risk_mitigationFindUniqueArgs} args - Arguments to find a Tr_project_risk_mitigation
     * @example
     * // Get one Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_risk_mitigationFindUniqueArgs>(args: SelectSubset<T, tr_project_risk_mitigationFindUniqueArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_risk_mitigation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_risk_mitigationFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_risk_mitigation
     * @example
     * // Get one Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_risk_mitigationFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_risk_mitigationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_risk_mitigation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationFindFirstArgs} args - Arguments to find a Tr_project_risk_mitigation
     * @example
     * // Get one Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_risk_mitigationFindFirstArgs>(args?: SelectSubset<T, tr_project_risk_mitigationFindFirstArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_risk_mitigation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationFindFirstOrThrowArgs} args - Arguments to find a Tr_project_risk_mitigation
     * @example
     * // Get one Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_risk_mitigationFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_risk_mitigationFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_risk_mitigations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_risk_mitigations
     * const tr_project_risk_mitigations = await prisma.tr_project_risk_mitigation.findMany()
     * 
     * // Get first 10 Tr_project_risk_mitigations
     * const tr_project_risk_mitigations = await prisma.tr_project_risk_mitigation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_risk_mitigationWithIdOnly = await prisma.tr_project_risk_mitigation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_risk_mitigationFindManyArgs>(args?: SelectSubset<T, tr_project_risk_mitigationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_risk_mitigation.
     * @param {tr_project_risk_mitigationCreateArgs} args - Arguments to create a Tr_project_risk_mitigation.
     * @example
     * // Create one Tr_project_risk_mitigation
     * const Tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.create({
     *   data: {
     *     // ... data to create a Tr_project_risk_mitigation
     *   }
     * })
     * 
     */
    create<T extends tr_project_risk_mitigationCreateArgs>(args: SelectSubset<T, tr_project_risk_mitigationCreateArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_risk_mitigations.
     * @param {tr_project_risk_mitigationCreateManyArgs} args - Arguments to create many Tr_project_risk_mitigations.
     * @example
     * // Create many Tr_project_risk_mitigations
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_risk_mitigationCreateManyArgs>(args?: SelectSubset<T, tr_project_risk_mitigationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_risk_mitigation.
     * @param {tr_project_risk_mitigationDeleteArgs} args - Arguments to delete one Tr_project_risk_mitigation.
     * @example
     * // Delete one Tr_project_risk_mitigation
     * const Tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_risk_mitigation
     *   }
     * })
     * 
     */
    delete<T extends tr_project_risk_mitigationDeleteArgs>(args: SelectSubset<T, tr_project_risk_mitigationDeleteArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_risk_mitigation.
     * @param {tr_project_risk_mitigationUpdateArgs} args - Arguments to update one Tr_project_risk_mitigation.
     * @example
     * // Update one Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_risk_mitigationUpdateArgs>(args: SelectSubset<T, tr_project_risk_mitigationUpdateArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_risk_mitigations.
     * @param {tr_project_risk_mitigationDeleteManyArgs} args - Arguments to filter Tr_project_risk_mitigations to delete.
     * @example
     * // Delete a few Tr_project_risk_mitigations
     * const { count } = await prisma.tr_project_risk_mitigation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_risk_mitigationDeleteManyArgs>(args?: SelectSubset<T, tr_project_risk_mitigationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_risk_mitigations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_risk_mitigations
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_risk_mitigationUpdateManyArgs>(args: SelectSubset<T, tr_project_risk_mitigationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_risk_mitigation.
     * @param {tr_project_risk_mitigationUpsertArgs} args - Arguments to update or create a Tr_project_risk_mitigation.
     * @example
     * // Update or create a Tr_project_risk_mitigation
     * const tr_project_risk_mitigation = await prisma.tr_project_risk_mitigation.upsert({
     *   create: {
     *     // ... data to create a Tr_project_risk_mitigation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_risk_mitigation we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_risk_mitigationUpsertArgs>(args: SelectSubset<T, tr_project_risk_mitigationUpsertArgs<ExtArgs>>): Prisma__tr_project_risk_mitigationClient<$Result.GetResult<Prisma.$tr_project_risk_mitigationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_risk_mitigations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationCountArgs} args - Arguments to filter Tr_project_risk_mitigations to count.
     * @example
     * // Count the number of Tr_project_risk_mitigations
     * const count = await prisma.tr_project_risk_mitigation.count({
     *   where: {
     *     // ... the filter for the Tr_project_risk_mitigations we want to count
     *   }
     * })
    **/
    count<T extends tr_project_risk_mitigationCountArgs>(
      args?: Subset<T, tr_project_risk_mitigationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_risk_mitigationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_risk_mitigation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_risk_mitigationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_risk_mitigationAggregateArgs>(args: Subset<T, Tr_project_risk_mitigationAggregateArgs>): Prisma.PrismaPromise<GetTr_project_risk_mitigationAggregateType<T>>

    /**
     * Group by Tr_project_risk_mitigation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_risk_mitigationGroupByArgs} args - Group by arguments.
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
      T extends tr_project_risk_mitigationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_risk_mitigationGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_risk_mitigationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_risk_mitigationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_risk_mitigationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_risk_mitigation model
   */
  readonly fields: tr_project_risk_mitigationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_risk_mitigation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_risk_mitigationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_risk_mitigation model
   */ 
  interface tr_project_risk_mitigationFieldRefs {
    readonly id: FieldRef<"tr_project_risk_mitigation", 'Int'>
    readonly project_id: FieldRef<"tr_project_risk_mitigation", 'Int'>
    readonly risk: FieldRef<"tr_project_risk_mitigation", 'String'>
    readonly point_control: FieldRef<"tr_project_risk_mitigation", 'String'>
    readonly created_at: FieldRef<"tr_project_risk_mitigation", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_risk_mitigation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_risk_mitigation findUnique
   */
  export type tr_project_risk_mitigationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_risk_mitigation to fetch.
     */
    where: tr_project_risk_mitigationWhereUniqueInput
  }

  /**
   * tr_project_risk_mitigation findUniqueOrThrow
   */
  export type tr_project_risk_mitigationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_risk_mitigation to fetch.
     */
    where: tr_project_risk_mitigationWhereUniqueInput
  }

  /**
   * tr_project_risk_mitigation findFirst
   */
  export type tr_project_risk_mitigationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_risk_mitigation to fetch.
     */
    where?: tr_project_risk_mitigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_risk_mitigations to fetch.
     */
    orderBy?: tr_project_risk_mitigationOrderByWithRelationInput | tr_project_risk_mitigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_risk_mitigations.
     */
    cursor?: tr_project_risk_mitigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_risk_mitigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_risk_mitigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_risk_mitigations.
     */
    distinct?: Tr_project_risk_mitigationScalarFieldEnum | Tr_project_risk_mitigationScalarFieldEnum[]
  }

  /**
   * tr_project_risk_mitigation findFirstOrThrow
   */
  export type tr_project_risk_mitigationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_risk_mitigation to fetch.
     */
    where?: tr_project_risk_mitigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_risk_mitigations to fetch.
     */
    orderBy?: tr_project_risk_mitigationOrderByWithRelationInput | tr_project_risk_mitigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_risk_mitigations.
     */
    cursor?: tr_project_risk_mitigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_risk_mitigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_risk_mitigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_risk_mitigations.
     */
    distinct?: Tr_project_risk_mitigationScalarFieldEnum | Tr_project_risk_mitigationScalarFieldEnum[]
  }

  /**
   * tr_project_risk_mitigation findMany
   */
  export type tr_project_risk_mitigationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_risk_mitigations to fetch.
     */
    where?: tr_project_risk_mitigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_risk_mitigations to fetch.
     */
    orderBy?: tr_project_risk_mitigationOrderByWithRelationInput | tr_project_risk_mitigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_risk_mitigations.
     */
    cursor?: tr_project_risk_mitigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_risk_mitigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_risk_mitigations.
     */
    skip?: number
    distinct?: Tr_project_risk_mitigationScalarFieldEnum | Tr_project_risk_mitigationScalarFieldEnum[]
  }

  /**
   * tr_project_risk_mitigation create
   */
  export type tr_project_risk_mitigationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_risk_mitigation.
     */
    data: XOR<tr_project_risk_mitigationCreateInput, tr_project_risk_mitigationUncheckedCreateInput>
  }

  /**
   * tr_project_risk_mitigation createMany
   */
  export type tr_project_risk_mitigationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_risk_mitigations.
     */
    data: tr_project_risk_mitigationCreateManyInput | tr_project_risk_mitigationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_risk_mitigation update
   */
  export type tr_project_risk_mitigationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_risk_mitigation.
     */
    data: XOR<tr_project_risk_mitigationUpdateInput, tr_project_risk_mitigationUncheckedUpdateInput>
    /**
     * Choose, which tr_project_risk_mitigation to update.
     */
    where: tr_project_risk_mitigationWhereUniqueInput
  }

  /**
   * tr_project_risk_mitigation updateMany
   */
  export type tr_project_risk_mitigationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_risk_mitigations.
     */
    data: XOR<tr_project_risk_mitigationUpdateManyMutationInput, tr_project_risk_mitigationUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_risk_mitigations to update
     */
    where?: tr_project_risk_mitigationWhereInput
  }

  /**
   * tr_project_risk_mitigation upsert
   */
  export type tr_project_risk_mitigationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_risk_mitigation to update in case it exists.
     */
    where: tr_project_risk_mitigationWhereUniqueInput
    /**
     * In case the tr_project_risk_mitigation found by the `where` argument doesn't exist, create a new tr_project_risk_mitigation with this data.
     */
    create: XOR<tr_project_risk_mitigationCreateInput, tr_project_risk_mitigationUncheckedCreateInput>
    /**
     * In case the tr_project_risk_mitigation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_risk_mitigationUpdateInput, tr_project_risk_mitigationUncheckedUpdateInput>
  }

  /**
   * tr_project_risk_mitigation delete
   */
  export type tr_project_risk_mitigationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
    /**
     * Filter which tr_project_risk_mitigation to delete.
     */
    where: tr_project_risk_mitigationWhereUniqueInput
  }

  /**
   * tr_project_risk_mitigation deleteMany
   */
  export type tr_project_risk_mitigationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_risk_mitigations to delete
     */
    where?: tr_project_risk_mitigationWhereInput
  }

  /**
   * tr_project_risk_mitigation without action
   */
  export type tr_project_risk_mitigationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_risk_mitigation
     */
    select?: tr_project_risk_mitigationSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_scope
   */

  export type AggregateTr_project_scope = {
    _count: Tr_project_scopeCountAggregateOutputType | null
    _avg: Tr_project_scopeAvgAggregateOutputType | null
    _sum: Tr_project_scopeSumAggregateOutputType | null
    _min: Tr_project_scopeMinAggregateOutputType | null
    _max: Tr_project_scopeMaxAggregateOutputType | null
  }

  export type Tr_project_scopeAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_scopeSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_scopeMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    features: string | null
    description: string | null
    type: string | null
    created_at: string | null
    created_by: string | null
  }

  export type Tr_project_scopeMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    features: string | null
    description: string | null
    type: string | null
    created_at: string | null
    created_by: string | null
  }

  export type Tr_project_scopeCountAggregateOutputType = {
    id: number
    project_id: number
    features: number
    description: number
    type: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_scopeAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_scopeSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_scopeMinAggregateInputType = {
    id?: true
    project_id?: true
    features?: true
    description?: true
    type?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_scopeMaxAggregateInputType = {
    id?: true
    project_id?: true
    features?: true
    description?: true
    type?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_scopeCountAggregateInputType = {
    id?: true
    project_id?: true
    features?: true
    description?: true
    type?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_scopeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_scope to aggregate.
     */
    where?: tr_project_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_scopes to fetch.
     */
    orderBy?: tr_project_scopeOrderByWithRelationInput | tr_project_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_scopes
    **/
    _count?: true | Tr_project_scopeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_scopeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_scopeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_scopeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_scopeMaxAggregateInputType
  }

  export type GetTr_project_scopeAggregateType<T extends Tr_project_scopeAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_scope]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_scope[P]>
      : GetScalarType<T[P], AggregateTr_project_scope[P]>
  }




  export type tr_project_scopeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_scopeWhereInput
    orderBy?: tr_project_scopeOrderByWithAggregationInput | tr_project_scopeOrderByWithAggregationInput[]
    by: Tr_project_scopeScalarFieldEnum[] | Tr_project_scopeScalarFieldEnum
    having?: tr_project_scopeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_scopeCountAggregateInputType | true
    _avg?: Tr_project_scopeAvgAggregateInputType
    _sum?: Tr_project_scopeSumAggregateInputType
    _min?: Tr_project_scopeMinAggregateInputType
    _max?: Tr_project_scopeMaxAggregateInputType
  }

  export type Tr_project_scopeGroupByOutputType = {
    id: number
    project_id: number | null
    features: string | null
    description: string | null
    type: string | null
    created_at: string | null
    created_by: string | null
    _count: Tr_project_scopeCountAggregateOutputType | null
    _avg: Tr_project_scopeAvgAggregateOutputType | null
    _sum: Tr_project_scopeSumAggregateOutputType | null
    _min: Tr_project_scopeMinAggregateOutputType | null
    _max: Tr_project_scopeMaxAggregateOutputType | null
  }

  type GetTr_project_scopeGroupByPayload<T extends tr_project_scopeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_scopeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_scopeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_scopeGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_scopeGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_scopeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    features?: boolean
    description?: boolean
    type?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_scope"]>


  export type tr_project_scopeSelectScalar = {
    id?: boolean
    project_id?: boolean
    features?: boolean
    description?: boolean
    type?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_scopePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_scope"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      features: string | null
      description: string | null
      type: string | null
      created_at: string | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_scope"]>
    composites: {}
  }

  type tr_project_scopeGetPayload<S extends boolean | null | undefined | tr_project_scopeDefaultArgs> = $Result.GetResult<Prisma.$tr_project_scopePayload, S>

  type tr_project_scopeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_scopeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_scopeCountAggregateInputType | true
    }

  export interface tr_project_scopeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_scope'], meta: { name: 'tr_project_scope' } }
    /**
     * Find zero or one Tr_project_scope that matches the filter.
     * @param {tr_project_scopeFindUniqueArgs} args - Arguments to find a Tr_project_scope
     * @example
     * // Get one Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_scopeFindUniqueArgs>(args: SelectSubset<T, tr_project_scopeFindUniqueArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_scope that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_scopeFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_scope
     * @example
     * // Get one Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_scopeFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_scopeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_scope that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeFindFirstArgs} args - Arguments to find a Tr_project_scope
     * @example
     * // Get one Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_scopeFindFirstArgs>(args?: SelectSubset<T, tr_project_scopeFindFirstArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_scope that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeFindFirstOrThrowArgs} args - Arguments to find a Tr_project_scope
     * @example
     * // Get one Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_scopeFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_scopeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_scopes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_scopes
     * const tr_project_scopes = await prisma.tr_project_scope.findMany()
     * 
     * // Get first 10 Tr_project_scopes
     * const tr_project_scopes = await prisma.tr_project_scope.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_scopeWithIdOnly = await prisma.tr_project_scope.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_scopeFindManyArgs>(args?: SelectSubset<T, tr_project_scopeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_scope.
     * @param {tr_project_scopeCreateArgs} args - Arguments to create a Tr_project_scope.
     * @example
     * // Create one Tr_project_scope
     * const Tr_project_scope = await prisma.tr_project_scope.create({
     *   data: {
     *     // ... data to create a Tr_project_scope
     *   }
     * })
     * 
     */
    create<T extends tr_project_scopeCreateArgs>(args: SelectSubset<T, tr_project_scopeCreateArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_scopes.
     * @param {tr_project_scopeCreateManyArgs} args - Arguments to create many Tr_project_scopes.
     * @example
     * // Create many Tr_project_scopes
     * const tr_project_scope = await prisma.tr_project_scope.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_scopeCreateManyArgs>(args?: SelectSubset<T, tr_project_scopeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_scope.
     * @param {tr_project_scopeDeleteArgs} args - Arguments to delete one Tr_project_scope.
     * @example
     * // Delete one Tr_project_scope
     * const Tr_project_scope = await prisma.tr_project_scope.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_scope
     *   }
     * })
     * 
     */
    delete<T extends tr_project_scopeDeleteArgs>(args: SelectSubset<T, tr_project_scopeDeleteArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_scope.
     * @param {tr_project_scopeUpdateArgs} args - Arguments to update one Tr_project_scope.
     * @example
     * // Update one Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_scopeUpdateArgs>(args: SelectSubset<T, tr_project_scopeUpdateArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_scopes.
     * @param {tr_project_scopeDeleteManyArgs} args - Arguments to filter Tr_project_scopes to delete.
     * @example
     * // Delete a few Tr_project_scopes
     * const { count } = await prisma.tr_project_scope.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_scopeDeleteManyArgs>(args?: SelectSubset<T, tr_project_scopeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_scopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_scopes
     * const tr_project_scope = await prisma.tr_project_scope.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_scopeUpdateManyArgs>(args: SelectSubset<T, tr_project_scopeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_scope.
     * @param {tr_project_scopeUpsertArgs} args - Arguments to update or create a Tr_project_scope.
     * @example
     * // Update or create a Tr_project_scope
     * const tr_project_scope = await prisma.tr_project_scope.upsert({
     *   create: {
     *     // ... data to create a Tr_project_scope
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_scope we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_scopeUpsertArgs>(args: SelectSubset<T, tr_project_scopeUpsertArgs<ExtArgs>>): Prisma__tr_project_scopeClient<$Result.GetResult<Prisma.$tr_project_scopePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_scopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeCountArgs} args - Arguments to filter Tr_project_scopes to count.
     * @example
     * // Count the number of Tr_project_scopes
     * const count = await prisma.tr_project_scope.count({
     *   where: {
     *     // ... the filter for the Tr_project_scopes we want to count
     *   }
     * })
    **/
    count<T extends tr_project_scopeCountArgs>(
      args?: Subset<T, tr_project_scopeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_scopeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_scope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_scopeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_scopeAggregateArgs>(args: Subset<T, Tr_project_scopeAggregateArgs>): Prisma.PrismaPromise<GetTr_project_scopeAggregateType<T>>

    /**
     * Group by Tr_project_scope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_scopeGroupByArgs} args - Group by arguments.
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
      T extends tr_project_scopeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_scopeGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_scopeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_scopeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_scopeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_scope model
   */
  readonly fields: tr_project_scopeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_scope.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_scopeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_scope model
   */ 
  interface tr_project_scopeFieldRefs {
    readonly id: FieldRef<"tr_project_scope", 'Int'>
    readonly project_id: FieldRef<"tr_project_scope", 'Int'>
    readonly features: FieldRef<"tr_project_scope", 'String'>
    readonly description: FieldRef<"tr_project_scope", 'String'>
    readonly type: FieldRef<"tr_project_scope", 'String'>
    readonly created_at: FieldRef<"tr_project_scope", 'String'>
    readonly created_by: FieldRef<"tr_project_scope", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_scope findUnique
   */
  export type tr_project_scopeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_scope to fetch.
     */
    where: tr_project_scopeWhereUniqueInput
  }

  /**
   * tr_project_scope findUniqueOrThrow
   */
  export type tr_project_scopeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_scope to fetch.
     */
    where: tr_project_scopeWhereUniqueInput
  }

  /**
   * tr_project_scope findFirst
   */
  export type tr_project_scopeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_scope to fetch.
     */
    where?: tr_project_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_scopes to fetch.
     */
    orderBy?: tr_project_scopeOrderByWithRelationInput | tr_project_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_scopes.
     */
    cursor?: tr_project_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_scopes.
     */
    distinct?: Tr_project_scopeScalarFieldEnum | Tr_project_scopeScalarFieldEnum[]
  }

  /**
   * tr_project_scope findFirstOrThrow
   */
  export type tr_project_scopeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_scope to fetch.
     */
    where?: tr_project_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_scopes to fetch.
     */
    orderBy?: tr_project_scopeOrderByWithRelationInput | tr_project_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_scopes.
     */
    cursor?: tr_project_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_scopes.
     */
    distinct?: Tr_project_scopeScalarFieldEnum | Tr_project_scopeScalarFieldEnum[]
  }

  /**
   * tr_project_scope findMany
   */
  export type tr_project_scopeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_scopes to fetch.
     */
    where?: tr_project_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_scopes to fetch.
     */
    orderBy?: tr_project_scopeOrderByWithRelationInput | tr_project_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_scopes.
     */
    cursor?: tr_project_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_scopes.
     */
    skip?: number
    distinct?: Tr_project_scopeScalarFieldEnum | Tr_project_scopeScalarFieldEnum[]
  }

  /**
   * tr_project_scope create
   */
  export type tr_project_scopeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_scope.
     */
    data?: XOR<tr_project_scopeCreateInput, tr_project_scopeUncheckedCreateInput>
  }

  /**
   * tr_project_scope createMany
   */
  export type tr_project_scopeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_scopes.
     */
    data: tr_project_scopeCreateManyInput | tr_project_scopeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_scope update
   */
  export type tr_project_scopeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_scope.
     */
    data: XOR<tr_project_scopeUpdateInput, tr_project_scopeUncheckedUpdateInput>
    /**
     * Choose, which tr_project_scope to update.
     */
    where: tr_project_scopeWhereUniqueInput
  }

  /**
   * tr_project_scope updateMany
   */
  export type tr_project_scopeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_scopes.
     */
    data: XOR<tr_project_scopeUpdateManyMutationInput, tr_project_scopeUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_scopes to update
     */
    where?: tr_project_scopeWhereInput
  }

  /**
   * tr_project_scope upsert
   */
  export type tr_project_scopeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_scope to update in case it exists.
     */
    where: tr_project_scopeWhereUniqueInput
    /**
     * In case the tr_project_scope found by the `where` argument doesn't exist, create a new tr_project_scope with this data.
     */
    create: XOR<tr_project_scopeCreateInput, tr_project_scopeUncheckedCreateInput>
    /**
     * In case the tr_project_scope was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_scopeUpdateInput, tr_project_scopeUncheckedUpdateInput>
  }

  /**
   * tr_project_scope delete
   */
  export type tr_project_scopeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
    /**
     * Filter which tr_project_scope to delete.
     */
    where: tr_project_scopeWhereUniqueInput
  }

  /**
   * tr_project_scope deleteMany
   */
  export type tr_project_scopeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_scopes to delete
     */
    where?: tr_project_scopeWhereInput
  }

  /**
   * tr_project_scope without action
   */
  export type tr_project_scopeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_scope
     */
    select?: tr_project_scopeSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_task
   */

  export type AggregateTr_project_task = {
    _count: Tr_project_taskCountAggregateOutputType | null
    _avg: Tr_project_taskAvgAggregateOutputType | null
    _sum: Tr_project_taskSumAggregateOutputType | null
    _min: Tr_project_taskMinAggregateOutputType | null
    _max: Tr_project_taskMaxAggregateOutputType | null
  }

  export type Tr_project_taskAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
    cost: Decimal | null
  }

  export type Tr_project_taskSumAggregateOutputType = {
    id: number | null
    project_id: number | null
    cost: Decimal | null
  }

  export type Tr_project_taskMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    task_name: string | null
    content: string | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    planned_duration: string | null
    real_duration: string | null
    percent_done: string | null
    cost: Decimal | null
    task_type: string | null
    created_at: Date | null
    created_by: string | null
    task_category: string | null
  }

  export type Tr_project_taskMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    task_name: string | null
    content: string | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    planned_duration: string | null
    real_duration: string | null
    percent_done: string | null
    cost: Decimal | null
    task_type: string | null
    created_at: Date | null
    created_by: string | null
    task_category: string | null
  }

  export type Tr_project_taskCountAggregateOutputType = {
    id: number
    project_id: number
    task_name: number
    content: number
    plan_start_date: number
    plan_end_date: number
    real_start_date: number
    real_end_date: number
    planned_duration: number
    real_duration: number
    percent_done: number
    cost: number
    task_type: number
    created_at: number
    created_by: number
    task_category: number
    _all: number
  }


  export type Tr_project_taskAvgAggregateInputType = {
    id?: true
    project_id?: true
    cost?: true
  }

  export type Tr_project_taskSumAggregateInputType = {
    id?: true
    project_id?: true
    cost?: true
  }

  export type Tr_project_taskMinAggregateInputType = {
    id?: true
    project_id?: true
    task_name?: true
    content?: true
    plan_start_date?: true
    plan_end_date?: true
    real_start_date?: true
    real_end_date?: true
    planned_duration?: true
    real_duration?: true
    percent_done?: true
    cost?: true
    task_type?: true
    created_at?: true
    created_by?: true
    task_category?: true
  }

  export type Tr_project_taskMaxAggregateInputType = {
    id?: true
    project_id?: true
    task_name?: true
    content?: true
    plan_start_date?: true
    plan_end_date?: true
    real_start_date?: true
    real_end_date?: true
    planned_duration?: true
    real_duration?: true
    percent_done?: true
    cost?: true
    task_type?: true
    created_at?: true
    created_by?: true
    task_category?: true
  }

  export type Tr_project_taskCountAggregateInputType = {
    id?: true
    project_id?: true
    task_name?: true
    content?: true
    plan_start_date?: true
    plan_end_date?: true
    real_start_date?: true
    real_end_date?: true
    planned_duration?: true
    real_duration?: true
    percent_done?: true
    cost?: true
    task_type?: true
    created_at?: true
    created_by?: true
    task_category?: true
    _all?: true
  }

  export type Tr_project_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_task to aggregate.
     */
    where?: tr_project_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_tasks to fetch.
     */
    orderBy?: tr_project_taskOrderByWithRelationInput | tr_project_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_tasks
    **/
    _count?: true | Tr_project_taskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_taskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_taskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_taskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_taskMaxAggregateInputType
  }

  export type GetTr_project_taskAggregateType<T extends Tr_project_taskAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_task[P]>
      : GetScalarType<T[P], AggregateTr_project_task[P]>
  }




  export type tr_project_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_taskWhereInput
    orderBy?: tr_project_taskOrderByWithAggregationInput | tr_project_taskOrderByWithAggregationInput[]
    by: Tr_project_taskScalarFieldEnum[] | Tr_project_taskScalarFieldEnum
    having?: tr_project_taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_taskCountAggregateInputType | true
    _avg?: Tr_project_taskAvgAggregateInputType
    _sum?: Tr_project_taskSumAggregateInputType
    _min?: Tr_project_taskMinAggregateInputType
    _max?: Tr_project_taskMaxAggregateInputType
  }

  export type Tr_project_taskGroupByOutputType = {
    id: number
    project_id: number | null
    task_name: string | null
    content: string | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    real_start_date: Date | null
    real_end_date: Date | null
    planned_duration: string | null
    real_duration: string | null
    percent_done: string | null
    cost: Decimal | null
    task_type: string | null
    created_at: Date | null
    created_by: string | null
    task_category: string | null
    _count: Tr_project_taskCountAggregateOutputType | null
    _avg: Tr_project_taskAvgAggregateOutputType | null
    _sum: Tr_project_taskSumAggregateOutputType | null
    _min: Tr_project_taskMinAggregateOutputType | null
    _max: Tr_project_taskMaxAggregateOutputType | null
  }

  type GetTr_project_taskGroupByPayload<T extends tr_project_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_taskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_taskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_taskGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_taskGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    task_name?: boolean
    content?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    real_start_date?: boolean
    real_end_date?: boolean
    planned_duration?: boolean
    real_duration?: boolean
    percent_done?: boolean
    cost?: boolean
    task_type?: boolean
    created_at?: boolean
    created_by?: boolean
    task_category?: boolean
  }, ExtArgs["result"]["tr_project_task"]>


  export type tr_project_taskSelectScalar = {
    id?: boolean
    project_id?: boolean
    task_name?: boolean
    content?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    real_start_date?: boolean
    real_end_date?: boolean
    planned_duration?: boolean
    real_duration?: boolean
    percent_done?: boolean
    cost?: boolean
    task_type?: boolean
    created_at?: boolean
    created_by?: boolean
    task_category?: boolean
  }


  export type $tr_project_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      task_name: string | null
      content: string | null
      plan_start_date: Date | null
      plan_end_date: Date | null
      real_start_date: Date | null
      real_end_date: Date | null
      planned_duration: string | null
      real_duration: string | null
      percent_done: string | null
      cost: Prisma.Decimal | null
      task_type: string | null
      created_at: Date | null
      created_by: string | null
      task_category: string | null
    }, ExtArgs["result"]["tr_project_task"]>
    composites: {}
  }

  type tr_project_taskGetPayload<S extends boolean | null | undefined | tr_project_taskDefaultArgs> = $Result.GetResult<Prisma.$tr_project_taskPayload, S>

  type tr_project_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_taskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_taskCountAggregateInputType | true
    }

  export interface tr_project_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_task'], meta: { name: 'tr_project_task' } }
    /**
     * Find zero or one Tr_project_task that matches the filter.
     * @param {tr_project_taskFindUniqueArgs} args - Arguments to find a Tr_project_task
     * @example
     * // Get one Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_taskFindUniqueArgs>(args: SelectSubset<T, tr_project_taskFindUniqueArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_taskFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_task
     * @example
     * // Get one Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_taskFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskFindFirstArgs} args - Arguments to find a Tr_project_task
     * @example
     * // Get one Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_taskFindFirstArgs>(args?: SelectSubset<T, tr_project_taskFindFirstArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskFindFirstOrThrowArgs} args - Arguments to find a Tr_project_task
     * @example
     * // Get one Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_taskFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_tasks
     * const tr_project_tasks = await prisma.tr_project_task.findMany()
     * 
     * // Get first 10 Tr_project_tasks
     * const tr_project_tasks = await prisma.tr_project_task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_taskWithIdOnly = await prisma.tr_project_task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_taskFindManyArgs>(args?: SelectSubset<T, tr_project_taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_task.
     * @param {tr_project_taskCreateArgs} args - Arguments to create a Tr_project_task.
     * @example
     * // Create one Tr_project_task
     * const Tr_project_task = await prisma.tr_project_task.create({
     *   data: {
     *     // ... data to create a Tr_project_task
     *   }
     * })
     * 
     */
    create<T extends tr_project_taskCreateArgs>(args: SelectSubset<T, tr_project_taskCreateArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_tasks.
     * @param {tr_project_taskCreateManyArgs} args - Arguments to create many Tr_project_tasks.
     * @example
     * // Create many Tr_project_tasks
     * const tr_project_task = await prisma.tr_project_task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_taskCreateManyArgs>(args?: SelectSubset<T, tr_project_taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_task.
     * @param {tr_project_taskDeleteArgs} args - Arguments to delete one Tr_project_task.
     * @example
     * // Delete one Tr_project_task
     * const Tr_project_task = await prisma.tr_project_task.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_task
     *   }
     * })
     * 
     */
    delete<T extends tr_project_taskDeleteArgs>(args: SelectSubset<T, tr_project_taskDeleteArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_task.
     * @param {tr_project_taskUpdateArgs} args - Arguments to update one Tr_project_task.
     * @example
     * // Update one Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_taskUpdateArgs>(args: SelectSubset<T, tr_project_taskUpdateArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_tasks.
     * @param {tr_project_taskDeleteManyArgs} args - Arguments to filter Tr_project_tasks to delete.
     * @example
     * // Delete a few Tr_project_tasks
     * const { count } = await prisma.tr_project_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_taskDeleteManyArgs>(args?: SelectSubset<T, tr_project_taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_tasks
     * const tr_project_task = await prisma.tr_project_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_taskUpdateManyArgs>(args: SelectSubset<T, tr_project_taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_task.
     * @param {tr_project_taskUpsertArgs} args - Arguments to update or create a Tr_project_task.
     * @example
     * // Update or create a Tr_project_task
     * const tr_project_task = await prisma.tr_project_task.upsert({
     *   create: {
     *     // ... data to create a Tr_project_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_task we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_taskUpsertArgs>(args: SelectSubset<T, tr_project_taskUpsertArgs<ExtArgs>>): Prisma__tr_project_taskClient<$Result.GetResult<Prisma.$tr_project_taskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskCountArgs} args - Arguments to filter Tr_project_tasks to count.
     * @example
     * // Count the number of Tr_project_tasks
     * const count = await prisma.tr_project_task.count({
     *   where: {
     *     // ... the filter for the Tr_project_tasks we want to count
     *   }
     * })
    **/
    count<T extends tr_project_taskCountArgs>(
      args?: Subset<T, tr_project_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_taskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_taskAggregateArgs>(args: Subset<T, Tr_project_taskAggregateArgs>): Prisma.PrismaPromise<GetTr_project_taskAggregateType<T>>

    /**
     * Group by Tr_project_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_taskGroupByArgs} args - Group by arguments.
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
      T extends tr_project_taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_taskGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_taskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_task model
   */
  readonly fields: tr_project_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_task model
   */ 
  interface tr_project_taskFieldRefs {
    readonly id: FieldRef<"tr_project_task", 'Int'>
    readonly project_id: FieldRef<"tr_project_task", 'Int'>
    readonly task_name: FieldRef<"tr_project_task", 'String'>
    readonly content: FieldRef<"tr_project_task", 'String'>
    readonly plan_start_date: FieldRef<"tr_project_task", 'DateTime'>
    readonly plan_end_date: FieldRef<"tr_project_task", 'DateTime'>
    readonly real_start_date: FieldRef<"tr_project_task", 'DateTime'>
    readonly real_end_date: FieldRef<"tr_project_task", 'DateTime'>
    readonly planned_duration: FieldRef<"tr_project_task", 'String'>
    readonly real_duration: FieldRef<"tr_project_task", 'String'>
    readonly percent_done: FieldRef<"tr_project_task", 'String'>
    readonly cost: FieldRef<"tr_project_task", 'Decimal'>
    readonly task_type: FieldRef<"tr_project_task", 'String'>
    readonly created_at: FieldRef<"tr_project_task", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_task", 'String'>
    readonly task_category: FieldRef<"tr_project_task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_task findUnique
   */
  export type tr_project_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_task to fetch.
     */
    where: tr_project_taskWhereUniqueInput
  }

  /**
   * tr_project_task findUniqueOrThrow
   */
  export type tr_project_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_task to fetch.
     */
    where: tr_project_taskWhereUniqueInput
  }

  /**
   * tr_project_task findFirst
   */
  export type tr_project_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_task to fetch.
     */
    where?: tr_project_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_tasks to fetch.
     */
    orderBy?: tr_project_taskOrderByWithRelationInput | tr_project_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_tasks.
     */
    cursor?: tr_project_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_tasks.
     */
    distinct?: Tr_project_taskScalarFieldEnum | Tr_project_taskScalarFieldEnum[]
  }

  /**
   * tr_project_task findFirstOrThrow
   */
  export type tr_project_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_task to fetch.
     */
    where?: tr_project_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_tasks to fetch.
     */
    orderBy?: tr_project_taskOrderByWithRelationInput | tr_project_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_tasks.
     */
    cursor?: tr_project_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_tasks.
     */
    distinct?: Tr_project_taskScalarFieldEnum | Tr_project_taskScalarFieldEnum[]
  }

  /**
   * tr_project_task findMany
   */
  export type tr_project_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_tasks to fetch.
     */
    where?: tr_project_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_tasks to fetch.
     */
    orderBy?: tr_project_taskOrderByWithRelationInput | tr_project_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_tasks.
     */
    cursor?: tr_project_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_tasks.
     */
    skip?: number
    distinct?: Tr_project_taskScalarFieldEnum | Tr_project_taskScalarFieldEnum[]
  }

  /**
   * tr_project_task create
   */
  export type tr_project_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_task.
     */
    data?: XOR<tr_project_taskCreateInput, tr_project_taskUncheckedCreateInput>
  }

  /**
   * tr_project_task createMany
   */
  export type tr_project_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_tasks.
     */
    data: tr_project_taskCreateManyInput | tr_project_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_task update
   */
  export type tr_project_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_task.
     */
    data: XOR<tr_project_taskUpdateInput, tr_project_taskUncheckedUpdateInput>
    /**
     * Choose, which tr_project_task to update.
     */
    where: tr_project_taskWhereUniqueInput
  }

  /**
   * tr_project_task updateMany
   */
  export type tr_project_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_tasks.
     */
    data: XOR<tr_project_taskUpdateManyMutationInput, tr_project_taskUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_tasks to update
     */
    where?: tr_project_taskWhereInput
  }

  /**
   * tr_project_task upsert
   */
  export type tr_project_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_task to update in case it exists.
     */
    where: tr_project_taskWhereUniqueInput
    /**
     * In case the tr_project_task found by the `where` argument doesn't exist, create a new tr_project_task with this data.
     */
    create: XOR<tr_project_taskCreateInput, tr_project_taskUncheckedCreateInput>
    /**
     * In case the tr_project_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_taskUpdateInput, tr_project_taskUncheckedUpdateInput>
  }

  /**
   * tr_project_task delete
   */
  export type tr_project_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
    /**
     * Filter which tr_project_task to delete.
     */
    where: tr_project_taskWhereUniqueInput
  }

  /**
   * tr_project_task deleteMany
   */
  export type tr_project_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_tasks to delete
     */
    where?: tr_project_taskWhereInput
  }

  /**
   * tr_project_task without action
   */
  export type tr_project_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_task
     */
    select?: tr_project_taskSelect<ExtArgs> | null
  }


  /**
   * Model tr_project_team
   */

  export type AggregateTr_project_team = {
    _count: Tr_project_teamCountAggregateOutputType | null
    _avg: Tr_project_teamAvgAggregateOutputType | null
    _sum: Tr_project_teamSumAggregateOutputType | null
    _min: Tr_project_teamMinAggregateOutputType | null
    _max: Tr_project_teamMaxAggregateOutputType | null
  }

  export type Tr_project_teamAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_teamSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Tr_project_teamMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    employee_code: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_teamMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    employee_code: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_project_teamCountAggregateOutputType = {
    id: number
    project_id: number
    employee_code: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_project_teamAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_teamSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Tr_project_teamMinAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_teamMaxAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_project_teamCountAggregateInputType = {
    id?: true
    project_id?: true
    employee_code?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_project_teamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_team to aggregate.
     */
    where?: tr_project_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_teams to fetch.
     */
    orderBy?: tr_project_teamOrderByWithRelationInput | tr_project_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_project_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_project_teams
    **/
    _count?: true | Tr_project_teamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_project_teamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_project_teamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_project_teamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_project_teamMaxAggregateInputType
  }

  export type GetTr_project_teamAggregateType<T extends Tr_project_teamAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_project_team]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_project_team[P]>
      : GetScalarType<T[P], AggregateTr_project_team[P]>
  }




  export type tr_project_teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_project_teamWhereInput
    orderBy?: tr_project_teamOrderByWithAggregationInput | tr_project_teamOrderByWithAggregationInput[]
    by: Tr_project_teamScalarFieldEnum[] | Tr_project_teamScalarFieldEnum
    having?: tr_project_teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_project_teamCountAggregateInputType | true
    _avg?: Tr_project_teamAvgAggregateInputType
    _sum?: Tr_project_teamSumAggregateInputType
    _min?: Tr_project_teamMinAggregateInputType
    _max?: Tr_project_teamMaxAggregateInputType
  }

  export type Tr_project_teamGroupByOutputType = {
    id: number
    project_id: number | null
    employee_code: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_project_teamCountAggregateOutputType | null
    _avg: Tr_project_teamAvgAggregateOutputType | null
    _sum: Tr_project_teamSumAggregateOutputType | null
    _min: Tr_project_teamMinAggregateOutputType | null
    _max: Tr_project_teamMaxAggregateOutputType | null
  }

  type GetTr_project_teamGroupByPayload<T extends tr_project_teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_project_teamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_project_teamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_project_teamGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_project_teamGroupByOutputType[P]>
        }
      >
    >


  export type tr_project_teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    employee_code?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_project_team"]>


  export type tr_project_teamSelectScalar = {
    id?: boolean
    project_id?: boolean
    employee_code?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_project_teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_project_team"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number | null
      employee_code: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_project_team"]>
    composites: {}
  }

  type tr_project_teamGetPayload<S extends boolean | null | undefined | tr_project_teamDefaultArgs> = $Result.GetResult<Prisma.$tr_project_teamPayload, S>

  type tr_project_teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_project_teamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_project_teamCountAggregateInputType | true
    }

  export interface tr_project_teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_project_team'], meta: { name: 'tr_project_team' } }
    /**
     * Find zero or one Tr_project_team that matches the filter.
     * @param {tr_project_teamFindUniqueArgs} args - Arguments to find a Tr_project_team
     * @example
     * // Get one Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_project_teamFindUniqueArgs>(args: SelectSubset<T, tr_project_teamFindUniqueArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_project_team that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_project_teamFindUniqueOrThrowArgs} args - Arguments to find a Tr_project_team
     * @example
     * // Get one Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_project_teamFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_project_teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_project_team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamFindFirstArgs} args - Arguments to find a Tr_project_team
     * @example
     * // Get one Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_project_teamFindFirstArgs>(args?: SelectSubset<T, tr_project_teamFindFirstArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_project_team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamFindFirstOrThrowArgs} args - Arguments to find a Tr_project_team
     * @example
     * // Get one Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_project_teamFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_project_teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_project_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_project_teams
     * const tr_project_teams = await prisma.tr_project_team.findMany()
     * 
     * // Get first 10 Tr_project_teams
     * const tr_project_teams = await prisma.tr_project_team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_project_teamWithIdOnly = await prisma.tr_project_team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_project_teamFindManyArgs>(args?: SelectSubset<T, tr_project_teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_project_team.
     * @param {tr_project_teamCreateArgs} args - Arguments to create a Tr_project_team.
     * @example
     * // Create one Tr_project_team
     * const Tr_project_team = await prisma.tr_project_team.create({
     *   data: {
     *     // ... data to create a Tr_project_team
     *   }
     * })
     * 
     */
    create<T extends tr_project_teamCreateArgs>(args: SelectSubset<T, tr_project_teamCreateArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_project_teams.
     * @param {tr_project_teamCreateManyArgs} args - Arguments to create many Tr_project_teams.
     * @example
     * // Create many Tr_project_teams
     * const tr_project_team = await prisma.tr_project_team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_project_teamCreateManyArgs>(args?: SelectSubset<T, tr_project_teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_project_team.
     * @param {tr_project_teamDeleteArgs} args - Arguments to delete one Tr_project_team.
     * @example
     * // Delete one Tr_project_team
     * const Tr_project_team = await prisma.tr_project_team.delete({
     *   where: {
     *     // ... filter to delete one Tr_project_team
     *   }
     * })
     * 
     */
    delete<T extends tr_project_teamDeleteArgs>(args: SelectSubset<T, tr_project_teamDeleteArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_project_team.
     * @param {tr_project_teamUpdateArgs} args - Arguments to update one Tr_project_team.
     * @example
     * // Update one Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_project_teamUpdateArgs>(args: SelectSubset<T, tr_project_teamUpdateArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_project_teams.
     * @param {tr_project_teamDeleteManyArgs} args - Arguments to filter Tr_project_teams to delete.
     * @example
     * // Delete a few Tr_project_teams
     * const { count } = await prisma.tr_project_team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_project_teamDeleteManyArgs>(args?: SelectSubset<T, tr_project_teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_project_teams
     * const tr_project_team = await prisma.tr_project_team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_project_teamUpdateManyArgs>(args: SelectSubset<T, tr_project_teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_project_team.
     * @param {tr_project_teamUpsertArgs} args - Arguments to update or create a Tr_project_team.
     * @example
     * // Update or create a Tr_project_team
     * const tr_project_team = await prisma.tr_project_team.upsert({
     *   create: {
     *     // ... data to create a Tr_project_team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_project_team we want to update
     *   }
     * })
     */
    upsert<T extends tr_project_teamUpsertArgs>(args: SelectSubset<T, tr_project_teamUpsertArgs<ExtArgs>>): Prisma__tr_project_teamClient<$Result.GetResult<Prisma.$tr_project_teamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_project_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamCountArgs} args - Arguments to filter Tr_project_teams to count.
     * @example
     * // Count the number of Tr_project_teams
     * const count = await prisma.tr_project_team.count({
     *   where: {
     *     // ... the filter for the Tr_project_teams we want to count
     *   }
     * })
    **/
    count<T extends tr_project_teamCountArgs>(
      args?: Subset<T, tr_project_teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_project_teamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_project_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_project_teamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_project_teamAggregateArgs>(args: Subset<T, Tr_project_teamAggregateArgs>): Prisma.PrismaPromise<GetTr_project_teamAggregateType<T>>

    /**
     * Group by Tr_project_team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_project_teamGroupByArgs} args - Group by arguments.
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
      T extends tr_project_teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_project_teamGroupByArgs['orderBy'] }
        : { orderBy?: tr_project_teamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_project_teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_project_teamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_project_team model
   */
  readonly fields: tr_project_teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_project_team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_project_teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_project_team model
   */ 
  interface tr_project_teamFieldRefs {
    readonly id: FieldRef<"tr_project_team", 'Int'>
    readonly project_id: FieldRef<"tr_project_team", 'Int'>
    readonly employee_code: FieldRef<"tr_project_team", 'String'>
    readonly created_at: FieldRef<"tr_project_team", 'DateTime'>
    readonly created_by: FieldRef<"tr_project_team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_project_team findUnique
   */
  export type tr_project_teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_team to fetch.
     */
    where: tr_project_teamWhereUniqueInput
  }

  /**
   * tr_project_team findUniqueOrThrow
   */
  export type tr_project_teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_team to fetch.
     */
    where: tr_project_teamWhereUniqueInput
  }

  /**
   * tr_project_team findFirst
   */
  export type tr_project_teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_team to fetch.
     */
    where?: tr_project_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_teams to fetch.
     */
    orderBy?: tr_project_teamOrderByWithRelationInput | tr_project_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_teams.
     */
    cursor?: tr_project_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_teams.
     */
    distinct?: Tr_project_teamScalarFieldEnum | Tr_project_teamScalarFieldEnum[]
  }

  /**
   * tr_project_team findFirstOrThrow
   */
  export type tr_project_teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_team to fetch.
     */
    where?: tr_project_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_teams to fetch.
     */
    orderBy?: tr_project_teamOrderByWithRelationInput | tr_project_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_project_teams.
     */
    cursor?: tr_project_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_project_teams.
     */
    distinct?: Tr_project_teamScalarFieldEnum | Tr_project_teamScalarFieldEnum[]
  }

  /**
   * tr_project_team findMany
   */
  export type tr_project_teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter, which tr_project_teams to fetch.
     */
    where?: tr_project_teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_project_teams to fetch.
     */
    orderBy?: tr_project_teamOrderByWithRelationInput | tr_project_teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_project_teams.
     */
    cursor?: tr_project_teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_project_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_project_teams.
     */
    skip?: number
    distinct?: Tr_project_teamScalarFieldEnum | Tr_project_teamScalarFieldEnum[]
  }

  /**
   * tr_project_team create
   */
  export type tr_project_teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_project_team.
     */
    data: XOR<tr_project_teamCreateInput, tr_project_teamUncheckedCreateInput>
  }

  /**
   * tr_project_team createMany
   */
  export type tr_project_teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_project_teams.
     */
    data: tr_project_teamCreateManyInput | tr_project_teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_project_team update
   */
  export type tr_project_teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_project_team.
     */
    data: XOR<tr_project_teamUpdateInput, tr_project_teamUncheckedUpdateInput>
    /**
     * Choose, which tr_project_team to update.
     */
    where: tr_project_teamWhereUniqueInput
  }

  /**
   * tr_project_team updateMany
   */
  export type tr_project_teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_project_teams.
     */
    data: XOR<tr_project_teamUpdateManyMutationInput, tr_project_teamUncheckedUpdateManyInput>
    /**
     * Filter which tr_project_teams to update
     */
    where?: tr_project_teamWhereInput
  }

  /**
   * tr_project_team upsert
   */
  export type tr_project_teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_project_team to update in case it exists.
     */
    where: tr_project_teamWhereUniqueInput
    /**
     * In case the tr_project_team found by the `where` argument doesn't exist, create a new tr_project_team with this data.
     */
    create: XOR<tr_project_teamCreateInput, tr_project_teamUncheckedCreateInput>
    /**
     * In case the tr_project_team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_project_teamUpdateInput, tr_project_teamUncheckedUpdateInput>
  }

  /**
   * tr_project_team delete
   */
  export type tr_project_teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
    /**
     * Filter which tr_project_team to delete.
     */
    where: tr_project_teamWhereUniqueInput
  }

  /**
   * tr_project_team deleteMany
   */
  export type tr_project_teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_project_teams to delete
     */
    where?: tr_project_teamWhereInput
  }

  /**
   * tr_project_team without action
   */
  export type tr_project_teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_project_team
     */
    select?: tr_project_teamSelect<ExtArgs> | null
  }


  /**
   * Model tr_request
   */

  export type AggregateTr_request = {
    _count: Tr_requestCountAggregateOutputType | null
    _avg: Tr_requestAvgAggregateOutputType | null
    _sum: Tr_requestSumAggregateOutputType | null
    _min: Tr_requestMinAggregateOutputType | null
    _max: Tr_requestMaxAggregateOutputType | null
  }

  export type Tr_requestAvgAggregateOutputType = {
    id: number | null
    entities_id: number | null
  }

  export type Tr_requestSumAggregateOutputType = {
    id: number | null
    entities_id: number | null
  }

  export type Tr_requestMinAggregateOutputType = {
    id: number | null
    entities_id: number | null
    ticket_name: string | null
    creation_date: Date | null
    closed_date: Date | null
    creator: string | null
    status: string | null
    urgency: string | null
    expected_completion_date: Date | null
    category: string | null
    type: string | null
    description: string | null
    department_code: string | null
    is_project: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_requestMaxAggregateOutputType = {
    id: number | null
    entities_id: number | null
    ticket_name: string | null
    creation_date: Date | null
    closed_date: Date | null
    creator: string | null
    status: string | null
    urgency: string | null
    expected_completion_date: Date | null
    category: string | null
    type: string | null
    description: string | null
    department_code: string | null
    is_project: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type Tr_requestCountAggregateOutputType = {
    id: number
    entities_id: number
    ticket_name: number
    creation_date: number
    closed_date: number
    creator: number
    status: number
    urgency: number
    expected_completion_date: number
    category: number
    type: number
    description: number
    department_code: number
    is_project: number
    created_at: number
    created_by: number
    _all: number
  }


  export type Tr_requestAvgAggregateInputType = {
    id?: true
    entities_id?: true
  }

  export type Tr_requestSumAggregateInputType = {
    id?: true
    entities_id?: true
  }

  export type Tr_requestMinAggregateInputType = {
    id?: true
    entities_id?: true
    ticket_name?: true
    creation_date?: true
    closed_date?: true
    creator?: true
    status?: true
    urgency?: true
    expected_completion_date?: true
    category?: true
    type?: true
    description?: true
    department_code?: true
    is_project?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_requestMaxAggregateInputType = {
    id?: true
    entities_id?: true
    ticket_name?: true
    creation_date?: true
    closed_date?: true
    creator?: true
    status?: true
    urgency?: true
    expected_completion_date?: true
    category?: true
    type?: true
    description?: true
    department_code?: true
    is_project?: true
    created_at?: true
    created_by?: true
  }

  export type Tr_requestCountAggregateInputType = {
    id?: true
    entities_id?: true
    ticket_name?: true
    creation_date?: true
    closed_date?: true
    creator?: true
    status?: true
    urgency?: true
    expected_completion_date?: true
    category?: true
    type?: true
    description?: true
    department_code?: true
    is_project?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type Tr_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_request to aggregate.
     */
    where?: tr_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_requests to fetch.
     */
    orderBy?: tr_requestOrderByWithRelationInput | tr_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_requests
    **/
    _count?: true | Tr_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_requestMaxAggregateInputType
  }

  export type GetTr_requestAggregateType<T extends Tr_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_request[P]>
      : GetScalarType<T[P], AggregateTr_request[P]>
  }




  export type tr_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_requestWhereInput
    orderBy?: tr_requestOrderByWithAggregationInput | tr_requestOrderByWithAggregationInput[]
    by: Tr_requestScalarFieldEnum[] | Tr_requestScalarFieldEnum
    having?: tr_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_requestCountAggregateInputType | true
    _avg?: Tr_requestAvgAggregateInputType
    _sum?: Tr_requestSumAggregateInputType
    _min?: Tr_requestMinAggregateInputType
    _max?: Tr_requestMaxAggregateInputType
  }

  export type Tr_requestGroupByOutputType = {
    id: number
    entities_id: number | null
    ticket_name: string | null
    creation_date: Date | null
    closed_date: Date | null
    creator: string | null
    status: string | null
    urgency: string | null
    expected_completion_date: Date | null
    category: string | null
    type: string | null
    description: string | null
    department_code: string | null
    is_project: string | null
    created_at: Date | null
    created_by: string | null
    _count: Tr_requestCountAggregateOutputType | null
    _avg: Tr_requestAvgAggregateOutputType | null
    _sum: Tr_requestSumAggregateOutputType | null
    _min: Tr_requestMinAggregateOutputType | null
    _max: Tr_requestMaxAggregateOutputType | null
  }

  type GetTr_requestGroupByPayload<T extends tr_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_requestGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_requestGroupByOutputType[P]>
        }
      >
    >


  export type tr_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entities_id?: boolean
    ticket_name?: boolean
    creation_date?: boolean
    closed_date?: boolean
    creator?: boolean
    status?: boolean
    urgency?: boolean
    expected_completion_date?: boolean
    category?: boolean
    type?: boolean
    description?: boolean
    department_code?: boolean
    is_project?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["tr_request"]>


  export type tr_requestSelectScalar = {
    id?: boolean
    entities_id?: boolean
    ticket_name?: boolean
    creation_date?: boolean
    closed_date?: boolean
    creator?: boolean
    status?: boolean
    urgency?: boolean
    expected_completion_date?: boolean
    category?: boolean
    type?: boolean
    description?: boolean
    department_code?: boolean
    is_project?: boolean
    created_at?: boolean
    created_by?: boolean
  }


  export type $tr_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_request"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entities_id: number | null
      ticket_name: string | null
      creation_date: Date | null
      closed_date: Date | null
      creator: string | null
      status: string | null
      urgency: string | null
      expected_completion_date: Date | null
      category: string | null
      type: string | null
      description: string | null
      department_code: string | null
      is_project: string | null
      created_at: Date | null
      created_by: string | null
    }, ExtArgs["result"]["tr_request"]>
    composites: {}
  }

  type tr_requestGetPayload<S extends boolean | null | undefined | tr_requestDefaultArgs> = $Result.GetResult<Prisma.$tr_requestPayload, S>

  type tr_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_requestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_requestCountAggregateInputType | true
    }

  export interface tr_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_request'], meta: { name: 'tr_request' } }
    /**
     * Find zero or one Tr_request that matches the filter.
     * @param {tr_requestFindUniqueArgs} args - Arguments to find a Tr_request
     * @example
     * // Get one Tr_request
     * const tr_request = await prisma.tr_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_requestFindUniqueArgs>(args: SelectSubset<T, tr_requestFindUniqueArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_request that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_requestFindUniqueOrThrowArgs} args - Arguments to find a Tr_request
     * @example
     * // Get one Tr_request
     * const tr_request = await prisma.tr_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestFindFirstArgs} args - Arguments to find a Tr_request
     * @example
     * // Get one Tr_request
     * const tr_request = await prisma.tr_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_requestFindFirstArgs>(args?: SelectSubset<T, tr_requestFindFirstArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestFindFirstOrThrowArgs} args - Arguments to find a Tr_request
     * @example
     * // Get one Tr_request
     * const tr_request = await prisma.tr_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_requests
     * const tr_requests = await prisma.tr_request.findMany()
     * 
     * // Get first 10 Tr_requests
     * const tr_requests = await prisma.tr_request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_requestWithIdOnly = await prisma.tr_request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_requestFindManyArgs>(args?: SelectSubset<T, tr_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_request.
     * @param {tr_requestCreateArgs} args - Arguments to create a Tr_request.
     * @example
     * // Create one Tr_request
     * const Tr_request = await prisma.tr_request.create({
     *   data: {
     *     // ... data to create a Tr_request
     *   }
     * })
     * 
     */
    create<T extends tr_requestCreateArgs>(args: SelectSubset<T, tr_requestCreateArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_requests.
     * @param {tr_requestCreateManyArgs} args - Arguments to create many Tr_requests.
     * @example
     * // Create many Tr_requests
     * const tr_request = await prisma.tr_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_requestCreateManyArgs>(args?: SelectSubset<T, tr_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_request.
     * @param {tr_requestDeleteArgs} args - Arguments to delete one Tr_request.
     * @example
     * // Delete one Tr_request
     * const Tr_request = await prisma.tr_request.delete({
     *   where: {
     *     // ... filter to delete one Tr_request
     *   }
     * })
     * 
     */
    delete<T extends tr_requestDeleteArgs>(args: SelectSubset<T, tr_requestDeleteArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_request.
     * @param {tr_requestUpdateArgs} args - Arguments to update one Tr_request.
     * @example
     * // Update one Tr_request
     * const tr_request = await prisma.tr_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_requestUpdateArgs>(args: SelectSubset<T, tr_requestUpdateArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_requests.
     * @param {tr_requestDeleteManyArgs} args - Arguments to filter Tr_requests to delete.
     * @example
     * // Delete a few Tr_requests
     * const { count } = await prisma.tr_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_requestDeleteManyArgs>(args?: SelectSubset<T, tr_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_requests
     * const tr_request = await prisma.tr_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_requestUpdateManyArgs>(args: SelectSubset<T, tr_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_request.
     * @param {tr_requestUpsertArgs} args - Arguments to update or create a Tr_request.
     * @example
     * // Update or create a Tr_request
     * const tr_request = await prisma.tr_request.upsert({
     *   create: {
     *     // ... data to create a Tr_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_request we want to update
     *   }
     * })
     */
    upsert<T extends tr_requestUpsertArgs>(args: SelectSubset<T, tr_requestUpsertArgs<ExtArgs>>): Prisma__tr_requestClient<$Result.GetResult<Prisma.$tr_requestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestCountArgs} args - Arguments to filter Tr_requests to count.
     * @example
     * // Count the number of Tr_requests
     * const count = await prisma.tr_request.count({
     *   where: {
     *     // ... the filter for the Tr_requests we want to count
     *   }
     * })
    **/
    count<T extends tr_requestCountArgs>(
      args?: Subset<T, tr_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_requestAggregateArgs>(args: Subset<T, Tr_requestAggregateArgs>): Prisma.PrismaPromise<GetTr_requestAggregateType<T>>

    /**
     * Group by Tr_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_requestGroupByArgs} args - Group by arguments.
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
      T extends tr_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_requestGroupByArgs['orderBy'] }
        : { orderBy?: tr_requestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_request model
   */
  readonly fields: tr_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_request model
   */ 
  interface tr_requestFieldRefs {
    readonly id: FieldRef<"tr_request", 'Int'>
    readonly entities_id: FieldRef<"tr_request", 'Int'>
    readonly ticket_name: FieldRef<"tr_request", 'String'>
    readonly creation_date: FieldRef<"tr_request", 'DateTime'>
    readonly closed_date: FieldRef<"tr_request", 'DateTime'>
    readonly creator: FieldRef<"tr_request", 'String'>
    readonly status: FieldRef<"tr_request", 'String'>
    readonly urgency: FieldRef<"tr_request", 'String'>
    readonly expected_completion_date: FieldRef<"tr_request", 'DateTime'>
    readonly category: FieldRef<"tr_request", 'String'>
    readonly type: FieldRef<"tr_request", 'String'>
    readonly description: FieldRef<"tr_request", 'String'>
    readonly department_code: FieldRef<"tr_request", 'String'>
    readonly is_project: FieldRef<"tr_request", 'String'>
    readonly created_at: FieldRef<"tr_request", 'DateTime'>
    readonly created_by: FieldRef<"tr_request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_request findUnique
   */
  export type tr_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter, which tr_request to fetch.
     */
    where: tr_requestWhereUniqueInput
  }

  /**
   * tr_request findUniqueOrThrow
   */
  export type tr_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter, which tr_request to fetch.
     */
    where: tr_requestWhereUniqueInput
  }

  /**
   * tr_request findFirst
   */
  export type tr_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter, which tr_request to fetch.
     */
    where?: tr_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_requests to fetch.
     */
    orderBy?: tr_requestOrderByWithRelationInput | tr_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_requests.
     */
    cursor?: tr_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_requests.
     */
    distinct?: Tr_requestScalarFieldEnum | Tr_requestScalarFieldEnum[]
  }

  /**
   * tr_request findFirstOrThrow
   */
  export type tr_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter, which tr_request to fetch.
     */
    where?: tr_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_requests to fetch.
     */
    orderBy?: tr_requestOrderByWithRelationInput | tr_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_requests.
     */
    cursor?: tr_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_requests.
     */
    distinct?: Tr_requestScalarFieldEnum | Tr_requestScalarFieldEnum[]
  }

  /**
   * tr_request findMany
   */
  export type tr_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter, which tr_requests to fetch.
     */
    where?: tr_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_requests to fetch.
     */
    orderBy?: tr_requestOrderByWithRelationInput | tr_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_requests.
     */
    cursor?: tr_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_requests.
     */
    skip?: number
    distinct?: Tr_requestScalarFieldEnum | Tr_requestScalarFieldEnum[]
  }

  /**
   * tr_request create
   */
  export type tr_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_request.
     */
    data?: XOR<tr_requestCreateInput, tr_requestUncheckedCreateInput>
  }

  /**
   * tr_request createMany
   */
  export type tr_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_requests.
     */
    data: tr_requestCreateManyInput | tr_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_request update
   */
  export type tr_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_request.
     */
    data: XOR<tr_requestUpdateInput, tr_requestUncheckedUpdateInput>
    /**
     * Choose, which tr_request to update.
     */
    where: tr_requestWhereUniqueInput
  }

  /**
   * tr_request updateMany
   */
  export type tr_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_requests.
     */
    data: XOR<tr_requestUpdateManyMutationInput, tr_requestUncheckedUpdateManyInput>
    /**
     * Filter which tr_requests to update
     */
    where?: tr_requestWhereInput
  }

  /**
   * tr_request upsert
   */
  export type tr_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_request to update in case it exists.
     */
    where: tr_requestWhereUniqueInput
    /**
     * In case the tr_request found by the `where` argument doesn't exist, create a new tr_request with this data.
     */
    create: XOR<tr_requestCreateInput, tr_requestUncheckedCreateInput>
    /**
     * In case the tr_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_requestUpdateInput, tr_requestUncheckedUpdateInput>
  }

  /**
   * tr_request delete
   */
  export type tr_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
    /**
     * Filter which tr_request to delete.
     */
    where: tr_requestWhereUniqueInput
  }

  /**
   * tr_request deleteMany
   */
  export type tr_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_requests to delete
     */
    where?: tr_requestWhereInput
  }

  /**
   * tr_request without action
   */
  export type tr_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request
     */
    select?: tr_requestSelect<ExtArgs> | null
  }


  /**
   * Model tr_request_validation
   */

  export type AggregateTr_request_validation = {
    _count: Tr_request_validationCountAggregateOutputType | null
    _avg: Tr_request_validationAvgAggregateOutputType | null
    _sum: Tr_request_validationSumAggregateOutputType | null
    _min: Tr_request_validationMinAggregateOutputType | null
    _max: Tr_request_validationMaxAggregateOutputType | null
  }

  export type Tr_request_validationAvgAggregateOutputType = {
    id: number | null
    request_id: number | null
  }

  export type Tr_request_validationSumAggregateOutputType = {
    id: number | null
    request_id: number | null
  }

  export type Tr_request_validationMinAggregateOutputType = {
    id: number | null
    request_id: number | null
    user_id: string | null
    user_id_validate: string | null
    comment_submission: string | null
    comment_validation: string | null
    status: string | null
    submission_date: Date | null
    validation_date: Date | null
  }

  export type Tr_request_validationMaxAggregateOutputType = {
    id: number | null
    request_id: number | null
    user_id: string | null
    user_id_validate: string | null
    comment_submission: string | null
    comment_validation: string | null
    status: string | null
    submission_date: Date | null
    validation_date: Date | null
  }

  export type Tr_request_validationCountAggregateOutputType = {
    id: number
    request_id: number
    user_id: number
    user_id_validate: number
    comment_submission: number
    comment_validation: number
    status: number
    submission_date: number
    validation_date: number
    _all: number
  }


  export type Tr_request_validationAvgAggregateInputType = {
    id?: true
    request_id?: true
  }

  export type Tr_request_validationSumAggregateInputType = {
    id?: true
    request_id?: true
  }

  export type Tr_request_validationMinAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    user_id_validate?: true
    comment_submission?: true
    comment_validation?: true
    status?: true
    submission_date?: true
    validation_date?: true
  }

  export type Tr_request_validationMaxAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    user_id_validate?: true
    comment_submission?: true
    comment_validation?: true
    status?: true
    submission_date?: true
    validation_date?: true
  }

  export type Tr_request_validationCountAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    user_id_validate?: true
    comment_submission?: true
    comment_validation?: true
    status?: true
    submission_date?: true
    validation_date?: true
    _all?: true
  }

  export type Tr_request_validationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_request_validation to aggregate.
     */
    where?: tr_request_validationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_request_validations to fetch.
     */
    orderBy?: tr_request_validationOrderByWithRelationInput | tr_request_validationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_request_validationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_request_validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_request_validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_request_validations
    **/
    _count?: true | Tr_request_validationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_request_validationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_request_validationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_request_validationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_request_validationMaxAggregateInputType
  }

  export type GetTr_request_validationAggregateType<T extends Tr_request_validationAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_request_validation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_request_validation[P]>
      : GetScalarType<T[P], AggregateTr_request_validation[P]>
  }




  export type tr_request_validationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_request_validationWhereInput
    orderBy?: tr_request_validationOrderByWithAggregationInput | tr_request_validationOrderByWithAggregationInput[]
    by: Tr_request_validationScalarFieldEnum[] | Tr_request_validationScalarFieldEnum
    having?: tr_request_validationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_request_validationCountAggregateInputType | true
    _avg?: Tr_request_validationAvgAggregateInputType
    _sum?: Tr_request_validationSumAggregateInputType
    _min?: Tr_request_validationMinAggregateInputType
    _max?: Tr_request_validationMaxAggregateInputType
  }

  export type Tr_request_validationGroupByOutputType = {
    id: number
    request_id: number | null
    user_id: string | null
    user_id_validate: string | null
    comment_submission: string | null
    comment_validation: string | null
    status: string | null
    submission_date: Date | null
    validation_date: Date | null
    _count: Tr_request_validationCountAggregateOutputType | null
    _avg: Tr_request_validationAvgAggregateOutputType | null
    _sum: Tr_request_validationSumAggregateOutputType | null
    _min: Tr_request_validationMinAggregateOutputType | null
    _max: Tr_request_validationMaxAggregateOutputType | null
  }

  type GetTr_request_validationGroupByPayload<T extends tr_request_validationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_request_validationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_request_validationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_request_validationGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_request_validationGroupByOutputType[P]>
        }
      >
    >


  export type tr_request_validationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    user_id_validate?: boolean
    comment_submission?: boolean
    comment_validation?: boolean
    status?: boolean
    submission_date?: boolean
    validation_date?: boolean
  }, ExtArgs["result"]["tr_request_validation"]>


  export type tr_request_validationSelectScalar = {
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    user_id_validate?: boolean
    comment_submission?: boolean
    comment_validation?: boolean
    status?: boolean
    submission_date?: boolean
    validation_date?: boolean
  }


  export type $tr_request_validationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_request_validation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      request_id: number | null
      user_id: string | null
      user_id_validate: string | null
      comment_submission: string | null
      comment_validation: string | null
      status: string | null
      submission_date: Date | null
      validation_date: Date | null
    }, ExtArgs["result"]["tr_request_validation"]>
    composites: {}
  }

  type tr_request_validationGetPayload<S extends boolean | null | undefined | tr_request_validationDefaultArgs> = $Result.GetResult<Prisma.$tr_request_validationPayload, S>

  type tr_request_validationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_request_validationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_request_validationCountAggregateInputType | true
    }

  export interface tr_request_validationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_request_validation'], meta: { name: 'tr_request_validation' } }
    /**
     * Find zero or one Tr_request_validation that matches the filter.
     * @param {tr_request_validationFindUniqueArgs} args - Arguments to find a Tr_request_validation
     * @example
     * // Get one Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_request_validationFindUniqueArgs>(args: SelectSubset<T, tr_request_validationFindUniqueArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_request_validation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_request_validationFindUniqueOrThrowArgs} args - Arguments to find a Tr_request_validation
     * @example
     * // Get one Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_request_validationFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_request_validationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_request_validation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationFindFirstArgs} args - Arguments to find a Tr_request_validation
     * @example
     * // Get one Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_request_validationFindFirstArgs>(args?: SelectSubset<T, tr_request_validationFindFirstArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_request_validation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationFindFirstOrThrowArgs} args - Arguments to find a Tr_request_validation
     * @example
     * // Get one Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_request_validationFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_request_validationFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_request_validations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_request_validations
     * const tr_request_validations = await prisma.tr_request_validation.findMany()
     * 
     * // Get first 10 Tr_request_validations
     * const tr_request_validations = await prisma.tr_request_validation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_request_validationWithIdOnly = await prisma.tr_request_validation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_request_validationFindManyArgs>(args?: SelectSubset<T, tr_request_validationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_request_validation.
     * @param {tr_request_validationCreateArgs} args - Arguments to create a Tr_request_validation.
     * @example
     * // Create one Tr_request_validation
     * const Tr_request_validation = await prisma.tr_request_validation.create({
     *   data: {
     *     // ... data to create a Tr_request_validation
     *   }
     * })
     * 
     */
    create<T extends tr_request_validationCreateArgs>(args: SelectSubset<T, tr_request_validationCreateArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_request_validations.
     * @param {tr_request_validationCreateManyArgs} args - Arguments to create many Tr_request_validations.
     * @example
     * // Create many Tr_request_validations
     * const tr_request_validation = await prisma.tr_request_validation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_request_validationCreateManyArgs>(args?: SelectSubset<T, tr_request_validationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_request_validation.
     * @param {tr_request_validationDeleteArgs} args - Arguments to delete one Tr_request_validation.
     * @example
     * // Delete one Tr_request_validation
     * const Tr_request_validation = await prisma.tr_request_validation.delete({
     *   where: {
     *     // ... filter to delete one Tr_request_validation
     *   }
     * })
     * 
     */
    delete<T extends tr_request_validationDeleteArgs>(args: SelectSubset<T, tr_request_validationDeleteArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_request_validation.
     * @param {tr_request_validationUpdateArgs} args - Arguments to update one Tr_request_validation.
     * @example
     * // Update one Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_request_validationUpdateArgs>(args: SelectSubset<T, tr_request_validationUpdateArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_request_validations.
     * @param {tr_request_validationDeleteManyArgs} args - Arguments to filter Tr_request_validations to delete.
     * @example
     * // Delete a few Tr_request_validations
     * const { count } = await prisma.tr_request_validation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_request_validationDeleteManyArgs>(args?: SelectSubset<T, tr_request_validationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_request_validations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_request_validations
     * const tr_request_validation = await prisma.tr_request_validation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_request_validationUpdateManyArgs>(args: SelectSubset<T, tr_request_validationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_request_validation.
     * @param {tr_request_validationUpsertArgs} args - Arguments to update or create a Tr_request_validation.
     * @example
     * // Update or create a Tr_request_validation
     * const tr_request_validation = await prisma.tr_request_validation.upsert({
     *   create: {
     *     // ... data to create a Tr_request_validation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_request_validation we want to update
     *   }
     * })
     */
    upsert<T extends tr_request_validationUpsertArgs>(args: SelectSubset<T, tr_request_validationUpsertArgs<ExtArgs>>): Prisma__tr_request_validationClient<$Result.GetResult<Prisma.$tr_request_validationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_request_validations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationCountArgs} args - Arguments to filter Tr_request_validations to count.
     * @example
     * // Count the number of Tr_request_validations
     * const count = await prisma.tr_request_validation.count({
     *   where: {
     *     // ... the filter for the Tr_request_validations we want to count
     *   }
     * })
    **/
    count<T extends tr_request_validationCountArgs>(
      args?: Subset<T, tr_request_validationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_request_validationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_request_validation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_request_validationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_request_validationAggregateArgs>(args: Subset<T, Tr_request_validationAggregateArgs>): Prisma.PrismaPromise<GetTr_request_validationAggregateType<T>>

    /**
     * Group by Tr_request_validation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_request_validationGroupByArgs} args - Group by arguments.
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
      T extends tr_request_validationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_request_validationGroupByArgs['orderBy'] }
        : { orderBy?: tr_request_validationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_request_validationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_request_validationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_request_validation model
   */
  readonly fields: tr_request_validationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_request_validation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_request_validationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tr_request_validation model
   */ 
  interface tr_request_validationFieldRefs {
    readonly id: FieldRef<"tr_request_validation", 'Int'>
    readonly request_id: FieldRef<"tr_request_validation", 'Int'>
    readonly user_id: FieldRef<"tr_request_validation", 'String'>
    readonly user_id_validate: FieldRef<"tr_request_validation", 'String'>
    readonly comment_submission: FieldRef<"tr_request_validation", 'String'>
    readonly comment_validation: FieldRef<"tr_request_validation", 'String'>
    readonly status: FieldRef<"tr_request_validation", 'String'>
    readonly submission_date: FieldRef<"tr_request_validation", 'DateTime'>
    readonly validation_date: FieldRef<"tr_request_validation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tr_request_validation findUnique
   */
  export type tr_request_validationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter, which tr_request_validation to fetch.
     */
    where: tr_request_validationWhereUniqueInput
  }

  /**
   * tr_request_validation findUniqueOrThrow
   */
  export type tr_request_validationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter, which tr_request_validation to fetch.
     */
    where: tr_request_validationWhereUniqueInput
  }

  /**
   * tr_request_validation findFirst
   */
  export type tr_request_validationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter, which tr_request_validation to fetch.
     */
    where?: tr_request_validationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_request_validations to fetch.
     */
    orderBy?: tr_request_validationOrderByWithRelationInput | tr_request_validationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_request_validations.
     */
    cursor?: tr_request_validationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_request_validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_request_validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_request_validations.
     */
    distinct?: Tr_request_validationScalarFieldEnum | Tr_request_validationScalarFieldEnum[]
  }

  /**
   * tr_request_validation findFirstOrThrow
   */
  export type tr_request_validationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter, which tr_request_validation to fetch.
     */
    where?: tr_request_validationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_request_validations to fetch.
     */
    orderBy?: tr_request_validationOrderByWithRelationInput | tr_request_validationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_request_validations.
     */
    cursor?: tr_request_validationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_request_validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_request_validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_request_validations.
     */
    distinct?: Tr_request_validationScalarFieldEnum | Tr_request_validationScalarFieldEnum[]
  }

  /**
   * tr_request_validation findMany
   */
  export type tr_request_validationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter, which tr_request_validations to fetch.
     */
    where?: tr_request_validationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_request_validations to fetch.
     */
    orderBy?: tr_request_validationOrderByWithRelationInput | tr_request_validationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_request_validations.
     */
    cursor?: tr_request_validationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_request_validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_request_validations.
     */
    skip?: number
    distinct?: Tr_request_validationScalarFieldEnum | Tr_request_validationScalarFieldEnum[]
  }

  /**
   * tr_request_validation create
   */
  export type tr_request_validationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * The data needed to create a tr_request_validation.
     */
    data?: XOR<tr_request_validationCreateInput, tr_request_validationUncheckedCreateInput>
  }

  /**
   * tr_request_validation createMany
   */
  export type tr_request_validationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_request_validations.
     */
    data: tr_request_validationCreateManyInput | tr_request_validationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_request_validation update
   */
  export type tr_request_validationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * The data needed to update a tr_request_validation.
     */
    data: XOR<tr_request_validationUpdateInput, tr_request_validationUncheckedUpdateInput>
    /**
     * Choose, which tr_request_validation to update.
     */
    where: tr_request_validationWhereUniqueInput
  }

  /**
   * tr_request_validation updateMany
   */
  export type tr_request_validationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_request_validations.
     */
    data: XOR<tr_request_validationUpdateManyMutationInput, tr_request_validationUncheckedUpdateManyInput>
    /**
     * Filter which tr_request_validations to update
     */
    where?: tr_request_validationWhereInput
  }

  /**
   * tr_request_validation upsert
   */
  export type tr_request_validationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * The filter to search for the tr_request_validation to update in case it exists.
     */
    where: tr_request_validationWhereUniqueInput
    /**
     * In case the tr_request_validation found by the `where` argument doesn't exist, create a new tr_request_validation with this data.
     */
    create: XOR<tr_request_validationCreateInput, tr_request_validationUncheckedCreateInput>
    /**
     * In case the tr_request_validation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_request_validationUpdateInput, tr_request_validationUncheckedUpdateInput>
  }

  /**
   * tr_request_validation delete
   */
  export type tr_request_validationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
    /**
     * Filter which tr_request_validation to delete.
     */
    where: tr_request_validationWhereUniqueInput
  }

  /**
   * tr_request_validation deleteMany
   */
  export type tr_request_validationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_request_validations to delete
     */
    where?: tr_request_validationWhereInput
  }

  /**
   * tr_request_validation without action
   */
  export type tr_request_validationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_request_validation
     */
    select?: tr_request_validationSelect<ExtArgs> | null
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


  export const Mst_applicationScalarFieldEnum: {
    id: 'id',
    application_name: 'application_name',
    group_id_technician: 'group_id_technician',
    department_code: 'department_code',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_applicationScalarFieldEnum = (typeof Mst_applicationScalarFieldEnum)[keyof typeof Mst_applicationScalarFieldEnum]


  export const Mst_application_versionScalarFieldEnum: {
    id: 'id',
    application_id: 'application_id',
    version: 'version',
    content: 'content',
    golive_date: 'golive_date'
  };

  export type Mst_application_versionScalarFieldEnum = (typeof Mst_application_versionScalarFieldEnum)[keyof typeof Mst_application_versionScalarFieldEnum]


  export const Mst_authorizationScalarFieldEnum: {
    id: 'id',
    employee_code: 'employee_code',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by',
    technician_level: 'technician_level'
  };

  export type Mst_authorizationScalarFieldEnum = (typeof Mst_authorizationScalarFieldEnum)[keyof typeof Mst_authorizationScalarFieldEnum]


  export const Mst_authorization_profileScalarFieldEnum: {
    id: 'id',
    employee_code: 'employee_code',
    profile_id: 'profile_id',
    entities_id: 'entities_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_authorization_profileScalarFieldEnum = (typeof Mst_authorization_profileScalarFieldEnum)[keyof typeof Mst_authorization_profileScalarFieldEnum]


  export const Mst_authorization_usergroupScalarFieldEnum: {
    id: 'id',
    employee_code: 'employee_code',
    group_id: 'group_id',
    is_manager: 'is_manager',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_authorization_usergroupScalarFieldEnum = (typeof Mst_authorization_usergroupScalarFieldEnum)[keyof typeof Mst_authorization_usergroupScalarFieldEnum]


  export const Mst_entitiesScalarFieldEnum: {
    id: 'id',
    entities_name: 'entities_name',
    parent_id: 'parent_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_entitiesScalarFieldEnum = (typeof Mst_entitiesScalarFieldEnum)[keyof typeof Mst_entitiesScalarFieldEnum]


  export const Mst_groupScalarFieldEnum: {
    id: 'id',
    entities_id: 'entities_id',
    group_name: 'group_name',
    parent_id: 'parent_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_groupScalarFieldEnum = (typeof Mst_groupScalarFieldEnum)[keyof typeof Mst_groupScalarFieldEnum]


  export const Mst_manpower_costScalarFieldEnum: {
    id: 'id',
    technician_level: 'technician_level',
    hourly: 'hourly',
    monthly: 'monthly',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_manpower_costScalarFieldEnum = (typeof Mst_manpower_costScalarFieldEnum)[keyof typeof Mst_manpower_costScalarFieldEnum]


  export const Mst_profileScalarFieldEnum: {
    id: 'id',
    profile_name: 'profile_name',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Mst_profileScalarFieldEnum = (typeof Mst_profileScalarFieldEnum)[keyof typeof Mst_profileScalarFieldEnum]


  export const Tr_documentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    type_id: 'type_id',
    name: 'name',
    filename: 'filename',
    filepath: 'filepath',
    mime: 'mime',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_documentScalarFieldEnum = (typeof Tr_documentScalarFieldEnum)[keyof typeof Tr_documentScalarFieldEnum]


  export const Tr_historyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    type_id: 'type_id',
    action: 'action',
    document_id: 'document_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_historyScalarFieldEnum = (typeof Tr_historyScalarFieldEnum)[keyof typeof Tr_historyScalarFieldEnum]


  export const Tr_projectScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    application_id: 'application_id',
    project_code: 'project_code',
    background: 'background',
    issue_description: 'issue_description',
    business_impact: 'business_impact',
    group_id: 'group_id',
    plan_start_date: 'plan_start_date',
    plant_end_date: 'plant_end_date',
    real_start_date: 'real_start_date',
    real_end_date: 'real_end_date',
    percent_done: 'percent_done',
    auto_percent_done: 'auto_percent_done',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_projectScalarFieldEnum = (typeof Tr_projectScalarFieldEnum)[keyof typeof Tr_projectScalarFieldEnum]


  export const Tr_project_activityScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    activity_name: 'activity_name',
    date: 'date',
    content: 'content',
    document: 'document',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_activityScalarFieldEnum = (typeof Tr_project_activityScalarFieldEnum)[keyof typeof Tr_project_activityScalarFieldEnum]


  export const Tr_project_overviewScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    purpose: 'purpose',
    goals: 'goals',
    success_measurement: 'success_measurement',
    intangible_benefit: 'intangible_benefit',
    impact_of_not_doing: 'impact_of_not_doing',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_overviewScalarFieldEnum = (typeof Tr_project_overviewScalarFieldEnum)[keyof typeof Tr_project_overviewScalarFieldEnum]


  export const Tr_project_participantScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    employee_code: 'employee_code',
    role: 'role',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_participantScalarFieldEnum = (typeof Tr_project_participantScalarFieldEnum)[keyof typeof Tr_project_participantScalarFieldEnum]


  export const Tr_project_risk_mitigationScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    risk: 'risk',
    point_control: 'point_control',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_risk_mitigationScalarFieldEnum = (typeof Tr_project_risk_mitigationScalarFieldEnum)[keyof typeof Tr_project_risk_mitigationScalarFieldEnum]


  export const Tr_project_scopeScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    features: 'features',
    description: 'description',
    type: 'type',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_scopeScalarFieldEnum = (typeof Tr_project_scopeScalarFieldEnum)[keyof typeof Tr_project_scopeScalarFieldEnum]


  export const Tr_project_taskScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    task_name: 'task_name',
    content: 'content',
    plan_start_date: 'plan_start_date',
    plan_end_date: 'plan_end_date',
    real_start_date: 'real_start_date',
    real_end_date: 'real_end_date',
    planned_duration: 'planned_duration',
    real_duration: 'real_duration',
    percent_done: 'percent_done',
    cost: 'cost',
    task_type: 'task_type',
    created_at: 'created_at',
    created_by: 'created_by',
    task_category: 'task_category'
  };

  export type Tr_project_taskScalarFieldEnum = (typeof Tr_project_taskScalarFieldEnum)[keyof typeof Tr_project_taskScalarFieldEnum]


  export const Tr_project_teamScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    employee_code: 'employee_code',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_project_teamScalarFieldEnum = (typeof Tr_project_teamScalarFieldEnum)[keyof typeof Tr_project_teamScalarFieldEnum]


  export const Tr_requestScalarFieldEnum: {
    id: 'id',
    entities_id: 'entities_id',
    ticket_name: 'ticket_name',
    creation_date: 'creation_date',
    closed_date: 'closed_date',
    creator: 'creator',
    status: 'status',
    urgency: 'urgency',
    expected_completion_date: 'expected_completion_date',
    category: 'category',
    type: 'type',
    description: 'description',
    department_code: 'department_code',
    is_project: 'is_project',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type Tr_requestScalarFieldEnum = (typeof Tr_requestScalarFieldEnum)[keyof typeof Tr_requestScalarFieldEnum]


  export const Tr_request_validationScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    user_id: 'user_id',
    user_id_validate: 'user_id_validate',
    comment_submission: 'comment_submission',
    comment_validation: 'comment_validation',
    status: 'status',
    submission_date: 'submission_date',
    validation_date: 'validation_date'
  };

  export type Tr_request_validationScalarFieldEnum = (typeof Tr_request_validationScalarFieldEnum)[keyof typeof Tr_request_validationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type mst_applicationWhereInput = {
    AND?: mst_applicationWhereInput | mst_applicationWhereInput[]
    OR?: mst_applicationWhereInput[]
    NOT?: mst_applicationWhereInput | mst_applicationWhereInput[]
    id?: IntFilter<"mst_application"> | number
    application_name?: StringNullableFilter<"mst_application"> | string | null
    group_id_technician?: StringNullableFilter<"mst_application"> | string | null
    department_code?: StringNullableFilter<"mst_application"> | string | null
    is_deleted?: StringNullableFilter<"mst_application"> | string | null
    created_at?: DateTimeNullableFilter<"mst_application"> | Date | string | null
    created_by?: StringNullableFilter<"mst_application"> | string | null
  }

  export type mst_applicationOrderByWithRelationInput = {
    id?: SortOrder
    application_name?: SortOrderInput | SortOrder
    group_id_technician?: SortOrderInput | SortOrder
    department_code?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_applicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_applicationWhereInput | mst_applicationWhereInput[]
    OR?: mst_applicationWhereInput[]
    NOT?: mst_applicationWhereInput | mst_applicationWhereInput[]
    application_name?: StringNullableFilter<"mst_application"> | string | null
    group_id_technician?: StringNullableFilter<"mst_application"> | string | null
    department_code?: StringNullableFilter<"mst_application"> | string | null
    is_deleted?: StringNullableFilter<"mst_application"> | string | null
    created_at?: DateTimeNullableFilter<"mst_application"> | Date | string | null
    created_by?: StringNullableFilter<"mst_application"> | string | null
  }, "id">

  export type mst_applicationOrderByWithAggregationInput = {
    id?: SortOrder
    application_name?: SortOrderInput | SortOrder
    group_id_technician?: SortOrderInput | SortOrder
    department_code?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_applicationCountOrderByAggregateInput
    _avg?: mst_applicationAvgOrderByAggregateInput
    _max?: mst_applicationMaxOrderByAggregateInput
    _min?: mst_applicationMinOrderByAggregateInput
    _sum?: mst_applicationSumOrderByAggregateInput
  }

  export type mst_applicationScalarWhereWithAggregatesInput = {
    AND?: mst_applicationScalarWhereWithAggregatesInput | mst_applicationScalarWhereWithAggregatesInput[]
    OR?: mst_applicationScalarWhereWithAggregatesInput[]
    NOT?: mst_applicationScalarWhereWithAggregatesInput | mst_applicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_application"> | number
    application_name?: StringNullableWithAggregatesFilter<"mst_application"> | string | null
    group_id_technician?: StringNullableWithAggregatesFilter<"mst_application"> | string | null
    department_code?: StringNullableWithAggregatesFilter<"mst_application"> | string | null
    is_deleted?: StringNullableWithAggregatesFilter<"mst_application"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_application"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_application"> | string | null
  }

  export type mst_application_versionWhereInput = {
    AND?: mst_application_versionWhereInput | mst_application_versionWhereInput[]
    OR?: mst_application_versionWhereInput[]
    NOT?: mst_application_versionWhereInput | mst_application_versionWhereInput[]
    id?: IntFilter<"mst_application_version"> | number
    application_id?: IntNullableFilter<"mst_application_version"> | number | null
    version?: StringNullableFilter<"mst_application_version"> | string | null
    content?: StringNullableFilter<"mst_application_version"> | string | null
    golive_date?: DateTimeNullableFilter<"mst_application_version"> | Date | string | null
  }

  export type mst_application_versionOrderByWithRelationInput = {
    id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    golive_date?: SortOrderInput | SortOrder
  }

  export type mst_application_versionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_application_versionWhereInput | mst_application_versionWhereInput[]
    OR?: mst_application_versionWhereInput[]
    NOT?: mst_application_versionWhereInput | mst_application_versionWhereInput[]
    application_id?: IntNullableFilter<"mst_application_version"> | number | null
    version?: StringNullableFilter<"mst_application_version"> | string | null
    content?: StringNullableFilter<"mst_application_version"> | string | null
    golive_date?: DateTimeNullableFilter<"mst_application_version"> | Date | string | null
  }, "id">

  export type mst_application_versionOrderByWithAggregationInput = {
    id?: SortOrder
    application_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    golive_date?: SortOrderInput | SortOrder
    _count?: mst_application_versionCountOrderByAggregateInput
    _avg?: mst_application_versionAvgOrderByAggregateInput
    _max?: mst_application_versionMaxOrderByAggregateInput
    _min?: mst_application_versionMinOrderByAggregateInput
    _sum?: mst_application_versionSumOrderByAggregateInput
  }

  export type mst_application_versionScalarWhereWithAggregatesInput = {
    AND?: mst_application_versionScalarWhereWithAggregatesInput | mst_application_versionScalarWhereWithAggregatesInput[]
    OR?: mst_application_versionScalarWhereWithAggregatesInput[]
    NOT?: mst_application_versionScalarWhereWithAggregatesInput | mst_application_versionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_application_version"> | number
    application_id?: IntNullableWithAggregatesFilter<"mst_application_version"> | number | null
    version?: StringNullableWithAggregatesFilter<"mst_application_version"> | string | null
    content?: StringNullableWithAggregatesFilter<"mst_application_version"> | string | null
    golive_date?: DateTimeNullableWithAggregatesFilter<"mst_application_version"> | Date | string | null
  }

  export type mst_authorizationWhereInput = {
    AND?: mst_authorizationWhereInput | mst_authorizationWhereInput[]
    OR?: mst_authorizationWhereInput[]
    NOT?: mst_authorizationWhereInput | mst_authorizationWhereInput[]
    id?: IntFilter<"mst_authorization"> | number
    employee_code?: StringNullableFilter<"mst_authorization"> | string | null
    is_active?: StringNullableFilter<"mst_authorization"> | string | null
    created_at?: DateTimeNullableFilter<"mst_authorization"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization"> | string | null
    technician_level?: StringNullableFilter<"mst_authorization"> | string | null
  }

  export type mst_authorizationOrderByWithRelationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    technician_level?: SortOrderInput | SortOrder
  }

  export type mst_authorizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_authorizationWhereInput | mst_authorizationWhereInput[]
    OR?: mst_authorizationWhereInput[]
    NOT?: mst_authorizationWhereInput | mst_authorizationWhereInput[]
    employee_code?: StringNullableFilter<"mst_authorization"> | string | null
    is_active?: StringNullableFilter<"mst_authorization"> | string | null
    created_at?: DateTimeNullableFilter<"mst_authorization"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization"> | string | null
    technician_level?: StringNullableFilter<"mst_authorization"> | string | null
  }, "id">

  export type mst_authorizationOrderByWithAggregationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    technician_level?: SortOrderInput | SortOrder
    _count?: mst_authorizationCountOrderByAggregateInput
    _avg?: mst_authorizationAvgOrderByAggregateInput
    _max?: mst_authorizationMaxOrderByAggregateInput
    _min?: mst_authorizationMinOrderByAggregateInput
    _sum?: mst_authorizationSumOrderByAggregateInput
  }

  export type mst_authorizationScalarWhereWithAggregatesInput = {
    AND?: mst_authorizationScalarWhereWithAggregatesInput | mst_authorizationScalarWhereWithAggregatesInput[]
    OR?: mst_authorizationScalarWhereWithAggregatesInput[]
    NOT?: mst_authorizationScalarWhereWithAggregatesInput | mst_authorizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_authorization"> | number
    employee_code?: StringNullableWithAggregatesFilter<"mst_authorization"> | string | null
    is_active?: StringNullableWithAggregatesFilter<"mst_authorization"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_authorization"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_authorization"> | string | null
    technician_level?: StringNullableWithAggregatesFilter<"mst_authorization"> | string | null
  }

  export type mst_authorization_profileWhereInput = {
    AND?: mst_authorization_profileWhereInput | mst_authorization_profileWhereInput[]
    OR?: mst_authorization_profileWhereInput[]
    NOT?: mst_authorization_profileWhereInput | mst_authorization_profileWhereInput[]
    id?: IntFilter<"mst_authorization_profile"> | number
    employee_code?: StringNullableFilter<"mst_authorization_profile"> | string | null
    profile_id?: IntNullableFilter<"mst_authorization_profile"> | number | null
    entities_id?: IntNullableFilter<"mst_authorization_profile"> | number | null
    created_at?: DateTimeNullableFilter<"mst_authorization_profile"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization_profile"> | string | null
  }

  export type mst_authorization_profileOrderByWithRelationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    entities_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_authorization_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_authorization_profileWhereInput | mst_authorization_profileWhereInput[]
    OR?: mst_authorization_profileWhereInput[]
    NOT?: mst_authorization_profileWhereInput | mst_authorization_profileWhereInput[]
    employee_code?: StringNullableFilter<"mst_authorization_profile"> | string | null
    profile_id?: IntNullableFilter<"mst_authorization_profile"> | number | null
    entities_id?: IntNullableFilter<"mst_authorization_profile"> | number | null
    created_at?: DateTimeNullableFilter<"mst_authorization_profile"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization_profile"> | string | null
  }, "id">

  export type mst_authorization_profileOrderByWithAggregationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    entities_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_authorization_profileCountOrderByAggregateInput
    _avg?: mst_authorization_profileAvgOrderByAggregateInput
    _max?: mst_authorization_profileMaxOrderByAggregateInput
    _min?: mst_authorization_profileMinOrderByAggregateInput
    _sum?: mst_authorization_profileSumOrderByAggregateInput
  }

  export type mst_authorization_profileScalarWhereWithAggregatesInput = {
    AND?: mst_authorization_profileScalarWhereWithAggregatesInput | mst_authorization_profileScalarWhereWithAggregatesInput[]
    OR?: mst_authorization_profileScalarWhereWithAggregatesInput[]
    NOT?: mst_authorization_profileScalarWhereWithAggregatesInput | mst_authorization_profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_authorization_profile"> | number
    employee_code?: StringNullableWithAggregatesFilter<"mst_authorization_profile"> | string | null
    profile_id?: IntNullableWithAggregatesFilter<"mst_authorization_profile"> | number | null
    entities_id?: IntNullableWithAggregatesFilter<"mst_authorization_profile"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_authorization_profile"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_authorization_profile"> | string | null
  }

  export type mst_authorization_usergroupWhereInput = {
    AND?: mst_authorization_usergroupWhereInput | mst_authorization_usergroupWhereInput[]
    OR?: mst_authorization_usergroupWhereInput[]
    NOT?: mst_authorization_usergroupWhereInput | mst_authorization_usergroupWhereInput[]
    id?: IntFilter<"mst_authorization_usergroup"> | number
    employee_code?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
    group_id?: IntNullableFilter<"mst_authorization_usergroup"> | number | null
    is_manager?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
    created_at?: DateTimeNullableFilter<"mst_authorization_usergroup"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
  }

  export type mst_authorization_usergroupOrderByWithRelationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    is_manager?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_authorization_usergroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_authorization_usergroupWhereInput | mst_authorization_usergroupWhereInput[]
    OR?: mst_authorization_usergroupWhereInput[]
    NOT?: mst_authorization_usergroupWhereInput | mst_authorization_usergroupWhereInput[]
    employee_code?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
    group_id?: IntNullableFilter<"mst_authorization_usergroup"> | number | null
    is_manager?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
    created_at?: DateTimeNullableFilter<"mst_authorization_usergroup"> | Date | string | null
    created_by?: StringNullableFilter<"mst_authorization_usergroup"> | string | null
  }, "id">

  export type mst_authorization_usergroupOrderByWithAggregationInput = {
    id?: SortOrder
    employee_code?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    is_manager?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_authorization_usergroupCountOrderByAggregateInput
    _avg?: mst_authorization_usergroupAvgOrderByAggregateInput
    _max?: mst_authorization_usergroupMaxOrderByAggregateInput
    _min?: mst_authorization_usergroupMinOrderByAggregateInput
    _sum?: mst_authorization_usergroupSumOrderByAggregateInput
  }

  export type mst_authorization_usergroupScalarWhereWithAggregatesInput = {
    AND?: mst_authorization_usergroupScalarWhereWithAggregatesInput | mst_authorization_usergroupScalarWhereWithAggregatesInput[]
    OR?: mst_authorization_usergroupScalarWhereWithAggregatesInput[]
    NOT?: mst_authorization_usergroupScalarWhereWithAggregatesInput | mst_authorization_usergroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_authorization_usergroup"> | number
    employee_code?: StringNullableWithAggregatesFilter<"mst_authorization_usergroup"> | string | null
    group_id?: IntNullableWithAggregatesFilter<"mst_authorization_usergroup"> | number | null
    is_manager?: StringNullableWithAggregatesFilter<"mst_authorization_usergroup"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_authorization_usergroup"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_authorization_usergroup"> | string | null
  }

  export type mst_entitiesWhereInput = {
    AND?: mst_entitiesWhereInput | mst_entitiesWhereInput[]
    OR?: mst_entitiesWhereInput[]
    NOT?: mst_entitiesWhereInput | mst_entitiesWhereInput[]
    id?: IntFilter<"mst_entities"> | number
    entities_name?: StringNullableFilter<"mst_entities"> | string | null
    parent_id?: IntNullableFilter<"mst_entities"> | number | null
    created_at?: DateTimeNullableFilter<"mst_entities"> | Date | string | null
    created_by?: StringNullableFilter<"mst_entities"> | string | null
  }

  export type mst_entitiesOrderByWithRelationInput = {
    id?: SortOrder
    entities_name?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_entitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_entitiesWhereInput | mst_entitiesWhereInput[]
    OR?: mst_entitiesWhereInput[]
    NOT?: mst_entitiesWhereInput | mst_entitiesWhereInput[]
    entities_name?: StringNullableFilter<"mst_entities"> | string | null
    parent_id?: IntNullableFilter<"mst_entities"> | number | null
    created_at?: DateTimeNullableFilter<"mst_entities"> | Date | string | null
    created_by?: StringNullableFilter<"mst_entities"> | string | null
  }, "id">

  export type mst_entitiesOrderByWithAggregationInput = {
    id?: SortOrder
    entities_name?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_entitiesCountOrderByAggregateInput
    _avg?: mst_entitiesAvgOrderByAggregateInput
    _max?: mst_entitiesMaxOrderByAggregateInput
    _min?: mst_entitiesMinOrderByAggregateInput
    _sum?: mst_entitiesSumOrderByAggregateInput
  }

  export type mst_entitiesScalarWhereWithAggregatesInput = {
    AND?: mst_entitiesScalarWhereWithAggregatesInput | mst_entitiesScalarWhereWithAggregatesInput[]
    OR?: mst_entitiesScalarWhereWithAggregatesInput[]
    NOT?: mst_entitiesScalarWhereWithAggregatesInput | mst_entitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_entities"> | number
    entities_name?: StringNullableWithAggregatesFilter<"mst_entities"> | string | null
    parent_id?: IntNullableWithAggregatesFilter<"mst_entities"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_entities"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_entities"> | string | null
  }

  export type mst_groupWhereInput = {
    AND?: mst_groupWhereInput | mst_groupWhereInput[]
    OR?: mst_groupWhereInput[]
    NOT?: mst_groupWhereInput | mst_groupWhereInput[]
    id?: IntFilter<"mst_group"> | number
    entities_id?: IntNullableFilter<"mst_group"> | number | null
    group_name?: StringNullableFilter<"mst_group"> | string | null
    parent_id?: IntNullableFilter<"mst_group"> | number | null
    created_at?: DateTimeNullableFilter<"mst_group"> | Date | string | null
    created_by?: StringNullableFilter<"mst_group"> | string | null
  }

  export type mst_groupOrderByWithRelationInput = {
    id?: SortOrder
    entities_id?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_groupWhereInput | mst_groupWhereInput[]
    OR?: mst_groupWhereInput[]
    NOT?: mst_groupWhereInput | mst_groupWhereInput[]
    entities_id?: IntNullableFilter<"mst_group"> | number | null
    group_name?: StringNullableFilter<"mst_group"> | string | null
    parent_id?: IntNullableFilter<"mst_group"> | number | null
    created_at?: DateTimeNullableFilter<"mst_group"> | Date | string | null
    created_by?: StringNullableFilter<"mst_group"> | string | null
  }, "id">

  export type mst_groupOrderByWithAggregationInput = {
    id?: SortOrder
    entities_id?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_groupCountOrderByAggregateInput
    _avg?: mst_groupAvgOrderByAggregateInput
    _max?: mst_groupMaxOrderByAggregateInput
    _min?: mst_groupMinOrderByAggregateInput
    _sum?: mst_groupSumOrderByAggregateInput
  }

  export type mst_groupScalarWhereWithAggregatesInput = {
    AND?: mst_groupScalarWhereWithAggregatesInput | mst_groupScalarWhereWithAggregatesInput[]
    OR?: mst_groupScalarWhereWithAggregatesInput[]
    NOT?: mst_groupScalarWhereWithAggregatesInput | mst_groupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_group"> | number
    entities_id?: IntNullableWithAggregatesFilter<"mst_group"> | number | null
    group_name?: StringNullableWithAggregatesFilter<"mst_group"> | string | null
    parent_id?: IntNullableWithAggregatesFilter<"mst_group"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_group"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_group"> | string | null
  }

  export type mst_manpower_costWhereInput = {
    AND?: mst_manpower_costWhereInput | mst_manpower_costWhereInput[]
    OR?: mst_manpower_costWhereInput[]
    NOT?: mst_manpower_costWhereInput | mst_manpower_costWhereInput[]
    id?: IntFilter<"mst_manpower_cost"> | number
    technician_level?: StringNullableFilter<"mst_manpower_cost"> | string | null
    hourly?: StringNullableFilter<"mst_manpower_cost"> | string | null
    monthly?: StringNullableFilter<"mst_manpower_cost"> | string | null
    created_at?: DateTimeNullableFilter<"mst_manpower_cost"> | Date | string | null
    created_by?: StringNullableFilter<"mst_manpower_cost"> | string | null
  }

  export type mst_manpower_costOrderByWithRelationInput = {
    id?: SortOrder
    technician_level?: SortOrderInput | SortOrder
    hourly?: SortOrderInput | SortOrder
    monthly?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_manpower_costWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_manpower_costWhereInput | mst_manpower_costWhereInput[]
    OR?: mst_manpower_costWhereInput[]
    NOT?: mst_manpower_costWhereInput | mst_manpower_costWhereInput[]
    technician_level?: StringNullableFilter<"mst_manpower_cost"> | string | null
    hourly?: StringNullableFilter<"mst_manpower_cost"> | string | null
    monthly?: StringNullableFilter<"mst_manpower_cost"> | string | null
    created_at?: DateTimeNullableFilter<"mst_manpower_cost"> | Date | string | null
    created_by?: StringNullableFilter<"mst_manpower_cost"> | string | null
  }, "id">

  export type mst_manpower_costOrderByWithAggregationInput = {
    id?: SortOrder
    technician_level?: SortOrderInput | SortOrder
    hourly?: SortOrderInput | SortOrder
    monthly?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_manpower_costCountOrderByAggregateInput
    _avg?: mst_manpower_costAvgOrderByAggregateInput
    _max?: mst_manpower_costMaxOrderByAggregateInput
    _min?: mst_manpower_costMinOrderByAggregateInput
    _sum?: mst_manpower_costSumOrderByAggregateInput
  }

  export type mst_manpower_costScalarWhereWithAggregatesInput = {
    AND?: mst_manpower_costScalarWhereWithAggregatesInput | mst_manpower_costScalarWhereWithAggregatesInput[]
    OR?: mst_manpower_costScalarWhereWithAggregatesInput[]
    NOT?: mst_manpower_costScalarWhereWithAggregatesInput | mst_manpower_costScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_manpower_cost"> | number
    technician_level?: StringNullableWithAggregatesFilter<"mst_manpower_cost"> | string | null
    hourly?: StringNullableWithAggregatesFilter<"mst_manpower_cost"> | string | null
    monthly?: StringNullableWithAggregatesFilter<"mst_manpower_cost"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_manpower_cost"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_manpower_cost"> | string | null
  }

  export type mst_profileWhereInput = {
    AND?: mst_profileWhereInput | mst_profileWhereInput[]
    OR?: mst_profileWhereInput[]
    NOT?: mst_profileWhereInput | mst_profileWhereInput[]
    id?: IntFilter<"mst_profile"> | number
    profile_name?: StringNullableFilter<"mst_profile"> | string | null
    created_at?: DateTimeNullableFilter<"mst_profile"> | Date | string | null
    created_by?: StringNullableFilter<"mst_profile"> | string | null
  }

  export type mst_profileOrderByWithRelationInput = {
    id?: SortOrder
    profile_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type mst_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_profileWhereInput | mst_profileWhereInput[]
    OR?: mst_profileWhereInput[]
    NOT?: mst_profileWhereInput | mst_profileWhereInput[]
    profile_name?: StringNullableFilter<"mst_profile"> | string | null
    created_at?: DateTimeNullableFilter<"mst_profile"> | Date | string | null
    created_by?: StringNullableFilter<"mst_profile"> | string | null
  }, "id">

  export type mst_profileOrderByWithAggregationInput = {
    id?: SortOrder
    profile_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: mst_profileCountOrderByAggregateInput
    _avg?: mst_profileAvgOrderByAggregateInput
    _max?: mst_profileMaxOrderByAggregateInput
    _min?: mst_profileMinOrderByAggregateInput
    _sum?: mst_profileSumOrderByAggregateInput
  }

  export type mst_profileScalarWhereWithAggregatesInput = {
    AND?: mst_profileScalarWhereWithAggregatesInput | mst_profileScalarWhereWithAggregatesInput[]
    OR?: mst_profileScalarWhereWithAggregatesInput[]
    NOT?: mst_profileScalarWhereWithAggregatesInput | mst_profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_profile"> | number
    profile_name?: StringNullableWithAggregatesFilter<"mst_profile"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"mst_profile"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"mst_profile"> | string | null
  }

  export type tr_documentWhereInput = {
    AND?: tr_documentWhereInput | tr_documentWhereInput[]
    OR?: tr_documentWhereInput[]
    NOT?: tr_documentWhereInput | tr_documentWhereInput[]
    id?: IntFilter<"tr_document"> | number
    type?: StringNullableFilter<"tr_document"> | string | null
    type_id?: IntNullableFilter<"tr_document"> | number | null
    name?: StringNullableFilter<"tr_document"> | string | null
    filename?: StringNullableFilter<"tr_document"> | string | null
    filepath?: StringNullableFilter<"tr_document"> | string | null
    mime?: StringNullableFilter<"tr_document"> | string | null
    is_deleted?: StringNullableFilter<"tr_document"> | string | null
    created_at?: DateTimeNullableFilter<"tr_document"> | Date | string | null
    created_by?: StringNullableFilter<"tr_document"> | string | null
  }

  export type tr_documentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    filepath?: SortOrderInput | SortOrder
    mime?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_documentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_documentWhereInput | tr_documentWhereInput[]
    OR?: tr_documentWhereInput[]
    NOT?: tr_documentWhereInput | tr_documentWhereInput[]
    type?: StringNullableFilter<"tr_document"> | string | null
    type_id?: IntNullableFilter<"tr_document"> | number | null
    name?: StringNullableFilter<"tr_document"> | string | null
    filename?: StringNullableFilter<"tr_document"> | string | null
    filepath?: StringNullableFilter<"tr_document"> | string | null
    mime?: StringNullableFilter<"tr_document"> | string | null
    is_deleted?: StringNullableFilter<"tr_document"> | string | null
    created_at?: DateTimeNullableFilter<"tr_document"> | Date | string | null
    created_by?: StringNullableFilter<"tr_document"> | string | null
  }, "id">

  export type tr_documentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    filepath?: SortOrderInput | SortOrder
    mime?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_documentCountOrderByAggregateInput
    _avg?: tr_documentAvgOrderByAggregateInput
    _max?: tr_documentMaxOrderByAggregateInput
    _min?: tr_documentMinOrderByAggregateInput
    _sum?: tr_documentSumOrderByAggregateInput
  }

  export type tr_documentScalarWhereWithAggregatesInput = {
    AND?: tr_documentScalarWhereWithAggregatesInput | tr_documentScalarWhereWithAggregatesInput[]
    OR?: tr_documentScalarWhereWithAggregatesInput[]
    NOT?: tr_documentScalarWhereWithAggregatesInput | tr_documentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_document"> | number
    type?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"tr_document"> | number | null
    name?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    filename?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    filepath?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    mime?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    is_deleted?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_document"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_document"> | string | null
  }

  export type tr_historyWhereInput = {
    AND?: tr_historyWhereInput | tr_historyWhereInput[]
    OR?: tr_historyWhereInput[]
    NOT?: tr_historyWhereInput | tr_historyWhereInput[]
    id?: IntFilter<"tr_history"> | number
    type?: StringNullableFilter<"tr_history"> | string | null
    type_id?: IntNullableFilter<"tr_history"> | number | null
    action?: StringNullableFilter<"tr_history"> | string | null
    document_id?: IntNullableFilter<"tr_history"> | number | null
    created_at?: DateTimeNullableFilter<"tr_history"> | Date | string | null
    created_by?: StringNullableFilter<"tr_history"> | string | null
  }

  export type tr_historyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_historyWhereInput | tr_historyWhereInput[]
    OR?: tr_historyWhereInput[]
    NOT?: tr_historyWhereInput | tr_historyWhereInput[]
    type?: StringNullableFilter<"tr_history"> | string | null
    type_id?: IntNullableFilter<"tr_history"> | number | null
    action?: StringNullableFilter<"tr_history"> | string | null
    document_id?: IntNullableFilter<"tr_history"> | number | null
    created_at?: DateTimeNullableFilter<"tr_history"> | Date | string | null
    created_by?: StringNullableFilter<"tr_history"> | string | null
  }, "id">

  export type tr_historyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_historyCountOrderByAggregateInput
    _avg?: tr_historyAvgOrderByAggregateInput
    _max?: tr_historyMaxOrderByAggregateInput
    _min?: tr_historyMinOrderByAggregateInput
    _sum?: tr_historySumOrderByAggregateInput
  }

  export type tr_historyScalarWhereWithAggregatesInput = {
    AND?: tr_historyScalarWhereWithAggregatesInput | tr_historyScalarWhereWithAggregatesInput[]
    OR?: tr_historyScalarWhereWithAggregatesInput[]
    NOT?: tr_historyScalarWhereWithAggregatesInput | tr_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_history"> | number
    type?: StringNullableWithAggregatesFilter<"tr_history"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"tr_history"> | number | null
    action?: StringNullableWithAggregatesFilter<"tr_history"> | string | null
    document_id?: IntNullableWithAggregatesFilter<"tr_history"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_history"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_history"> | string | null
  }

  export type tr_projectWhereInput = {
    AND?: tr_projectWhereInput | tr_projectWhereInput[]
    OR?: tr_projectWhereInput[]
    NOT?: tr_projectWhereInput | tr_projectWhereInput[]
    id?: IntFilter<"tr_project"> | number
    request_id?: IntNullableFilter<"tr_project"> | number | null
    application_id?: IntNullableFilter<"tr_project"> | number | null
    project_code?: StringNullableFilter<"tr_project"> | string | null
    background?: StringNullableFilter<"tr_project"> | string | null
    issue_description?: StringNullableFilter<"tr_project"> | string | null
    business_impact?: StringNullableFilter<"tr_project"> | string | null
    group_id?: IntNullableFilter<"tr_project"> | number | null
    plan_start_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    plant_end_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    real_start_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    real_end_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    percent_done?: StringNullableFilter<"tr_project"> | string | null
    auto_percent_done?: StringNullableFilter<"tr_project"> | string | null
    status?: StringNullableFilter<"tr_project"> | string | null
    is_deleted?: StringNullableFilter<"tr_project"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project"> | string | null
  }

  export type tr_projectOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrderInput | SortOrder
    application_id?: SortOrderInput | SortOrder
    project_code?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    issue_description?: SortOrderInput | SortOrder
    business_impact?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plant_end_date?: SortOrderInput | SortOrder
    real_start_date?: SortOrderInput | SortOrder
    real_end_date?: SortOrderInput | SortOrder
    percent_done?: SortOrderInput | SortOrder
    auto_percent_done?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_projectWhereInput | tr_projectWhereInput[]
    OR?: tr_projectWhereInput[]
    NOT?: tr_projectWhereInput | tr_projectWhereInput[]
    request_id?: IntNullableFilter<"tr_project"> | number | null
    application_id?: IntNullableFilter<"tr_project"> | number | null
    project_code?: StringNullableFilter<"tr_project"> | string | null
    background?: StringNullableFilter<"tr_project"> | string | null
    issue_description?: StringNullableFilter<"tr_project"> | string | null
    business_impact?: StringNullableFilter<"tr_project"> | string | null
    group_id?: IntNullableFilter<"tr_project"> | number | null
    plan_start_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    plant_end_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    real_start_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    real_end_date?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    percent_done?: StringNullableFilter<"tr_project"> | string | null
    auto_percent_done?: StringNullableFilter<"tr_project"> | string | null
    status?: StringNullableFilter<"tr_project"> | string | null
    is_deleted?: StringNullableFilter<"tr_project"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project"> | string | null
  }, "id">

  export type tr_projectOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrderInput | SortOrder
    application_id?: SortOrderInput | SortOrder
    project_code?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    issue_description?: SortOrderInput | SortOrder
    business_impact?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plant_end_date?: SortOrderInput | SortOrder
    real_start_date?: SortOrderInput | SortOrder
    real_end_date?: SortOrderInput | SortOrder
    percent_done?: SortOrderInput | SortOrder
    auto_percent_done?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_projectCountOrderByAggregateInput
    _avg?: tr_projectAvgOrderByAggregateInput
    _max?: tr_projectMaxOrderByAggregateInput
    _min?: tr_projectMinOrderByAggregateInput
    _sum?: tr_projectSumOrderByAggregateInput
  }

  export type tr_projectScalarWhereWithAggregatesInput = {
    AND?: tr_projectScalarWhereWithAggregatesInput | tr_projectScalarWhereWithAggregatesInput[]
    OR?: tr_projectScalarWhereWithAggregatesInput[]
    NOT?: tr_projectScalarWhereWithAggregatesInput | tr_projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project"> | number
    request_id?: IntNullableWithAggregatesFilter<"tr_project"> | number | null
    application_id?: IntNullableWithAggregatesFilter<"tr_project"> | number | null
    project_code?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    background?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    issue_description?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    business_impact?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    group_id?: IntNullableWithAggregatesFilter<"tr_project"> | number | null
    plan_start_date?: DateTimeNullableWithAggregatesFilter<"tr_project"> | Date | string | null
    plant_end_date?: DateTimeNullableWithAggregatesFilter<"tr_project"> | Date | string | null
    real_start_date?: DateTimeNullableWithAggregatesFilter<"tr_project"> | Date | string | null
    real_end_date?: DateTimeNullableWithAggregatesFilter<"tr_project"> | Date | string | null
    percent_done?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    auto_percent_done?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    status?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    is_deleted?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project"> | string | null
  }

  export type tr_project_activityWhereInput = {
    AND?: tr_project_activityWhereInput | tr_project_activityWhereInput[]
    OR?: tr_project_activityWhereInput[]
    NOT?: tr_project_activityWhereInput | tr_project_activityWhereInput[]
    id?: IntFilter<"tr_project_activity"> | number
    project_id?: IntNullableFilter<"tr_project_activity"> | number | null
    activity_name?: StringNullableFilter<"tr_project_activity"> | string | null
    date?: DateTimeNullableFilter<"tr_project_activity"> | Date | string | null
    content?: StringNullableFilter<"tr_project_activity"> | string | null
    document?: StringNullableFilter<"tr_project_activity"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_activity"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_activity"> | string | null
  }

  export type tr_project_activityOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    activity_name?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_activityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_activityWhereInput | tr_project_activityWhereInput[]
    OR?: tr_project_activityWhereInput[]
    NOT?: tr_project_activityWhereInput | tr_project_activityWhereInput[]
    project_id?: IntNullableFilter<"tr_project_activity"> | number | null
    activity_name?: StringNullableFilter<"tr_project_activity"> | string | null
    date?: DateTimeNullableFilter<"tr_project_activity"> | Date | string | null
    content?: StringNullableFilter<"tr_project_activity"> | string | null
    document?: StringNullableFilter<"tr_project_activity"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_activity"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_activity"> | string | null
  }, "id">

  export type tr_project_activityOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    activity_name?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    document?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_activityCountOrderByAggregateInput
    _avg?: tr_project_activityAvgOrderByAggregateInput
    _max?: tr_project_activityMaxOrderByAggregateInput
    _min?: tr_project_activityMinOrderByAggregateInput
    _sum?: tr_project_activitySumOrderByAggregateInput
  }

  export type tr_project_activityScalarWhereWithAggregatesInput = {
    AND?: tr_project_activityScalarWhereWithAggregatesInput | tr_project_activityScalarWhereWithAggregatesInput[]
    OR?: tr_project_activityScalarWhereWithAggregatesInput[]
    NOT?: tr_project_activityScalarWhereWithAggregatesInput | tr_project_activityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_activity"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_activity"> | number | null
    activity_name?: StringNullableWithAggregatesFilter<"tr_project_activity"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"tr_project_activity"> | Date | string | null
    content?: StringNullableWithAggregatesFilter<"tr_project_activity"> | string | null
    document?: StringNullableWithAggregatesFilter<"tr_project_activity"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_activity"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_activity"> | string | null
  }

  export type tr_project_overviewWhereInput = {
    AND?: tr_project_overviewWhereInput | tr_project_overviewWhereInput[]
    OR?: tr_project_overviewWhereInput[]
    NOT?: tr_project_overviewWhereInput | tr_project_overviewWhereInput[]
    id?: IntFilter<"tr_project_overview"> | number
    project_id?: IntNullableFilter<"tr_project_overview"> | number | null
    purpose?: StringNullableFilter<"tr_project_overview"> | string | null
    goals?: StringNullableFilter<"tr_project_overview"> | string | null
    success_measurement?: StringNullableFilter<"tr_project_overview"> | string | null
    intangible_benefit?: StringNullableFilter<"tr_project_overview"> | string | null
    impact_of_not_doing?: StringNullableFilter<"tr_project_overview"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_overview"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_overview"> | string | null
  }

  export type tr_project_overviewOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    success_measurement?: SortOrderInput | SortOrder
    intangible_benefit?: SortOrderInput | SortOrder
    impact_of_not_doing?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_overviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_overviewWhereInput | tr_project_overviewWhereInput[]
    OR?: tr_project_overviewWhereInput[]
    NOT?: tr_project_overviewWhereInput | tr_project_overviewWhereInput[]
    project_id?: IntNullableFilter<"tr_project_overview"> | number | null
    purpose?: StringNullableFilter<"tr_project_overview"> | string | null
    goals?: StringNullableFilter<"tr_project_overview"> | string | null
    success_measurement?: StringNullableFilter<"tr_project_overview"> | string | null
    intangible_benefit?: StringNullableFilter<"tr_project_overview"> | string | null
    impact_of_not_doing?: StringNullableFilter<"tr_project_overview"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_overview"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_overview"> | string | null
  }, "id">

  export type tr_project_overviewOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    success_measurement?: SortOrderInput | SortOrder
    intangible_benefit?: SortOrderInput | SortOrder
    impact_of_not_doing?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_overviewCountOrderByAggregateInput
    _avg?: tr_project_overviewAvgOrderByAggregateInput
    _max?: tr_project_overviewMaxOrderByAggregateInput
    _min?: tr_project_overviewMinOrderByAggregateInput
    _sum?: tr_project_overviewSumOrderByAggregateInput
  }

  export type tr_project_overviewScalarWhereWithAggregatesInput = {
    AND?: tr_project_overviewScalarWhereWithAggregatesInput | tr_project_overviewScalarWhereWithAggregatesInput[]
    OR?: tr_project_overviewScalarWhereWithAggregatesInput[]
    NOT?: tr_project_overviewScalarWhereWithAggregatesInput | tr_project_overviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_overview"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_overview"> | number | null
    purpose?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
    goals?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
    success_measurement?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
    intangible_benefit?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
    impact_of_not_doing?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_overview"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_overview"> | string | null
  }

  export type tr_project_participantWhereInput = {
    AND?: tr_project_participantWhereInput | tr_project_participantWhereInput[]
    OR?: tr_project_participantWhereInput[]
    NOT?: tr_project_participantWhereInput | tr_project_participantWhereInput[]
    id?: IntFilter<"tr_project_participant"> | number
    project_id?: IntNullableFilter<"tr_project_participant"> | number | null
    employee_code?: StringNullableFilter<"tr_project_participant"> | string | null
    role?: StringNullableFilter<"tr_project_participant"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_participant"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_participant"> | string | null
  }

  export type tr_project_participantOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_participantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_participantWhereInput | tr_project_participantWhereInput[]
    OR?: tr_project_participantWhereInput[]
    NOT?: tr_project_participantWhereInput | tr_project_participantWhereInput[]
    project_id?: IntNullableFilter<"tr_project_participant"> | number | null
    employee_code?: StringNullableFilter<"tr_project_participant"> | string | null
    role?: StringNullableFilter<"tr_project_participant"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_participant"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_participant"> | string | null
  }, "id">

  export type tr_project_participantOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_participantCountOrderByAggregateInput
    _avg?: tr_project_participantAvgOrderByAggregateInput
    _max?: tr_project_participantMaxOrderByAggregateInput
    _min?: tr_project_participantMinOrderByAggregateInput
    _sum?: tr_project_participantSumOrderByAggregateInput
  }

  export type tr_project_participantScalarWhereWithAggregatesInput = {
    AND?: tr_project_participantScalarWhereWithAggregatesInput | tr_project_participantScalarWhereWithAggregatesInput[]
    OR?: tr_project_participantScalarWhereWithAggregatesInput[]
    NOT?: tr_project_participantScalarWhereWithAggregatesInput | tr_project_participantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_participant"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_participant"> | number | null
    employee_code?: StringNullableWithAggregatesFilter<"tr_project_participant"> | string | null
    role?: StringNullableWithAggregatesFilter<"tr_project_participant"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_participant"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_participant"> | string | null
  }

  export type tr_project_risk_mitigationWhereInput = {
    AND?: tr_project_risk_mitigationWhereInput | tr_project_risk_mitigationWhereInput[]
    OR?: tr_project_risk_mitigationWhereInput[]
    NOT?: tr_project_risk_mitigationWhereInput | tr_project_risk_mitigationWhereInput[]
    id?: IntFilter<"tr_project_risk_mitigation"> | number
    project_id?: IntNullableFilter<"tr_project_risk_mitigation"> | number | null
    risk?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
    point_control?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_risk_mitigation"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
  }

  export type tr_project_risk_mitigationOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    risk?: SortOrderInput | SortOrder
    point_control?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_risk_mitigationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_risk_mitigationWhereInput | tr_project_risk_mitigationWhereInput[]
    OR?: tr_project_risk_mitigationWhereInput[]
    NOT?: tr_project_risk_mitigationWhereInput | tr_project_risk_mitigationWhereInput[]
    project_id?: IntNullableFilter<"tr_project_risk_mitigation"> | number | null
    risk?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
    point_control?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_risk_mitigation"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_risk_mitigation"> | string | null
  }, "id">

  export type tr_project_risk_mitigationOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    risk?: SortOrderInput | SortOrder
    point_control?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_risk_mitigationCountOrderByAggregateInput
    _avg?: tr_project_risk_mitigationAvgOrderByAggregateInput
    _max?: tr_project_risk_mitigationMaxOrderByAggregateInput
    _min?: tr_project_risk_mitigationMinOrderByAggregateInput
    _sum?: tr_project_risk_mitigationSumOrderByAggregateInput
  }

  export type tr_project_risk_mitigationScalarWhereWithAggregatesInput = {
    AND?: tr_project_risk_mitigationScalarWhereWithAggregatesInput | tr_project_risk_mitigationScalarWhereWithAggregatesInput[]
    OR?: tr_project_risk_mitigationScalarWhereWithAggregatesInput[]
    NOT?: tr_project_risk_mitigationScalarWhereWithAggregatesInput | tr_project_risk_mitigationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_risk_mitigation"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_risk_mitigation"> | number | null
    risk?: StringNullableWithAggregatesFilter<"tr_project_risk_mitigation"> | string | null
    point_control?: StringNullableWithAggregatesFilter<"tr_project_risk_mitigation"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_risk_mitigation"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_risk_mitigation"> | string | null
  }

  export type tr_project_scopeWhereInput = {
    AND?: tr_project_scopeWhereInput | tr_project_scopeWhereInput[]
    OR?: tr_project_scopeWhereInput[]
    NOT?: tr_project_scopeWhereInput | tr_project_scopeWhereInput[]
    id?: IntFilter<"tr_project_scope"> | number
    project_id?: IntNullableFilter<"tr_project_scope"> | number | null
    features?: StringNullableFilter<"tr_project_scope"> | string | null
    description?: StringNullableFilter<"tr_project_scope"> | string | null
    type?: StringNullableFilter<"tr_project_scope"> | string | null
    created_at?: StringNullableFilter<"tr_project_scope"> | string | null
    created_by?: StringNullableFilter<"tr_project_scope"> | string | null
  }

  export type tr_project_scopeOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_scopeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_scopeWhereInput | tr_project_scopeWhereInput[]
    OR?: tr_project_scopeWhereInput[]
    NOT?: tr_project_scopeWhereInput | tr_project_scopeWhereInput[]
    project_id?: IntNullableFilter<"tr_project_scope"> | number | null
    features?: StringNullableFilter<"tr_project_scope"> | string | null
    description?: StringNullableFilter<"tr_project_scope"> | string | null
    type?: StringNullableFilter<"tr_project_scope"> | string | null
    created_at?: StringNullableFilter<"tr_project_scope"> | string | null
    created_by?: StringNullableFilter<"tr_project_scope"> | string | null
  }, "id">

  export type tr_project_scopeOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_scopeCountOrderByAggregateInput
    _avg?: tr_project_scopeAvgOrderByAggregateInput
    _max?: tr_project_scopeMaxOrderByAggregateInput
    _min?: tr_project_scopeMinOrderByAggregateInput
    _sum?: tr_project_scopeSumOrderByAggregateInput
  }

  export type tr_project_scopeScalarWhereWithAggregatesInput = {
    AND?: tr_project_scopeScalarWhereWithAggregatesInput | tr_project_scopeScalarWhereWithAggregatesInput[]
    OR?: tr_project_scopeScalarWhereWithAggregatesInput[]
    NOT?: tr_project_scopeScalarWhereWithAggregatesInput | tr_project_scopeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_scope"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_scope"> | number | null
    features?: StringNullableWithAggregatesFilter<"tr_project_scope"> | string | null
    description?: StringNullableWithAggregatesFilter<"tr_project_scope"> | string | null
    type?: StringNullableWithAggregatesFilter<"tr_project_scope"> | string | null
    created_at?: StringNullableWithAggregatesFilter<"tr_project_scope"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_scope"> | string | null
  }

  export type tr_project_taskWhereInput = {
    AND?: tr_project_taskWhereInput | tr_project_taskWhereInput[]
    OR?: tr_project_taskWhereInput[]
    NOT?: tr_project_taskWhereInput | tr_project_taskWhereInput[]
    id?: IntFilter<"tr_project_task"> | number
    project_id?: IntNullableFilter<"tr_project_task"> | number | null
    task_name?: StringNullableFilter<"tr_project_task"> | string | null
    content?: StringNullableFilter<"tr_project_task"> | string | null
    plan_start_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    real_start_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    real_end_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    planned_duration?: StringNullableFilter<"tr_project_task"> | string | null
    real_duration?: StringNullableFilter<"tr_project_task"> | string | null
    percent_done?: StringNullableFilter<"tr_project_task"> | string | null
    cost?: DecimalNullableFilter<"tr_project_task"> | Decimal | DecimalJsLike | number | string | null
    task_type?: StringNullableFilter<"tr_project_task"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_task"> | string | null
    task_category?: StringNullableFilter<"tr_project_task"> | string | null
  }

  export type tr_project_taskOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    task_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    real_start_date?: SortOrderInput | SortOrder
    real_end_date?: SortOrderInput | SortOrder
    planned_duration?: SortOrderInput | SortOrder
    real_duration?: SortOrderInput | SortOrder
    percent_done?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    task_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    task_category?: SortOrderInput | SortOrder
  }

  export type tr_project_taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_taskWhereInput | tr_project_taskWhereInput[]
    OR?: tr_project_taskWhereInput[]
    NOT?: tr_project_taskWhereInput | tr_project_taskWhereInput[]
    project_id?: IntNullableFilter<"tr_project_task"> | number | null
    task_name?: StringNullableFilter<"tr_project_task"> | string | null
    content?: StringNullableFilter<"tr_project_task"> | string | null
    plan_start_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    real_start_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    real_end_date?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    planned_duration?: StringNullableFilter<"tr_project_task"> | string | null
    real_duration?: StringNullableFilter<"tr_project_task"> | string | null
    percent_done?: StringNullableFilter<"tr_project_task"> | string | null
    cost?: DecimalNullableFilter<"tr_project_task"> | Decimal | DecimalJsLike | number | string | null
    task_type?: StringNullableFilter<"tr_project_task"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_task"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_task"> | string | null
    task_category?: StringNullableFilter<"tr_project_task"> | string | null
  }, "id">

  export type tr_project_taskOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    task_name?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    real_start_date?: SortOrderInput | SortOrder
    real_end_date?: SortOrderInput | SortOrder
    planned_duration?: SortOrderInput | SortOrder
    real_duration?: SortOrderInput | SortOrder
    percent_done?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    task_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    task_category?: SortOrderInput | SortOrder
    _count?: tr_project_taskCountOrderByAggregateInput
    _avg?: tr_project_taskAvgOrderByAggregateInput
    _max?: tr_project_taskMaxOrderByAggregateInput
    _min?: tr_project_taskMinOrderByAggregateInput
    _sum?: tr_project_taskSumOrderByAggregateInput
  }

  export type tr_project_taskScalarWhereWithAggregatesInput = {
    AND?: tr_project_taskScalarWhereWithAggregatesInput | tr_project_taskScalarWhereWithAggregatesInput[]
    OR?: tr_project_taskScalarWhereWithAggregatesInput[]
    NOT?: tr_project_taskScalarWhereWithAggregatesInput | tr_project_taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_task"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_task"> | number | null
    task_name?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    content?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    plan_start_date?: DateTimeNullableWithAggregatesFilter<"tr_project_task"> | Date | string | null
    plan_end_date?: DateTimeNullableWithAggregatesFilter<"tr_project_task"> | Date | string | null
    real_start_date?: DateTimeNullableWithAggregatesFilter<"tr_project_task"> | Date | string | null
    real_end_date?: DateTimeNullableWithAggregatesFilter<"tr_project_task"> | Date | string | null
    planned_duration?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    real_duration?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    percent_done?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    cost?: DecimalNullableWithAggregatesFilter<"tr_project_task"> | Decimal | DecimalJsLike | number | string | null
    task_type?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_task"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
    task_category?: StringNullableWithAggregatesFilter<"tr_project_task"> | string | null
  }

  export type tr_project_teamWhereInput = {
    AND?: tr_project_teamWhereInput | tr_project_teamWhereInput[]
    OR?: tr_project_teamWhereInput[]
    NOT?: tr_project_teamWhereInput | tr_project_teamWhereInput[]
    id?: IntFilter<"tr_project_team"> | number
    project_id?: IntNullableFilter<"tr_project_team"> | number | null
    employee_code?: StringNullableFilter<"tr_project_team"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_team"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_team"> | string | null
  }

  export type tr_project_teamOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_project_teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_project_teamWhereInput | tr_project_teamWhereInput[]
    OR?: tr_project_teamWhereInput[]
    NOT?: tr_project_teamWhereInput | tr_project_teamWhereInput[]
    project_id?: IntNullableFilter<"tr_project_team"> | number | null
    employee_code?: StringNullableFilter<"tr_project_team"> | string | null
    created_at?: DateTimeNullableFilter<"tr_project_team"> | Date | string | null
    created_by?: StringNullableFilter<"tr_project_team"> | string | null
  }, "id">

  export type tr_project_teamOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    employee_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_project_teamCountOrderByAggregateInput
    _avg?: tr_project_teamAvgOrderByAggregateInput
    _max?: tr_project_teamMaxOrderByAggregateInput
    _min?: tr_project_teamMinOrderByAggregateInput
    _sum?: tr_project_teamSumOrderByAggregateInput
  }

  export type tr_project_teamScalarWhereWithAggregatesInput = {
    AND?: tr_project_teamScalarWhereWithAggregatesInput | tr_project_teamScalarWhereWithAggregatesInput[]
    OR?: tr_project_teamScalarWhereWithAggregatesInput[]
    NOT?: tr_project_teamScalarWhereWithAggregatesInput | tr_project_teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_project_team"> | number
    project_id?: IntNullableWithAggregatesFilter<"tr_project_team"> | number | null
    employee_code?: StringNullableWithAggregatesFilter<"tr_project_team"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_project_team"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_project_team"> | string | null
  }

  export type tr_requestWhereInput = {
    AND?: tr_requestWhereInput | tr_requestWhereInput[]
    OR?: tr_requestWhereInput[]
    NOT?: tr_requestWhereInput | tr_requestWhereInput[]
    id?: IntFilter<"tr_request"> | number
    entities_id?: IntNullableFilter<"tr_request"> | number | null
    ticket_name?: StringNullableFilter<"tr_request"> | string | null
    creation_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    closed_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    creator?: StringNullableFilter<"tr_request"> | string | null
    status?: StringNullableFilter<"tr_request"> | string | null
    urgency?: StringNullableFilter<"tr_request"> | string | null
    expected_completion_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    category?: StringNullableFilter<"tr_request"> | string | null
    type?: StringNullableFilter<"tr_request"> | string | null
    description?: StringNullableFilter<"tr_request"> | string | null
    department_code?: StringNullableFilter<"tr_request"> | string | null
    is_project?: StringNullableFilter<"tr_request"> | string | null
    created_at?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    created_by?: StringNullableFilter<"tr_request"> | string | null
  }

  export type tr_requestOrderByWithRelationInput = {
    id?: SortOrder
    entities_id?: SortOrderInput | SortOrder
    ticket_name?: SortOrderInput | SortOrder
    creation_date?: SortOrderInput | SortOrder
    closed_date?: SortOrderInput | SortOrder
    creator?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    expected_completion_date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    department_code?: SortOrderInput | SortOrder
    is_project?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
  }

  export type tr_requestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_requestWhereInput | tr_requestWhereInput[]
    OR?: tr_requestWhereInput[]
    NOT?: tr_requestWhereInput | tr_requestWhereInput[]
    entities_id?: IntNullableFilter<"tr_request"> | number | null
    ticket_name?: StringNullableFilter<"tr_request"> | string | null
    creation_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    closed_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    creator?: StringNullableFilter<"tr_request"> | string | null
    status?: StringNullableFilter<"tr_request"> | string | null
    urgency?: StringNullableFilter<"tr_request"> | string | null
    expected_completion_date?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    category?: StringNullableFilter<"tr_request"> | string | null
    type?: StringNullableFilter<"tr_request"> | string | null
    description?: StringNullableFilter<"tr_request"> | string | null
    department_code?: StringNullableFilter<"tr_request"> | string | null
    is_project?: StringNullableFilter<"tr_request"> | string | null
    created_at?: DateTimeNullableFilter<"tr_request"> | Date | string | null
    created_by?: StringNullableFilter<"tr_request"> | string | null
  }, "id">

  export type tr_requestOrderByWithAggregationInput = {
    id?: SortOrder
    entities_id?: SortOrderInput | SortOrder
    ticket_name?: SortOrderInput | SortOrder
    creation_date?: SortOrderInput | SortOrder
    closed_date?: SortOrderInput | SortOrder
    creator?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    expected_completion_date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    department_code?: SortOrderInput | SortOrder
    is_project?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: tr_requestCountOrderByAggregateInput
    _avg?: tr_requestAvgOrderByAggregateInput
    _max?: tr_requestMaxOrderByAggregateInput
    _min?: tr_requestMinOrderByAggregateInput
    _sum?: tr_requestSumOrderByAggregateInput
  }

  export type tr_requestScalarWhereWithAggregatesInput = {
    AND?: tr_requestScalarWhereWithAggregatesInput | tr_requestScalarWhereWithAggregatesInput[]
    OR?: tr_requestScalarWhereWithAggregatesInput[]
    NOT?: tr_requestScalarWhereWithAggregatesInput | tr_requestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_request"> | number
    entities_id?: IntNullableWithAggregatesFilter<"tr_request"> | number | null
    ticket_name?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    creation_date?: DateTimeNullableWithAggregatesFilter<"tr_request"> | Date | string | null
    closed_date?: DateTimeNullableWithAggregatesFilter<"tr_request"> | Date | string | null
    creator?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    status?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    urgency?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    expected_completion_date?: DateTimeNullableWithAggregatesFilter<"tr_request"> | Date | string | null
    category?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    type?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    description?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    department_code?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    is_project?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tr_request"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"tr_request"> | string | null
  }

  export type tr_request_validationWhereInput = {
    AND?: tr_request_validationWhereInput | tr_request_validationWhereInput[]
    OR?: tr_request_validationWhereInput[]
    NOT?: tr_request_validationWhereInput | tr_request_validationWhereInput[]
    id?: IntFilter<"tr_request_validation"> | number
    request_id?: IntNullableFilter<"tr_request_validation"> | number | null
    user_id?: StringNullableFilter<"tr_request_validation"> | string | null
    user_id_validate?: StringNullableFilter<"tr_request_validation"> | string | null
    comment_submission?: StringNullableFilter<"tr_request_validation"> | string | null
    comment_validation?: StringNullableFilter<"tr_request_validation"> | string | null
    status?: StringNullableFilter<"tr_request_validation"> | string | null
    submission_date?: DateTimeNullableFilter<"tr_request_validation"> | Date | string | null
    validation_date?: DateTimeNullableFilter<"tr_request_validation"> | Date | string | null
  }

  export type tr_request_validationOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_id_validate?: SortOrderInput | SortOrder
    comment_submission?: SortOrderInput | SortOrder
    comment_validation?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submission_date?: SortOrderInput | SortOrder
    validation_date?: SortOrderInput | SortOrder
  }

  export type tr_request_validationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_request_validationWhereInput | tr_request_validationWhereInput[]
    OR?: tr_request_validationWhereInput[]
    NOT?: tr_request_validationWhereInput | tr_request_validationWhereInput[]
    request_id?: IntNullableFilter<"tr_request_validation"> | number | null
    user_id?: StringNullableFilter<"tr_request_validation"> | string | null
    user_id_validate?: StringNullableFilter<"tr_request_validation"> | string | null
    comment_submission?: StringNullableFilter<"tr_request_validation"> | string | null
    comment_validation?: StringNullableFilter<"tr_request_validation"> | string | null
    status?: StringNullableFilter<"tr_request_validation"> | string | null
    submission_date?: DateTimeNullableFilter<"tr_request_validation"> | Date | string | null
    validation_date?: DateTimeNullableFilter<"tr_request_validation"> | Date | string | null
  }, "id">

  export type tr_request_validationOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_id_validate?: SortOrderInput | SortOrder
    comment_submission?: SortOrderInput | SortOrder
    comment_validation?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submission_date?: SortOrderInput | SortOrder
    validation_date?: SortOrderInput | SortOrder
    _count?: tr_request_validationCountOrderByAggregateInput
    _avg?: tr_request_validationAvgOrderByAggregateInput
    _max?: tr_request_validationMaxOrderByAggregateInput
    _min?: tr_request_validationMinOrderByAggregateInput
    _sum?: tr_request_validationSumOrderByAggregateInput
  }

  export type tr_request_validationScalarWhereWithAggregatesInput = {
    AND?: tr_request_validationScalarWhereWithAggregatesInput | tr_request_validationScalarWhereWithAggregatesInput[]
    OR?: tr_request_validationScalarWhereWithAggregatesInput[]
    NOT?: tr_request_validationScalarWhereWithAggregatesInput | tr_request_validationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_request_validation"> | number
    request_id?: IntNullableWithAggregatesFilter<"tr_request_validation"> | number | null
    user_id?: StringNullableWithAggregatesFilter<"tr_request_validation"> | string | null
    user_id_validate?: StringNullableWithAggregatesFilter<"tr_request_validation"> | string | null
    comment_submission?: StringNullableWithAggregatesFilter<"tr_request_validation"> | string | null
    comment_validation?: StringNullableWithAggregatesFilter<"tr_request_validation"> | string | null
    status?: StringNullableWithAggregatesFilter<"tr_request_validation"> | string | null
    submission_date?: DateTimeNullableWithAggregatesFilter<"tr_request_validation"> | Date | string | null
    validation_date?: DateTimeNullableWithAggregatesFilter<"tr_request_validation"> | Date | string | null
  }

  export type mst_applicationCreateInput = {
    application_name?: string | null
    group_id_technician?: string | null
    department_code?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_applicationUncheckedCreateInput = {
    id?: number
    application_name?: string | null
    group_id_technician?: string | null
    department_code?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_applicationUpdateInput = {
    application_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_id_technician?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_applicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_id_technician?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_applicationCreateManyInput = {
    id?: number
    application_name?: string | null
    group_id_technician?: string | null
    department_code?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_applicationUpdateManyMutationInput = {
    application_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_id_technician?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_applicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_name?: NullableStringFieldUpdateOperationsInput | string | null
    group_id_technician?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_application_versionCreateInput = {
    application_id?: number | null
    version?: string | null
    content?: string | null
    golive_date?: Date | string | null
  }

  export type mst_application_versionUncheckedCreateInput = {
    id?: number
    application_id?: number | null
    version?: string | null
    content?: string | null
    golive_date?: Date | string | null
  }

  export type mst_application_versionUpdateInput = {
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    golive_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_application_versionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    golive_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_application_versionCreateManyInput = {
    id?: number
    application_id?: number | null
    version?: string | null
    content?: string | null
    golive_date?: Date | string | null
  }

  export type mst_application_versionUpdateManyMutationInput = {
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    golive_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_application_versionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    golive_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_authorizationCreateInput = {
    employee_code?: string | null
    is_active?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    technician_level?: string | null
  }

  export type mst_authorizationUncheckedCreateInput = {
    id?: number
    employee_code?: string | null
    is_active?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    technician_level?: string | null
  }

  export type mst_authorizationUpdateInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorizationCreateManyInput = {
    id?: number
    employee_code?: string | null
    is_active?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    technician_level?: string | null
  }

  export type mst_authorizationUpdateManyMutationInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_profileCreateInput = {
    employee_code?: string | null
    profile_id?: number | null
    entities_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_profileUncheckedCreateInput = {
    id?: number
    employee_code?: string | null
    profile_id?: number | null
    entities_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_profileUpdateInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_profileCreateManyInput = {
    id?: number
    employee_code?: string | null
    profile_id?: number | null
    entities_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_profileUpdateManyMutationInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_usergroupCreateInput = {
    employee_code?: string | null
    group_id?: number | null
    is_manager?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_usergroupUncheckedCreateInput = {
    id?: number
    employee_code?: string | null
    group_id?: number | null
    is_manager?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_usergroupUpdateInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_manager?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_usergroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_manager?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_usergroupCreateManyInput = {
    id?: number
    employee_code?: string | null
    group_id?: number | null
    is_manager?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_authorization_usergroupUpdateManyMutationInput = {
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_manager?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_authorization_usergroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_manager?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_entitiesCreateInput = {
    entities_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_entitiesUncheckedCreateInput = {
    id?: number
    entities_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_entitiesUpdateInput = {
    entities_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_entitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_entitiesCreateManyInput = {
    id?: number
    entities_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_entitiesUpdateManyMutationInput = {
    entities_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_entitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_groupCreateInput = {
    entities_id?: number | null
    group_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_groupUncheckedCreateInput = {
    id?: number
    entities_id?: number | null
    group_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_groupUpdateInput = {
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_groupCreateManyInput = {
    id?: number
    entities_id?: number | null
    group_name?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_groupUpdateManyMutationInput = {
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_manpower_costCreateInput = {
    technician_level?: string | null
    hourly?: string | null
    monthly?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_manpower_costUncheckedCreateInput = {
    id?: number
    technician_level?: string | null
    hourly?: string | null
    monthly?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_manpower_costUpdateInput = {
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
    hourly?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_manpower_costUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
    hourly?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_manpower_costCreateManyInput = {
    id?: number
    technician_level?: string | null
    hourly?: string | null
    monthly?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_manpower_costUpdateManyMutationInput = {
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
    hourly?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_manpower_costUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    technician_level?: NullableStringFieldUpdateOperationsInput | string | null
    hourly?: NullableStringFieldUpdateOperationsInput | string | null
    monthly?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_profileCreateInput = {
    profile_name?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_profileUncheckedCreateInput = {
    id?: number
    profile_name?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_profileUpdateInput = {
    profile_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_profileCreateManyInput = {
    id?: number
    profile_name?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type mst_profileUpdateManyMutationInput = {
    profile_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_documentCreateInput = {
    type?: string | null
    type_id?: number | null
    name?: string | null
    filename?: string | null
    filepath?: string | null
    mime?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_documentUncheckedCreateInput = {
    id?: number
    type?: string | null
    type_id?: number | null
    name?: string | null
    filename?: string | null
    filepath?: string | null
    mime?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_documentUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_documentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_documentCreateManyInput = {
    id?: number
    type?: string | null
    type_id?: number | null
    name?: string | null
    filename?: string | null
    filepath?: string | null
    mime?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_documentUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_documentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    mime?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_historyCreateInput = {
    type?: string | null
    type_id?: number | null
    action?: string | null
    document_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_historyUncheckedCreateInput = {
    id?: number
    type?: string | null
    type_id?: number | null
    action?: string | null
    document_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_historyUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_historyCreateManyInput = {
    id?: number
    type?: string | null
    type_id?: number | null
    action?: string | null
    document_id?: number | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_historyUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_projectCreateInput = {
    id: number
    request_id?: number | null
    application_id?: number | null
    project_code?: string | null
    background?: string | null
    issue_description?: string | null
    business_impact?: string | null
    group_id?: number | null
    plan_start_date?: Date | string | null
    plant_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    percent_done?: string | null
    auto_percent_done?: string | null
    status?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_projectUncheckedCreateInput = {
    id: number
    request_id?: number | null
    application_id?: number | null
    project_code?: string | null
    background?: string | null
    issue_description?: string | null
    business_impact?: string | null
    group_id?: number | null
    plan_start_date?: Date | string | null
    plant_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    percent_done?: string | null
    auto_percent_done?: string | null
    status?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_projectUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_code?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    issue_description?: NullableStringFieldUpdateOperationsInput | string | null
    business_impact?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plant_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    auto_percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_code?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    issue_description?: NullableStringFieldUpdateOperationsInput | string | null
    business_impact?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plant_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    auto_percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_projectCreateManyInput = {
    id: number
    request_id?: number | null
    application_id?: number | null
    project_code?: string | null
    background?: string | null
    issue_description?: string | null
    business_impact?: string | null
    group_id?: number | null
    plan_start_date?: Date | string | null
    plant_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    percent_done?: string | null
    auto_percent_done?: string | null
    status?: string | null
    is_deleted?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_projectUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_code?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    issue_description?: NullableStringFieldUpdateOperationsInput | string | null
    business_impact?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plant_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    auto_percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    application_id?: NullableIntFieldUpdateOperationsInput | number | null
    project_code?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    issue_description?: NullableStringFieldUpdateOperationsInput | string | null
    business_impact?: NullableStringFieldUpdateOperationsInput | string | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plant_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    auto_percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_activityCreateInput = {
    project_id?: number | null
    activity_name?: string | null
    date?: Date | string | null
    content?: string | null
    document?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_activityUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    activity_name?: string | null
    date?: Date | string | null
    content?: string | null
    document?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_activityUpdateInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    activity_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_activityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    activity_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_activityCreateManyInput = {
    id?: number
    project_id?: number | null
    activity_name?: string | null
    date?: Date | string | null
    content?: string | null
    document?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_activityUpdateManyMutationInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    activity_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_activityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    activity_name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    document?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_overviewCreateInput = {
    project_id?: number | null
    purpose?: string | null
    goals?: string | null
    success_measurement?: string | null
    intangible_benefit?: string | null
    impact_of_not_doing?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_overviewUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    purpose?: string | null
    goals?: string | null
    success_measurement?: string | null
    intangible_benefit?: string | null
    impact_of_not_doing?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_overviewUpdateInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    success_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    intangible_benefit?: NullableStringFieldUpdateOperationsInput | string | null
    impact_of_not_doing?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_overviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    success_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    intangible_benefit?: NullableStringFieldUpdateOperationsInput | string | null
    impact_of_not_doing?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_overviewCreateManyInput = {
    id?: number
    project_id?: number | null
    purpose?: string | null
    goals?: string | null
    success_measurement?: string | null
    intangible_benefit?: string | null
    impact_of_not_doing?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_overviewUpdateManyMutationInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    success_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    intangible_benefit?: NullableStringFieldUpdateOperationsInput | string | null
    impact_of_not_doing?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_overviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    success_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    intangible_benefit?: NullableStringFieldUpdateOperationsInput | string | null
    impact_of_not_doing?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_participantCreateInput = {
    project_id?: number | null
    employee_code?: string | null
    role?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_participantUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    employee_code?: string | null
    role?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_participantUpdateInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_participantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_participantCreateManyInput = {
    id?: number
    project_id?: number | null
    employee_code?: string | null
    role?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_participantUpdateManyMutationInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_participantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_risk_mitigationCreateInput = {
    id: number
    project_id?: number | null
    risk?: string | null
    point_control?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_risk_mitigationUncheckedCreateInput = {
    id: number
    project_id?: number | null
    risk?: string | null
    point_control?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_risk_mitigationUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    risk?: NullableStringFieldUpdateOperationsInput | string | null
    point_control?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_risk_mitigationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    risk?: NullableStringFieldUpdateOperationsInput | string | null
    point_control?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_risk_mitigationCreateManyInput = {
    id: number
    project_id?: number | null
    risk?: string | null
    point_control?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_risk_mitigationUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    risk?: NullableStringFieldUpdateOperationsInput | string | null
    point_control?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_risk_mitigationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    risk?: NullableStringFieldUpdateOperationsInput | string | null
    point_control?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_scopeCreateInput = {
    project_id?: number | null
    features?: string | null
    description?: string | null
    type?: string | null
    created_at?: string | null
    created_by?: string | null
  }

  export type tr_project_scopeUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    features?: string | null
    description?: string | null
    type?: string | null
    created_at?: string | null
    created_by?: string | null
  }

  export type tr_project_scopeUpdateInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_scopeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_scopeCreateManyInput = {
    id?: number
    project_id?: number | null
    features?: string | null
    description?: string | null
    type?: string | null
    created_at?: string | null
    created_by?: string | null
  }

  export type tr_project_scopeUpdateManyMutationInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_scopeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_taskCreateInput = {
    project_id?: number | null
    task_name?: string | null
    content?: string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    planned_duration?: string | null
    real_duration?: string | null
    percent_done?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    task_type?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    task_category?: string | null
  }

  export type tr_project_taskUncheckedCreateInput = {
    id?: number
    project_id?: number | null
    task_name?: string | null
    content?: string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    planned_duration?: string | null
    real_duration?: string | null
    percent_done?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    task_type?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    task_category?: string | null
  }

  export type tr_project_taskUpdateInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    task_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    real_duration?: NullableStringFieldUpdateOperationsInput | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    task_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    task_category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    task_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    real_duration?: NullableStringFieldUpdateOperationsInput | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    task_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    task_category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_taskCreateManyInput = {
    id?: number
    project_id?: number | null
    task_name?: string | null
    content?: string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    real_start_date?: Date | string | null
    real_end_date?: Date | string | null
    planned_duration?: string | null
    real_duration?: string | null
    percent_done?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    task_type?: string | null
    created_at?: Date | string | null
    created_by?: string | null
    task_category?: string | null
  }

  export type tr_project_taskUpdateManyMutationInput = {
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    task_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    real_duration?: NullableStringFieldUpdateOperationsInput | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    task_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    task_category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    task_name?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    real_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planned_duration?: NullableStringFieldUpdateOperationsInput | string | null
    real_duration?: NullableStringFieldUpdateOperationsInput | string | null
    percent_done?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    task_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    task_category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_teamCreateInput = {
    id: number
    project_id?: number | null
    employee_code?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_teamUncheckedCreateInput = {
    id: number
    project_id?: number | null
    employee_code?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_teamUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_teamCreateManyInput = {
    id: number
    project_id?: number | null
    employee_code?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_project_teamUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_project_teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    employee_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_requestCreateInput = {
    entities_id?: number | null
    ticket_name?: string | null
    creation_date?: Date | string | null
    closed_date?: Date | string | null
    creator?: string | null
    status?: string | null
    urgency?: string | null
    expected_completion_date?: Date | string | null
    category?: string | null
    type?: string | null
    description?: string | null
    department_code?: string | null
    is_project?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_requestUncheckedCreateInput = {
    id?: number
    entities_id?: number | null
    ticket_name?: string | null
    creation_date?: Date | string | null
    closed_date?: Date | string | null
    creator?: string | null
    status?: string | null
    urgency?: string | null
    expected_completion_date?: Date | string | null
    category?: string | null
    type?: string | null
    description?: string | null
    department_code?: string | null
    is_project?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_requestUpdateInput = {
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    expected_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_project?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_requestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    expected_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_project?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_requestCreateManyInput = {
    id?: number
    entities_id?: number | null
    ticket_name?: string | null
    creation_date?: Date | string | null
    closed_date?: Date | string | null
    creator?: string | null
    status?: string | null
    urgency?: string | null
    expected_completion_date?: Date | string | null
    category?: string | null
    type?: string | null
    description?: string | null
    department_code?: string | null
    is_project?: string | null
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type tr_requestUpdateManyMutationInput = {
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    expected_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_project?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_requestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entities_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    urgency?: NullableStringFieldUpdateOperationsInput | string | null
    expected_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_project?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_request_validationCreateInput = {
    request_id?: number | null
    user_id?: string | null
    user_id_validate?: string | null
    comment_submission?: string | null
    comment_validation?: string | null
    status?: string | null
    submission_date?: Date | string | null
    validation_date?: Date | string | null
  }

  export type tr_request_validationUncheckedCreateInput = {
    id?: number
    request_id?: number | null
    user_id?: string | null
    user_id_validate?: string | null
    comment_submission?: string | null
    comment_validation?: string | null
    status?: string | null
    submission_date?: Date | string | null
    validation_date?: Date | string | null
  }

  export type tr_request_validationUpdateInput = {
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_validate?: NullableStringFieldUpdateOperationsInput | string | null
    comment_submission?: NullableStringFieldUpdateOperationsInput | string | null
    comment_validation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_request_validationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_validate?: NullableStringFieldUpdateOperationsInput | string | null
    comment_submission?: NullableStringFieldUpdateOperationsInput | string | null
    comment_validation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_request_validationCreateManyInput = {
    id?: number
    request_id?: number | null
    user_id?: string | null
    user_id_validate?: string | null
    comment_submission?: string | null
    comment_validation?: string | null
    status?: string | null
    submission_date?: Date | string | null
    validation_date?: Date | string | null
  }

  export type tr_request_validationUpdateManyMutationInput = {
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_validate?: NullableStringFieldUpdateOperationsInput | string | null
    comment_submission?: NullableStringFieldUpdateOperationsInput | string | null
    comment_validation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_request_validationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_validate?: NullableStringFieldUpdateOperationsInput | string | null
    comment_submission?: NullableStringFieldUpdateOperationsInput | string | null
    comment_validation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submission_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mst_applicationCountOrderByAggregateInput = {
    id?: SortOrder
    application_name?: SortOrder
    group_id_technician?: SortOrder
    department_code?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_applicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_applicationMaxOrderByAggregateInput = {
    id?: SortOrder
    application_name?: SortOrder
    group_id_technician?: SortOrder
    department_code?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_applicationMinOrderByAggregateInput = {
    id?: SortOrder
    application_name?: SortOrder
    group_id_technician?: SortOrder
    department_code?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_applicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type mst_application_versionCountOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    golive_date?: SortOrder
  }

  export type mst_application_versionAvgOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
  }

  export type mst_application_versionMaxOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    golive_date?: SortOrder
  }

  export type mst_application_versionMinOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
    version?: SortOrder
    content?: SortOrder
    golive_date?: SortOrder
  }

  export type mst_application_versionSumOrderByAggregateInput = {
    id?: SortOrder
    application_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type mst_authorizationCountOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    technician_level?: SortOrder
  }

  export type mst_authorizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_authorizationMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    technician_level?: SortOrder
  }

  export type mst_authorizationMinOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    technician_level?: SortOrder
  }

  export type mst_authorizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_authorization_profileCountOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    profile_id?: SortOrder
    entities_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_profileAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    entities_id?: SortOrder
  }

  export type mst_authorization_profileMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    profile_id?: SortOrder
    entities_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_profileMinOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    profile_id?: SortOrder
    entities_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_profileSumOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    entities_id?: SortOrder
  }

  export type mst_authorization_usergroupCountOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    group_id?: SortOrder
    is_manager?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_usergroupAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
  }

  export type mst_authorization_usergroupMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    group_id?: SortOrder
    is_manager?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_usergroupMinOrderByAggregateInput = {
    id?: SortOrder
    employee_code?: SortOrder
    group_id?: SortOrder
    is_manager?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_authorization_usergroupSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
  }

  export type mst_entitiesCountOrderByAggregateInput = {
    id?: SortOrder
    entities_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_entitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type mst_entitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    entities_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_entitiesMinOrderByAggregateInput = {
    id?: SortOrder
    entities_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_entitiesSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type mst_groupCountOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    group_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_groupAvgOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    parent_id?: SortOrder
  }

  export type mst_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    group_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_groupMinOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    group_name?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_groupSumOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    parent_id?: SortOrder
  }

  export type mst_manpower_costCountOrderByAggregateInput = {
    id?: SortOrder
    technician_level?: SortOrder
    hourly?: SortOrder
    monthly?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_manpower_costAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_manpower_costMaxOrderByAggregateInput = {
    id?: SortOrder
    technician_level?: SortOrder
    hourly?: SortOrder
    monthly?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_manpower_costMinOrderByAggregateInput = {
    id?: SortOrder
    technician_level?: SortOrder
    hourly?: SortOrder
    monthly?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_manpower_costSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_profileCountOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_profileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_profileMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_profileMinOrderByAggregateInput = {
    id?: SortOrder
    profile_name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type mst_profileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tr_documentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    mime?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_documentAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type tr_documentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    mime?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_documentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    mime?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_documentSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
  }

  export type tr_historyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    action?: SortOrder
    document_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    document_id?: SortOrder
  }

  export type tr_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    action?: SortOrder
    document_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_historyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    type_id?: SortOrder
    action?: SortOrder
    document_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_historySumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    document_id?: SortOrder
  }

  export type tr_projectCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    application_id?: SortOrder
    project_code?: SortOrder
    background?: SortOrder
    issue_description?: SortOrder
    business_impact?: SortOrder
    group_id?: SortOrder
    plan_start_date?: SortOrder
    plant_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    percent_done?: SortOrder
    auto_percent_done?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_projectAvgOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    application_id?: SortOrder
    group_id?: SortOrder
  }

  export type tr_projectMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    application_id?: SortOrder
    project_code?: SortOrder
    background?: SortOrder
    issue_description?: SortOrder
    business_impact?: SortOrder
    group_id?: SortOrder
    plan_start_date?: SortOrder
    plant_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    percent_done?: SortOrder
    auto_percent_done?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_projectMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    application_id?: SortOrder
    project_code?: SortOrder
    background?: SortOrder
    issue_description?: SortOrder
    business_impact?: SortOrder
    group_id?: SortOrder
    plan_start_date?: SortOrder
    plant_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    percent_done?: SortOrder
    auto_percent_done?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_projectSumOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    application_id?: SortOrder
    group_id?: SortOrder
  }

  export type tr_project_activityCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    activity_name?: SortOrder
    date?: SortOrder
    content?: SortOrder
    document?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_activityAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_activityMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    activity_name?: SortOrder
    date?: SortOrder
    content?: SortOrder
    document?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_activityMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    activity_name?: SortOrder
    date?: SortOrder
    content?: SortOrder
    document?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_activitySumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_overviewCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    purpose?: SortOrder
    goals?: SortOrder
    success_measurement?: SortOrder
    intangible_benefit?: SortOrder
    impact_of_not_doing?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_overviewAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_overviewMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    purpose?: SortOrder
    goals?: SortOrder
    success_measurement?: SortOrder
    intangible_benefit?: SortOrder
    impact_of_not_doing?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_overviewMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    purpose?: SortOrder
    goals?: SortOrder
    success_measurement?: SortOrder
    intangible_benefit?: SortOrder
    impact_of_not_doing?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_overviewSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_participantCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_participantAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_participantMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_participantMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_participantSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_risk_mitigationCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    risk?: SortOrder
    point_control?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_risk_mitigationAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_risk_mitigationMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    risk?: SortOrder
    point_control?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_risk_mitigationMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    risk?: SortOrder
    point_control?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_risk_mitigationSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_scopeCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    features?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_scopeAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_scopeMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    features?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_scopeMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    features?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_scopeSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type tr_project_taskCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    task_name?: SortOrder
    content?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    planned_duration?: SortOrder
    real_duration?: SortOrder
    percent_done?: SortOrder
    cost?: SortOrder
    task_type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    task_category?: SortOrder
  }

  export type tr_project_taskAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    cost?: SortOrder
  }

  export type tr_project_taskMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    task_name?: SortOrder
    content?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    planned_duration?: SortOrder
    real_duration?: SortOrder
    percent_done?: SortOrder
    cost?: SortOrder
    task_type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    task_category?: SortOrder
  }

  export type tr_project_taskMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    task_name?: SortOrder
    content?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    real_start_date?: SortOrder
    real_end_date?: SortOrder
    planned_duration?: SortOrder
    real_duration?: SortOrder
    percent_done?: SortOrder
    cost?: SortOrder
    task_type?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    task_category?: SortOrder
  }

  export type tr_project_taskSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    cost?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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

  export type tr_project_teamCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_teamAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_project_teamMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_teamMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    employee_code?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_project_teamSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type tr_requestCountOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    ticket_name?: SortOrder
    creation_date?: SortOrder
    closed_date?: SortOrder
    creator?: SortOrder
    status?: SortOrder
    urgency?: SortOrder
    expected_completion_date?: SortOrder
    category?: SortOrder
    type?: SortOrder
    description?: SortOrder
    department_code?: SortOrder
    is_project?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_requestAvgOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
  }

  export type tr_requestMaxOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    ticket_name?: SortOrder
    creation_date?: SortOrder
    closed_date?: SortOrder
    creator?: SortOrder
    status?: SortOrder
    urgency?: SortOrder
    expected_completion_date?: SortOrder
    category?: SortOrder
    type?: SortOrder
    description?: SortOrder
    department_code?: SortOrder
    is_project?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_requestMinOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
    ticket_name?: SortOrder
    creation_date?: SortOrder
    closed_date?: SortOrder
    creator?: SortOrder
    status?: SortOrder
    urgency?: SortOrder
    expected_completion_date?: SortOrder
    category?: SortOrder
    type?: SortOrder
    description?: SortOrder
    department_code?: SortOrder
    is_project?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type tr_requestSumOrderByAggregateInput = {
    id?: SortOrder
    entities_id?: SortOrder
  }

  export type tr_request_validationCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    user_id_validate?: SortOrder
    comment_submission?: SortOrder
    comment_validation?: SortOrder
    status?: SortOrder
    submission_date?: SortOrder
    validation_date?: SortOrder
  }

  export type tr_request_validationAvgOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
  }

  export type tr_request_validationMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    user_id_validate?: SortOrder
    comment_submission?: SortOrder
    comment_validation?: SortOrder
    status?: SortOrder
    submission_date?: SortOrder
    validation_date?: SortOrder
  }

  export type tr_request_validationMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    user_id_validate?: SortOrder
    comment_submission?: SortOrder
    comment_validation?: SortOrder
    status?: SortOrder
    submission_date?: SortOrder
    validation_date?: SortOrder
  }

  export type tr_request_validationSumOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use mst_applicationDefaultArgs instead
     */
    export type mst_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_applicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_application_versionDefaultArgs instead
     */
    export type mst_application_versionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_application_versionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_authorizationDefaultArgs instead
     */
    export type mst_authorizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_authorizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_authorization_profileDefaultArgs instead
     */
    export type mst_authorization_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_authorization_profileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_authorization_usergroupDefaultArgs instead
     */
    export type mst_authorization_usergroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_authorization_usergroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_entitiesDefaultArgs instead
     */
    export type mst_entitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_entitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_groupDefaultArgs instead
     */
    export type mst_groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_groupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_manpower_costDefaultArgs instead
     */
    export type mst_manpower_costArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_manpower_costDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_profileDefaultArgs instead
     */
    export type mst_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_profileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_documentDefaultArgs instead
     */
    export type tr_documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_documentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_historyDefaultArgs instead
     */
    export type tr_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_historyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_projectDefaultArgs instead
     */
    export type tr_projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_projectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_activityDefaultArgs instead
     */
    export type tr_project_activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_activityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_overviewDefaultArgs instead
     */
    export type tr_project_overviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_overviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_participantDefaultArgs instead
     */
    export type tr_project_participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_participantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_risk_mitigationDefaultArgs instead
     */
    export type tr_project_risk_mitigationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_risk_mitigationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_scopeDefaultArgs instead
     */
    export type tr_project_scopeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_scopeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_taskDefaultArgs instead
     */
    export type tr_project_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_taskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_project_teamDefaultArgs instead
     */
    export type tr_project_teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_project_teamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_requestDefaultArgs instead
     */
    export type tr_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_requestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_request_validationDefaultArgs instead
     */
    export type tr_request_validationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_request_validationDefaultArgs<ExtArgs>

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