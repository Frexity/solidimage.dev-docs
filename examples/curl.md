---
outline: deep
---

# cURL example

```bash
curl --location 'https://solidimage.dev/api/v1/image_analysis' \
  --form 'analysis[file]=@"test.jpg"' \
  --form 'api_key="YOUR_API_KEY_HERE"' \
  --form 'analysis[thumb_hash_data_url_enabled]="1"'
```
