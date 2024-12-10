// @ts-ignore
// import Cache from 'file-system-cache';

// export const cache = Cache({
//   basePath: './.cache', // (optional) Path where cache files are stored (default).
//   ns: 'my-namespace', // (optional) A grouping namespace for items.
//   hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
//   ttl: 60 * 60 * 3, // (optional) A time-to-live (in secs) on how long an item remains cached.
// });

// TODO: Implement cache service
const Cache = (options) => {
  return {
    set: async (...all) => {
      return;
    },
    get: async (...all) => {
      return null;
    },
    remove: async (...all) => {
      return;
    },
    clear: async () => {
      return;
    },
  };
}

export const cache = Cache({
  basePath: './.cache', // (optional) Path where cache files are stored (default).
  ns: 'my-namespace', // (optional) A grouping namespace for items.
  hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
  ttl: 60 * 60 * 3, // (optional) A time-to-live (in secs) on how long an item remains cached.
});
