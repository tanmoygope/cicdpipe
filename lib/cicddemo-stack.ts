import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class CicddemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const synth = new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('tanmoygope/cicdpipe', 'main'),
      commands: [
        'npm ci',
        'npm run build',
        'npx cdk synth',
      ],
    });

    new CodePipeline(this, 'logicalidpipe', { synth });
  }
}
