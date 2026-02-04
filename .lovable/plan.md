
# Make.com Webhook Integration for Lead Capture

## Overview
Integrate your Make.com webhook URL into the contact form to automatically capture leads when users click "Submit Enquiry".

## What Will Happen
When someone fills out the form and clicks "Submit Enquiry":
1. Form data is validated (all fields including email)
2. Lead data is sent to your Make.com webhook
3. WhatsApp notification opens (existing behavior)
4. User is redirected to Thank You page

## Data Sent to Make.com
The webhook will receive:
- `name` - Full name
- `business_name` - Business name  
- `email` - Email address
- `phone` - Phone number
- `primary_goal` - Selected goal (readable label like "Lead Generation")
- `source` - "ScaleCraftSolutions Landing Page"
- `submitted_at` - Timestamp

---

## Technical Implementation

### File to Modify
`src/components/ContactFormModal.tsx`

### Changes

1. **Add webhook URL constant** at the top of the file:
```typescript
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/9d9z5t2eongcospriftngpdwvhszo84d";
```

2. **Add goal label mapping** to convert form values to readable text:
```typescript
const goalLabelMap: Record<string, string> = {
  "lead-generation": "Lead Generation",
  "brand-awareness": "Brand Awareness",
  "sales-growth": "Sales Growth",
  "seo-rankings": "SEO Rankings",
  "social-media": "Social Media Growth",
  "other": "Other",
};
```

3. **Update handleSubmit function** to:
   - Send POST request to Make.com webhook before WhatsApp
   - Include all form fields in the payload
   - Add error handling with try/catch
   - Keep existing WhatsApp notification as backup

### Updated Submit Flow
```text
User clicks "Submit Enquiry"
         │
         ▼
   Validate all fields
         │
         ▼
   Send to Make.com webhook ──► Your Make.com scenario receives lead
         │
         ▼
   Open WhatsApp notification (backup/alert)
         │
         ▼
   Redirect to Thank You page
```

---

## Make.com Setup (On Your Side)
After approval, you'll need to set up your Make.com scenario:

1. Your webhook is already created: `https://hook.eu1.make.com/9d9z5t2eongcospriftngpdwvhszo84d`
2. Add modules to process leads (e.g., Google Sheets, Email, CRM)
3. Test by submitting a form on your website

## Notes
- The webhook uses `no-cors` mode to avoid browser CORS issues
- Form submission continues even if webhook fails (WhatsApp still works as backup)
- Email field (newly added) will be included in the webhook payload
