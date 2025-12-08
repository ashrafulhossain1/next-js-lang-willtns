import SignatureRightSide from './SignatureRightSide';
import SignatureLeftSide from './SignatureLeftSide';

export default function ElectronicSignature() {
  return (
    <div className="max-w-[1300px] mx-auto text-black py-20">
      <div className="flex justify-between items-center">
        {/* left */}
        <SignatureLeftSide></SignatureLeftSide>
        {/* right */}
        <div className="w-3/5 border border-gray-300 rounded-3xl">
          <SignatureRightSide></SignatureRightSide>
        </div>
      </div>
    </div>
  );
}
