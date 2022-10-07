import pino from "pino";
import Options from "./Options";

import { LoggerOptions } from 'pino';
import config from 'config';
import env from '../../env';
import packageJson from '../../package.json';

class Options implements LoggerOptions {
  name = packageJson.name;
  level = config.get('logger.level') as string;
  prettyPrint = !env.isProduction;
}


const logger = pino(new Options());

export default logger;
