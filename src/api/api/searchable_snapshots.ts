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

export default class SearchableSnapshots {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Get cache statistics. Get statistics about the shared cache for partially mounted indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/searchable-snapshots-api-cache-stats.html | Elasticsearch API documentation}
    */
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsCacheStatsResponse>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsCacheStatsResponse, unknown>>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsCacheStatsResponse>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.node_id != null) {
      method = 'GET'
      path = `/_searchable_snapshots/${encodeURIComponent(params.node_id.toString())}/cache/stats`
    } else {
      method = 'GET'
      path = '/_searchable_snapshots/cache/stats'
    }
    const meta: TransportRequestMetadata = {
      name: 'searchable_snapshots.cache_stats',
      pathParts: {
        node_id: params.node_id
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Clear the cache. Clear indices and data streams from the shared cache for partially mounted indices.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/searchable-snapshots-api-clear-cache.html | Elasticsearch API documentation}
    */
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsClearCacheResponse>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsClearCacheResponse, unknown>>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsClearCacheResponse>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'POST'
      path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/cache/clear`
    } else {
      method = 'POST'
      path = '/_searchable_snapshots/cache/clear'
    }
    const meta: TransportRequestMetadata = {
      name: 'searchable_snapshots.clear_cache',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Mount a snapshot. Mount a snapshot as a searchable snapshot index. Do not use this API for snapshots managed by index lifecycle management (ILM). Manually mounting ILM-managed snapshots can interfere with ILM processes.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/searchable-snapshots-api-mount-snapshot.html | Elasticsearch API documentation}
    */
  async mount (this: That, params: T.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsMountResponse>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsMountResponse, unknown>>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsMountResponse>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const acceptedBody: string[] = ['index', 'renamed_index', 'index_settings', 'ignore_index_settings']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_mount`
    const meta: TransportRequestMetadata = {
      name: 'searchable_snapshots.mount',
      pathParts: {
        repository: params.repository,
        snapshot: params.snapshot
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }

  /**
    * Get searchable snapshot statistics.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/searchable-snapshots-api-stats.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsStatsResponse>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsStatsResponse, unknown>>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsStatsResponse>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
    const userQuery = params?.querystring
    const querystring: Record<string, any> = userQuery != null ? { ...userQuery } : {}

    let body: Record<string, any> | string | undefined
    const userBody = params?.body
    if (userBody != null) {
      if (typeof userBody === 'string') {
        body = userBody
      } else {
        body = { ...userBody }
      }
    }

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body' && key !== 'querystring') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.index != null) {
      method = 'GET'
      path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/stats`
    } else {
      method = 'GET'
      path = '/_searchable_snapshots/stats'
    }
    const meta: TransportRequestMetadata = {
      name: 'searchable_snapshots.stats',
      pathParts: {
        index: params.index
      }
    }
    return await this.transport.request({ path, method, querystring, body, meta }, options)
  }
}
