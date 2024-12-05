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

/**
  * Render a search template. Render a search template as a search request body.
  * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/render-search-template-api.html | Elasticsearch API documentation}
  */
export default async function RenderSearchTemplateApi (this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.RenderSearchTemplateResponse>
export default async function RenderSearchTemplateApi (this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.RenderSearchTemplateResponse, unknown>>
export default async function RenderSearchTemplateApi (this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptions): Promise<T.RenderSearchTemplateResponse>
export default async function RenderSearchTemplateApi (this: That, params?: T.RenderSearchTemplateRequest, options?: TransportRequestOptions): Promise<any> {
  const acceptedPath: string[] = ['id']
  const acceptedBody: string[] = ['file', 'params', 'source']
  const querystring: Record<string, any> = {}
  const body: Record<string, any> = {}

  params = params ?? {}
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

  let method = ''
  let path = ''
  if (params.id != null) {
    method = body != null ? 'POST' : 'GET'
    path = `/_render/template/${encodeURIComponent(params.id.toString())}`
  } else {
    method = body != null ? 'POST' : 'GET'
    path = '/_render/template'
  }
  const meta: TransportRequestMetadata = {
    name: 'render_search_template',
    pathParts: {
      id: params.id
    }
  }
  return await this.transport.request({ path, method, querystring, body, meta }, options)
}
