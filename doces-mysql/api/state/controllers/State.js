'use strict';

/**
 * State.js controller
 *
 * @description: A set of functions called "actions" for managing `State`.
 */

module.exports = {

  /**
   * Retrieve state records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.state.search(ctx.query);
    } else {
      return strapi.services.state.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a state record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.state.fetch(ctx.params);
  },

  /**
   * Count state records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.state.count(ctx.query, populate);
  },

  /**
   * Create a/an state record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.state.add(ctx.request.body);
  },

  /**
   * Update a/an state record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.state.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an state record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.state.remove(ctx.params);
  }
};
