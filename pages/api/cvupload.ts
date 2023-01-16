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
//   console.log(await cvResponse.json());

  const json = await cvResponse.json();
  const Candidate = JSON.stringify(json.candidate)
  
  const parseToCandidate = await fetch(`https://rest21.bullhornstaffing.com/rest-services/8k8341/entity/Candidate`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: Candidate
  });
//   console.log(await parseToCandidate.json());

  const json2 = await parseToCandidate.json();
  console.log(json2.changedEntityId);
}






