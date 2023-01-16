// import { NextApiRequest, NextApiResponse } from "next";


// const FormData = require("form-data");
// let multiparty = require("multiparty")

// export const config = {
//   api: {
// 	bodyParser: false,
//   },
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const form = new multiparty.Form()

//   const data = await new Promise<{files: any, fields: any }>((resolve, reject) => {
// 	form.parse(req, (err: any, fields: any, files: any) => {
//       if (err) return reject(err)
//       resolve({ fields, files })
//     })
//   })
//   res.status(200).json({ data })

//   const cvForm = new FormData()

//   console.log(require("util").inspect(data.files.cv[0]))
//   cvForm.append("file", (data.files.cv[0].path))

//   const response = 
//   await fetch(`${bullhornUrl}/resume/parseToCandidate?format=docx`, {
// 	method: 'post',
//     headers: {
//       'BhRestToken': `${BhRestToken}`,
//       ...cvForm.getHeaders(),
//     },
//     body: cvForm.getBuffer(),
//   });

//   console.log(await response.json());
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { Request, FormData } from 'node-fetch';
import fetch from 'node-fetch';
const BhRestToken = "22753_7066847_be039362-7fa4-43e8-8997-660b0d151ae9"


export const config = {
  api: {
	bodyParser: false,
  },
}

export default async function handler(nextReq: NextApiRequest, res: NextApiResponse) {
  const req = new Request(nextReq.headers.host + nextReq.url, {
    headers: nextReq.headers,
    method: nextReq.method,
    body: nextReq
  });

  const formData = await req.formData();
  const cvForm = new FormData();
  cvForm.append("file", formData.get("cv"));
  const cvResponse = await fetch(`https://rest21.bullhornstaffing.com/rest-services/8k8341/resume/parseToCandidate?format=docx`, {
    method: "post",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: cvForm 
  });
  const json = await cvResponse.json();
  const Candidate = JSON.stringify(json.candidate)
  
  const parseToCandidate = await fetch(`https://rest21.bullhornstaffing.com/rest-services/8k8341/entity/Candidate`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: Candidate
  });
  console.log(await parseToCandidate.json());

  const json2 = await parseToCandidate.json();
  const CandidateId = json2.candidateId;

  const attachFileToCandidate = await fetch(`https://rest21.bullhornstaffing.com/rest-services/8k8341/file/Candidate/${CandidateId}/raw?filetype=SAMPLE&externalID=portfolio`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: cvResponse 
  });

  console.log(attachFileToCandidate.json());
}






