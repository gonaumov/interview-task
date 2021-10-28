import type { NextApiRequest, NextApiResponse } from 'next'
import validKeysPerPlatform from '../../lib/validKeysPerPlatform';

type ActivationKeyResponse = {
  isValid: boolean;
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActivationKeyResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const activationKey: string = req.body['activationKey'];
    const platform: string = req.body['platform'];

    if (!activationKey) {
      return res.status(400).json({ isValid: false, error: 'Activation key is missing.'});
    }

    if (!platform || typeof validKeysPerPlatform[platform] === 'undefined') {
      return res.status(400).json({ isValid: false, error: 'Invalid platform'});
    }

    if (!validKeysPerPlatform[platform].includes(activationKey)) {
      return res.status(400).json({ isValid: false, error: 'Activation key is invalid.'});
    }

    return res.status(200).json({ isValid: true, error: '' });
  } catch (e) {
    console.log(e);
    return res.status(200).json({ isValid: false, error: 'Something went wrong.' });
  }
}
