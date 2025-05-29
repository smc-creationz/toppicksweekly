export default function PrivacyPolicyPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm leading-relaxed">
        We respect your privacy. This site does not collect personal information directly. 
        Third-party affiliate services, such as Amazon, may use cookies to track referral activity.
      </p>
      <p className="text-sm mt-4 leading-relaxed">
        For more details, see Amazon’s{" "}
        <a
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"
          className="underline text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Notice
        </a>.
      </p>
    </main>
  );
}
