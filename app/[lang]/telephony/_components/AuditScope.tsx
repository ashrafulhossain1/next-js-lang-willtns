import AuditScopeCard from './AuditScopeCard';

export default function AuditScope() {
  return (
    <div className="relative py-10 w-full max-w-[1300px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center relative -top-32">
        <AuditScopeCard />
        <AuditScopeCard />
        <AuditScopeCard />
      </div>
    </div>
  );
}
