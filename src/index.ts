/**
 * Base Identity Protocol - Main Entry Point
 * 
 * A comprehensive decentralized identity protocol built specifically for Base blockchain,
 * providing verifiable credentials, privacy-preserving authentication, and seamless
 * identity management for Web3 applications.
 * 
 * @author wearedood
 * @version 1.0.0
 */

export { BaseIdentityManager } from './core/IdentityManager';
export { DIDRegistry } from './core/DIDRegistry';
export { CredentialManager } from './core/CredentialManager';
export { AuthenticationManager } from './core/AuthenticationManager';
export { PrivacyManager } from './core/PrivacyManager';

export { 
  BaseIdentityConfig,
  DIDDocument,
  VerifiableCredential,
  VerifiablePresentation,
  AuthenticationResult,
  IdentityProof,
  PrivacySettings
} from './types';

export {
  IdentityError,
  AuthenticationError,
  CredentialError,
  PrivacyError
} from './errors';

export { BaseIdentityUtils } from './utils';

/**
 * Default configuration for Base Identity Protocol
 */
export const DEFAULT_CONFIG: BaseIdentityConfig = {
  network: 'base-mainnet',
  rpcUrl: 'https://mainnet.base.org',
  registryAddress: '0x1234567890123456789012345678901234567890', // Placeholder
  enablePrivacy: true,
  enableZKProofs: true,
  credentialTTL: 86400000, // 24 hours
  authenticationTTL: 3600000, // 1 hour
};

/**
 * Create a new Base Identity Manager instance with default configuration
 * 
 * @param config Optional configuration overrides
 * @returns BaseIdentityManager instance
 */
export function createBaseIdentity(config?: Partial<BaseIdentityConfig>): BaseIdentityManager {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  return new BaseIdentityManager(finalConfig);
}

/**
 * Utility function to validate a DID string
 * 
 * @param did The DID string to validate
 * @returns boolean indicating if the DID is valid
 */
export function isValidDID(did: string): boolean {
  const didRegex = /^did:base:[a-zA-Z0-9]{32,}$/;
  return didRegex.test(did);
}

/**
 * Generate a new DID for Base blockchain
 * 
 * @param publicKey The public key to derive the DID from
 * @returns A valid Base DID string
 */
export function generateBaseDID(publicKey: string): string {
  // Implementation would hash the public key and format as Base DID
  const hash = BaseIdentityUtils.hashPublicKey(publicKey);
  return `did:base:${hash}`;
}
