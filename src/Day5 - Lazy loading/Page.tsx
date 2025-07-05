import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { LazyUserDetail } from './LazyUserDetail';

// tiny spinner
const Spinner = () => <div role="status">Loading…</div>;

export function Page5() {
  return (
    <ErrorBoundary fallback={<p role="alert">Something broke.</p>}>
      <Suspense fallback={<Spinner />}>
        <LazyUserDetail />          {/* may suspend OR throw */}
      </Suspense>
    </ErrorBoundary>
  );
}