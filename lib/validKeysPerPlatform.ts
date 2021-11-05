type PlatformKeys = {
  [key: string]: readonly string[]
};

// Helper function which infers keys
// The idea here is to have strong typed
// configuration object so when we type
// platform: keyof typeof validKeysPerPlatform;
// in component like Form (check the form component)
// to not be possible to write:
// <Form platform='Pravetz' ... otherwise it will be
// possible.
const asInferredKeyTypes = <T extends PlatformKeys>(cfg: T) : Record<keyof T, readonly string[]> => {
  return cfg;
}

const validKeysPerPlatform = asInferredKeyTypes({
  'windows': [
    'ASDF-ASDF',
    'WINA-CTVK',
  ],
  'ios': [
    'IOSA-CTVK',
  ],
  'android': [
    'ANDR-ACTV',
  ],
});

export type validKeyPlatform = keyof typeof validKeysPerPlatform;

export const isValidPlatform = (platform: string): platform is validKeyPlatform => {
   return Object.keys(validKeysPerPlatform).includes(platform);
}

export default validKeysPerPlatform;