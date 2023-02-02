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
//
  const formData = await req.formData();
  const courseCertForm = new FormData();
  const cvForm = new FormData();
  courseCertForm.append("file", formData.get("courseCertificate"));
  cvForm.append("file", formData.get("cv"));
  
  // 'cvResponse' formats an uploaded CV as form-data
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

  // 'parseToCandidate' creates a candidate from the body response of cvResponse
  const parseToCandidate = await fetch(`${BullhornUrl}/entity/Candidate`, {
    method: "put",
    headers: {
        'BhRestToken': BhRestToken,
      },
      body: CandidateJson, CandidateDescription
    });
    const parseToCandidateJson = await parseToCandidate.json();
    const CandidateId = parseToCandidateJson.changedEntityId;
        
  //  'attachCVFileToCandidate' attaches a CV file to a specific CandidateId
  const attachCVFileToCandidate = await fetch(`${BullhornUrl}/file/Candidate/${CandidateId}/raw?filetype=CV&externalID=portfolio`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: cvForm
  });
  await attachCVFileToCandidate.json();

  //  'attachFileToCandidate' attaches a file to a specific candidateId
  const attachFileToCandidate = await fetch(`${BullhornUrl}/file/Candidate/${CandidateId}/raw?filetype=References&externalID=portfolio`, {
    method: "put",
    headers: {
      'BhRestToken': BhRestToken,
    },
    body: courseCertForm
  });
  await attachFileToCandidate.json();

  // 'updateCandidate' updates a specific candidates details
  const updateCandidate = await fetch(`${BullhornUrl}/entity/Candidate/${CandidateId}?BhRestToken=${BhRestToken}`, {
    method: "post",
    headers: {
    },
    body: JSON.stringify({
        "email": formData.get("email"),
        "comments": formData.get("message"),
        "source": formData.get("source"),
        "customText16": formData.get("radio")
      })
    });
    await updateCandidate.json();

  const JobId = formData.get("id");
  // 'applyToJob' applies to a specific JobId
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
  await applyToJob.json();

  res.redirect(301, `/thankyou`)
}






