---
outline: deep
---

# NextJS example

```tsx
import { ImageFadeIn } from '@/app/components/ImageFadeIn'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { Blob } from 'fetch-blob'

const API_KEY = 'YOUR_API_KEY_HERE'

const fileNames = [
  '/images/a.jpg',
  '/images/b.jpg',
  '/images/c.jpg',
  '/images/d.jpg'
]

async function getData() {
  return Promise.all(
    fileNames.map(async (fileName) => {
      // Convert local file to a Blob
      const filePath = path.join(process.cwd(), 'public', fileName)
      const buffer = fs.readFileSync(filePath)
      const uint8Array = new Uint8Array(buffer)
      const imageBlob = new Blob([uint8Array])

      // Construct the payload
      const formdata = new FormData()
      formdata.append('api_key', API_KEY)
      formdata.append('analysis[file]', imageBlob, fileName)
      formdata.append('analysis[thumb_hash_data_url_enabled]', '1')

      const res = await fetch('https://solidimage.dev/v1/image_analysis', {
        method: 'POST',
        body: formdata,
      })

      const result = {
        filePath: fileName,
        json: await res.json(),
      }

      return result
    })
  )
}

export default async function Page() {
  const imageResponses = await getData()

  return (
    <div className="grid grid-cols-2">
      {imageResponses.map((img) => {
        return (
          <div className="relative flex w-[400px]">
            <Image
              src={img.json?.result?.thumb?.data_url}
              width={400}
              height={200}
            />
            <ImageFadeIn
              src={img.filePath}
              width={400}
              height={200}
              className="z-2 absolute left-0 top-0"
            />
          </div>
        )
      })}
    </div>
  )
}
```
