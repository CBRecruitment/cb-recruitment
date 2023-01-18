import { NextApiRequest, NextApiResponse } from 'next';
import { Request, FormData } from 'node-fetch';
import fetch from 'node-fetch';
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;
const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;

export const config = {
  api: {
	bodyParser: false,
  },
}

export default async function handler(nextReq: NextApiRequest, res: NextApiResponse) {
  // const req = new Request(nextReq.headers.host + nextReq.url, {
  //   headers: nextReq.headers,
  //   method: nextReq.method,
  //   body: nextReq
  // });
  
  // // cvResponse formats an uploaded CV as form-data
  // const formData = await req.formData();
  // const cvForm = new FormData();
  // cvForm.append("file", formData.get("cv"));
  // const cvResponse = await fetch(`${BullhornUrl}/resume/parseToCandidate?format=docx`, {
  //   method: "post",
  //   headers: {
  //     'BhRestToken': BhRestToken,
  //   },
  //   body: cvForm 
  // });
  // const cvFormJson = await cvResponse.json();
  // console.log(cvFormJson)
  // const Candidate = JSON.stringify(cvFormJson.candidate)
  
  // // parseToCandidate creates a candidate with the candidate section of the body response from cvResponse
  // const parseToCandidate = await fetch(`${BullhornUrl}/entity/Candidate`, {
  //   method: "put",
  //   headers: {
  //     'BhRestToken': BhRestToken,
  //   },
  //   body: Candidate
  // });

  // const parseToCandidateJson = await parseToCandidate.json();
  // console.log(parseToCandidateJson)
  // const CandidateId = parseToCandidateJson.changedEntityId;

  // // attachFileToCandidate attaches a file to a specific candidateId
  // const attachFileToCandidate = await fetch(`${BullhornUrl}/file/Candidate/${CandidateId}/raw?filetype=SAMPLE&externalID=portfolio`, {
  //   method: "put",
  //   headers: {
  //     'BhRestToken': BhRestToken,
  //   },
  //   body: cvForm
  // });
  // console.log(await attachFileToCandidate.json());

  // res.redirect(301, "/thank-you")
}






