<?php
/**
 * MAD O MEDIA - Official Website Contact & Query Handler
 * Sends validated client inquiries to info@mad0media.com
 */

// Strict CORS and Header Setup
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Content-Type: application/json; charset=UTF-8');

// Respond to OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'preflight_ok']);
    exit;
}

// Disallow non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Please submit via POST.']);
    exit;
}

// Read raw request body
$rawInput = file_get_contents('php://input');
$data = [];

if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
}

// Fallback to standard $_POST if JSON body was empty
if (empty($data) && !empty($_POST)) {
    $data = $_POST;
}

// Anti-spam Honeypot Check
if (!empty($data['_gotcha']) || !empty($data['honeypot']) || !empty($data['website_url'])) {
    // Silently succeed for automated bots
    echo json_encode(['success' => true, 'message' => 'Inquiry received.']);
    exit;
}

// Extract & sanitize fields
$name    = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email   = isset($data['email']) ? trim($data['email']) : '';
$phone   = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : (isset($data['interest']) ? trim(strip_tags($data['interest'])) : '');
$company = isset($data['company']) ? trim(strip_tags($data['company'])) : '';
$budget  = isset($data['budget']) ? trim(strip_tags($data['budget'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$source  = isset($data['source']) ? trim(strip_tags($data['source'])) : 'Website Query Form';

// Sanitize against email header injection (CRLF)
$name  = str_replace(["\r", "\n"], ' ', $name);
$email = str_replace(["\r", "\n"], '', $email);

// Basic validations
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter your full name.']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

if (empty($message) && empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your message or contact number.']);
    exit;
}

// Default fallback values
if (empty($service)) {
    $service = 'General Inquiry';
}
if (empty($phone)) {
    $phone = 'Not provided';
}
if (empty($company)) {
    $company = 'Not provided';
}
if (empty($budget)) {
    $budget = 'Not specified';
}
if (empty($message)) {
    $message = 'No additional comments provided.';
}

// Email recipient & subject
$to = 'info@mad0media.com';
$subject = "New Query from {$name} - MAD O MEDIA";

// Submission metadata
date_default_timezone_set('Asia/Kolkata');
$timestamp = date('d M Y, h:i:s A') . ' IST';
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// WhatsApp direct reply link
$cleanPhoneForWa = preg_replace('/[^0-9]/', '', $phone);
$waLink = !empty($cleanPhoneForWa) ? "https://wa.me/{$cleanPhoneForWa}" : "";

// Generate multipart boundary
$boundary = "----=_Part_" . md5(uniqid(mt_rand(), true));

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'From: MAD O MEDIA Website <info@mad0media.com>';
$headers[] = 'Reply-To: ' . '"' . addcslashes($name, '"') . '" <' . $email . '>';
$headers[] = 'Return-Path: <info@mad0media.com>';
$headers[] = 'X-Mailer: MAD O MEDIA Mailer / PHP ' . phpversion();
$headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';

// Plain text version
$plainText = <<<TXT
NEW WEBSITE QUERY - MAD O MEDIA
=============================================

Submission Details:
- Full Name: {$name}
- Email Address: {$email}
- Phone / WhatsApp: {$phone}
- Service / Discipline: {$service}
- Company / Brand: {$company}
- Budget Range: {$budget}
- Submitted At: {$timestamp}
- Client IP: {$clientIp}
- Source: {$source}

Client Query / Message:
---------------------------------------------
{$message}

=============================================
To reply to this client, simply reply directly to this email or reach out on WhatsApp at:
{$phone}
TXT;

// Clean HTML template
$escapedName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$escapedEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$escapedPhone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$escapedService = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
$escapedCompany = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$escapedBudget  = htmlspecialchars($budget, ENT_QUOTES, 'UTF-8');
$escapedSource  = htmlspecialchars($source, ENT_QUOTES, 'UTF-8');
$escapedMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$waButtonHtml = "";
if (!empty($cleanPhoneForWa)) {
    $waButtonHtml = "<a href=\"{$waLink}\" style=\"display: inline-block; padding: 6px 12px; margin-left: 8px; background-color: #25D366; color: #000; font-size: 11px; font-weight: bold; text-decoration: none; border-radius: 6px;\">Chat on WhatsApp</a>";
}

$htmlContent = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Website Query</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f0f11; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f4f4f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f0f11; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Branded Top Header -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #18181b 0%, #201525 100%); border-bottom: 2px solid #FF3EB5;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                      MAD <span style="color: #FF3EB5;">O</span> MEDIA
                    </h1>
                    <p style="margin: 4px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #a1a1aa;">
                      New Website Inquiry Received
                    </p>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 6px 14px; background-color: rgba(255, 62, 181, 0.15); border: 1px solid rgba(255, 62, 181, 0.35); border-radius: 20px; font-size: 11px; font-weight: 700; color: #FF3EB5; letter-spacing: 0.5px;">
                      {$escapedService}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Inquiry Body Details -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #d4d4d8; line-height: 1.5;">
                A new client inquiry was submitted through the <strong>{$escapedSource}</strong> on mad0media.com:
              </p>

              <!-- Client Info Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="10" border="0" style="background-color: #121214; border: 1px solid #27272a; border-radius: 12px; margin-bottom: 24px; font-size: 14px;">
                <tr>
                  <td width="35%" style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Client Name:</td>
                  <td style="color: #ffffff; font-weight: bold; border-bottom: 1px solid #27272a;">{$escapedName}</td>
                </tr>
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Email Address:</td>
                  <td style="color: #FF3EB5; font-weight: bold; border-bottom: 1px solid #27272a;">
                    <a href="mailto:{$escapedEmail}" style="color: #FF3EB5; text-decoration: none;">{$escapedEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Phone / WhatsApp:</td>
                  <td style="color: #ffffff; border-bottom: 1px solid #27272a;">
                    <a href="tel:{$escapedPhone}" style="color: #ffffff; text-decoration: none; font-weight: 600;">{$escapedPhone}</a>
                    {$waButtonHtml}
                  </td>
                </tr>
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Service / Discipline:</td>
                  <td style="color: #ffffff; font-weight: 600; border-bottom: 1px solid #27272a;">{$escapedService}</td>
                </tr>
HTML;

if ($escapedCompany !== 'Not provided') {
    $htmlContent .= <<<HTML
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Company / Brand:</td>
                  <td style="color: #ffffff; border-bottom: 1px solid #27272a;">{$escapedCompany}</td>
                </tr>
HTML;
}

if ($escapedBudget !== 'Not specified') {
    $htmlContent .= <<<HTML
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600; border-bottom: 1px solid #27272a;">Budget:</td>
                  <td style="color: #ffffff; border-bottom: 1px solid #27272a;">{$escapedBudget}</td>
                </tr>
HTML;
}

$htmlContent .= <<<HTML
                <tr>
                  <td style="color: #a1a1aa; font-weight: 600;">Submitted At:</td>
                  <td style="color: #a1a1aa; font-size: 12px;">{$timestamp}</td>
                </tr>
              </table>

              <!-- Message / Query Section -->
              <h3 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa;">
                Client Query / Project Details:
              </h3>
              <div style="padding: 18px 20px; background-color: #121214; border: 1px solid #27272a; border-left: 3px solid #FF3EB5; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #f4f4f5; margin-bottom: 28px;">
                {$escapedMessage}
              </div>

              <!-- Quick Action Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:{$escapedEmail}?subject=Re: Project Inquiry - MAD O MEDIA" style="display: inline-block; padding: 14px 28px; background-color: #FF3EB5; color: #000000; font-size: 14px; font-weight: bold; text-decoration: none; border-radius: 30px; box-shadow: 0 4px 15px rgba(255, 62, 181, 0.4);">
                      Reply Directly to {$escapedName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #121214; border-top: 1px solid #27272a; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #71717a;">
                This notification was generated automatically by the inquiry system at <a href="https://mad0media.com" style="color: #a1a1aa; text-decoration: underline;">mad0media.com</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

// Assemble full multipart message body
$fullBody = "--{$boundary}\r\n" .
            "Content-Type: text/plain; charset=UTF-8\r\n" .
            "Content-Transfer-Encoding: 8bit\r\n\r\n" .
            $plainText . "\r\n\r\n" .
            "--{$boundary}\r\n" .
            "Content-Type: text/html; charset=UTF-8\r\n" .
            "Content-Transfer-Encoding: 8bit\r\n\r\n" .
            $htmlContent . "\r\n\r\n" .
            "--{$boundary}--";

// Execute PHP mail
$mailSent = @mail($to, $subject, $fullBody, implode("\r\n", $headers), "-finfo@mad0media.com");

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your query has been delivered to info@mad0media.com. We will get back to you within 24 hours.'
    ]);
} else {
    // If native mail failed, return error with 500
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Unable to send message via mail service. Please contact info@mad0media.com directly or via WhatsApp.'
    ]);
}
