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

export default async function handler(nextReq, res) {
  const req = new Request(nextReq.headers.host + nextReq.url, {
    headers: nextReq.headers,
    method: nextReq.method,
    body: nextReq
  });

  
  // cvResponse formats an uploaded CV as form-data
  const formData = await req.formData();
  const cvForm = new FormData();
  cvForm.append("file", formData.get("cv"));
  const cvResponse = await fetch(`${BullhornUrl}/resume/parseToCandidate?format=docx&populateDescription=text`, {
    method: "post",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: cvForm 
  });
    const cvFormJson = await cvResponse.json();
    const CandidateJson = JSON.stringify(cvFormJson.candidate)
    const Candidate = cvFormJson.candidate
    const CandidateDescription = Candidate.description



  // parseToCandidate creates a candidate with the candidate section of the body response from cvResponse
  const parseToCandidate = await fetch(`${BullhornUrl}/entity/Candidate`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: CandidateJson, CandidateDescription
  });
  const parseToCandidateJson = await parseToCandidate.json();
  const CandidateId = parseToCandidateJson.changedEntityId;

  // attachFileToCandidate attaches a file to a specific candidateId
  const attachFileToCandidate = await fetch(`${BullhornUrl}/file/Candidate/${CandidateId}/raw?filetype=SAMPLE&externalID=portfolio`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: cvForm
  });
  // console.log(await attachFileToCandidate.json());
  await attachFileToCandidate.json();


  // update a candidate details
  const updateCandidate = await fetch(`${BullhornUrl}/entity/Candidate/${CandidateId}?BhRestToken=${BhRestToken}`, {
    method: "post",
    headers: {
    },
    body: JSON.stringify({
        "email": formData.get("email"),
        "comments": formData.get("message"),
    })
  });
  // console.log(await updateCandidate.json());
  await updateCandidate.json();
  



  const JobId = formData.get("id");
  // apply to a specific jobId
  const applyToJob = await fetch(`${BullhornUrl}/entity/JobSubmission`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: JSON.stringify({
      "candidate": {"id": CandidateId},
      "jobOrder": {"id": JobId},
      "status": "New Lead",
    }),
  })
  // console.log(await applyToJob.json());
  await applyToJob.json();


  res.redirect(301, "/thank-you")
}






