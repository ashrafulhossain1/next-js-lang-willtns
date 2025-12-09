import SignatureRightSide from './SignatureRightSide';
import SignatureLeftSide from './SignatureLeftSide';

export default function ElectronicSignature() {
  return (
    <div className="max-w-[1300px] mx-auto text-black py-20">
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* left */}
        <SignatureLeftSide></SignatureLeftSide>
        {/* right */}
        <div className="w-full md:w-3/5 border border-gray-300 px-4 rounded-2xl md:rounded-3xl p-4">
          <SignatureRightSide></SignatureRightSide>
        </div>
      </div>
    </div>
  );
}
