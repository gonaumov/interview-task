# Mobisystems interview task
# Activation page project
This is a [Next.js](https://nextjs.org/) project (with TypeScript) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project is to be run locally and its purpose is to create a page, where an user can activate some service by entering an activation key.



## Getting Started

First install the needed dependecies with:

```bash
yarn install
# or
npm install
```

Then run the development server:

```bash
yarn dev
# or
npm run dev
```

By default it will be accessible on `http://localhost:3000`

### Description:

Please implement the design and functionality shown in sample design images:
- **activation-page-windows.jpg**
- **activation-page-mobile.jpg**

The activation page should will be accessible on http://localhost:3000/activate/_{PLATFORM_NAME}_.

Valid paltforms are: `windows`, `ios`, `android`

Valid keys for those platforms are hardcoded and can be found in `lib/validKeysPerPlatform.ts`


A key could be "activated" with the existing API, located at `/api/validate-key`.

The API accepts **POST** requests with the Content-Type of `application/json` and the expected format:
```json
{
    'activationKey': 'ASDF-ASDF',
	'platform': 'windows'
}
```
The response format is the following:
```json
{
    isValid: bool,
    error: string
}
```

### Acceptance criteria:
- The user should be able to enter an activation key manualy, by pasting it or by arriving at the URL with `?key=ASDF-ASDF`
- If the key is invalid, the user should get some kind of visible feedback.
- The user shouldn't be able to enter a character which is not a letter.
- The activation key that the User has to enter consists of letters only, the dash '-' should be inserted automatically before sending the request to the server.
- The platform should be auto populated when making the request to the server.
- Activation of a key should also send the user to a new page, which shows the used activation key and for what platform it was activated.

Usage of external libraries is allowed.

Pixel perfect implementation of the design is not required, the provided images are to be used as guidelines.

### Code Submit
Please organize your code as if it were going into production - then commit your changes to the master branch.