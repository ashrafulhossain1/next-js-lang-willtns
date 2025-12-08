export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-r from-[#533589] to-[#30204D] text-white">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6">
        {/* Left side - Copyright */}
        <div>© {year} YourCompanyName. All rights reserved.</div>

        {/* Right side - Made in Canada + Flag */}
        <div className="flex items-center gap-2 justify-center">
          <span>Made in Canada</span>
          <span className="text-2xl">🇨🇦</span>
        </div>
      </div>
    </footer>
  );
}
