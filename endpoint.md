---
outline: deep
---

# Endpoint usage

## URL


| Key      | Value |
|----------|-------|
| `URL`    | `https://solidimage.dev/v1/image_analysis` |
| `Method` | `POST` |

## Request parameters

| Key                                     | Value     | Description  |
|-----------------------------------------|-----------|--------------|
| `api_key`                               | `API_KEY` | You app specific key from the dashboard. |
| `analysis[file]`                        | `file`    | The file you want to send. |
| `analysis[thumb_hash_data_url_enabled]` | `1`       | Must be set to 1 to generate the thumb hash image |
| `use_camel_case` (Optional)             | `1`       | Set to 1 to use camelCase keys in the response. |

::: tip
At the moment, only the "thumb hash" feature is available. More features will be added in the future. You still need to provide the `analysis[thumb_hash_data_url_enabled]` parameter.
:::

::: warning
External URLs are not supported. You have to send an actual image file to the endpoint.
:::

## Validations

| Key                | Value     |
|--------------------|-----------|
| Allowed file types | `avif`, `heic`, `heif`, `jpeg`, `jpg`, `png`, `webp` |
| Max file size      | 10 MB (10485760 bytes) |

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
