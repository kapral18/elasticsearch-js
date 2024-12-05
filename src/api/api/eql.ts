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
interface That { transport: Transport }

export default class Eql {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Delete an async EQL search. Delete an async EQL search or a stored synchronous EQL search. The API also deletes results for the search.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/eql-search-api.html | Elasticsearch API documentation}
    */
  async delete (this: That, params: T.EqlDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlDeleteResponse>
  async delete (this: That, params: T.EqlDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlDeleteResponse, unknown>>
  async delete (this: That, params: T.EqlDeleteRequest, options?: TransportRequestOptions): Promise<T.EqlDeleteResponse>
  async delete (this: That, params: T.EqlDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_eql/search/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'eql.delete',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get async EQL search results. Get the current status and available results for an async EQL search or a stored synchronous EQL search.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-async-eql-search-api.html | Elasticsearch API documentation}
    */
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlGetResponse<TEvent>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlGetResponse<TEvent>, unknown>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest, options?: TransportRequestOptions): Promise<T.EqlGetResponse<TEvent>>
  async get<TEvent = unknown> (this: That, params: T.EqlGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_eql/search/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'eql.get',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get the async EQL status. Get the current status for an async EQL search or a stored synchronous EQL search without returning results.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-async-eql-status-api.html | Elasticsearch API documentation}
    */
  async getStatus (this: That, params: T.EqlGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlGetStatusResponse>
  async getStatus (this: That, params: T.EqlGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlGetStatusResponse, unknown>>
  async getStatus (this: That, params: T.EqlGetStatusRequest, options?: TransportRequestOptions): Promise<T.EqlGetStatusResponse>
  async getStatus (this: That, params: T.EqlGetStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_eql/search/status/${encodeURIComponent(params.id.toString())}`
    const meta: TransportRequestMetadata = {
      name: 'eql.get_status',
      pathParts: {
        id: params.id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get EQL search results. Returns search results for an Event Query Language (EQL) query. EQL assumes each document in a data stream or index corresponds to an event.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/eql-search-api.html | Elasticsearch API documentation}
    */
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EqlSearchResponse<TEvent>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EqlSearchResponse<TEvent>, unknown>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest, options?: TransportRequestOptions): Promise<T.EqlSearchResponse<TEvent>>
  async search<TEvent = unknown> (this: That, params: T.EqlSearchRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const acceptedBody: string[] = ['query', 'case_sensitive', 'event_category_field', 'tiebreaker_field', 'timestamp_field', 'fetch_size', 'filter', 'keep_alive', 'keep_on_completion', 'wait_for_completion_timeout', 'size', 'fields', 'result_position', 'runtime_mappings', 'max_samples_per_key']
    const querystring: Record<string, any> = {}
    const body: Record<string, any> = {}

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = body != null ? 'POST' : 'GET'
    const path = `/${encodeURIComponent(params.index.toString())}/_eql/search`
    const meta: TransportRequestMetadata = {
      name: 'eql.search',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
