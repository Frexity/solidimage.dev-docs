---
outline: deep
---

# API request parameters

```

      formdata.append('api_key', API_KEY)
      formdata.append('analysis[file]', imageBlob, fileName)
      formdata.append('analysis[thumb_hash_data_url_enabled]', '1')
```

## Responses

### 200 OK

```json
{
  "result": {
    "thumb": {
      "dataUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhE … Sx3AAAAAABJRU5ErkJggg==",
      "dimensions": {
        "width": 100,
        "height": 75,
        "aspectRatio": 1.333
      }
    }
  },
  "meta": {
    "creditsCost": 1.0,
    "originalCreditsCost": null,
    "imageFileName": "test.jpg",
    "remainingCredits": 9.0
  },
  "errorCode": null,
  "errorMessage": null,
  "success": true,
  "statusCode": "ok",
  "status": 200
}
```

## TypeScript response type

A simple shape. It can obviously be made more complex and robust. Adjust to your liking.

```ts
type Response = {
  result: {
    thumb: {
      dataUrl: string,
      dimensions: {
        width: null | number,
        height: null | number,
        aspectRatio: null | number
      }
    }
  },
  meta: {
    creditsCost: null | number,
    originalCreditsCost: null | number,
    imageFileName: string,
    remainingCredits: number
  },
  errorCode: null | string,
  errorMessage: null | string,
  success: boolean,
  statusCode: 'ok' | 'bad_request' | 'unauthorized' | 'forbidden' | 'unprocessable_entity' | 'internal_server_error'
  status: 200 | 400 | 401 | 403 | 422 | 500
}
```

::: tip
Response keys are available in `snake_case` and `camelCase` variants. Adjust the type accordingly.
:::
