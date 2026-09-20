# Lead tracking deployment

This project now contains a consent-aware contact form, Firebase lead intake, GA4 `generate_lead` tracking, bilingual thank-you pages, and fields required for later qualified-lead imports.

## Account references

- Firebase project: `accountantsmalta`
- Firebase region: `europe-west1`
- GA4 measurement ID: `G-6L6Z841W2D`
- Google Ads customer ID: `240-666-6395`

The Google Ads customer ID is an account identifier. It is not a conversion tag ID and must not be inserted into `gtag('config', ...)`.

## 1. Firebase prerequisites

In the Firebase console:

1. Confirm that the Firebase **Project ID** is `accountantsmalta` (project number `735530573726`).
2. Upgrade to the Blaze plan before deploying Cloud Functions, if the console requires it.
3. Open **Firestore Database**, choose **Create database**, select production mode, and use a European location.
4. In Firestore TTL settings, enable TTL for collection group `formRateLimits` using field `expiresAt`.

The deployed Firestore rules deny all browser access. The server-side Function uses the Firebase Admin SDK and remains able to create leads.

## 2. Email notifications

The Function uses Resend for two separate messages: an internal lead notification and a bilingual acknowledgement to the customer. Create a Resend account, verify `accountantsmalta.com`, and create an API key. The verified domain must permit the address configured in `LEAD_FROM_EMAIL`. Then run from the project directory:

```powershell
firebase functions:secrets:set RESEND_API_KEY --project accountantsmalta
```

Enter the API key only when prompted. Do not add it to source control.

Create `functions/.env.accountantsmalta` with:

```dotenv
LEAD_NOTIFICATION_EMAIL=info@accountantsmalta.com
LEAD_FROM_EMAIL=XLW Advisory Website <leads@accountantsmalta.com>
CONTACT_ALLOWED_ORIGINS=https://accountantsmalta.com,https://www.accountantsmalta.com,https://accountantsmalta.web.app,http://localhost:3000,http://127.0.0.1:3000
```

Change the recipient if enquiries should go to another monitored mailbox. The customer acknowledgement uses this address as its reply-to address.

## 3. Install and deploy

```powershell
npm install
npm --prefix functions install
npm run check
npm --prefix functions run check
firebase deploy --only firestore,functions,hosting --project accountantsmalta
```

The form posts to `/api/contact`. Firebase Hosting rewrites that path to `submitContact` in `europe-west1`.

## 4. Consent and privacy review

The implementation defaults all optional Google consent signals to `denied` and lets visitors accept, reject, or customise analytics and advertising. A footer button reopens the choices.

Before production launch:

1. Have the privacy wording and retention schedule reviewed for the firm's Malta/EU obligations.
2. Confirm that Google Analytics and Google Ads are listed in the firm's processor register where required.
3. Add Firebase App Check with reCAPTCHA Enterprise after creating a Web App and site key in Firebase. Keep server enforcement off until the token is verified in production traffic.

## 5. GA4 conversion setup

After a successful Firebase response, the browser sends exactly one GA4 `generate_lead` event. It contains only:

- `form_id`
- `language`
- `service`

No name, email, phone, company, or message is sent to GA4.

In GA4:

1. Open **Admin > Events**.
2. Submit a test lead and wait for `generate_lead` to appear.
3. Mark `generate_lead` as a key event.
4. Link GA4 to Google Ads customer `240-666-6395`.

In Google Ads:

1. Open **Goals > Conversions > Summary**.
2. Create a conversion action by importing the GA4 `generate_lead` key event.
3. Name it `Website form submitted`.
4. Set it as **Primary** during the initial data-collection period.
5. Set phone, email, and WhatsApp click events as **Secondary** if they are imported.

## 6. Qualified and converted leads

Every Firestore `leads` record starts with `status: new`. Update the status during follow-up using this controlled sequence:

```text
new -> contacted -> qualified -> proposal -> won
                                  \-> lost
```

Use the captured `gclid`, `gbraid`, `wbraid`, email, phone, consent status, and conversion time to map qualified or won outcomes in Google Ads Data Manager. Recommended conversion actions:

- `Qualified lead`: a real prospect within XLW Advisory's service scope, with a genuine need and agreed next step.
- `Converted lead`: a prospect that has signed an engagement or paid for a service.

Once qualified-lead reporting is stable, make `Qualified lead` the main bidding goal. Keep raw form submissions as an observation or secondary goal so bidding learns from lead quality rather than volume alone.

## 7. Release test checklist

- Reject all: optional storage remains denied and no attribution is retained in local storage.
- Accept all: consent changes to granted and campaign parameters are retained.
- Invalid form: no Firestore lead and no `generate_lead` event.
- Valid form: one lead, one internal notification, one customer acknowledgement, one `generate_lead`, then the correct language thank-you page.
- Firestore: `notificationStatus` and `acknowledgementStatus` both become `sent`; either can independently become `failed` without losing the lead.
- Double click: submit button prevents duplicate requests.
- Refresh thank-you page: no additional lead event.
- Firestore: lead contains source, language, consent, attribution, and `status: new`.
- GA4 DebugView: event contains no personally identifiable information.
- Google Ads: imported test conversion is visible after processing.
