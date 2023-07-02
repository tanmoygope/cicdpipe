#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CicddemoStack } from '../lib/cicddemo-stack';

const app = new cdk.App();
new CicddemoStack(app, 'CicddemoStack', {
 env: { account: '025872092201', region: 'us-west-2' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});