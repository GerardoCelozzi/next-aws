import React from 'react'

export default function Installation_aws() {
  return (
    <div>
      <h1> Next - AWS</h1>
      <ol>
        <li>
          commentiamo tutti i file che importano lo stile predefinito di next js 
        </li>
        <li>
        npm install @aws-amplify/cli
        </li>
        <li>
          <span style={{color:'blue'}}>amplify configure</span>
          <ol>(abbiamo gia creato un iam user tutto da cli)
            <li>
               selezioniamo la regione
            </li>
            <li>
              inseriamo accesKeyId  e secretAccesKeydello iam user
            </li>
            <li>
              Profile name=nome che diamo al backend e che vedremo nella console su aws-amplify(credo)
              <p>Profile name=<span style={{color:'purple'}}>backend1</span></p>
            </li>
          </ol>
          
        </li>
        <li>
        <span style={{color:'blue'}}>amplify init</span>
        <ol>(abbiamo gia creato un iam user tutto da cli)
            <li>
            Enter a name for the project =project1
            <ul>
              dopo l invio vedo la configuarazione fatta fin qui 
              <li> Name: project1</li>
              <li>Environment: dev</li>
              <li>Default editor: Visual Studio Code</li>
              <li>App type: javascript</li>
              <li>Javascript framework: react</li>
              <li>Source Directory Path: src</li>
              <li>Distribution Directory Path: build</li>
              <li>Build Command: npm.cmd run-script build</li>
              <li> Start Command: npm.cmd run-script start</li>
            
            </ul>

            </li>
            <li>
            Initialize the project with the above configuration? No
            </li>
            <li>
            Enter a name for the environment (dev) ---invio
            </li>
            <li>
            Choose your default editor: (Use arrow keys)--- selezioni visual studio code
            </li>
            <li>
            Choose the type of app that you're building (Use arrow keys) ---selezioni javascript poi react
            </li>
            <li>
            Source Directory Path:  (src) ---invio
            </li>
            <li>
            Distribution Directory Path: (build) --invio
            </li>
            <li>
            Build Command: (npm.cmd run-script build) ---cambiamo con <br/>
            <span style={{color:'green'}}> Build Command: npm run build</span>
            </li>
            <li>
            Start Command: (npm.cmd run-script start) <br/>
            <span style={{color:'green'}}> Start Command:: npm run start</span>
            </li>
            <li>
            Select the authentication method you want to use: (Use arrow keys)(per autenticarci al cloud)
            <p>selezioniamo AWS profile</p>
            </li>
            <li>
              avevo anche il profilo vecchio quindi forse nn l ho eleiminato del tutto ma ho scelto<span style={{color:'purple'}}>backend1</span> 
            <br/>
            <small>messagio dopo la selezione = Adding backend environment dev to AWS Amplify app: d1hrsh4czi2t5v</small>
            </li>
          </ol>
        </li>
      </ol>
      
    </div>
  )
}
