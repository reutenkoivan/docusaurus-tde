import type glob from 'glob'
import type lodash from 'lodash'
import type fetch from 'node-fetch'
import type docusaurusTypes from '@docusaurus/types'
import type { Signales } from 'signales'
import type { Constants, copyFile, mkdir, writeFile } from '@docusaurus-tde/utils'

export namespace pwaDocDI {
  export namespace hooks {
    export type settings = {
      name: string;
      version: string;
      before?: Array<asyncHook>;
      runtime?: Array<runtimeHook>;
      after?: Array<asyncHook>;
    }

    export type filledSettings = {
      name: string;
      version: string;
      props: Record<string, any>;
      before: Array<asyncHook>;
      runtime: Array<runtimeHook>;
      after: Array<asyncHook>;
    }

    export type defaultContext = {
      utils: {
        copyFile: typeof copyFile;
        mkdir: typeof mkdir;
        writeFile: typeof writeFile;
        lodash: typeof lodash;
        glob: typeof glob;
      };
      constants: Constants;
    }

    export type context = {
      utils: {
        copyFile: typeof copyFile;
        mkdir: typeof mkdir;
        writeFile: typeof writeFile;
        lodash: typeof lodash;
        glob: typeof glob;
      };
      logger: typeof Signales;
      constants: Constants;
    }

    export type asyncContext = context & {
      utils: {
        fetch: typeof fetch;
      };
    }
  }

  export type runtimeHook = (
    _config: docusaurusTypes.Config,
    _di: { props: Record<string, any>; context: hooks.context}
  ) => docusaurusTypes.Config

  export type asyncHook = (_props: Record<string, any>, _context: hooks.asyncContext) => void | Promise<void>
}
