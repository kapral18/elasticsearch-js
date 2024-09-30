/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestMetadata,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class SearchApplication {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete a search application. Remove a search application and its associated alias. Indices attached to the search application are not removed.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-search-application.html | Elasticsearch API documentation}
    */
  async delete (this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationDeleteResponse>
  async delete (this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationDeleteResponse, unknown>>
  async delete (this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationDeleteResponse>
  async delete (this: That, params: T.SearchApplicationDeleteRequest | TB.SearchApplicationDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_application/search_application/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.delete',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Delete a behavioral analytics collection. The associated data stream is also deleted.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-analytics-collection.html | Elasticsearch API documentation}
    */
  async deleteBehavioralAnalytics (this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationDeleteBehavioralAnalyticsResponse>
  async deleteBehavioralAnalytics (this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationDeleteBehavioralAnalyticsResponse, unknown>>
  async deleteBehavioralAnalytics (this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationDeleteBehavioralAnalyticsResponse>
  async deleteBehavioralAnalytics (this: That, params: T.SearchApplicationDeleteBehavioralAnalyticsRequest | TB.SearchApplicationDeleteBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_application/analytics/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.delete_behavioral_analytics',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get search application details.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-search-application.html | Elasticsearch API documentation}
    */
  async get (this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationGetResponse>
  async get (this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationGetResponse, unknown>>
  async get (this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationGetResponse>
  async get (this: That, params: T.SearchApplicationGetRequest | TB.SearchApplicationGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_application/search_application/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.get',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get behavioral analytics collections.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/list-analytics-collection.html | Elasticsearch API documentation}
    */
  async getBehavioralAnalytics (this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationGetBehavioralAnalyticsResponse>
  async getBehavioralAnalytics (this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationGetBehavioralAnalyticsResponse, unknown>>
  async getBehavioralAnalytics (this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationGetBehavioralAnalyticsResponse>
  async getBehavioralAnalytics (this: That, params?: T.SearchApplicationGetBehavioralAnalyticsRequest | TB.SearchApplicationGetBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_application/analytics/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_application/analytics'
    }
    const meta: TransportRequestMetadata = {
      name: 'search_application.get_behavioral_analytics',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Returns the existing search applications.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/list-search-applications.html | Elasticsearch API documentation}
    */
  async list (this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationListResponse>
  async list (this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationListResponse, unknown>>
  async list (this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationListResponse>
  async list (this: That, params?: T.SearchApplicationListRequest | TB.SearchApplicationListRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_application/search_application'
    const meta: TransportRequestMetadata = {
      name: 'search_application.list'
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Creates a behavioral analytics event for existing collection.
    * @see {@link http://todo.com/tbd | Elasticsearch API documentation}
    */
  async postBehavioralAnalyticsEvent (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async postBehavioralAnalyticsEvent (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async postBehavioralAnalyticsEvent (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async postBehavioralAnalyticsEvent (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['collection_name', 'event_type']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_application/analytics/${encodeURIComponent(params.collection_name.toString())}/event/${encodeURIComponent(params.event_type.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.post_behavioral_analytics_event',
      pathParts: {
        collection_name: params.collection_name,
        event_type: params.event_type
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create or update a search application.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-search-application.html | Elasticsearch API documentation}
    */
  async put (this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationPutResponse>
  async put (this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationPutResponse, unknown>>
  async put (this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationPutResponse>
  async put (this: That, params: T.SearchApplicationPutRequest | TB.SearchApplicationPutRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['search_application']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: any = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_application/search_application/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.put',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Create a behavioral analytics collection.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-analytics-collection.html | Elasticsearch API documentation}
    */
  async putBehavioralAnalytics (this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationPutBehavioralAnalyticsResponse>
  async putBehavioralAnalytics (this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationPutBehavioralAnalyticsResponse, unknown>>
  async putBehavioralAnalytics (this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationPutBehavioralAnalyticsResponse>
  async putBehavioralAnalytics (this: That, params: T.SearchApplicationPutBehavioralAnalyticsRequest | TB.SearchApplicationPutBehavioralAnalyticsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_application/analytics/${encodeURIComponent(params.name.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'search_application.put_behavioral_analytics',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Renders a query for given search application search parameters
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/search-application-render-query.html | Elasticsearch API documentation}
    */
  async renderQuery (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithOutMeta): Promise<T.TODO>
  async renderQuery (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.TODO, unknown>>
  async renderQuery (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<T.TODO>
  async renderQuery (this: That, params?: T.TODO | TB.TODO, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_application/search_application/${encodeURIComponent(params.name.toString())}/_render_query`
    const meta: TransportRequestMetadata = {
      name: 'search_application.render_query',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Run a search application search. Generate and run an Elasticsearch query that uses the specified query parameteter and the search template associated with the search application or default template. Unspecified template parameters are assigned their default values if applicable.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/search-application-search.html | Elasticsearch API documentation}
    */
  async search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchApplicationSearchResponse<TDocument, TAggregations>>
  async search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchApplicationSearchResponse<TDocument, TAggregations>, unknown>>
  async search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptions): Promise<T.SearchApplicationSearchResponse<TDocument, TAggregations>>
  async search<TDocument = unknown, TAggregations = Record<T.AggregateName, T.AggregationsAggregate>> (this: That, params: T.SearchApplicationSearchRequest | TB.SearchApplicationSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['params']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = `/_application/search_application/${encodeURIComponent(params.name.toString())}/_search`
    const meta: TransportRequestMetadata = {
      name: 'search_application.search',
      pathParts: {
        name: params.name
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
