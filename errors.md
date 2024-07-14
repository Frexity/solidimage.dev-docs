---
outline: deep
---

# API errors

| HTTP status                 | Error code                     | Description |
|-----------------------------|--------------------------------|-------------|
| 400 - Bad request           | `no_image`                     | An image must be provided. |
| 400 - Bad request           | `image_too_large`              | The image file size cannot exceed 20MB. |
| 400 - Bad request           | `invalid_file_type`            | Invalid file type. Allowed types are: avif, heic, heif, jpeg, jpg, png, and webp. |
| 400 - Bad request           | `invalid_image`                | The image provided cannot be processed. Please upload a valid file type (JPEG, JPG, PNG, WEBP, AVIF, HEIF). |
| 400 - Bad request           | `no_analysis_type_enabled`     | At least one analysis type must be enabled |
| 401 - Unauthorized          | `unauthorized`                 | Invalid app API key.
| 403 - Forbidden             | `account_unconfirmed`          | User account has not been confirmed yet. Please check your email.
| 403 - Forbidden             | `credits_too_low`              | Please top up your account balance.
| 422 - Unprocessable entity  | `analysis_params_missing`      | Analysis parameters are missing. Docs can be found at: https://docs.solidimage.dev
| 500 - Internal server error | `unknown_error`                | An unknown error occurred. Please contact support.
