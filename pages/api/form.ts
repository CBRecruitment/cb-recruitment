let multiparty = require("multiparty")

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { data: unknown }): void; new (): any } } }
) {
  const form = new multiparty.Form()

  console.log(req)
  const data = await new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })

  res.status(200).json({ data })
}
