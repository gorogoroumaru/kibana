/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { CaptureConfig } from '../../../server/types';
import { LevelLogger } from '../../lib';
import { HeadlessChromiumDriverFactory } from './driver_factory';

export { paths } from './paths';

export async function createDriverFactory(
  binaryPath: string,
  logger: LevelLogger,
  captureConfig: CaptureConfig
): Promise<HeadlessChromiumDriverFactory> {
  return new HeadlessChromiumDriverFactory(binaryPath, logger, captureConfig);
}
