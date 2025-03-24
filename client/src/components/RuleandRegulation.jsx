import React from 'react'
import { useTheme } from "../context/ThemeContext";
const RuleandRegulation = () => {
  const { theme } = useTheme();
  return (
    <div>
        <>
   <h2 className="heading my-2">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  RULES
                  <span className="text-warn" style={{ color: "#EEE" }}>
                     {" "}AND
                  </span>                 
                  {" "}REGU
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    LATIONS
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                 {" "}FOR
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}PARENT
                  </span>                 
                  {" "}ADOP
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    TION
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>
<br></br>
<br></br>
<div className='container d-flex flex-row gap-3 justify-content-center mt-5 text-white'>
<p>
<h4><b>1. Eligibility Criteria</b></h4>
<b>✅ For Adopters:</b>
<br></br>
- Must be 21+ years with a stable income.<br></br>
- Should pass background verification (criminal & reference check).<br></br>

<b>✅ For Elderly Individuals:</b>
<br></br>
-Must be registered with Second Innings via a trusted source.<br></br>
- Should provide basic medical/personal history and give voluntary consent.<br></br>
<hr></hr>
</p>

<p>
<h4><b>2. Application & Verification</b></h4>
📌 <b>Step 1:</b> Adopters submit an application with proof of stability.<br></br>
📌 <b>Step 2:</b> Screening via document verification & interview.<br></br>
📌 <b>Step 3:</b> Elderly individual can accept or decline the adoption request.<br></br>
<hr></hr>
</p>
<p>
<h4><b>3. Rights & Responsibilities</b></h4>
<b>⚖️ For Adopters:</b>
<br></br>
-Ensure respect, dignity, and well-being.<br></br>
-No exploitation or forced obligations.<br></br>
-Must notify Second Innings in case of withdrawal/disputes.<br></br>
<b>⚖️ For Elderly Individuals:</b>

-Retain full autonomy and can refuse support if uncomfortable.<br></br>
-Must respect the adopter’s boundaries.<br></br>
-Can report misconduct for intervention.<br></br>
<hr></hr>
</p>
<p>
<h4><b>4. Prohibited Actions</b></h4>
🚫 No abuse, coercion, or financial fraud.<br></br>
🚫 No legal claims over property/inheritance.<br></br>
🚫 No commercial exploitation/publicity.<br></br>
🚫 Confidentiality must be maintained.<br></br>
<hr></hr>
</p>
<p>
<h4><b>5. Termination & Dispute Resolution</b></h4>
📢 Either party may exit with a 30-day notice, except in abuse cases.<br></br>
📢 Second Innings will mediate disputes; violations may lead to legal action or removal.<br></br>
<hr></hr>
</p>
</div>
</>
    </div>
  )
}

export default RuleandRegulation