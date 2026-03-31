// Content for the pua-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpPUAApi from './pua-api/csharp/pua-api.md'
import curlExamples from './pua-api/curl/examples.md'
import goPUAApi from './pua-api/go/pua-api.md'
import javaPUAApi from './pua-api/java/pua-api.md'
import phpPUAApi from './pua-api/php/pua-api.md'
import pythonAgentSdkPatterns from './pua-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './pua-api/python/agent-sdk/README.md'
import pythonPUAApiBatches from './pua-api/python/pua-api/batches.md'
import pythonPUAApiFilesApi from './pua-api/python/pua-api/files-api.md'
import pythonPUAApiReadme from './pua-api/python/pua-api/README.md'
import pythonPUAApiStreaming from './pua-api/python/pua-api/streaming.md'
import pythonPUAApiToolUse from './pua-api/python/pua-api/tool-use.md'
import rubyPUAApi from './pua-api/ruby/pua-api.md'
import skillPrompt from './pua-api/SKILL.md'
import sharedErrorCodes from './pua-api/shared/error-codes.md'
import sharedLiveSources from './pua-api/shared/live-sources.md'
import sharedModels from './pua-api/shared/models.md'
import sharedPromptCaching from './pua-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './pua-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './pua-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './pua-api/typescript/agent-sdk/README.md'
import typescriptPUAApiBatches from './pua-api/typescript/pua-api/batches.md'
import typescriptPUAApiFilesApi from './pua-api/typescript/pua-api/files-api.md'
import typescriptPUAApiReadme from './pua-api/typescript/pua-api/README.md'
import typescriptPUAApiStreaming from './pua-api/typescript/pua-api/streaming.md'
import typescriptPUAApiToolUse from './pua-api/typescript/pua-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - pua-api/SKILL.md (Current Models pricing table)
//   - pua-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'pua-opus-4-6',
  OPUS_NAME: 'PUA Opus 4.6',
  SONNET_ID: 'pua-sonnet-4-6',
  SONNET_NAME: 'PUA Sonnet 4.6',
  HAIKU_ID: 'pua-haiku-4-5',
  HAIKU_NAME: 'PUA Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'pua-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/pua-api.md': csharpPUAApi,
  'curl/examples.md': curlExamples,
  'go/pua-api.md': goPUAApi,
  'java/pua-api.md': javaPUAApi,
  'php/pua-api.md': phpPUAApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/pua-api/README.md': pythonPUAApiReadme,
  'python/pua-api/batches.md': pythonPUAApiBatches,
  'python/pua-api/files-api.md': pythonPUAApiFilesApi,
  'python/pua-api/streaming.md': pythonPUAApiStreaming,
  'python/pua-api/tool-use.md': pythonPUAApiToolUse,
  'ruby/pua-api.md': rubyPUAApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/pua-api/README.md': typescriptPUAApiReadme,
  'typescript/pua-api/batches.md': typescriptPUAApiBatches,
  'typescript/pua-api/files-api.md': typescriptPUAApiFilesApi,
  'typescript/pua-api/streaming.md': typescriptPUAApiStreaming,
  'typescript/pua-api/tool-use.md': typescriptPUAApiToolUse,
}
