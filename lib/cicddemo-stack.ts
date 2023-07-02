import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import * as pipelines from 'aws-cdk-lib/pipelines'

export class CicddemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    //AWS CI-CD Pipleine

    const medemopipleline = new pipelines.CodePipeline(this, 'logicalidpipe', {
      synth: new pipelines.ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        input: pipelines.CodePipelineSource.gitHub('tanmoygope/cicddemo', 'main'),
        commands: [
          'npm config ls',
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),

    })

  }
}
